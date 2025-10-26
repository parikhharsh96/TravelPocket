"use client"

import type React from "react"

import { useState } from "react"
import { X, CalendarIcon, User } from "lucide-react"

interface AddTravellerModalProps {
  isOpen: boolean
  onClose: () => void
  travellerNumber: number
  totalTravellers: number
  bookingTitle: string
  onSave?: (travellerNumber: number, data: TravellerData) => void
  initialData?: TravellerData
}

export interface TravellerData {
  firstName: string
  lastName: string
  dateOfBirth: string
  gender: string
  email: string
  mobileCountryCode: string
  mobile: string
  nationality: string
  aadhaar: string
  pan: string
  passportNo: string
  placeOfIssue: string
  passportExpiry: string
  addressLine1: string
  addressLine2: string
  type: string // "Adult" or "Child"
}

export function AddTravellerModal({
  isOpen,
  onClose,
  travellerNumber,
  totalTravellers,
  bookingTitle,
  onSave,
  initialData,
}: AddTravellerModalProps) {
  const [activeTraveller, setActiveTraveller] = useState(travellerNumber)
  const [formData, setFormData] = useState<TravellerData>(
    initialData || {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "",
      email: "",
      mobileCountryCode: "+91",
      mobile: "",
      nationality: "Indian",
      aadhaar: "",
      pan: "",
      passportNo: "",
      placeOfIssue: "",
      passportExpiry: "",
      addressLine1: "",
      addressLine2: "",
      type: "Adult",
    },
  )

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSave) {
      onSave(activeTraveller, formData)
    }
    onClose()
  }

  const isKailashYatra = bookingTitle.toLowerCase().includes("kailash")

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-lg w-full max-w-4xl my-8 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-[#e5e5e5] p-4 md:p-6 flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-bold text-[#1a2f46]">Add Traveller's Details</h2>
          <button
            onClick={onClose}
            className="text-[#5a5a5a] hover:text-[#1a2f46] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Traveller Tabs */}
        <div className="p-4 md:p-6 border-b border-[#e5e5e5]">
          <div className="flex gap-2 flex-wrap">
            {Array.from({ length: totalTravellers }).map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTraveller(index + 1)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTraveller === index + 1
                    ? "bg-[#1a2f46] text-white"
                    : "bg-white text-[#1a2f46] border-2 border-[#1a2f46]"
                }`}
              >
                <User className="w-4 h-4" />
                Traveller {index + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 md:p-6 space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <div className="bg-[#fff7f2] px-4 py-2 rounded">
              <h3 className="text-sm font-bold text-[#1a2f46] uppercase tracking-wide">Personal Information</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#1a2f46] mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full px-3 py-2 border border-[#d2d8e4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1c8ca7]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1a2f46] mb-1">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full px-3 py-2 border border-[#d2d8e4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1c8ca7]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1a2f46] mb-1">
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="DD/MM/YYYY"
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                    className="w-full px-3 py-2 border border-[#d2d8e4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1c8ca7] pr-10"
                    required
                  />
                  <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5a5a5a]" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#1a2f46] mb-2">
                  Gender <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={formData.gender === "male"}
                      onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                      className="w-4 h-4 text-[#1c8ca7] focus:ring-[#1c8ca7]"
                      required
                    />
                    <span className="text-sm text-[#1a2f46]">Male</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={formData.gender === "female"}
                      onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                      className="w-4 h-4 text-[#1c8ca7] focus:ring-[#1c8ca7]"
                    />
                    <span className="text-sm text-[#1a2f46]">Female</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1a2f46] mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 border border-[#d2d8e4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1c8ca7]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1a2f46] mb-1">
                  Mobile No. <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  <select
                    value={formData.mobileCountryCode}
                    onChange={(e) => setFormData({ ...formData, mobileCountryCode: e.target.value })}
                    className="w-20 px-2 py-2 border border-[#d2d8e4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1c8ca7]"
                  >
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="Enter Mobile Number"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="flex-1 px-3 py-2 border border-[#d2d8e4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1c8ca7]"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#1a2f46] mb-1">
                  Nationality <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.nationality}
                  onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
                  className="w-full px-3 py-2 border border-[#d2d8e4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1c8ca7]"
                  required
                />
              </div>
            </div>
          </div>

          {/* Identification */}
          <div className="space-y-4">
            <div className="bg-[#fff7f2] px-4 py-2 rounded">
              <h3 className="text-sm font-bold text-[#1a2f46] uppercase tracking-wide">Identification</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#1a2f46] mb-1">
                  Aadhaar No <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Aadhaar No."
                  value={formData.aadhaar}
                  onChange={(e) => setFormData({ ...formData, aadhaar: e.target.value })}
                  className="w-full px-3 py-2 border border-[#d2d8e4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1c8ca7]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1a2f46] mb-1">
                  PAN Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter PAN No."
                  value={formData.pan}
                  onChange={(e) => setFormData({ ...formData, pan: e.target.value })}
                  className="w-full px-3 py-2 border border-[#d2d8e4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1c8ca7]"
                  required
                />
              </div>
            </div>
          </div>

          {/* Passport Details - Only for Kailash Yatra */}
          {isKailashYatra && (
            <div className="space-y-4">
              <div className="bg-[#fff7f2] px-4 py-2 rounded">
                <h3 className="text-sm font-bold text-[#1a2f46] uppercase tracking-wide">
                  Passport Details (Applicable Only For Kailash Mansarovar Yatra)
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#1a2f46] mb-1">
                    Passport No <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Passport No."
                    value={formData.passportNo}
                    onChange={(e) => setFormData({ ...formData, passportNo: e.target.value })}
                    className="w-full px-3 py-2 border border-[#d2d8e4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1c8ca7]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1a2f46] mb-1">
                    Place of Issue <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Place of Issue"
                    value={formData.placeOfIssue}
                    onChange={(e) => setFormData({ ...formData, placeOfIssue: e.target.value })}
                    className="w-full px-3 py-2 border border-[#d2d8e4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1c8ca7]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1a2f46] mb-1">
                    Passport Expiry Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="DD/MM/YYYY"
                      value={formData.passportExpiry}
                      onChange={(e) => setFormData({ ...formData, passportExpiry: e.target.value })}
                      className="w-full px-3 py-2 border border-[#d2d8e4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1c8ca7] pr-10"
                      required
                    />
                    <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5a5a5a]" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Mailing Address */}
          <div className="space-y-4">
            <div className="bg-[#fff7f2] px-4 py-2 rounded">
              <h3 className="text-sm font-bold text-[#1a2f46] uppercase tracking-wide">Mailing Address</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#1a2f46] mb-1">
                  Address Line 1 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Address Line 1"
                  value={formData.addressLine1}
                  onChange={(e) => setFormData({ ...formData, addressLine1: e.target.value })}
                  className="w-full px-3 py-2 border border-[#d2d8e4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1c8ca7]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1a2f46] mb-1">Address Line 2</label>
                <input
                  type="text"
                  placeholder="Enter Address Line 2"
                  value={formData.addressLine2}
                  onChange={(e) => setFormData({ ...formData, addressLine2: e.target.value })}
                  className="w-full px-3 py-2 border border-[#d2d8e4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1c8ca7]"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="bg-[#e97737] hover:bg-[#d86830] text-white font-medium py-3 px-8 rounded-lg transition-colors"
            >
              SAVE TRAVELLER DETAILS
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
