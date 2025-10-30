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

      <div className="rounded-[8px] bg-white p-4 md:p-6">
        <h2 className="text-black font-['Figtree'] text-[18px] md:text-[20px] font-semibold leading-normal mb-4 md:mb-6">Booking Summary</h2>

        <div className="space-y-3 mb-4">
          <div className="flex justify-between">
            <span className="text-[#5A5A5A] font-['Figtree'] text-[12px] md:text-[14px] not-italic font-normal leading-normal uppercase">PICK UP</span>
            <span className="text-black font-['Figtree'] text-[12px] md:text-[14px] not-italic font-semibold leading-normal">Lucknow</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#5A5A5A] font-['Figtree'] text-[12px] md:text-[14px] not-italic font-normal leading-normal uppercase">DEPT. DATE</span>
            <span className="text-black font-['Figtree'] text-[12px] md:text-[14px] not-italic font-semibold leading-normal">10 Sep 2025</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#5A5A5A] font-['Figtree'] text-[12px] md:text-[14px] not-italic font-normal leading-normal uppercase">TRAVELLERS</span>
            <span className="text-[#5A5A5A] font-['Figtree'] text-[12px] md:text-[14px] not-italic font-semibold leading-normal">0 Adult(s) | 0 Child</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#5A5A5A] font-['Figtree'] text-[12px] md:text-[14px] not-italic font-normal leading-normal uppercase">ROOMS</span>
            <span className="text-[#5A5A5A] font-['Figtree'] text-[12px] md:text-[14px] not-italic font-semibold leading-normal">0 Room(s)</span>
          </div>
        </div>

        <div className="border-t-2 border-dotted border-[#1C8CA7] pt-4 md:pt-6 mb-4 md:mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-[#5A5A5A] font-['Figtree'] text-[18px] md:text-[20px] not-italic font-normal leading-normal uppercase">BASE PRICE</span>
            <span className="text-[#333] text-right font-['Figtree'] text-[18px] md:text-[20px] not-italic font-semibold leading-[24px]">₹2,75,000</span>
          </div>
        </div>

        <div className="border-t-2 border-dotted border-[#1c8ca7] pt-4 md:pt-6 mb-4 md:mb-6">
          <div className="bg-[#FFF0E8] rounded-[4px] p-3 mb-4 md:mb-6 flex items-center gap-2 text-xs md:text-sm">
            {/* <Crown className="w-4 h-4 md:w-5 md:h-5 text-[#e97737] fill-[#e97737] flex-shrink-0" /> */}
            <span className="text-[#333] font-['Figtree'] text-[12px] md:text-[14px] font-normal leading-[18px]">
              You will earn <span className="font-semibold text-[#1c1b1f]">👑 2750 Reward points</span> on this booking.
            </span>
          </div>

          <RadioGroup value={paymentOption} onValueChange={setPaymentOption} className="space-y-3">
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="booking-amount" id="booking-amount" className="border-[#1c8ca7] text-[#1c8ca7]" />
              <Label htmlFor="booking-amount" className="flex-1 cursor-pointer">
                <div className="flex justify-between items-center">
                  <span className="text-[#1A2F46] font-['Figtree'] text-[14px] md:text-[16px] font-semibold leading-normal">Booking Amount</span>
                  <span className="text-[#333] text-right font-['Figtree'] text-[14px] md:text-[16px] not-italic font-semibold leading-[24px]">₹11,000</span>
                </div>
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="full-amount" id="full-amount" className="border-[#1c8ca7] text-[#1c8ca7]" />
              <Label htmlFor="full-amount" className="flex-1 cursor-pointer">
                <div className="flex justify-between items-center">
                  <span className="text-[#1A2F46] font-['Figtree'] text-[14px] md:text-[16px] font-semibold leading-normal">Pay Full Amount Now</span>
                  <span className="text-[#5A5A5A] text-right font-['Figtree'] text-[14px] md:text-[16px] not-italic font-semibold leading-[24px]">₹2,75,000</span>
                </div>
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="border-t-2 border-dotted border-[#1C8CA7] pt-4 md:pt-6 mb-4 md:mb-6">
          <h3 className="text-black font-['Figtree'] text-[16px] md:text-[18px] font-semibold leading-normal mb-4">Booking Amount Breakup</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-black font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-normal capitalize">Booking Amount</span>
                <span className="text-black font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-normal">₹22,000</span>
              </div>
              <div className="text-[#5A5A5A] font-['Figtree'] text-[10px] md:text-[12px] font-normal leading-normal">₹11,000 x 2 Travellers</div>
            </div>

            <div className="border-t border-[#D2D8E4] pt-3">
              <div className="flex justify-between mb-1">
                <span className="text-black font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-normal capitalize">Convenience Fee</span>
                <span className="text-black font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-normal">₹550</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#1A2F46] font-['Figtree'] text-[12px] font-normal leading-normal">GST 5 %</span>
                <span className="text-[#1A2F46] font-['Figtree'] text-[12px] font-normal leading-normal">₹1100</span>
              </div>
            </div>

            <div className="border-t border-[#D2D8E4] pt-3">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  {/* <Checkbox
                    id="reward-points"
                    checked={useRewardPoints}
                    onCheckedChange={(checked) => setUseRewardPoints(checked as boolean)}
                    className="border-[#1c8ca7] data-[state=checked]:bg-[#1c8ca7] data-[state=checked]:border-[#1c8ca7]"
                  />
                  <Label htmlFor="reward-points" className="text-[#1c1b1f] font-medium cursor-pointer text-sm">
                    Use Reward Points
                  </Label> */}
                  <Checkbox id="reward-points" checked={useRewardPoints} onCheckedChange={(checked) => setUseRewardPoints(checked as boolean)} className="rounded-[2px] border border-[#D2D8E4] bg-white
                                                                data-[state=checked]:rounded-[2px] data-[state=checked]:border data-[state=checked]:border-[#1C8CA7] data-[state=checked]:bg-[#1C8CA7] data-[state=checked]:text-white"/>
                  <Label htmlFor="reward-points" className="text-black font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-normal capitalize">Use Reward Points</Label>
                </div>
                <span className="text-black font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-normal">-₹32</span>
              </div>
              <div className="ml-6 flex justify-between">
                <div className="text-[#1A2F46] font-['Figtree'] text-[10px] md:text-[12px] font-normal leading-normal">Your existing reward points</div>
                <div className="text-[#1A2F46] font-['Figtree'] text-[10px] md:text-[12px] font-normal leading-normal">3200 Points</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-1 border-t border-[#D2D8E4] pt-3">
          <div className="flex justify-between items-center">
            <span className="text-black font-['Figtree'] text-[16px] md:text-[18px] font-semibold leading-normal">Total Booking Amount</span>
            <span className="ttext-black font-['Figtree'] text-[16px] md:text-[18px] font-semibold leading-normal uppercase">₹{getTotalAmount().toLocaleString()}</span>
          </div>
        </div>
      </div>
      <div className="mb-4 mt-4">
          <div className="flex items-center gap-2">
            {/* <Checkbox
              id="terms"
              checked={acceptTerms}
              onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
              className="border-[#1c8ca7] data-[state=checked]:bg-[#1c8ca7] data-[state=checked]:border-[#1c8ca7] mt-0.5"
            />
            <Label htmlFor="terms" className="text-xs text-[#1c1b1f] cursor-pointer leading-relaxed">
              I have read and accept the PERSONAL DECLARATION AND AGREEMENT, Cancellation Policy and Terms of Service
            </Label> */}
            <Checkbox id="terms" checked={acceptTerms} onCheckedChange={(checked) => setAcceptTerms(checked as boolean)} className="rounded-[2px] border border-[#D2D8E4] bg-white
                                                                data-[state=checked]:rounded-[2px] data-[state=checked]:border data-[state=checked]:border-[#1C8CA7] data-[state=checked]:bg-[#1C8CA7] data-[state=checked]:text-white"/>
            <Label htmlFor="terms" className="text-black font-['Figtree'] text-[14px] font-normal leading-normal">I have read and accept the PERSONAL DECLARATION AND AGREEMENT, Cancellation Policy and Terms of Service</Label>
          </div>
        </div>

        <Button
          className="w-full bg-[#E97737] hover:bg-[#ffe5d9] h-12 rounded-lg cursor-pointer"
          disabled={!acceptTerms || isProcessing}
          onClick={handlePayment}
        >
          <span className="text-white font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-[24px] uppercase">{isProcessing ? "Processing..." : "PROCEED TO PAYMENT"}</span>
        </Button>
    </>
  )
}
