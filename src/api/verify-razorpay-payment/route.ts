import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, isMockMode } = await request.json()

    if (isMockMode) {
      console.log("[v0] Mock payment verification - simulating success")
      return NextResponse.json({
        success: true,
        message: "Mock payment verified successfully",
        isMockMode: true,
      })
    }

    const keySecret = process.env.RAZORPAY_KEY_SECRET

    if (!keySecret) {
      return NextResponse.json(
        {
          success: false,
          message: "Razorpay credentials not configured",
        },
        { status: 500 },
      )
    }

    const crypto = await import("crypto")

    // Create signature
    const sign = razorpay_order_id + "|" + razorpay_payment_id
    const expectedSign = crypto.createHmac("sha256", keySecret).update(sign.toString()).digest("hex")

    // Verify signature
    if (razorpay_signature === expectedSign) {
      // Payment is verified
      // Here you can update your database, send confirmation emails, etc.
      return NextResponse.json({
        success: true,
        message: "Payment verified successfully",
        isMockMode: false,
      })
    } else {
      return NextResponse.json({ success: false, message: "Invalid signature" }, { status: 400 })
    }
  } catch (error) {
    console.error("[v0] Error verifying payment:", error)
    return NextResponse.json({ error: "Failed to verify payment" }, { status: 500 })
  }
}
