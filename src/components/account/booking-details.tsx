"use client"

import {
  Calendar,
  CreditCard,
  UserPlus,
  Edit2,
  Trash2,
  FileText,
  ChevronRight,
  MessageCircle,
  Download,
  Mail,
  Headphones,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { bookings } from "./active-bookings"
import { AddTravellerModal, type TravellerData } from "./add-traveller-modal"
import { UploadDocumentsModal, type DocumentData } from "./upload-documents-modal"

interface BookingDetailsProps {
  bookingId: string
  onBack?: () => void
}

export function BookingDetails({ bookingId, onBack }: BookingDetailsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedTraveller, setSelectedTraveller] = useState(1)
  const [travellersData, setTravellersData] = useState<Record<number, TravellerData>>({})
  const [editingTraveller, setEditingTraveller] = useState<number | null>(null)
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)
  const [uploadingTraveller, setUploadingTraveller] = useState(1)
  const [documentsUploaded, setDocumentsUploaded] = useState<Record<number, boolean>>({})

  const booking = bookings.find((b) => b.id === bookingId)

  if (!booking) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-bold text-[#1a2f46]">Booking Details</h2>
          {onBack && (
            <button
              onClick={onBack}
              className="text-sm text-[#e97737] hover:text-[#d86830] font-medium transition-colors"
            >
              ← Back to Bookings
            </button>
          )}
        </div>
        <div className="bg-white border border-[#e5e5e5] rounded-lg p-8 text-center">
          <p className="text-[#5a5a5a]">Booking not found.</p>
        </div>
      </div>
    )
  }

  const travellerCount = Number.parseInt(booking.travellers.split(" ")[0]) || 2

  const allTravellersComplete = Array.from({ length: travellerCount }).every((_, index) => {
    const travellerNumber = index + 1
    return travellersData[travellerNumber] && documentsUploaded[travellerNumber]
  })

  const handleAddTraveller = (travellerNumber: number) => {
    setSelectedTraveller(travellerNumber)
    setEditingTraveller(null)
    setIsModalOpen(true)
  }

  const handleEditTraveller = (travellerNumber: number) => {
    setSelectedTraveller(travellerNumber)
    setEditingTraveller(travellerNumber)
    setIsModalOpen(true)
  }

  const handleDeleteTraveller = (travellerNumber: number) => {
    const newData = { ...travellersData }
    delete newData[travellerNumber]
    setTravellersData(newData)
    const newDocsStatus = { ...documentsUploaded }
    delete newDocsStatus[travellerNumber]
    setDocumentsUploaded(newDocsStatus)
  }

  const handleSaveTraveller = (travellerNumber: number, data: TravellerData) => {
    setTravellersData({
      ...travellersData,
      [travellerNumber]: data,
    })
  }

  const handleUploadDocuments = (travellerNumber: number) => {
    setUploadingTraveller(travellerNumber)
    setIsUploadModalOpen(true)
  }

  const handleSaveDocuments = (travellerNumber: number, documents: DocumentData) => {
    setDocumentsUploaded({
      ...documentsUploaded,
      [travellerNumber]: true,
    })
  }

  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-black font-['Figtree'] text-[18px] md:text-[20px] font-semibold leading-normal">Booking Details</h2>
          {onBack && (
            <button
              onClick={onBack}
              className="cursor-pointer transition-colors"
            >
              <div className="flex flex-row gap-1 items-center">
                <img src="/images/account/arrow_back_t.svg" alt="" className="" />
                <div className="text-[#5A5A5A] font-['Figtree'] text-[14px] md:text-[16px] font-normal leading-[14px]">Back</div>
              </div>
            </button>
          )}
        </div>

        {/* Booking Summary Card */}
        <div className="rounded-[8px] border border-[#D2D8E4] bg-white overflow-hidden">
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
                      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full border border-[#E97737] text-black font-['Figtree'] text-[12px] md:text-[14px] font-normal leading-[19px] ${booking.status === "reserved"
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
        </div>

        {allTravellersComplete && (
          <div className="rounded-[8px] bg-[#EBF5F7] p-4 md:p-6">
            <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
              <div className="flex items-center gap-4 flex-1">
                <p className="text-black font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-[19px]">
                  After uploading all the documents you can download the registration form as a confirmation to complete
                  your Booking Process
                </p>
                {/* <ChevronRight className="w-6 h-6 text-[#1c8ca7] flex-shrink-0 hidden md:block" />
                <ChevronRight className="w-6 h-6 text-[#1c8ca7] flex-shrink-0 hidden md:block" /> */}
                <img src="/images/account/next_arrow_i.png" alt="" className="" />
              </div>
              <button className="w-full md:w-auto rounded-[6px] bg-[#1A2F46] hover:bg-[#2a3f56] py-3 px-6 transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
                {/* <FileText className="w-4 h-4" /> */}
                <img src="/images/account/contract.svg" alt="" className="" />
                <span className="text-white font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-[24px] uppercase">DOWNLOAD REGISTRATION FORM</span>
              </button>
            </div>
          </div>
        )}

        {/* Add Traveller's Details Section */}
        <div className="rounded-[8px] border border-[#D2D8E4] bg-white p-4 md:p-6">
          <h3 className="text-[#1A2F46] font-['Playfair_Display'] text-[20px] md:text-[22px] font-semibold leading-normal] mb-6">Add Traveller's Details</h3>

          <div className="space-y-4">
            {Array.from({ length: travellerCount }).map((_, index) => {
              const travellerNumber = index + 1
              const travellerData = travellersData[travellerNumber]
              const hasTravellerData = !!travellerData
              const hasDocuments = documentsUploaded[travellerNumber]

              return (
                <div key={index} className="p-4 md:p-6">
                  {/* <h4 className="text-sm font-bold text-[#1a2f46] mb-4 uppercase tracking-wide">
                    Traveller {travellerNumber}
                  </h4> */}
                  <div className="bg-[#FFF7F2] px-4 py-2 rounded-[2px] mb-4">
                    <h3 className="text-[#1A2F46] font-['Figtree'] text-[14px] font-semibold leading-normal uppercase">Traveller {travellerNumber}</h3>
                  </div>

                  {hasTravellerData ? (
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 justify-between">
                      {/* Left: User info */}
                      <div className="flex items-center gap-4 flex-1">
                        <div className="rounded-[4px] bg-[#EBF5F7] p-4 flex items-center justify-center flex-shrink-0">
                          {/* <User className="w-6 h-6 text-white" /> */}
                          <img src="/images/account/user2_blue.svg" alt="" className="" />
                        </div>
                        <div className="flex-1">
                          <h5 className="text-black font-['Figtree'] text-[16px] md:text-[18px] font-semibold leading-normal underline decoration-solid decoration-1 underline-offset-auto">
                            {travellerData.firstName} {travellerData.lastName}
                          </h5>
                          <p className="text-black font-['Figtree'] text-[10px] md:text-[11px] font-normal leading-normal">
                            ({travellerData.type} {travellerNumber})
                          </p>
                        </div>
                      </div>

                      {/* Middle: DOB and Gender */}
                      <div className="flex gap-8 flex-1">
                        <div>
                          <p className="text-[#1A2F46] font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-normal text-start mb-1">D.O.B.</p>
                          <p className="text-black font-['Figtree'] text-[12px] md:text-[14px] font-medium leading-normal">{travellerData.dateOfBirth}</p>
                        </div>
                        <div>
                          <p className="text-[#1A2F46] font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-normal text-start mb-1">GENDER</p>
                          <p className="text-black font-['Figtree'] text-[12px] md:text-[14px] font-medium leading-normal uppercase">{travellerData.gender}</p>
                        </div>
                      </div>

                      {/* Right: Status, Actions, Upload/Documents Button */}
                      <div className="flex items-center gap-3 flex-wrap">
                        <div className="px-4 py-2 rounded-[6px] bg-[#E3FAFF]">
                          <span className="inline-block text-[#1C8CA7] font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-normal">
                            Traveller updated
                          </span>
                        </div>
                        <button
                          onClick={() => handleEditTraveller(travellerNumber)}
                          className="w-10 h-10 border-2 border-[#1c8ca7] text-[#1c8ca7] rounded-full flex items-center justify-center hover:bg-[#1c8ca7] hover:text-white transition-colors"
                          aria-label="Edit traveller"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteTraveller(travellerNumber)}
                          className="w-10 h-10 border-2 border-[#1c8ca7] text-[#1c8ca7] rounded-full flex items-center justify-center hover:bg-[#1c8ca7] hover:text-white transition-colors"
                          aria-label="Delete traveller"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleUploadDocuments(travellerNumber)}
                          className="flex items-center gap-2 px-4 py-2 rounded-[8px] border border-[#E97737] bg-white group hover:bg-[#E97737s"
                        >
                          <FileText className="w-4 h-4 text-[#E97737] group-hover:text-white" />
                          <span className="text-[#E97737] text-center font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-normal group-hover:text-white">
                            {hasDocuments ? "Your Documents" : "Upload Documents"}
                          </span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleAddTraveller(travellerNumber)}
                      className="flex items-center gap-3 text-[#1a2f46] hover:text-[#e97737] transition-colors group cursor-pointer"
                    >
                      <div className="rounded-[4px] bg-[#EBF5F7] p-4 flex items-center justify-center flex-shrink-0">
                        {/* <User className="w-6 h-6 text-white" /> */}
                        <img src="/images/account/user2_blue.svg" alt="" className="" />
                      </div>
                      <div className="flex flex-row gap-1 items-center">
                        <img src="/images/account/add_1.svg" alt="" className="" />
                        <div className="text-black font-['Figtree'] text-[16px] md:text-[18px] font-semibold leading-normal underline decoration-solid decoration-current decoration-1 underline-offset-auto">
                          Add Traveller Details
                        </div>
                      </div>
                    </button>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {allTravellersComplete && (
          <div className="bg-white border border-[#e5e5e5] rounded-lg p-4 md:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              <button className="flex items-center justify-center gap-2 px-4 py-3 border border-[#e5e5e5] rounded-lg hover:bg-[#f5f5f5] transition-colors text-sm font-medium text-[#1a2f46]">
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                SEND ITINERARY
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-3 border border-[#e5e5e5] rounded-lg hover:bg-[#f5f5f5] transition-colors text-sm font-medium text-[#1a2f46]">
                <Download className="w-4 h-4" />
                DOWNLOAD ITINERARY
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-3 border border-[#e5e5e5] rounded-lg hover:bg-[#f5f5f5] transition-colors text-sm font-medium text-[#1a2f46]">
                <Mail className="w-4 h-4" />
                EMAIL ITINERARY
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-3 border border-[#e5e5e5] rounded-lg hover:bg-[#f5f5f5] transition-colors text-sm font-medium text-[#1a2f46]">
                <Headphones className="w-4 h-4" />
                TALK TO EXPERTS
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-3 border border-[#e5e5e5] rounded-lg hover:bg-[#f5f5f5] transition-colors text-sm font-medium text-[#1a2f46]">
                <CheckCircle className="w-4 h-4" />
                INCLUSIONS & EXCLUSIONS
              </button>
            </div>
          </div>
        )}
      </div>

      <AddTravellerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        travellerNumber={selectedTraveller}
        totalTravellers={travellerCount}
        bookingTitle={booking.title}
        onSave={handleSaveTraveller}
        initialData={editingTraveller ? travellersData[editingTraveller] : undefined}
      />

      <UploadDocumentsModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        travellerNumber={uploadingTraveller}
        totalTravellers={travellerCount}
        travellerName={
          travellersData[uploadingTraveller]
            ? `${travellersData[uploadingTraveller].firstName} ${travellersData[uploadingTraveller].lastName}`
            : `Traveller ${uploadingTraveller}`
        }
        bookingTitle={booking.title}
        onSave={handleSaveDocuments}
      />
    </>
  )
}
