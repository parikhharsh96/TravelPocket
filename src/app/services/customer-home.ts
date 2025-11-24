import { api } from "@/lib/api-client";
import { API_ENDPOINTS } from "@/lib/constants";

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

  return api.get(endpoint);
}

export async function fetchDestinations(params?: QueryParams) {
  const endpoint = buildUrl(
    API_ENDPOINTS.customerHome.getDestinations,
    params
  );

  return api.get(endpoint);
}

export async function fetchSearchDropdownValues(params?: QueryParams) {
  const endpoint = buildUrl(
    API_ENDPOINTS.customerHome.getSearchDropdownValues,
    params
  );

  return api.get(endpoint);
}

export async function fetchTravelGoals(params?: QueryParams) {
  const endpoint = buildUrl(
    API_ENDPOINTS.customerHome.getTravelGoals,
    params
  );

  return api.get(endpoint);
}

export async function fetchStories(params?: QueryParams) {
  const endpoint = buildUrl(
    API_ENDPOINTS.customerHome.getStories,
    params
  );

  return api.get(endpoint);
}

export async function fetchSharedExperiences(params?: QueryParams) {
  const endpoint = buildUrl(
    API_ENDPOINTS.customerHome.getSharedExperiences,
    params
  );

  return api.get(endpoint);
}

