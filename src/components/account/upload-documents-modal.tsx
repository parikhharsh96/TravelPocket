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
          <h2 className="ext-[#1A2F46] font-['Playfair_Display'] text-[24px] md:text-[28px] font-semibold leading-normal">Upload Documents</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-[#5a5a5a] cursor-pointer" />
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
                  className={`flex items-center gap-2 px-4 py-2 rounded-[6px] font-medium ${activeTraveller === index + 1
                    ? "bg-[#1A2F46]"
                    : "bg-white border-1 border-[#1A2F46]"
                    }`}
                >
                  <div className="rounded-[4px] bg-[#EBF5F7] p-2 flex items-center justify-center flex-shrink-0">
                    {/* <User className="w-6 h-6 text-white" /> */}
                    <img src="/images/account/user2_blue.svg" alt="" className="w-[16px] h-[16px]" />
                  </div>
                  <span className={`font-['Figtree'] text-[14px] md:text-[16px] font-semibold leading-normal ${activeTraveller === index + 1
                    ? "text-white"
                    : "text-[#1A2F46]"
                    }`}>Traveller {travNum}</span>
                </button>
              )
            })}
          </div>

          {/* Traveller Name */}
          <h3 className="text-black font-['Figtree'] text-[16px] md:text-[18px] font-semibold leading-normal mb-4 sm:mb-6">{travellerName}</h3>

          {/* Personal Documents Section */}
          <div className="mb-4 sm:mb-6">
            <h4 className="bg-[#FFF7F2] px-4 py-2 rounded-[2px] mb-3 sm:mb-4">
              <span className="text-[#1A2F46] font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-normal uppercase">Personal Documents</span>
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
            <h4 className="bg-[#FFF7F2] px-4 py-2 rounded-[2px] mb-3 sm:mb-4">
              <span className="text-[#1A2F46] font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-normal uppercase">Identification Documents</span>
            </h4>

            <div className="space-y-3 sm:space-y-4">
              <FileUploadField
                label="Aadhaar Card Front Side"
                required
                file={documents.aadhaarFront}
                onChange={(file) => handleFileChange("aadhaarFront", file)}
                icon={
                  <Image
                    src="/images/account/aadhaar_english_logo.svg"
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
                    src="/images/account/aadhaar_english_logo.svg"
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
              <h4 className="bg-[#FFF7F2] px-4 py-2 rounded-[2px] mb-3 sm:mb-4">
                <span className="text-[#1A2F46] font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-normal uppercase">Other Documents (Applicable Only For Kailash Mansarovar Yatra)</span>
              </h4>

              <div className="space-y-3 sm:space-y-4">
                <FileUploadField
                  label="PAN Card"
                  required
                  file={documents.panCard}
                  onChange={(file) => handleFileChange("panCard", file)}
                  icon={
                    <Image
                      src="/images/account/pan.svg"
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
                      src="/images/account/passport.png"
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
              className="w-full sm:w-auto bg-[#e97737] hover:bg-[#d86830] py-3 px-6 sm:px-8 rounded-lg transition-colors cursor-pointer"
            >
              <span className="text-white font-['Figtree'] text-[14px] font-semibold leading-[24px] uppercase">SAVE ALL DOCUMENTS</span>
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
        <label className="block text-black font-['Figtree'] text-[12px] md:text-[14px] font-medium leading-normal mb-2">
          {icon && <span className="inline-block mr-2 align-middle">{icon}</span>}
          {label}
          {required && <span className="text-[#FF0000] ml-1">*</span>}
        </label>
        <div className="relative">
          <input
            id={`file-input-${label}`}
            type="file"
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer text-black font-['Figtree'] text-[14px] md:text-[16px] font-normal leading-normal"
            accept="image/*,.pdf"
          />
          <div className="flex items-center gap-2 border border-[#e5e5e5] rounded-lg p-2 sm:p-3 bg-white">
            <button
              type="button"
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded transition-colors whitespace-nowrap group cursor-pointer ${
                file ? "bg-[#1C8CA7]" : "bg-[#EBF5F7]"
              }`}
            >
              <span className={`font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-[19px] group-hover:text-white ${
                file ? "text-white" : "text-[#1C8CA7]"
              }`}>Choose File</span>
            </button>
            <span className="text-black font-['Figtree'] text-[14px] md:text-[16px] font-normal leading-normal truncate">{file ? file.name : "No File Chosen"}</span>
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className="relative flex-shrink-0 self-center sm:self-start">
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#F2F2F2] rounded-[4px] border border-[#D2D8E4] bg-[#F2F2F2] flex items-center justify-center overflow-hidden">
          {previewUrl ? (
            <img src={previewUrl || "/placeholder.svg"} alt={label} className="w-full h-full object-cover" />
          ) : (
            <div className="text-center">
              <User className="w-5 h-5 sm:w-6 sm:h-6 text-[#d9d9d9] mx-auto mb-1" />
              <span className="text-black font-['Figtree'] text-[10px] md:text-[12px] font-normal leading-normal uppercase">PHOTO</span>
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
