import { NextRequest, NextResponse } from "next/server";
import { API_BASE_URL } from "@/lib/constants";

type LoginPayload = {
  username?: string;
  password?: string;
};

export async function POST(request: NextRequest) {
  try {
    const { username, password }: LoginPayload = await request.json();

    if (!username || !password) {
      return NextResponse.json(
        { error: "username and password are required" },
        { status: 400 }
      );
    }

    const upstreamResponse = await fetch(`${API_BASE_URL}/api/Auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await upstreamResponse.json();

    return NextResponse.json(data, {
      status: upstreamResponse.status,
    });
  } catch (error) {
    console.error("[Auth] login failed:", error);
    return NextResponse.json(
      { error: "Failed to login. Please try again." },
      { status: 500 }
    );
  }
}

