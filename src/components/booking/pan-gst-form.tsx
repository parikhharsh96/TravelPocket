"use client"

import type React from "react"

import { useState } from "react"
import { ChevronUp, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface PanGstFormProps {
  isExpanded?: boolean
  onToggle?: () => void
  onProceed?: () => void
}

export function PanGstForm({ isExpanded: controlledExpanded, onToggle, onProceed }: PanGstFormProps) {
  const [internalExpanded, setInternalExpanded] = useState(false)
  const isExpanded = controlledExpanded !== undefined ? controlledExpanded : internalExpanded

  const [panName, setPanName] = useState("")
  const [panNumber, setPanNumber] = useState("")
  const [gstNumber, setGstNumber] = useState("")

  const handleToggle = () => {
    if (onToggle) {
      onToggle()
    } else {
      setInternalExpanded(!internalExpanded)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (!panName.trim() || !panNumber.trim()) {
      alert("Please fill in PAN details")
      return
    }

    // PAN number format validation (basic)
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/
    if (!panRegex.test(panNumber.toUpperCase())) {
      alert("Please enter a valid PAN number (e.g., ABCDE1234F)")
      return
    }

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
          <span className="text-white text-lg md:text-xl font-bold">4</span>
        </div> */}
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#e97737] flex items-center justify-center">
          <span className="text-white text-center font-['Figtree'] font-semibold text-[21.333px] leading-[18.667px]">4</span>
        </div>
        <h2 className="text-[#1A2F46] font-['Playfair_Display'] text-[28px] font-semibold leading-normal flex-1 text-left">PAN and GST Details</h2>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 md:w-6 md:h-6 text-[#1c1b1f] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-[#1C1B1F] flex-shrink-0" />
        )}
      </button>

      {isExpanded && (
        <form onSubmit={handleSubmit} className="p-4 md:p-6 pt-2 md:pt-4 space-y-4 md:space-y-6">
          {/* Information Text */}
          <div className="text-black font-['Figtree'] text-[12px] md:text-[14px] font-normal leading-[22px] leading-relaxed space-y-1">
            <p>
              TCS Amount collected shall reflect in Form 26AS of the person of which PAN is provided which can be
              claimed while filling their Income tax return.
            </p>
            <p>Without submission of PAN card upto 20% of TCS will be applicable.</p>
          </div>

          {/* PAN Details Section */}
          <div className="space-y-3 md:space-y-4">
            <div className="bg-[#FFF7F2] px-4 py-2 rounded-[2px] mb-4">
              <h3 className="text-[#1A2F46] font-['Figtree'] text-[12px] md:text-[14px] font-semibold uppercase">PAN DETAILS</h3>
            </div>
            {/* <div className="bg-[#fff7f2] px-4 py-2 -mx-4 md:-mx-6">
              <h3 className="text-xs md:text-sm font-bold text-[#1c1b1f] tracking-wide">PAN DETAILS</h3>
            </div> */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <div>
                <Label htmlFor="panName" className="text-black font-['Figtree'] text-[12px] md:text-[14px] font-medium leading-normal mb-2 block">
                  Name
                </Label>
                <Input
                  id="panName"
                  type="text"
                  placeholder="Name on PAN Card"
                  value={panName}
                  onChange={(e) => setPanName(e.target.value)}
                  className="border-[#d9d9d9] h-11 md:h-12 text-black font-['Figtree'] text-[14px] md:text-[16px] font-normal leading-normal placeholder:text-[#5A5A5A] placeholder:font-['Figtree'] placeholder:text-[14px] placeholder:md:text-[16px] placeholder:font-normal placeholder:leading-normal"
                  required
                />
              </div>

              <div>
                <Label htmlFor="panNumber" className="text-black font-['Figtree'] text-[12px] md:text-[14px] font-medium leading-normal mb-2 block">
                  PAN No.
                </Label>
                <Input
                  id="panNumber"
                  type="text"
                  placeholder="PAN Card Number"
                  value={panNumber}
                  onChange={(e) => setPanNumber(e.target.value.toUpperCase())}
                  className="border-[#d9d9d9] h-11 md:h-12 uppercase text-black font-['Figtree'] text-[14px] md:text-[16px] font-normal leading-normal placeholder:text-[#5A5A5A] placeholder:font-['Figtree'] placeholder:text-[14px] placeholder:md:text-[16px] placeholder:font-normal placeholder:leading-normal"
                  maxLength={10}
                  required
                />
              </div>
            </div>
          </div>

          {/* GST Details Section */}
          <div className="space-y-3 md:space-y-4">
            {/* <div className="bg-[#fff7f2] px-4 py-2 -mx-4 md:-mx-6">
              <h3 className="text-xs md:text-sm font-bold text-[#1c1b1f] tracking-wide">GST DETAILS</h3>
            </div> */}
            <div className="bg-[#FFF7F2] px-4 py-2 rounded-[2px] mb-4">
              <h3 className="text-[#1A2F46] font-['Figtree'] text-[12px] md:text-[14px] font-semibold uppercase">GST DETAILS</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <div>
                <Label htmlFor="gstNumber" className="text-black font-['Figtree'] text-[12px] md:text-[14px] font-medium leading-normal mb-2 block">
                  GST No
                </Label>
                <Input
                  id="gstNumber"
                  type="text"
                  placeholder="Enter GST No."
                  value={gstNumber}
                  onChange={(e) => setGstNumber(e.target.value.toUpperCase())}
                  className="border-[#d9d9d9] h-11 md:h-12 uppercase text-black font-['Figtree'] text-[14px] md:text-[16px] font-normal leading-normal placeholder:text-[#5A5A5A] placeholder:font-['Figtree'] placeholder:text-[14px] placeholder:md:text-[16px] placeholder:font-normal placeholder:leading-normal"
                  maxLength={15}
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-2">
            <Button
              type="submit"
              className="bg-[#e97737] hover:bg-[#d2661f] px-6 md:px-12 py-3 rounded-md w-full sm:w-auto"
            >
              <span className="text-white font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-[24px] uppercase">SAVE AND PROCEED</span>
            </Button>
          </div>
        </form>
      )}
    </div>
  )
}
