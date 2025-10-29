"use client"

import type React from "react"

import { useState } from "react"
import { Calendar } from "lucide-react"

export function MyAddress() {
  const [formData, setFormData] = useState({
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    pinCode: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Address saved:", formData)
    // Handle form submission
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const cities = ["Mumbai", "Delhi", "Bangalore", "Kolkata", "Chennai", "Hyderabad", "Pune", "Ahmedabad", "Lucknow"]
  const states = [
    "Andhra Pradesh",
    "Karnataka",
    "Kerala",
    "Tamil Nadu",
    "Maharashtra",
    "Gujarat",
    "Rajasthan",
    "Uttar Pradesh",
    "West Bengal",
    "Delhi",
  ]

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Page Title */}
      <h2 className="text-black font-['Figtree'] text-[18px] md:text-[20px] font-semibold leading-normal">My Address</h2>

      {/* Address Form Card */}
      <div className="bg-white rounded-lg border border-[#D2D8E4] p-4 md:p-8">
        <h3 className="text-[#1A2F46] font-['Playfair_Display'] text-[20px] md:text-[22px] font-semibold leading-normal mb-6 md:mb-8">Address Details</h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Section Header */}
          <div className="rounded-[2px] bg-[#FFF7F2] px-4 py-3">
            <h4 className="text-[#1A2F46] font-['Figtree'] text-xs md:text-sm font-semibold leading-normal uppercase tracking-wide">Mailing Address</h4>
          </div>

          {/* Address Line 1 */}
          <div>
            <label htmlFor="addressLine1" className="block text-black font-['Figtree'] text-xs md:text-sm font-medium leading-normal mb-2">
              Address Line 1 <span className="text-[#FF0000]">*</span>
            </label>
            <input
              type="text"
              id="addressLine1"
              name="addressLine1"
              value={formData.addressLine1}
              onChange={handleChange}
              placeholder="Enter Address Line 1"
              required
              className="w-full px-4 py-3 rounded-[8px] border border-[#D2D8E4] bg-white focus:outline-none focus:ring-2 focus:ring-[#e97737] focus:border-transparent text-[#5A5A5A] font-['Figtree'] text-sm md:text-base font-normal leading-normal placeholder:text-[#5A5A5A] placeholder:font-['Figtree'] placeholder:text-sm placeholder:md:text-base placeholder:font-normal placeholder:leading-normal"
            />
          </div>

          {/* Address Line 2 */}
          <div>
            <label htmlFor="addressLine2" className="block text-black font-['Figtree'] text-xs md:text-sm font-medium leading-normal mb-2">
              Address Line 2
            </label>
            <input
              type="text"
              id="addressLine2"
              name="addressLine2"
              value={formData.addressLine2}
              onChange={handleChange}
              placeholder="Enter Address Line 2"
              className="w-full px-4 py-3 rounded-[8px] border border-[#D2D8E4] bg-white focus:outline-none focus:ring-2 focus:ring-[#e97737] focus:border-transparent text-[#5A5A5A] font-['Figtree'] text-sm md:text-base font-normal leading-normal placeholder:text-[#5A5A5A] placeholder:font-['Figtree'] placeholder:text-sm placeholder:md:text-base placeholder:font-normal placeholder:leading-normal"
            />
          </div>

          {/* City, State, Pin Code Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* City */}
            <div>
              <label htmlFor="city" className="block text-black font-['Figtree'] text-xs md:text-sm font-medium leading-normal mb-2">
                City <span className="text-[#FF0000]">*</span>
              </label>
              <div className="relative">
                <select
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-[8px] border border-[#D2D8E4] bg-white focus:outline-none focus:ring-2 focus:ring-[#e97737] focus:border-transparent appearance-none text-[#5A5A5A] font-['Figtree'] text-sm md:text-base font-normal leading-normal placeholder:text-[#5A5A5A] placeholder:font-['Figtree'] placeholder:text-sm placeholder:md:text-base placeholder:font-normal placeholder:leading-normal"
                >
                  <option value="">Select City</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-[#5a5a5a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* State */}
            <div>
              <label htmlFor="state" className="block text-black font-['Figtree'] text-xs md:text-sm font-medium leading-normal mb-2">
                State <span className="text-[#FF0000]">*</span>
              </label>
              <div className="relative">
                <select
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-[8px] border border-[#D2D8E4] bg-white focus:outline-none focus:ring-2 focus:ring-[#e97737] focus:border-transparent appearance-none text-[#5A5A5A] font-['Figtree'] text-sm md:text-base font-normal leading-normal placeholder:text-[#5A5A5A] placeholder:font-['Figtree'] placeholder:text-sm placeholder:md:text-base placeholder:font-normal placeholder:leading-normal"
                >
                  <option value="">Select State</option>
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-[#5a5a5a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Pin Code */}
            <div>
              <label htmlFor="pinCode" className="block text-black font-['Figtree'] text-xs md:text-sm font-medium leading-normal mb-2">
                Pin Code <span className="text-[#FF0000]">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="pinCode"
                  name="pinCode"
                  value={formData.pinCode}
                  onChange={handleChange}
                  placeholder="Enter Pin Code"
                  required
                  pattern="[0-9]{6}"
                  maxLength={6}
                  className="w-full px-4 py-3 pr-12 rounded-[8px] border border-[#D2D8E4] bg-white focus:outline-none focus:ring-2 focus:ring-[#e97737] focus:border-transparent text-[#5A5A5A] font-['Figtree'] text-sm md:text-base font-normal leading-normal placeholder:text-[#5A5A5A] placeholder:font-['Figtree'] placeholder:text-sm placeholder:md:text-base placeholder:font-normal placeholder:leading-normal"
                />
                {/* <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <Calendar className="w-5 h-5 text-[#5a5a5a]" />
                </div> */}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="cursor-pointer hover:bg-[#d66a2e] px-8 py-3 rounded-[6px] bg-[#E97737] transition-colors text-white font-['Figtree'] text-xs md:text-sm font-semibold leading-[24px] uppercase"
            >
              SAVE DETAILS
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
