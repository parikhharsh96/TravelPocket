"use client"

import { useState } from "react"
import { ChevronUp, ChevronDown, User, Plus, Edit2, Trash2, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { UploadDocumentsModal, type DocumentData } from "../account/upload-documents-modal"
import { AddTravellerModal, type TravellerData } from "../account/add-traveller-modal"


interface BookingDetailsProps {
  bookingId: string
  onBack?: () => void
}

interface TravellerDetailsFormProps {
  isExpanded?: boolean
  onToggle?: () => void
  onProceed?: () => void
  travellerCount?: number
}

// interface TravellerData {
//   firstName: string
//   lastName: string
//   age: string
//   gender: string
// }

export function TravellerDetailsForm({
  isExpanded: controlledExpanded,
  onToggle,
  onProceed,
  travellerCount = 2,
}: TravellerDetailsFormProps) {
  const [internalExpanded, setInternalExpanded] = useState(false)
  const isExpanded = controlledExpanded !== undefined ? controlledExpanded : internalExpanded

  const [expandedTravellers, setExpandedTravellers] = useState<Set<number>>(new Set())
  const [travellers, setTravellers] = useState<Record<number, TravellerData>>({})
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedTraveller, setSelectedTraveller] = useState(1)
  const [travellersData, setTravellersData] = useState<Record<number, TravellerData>>({})
  const [editingTraveller, setEditingTraveller] = useState<number | null>(null)
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)
  const [uploadingTraveller, setUploadingTraveller] = useState(1)
  const [documentsUploaded, setDocumentsUploaded] = useState<Record<number, boolean>>({})

  // const travellerCount = Number.parseInt(booking.travellers.split(" ")[0]) || 2

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


  const handleToggle = () => {
    if (onToggle) {
      onToggle()
    } else {
      setInternalExpanded(!internalExpanded)
    }
  }

  const toggleTraveller = (index: number) => {
    const newExpanded = new Set(expandedTravellers)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setExpandedTravellers(newExpanded)
  }

  const updateTraveller = (index: number, field: keyof TravellerData, value: string) => {
    setTravellers((prev) => ({
      ...prev,
      [index]: {
        ...prev[index],
        [field]: value,
      },
    }))
  }

  const handleSaveAndProceed = () => {
    // Validate traveller details here if needed
    if (onProceed) {
      onProceed()
    }
  }

  const handleSkip = () => {
    if (onProceed) {
      onProceed()
    }
  }

  return (
    <div className="bg-white rounded-[8px] overflow-hidden">
      <button
        onClick={handleToggle}
        className="w-full flex items-center gap-3 md:gap-4 p-4 md:p-6 hover:bg-gray-50 transition-colors"
      >
        {/* <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#e97737] flex items-center justify-center flex-shrink-0">
          <span className="text-white text-lg md:text-xl font-bold">3</span>
        </div> */}
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#e97737] flex items-center justify-center">
          <span className="text-white text-center font-['Figtree'] font-semibold text-[21.333px] leading-[18.667px]">3</span>
        </div>
        <h2 className="text-[#1A2F46] font-['Playfair_Display'] text-[28px] font-semibold leading-normal flex-1 text-left">Add Traveller's Details</h2>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 md:w-6 md:h-6 text-[#1c1b1f] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-[#1c1b1f] flex-shrink-0" />
        )}
      </button>

      {isExpanded && (
        <div className="p-4 md:p-6 pt-2 md:pt-4 space-y-6">
          <div className="">
            {Array.from({ length: travellerCount }).map((_, index) => {
              const travellerNumber = index + 1
              const travellerData = travellersData[travellerNumber]
              const hasTravellerData = !!travellerData
              const hasDocuments = documentsUploaded[travellerNumber]

              return (
                <div key={index} className="p-4 md:p-6">
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

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 justify-center">
            <Button
              onClick={handleSaveAndProceed}
              className="bg-[#fff0e8] hover:bg-[#ffe5d5] px-6 md:px-8 py-3 rounded-md w-full sm:w-auto order-2 sm:order-1"
            >
              <span className="text-white font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-[24px] uppercase">SAVE AND PROCEED</span>
            </Button>
            <Button
              onClick={handleSkip}
              className="bg-[#e97737] hover:bg-[#d2661f] px-6 md:px-8 py-3 rounded-md w-full sm:w-auto order-1 sm:order-2"
            >
              <span className="text-white font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-[24px] uppercase">SKIP, I WILL ADD LATER</span>
            </Button>
          </div>
        </div>
      )}

      <AddTravellerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        travellerNumber={selectedTraveller}
        totalTravellers={travellerCount}
        bookingTitle=""
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
        bookingTitle=""
        onSave={handleSaveDocuments}
      />
    </div>
  )
}
