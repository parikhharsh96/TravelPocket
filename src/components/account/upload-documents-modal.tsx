"use client"

import type React from "react"

import { X, User, Edit2 } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

interface UploadDocumentsModalProps {
  isOpen: boolean
  onClose: () => void
  travellerNumber: number
  totalTravellers: number
  travellerName: string
  bookingTitle: string
  onSave?: (travellerNumber: number, documents: DocumentData) => void
}

export interface DocumentData {
  photo?: File
  signature?: File
  aadhaarFront?: File
  aadhaarBack?: File
  panCard?: File
  passportPhoto?: File
}

export function UploadDocumentsModal({
  isOpen,
  onClose,
  travellerNumber,
  totalTravellers,
  travellerName,
  bookingTitle,
  onSave,
}: UploadDocumentsModalProps) {
  const [activeTraveller, setActiveTraveller] = useState(travellerNumber)
  const [documents, setDocuments] = useState<DocumentData>({})

  const isKailashYatra = bookingTitle.toLowerCase().includes("kailash")

  if (!isOpen) return null

  const handleFileChange = (field: keyof DocumentData, file: File | undefined) => {
    setDocuments((prev) => ({
      ...prev,
      [field]: file,
    }))
  }

  const handleSave = () => {
    if (onSave) {
      onSave(activeTraveller, documents)
    }
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white rounded-lg w-full max-w-5xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-[#e5e5e5] p-3 sm:p-4 md:p-6 flex items-center justify-between z-10">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1a2f46]">Upload Documents</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-[#5a5a5a]" />
          </button>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-4 md:p-6">
          {/* Traveller Tabs */}
          <div className="flex gap-2 mb-4 sm:mb-6 overflow-x-auto pb-2">
            {Array.from({ length: totalTravellers }).map((_, index) => {
              const travNum = index + 1
              const isActive = activeTraveller === travNum
              return (
                <button
                  key={travNum}
                  onClick={() => setActiveTraveller(travNum)}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap text-sm sm:text-base ${
                    isActive
                      ? "bg-[#1a2f46] text-white"
                      : "bg-white border-2 border-[#1a2f46] text-[#1a2f46] hover:bg-[#f5f5f5]"
                  }`}
                >
                  <User className="w-4 h-4" />
                  Traveller {travNum}
                </button>
              )
            })}
          </div>

          {/* Traveller Name */}
          <h3 className="text-base sm:text-lg font-bold text-[#1a2f46] mb-4 sm:mb-6">{travellerName}</h3>

          {/* Personal Documents Section */}
          <div className="mb-4 sm:mb-6">
            <h4 className="text-xs sm:text-sm font-bold text-[#1a2f46] bg-[#fff7f2] px-3 sm:px-4 py-2 mb-3 sm:mb-4 uppercase tracking-wide">
              Personal Documents
            </h4>

            <div className="space-y-3 sm:space-y-4">
              <FileUploadField
                label="Photo"
                required
                file={documents.photo}
                onChange={(file) => handleFileChange("photo", file)}
              />
              <FileUploadField
                label="Signature"
                required
                file={documents.signature}
                onChange={(file) => handleFileChange("signature", file)}
              />
            </div>
          </div>

          {/* Identification Documents Section */}
          <div className="mb-4 sm:mb-6">
            <h4 className="text-xs sm:text-sm font-bold text-[#1a2f46] bg-[#fff7f2] px-3 sm:px-4 py-2 mb-3 sm:mb-4 uppercase tracking-wide">
              Identification Documents
            </h4>

            <div className="space-y-3 sm:space-y-4">
              <FileUploadField
                label="Aadhaar Card Front Side"
                required
                file={documents.aadhaarFront}
                onChange={(file) => handleFileChange("aadhaarFront", file)}
                icon={
                  <Image
                    src="/images/account/aadhaar-logo.jpg"
                    alt="Aadhaar"
                    width={24}
                    height={24}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                }
              />
              <FileUploadField
                label="Aadhaar Card Back Side"
                required
                file={documents.aadhaarBack}
                onChange={(file) => handleFileChange("aadhaarBack", file)}
                icon={
                  <Image
                    src="/images/account/aadhaar-logo.jpg"
                    alt="Aadhaar"
                    width={24}
                    height={24}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                }
              />
            </div>
          </div>

          {/* Other Documents Section (Conditional) */}
          {isKailashYatra && (
            <div className="mb-4 sm:mb-6">
              <h4 className="text-xs sm:text-sm font-bold text-[#1a2f46] bg-[#fff7f2] px-3 sm:px-4 py-2 mb-3 sm:mb-4 uppercase tracking-wide">
                Other Documents (Applicable Only For Kailash Mansarovar Yatra)
              </h4>

              <div className="space-y-3 sm:space-y-4">
                <FileUploadField
                  label="PAN Card"
                  required
                  file={documents.panCard}
                  onChange={(file) => handleFileChange("panCard", file)}
                  icon={
                    <Image
                      src="/images/account/pan-card-logo.jpg"
                      alt="PAN Card"
                      width={24}
                      height={24}
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                  }
                />
                <FileUploadField
                  label="Passport Photo Front Side"
                  required
                  file={documents.passportPhoto}
                  onChange={(file) => handleFileChange("passportPhoto", file)}
                  icon={
                    <Image
                      src="/images/account/passport-icon.png"
                      alt="Passport"
                      width={24}
                      height={24}
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                  }
                />
              </div>
            </div>
          )}

          {/* Save Button */}
          <div className="flex justify-center mt-6 sm:mt-8">
            <button
              onClick={handleSave}
              className="w-full sm:w-auto bg-[#e97737] hover:bg-[#d86830] text-white font-medium py-3 px-6 sm:px-8 rounded-lg transition-colors text-sm sm:text-base"
            >
              SAVE ALL DOCUMENTS
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

interface FileUploadFieldProps {
  label: string
  required?: boolean
  file?: File
  onChange: (file: File | undefined) => void
  icon?: React.ReactNode
}

function FileUploadField({ label, required, file, onChange, icon }: FileUploadFieldProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    onChange(selectedFile)

    if (selectedFile && selectedFile.type.startsWith("image/")) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string)
      }
      reader.readAsDataURL(selectedFile)
    } else {
      setPreviewUrl(null)
    }
  }

  const handleEditClick = () => {
    const fileInput = document.getElementById(`file-input-${label}`) as HTMLInputElement
    fileInput?.click()
  }

  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start">
      {/* Label and File Input */}
      <div className="flex-1 w-full">
        <label className="block text-xs sm:text-sm font-medium text-[#1a2f46] mb-2">
          {icon && <span className="inline-block mr-2 align-middle">{icon}</span>}
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <div className="relative">
          <input
            id={`file-input-${label}`}
            type="file"
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            accept="image/*,.pdf"
          />
          <div className="flex items-center gap-2 border border-[#e5e5e5] rounded-lg p-2 sm:p-3 bg-white">
            <button
              type="button"
              className="bg-[#1c8ca7] hover:bg-[#157a92] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded text-xs sm:text-sm font-medium transition-colors whitespace-nowrap"
            >
              Choose File
            </button>
            <span className="text-xs sm:text-sm text-[#5a5a5a] truncate">{file ? file.name : "No File Chosen"}</span>
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className="relative flex-shrink-0 self-center sm:self-start">
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#f5f5f5] border border-[#e5e5e5] rounded-lg flex items-center justify-center overflow-hidden">
          {previewUrl ? (
            <img src={previewUrl || "/placeholder.svg"} alt={label} className="w-full h-full object-cover" />
          ) : (
            <div className="text-center">
              <User className="w-5 h-5 sm:w-6 sm:h-6 text-[#d9d9d9] mx-auto mb-1" />
              <span className="text-[10px] sm:text-xs text-[#5a5a5a]">PHOTO</span>
            </div>
          )}
        </div>
        {file && (
          <button
            onClick={handleEditClick}
            className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-7 h-7 sm:w-8 sm:h-8 bg-white border-2 border-[#1c8ca7] rounded-full flex items-center justify-center hover:bg-[#1c8ca7] transition-colors group"
            aria-label="Change file"
          >
            <Edit2 className="w-3 h-3 sm:w-4 sm:h-4 text-[#1c8ca7] group-hover:text-white" />
          </button>
        )}
      </div>
    </div>
  )
}
