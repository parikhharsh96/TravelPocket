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
      <h2 className="text-xl md:text-2xl font-bold text-[#1a2f46]">Active Bookings</h2>

      <div className="space-y-6">
        {bookings.map((booking) => (
          <div key={booking.id} className="bg-white border border-[#e5e5e5] rounded-lg overflow-hidden">
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
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-sm text-[#5a5a5a]">Booking ID: {booking.id}</span>
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                          booking.status === "reserved"
                            ? "bg-[#fff7f2] text-[#e97737] border border-[#e97737]"
                            : "bg-[#fff7f2] text-[#e97737] border border-[#e97737]"
                        }`}
                      >
                        <span className="w-2 h-2 rounded-full bg-[#e97737]" />
                        {booking.status === "reserved" ? "Seat Reserved!" : "Booking Confirmed"}
                      </span>
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-[#1a2f46] mb-1">{booking.title}</h3>
                    {booking.subtitle && <p className="text-sm text-[#5a5a5a]">{booking.subtitle}</p>}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-[#5a5a5a] border-b border-[#e5e5e5] pb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{booking.duration}</span>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                    <div>
                      <span className="text-[#5a5a5a]">PICK UP</span>
                      <p className="font-medium text-[#1a2f46]">{booking.pickUp}</p>
                    </div>
                    <div>
                      <span className="text-[#5a5a5a]">DEPT. DATE</span>
                      <p className="font-medium text-[#1a2f46]">{booking.departureDate}</p>
                    </div>
                    <div>
                      <span className="text-[#5a5a5a]">TRAVELLERS</span>
                      <p className="font-medium text-[#1a2f46]">{booking.travellers}</p>
                    </div>
                    <div>
                      <span className="text-[#5a5a5a]">ROOMS</span>
                      <p className="font-medium text-[#1a2f46]">{booking.rooms}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Payment Info */}
              <div className="w-full lg:w-64 bg-[#ddf9ff] rounded-lg p-4 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-bold text-[#1a2f46] mb-3">You have paid</h4>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-[#5a5a5a]">
                      {booking.paymentStatus === "partial" ? "Booking Amount" : "Full Amount"}
                    </span>
                    <span className="text-xl font-bold text-[#1a2f46]">₹{booking.amountPaid.toLocaleString()}</span>
                  </div>
                </div>
                {booking.showPayButton && (
                  <button className="w-full bg-[#e97737] hover:bg-[#d86830] text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm">
                    <CreditCard className="w-4 h-4" />
                    {booking.payButtonText}
                  </button>
                )}
              </div>
            </div>

            {/* Next Steps Section */}
            <div className="border-t border-[#e5e5e5] bg-[#fff7f2] p-4 md:p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex-1">
                  <h4 className="text-[#e97737] font-bold mb-4 flex items-center gap-2">
                    <ArrowRight className="w-5 h-5" />
                    Your Next Steps
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <span className="text-xs text-[#1c8ca7] font-medium">STEP 1</span>
                      <div className="flex items-center gap-2 mt-1">
                        <Users className="w-4 h-4 text-[#5a5a5a]" />
                        <span className="text-sm text-[#1a2f46]">UPDATE TRAVELLER INFO</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-xs text-[#1c8ca7] font-medium">STEP 2</span>
                      <div className="flex items-center gap-2 mt-1">
                        <Upload className="w-4 h-4 text-[#5a5a5a]" />
                        <span className="text-sm text-[#1a2f46]">UPLOAD DOCUMENTS</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-xs text-[#1c8ca7] font-medium">STEP 3</span>
                      <div className="flex items-center gap-2 mt-1">
                        <Download className="w-4 h-4 text-[#5a5a5a]" />
                        <span className="text-sm text-[#1a2f46]">DOWNLOAD BOOKING FORM</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => onViewDetails?.(booking.id)}
                  className="flex items-center gap-2 text-[#1a2f46] hover:text-[#e97737] font-medium transition-colors text-sm lg:text-base whitespace-nowrap"
                >
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
