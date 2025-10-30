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
    <div className="min-h-screen bg-[#EBF5F7] py-6 md:py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section with Confetti */}
        <div className="text-center mb-8 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-2">
            <div className="w-2 h-2 rounded-full bg-[#e97737] animate-bounce" style={{ animationDelay: "0s" }} />
            <div className="w-2 h-2 rounded-full bg-[#1c8ca7] animate-bounce" style={{ animationDelay: "0.1s" }} />
            <div className="w-2 h-2 rounded-full bg-[#e97737] animate-bounce" style={{ animationDelay: "0.2s" }} />
          </div>

          <h1 className="text-black text-center font-['Figtree'] text-[18px] md:text-[20px] font-semibold leading-[25px] not-italic mb-4 mt-8">Seat Reserved!</h1>

          <p className="text-black text-center font-['Figtree'] text-[12px] md:text-[14px] font-normal leading-[18px] not-italic mb-4">
            Thank you <span className="font-medium">{customerName}</span> for booking with us! A confirmation email has been sent to{" "}
            <span className="font-semibold">{customerEmail}</span>
          </p>

          <div className="inline-block rounded-[4px] border border-[#1C8CA7] px-6 py-2">
            <span className="text-black text-center font-['Figtree'] text-[14px] md:text-[16px] font-medium leading-[18px] not-italic">Booking ID: <span className="font-bold">#{bookingId}</span></span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Booking Summary & Status */}
          <div className="lg:col-span-2 space-y-6">
            {/* Booking Summary Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-[#1A2F46] font-['Playfair_Display'] text-[26px] md:text-[28px] font-semibold leading-normal capitalize mb-6">Booking Summary</h2>

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
                    <h3 className="text-black font-['Figtree'] text-[24px] md:text-[26px] font-semibold leading-[24px] mb-2">
                      Kailash Mansarovar Yatra
                    </h3>
                    <p className="text-black font-['Figtree'] text-[18px] md:text-[20px] font-normal leading-[24px] mb-3">
                      Charan Sparsh Outer Kora from Lucknow By Helicopter
                    </p>
                    <p className="flex items-center gap-2 mb-4">
                      {/* <span className="inline-block">📅</span> */}
                      <img src="/images/booking/calendar_month.svg" alt="" className="" />
                      <span className="ext-[#5A5A5A] font-['Figtree'] text-[11px] md:text-[13px] font-medium leading-[14px] uppercase">11 NIGHTS 12 DAYS</span>
                    </p>
                    <div className="border-t border-[#D2D8E4] mb-4"></div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex">
                      <span className="text-[#5A5A5A] font-['Figtree'] text-[12px] md:text-[14px] font-normal leading-normal uppercase w-32">PICK UP</span>
                      <span className="text-black font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-normal">Lucknow</span>
                    </div>
                    <div className="flex">
                      <span className="text-[#5A5A5A] font-['Figtree'] text-[12px] md:text-[14px] font-normal leading-normalw-32">DEPT. DATE</span>
                      <span className="text-black font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-normal">10 Sep 2025</span>
                    </div>
                    <div className="flex">
                      <span className="text-[#5A5A5A] font-['Figtree'] text-[12px] md:text-[14px] font-normal leading-normal w-32">TRAVELLERS</span>
                      <span className="text-[#5A5A5A] font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-normal">2 Adult(s) | 0 Child</span>
                    </div>
                    <div className="flex">
                      <span className="text-[#5A5A5A] font-['Figtree'] text-[12px] md:text-[14px] font-normal leading-normal w-32">ROOMS</span>
                      <span className="text-[#5A5A5A] font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-normal">1 Room(s)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Status Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-[#1A2F46] font-['Playfair_Display'] text-[26px] md:text-[28px] font-semibold leading-normal capitalize mb-6">Booking Status</h2>

              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3 rounded-[50px] border border-[#E97737] px-6 py-3">
                  <div className="w-6 h-6 rounded-full border-2 border-[#e97737] flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-[#e97737]"></div>
                  </div>
                  <span className="ttext-black font-['Figtree'] text-[14px] md:text-[16px] font-normal leading-[24px]">Seat Reserved!</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-[#E97737] flex items-center justify-center"></div>
                  <span className="text-[#5A5A5A] font-['Figtree'] text-[14px] md:text-[16px] font-normal leading-[24px]">Booking Confirmed</span>
                </div>
              </div>
            </div>

            {/* Take Actions Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-[#1A2F46] font-['Playfair_Display'] text-[26px] md:text-[28px] font-semibold leading-normal capitalize mb-6">Take Actions</h2>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="outline"
                  className="flex-1 rounded-[6px] border border-[#BEC3D0] hover:bg-[#f5f5f5] h-12 bg-transparent"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  <span className="text-[#1A2F46] text-center font-['Figtree'] text-[12px] md:text-[14px] font-medium uppercase">UPDATE TRAVELLER INFO</span>
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 rounded-[6px] border border-[#BEC3D0] hover:bg-[#f5f5f5] h-12 bg-transparent"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  <span className="text-[#1A2F46] text-center font-['Figtree'] text-[12px] md:text-[14px] font-medium uppercase">UPLOAD DOCUMENTS</span>
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 rounded-[6px] border border-[#BEC3D0] hover:bg-[#f5f5f5] h-12 bg-transparent"
                >
                  <Printer className="w-4 h-4 mr-2" />
                  <span className="text-[#1A2F46] text-center font-['Figtree'] text-[12px] md:text-[14px] font-medium uppercase">PRINT RECEIPT</span>
                </Button>
              </div>
            </div>

            {/* Note Section */}
            {/* <div className="bg-[#e3f2fd] rounded-lg p-4 border-l-4 border-[#1c8ca7]">
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
            </div> */}
            <div className="bg-[#fff7f2] border border-[#e97737] rounded-lg p-4 mb-6">
              <div className="flex gap-3">
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="flex flex-row items-center gap-1 rounded-[6px] bg-[#1A2F46] p-2">
                      <img src="/images/booking/lightbulb_2.svg" alt="" className="" />
                      <div className="text-white font-figtree text-[12px] md:text-[14px] font-semibold leading-[22px]">Note</div>
                    </div>
                  </div>
                  <ol className="list-decimal list-inside space-y-1 text-black font-['Figtree'] text-[14px] md:text-[16px] font-medium leading-[22px] ml-1">
                    <li>Dates can be changed only till 16 August 2025 i.e 20 days prior to the START DATE for FREE.</li>
                    <li>
                      Post that you can reschedule by paying Rs. 5000 per traveller till 4 days prior to the START DATE.
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            {/* View Booking Details Button */}
            <div className="text-center">
              <Button className="bg-[#e97737] hover:bg-[#d2661f] px-12 h-12">
                <span className="text-white text-center font-['Figtree'] text-[12px] md:text-[14px] font-medium uppercase">VIEW BOOKING DETAILS</span>
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
                  <h3 className="text-black font-['Figtree'] text-[16px] md:text-[18px] font-semibold not-italic">You have paid</h3>
                  {showPaidAmount ? (
                    <ChevronUp className="w-5 h-5 text-[#1c1b1f]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#1c1b1f]" />
                  )}
                </button>

                {showPaidAmount && (
                  <div className="flex justify-between items-center">
                    <span className="text-black font-['Figtree'] text-[12px] md:text-[14px] font-semibold not-italic">Booking Amount</span>
                    <span className="text-black font-['Figtree'] text-[12px] md:text-[14px] font-semibold not-italic uppercase">₹23,650</span>
                  </div>
                )}
              </div>

              {/* Balance to be paid */}
              <div className="border-t-2 border-dotted border-[#d9d9d9] pt-6 mb-6">
                <h3 className="text-black font-['Figtree'] text-[16px] md:text-[18px] font-semibold not-italic mb-4">Balance to be paid</h3>

                <div className="space-y-3 text-sm mb-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-black font-['Figtree'] text-[12px] md:text-[14px] font-semibold not-italic capitalize">Full Amount</span>
                      <span className="text-black text-right font-['Figtree'] text-[12px] md:text-[14px] font-semibold not-italic leading-normal">₹5,50,000</span>
                    </div>
                    <div className="text-[#5A5A5A] font-['Figtree'] text-[10px] md:text-[12px] font-normal not-italic leading-normal">₹2,75,000 X 2 Travellers</div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-[#00A534] font-['Figtree'] text-[12px] md:text-[14px] font-semibold not-italic capitalize">- Booking Amount</span>
                      <span className="text-[#00A534] text-right font-['Figtree'] text-[12px] md:text-[14px] font-semibold not-italic leading-normal">- ₹23,650</span>
                    </div>
                    <div className="text-[#5A5A5A] font-['Figtree'] text-[10px] md:text-[12px] font-normal not-italic leading-normal">₹11,000 X 2 Travellers</div>
                  </div>

                  <div className="border-t border-[#e0e0e0] pt-3">
                    <div className="flex justify-between mb-1">
                      <span className="text-black font-['Figtree'] text-[12px] md:text-[14px] font-semibold not-italic capitalize">Convenience Fee</span>
                      <span className="text-black text-right font-['Figtree'] text-[12px] md:text-[14px] font-semibold not-italic leading-normal">₹13,750</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#5A5A5A] font-['Figtree'] text-[10px] md:text-[12px] font-normal not-italic leading-normal">GST 5 %</span>
                      <span className="text-[#5A5A5A] font-['Figtree'] text-[10px] md:text-[12px] font-normal not-italic leading-normal">₹27,500</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#f5f5f5] p-4 rounded-md mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-black font-['Figtree'] text-[16px] md:text-[18px] font-semibold not-italic">Balance Amount</span>
                    <span className="text-black font-['Figtree'] text-[16px] md:text-[18px] font-semibold not-italic uppercase">₹5,67,600</span>
                  </div>
                  <div className="rounded-[4px] bg-[#1C8CA7] px-3 py-2 text-center">
                    <div className="text-white font-[Figtree] text-[12px] md:text-[14px] not-italic font-normal leading-normal">EMI Options Available <span className="">₹9,500/month</span></div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-start gap-2">
                    {/* <Checkbox
                      id="terms-confirm"
                      checked={acceptTerms}
                      onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                      className="border-[#1c8ca7] data-[state=checked]:bg-[#1c8ca7] data-[state=checked]:border-[#1c8ca7] mt-0.5"
                    />
                    <Label htmlFor="terms-confirm" className="text-xs text-[#1c1b1f] cursor-pointer leading-relaxed">
                      I have read and accept the PERSONAL DECLARATION AND AGREEMENT, Cancellation Policy and Terms of
                      Service
                    </Label> */}
                    <Checkbox id="terms-confirm" checked={acceptTerms}
                      onCheckedChange={(checked) => setAcceptTerms(checked as boolean)} className="rounded-[2px] border border-[#D2D8E4] bg-white
                                                                data-[state=checked]:rounded-[2px] data-[state=checked]:border data-[state=checked]:border-[#1C8CA7] data-[state=checked]:bg-[#1C8CA7] data-[state=checked]:text-white"/>
                    <Label htmlFor="terms-confirm" className="text-black font-['Figtree'] text-[14px] font-normal leading-normal">I have read and accept the PERSONAL DECLARATION AND AGREEMENT, Cancellation Policy and Terms of
                      Service</Label>
                  </div>
                </div>

                <p className="mb-4 text-center text-black font-[Figtree] text-[14px] md:text-[16px] not-italic font-semibold leading-[24px]">
                  Pay this amount by <span className="">02 Aug 2015</span> to avail Extra Discount!
                </p>

                <Button
                  className="w-full bg-[#e97737] hover:bg-[#d2661f] h-12"
                  disabled={!acceptTerms}
                >
                  <span className="text-white text-center font-['Figtree'] text-[12px] md:text-[14px] font-medium uppercase">PAY NOW</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
