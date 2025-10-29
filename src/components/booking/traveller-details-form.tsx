"use client"

import { useState } from "react"
import { ChevronUp, ChevronDown, User, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface TravellerDetailsFormProps {
  isExpanded?: boolean
  onToggle?: () => void
  onProceed?: () => void
  travellerCount?: number
}

interface TravellerData {
  firstName: string
  lastName: string
  age: string
  gender: string
}

export function TravellerDetailsForm({
  isExpanded: controlledExpanded,
  onToggle,
  onProceed,
  travellerCount = 2,
}: TravellerDetailsFormProps) {
  const [internalExpanded, setInternalExpanded] = useState(false)
  const isExpanded = controlledExpanded !== undefined ? controlledExpanded : internalExpanded

  const [expandedTravellers, setExpandedTravellers] = useState<Set<number>>(new Set())
  const [travellers, setTravellers] = useState<Record<number, TravellerData>>({})

  const handleToggle = () => {
    if (onToggle) {
      onToggle()
    } else {
      setInternalExpanded(!internalExpanded)
    }
  }

  const toggleTraveller = (index: number) => {
    const newExpanded = new Set(expandedTravellers)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setExpandedTravellers(newExpanded)
  }

  const updateTraveller = (index: number, field: keyof TravellerData, value: string) => {
    setTravellers((prev) => ({
      ...prev,
      [index]: {
        ...prev[index],
        [field]: value,
      },
    }))
  }

  const handleSaveAndProceed = () => {
    // Validate traveller details here if needed
    if (onProceed) {
      onProceed()
    }
  }

  const handleSkip = () => {
    if (onProceed) {
      onProceed()
    }
  }

  return (
    <div className="bg-white rounded-lg border border-[#d9d9d9] overflow-hidden">
      <button
        onClick={handleToggle}
        className="w-full flex items-center gap-3 md:gap-4 p-4 md:p-6 hover:bg-gray-50 transition-colors"
      >
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#e97737] flex items-center justify-center flex-shrink-0">
          <span className="text-white text-lg md:text-xl font-bold">3</span>
        </div>
        <h2 className="text-lg md:text-xl font-serif flex-1 text-left text-[#1c1b1f]">Add Traveller's Details</h2>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 md:w-6 md:h-6 text-[#1c1b1f] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-[#1c1b1f] flex-shrink-0" />
        )}
      </button>

      {isExpanded && (
        <div className="p-4 md:p-6 pt-2 md:pt-4 space-y-6">
          {Array.from({ length: travellerCount }, (_, i) => i + 1).map((travellerNum) => (
            <div key={travellerNum} className="space-y-3">
              <div className="bg-[#fff7f2] px-4 py-2 -mx-4 md:-mx-6">
                <h3 className="text-sm font-bold text-[#1c1b1f] tracking-wide">TRAVELLER {travellerNum}</h3>
              </div>

              {!expandedTravellers.has(travellerNum) ? (
                <button
                  onClick={() => toggleTraveller(travellerNum)}
                  className="w-full flex items-center gap-3 p-4 bg-white rounded-lg border border-[#d9d9d9] hover:border-[#1c8ca7] transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-[#ddf9ff] flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-[#1c8ca7]" />
                  </div>
                  <div className="flex items-center gap-2 flex-1">
                    <Plus className="w-4 h-4 text-[#1c1b1f]" />
                    <span className="text-base font-medium text-[#1c1b1f] underline">Add Traveller Details</span>
                  </div>
                </button>
              ) : (
                <div className="bg-white rounded-lg border border-[#d9d9d9] p-4 md:p-6 space-y-4">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-base font-semibold text-[#1c1b1f]">Traveller Information</h4>
                    <button
                      onClick={() => toggleTraveller(travellerNum)}
                      className="text-sm text-[#1c8ca7] hover:underline"
                    >
                      Collapse
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor={`firstName-${travellerNum}`} className="text-sm text-[#5a5a5a] mb-2">
                        First Name <span className="text-[#ff0000]">*</span>
                      </Label>
                      <Input
                        id={`firstName-${travellerNum}`}
                        placeholder="Enter First Name"
                        className="border-[#d9d9d9] h-12"
                        value={travellers[travellerNum]?.firstName || ""}
                        onChange={(e) => updateTraveller(travellerNum, "firstName", e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor={`lastName-${travellerNum}`} className="text-sm text-[#5a5a5a] mb-2">
                        Last Name <span className="text-[#ff0000]">*</span>
                      </Label>
                      <Input
                        id={`lastName-${travellerNum}`}
                        placeholder="Enter Last Name"
                        className="border-[#d9d9d9] h-12"
                        value={travellers[travellerNum]?.lastName || ""}
                        onChange={(e) => updateTraveller(travellerNum, "lastName", e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor={`age-${travellerNum}`} className="text-sm text-[#5a5a5a] mb-2">
                        Age <span className="text-[#ff0000]">*</span>
                      </Label>
                      <Input
                        id={`age-${travellerNum}`}
                        type="number"
                        placeholder="Enter Age"
                        className="border-[#d9d9d9] h-12"
                        value={travellers[travellerNum]?.age || ""}
                        onChange={(e) => updateTraveller(travellerNum, "age", e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor={`gender-${travellerNum}`} className="text-sm text-[#5a5a5a] mb-2">
                        Gender <span className="text-[#ff0000]">*</span>
                      </Label>
                      <Select
                        value={travellers[travellerNum]?.gender || ""}
                        onValueChange={(value) => updateTraveller(travellerNum, "gender", value)}
                      >
                        <SelectTrigger className="border-[#d9d9d9] h-12">
                          <SelectValue placeholder="Select Gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 justify-center">
            <Button
              onClick={handleSaveAndProceed}
              className="bg-[#fff0e8] hover:bg-[#ffe5d5] text-[#1c1b1f] font-semibold px-6 md:px-8 py-3 rounded-md text-sm md:text-base border border-[#e97737] w-full sm:w-auto order-2 sm:order-1"
            >
              SAVE AND PROCEED
            </Button>
            <Button
              onClick={handleSkip}
              className="bg-[#e97737] hover:bg-[#d2661f] text-white font-semibold px-6 md:px-8 py-3 rounded-md text-sm md:text-base w-full sm:w-auto order-1 sm:order-2"
            >
              SKIP, I WILL ADD LATER
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
