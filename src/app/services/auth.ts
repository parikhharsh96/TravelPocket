import { api } from "@/lib/api-client";

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
  return api.post("/api/Auth/login", payload);
}

export async function generateToken(payload: GenerateTokenPayload) {
  return api.post("/api/Auth/generatetoken", payload);
}

