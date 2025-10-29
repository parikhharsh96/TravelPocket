"use client"

import { useState } from "react"
import { User, Edit2, Trash2, FileText, Plus } from "lucide-react"
import { AddTravellerModal } from "./add-traveller-modal"
import { UploadDocumentsModal } from "./upload-documents-modal"

interface TravellerData {
  firstName: string
  lastName: string
  dateOfBirth: string
  gender: string
  email: string
  mobile: string
  nationality: string
  aadhaar: string
  pan: string
  passport?: string
  passportPlace?: string
  passportExpiry?: string
  addressLine1: string
  addressLine2?: string
  type: string
}

export function SavedTravellers() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)
  const [selectedTraveller, setSelectedTraveller] = useState<number | null>(null)
  const [editingTraveller, setEditingTraveller] = useState<number | null>(null)

  // Mock saved travellers data
  const [savedTravellers, setSavedTravellers] = useState<Record<number, TravellerData>>({
    1: {
      firstName: "Shivam",
      lastName: "Tripathi",
      dateOfBirth: "18.03.1984",
      gender: "male",
      email: "shivam@example.com",
      mobile: "9876543210",
      nationality: "Indian",
      aadhaar: "1234 5678 9012",
      pan: "ABCDE1234F",
      addressLine1: "123 Main Street",
      type: "Adult 1",
    },
    2: {
      firstName: "Seema",
      lastName: "Tripathi",
      dateOfBirth: "24.06.1959",
      gender: "female",
      email: "seema@example.com",
      mobile: "9876543211",
      nationality: "Indian",
      aadhaar: "9876 5432 1098",
      pan: "FGHIJ5678K",
      addressLine1: "123 Main Street",
      type: "Adult 2",
    },
  })

  const [documentsUploaded, setDocumentsUploaded] = useState<Record<number, boolean>>({
    1: true,
    2: true,
  })

  const handleAddTraveller = () => {
    setEditingTraveller(null)
    setIsAddModalOpen(true)
  }

  const handleEditTraveller = (travellerNumber: number) => {
    setEditingTraveller(travellerNumber)
    setIsAddModalOpen(true)
  }

  const handleDeleteTraveller = (travellerNumber: number) => {
    const newTravellers = { ...savedTravellers }
    delete newTravellers[travellerNumber]
    setSavedTravellers(newTravellers)

    const newDocuments = { ...documentsUploaded }
    delete newDocuments[travellerNumber]
    setDocumentsUploaded(newDocuments)
  }

  const handleSaveTraveller = (travellerNumber: number, data: TravellerData) => {
    setSavedTravellers((prev) => ({
      ...prev,
      [travellerNumber]: data,
    }))
  }

  const handleViewDocuments = (travellerNumber: number) => {
    setSelectedTraveller(travellerNumber)
    setIsUploadModalOpen(true)
  }

  const handleSaveDocuments = (travellerNumber: number) => {
    setDocumentsUploaded((prev) => ({
      ...prev,
      [travellerNumber]: true,
    }))
  }

  return (
    <div className="space-y-4 md:space-y-6">
      <h2 className="text-black font-['Figtree'] text-[18px] md:text-[20px] font-semibold leading-normal">Saved Travellers</h2>

      <div className="bg-white rounded-lg border border-[#D2D8E4] p-4 md:p-6">
        {/* Header with Add Button */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-[#1A2F46] font-['Playfair_Display'] text-[20px] md:text-[22px] font-semibold leading-normal">Travellers List</div>
          <button
            onClick={handleAddTraveller}
            className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-[#e97737] rounded-lg hover:bg-[#d86629] transition-colors"
          >
            {/* <Plus className="w-4h-4 md:w-5 md:h-5" /> */}
            <img src="/images/account/add_box.svg" className="h-[18px] w-[18px] lg:h-[20px] lg:w-[20px]" />
            <span className="text-white font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-[24px] uppercase">ADD NEW TRAVELLER</span>
          </button>
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block">
          <div className="rounded-[2px] bg-[#FFF7F2] border-b border-[#e5e5e5]">
            <div className="grid grid-cols-[2fr_1.5fr_1fr_1.5fr_2fr] gap-4 pb-4 py-2">
              <div className="text-[#1A2F46] font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-normal uppercase ml-4 text-start">NAME</div>
              <div className="text-[#1A2F46] font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-normal text-start">D.O.B</div>
              <div className="text-[#1A2F46] font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-normal text-start">GENDER</div>
              <div className="text-[#1A2F46] font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-normal text-start">STATUS</div>
              <div className="text-[#1A2F46] font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-normal text-start">ACTIONS</div>
            </div>
          </div>


          <div className="space-y-4">
            {Object.entries(savedTravellers).map(([key, traveller]) => {
              const travellerNumber = Number.parseInt(key)
              return (
                <div
                  key={travellerNumber}
                  className="grid grid-cols-[2fr_1.5fr_1fr_1.5fr_2fr] gap-4 items-center py-4 border-b border-[#e5e5e5] last:border-0"
                >
                  {/* Name */}
                  <div className="flex items-center gap-3">
                    <div className="rounded-[4px] bg-[#EBF5F7] p-4 flex items-center justify-center flex-shrink-0">
                      {/* <User className="w-6 h-6 text-white" /> */}
                      <img src="/images/account/user2_blue.svg" alt="" className="" />
                    </div>
                    <div>
                      <div className="text-black font-['Figtree'] text-[16px] md:text-[18px] font-semibold leading-normal underline decoration-solid decoration-1 underline-offset-auto">
                        {traveller.firstName} {traveller.lastName}
                      </div>
                      <div className="text-black font-['Figtree'] text-[10px] md:text-[11px] font-normal leading-normal">({traveller.type})</div>
                    </div>
                  </div>

                  {/* DOB */}
                  <div className="text-black font-['Figtree'] text-[12px] md:text-[14px] font-medium leading-normal">{traveller.dateOfBirth}</div>

                  {/* Gender */}
                  <div className="text-black font-['Figtree'] text-[12px] md:text-[14px] font-medium leading-normal uppercase">{traveller.gender}</div>

                  {/* Status */}
                  <div className="px-4 py-2 rounded-[6px] bg-[#E3FAFF]">
                    <span className="inline-block text-[#1C8CA7] font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-normal">
                      Traveller updated
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleEditTraveller(travellerNumber)}
                      className="w-10 h-10 rounded-full border-2 border-[#1c8ca7] text-[#1c8ca7] flex items-center justify-center hover:bg-[#1c8ca7] hover:text-white transition-colors"
                      aria-label="Edit traveller"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteTraveller(travellerNumber)}
                      className="w-10 h-10 rounded-full border-2 border-[#1c8ca7] text-[#1c8ca7] flex items-center justify-center hover:bg-[#1c8ca7] hover:text-white transition-colors"
                      aria-label="Delete traveller"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleViewDocuments(travellerNumber)}
                      className="flex flex-col items-center gap-2 px-4 py-2 rounded-[8px] border border-[#E97737] bg-white group hover:bg-[#E97737]"
                    >
                      <FileText className="w-4 h-4 text-[#E97737] group-hover:text-white" />
                      <span className="text-[#E97737] text-center font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-normal group-hover:text-white">Your Documents</span>
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="lg:hidden space-y-4">
          {Object.entries(savedTravellers).map(([key, traveller]) => {
            const travellerNumber = Number.parseInt(key)
            return (
              <div key={travellerNumber} className="bg-[#fff7f2] rounded-lg p-4 space-y-4">
                {/* Traveller Info */}
                <div className="flex items-start gap-3">
                  <div className="rounded-[4px] bg-[#EBF5F7] p-4 flex items-center justify-center flex-shrink-0">
                    {/* <User className="w-6 h-6 text-white" /> */}
                    <img src="/images/account/user2_blue.svg" alt="" className="" />
                  </div>
                  <div className="flex-1">
                    <div className="text-black font-['Figtree'] text-[16px] md:text-[18px] font-semibold leading-normal underline decoration-solid decoration-1 underline-offset-auto mb-1">
                      {traveller.firstName} {traveller.lastName}
                    </div>
                    <div className="text-black font-['Figtree'] text-[10px] md:text-[11px] font-normal leading-normal mb-2">({traveller.type})</div>
                    <span className="inline-block px-4 py-2 rounded-[6px] bg-[#E3FAFF]  text-[#1C8CA7] font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-normal">
                      Traveller updated
                    </span>
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <div className="text-[#1A2F46] font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-normal mb-1">D.O.B</div>
                    <div className="text-black font-['Figtree'] text-[12px] md:text-[14px] font-medium leading-normal">{traveller.dateOfBirth}</div>
                  </div>
                  <div>
                    <div className="text-[#1A2F46] font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-normal mb-1">GENDER</div>
                    <div className="text-black font-['Figtree'] text-[12px] md:text-[14px] font-medium leading-normal uppercase">{traveller.gender}</div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleEditTraveller(travellerNumber)}
                    className="flex-1 min-w-[100px] flex items-center justify-center gap-2 px-4 py-2 border border-[#1c8ca7] rounded-[8px] group transition-colors"
                  >
                    <Edit2 className="w-4 h-4 text-[#1c8ca7] group-hover:text-white" />
                    <span className="text-[#1c8ca7] text-center font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-normal group-hover:text-white uppercase">Edit</span>
                  </button>
                  <button
                    onClick={() => handleDeleteTraveller(travellerNumber)}
                    className="flex-1 min-w-[100px] flex items-center justify-center gap-2 px-4 py-2 border border-[#1c8ca7] rounded-[8px] group transition-colors"
                  >
                    <Trash2 className="w-4 h-4 text-[#1c8ca7] group-hover:text-white" />
                    <span className="text-[#1c8ca7] text-center font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-normal group-hover:text-white uppercase">Delete</span>
                  </button>
                  <button
                    onClick={() => handleViewDocuments(travellerNumber)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-[8px] border border-[#E97737] group hover:bg-[#E97737]"
                  >
                    <FileText className="w-4 h-4 text-[#E97737] group-hover:text-white" />
                    <span className="text-[#E97737] text-center font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-normal group-hover:text-white">Your Documents</span>
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Empty State */}
        {Object.keys(savedTravellers).length === 0 && (
          <div className="text-center py-12">
            {/* <div className="rounded-[4px] bg-[#EBF5F7] p-4 flex items-center justify-center flex-shrink-0">
             
              <img src="/images/account/user2_blue.svg" alt="" className="" />
            </div> */}
            <User className="w-16 h-16 text-[#1C8CA7] mx-auto mb-4 rounded-[4px] bg-[#EBF5F7] p-4" />
            <h3 className="text-black font-['Figtree'] text-[16px] md:text-[18px] font-semibold leading-normal mb-2">No Saved Travellers</h3>
            <p className="text-black font-['Figtree'] text-[10px] md:text-[11px] font-normal leading-normal mb-6">Add travellers to save their details for future bookings</p>
            <button
              onClick={handleAddTraveller}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#e97737] rounded-lg hover:bg-[#d86629] transition-colors"
            >
              {/* <Plus className="w-5 h-5" /> */}
              <img src="/images/account/add_box.svg" className="h-[18px] w-[18px] lg:h-[20px] lg:w-[20px]" />
              <span className="text-white font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-[24px] uppercase">ADD NEW TRAVELLER</span>
            </button>
          </div>
        )}
      </div>

      {/* Add/Edit Traveller Modal */}
      <AddTravellerModal
        isOpen={isAddModalOpen}
        onClose={() => {
          setIsAddModalOpen(false)
          setEditingTraveller(null)
        }}
        travellerNumber={editingTraveller || Object.keys(savedTravellers).length + 1}
        totalTravellers={Object.keys(savedTravellers).length + 1}
        bookingTitle="Saved Traveller"
        onSave={handleSaveTraveller}
        initialData={editingTraveller ? savedTravellers[editingTraveller] : undefined}
      />

      {/* Upload Documents Modal */}
      {selectedTraveller && (
        <UploadDocumentsModal
          isOpen={isUploadModalOpen}
          onClose={() => {
            setIsUploadModalOpen(false)
            setSelectedTraveller(null)
          }}
          travellerNumber={selectedTraveller}
          totalTravellers={Object.keys(savedTravellers).length}
          travellerName={`${savedTravellers[selectedTraveller]?.firstName} ${savedTravellers[selectedTraveller]?.lastName}`}
          bookingTitle="Saved Traveller"
          onSave={handleSaveDocuments}
        />
      )}
    </div>
  )
}
