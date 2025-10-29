"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { FileText, Upload, Printer, ChevronDown, ChevronUp, Info } from "lucide-react"

interface BookingConfirmationProps {
  bookingId: string
  customerName: string
  customerEmail: string
  onClose?: () => void
}

export function BookingConfirmation({ bookingId, customerName, customerEmail, onClose }: BookingConfirmationProps) {
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [showPaidAmount, setShowPaidAmount] = useState(true)

  return (
    <div className="min-h-screen bg-[#f5f5f5] py-6 md:py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section with Confetti */}
        <div className="text-center mb-8 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-2">
            <div className="w-2 h-2 rounded-full bg-[#e97737] animate-bounce" style={{ animationDelay: "0s" }} />
            <div className="w-2 h-2 rounded-full bg-[#1c8ca7] animate-bounce" style={{ animationDelay: "0.1s" }} />
            <div className="w-2 h-2 rounded-full bg-[#e97737] animate-bounce" style={{ animationDelay: "0.2s" }} />
          </div>

          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#1c1b1f] mb-4 mt-8">Seat Reserved!</h1>

          <p className="text-sm md:text-base text-[#1c1b1f] mb-4">
            Thank you {customerName} for booking with us! A confirmation email has been sent to{" "}
            <span className="font-semibold">{customerEmail}</span>
          </p>

          <div className="inline-block border-2 border-[#1c8ca7] rounded-md px-6 py-2">
            <span className="text-sm md:text-base font-semibold text-[#1c1b1f]">Booking ID: #{bookingId}</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Booking Summary & Status */}
          <div className="lg:col-span-2 space-y-6">
            {/* Booking Summary Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl md:text-2xl font-serif font-bold text-[#1c1b1f] mb-6">Booking Summary</h2>

              <div className="flex flex-col md:flex-row gap-6">
                {/* Trip Image */}
                <div className="w-full md:w-48 h-48 flex-shrink-0 rounded-lg overflow-hidden">
                  <img
                    src="/kailash-mansarovar-mountain-landscape.jpg"
                    alt="Kailash Mansarovar"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Trip Details */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#1c1b1f] mb-2">
                      Kailash Mansarovar Yatra
                    </h3>
                    <p className="text-base md:text-lg text-[#1c1b1f] mb-3">
                      Charan Sparsh Outer Kora from Lucknow By Helicopter
                    </p>
                    <p className="text-sm text-[#5a5a5a] flex items-center gap-2 mb-4">
                      <span className="inline-block">📅</span>
                      11 NIGHTS 12 DAYS
                    </p>
                    <div className="border-t border-[#d9d9d9] mb-4"></div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex">
                      <span className="text-[#5a5a5a] font-medium w-32">PICK UP</span>
                      <span className="font-bold text-[#1c1b1f]">Lucknow</span>
                    </div>
                    <div className="flex">
                      <span className="text-[#5a5a5a] font-medium w-32">DEPT. DATE</span>
                      <span className="font-bold text-[#1c1b1f]">10 Sep 2025</span>
                    </div>
                    <div className="flex">
                      <span className="text-[#5a5a5a] font-medium w-32">TRAVELLERS</span>
                      <span className="font-bold text-[#1c1b1f]">2 Adult(s) | 0 Child</span>
                    </div>
                    <div className="flex">
                      <span className="text-[#5a5a5a] font-medium w-32">ROOMS</span>
                      <span className="font-bold text-[#1c1b1f]">1 Room(s)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Status Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl md:text-2xl font-serif font-bold text-[#1c1b1f] mb-6">Booking Status</h2>

              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3 border-2 border-[#e97737] rounded-full px-6 py-3">
                  <div className="w-6 h-6 rounded-full border-2 border-[#e97737] flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-[#e97737]"></div>
                  </div>
                  <span className="text-base font-semibold text-[#1c1b1f]">Seat Reserved!</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-[#d9d9d9] flex items-center justify-center"></div>
                  <span className="text-base font-semibold text-[#5a5a5a]">Booking Confirmed</span>
                </div>
              </div>
            </div>

            {/* Take Actions Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl md:text-2xl font-serif font-bold text-[#1c1b1f] mb-6">Take Actions</h2>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="outline"
                  className="flex-1 border-[#1c1b1f] text-[#1c1b1f] hover:bg-[#f5f5f5] h-12 bg-transparent"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  UPDATE TRAVELLER INFO
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-[#1c1b1f] text-[#1c1b1f] hover:bg-[#f5f5f5] h-12 bg-transparent"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  UPLOAD DOCUMENTS
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-[#1c1b1f] text-[#1c1b1f] hover:bg-[#f5f5f5] h-12 bg-transparent"
                >
                  <Printer className="w-4 h-4 mr-2" />
                  PRINT RECEIPT
                </Button>
              </div>
            </div>

            {/* Note Section */}
            <div className="bg-[#e3f2fd] rounded-lg p-4 border-l-4 border-[#1c8ca7]">
              <div className="flex gap-3">
                <Info className="w-5 h-5 text-[#1c8ca7] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-[#1c1b1f] space-y-1">
                  <p className="font-semibold">Note</p>
                  <p>Dates can be changed only till 16 August 2025 i.e 20 days prior to the START DATE for FREE.</p>
                  <p>
                    Post that you can reschedule by paying Rs. 5000 per traveller till 4 days prior to the START DATE.
                  </p>
                </div>
              </div>
            </div>

            {/* View Booking Details Button */}
            <div className="text-center">
              <Button className="bg-[#e97737] hover:bg-[#d2661f] text-white font-bold px-12 h-12">
                VIEW BOOKING DETAILS
              </Button>
            </div>
          </div>

          {/* Right Column - Payment Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm sticky top-4">
              {/* You have paid - Collapsible */}
              <div className="mb-6">
                <button
                  onClick={() => setShowPaidAmount(!showPaidAmount)}
                  className="w-full flex items-center justify-between mb-3"
                >
                  <h3 className="text-lg font-bold text-[#1c1b1f]">You have paid</h3>
                  {showPaidAmount ? (
                    <ChevronUp className="w-5 h-5 text-[#1c1b1f]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#1c1b1f]" />
                  )}
                </button>

                {showPaidAmount && (
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#5a5a5a]">Booking Amount</span>
                    <span className="text-lg font-bold text-[#1c1b1f]">₹23,650</span>
                  </div>
                )}
              </div>

              {/* Balance to be paid */}
              <div className="border-t-2 border-dotted border-[#d9d9d9] pt-6 mb-6">
                <h3 className="text-lg font-bold text-[#1c1b1f] mb-4">Balance to be paid</h3>

                <div className="space-y-3 text-sm mb-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-[#1c1b1f] font-medium">Full Amount</span>
                      <span className="font-bold text-[#1c1b1f]">₹5,50,000</span>
                    </div>
                    <div className="text-[#5a5a5a] text-xs">₹2,75,000 X 2 Travellers</div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-[#00a534] font-medium">- Booking Amount</span>
                      <span className="font-bold text-[#00a534]">- ₹23,650</span>
                    </div>
                    <div className="text-[#5a5a5a] text-xs">₹11,000 X 2 Travellers</div>
                  </div>

                  <div className="border-t border-[#e0e0e0] pt-3">
                    <div className="flex justify-between mb-1">
                      <span className="text-[#1c1b1f] font-medium">Convenience Fee</span>
                      <span className="font-bold text-[#1c1b1f]">₹13,750</span>
                    </div>
                    <div className="flex justify-between text-[#5a5a5a] text-xs">
                      <span>GST 5 %</span>
                      <span>₹27,500</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#f5f5f5] p-4 rounded-md mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-base font-bold text-[#1c1b1f]">Balance Amount</span>
                    <span className="text-2xl font-bold text-[#1c1b1f]">₹5,67,600</span>
                  </div>
                  <div className="bg-[#1c8ca7] text-white text-xs px-3 py-2 rounded-md text-center">
                    EMI Options Available <span className="font-bold">₹9,500/month</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-start gap-2">
                    <Checkbox
                      id="terms-confirm"
                      checked={acceptTerms}
                      onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                      className="border-[#1c8ca7] data-[state=checked]:bg-[#1c8ca7] data-[state=checked]:border-[#1c8ca7] mt-0.5"
                    />
                    <Label htmlFor="terms-confirm" className="text-xs text-[#1c1b1f] cursor-pointer leading-relaxed">
                      I have read and accept the PERSONAL DECLARATION AND AGREEMENT, Cancellation Policy and Terms of
                      Service
                    </Label>
                  </div>
                </div>

                <p className="text-xs text-[#1c1b1f] mb-4 text-center">
                  Pay this amount by <span className="font-bold">02 Aug 2015</span> to avail Extra Discount!
                </p>

                <Button
                  className="w-full bg-[#e97737] hover:bg-[#d2661f] text-white font-bold h-12"
                  disabled={!acceptTerms}
                >
                  PAY NOW
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
