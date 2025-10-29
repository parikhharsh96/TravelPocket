"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Crown } from "lucide-react"
import Script from "next/script"
import { useToast } from "@/hooks/use-toast"
import { getRazorpayConfig } from "@/actions/razorpay-config"

declare global {
  interface Window {
    Razorpay: any
  }
}

interface BookingSummaryProps {
  onPaymentSuccess: (details: { bookingId: string; customerName: string; customerEmail: string }) => void
}

export function BookingSummary({ onPaymentSuccess }: BookingSummaryProps) {
  const [paymentOption, setPaymentOption] = useState("booking-amount")
  const [useRewardPoints, setUseRewardPoints] = useState(true)
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [razorpayKeyId, setRazorpayKeyId] = useState<string>("")
  const { toast } = useToast()

  useEffect(() => {
    getRazorpayConfig().then((config) => {
      setRazorpayKeyId(config.keyId)
    })
  }, [])

  const getTotalAmount = () => {
    if (paymentOption === "booking-amount") {
      return useRewardPoints ? 23650 : 23682
    } else {
      return 275000
    }
  }

  const handlePayment = async () => {
    setIsProcessing(true)

    try {
      const amount = getTotalAmount()

      // Create order on backend
      const response = await fetch("/api/create-razorpay-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount,
          currency: "INR",
          receipt: `receipt_${Date.now()}`,
        }),
      })

      const orderData = await response.json()

      if (!response.ok) {
        throw new Error(orderData.error || "Failed to create order")
      }

      if (orderData.isMockMode) {
        console.log("[v0] Mock mode detected - simulating payment flow")

        // Simulate a delay for payment processing
        await new Promise((resolve) => setTimeout(resolve, 2000))

        // Simulate successful payment verification
        const verifyResponse = await fetch("/api/verify-razorpay-payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            razorpay_order_id: orderData.orderId,
            razorpay_payment_id: `pay_mock_${Date.now()}`,
            razorpay_signature: "mock_signature",
            isMockMode: true,
          }),
        })

        const verifyData = await verifyResponse.json()

        if (verifyData.success) {
          const bookingDetails = {
            bookingId: Math.floor(Math.random() * 9000000 + 1000000).toString(),
            customerName: "Shivam Tripathi",
            customerEmail: "shivamtripathi@gmail.com",
          }

          onPaymentSuccess(bookingDetails)

          toast({
            title: "Payment Successful! (Mock Mode)",
            description: "Your booking has been confirmed. This is a demo payment.",
          })
          console.log("[v0] Mock payment completed successfully")
        }

        setIsProcessing(false)
        return
      }

      const options = {
        key: razorpayKeyId,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "TravelPocket",
        description: "Kailash Mansarovar Yatra Booking",
        order_id: orderData.orderId,
        handler: async (response: any) => {
          try {
            const verifyResponse = await fetch("/api/verify-razorpay-payment", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                isMockMode: false,
              }),
            })

            const verifyData = await verifyResponse.json()

            if (verifyData.success) {
              const bookingDetails = {
                bookingId: Math.floor(Math.random() * 9000000 + 1000000).toString(),
                customerName: "Shivam Tripathi",
                customerEmail: "shivamtripathi@gmail.com",
              }

              onPaymentSuccess(bookingDetails)

              toast({
                title: "Payment Successful!",
                description: "Your booking has been confirmed.",
              })
              console.log("[v0] Payment verified successfully:", response)
            } else {
              toast({
                title: "Payment Verification Failed",
                description: "Please contact support.",
                variant: "destructive",
              })
            }
          } catch (error) {
            console.error("[v0] Payment verification error:", error)
            toast({
              title: "Verification Error",
              description: "Please contact support.",
              variant: "destructive",
            })
          } finally {
            setIsProcessing(false)
          }
        },
        prefill: {
          name: "",
          email: "",
          contact: "",
        },
        theme: {
          color: "#e97737",
        },
        modal: {
          ondismiss: () => {
            setIsProcessing(false)
            toast({
              title: "Payment Cancelled",
              description: "You cancelled the payment process.",
            })
          },
        },
      }

      const razorpay = new window.Razorpay(options)
      razorpay.open()
    } catch (error) {
      console.error("[v0] Payment error:", error)
      toast({
        title: "Payment Error",
        description: "Failed to initiate payment. Please try again.",
        variant: "destructive",
      })
      setIsProcessing(false)
    }
  }

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />

      <div className="bg-white rounded-lg border border-[#d9d9d9] p-4 md:p-6 lg:sticky lg:top-4">
        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Booking Summary</h2>

        <div className="space-y-3 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-[#5a5a5a] font-medium">PICK UP</span>
            <span className="font-semibold text-[#1c1b1f]">Lucknow</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-[#5a5a5a] font-medium">DEPT. DATE</span>
            <span className="font-semibold text-[#1c1b1f]">10 Sep 2025</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-[#5a5a5a] font-medium">TRAVELLERS</span>
            <span className="font-semibold text-[#1c1b1f]">0 Adult(s) | 0 Child</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-[#5a5a5a] font-medium">ROOMS</span>
            <span className="font-semibold text-[#1c1b1f]">0 Room(s)</span>
          </div>
        </div>

        <div className="border-t-2 border-dotted border-[#1c8ca7] pt-4 md:pt-6 mb-4 md:mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-semibold text-[#5a5a5a]">BASE PRICE</span>
            <span className="text-2xl md:text-3xl font-bold text-[#1c1b1f]">₹2,75,000</span>
          </div>
        </div>

        <div className="border-t-2 border-dotted border-[#1c8ca7] pt-4 md:pt-6 mb-4 md:mb-6">
          <div className="bg-[#fff7f2] p-3 rounded-md mb-4 md:mb-6 flex items-center gap-2 text-xs md:text-sm">
            <Crown className="w-4 h-4 md:w-5 md:h-5 text-[#e97737] fill-[#e97737] flex-shrink-0" />
            <span className="text-[#1c1b1f]">
              You will earn <span className="font-bold text-[#1c1b1f]">👑 2750</span> Reward points on this booking.
            </span>
          </div>

          <RadioGroup value={paymentOption} onValueChange={setPaymentOption} className="space-y-3">
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="booking-amount" id="booking-amount" className="border-[#1c8ca7] text-[#1c8ca7]" />
              <Label htmlFor="booking-amount" className="flex-1 cursor-pointer">
                <div className="flex justify-between items-center">
                  <span className="text-sm md:text-base text-[#1c1b1f] font-medium">Booking Amount</span>
                  <span className="text-sm md:text-base font-bold text-[#1c1b1f]">₹11,000</span>
                </div>
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="full-amount" id="full-amount" className="border-[#1c8ca7] text-[#1c8ca7]" />
              <Label htmlFor="full-amount" className="flex-1 cursor-pointer">
                <div className="flex justify-between items-center">
                  <span className="text-sm md:text-base text-[#1c1b1f] font-medium">Pay Full Amount Now</span>
                  <span className="text-sm md:text-base font-bold text-[#1c1b1f]">₹2,75,000</span>
                </div>
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="border-t-2 border-dotted border-[#1c8ca7] pt-4 md:pt-6 mb-4 md:mb-6">
          <h3 className="text-base md:text-lg font-bold mb-4 text-[#1c1b1f]">Booking Amount Breakup</h3>
          <div className="space-y-3 text-sm">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-[#1c1b1f] font-medium">Booking Amount</span>
                <span className="font-bold text-[#1c1b1f]">₹22,000</span>
              </div>
              <div className="text-[#5a5a5a] text-xs">₹11,000 x 2 Travellers</div>
            </div>

            <div className="border-t border-[#e0e0e0] pt-3">
              <div className="flex justify-between mb-1">
                <span className="text-[#1c1b1f] font-medium">Convenience Fee</span>
                <span className="font-bold text-[#1c1b1f]">₹550</span>
              </div>
              <div className="flex justify-between text-[#5a5a5a] text-xs">
                <span>GST 5 %</span>
                <span>₹1100</span>
              </div>
            </div>

            <div className="border-t border-[#e0e0e0] pt-3">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="reward-points"
                    checked={useRewardPoints}
                    onCheckedChange={(checked) => setUseRewardPoints(checked as boolean)}
                    className="border-[#1c8ca7] data-[state=checked]:bg-[#1c8ca7] data-[state=checked]:border-[#1c8ca7]"
                  />
                  <Label htmlFor="reward-points" className="text-[#1c1b1f] font-medium cursor-pointer text-sm">
                    Use Reward Points
                  </Label>
                </div>
                <span className="font-bold text-[#15a809]">-₹32</span>
              </div>
              <div className="text-[#5a5a5a] text-xs ml-6">
                Your existing reward points
                <br />
                3200 Points
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4 md:mb-6">
          <div className="flex justify-between items-center">
            <span className="font-bold text-base md:text-lg text-[#1c1b1f]">Total Booking Amount</span>
            <span className="text-2xl md:text-3xl font-bold text-[#1c1b1f]">₹{getTotalAmount().toLocaleString()}</span>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-start gap-2">
            <Checkbox
              id="terms"
              checked={acceptTerms}
              onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
              className="border-[#1c8ca7] data-[state=checked]:bg-[#1c8ca7] data-[state=checked]:border-[#1c8ca7] mt-0.5"
            />
            <Label htmlFor="terms" className="text-xs text-[#1c1b1f] cursor-pointer leading-relaxed">
              I have read and accept the PERSONAL DECLARATION AND AGREEMENT, Cancellation Policy and Terms of Service
            </Label>
          </div>
        </div>

        <Button
          className="w-full bg-[#fff0e8] hover:bg-[#ffe5d9] text-[#1c1b1f] font-bold text-sm h-12 rounded-md"
          disabled={!acceptTerms || isProcessing}
          onClick={handlePayment}
        >
          {isProcessing ? "Processing..." : "PROCEED TO PAYMENT"}
        </Button>
      </div>
    </>
  )
}
