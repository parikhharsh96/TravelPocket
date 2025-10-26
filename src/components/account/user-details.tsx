"use client"

import type React from "react"

import { useState } from "react"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function UserDetails() {
  const [formData, setFormData] = useState({
    firstName: "Shivam",
    lastName: "Tripathi",
    dateOfBirth: "18.03.1984",
    gender: "male",
    email: "shivamtripathi@gmail.com",
    countryCode: "+91",
    mobile: "98765 43210",
    nationality: "Indian",
    aadhaar: "",
    pan: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
  }

  return (
    <div className="bg-white rounded-lg p-4 md:p-6 lg:p-8">
      <h2 className="text-xl md:text-2xl font-bold text-[#1a2f46] mb-6 md:mb-8">Your Details</h2>

      {/* Profile Photo */}
      <div className="flex justify-center mb-6 md:mb-8">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-gray-200">
          <img src="/images/account/professional-male-portrait.png" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
        {/* Personal Information Section */}
        <div>
          <h3 className="text-sm md:text-base font-semibold text-[#1a2f46] mb-4 md:mb-6 uppercase tracking-wide">
            Personal Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* First Name */}
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-sm text-[#333333]">
                First Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="border-gray-300 focus:border-[#e97737] focus:ring-[#e97737]"
                required
              />
            </div>

            {/* Last Name */}
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-sm text-[#333333]">
                Last Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="border-gray-300 focus:border-[#e97737] focus:ring-[#e97737]"
                required
              />
            </div>

            {/* Date of Birth */}
            <div className="space-y-2">
              <Label htmlFor="dob" className="text-sm text-[#333333]">
                Date of Birth <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="dob"
                  value={formData.dateOfBirth}
                  onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                  className="border-gray-300 focus:border-[#e97737] focus:ring-[#e97737] pr-10"
                  required
                />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Gender */}
            <div className="space-y-2">
              <Label className="text-sm text-[#333333]">
                Gender <span className="text-red-500">*</span>
              </Label>
              <RadioGroup
                value={formData.gender}
                onValueChange={(value) => setFormData({ ...formData, gender: value })}
                className="flex gap-6 pt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="male" className="border-gray-300 text-[#e97737]" />
                  <Label htmlFor="male" className="text-sm font-normal cursor-pointer">
                    Male
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="female" className="border-gray-300 text-[#e97737]" />
                  <Label htmlFor="female" className="text-sm font-normal cursor-pointer">
                    Female
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Email Address */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm text-[#333333]">
                Email Address <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="border-gray-300 focus:border-[#e97737] focus:ring-[#e97737]"
                required
              />
            </div>

            {/* Mobile Number */}
            <div className="space-y-2">
              <Label htmlFor="mobile" className="text-sm text-[#333333]">
                Mobile No. <span className="text-red-500">*</span>
              </Label>
              <div className="flex gap-2">
                <select
                  value={formData.countryCode}
                  onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                  className="w-20 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e97737] focus:border-[#e97737]"
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                </select>
                <Input
                  id="mobile"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  className="flex-1 border-gray-300 focus:border-[#e97737] focus:ring-[#e97737]"
                  required
                />
              </div>
            </div>

            {/* Nationality */}
            <div className="space-y-2 md:col-span-2 lg:col-span-1">
              <Label htmlFor="nationality" className="text-sm text-[#333333]">
                Nationality <span className="text-red-500">*</span>
              </Label>
              <Input
                id="nationality"
                value={formData.nationality}
                onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
                className="border-gray-300 focus:border-[#e97737] focus:ring-[#e97737]"
                required
              />
            </div>
          </div>
        </div>

        {/* Identification Section */}
        <div>
          <h3 className="text-sm md:text-base font-semibold text-[#1a2f46] mb-4 md:mb-6 uppercase tracking-wide">
            Identification
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Aadhaar Number */}
            <div className="space-y-2">
              <Label htmlFor="aadhaar" className="text-sm text-[#333333]">
                Aadhaar No <span className="text-red-500">*</span>
              </Label>
              <Input
                id="aadhaar"
                placeholder="Enter Aadhaar No."
                value={formData.aadhaar}
                onChange={(e) => setFormData({ ...formData, aadhaar: e.target.value })}
                className="border-gray-300 focus:border-[#e97737] focus:ring-[#e97737]"
              />
            </div>

            {/* PAN Number */}
            <div className="space-y-2">
              <Label htmlFor="pan" className="text-sm text-[#333333]">
                PAN Number <span className="text-red-500">*</span>
              </Label>
              <Input
                id="pan"
                placeholder="Enter PAN No."
                value={formData.pan}
                onChange={(e) => setFormData({ ...formData, pan: e.target.value })}
                className="border-gray-300 focus:border-[#e97737] focus:ring-[#e97737]"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <Button
            type="submit"
            className="bg-[#e97737] hover:bg-[#c75414] text-white px-8 py-3 rounded-md font-medium text-sm md:text-base"
          >
            SAVE DETAILS
          </Button>
        </div>
      </form>
    </div>
  )
}
