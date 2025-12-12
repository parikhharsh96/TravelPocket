"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useApi } from '@/lib/use-api'
import { API_ENDPOINTS } from '@/lib/constants'

interface UserDetailsData {
  firstName: string
  lastName: string
  dateOfBirth: string
  gender: string
  email: string
  countryCode: string
  mobile: string
  nationality: string
  aadhaar: string
  pan: string
}

export function UserDetails() {
  const { data, loading, error, execute } = useApi<any>()
  const [userDetails, setUserDetails] = useState<UserDetailsData>({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "male",
    email: "",
    countryCode: "+91",
    mobile: "",
    nationality: "",
    aadhaar: "",
    pan: "",
  })
  const [formData, setFormData] = useState<UserDetailsData>({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "male",
    email: "",
    countryCode: "+91",
    mobile: "",
    nationality: "",
    aadhaar: "",
    pan: "",
  })

  useEffect(() => {
    // Replace with actual customer ID from auth context or props
    const customerId = 26
    const apiUrl = `${API_ENDPOINTS.accounts.getUserDetails}?customerid=${customerId}`
    execute(apiUrl)
  }, [execute])

  useEffect(() => {
    console.log('Loading state:', loading)
    if (data) {
      console.log('User Details API data:', data)
      if (data.data && data.data.profile) {
        const profile = data.data.profile
        const mappedData: UserDetailsData = {
          firstName: profile.firstName || "",
          lastName: profile.lastName || "",
          dateOfBirth: profile.dateOfBirth || "",
          gender: profile.gender || "male",
          email: profile.email || "",
          countryCode: profile.countryCode || "+91",
          mobile: profile.mobile || "",
          nationality: profile.nationality || "",
          aadhaar: profile.aadhaar || "",
          pan: profile.pan || "",
        }
        setUserDetails(mappedData)
        setFormData(mappedData)
      } else {
        // Profile is null, use fallback data
        console.log('Profile data is null, using fallback data')
        const fallbackData: UserDetailsData = {
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
        }
        setUserDetails(fallbackData)
        setFormData(fallbackData)
      }
    }
    if (error) {
      console.error('User Details API error:', error)
      // Fallback to default data on error
      const fallbackData: UserDetailsData = {
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
      }
      setUserDetails(fallbackData)
      setFormData(fallbackData)
    }
  }, [data, error, loading])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
  }

  return (
    <>
      <h2 className="text-black font-['Figtree'] text-[18px] md:text-[20px] font-semibold leading-normal mb-6 md:mb-8">Your Details</h2>
      <div className="bg-white rounded-lg border border-[#D2D8E4] p-4 md:p-6 lg:p-8">
        {/* Profile Photo */}
        <div className="flex justify-start mb-6 md:mb-8">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-gray-200">
            <img src="/images/account/professional-male-portrait.png" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
          {/* Personal Information Section */}
          <div>
            {/* <h3 className="text-sm md:text-base font-semibold text-[#1a2f46] mb-4 md:mb-6 uppercase tracking-wide">
              Personal Information
            </h3> */}
            <div className="bg-[#FFF7F2] px-4 py-2 rounded-[2px] mb-4 md:mb-6">
              <h3 className="text-[#1A2F46] font-['Figtree'] text-[14px] font-semibold leading-normal uppercase">Personal Information</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {/* First Name */}
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-black font-['Figtree'] text-[14px] font-medium leading-normal">
                  First Name <span className="text-[#FF0000]">*</span>
                </Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="rounded-[8px] border border-[#D2D8E4] bg-white focus:border-[#e97737] focus:ring-[#e97737] placeholder:text-[#5A5A5A] placeholder:font-['Figtree'] placeholder:text-[16px] placeholder:font-normal placeholder:leading-normal text-[#000000] font-['Figtree'] text-[16px] font-normal leading-normal"
                  required
                />
              </div>

              {/* Last Name */}
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-black font-['Figtree'] text-[14px] font-medium leading-normal">
                  Last Name <span className="text-[#FF0000]">*</span>
                </Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="rounded-[8px] border border-[#D2D8E4] bg-white focus:border-[#e97737] focus:ring-[#e97737] placeholder:text-[#5A5A5A] placeholder:font-['Figtree'] placeholder:text-[16px] placeholder:font-normal placeholder:leading-normal text-[#000000] font-['Figtree'] text-[16px] font-normal leading-normal"
                  required
                />
              </div>

              {/* Date of Birth */}
              <div className="space-y-2">
                <Label htmlFor="dob" className="text-black font-['Figtree'] text-[14px] font-medium leading-normal">
                  Date of Birth <span className="text-[#FF0000]">*</span>
                </Label>
                <div className="relative">
                  <Input
                    id="dob"
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                    className="rounded-[8px] border border-[#D2D8E4] bg-white focus:border-[#e97737] focus:ring-[#e97737] pr-10 placeholder:text-[#5A5A5A] placeholder:font-['Figtree'] placeholder:text-[16px] placeholder:font-normal placeholder:leading-normal text-[#000000] font-['Figtree'] text-[16px] font-normal leading-normal"
                    required
                  />
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-black pointer-events-none" />
                </div>
              </div>

              {/* Gender */}
              <div className="space-y-2">
                <Label className="text-black font-['Figtree'] text-[14px] font-medium leading-normal">
                  Gender <span className="text-[#FF0000]">*</span>
                </Label>
                <RadioGroup
                  value={formData.gender}
                  onValueChange={(value) => setFormData({ ...formData, gender: value })}
                  className="flex gap-6 pt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" className="border-[#1C8CA7] text-[#1C8CA7]" />
                    <Label htmlFor="male" className="text-black font-['Figtree'] text-[14px] font-medium leading-normal cursor-pointer">
                      Male
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" className="border-[#1C8CA7] text-[#1C8CA7]" />
                    <Label htmlFor="female" className="text-black font-['Figtree'] text-[14px] font-medium leading-normal cursor-pointer">
                      Female
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-black font-['Figtree'] text-[14px] font-medium leading-normal">
                  Email Address <span className="text-[#FF0000]">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="rounded-[8px] border border-[#D2D8E4] bg-white focus:border-[#e97737] focus:ring-[#e97737] placeholder:text-[#5A5A5A] placeholder:font-['Figtree'] placeholder:text-[16px] placeholder:font-normal placeholder:leading-normal text-[#000000] font-['Figtree'] text-[16px] font-normal leading-normal"
                  required
                />
              </div>

              {/* Mobile Number */}
              <div className="space-y-2">
                <Label htmlFor="mobile" className="text-black font-['Figtree'] text-[14px] font-medium leading-normal">
                  Mobile No. <span className="text-[#FF0000]">*</span>
                </Label>
                <div className="flex gap-2">
                  <select
                    value={formData.countryCode}
                    onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                    className="w-20 px-3 py-2 rounded-[8px] border border-[#D2D8E4] bg-whiterounded-md focus:outline-none focus:ring-2 focus:ring-[#e97737] focus:border-[#e97737] placeholder:text-[#5A5A5A] placeholder:font-['Figtree'] placeholder:text-[16px] placeholder:font-normal placeholder:leading-normal text-[#000000] font-['Figtree'] text-[16px] font-normal leading-normal"
                  >
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                  </select>
                  <Input
                    id="mobile"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="flex-1 rounded-[8px] border border-[#D2D8E4] bg-white focus:border-[#e97737] focus:ring-[#e97737] placeholder:text-[#5A5A5A] placeholder:font-['Figtree'] placeholder:text-[16px] placeholder:font-normal placeholder:leading-normal text-[#000000] font-['Figtree'] text-[16px] font-normal leading-normal"
                    required
                  />
                </div>
              </div>

              {/* Nationality */}
              <div className="space-y-2 md:col-span-2 lg:col-span-1">
                <Label htmlFor="nationality" className="text-black font-['Figtree'] text-[14px] font-medium leading-normal">
                  Nationality <span className="text-[#FF0000]">*</span>
                </Label>
                <Input
                  id="nationality"
                  value={formData.nationality}
                  onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
                  className="rounded-[8px] border border-[#D2D8E4] bg-white focus:border-[#e97737] focus:ring-[#e97737] placeholder:text-[#5A5A5A] placeholder:font-['Figtree'] placeholder:text-[16px] placeholder:font-normal placeholder:leading-normal text-[#000000] font-['Figtree'] text-[16px] font-normal leading-normal"
                  required
                />
              </div>
            </div>
          </div>

          {/* Identification Section */}
          <div>
            {/* <h3 className="text-sm md:text-base font-semibold text-[#1a2f46] mb-4 md:mb-6 uppercase tracking-wide">
              Identification
            </h3> */}
            <div className="bg-[#FFF7F2] px-4 py-2 rounded-[2px] mb-4 md:mb-6">
              <h3 className="text-[#1A2F46] font-['Figtree'] text-[14px] font-semibold leading-normal uppercase">Identification</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Aadhaar Number */}
              <div className="space-y-2">
                <Label htmlFor="aadhaar" className="text-black font-['Figtree'] text-[14px] font-medium leading-normal">
                  Aadhaar No <span className="text-[#FF0000]">*</span>
                </Label>
                <Input
                  id="aadhaar"
                  placeholder="Enter Aadhaar No."
                  value={formData.aadhaar}
                  onChange={(e) => setFormData({ ...formData, aadhaar: e.target.value })}
                  className="rounded-[8px] border border-[#D2D8E4] bg-white focus:border-[#e97737] focus:ring-[#e97737] placeholder:text-[#5A5A5A] placeholder:font-['Figtree'] placeholder:text-[16px] placeholder:font-normal placeholder:leading-normal text-[#000000] font-['Figtree'] text-[16px] font-normal leading-normal"
                />
              </div>

              {/* PAN Number */}
              <div className="space-y-2">
                <Label htmlFor="pan" className="text-black font-['Figtree'] text-[14px] font-medium leading-normal">
                  PAN Number <span className="text-[#FF0000]">*</span>
                </Label>
                <Input
                  id="pan"
                  placeholder="Enter PAN No."
                  value={formData.pan}
                  onChange={(e) => setFormData({ ...formData, pan: e.target.value })}
                  className="rounded-[8px] border border-[#D2D8E4] bg-white focus:border-[#e97737] focus:ring-[#e97737] placeholder:text-[#5A5A5A] placeholder:font-['Figtree'] placeholder:text-[16px] placeholder:font-normal placeholder:leading-normal text-[#000000] font-['Figtree'] text-[16px] font-normal leading-normal"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              type="submit"
              className="bg-[#e97737] hover:bg-[#c75414] px-8 py-3 rounded-md"
            >
              <span className="text-white font-['Figtree'] text-[14px] font-semibold leading-[24px] uppercase">SAVE DETAILS</span>
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
