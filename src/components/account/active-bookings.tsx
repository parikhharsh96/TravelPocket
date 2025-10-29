"use client"

import { Calendar, Users, ArrowRight, CreditCard, Upload, Download } from "lucide-react"
import Image from "next/image"

interface BookingDetails {
  id: string
  status: "reserved" | "confirmed"
  title: string
  subtitle: string
  duration: string
  pickUp: string
  departureDate: string
  travellers: string
  rooms: string
  imageUrl: string
  paymentStatus: "partial" | "full"
  amountPaid: number
  showPayButton?: boolean
  payButtonText?: string
}

interface ActiveBookingsProps {
  onViewDetails?: (bookingId: string) => void
}

export const bookings: BookingDetails[] = [
  {
    id: "#2145638",
    status: "reserved",
    title: "Kailash Mansarovar Yatra",
    subtitle: "Charan Sparsh Outer Kora from Lucknow By Helicopter",
    duration: "11 NIGHTS 12 DAYS",
    pickUp: "Lucknow",
    departureDate: "10 Sep 2025",
    travellers: "2 Adult(s) | 0 Child",
    rooms: "1 Room(s)",
    imageUrl: "/images/account/kailash-mountain-snow-peaks.jpg",
    paymentStatus: "partial",
    amountPaid: 23650,
    showPayButton: true,
    payButtonText: "PAY REMAINING AMOUNT",
  },
  {
    id: "#6554139",
    status: "confirmed",
    title: "Kedarnath and Tungnath Yatra From Haridwar",
    subtitle: "",
    duration: "4 NIGHT 5 DAYS",
    pickUp: "Haridwar",
    departureDate: "10 Sep 2025",
    travellers: "2 Adult(s) | 0 Child",
    rooms: "1 Room(s)",
    imageUrl: "/images/account/kailash-mountain-snow-peaks.jpg",
    paymentStatus: "full",
    amountPaid: 40650,
    showPayButton: true,
    payButtonText: "SHOW PRICE BREAKDOWN",
  },
]

export function ActiveBookings({ onViewDetails }: ActiveBookingsProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-black font-['Figtree'] text-[18px] md:text-[20px] font-semibold leading-normal">Active Bookings</h2>

      <div className="space-y-6">
        {bookings.map((booking) => (
          <div key={booking.id} className="rounded-[8px] border border-[#D2D8E4] bg-white overflow-hidden">
            {/* Main Booking Card */}
            <div className="flex flex-col lg:flex-row gap-4 p-4 md:p-6">
              {/* Left: Image and Details */}
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                {/* Image */}
                <div className="w-full sm:w-32 h-32 flex-shrink-0">
                  <Image
                    src={booking.imageUrl || "/placeholder.svg"}
                    alt={booking.title}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Booking Details */}
                <div className="flex-1 space-y-3">
                  <div>
                    <div className="flex flex-col items-start gap-2 mb-3">
                      <div className="text-black text-center font-['Figtree'] text-[14px] md:text-[16px] font-medium leading-[18px]">Booking ID: <span className="font-bold">{booking.id}</span></div>
                      <div
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full border border-[#E97737] text-black font-['Figtree'] text-[12px] md:text-[14px] font-normal leading-[19px] ${
                          booking.status === "reserved"
                            ? ""
                            : ""
                        }`}
                      >
                        {/* <span className="w-2 h-2 rounded-full bg-[#e97737]" /> */}
                        <img src="/images/account/icon_seat.svg" alt="" className="" />
                        {booking.status === "reserved" ? "Seat Reserved!" : "Booking Confirmed"}
                      </div>
                    </div>
                    <h3 className="text-black font-['Figtree'] text-[14px] md:text-[16px] font-semibold leading-[20px] mb-1">{booking.title}</h3>
                    {booking.subtitle && <p className="text-black font-['Figtree'] text-[12px] md:text-[14px] font-normal leading-[19px]">{booking.subtitle}</p>}
                  </div>

                  <div className="flex items-center gap-2 border-b border-[#D2D8E4] pb-3 items-center">
                    {/* <Calendar className="w-4 h-4" /> */}
                    <img src="/images/account/calendar_month_1.svg" alt="" className="" />
                    <span className="text-[#5A5A5A] font-['Figtree'] text-[11px] md:text-[13px] font-medium leading-[14px] uppercase">{booking.duration}</span>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-1 gap-x-4 gap-y-2 w-[60%] items-start">
                    <div className="flex flex-row justify-between items-center">
                      <span className="text-[#5A5A5A] font-['Figtree'] text-[12px] md:text-[14px] font-normal leading-normal uppercase">PICK UP</span>
                      <p className="text-black font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-normal ml-4">{booking.pickUp}</p>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                      <span className="text-[#5A5A5A] font-['Figtree'] text-[12px] md:text-[14px] font-normal leading-normal uppercase">DEPT. DATE</span>
                      <p className="text-black font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-normal ml-4">{booking.departureDate}</p>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                      <span className="text-[#5A5A5A] font-['Figtree'] text-[12px] md:text-[14px] font-normal leading-normal uppercase">TRAVELLERS</span>
                      <p className="text-[#5A5A5A] font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-normal ml-4">{booking.travellers}</p>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                      <span className="text-[#5A5A5A] font-['Figtree'] text-[12px] md:text-[14px] font-normal leading-normal uppercase">ROOMS</span>
                      <p className="text-[#5A5A5A] font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-normal ml-4">{booking.rooms}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Payment Info */}
              <div className="w-full lg:w-64 rounded-[8px] bg-[#EBF5F7] p-4 flex flex-col justify-between">
                <div>
                  <h4 className="text-black font-['Figtree'] text-[16px] md:text-[18px] font-semibold leading-normal mb-3">You have paid</h4>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-black font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-normal">
                      {booking.paymentStatus === "partial" ? "Booking Amount" : "Full Amount"}
                    </span>
                    <span className="text-black font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-normal uppercase">₹{booking.amountPaid.toLocaleString()}</span>
                  </div>
                </div>
                {booking.showPayButton && (
                  <button className="w-full bg-[#e97737] hover:bg-[#d86830] py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                    {/* <CreditCard className="w-4 h-4" /> */}
                    <img src="/images/account/account_balance_wallet.svg" alt="" className="" />
                    <span className="text-white text-center font-['Figtree'] text-[12px] md:text-[12px] font-medium leading-normal uppercase">{booking.payButtonText}</span>
                  </button>
                )}
              </div>
            </div>

            {/* Next Steps Section */}
            <div className="border-t border-[#e5e5e5] bg-[#fff7f2] p-4 md:p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex-1">
                  <h4 className="mb-4 flex items-center gap-2">
                    {/* <ArrowRight className="w-5 h-5" /> */}
                    <img src="/images/account/fast-forward.svg" alt="" className="" />
                    <span className="text-[#E97737] font-['Figtree'] text-[14px] md:text-[16px] font-semibold leading-normal">Your Next Steps</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <span className="text-[#1C8CA7] font-['Figtree'] text-[12px] font-semibold leading-normal uppercase">STEP 1</span>
                      <div className="flex items-center gap-2 mt-1">
                        {/* <Users className="w-4 h-4 text-[#5a5a5a]" /> */}
                         <img src="/images/account/article_person_1.svg" alt="" className="" />
                        <span className="text-[#1A2F46] font-['Figtree'] text-[12px] md:text-[14px] font-medium leading-normal uppercase">UPDATE TRAVELLER INFO</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-[#1C8CA7] font-['Figtree'] text-[12px] font-semibold leading-normal uppercase">STEP 2</span>
                      <div className="flex items-center gap-2 mt-1">
                        {/* <Upload className="w-4 h-4 text-[#5a5a5a]" /> */}
                         <img src="/images/account/upload.svg" alt="" className="" />
                        <span className="text-[#1A2F46] font-['Figtree'] text-[12px] md:text-[14px] font-medium leading-normal uppercase">UPLOAD DOCUMENTS</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-[#1C8CA7] font-['Figtree'] text-[12px] font-semibold leading-normal uppercase">STEP 3</span>
                      <div className="flex items-center gap-2 mt-1">
                        {/* <Download className="w-4 h-4 text-[#5a5a5a]" /> */}
                         <img src="/images/account/contract.svg" alt="" className="" />
                        <span className="text-[#1A2F46] font-['Figtree'] text-[12px] md:text-[14px] font-medium leading-normal uppercase">DOWNLOAD BOOKING FORM</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => onViewDetails?.(booking.id)}
                  className="flex items-center gap-2 transition-colors whitespace-nowrap"
                >
                  <span className="text-[#1A2F46] font-['Figtree'] text-[14px] md:text-[16px] font-bold leading-normal underline decoration-solid decoration-current decoration-1 underline-offset-auto">View Details</span>
                  {/* <ArrowRight className="w-4 h-4" /> */}
                  <img src="/images/account/arrow_black.svg" alt="" className="" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
