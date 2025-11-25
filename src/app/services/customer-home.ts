import { api } from "@/lib/api-client";
import { API_ENDPOINTS } from "@/lib/constants";
import { loadMockData, createMockResponse, USE_MOCK_DATA } from "@/lib/mock-utils";

type QueryParams = Record<
  string,
  string | number | boolean | null | undefined
>;

export interface TrendingPackagesParams {
  userId?: number;
  pageNo?: number;
  pageSize?: number;
}

function buildUrl(endpoint: string, params?: QueryParams) {
  if (!params) return endpoint;

  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      searchParams.append(key, String(value));
    }
  });

  const hasParams = Array.from(searchParams.keys()).length > 0;
  return hasParams ? `${endpoint}?${searchParams.toString()}` : endpoint;
}

export async function fetchTrendingPackages(
  params: TrendingPackagesParams = {}
) {
  const { userId = 0, pageNo = 1, pageSize = 10 } = params;

  const endpoint = buildUrl(
    API_ENDPOINTS.customerHome.getTrendingPackages,
    {
      userid: userId,
      pageno: pageNo,
      pagesize: pageSize,
    }
  );

  // Check for mock data first
  if (USE_MOCK_DATA) {
    const mockData = await loadMockData(endpoint);
    if (mockData) {
      return createMockResponse(mockData);
    }
  }

  return api.get(endpoint);
}

export async function fetchDestinations(params?: QueryParams) {
  const endpoint = buildUrl(
    API_ENDPOINTS.customerHome.getDestinations,
    params
  );

  // Check for mock data first
  if (USE_MOCK_DATA) {
    const mockData = await loadMockData(endpoint);
    if (mockData) {
      return createMockResponse(mockData);
    }
  }

  return api.get(endpoint);
}

export async function fetchSearchDropdownValues(params?: QueryParams) {
  const endpoint = buildUrl(
    API_ENDPOINTS.customerHome.getSearchDropdownValues,
    params
  );

  // Check for mock data first
  if (USE_MOCK_DATA) {
    const mockData = await loadMockData(endpoint);
    if (mockData) {
      return createMockResponse(mockData);
    }
  }

  return api.get(endpoint);
}

export async function fetchTravelGoals(params?: QueryParams) {
  const endpoint = buildUrl(
    API_ENDPOINTS.customerHome.getTravelGoals,
    params
  );

  // Check for mock data first
  if (USE_MOCK_DATA) {
    const mockData = await loadMockData(endpoint);
    if (mockData) {
      return createMockResponse(mockData);
    }
  }

  return api.get(endpoint);
}

export async function fetchStories(params?: QueryParams) {
  const endpoint = buildUrl(
    API_ENDPOINTS.customerHome.getStories,
    params
  );

  // Check for mock data first
  if (USE_MOCK_DATA) {
    const mockData = await loadMockData(endpoint);
    if (mockData) {
      return createMockResponse(mockData);
    }
  }

  return api.get(endpoint);
}

export async function fetchSharedExperiences(params?: QueryParams) {
  const endpoint = buildUrl(
    API_ENDPOINTS.customerHome.getSharedExperiences,
    params
  );

  // Check for mock data first
  if (USE_MOCK_DATA) {
    const mockData = await loadMockData(endpoint);
    if (mockData) {
      return createMockResponse(mockData);
    }
  }

  return api.get(endpoint);
}

