/**
 * Mock mode configuration
 * Set NEXT_PUBLIC_USE_MOCK_DATA=true in .env.local to enable mock mode
 */
export const USE_MOCK_DATA =
  process.env.NEXT_PUBLIC_USE_MOCK_DATA === "true" ||
  process.env.NODE_ENV === "development" && process.env.NEXT_PUBLIC_USE_MOCK_DATA !== "false";

/**
 * Map API endpoints to mock file paths
 */
const MOCK_FILE_MAP: Record<string, string> = {
  // Customer Home endpoints
  "gettrendingpackages": "customer-home/getTrendingPackages.json",
  "getdestinations": "customer-home/getDestinations.json",
  "getsearchdropdownvalues": "customer-home/getSearchDropdownValues.json",
  "gettravelgoals": "customer-home/getTravelGoals.json",
  "getstories": "customer-home/getStories.json",
  "getsharedexperiences": "customer-home/getSharedExperiences.json",
  
  // Auth endpoints
  "login": "auth/login.json",
  "generatetoken": "auth/generatetoken.json",
  
  // Booking endpoints (add as needed)
  "getcustomerbysearch": "booking/getCustomerBySearch.json",
  "saveenquiry": "booking/saveEnquiry.json",
  "getallbookings": "booking/getAllBookings.json",
  "getenquiry": "booking/getEnquiry.json",
  "getenquiries": "booking/getEnquiries.json",
  "addproposal": "booking/addProposal.json",
};

/**
 * Get mock file path from API endpoint
 */
function getMockFilePath(endpoint: string): string | null {
  // Extract the API method name from the endpoint
  // e.g., "/api/CustomerHome/gettrendingpackages" -> "gettrendingpackages"
  const parts = endpoint.split("/");
  const methodName = parts[parts.length - 1]?.toLowerCase();
  
  if (!methodName || !MOCK_FILE_MAP[methodName]) {
    return null;
  }
  
  return MOCK_FILE_MAP[methodName];
}

/**
 * Static import map for mock data
 * This ensures Next.js can properly bundle the JSON files
 */
const mockDataImports: Record<string, () => Promise<any>> = {
  "customer-home/getTrendingPackages.json": () => import("@/data/mocks/customer-home/getTrendingPackages.json"),
  "customer-home/getDestinations.json": () => import("@/data/mocks/customer-home/getDestinations.json"),
  "customer-home/getSearchDropdownValues.json": () => import("@/data/mocks/customer-home/getSearchDropdownValues.json"),
  "customer-home/getTravelGoals.json": () => import("@/data/mocks/customer-home/getTravelGoals.json"),
  "customer-home/getStories.json": () => import("@/data/mocks/customer-home/getStories.json"),
  "customer-home/getSharedExperiences.json": () => import("@/data/mocks/customer-home/getSharedExperiences.json"),
  "auth/login.json": () => import("@/data/mocks/auth/login.json"),
  "auth/generatetoken.json": () => import("@/data/mocks/auth/generatetoken.json"),
};

/**
 * Load mock data from JSON file
 */
export async function loadMockData<T = unknown>(endpoint: string): Promise<T | null> {
  if (!USE_MOCK_DATA) {
    return null;
  }

  try {
    const mockPath = getMockFilePath(endpoint);
    
    if (!mockPath) {
      console.warn(`[Mock] No mock file found for endpoint: ${endpoint}`);
      return null;
    }

    // Use static import map for reliable imports
    const importFn = mockDataImports[mockPath];
    
    if (!importFn) {
      console.warn(`[Mock] No import function found for: ${mockPath}`);
      return null;
    }

    const mockModule = await importFn();
    
    // Handle both default export and named export
    const mockData = mockModule.default || mockModule;
    
    console.log(`[Mock] Loading mock data for: ${endpoint} from ${mockPath}`);
    
    return mockData as T;
  } catch (error) {
    console.error(`[Mock] Failed to load mock data for ${endpoint}:`, error);
    return null;
  }
}

/**
 * Create a mock API response
 */
export function createMockResponse<T>(data: T, status: number = 200): {
  data: T;
  status: number;
  error?: undefined;
} {
  return {
    data,
    status,
  };
}

