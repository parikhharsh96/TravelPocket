import { NextRequest, NextResponse } from "next/server";
import { API_BASE_URL } from "@/lib/constants";

type GenerateTokenPayload = {
  userId?: number;
  userName?: string;
  role?: string;
};

export async function POST(request: NextRequest) {
  try {
    const { userId, userName, role }: GenerateTokenPayload =
      await request.json();

    if (
      typeof userId !== "number" ||
      !Number.isFinite(userId) ||
      !userName ||
      !role
    ) {
      return NextResponse.json(
        { error: "userId (number), userName, and role are required" },
        { status: 400 }
      );
    }

    const upstreamResponse = await fetch(`${API_BASE_URL}/api/Auth/generatetoken`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ userId, userName, role }),
    });

    const data = await upstreamResponse.json();

    return NextResponse.json(data, {
      status: upstreamResponse.status,
    });
  } catch (error) {
    console.error("[Auth] generate token failed:", error);
    return NextResponse.json(
      { error: "Failed to generate token. Please try again." },
      { status: 500 }
    );
  }
}

