// API client with request interceptor for token management

interface RequestConfig extends RequestInit {
  headers?: Record<string, string>;
}

interface ApiResponse<T = unknown> {
  data?: T;
  error?: string;
  status: number;
}

// Store for managing token
let storedToken: string | null = null;
let tokenGenerationPromise: Promise<string | null> | null = null;

/**
 * Get token from session storage or localStorage
 */
function getStoredToken(): string | null {
  if (typeof window === 'undefined') return storedToken;
  
  const token = sessionStorage.getItem('auth_token');
  const expiry = sessionStorage.getItem('auth_token_expiry');
  
  // Check if token exists and is still valid
  if (token && expiry && Date.now() < parseInt(expiry)) {
    storedToken = token; // Update in-memory cache
    return token;
  }
  
  // Token expired or doesn't exist, clear storage
  if (token || expiry) {
    sessionStorage.removeItem('auth_token');
    sessionStorage.removeItem('auth_token_expiry');
    localStorage.removeItem('auth_token');
    storedToken = null;
  }
  
  return null;
}

/**
 * Set token in storage
 */
function setStoredToken(token: string | null): void {
  storedToken = token;
  if (typeof window !== 'undefined') {
    if (token) {
      // Set token with 30-day expiry
      const expiry = Date.now() + (30 * 24 * 60 * 60 * 1000); // 30 days in milliseconds
      sessionStorage.setItem('auth_token', token);
      sessionStorage.setItem('auth_token_expiry', expiry.toString());
      console.log('Token stored with 30-day expiry');
    } else {
      sessionStorage.removeItem('auth_token');
      sessionStorage.removeItem('auth_token_expiry');
      localStorage.removeItem('auth_token');
    }
  }
}

/**
 * Refresh token by calling the refresh endpoint
 */
import { API_ENDPOINTS } from './constants';

async function refreshToken(): Promise<string | null> {
  try {
    // Check if we already have a valid token before generating new one
    const existingToken = getStoredToken();
    if (existingToken) {
      console.log('Using existing valid token');
      return existingToken;
    }
    
    // If token generation is already in progress, wait for it
    if (tokenGenerationPromise) {
      console.log('Token generation already in progress, waiting...');
      return await tokenGenerationPromise;
    }
    
    // Start token generation and store the promise
    console.log('Generating new token...');
    tokenGenerationPromise = generateNewToken();
    
    const result = await tokenGenerationPromise;
    tokenGenerationPromise = null; // Clear the promise
    
    return result;
  } catch (error) {
    console.error('[API] Token refresh failed:', error);
    tokenGenerationPromise = null; // Clear the promise on error
    return null;
  }
}

async function generateNewToken(): Promise<string | null> {
  const response = await fetch(API_ENDPOINTS.auth.generateToken, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "userId": 2,
      "userName": "guest",
      "role": "guest"
    }),
  });

  if (response.ok) {
    const responseData = await response.json();
    const newToken = responseData?.data?.token;
    if (newToken) {
      setStoredToken(newToken);
      console.log('New token generated and stored');
      return newToken;
    }
  }
  
  return null;
}

/**
 * Main API interceptor - attaches headers and token to all requests
 */
async function apiCall<T = unknown>(
  endpoint: string,
  options: RequestConfig = {}
): Promise<ApiResponse<T>> {
  try {
    // Get current token
    let token = getStoredToken();

    // If no token, try to refresh it
    if (!token) {
      token = await refreshToken();
    }

    // Build headers
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'Accept': '*/*',
      ...options.headers,
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const method = (options.method || 'GET').toUpperCase();
    console.info('[API] Request start', {
      method,
      endpoint,
    });

    const response = await fetch(endpoint, {
      ...options,
      headers,
    });

    console.info('[API] Response received', {
      method,
      endpoint,
      status: response.status,
    });

    if (response.status === 401) {
      const newToken = await refreshToken();

      if (newToken) {
        // Retry the request with new token
        const retryHeaders = {
          ...headers,
          'Authorization': `Bearer ${newToken}`,
        };

        const retryResponse = await fetch(endpoint, {
          ...options,
          headers: retryHeaders,
          body: options.body,
        });

        console.info('[API] Retry response received', {
          method,
          endpoint,
          status: retryResponse.status,
        });

        if (!retryResponse.ok) {
          return {
            error: `Request failed: ${retryResponse.statusText}`,
            status: retryResponse.status,
          };
        }

        const data = await retryResponse.json();
        return {
          data: data as T,
          status: retryResponse.status,
        };
      } else {
        // Refresh failed, redirect to login
        if (typeof window !== 'undefined') {
          window.location.href = '/';
        }
        return {
          error: 'Authentication failed. Redirecting to login.',
          status: 401,
        };
      }
    }

    if (!response.ok) {
      return {
        error: `Request failed: ${response.statusText}`,
        status: response.status,
      };
    }

    const data = await response.json();
    return {
      data: data as T,
      status: response.status,
    };
  } catch (error) {
    console.error('[API] Request error:', error);
    return {
      error: error instanceof Error ? error.message : 'Unknown error occurred',
      status: 0,
    };
  }
}

/**
 * Helper methods for common HTTP methods
 */
export const api = {
  get: <T = unknown>(endpoint: string, options?: RequestConfig) =>
    apiCall<T>(endpoint, { ...options, method: 'GET' }),

  post: <T = unknown>(endpoint: string, body?: unknown, options?: RequestConfig) =>
    apiCall<T>(endpoint, {
      ...options,
      method: 'POST',
      body: body ? JSON.stringify(body) : undefined,
    }),

  put: <T = unknown>(endpoint: string, body?: unknown, options?: RequestConfig) =>
    apiCall<T>(endpoint, {
      ...options,
      method: 'PUT',
      body: body ? JSON.stringify(body) : undefined,
    }),

  patch: <T = unknown>(endpoint: string, body?: unknown, options?: RequestConfig) =>
    apiCall<T>(endpoint, {
      ...options,
      method: 'PATCH',
      body: body ? JSON.stringify(body) : undefined,
    }),

  delete: <T = unknown>(endpoint: string, options?: RequestConfig) =>
    apiCall<T>(endpoint, { ...options, method: 'DELETE' }),

  // Token management methods
  setToken: setStoredToken,
  getToken: getStoredToken,
  clearToken: () => setStoredToken(null),
  refreshToken,
};

export default api;