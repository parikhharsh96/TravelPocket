"use server"

export async function getRazorpayConfig() {
  // Return the public Razorpay Key ID
  // This is safe to expose to the client as it's designed to be public
  const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_mock_key_id"
  const isMockMode = !process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET

  return {
    keyId,
    isMockMode,
  }
}
