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
      <h2 className="text-2xl md:text-3xl font-bold text-[#1a2f46]">Saved Travellers</h2>

      <div className="bg-white rounded-lg border border-[#e5e5e5] p-4 md:p-6">
        {/* Header with Add Button */}
        <div className="flex justify-end mb-6">
          <button
            onClick={handleAddTraveller}
            className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-[#e97737] text-white rounded-lg font-medium hover:bg-[#d86629] transition-colors text-sm md:text-base"
          >
            <Plus className="w-4 h-4 md:w-5 md:h-5" />
            ADD NEW TRAVELLER
          </button>
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-[2fr_1.5fr_1fr_1.5fr_2fr] gap-4 pb-4 mb-4 border-b border-[#e5e5e5]">
            <div className="text-sm font-bold text-[#1a2f46] uppercase tracking-wide">NAME</div>
            <div className="text-sm font-bold text-[#1a2f46] uppercase tracking-wide">D.O.B</div>
            <div className="text-sm font-bold text-[#1a2f46] uppercase tracking-wide">GENDER</div>
            <div className="text-sm font-bold text-[#1a2f46] uppercase tracking-wide">STATUS</div>
            <div className="text-sm font-bold text-[#1a2f46] uppercase tracking-wide">ACTIONS</div>
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
                    <div className="w-12 h-12 rounded-full bg-[#1c8ca7] flex items-center justify-center flex-shrink-0">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-[#1a2f46] underline">
                        {traveller.firstName} {traveller.lastName}
                      </div>
                      <div className="text-sm text-[#5a5a5a]">({traveller.type})</div>
                    </div>
                  </div>

                  {/* DOB */}
                  <div className="text-[#1a2f46]">{traveller.dateOfBirth}</div>

                  {/* Gender */}
                  <div className="text-[#1a2f46] uppercase">{traveller.gender}</div>

                  {/* Status */}
                  <div>
                    <span className="inline-block px-4 py-2 bg-[#ddf9ff] text-[#1c8ca7] rounded-lg text-sm font-medium">
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
                      className="flex items-center gap-2 px-4 py-2 border-2 border-[#e97737] text-[#e97737] rounded-lg font-medium hover:bg-[#e97737] hover:text-white transition-colors"
                    >
                      <FileText className="w-4 h-4" />
                      Your Documents
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
                  <div className="w-12 h-12 rounded-full bg-[#1c8ca7] flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-[#1a2f46] underline mb-1">
                      {traveller.firstName} {traveller.lastName}
                    </div>
                    <div className="text-sm text-[#5a5a5a] mb-2">({traveller.type})</div>
                    <span className="inline-block px-3 py-1 bg-[#ddf9ff] text-[#1c8ca7] rounded-lg text-xs font-medium">
                      Traveller updated
                    </span>
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <div className="text-[#5a5a5a] mb-1">D.O.B</div>
                    <div className="text-[#1a2f46] font-medium">{traveller.dateOfBirth}</div>
                  </div>
                  <div>
                    <div className="text-[#5a5a5a] mb-1">GENDER</div>
                    <div className="text-[#1a2f46] font-medium uppercase">{traveller.gender}</div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleEditTraveller(travellerNumber)}
                    className="flex-1 min-w-[100px] flex items-center justify-center gap-2 px-4 py-2 border-2 border-[#1c8ca7] text-[#1c8ca7] rounded-lg font-medium hover:bg-[#1c8ca7] hover:text-white transition-colors text-sm"
                  >
                    <Edit2 className="w-4 h-4" />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteTraveller(travellerNumber)}
                    className="flex-1 min-w-[100px] flex items-center justify-center gap-2 px-4 py-2 border-2 border-[#1c8ca7] text-[#1c8ca7] rounded-lg font-medium hover:bg-[#1c8ca7] hover:text-white transition-colors text-sm"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </button>
                  <button
                    onClick={() => handleViewDocuments(travellerNumber)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 border-2 border-[#e97737] text-[#e97737] rounded-lg font-medium hover:bg-[#e97737] hover:text-white transition-colors text-sm"
                  >
                    <FileText className="w-4 h-4" />
                    Your Documents
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Empty State */}
        {Object.keys(savedTravellers).length === 0 && (
          <div className="text-center py-12">
            <User className="w-16 h-16 text-[#d2d8e4] mx-auto mb-4" />
            <h3 className="text-lg font-bold text-[#1a2f46] mb-2">No Saved Travellers</h3>
            <p className="text-[#5a5a5a] mb-6">Add travellers to save their details for future bookings</p>
            <button
              onClick={handleAddTraveller}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#e97737] text-white rounded-lg font-medium hover:bg-[#d86629] transition-colors"
            >
              <Plus className="w-5 h-5" />
              ADD NEW TRAVELLER
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
