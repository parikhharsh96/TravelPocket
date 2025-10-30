import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { amount, currency = "INR", receipt } = await request.json()

    const keyId = process.env.RAZORPAY_KEY_ID
    const keySecret = process.env.RAZORPAY_KEY_SECRET
    const isMockMode = !keyId || !keySecret

    if (isMockMode) {
      console.log("[v0] Running in MOCK mode - no real Razorpay credentials configured")
      return NextResponse.json({
        orderId: `order_mock_${Date.now()}`,
        amount: amount * 100,
        currency,
        isMockMode: true,
      })
    }

    const Razorpay = (await import("razorpay")).default

    // Initialize Razorpay instance with real credentials
    const razorpay = new Razorpay({
      key_id: keyId,
      key_secret: keySecret,
    })

    // Create order
    const order = await razorpay.orders.create({
      amount: amount * 100, // Razorpay expects amount in paise
      currency,
      receipt,
    })

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      isMockMode: false,
    })
  } catch (error) {
    console.error("[v0] Error creating Razorpay order:", error)
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 })
  }
}
