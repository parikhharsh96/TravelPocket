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
      <h2 className="text-2xl md:text-3xl font-bold text-[#1a2f46]">My Address</h2>

      {/* Address Form Card */}
      <div className="bg-white rounded-lg border border-[#e5e5e5] p-4 md:p-8">
        <h3 className="text-2xl md:text-3xl font-serif text-[#1a2f46] mb-6 md:mb-8">Address Details</h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Section Header */}
          <div className="bg-[#fff7f2] px-4 py-3 rounded-lg">
            <h4 className="text-sm md:text-base font-bold text-[#1a2f46] uppercase tracking-wide">Mailing Address</h4>
          </div>

          {/* Address Line 1 */}
          <div>
            <label htmlFor="addressLine1" className="block text-sm md:text-base text-[#1a2f46] mb-2">
              Address Line 1 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="addressLine1"
              name="addressLine1"
              value={formData.addressLine1}
              onChange={handleChange}
              placeholder="Enter Address Line 1"
              required
              className="w-full px-4 py-3 border border-[#d9d9d9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e97737] focus:border-transparent text-sm md:text-base"
            />
          </div>

          {/* Address Line 2 */}
          <div>
            <label htmlFor="addressLine2" className="block text-sm md:text-base text-[#1a2f46] mb-2">
              Address Line 2
            </label>
            <input
              type="text"
              id="addressLine2"
              name="addressLine2"
              value={formData.addressLine2}
              onChange={handleChange}
              placeholder="Enter Address Line 2"
              className="w-full px-4 py-3 border border-[#d9d9d9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e97737] focus:border-transparent text-sm md:text-base"
            />
          </div>

          {/* City, State, Pin Code Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* City */}
            <div>
              <label htmlFor="city" className="block text-sm md:text-base text-[#1a2f46] mb-2">
                City <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#d9d9d9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e97737] focus:border-transparent appearance-none text-sm md:text-base bg-white"
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
              <label htmlFor="state" className="block text-sm md:text-base text-[#1a2f46] mb-2">
                State <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#d9d9d9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e97737] focus:border-transparent appearance-none text-sm md:text-base bg-white"
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
              <label htmlFor="pinCode" className="block text-sm md:text-base text-[#1a2f46] mb-2">
                Pin Code <span className="text-red-500">*</span>
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
                  className="w-full px-4 py-3 pr-12 border border-[#d9d9d9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e97737] focus:border-transparent text-sm md:text-base"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <Calendar className="w-5 h-5 text-[#5a5a5a]" />
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="bg-[#e97737] hover:bg-[#d66a2e] text-white font-medium px-8 py-3 rounded-lg transition-colors text-sm md:text-base"
            >
              SAVE DETAILS
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
