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

/**
 * Get token from session storage or localStorage
 */
function getStoredToken(): string | null {
  if (typeof window === 'undefined') return storedToken;
  
  const token = 
    sessionStorage.getItem('auth_token') || 
    localStorage.getItem('auth_token') ||
    storedToken;
  
  return token;
}

/**
 * Set token in storage
 */
function setStoredToken(token: string | null): void {
  storedToken = token;
  if (typeof window !== 'undefined') {
    if (token) {
      sessionStorage.setItem('auth_token', token);
    } else {
      sessionStorage.removeItem('auth_token');
      localStorage.removeItem('auth_token');
    }
  }
}

/**
 * Refresh token by calling the refresh endpoint
 */
async function refreshToken(): Promise<string | null> {
  try {
    const response = await fetch('https://api.crmtravelpocket.cloud/api/Auth/generatetoken', {
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
      setStoredToken(newToken);
      console.log('New token:', newToken);
      return newToken;
    }
  } catch (error) {
    console.error('[API] Token refresh failed:', error);
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

    // Make the request
    const response = await fetch(endpoint, {
      ...options,
      headers,
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