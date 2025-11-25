import { api } from "@/lib/api-client";
import { loadMockData, createMockResponse, USE_MOCK_DATA } from "@/lib/mock-utils";

export interface LoginPayload {
  username: string;
  password: string;
}

export interface GenerateTokenPayload {
  userId: number;
  userName: string;
  role: string;
}

export async function login(payload: LoginPayload) {
  const endpoint = "/api/Auth/login";

  // Check for mock data first
  if (USE_MOCK_DATA) {
    const mockData = await loadMockData(endpoint);
    if (mockData) {
      return createMockResponse(mockData);
    }
  }

  return api.post(endpoint, payload);
}

export async function generateToken(payload: GenerateTokenPayload) {
  const endpoint = "/api/Auth/generatetoken";

  // Check for mock data first
  if (USE_MOCK_DATA) {
    const mockData = await loadMockData(endpoint);
    if (mockData) {
      return createMockResponse(mockData);
    }
  }

  return api.post(endpoint, payload);
}

