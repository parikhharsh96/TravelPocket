"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, User, Baby, Minus, Plus, BedDouble, BedSingle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface TravellersRoomsFormProps {
  isExpanded?: boolean
  onToggle?: () => void
  onProceed?: () => void // Added onProceed prop to handle moving to next step
  adults?: number
  setAdults?: (value: number) => void
  children?: number
  setChildren?: (value: number) => void
}

export function TravellersRoomsForm({
  isExpanded: controlledExpanded,
  onToggle,
  onProceed,
  adults: controlledAdults = 2,
  setAdults: setControlledAdults,
  children: controlledChildren = 0,
  setChildren: setControlledChildren,
}: TravellersRoomsFormProps) {
  const [internalExpanded, setInternalExpanded] = useState(false)
  const [roomType, setRoomType] = useState("double")

  const isExpanded = controlledExpanded !== undefined ? controlledExpanded : internalExpanded
  const adults = controlledAdults
  const children = controlledChildren

  const handleToggle = () => {
    if (onToggle) {
      onToggle()
    } else {
      setInternalExpanded(!internalExpanded)
    }
  }

  const incrementAdults = () => {
    const newValue = Math.min(adults + 1, 10)
    if (setControlledAdults) {
      setControlledAdults(newValue)
    }
  }

  const decrementAdults = () => {
    const newValue = Math.max(adults - 1, 1)
    if (setControlledAdults) {
      setControlledAdults(newValue)
    }
  }

  const incrementChildren = () => {
    const newValue = Math.min(children + 1, 10)
    if (setControlledChildren) {
      setControlledChildren(newValue)
    }
  }

  const decrementChildren = () => {
    const newValue = Math.max(children - 1, 0)
    if (setControlledChildren) {
      setControlledChildren(newValue)
    }
  }

  return (
    <div className="bg-white rounded-lg border border-[#d9d9d9] overflow-hidden">
      <button
        onClick={handleToggle}
        className="w-full flex items-center gap-3 md:gap-4 p-4 md:p-6 hover:bg-gray-50 transition-colors"
      >
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#e97737] flex items-center justify-center flex-shrink-0">
          <span className="text-white text-lg md:text-xl font-bold">{adults.toString().padStart(2, "0")}</span>
        </div>
        <h2 className="text-lg md:text-xl font-serif flex-1 text-left text-[#1c1b1f]">No. of Travellers & Rooms</h2>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 md:w-6 md:h-6 text-[#1c1b1f] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-[#1c1b1f] flex-shrink-0" />
        )}
      </button>

      {isExpanded && (
        <div className="p-4 md:p-6 pt-2 md:pt-4 space-y-8 md:space-y-8">
          {/* Select No. of Travellers */}
          <div>
            <h3 className="text-xs md:text-sm font-bold mb-4 md:mb-6 text-[#1c1b1f] tracking-wide">
              SELECT NO. OF TRAVELLERS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {/* Adults Counter */}
              <div className="flex items-center justify-between gap-4 md:gap-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <User className="w-8 h-8 md:w-8 md:h-8 text-[#1c1b1f]" strokeWidth={1.5} />
                  <div>
                    <div className="text-lg md:text-lg font-semibold text-[#1c1b1f]">Adult</div>
                    <div className="text-xs text-[#5a5a5a]">ABOVE 12 YRS</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 md:gap-2">
                  <button
                    onClick={decrementAdults}
                    disabled={adults <= 1}
                    className="w-12 h-12 flex items-center justify-center bg-[#ddf9ff] hover:bg-[#c0f0ff] disabled:opacity-50 disabled:cursor-not-allowed rounded transition-colors"
                  >
                    <Minus className="w-5 h-5 md:w-5 md:h-5 text-[#1c1b1f]" />
                  </button>
                  <div className="w-16 h-12 flex items-center justify-center text-xl font-semibold text-[#1c1b1f]">
                    {adults.toString().padStart(2, "0")}
                  </div>
                  <button
                    onClick={incrementAdults}
                    disabled={adults >= 10}
                    className="w-12 h-12 flex items-center justify-center bg-[#ddf9ff] hover:bg-[#c0f0ff] disabled:opacity-50 disabled:cursor-not-allowed rounded transition-colors"
                  >
                    <Plus className="w-5 h-5 md:w-5 md:h-5 text-[#1c1b1f]" />
                  </button>
                </div>
              </div>

              {/* Children Counter */}
              <div className="flex items-center justify-between gap-4 md:gap-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <Baby className="w-8 h-8 md:w-8 md:h-8 text-[#1c1b1f]" strokeWidth={1.5} />
                  <div>
                    <div className="text-lg md:text-lg font-semibold text-[#1c1b1f]">Child</div>
                    <div className="text-xs text-[#5a5a5a]">ABOVE 5 YRS</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 md:gap-2">
                  <button
                    onClick={decrementChildren}
                    disabled={children <= 0}
                    className="w-12 h-12 flex items-center justify-center bg-[#ddf9ff] hover:bg-[#c0f0ff] disabled:opacity-50 disabled:cursor-not-allowed rounded transition-colors"
                  >
                    <Minus className="w-5 h-5 md:w-5 md:h-5 text-[#1c1b1f]" />
                  </button>
                  <div className="w-16 h-12 flex items-center justify-center text-xl font-semibold text-[#1c1b1f]">
                    {children.toString().padStart(2, "0")}
                  </div>
                  <button
                    onClick={incrementChildren}
                    disabled={children >= 10}
                    className="w-12 h-12 flex items-center justify-center bg-[#ddf9ff] hover:bg-[#c0f0ff] disabled:opacity-50 disabled:cursor-not-allowed rounded transition-colors"
                  >
                    <Plus className="w-5 h-5 md:w-5 md:h-5 text-[#1c1b1f]" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Select Rooms */}
          <div>
            <h3 className="text-xs md:text-sm font-bold mb-4 md:mb-6 text-[#1c1b1f] tracking-wide">SELECT ROOMS</h3>
            <div className="bg-[#fff7f2] rounded-lg p-4 md:p-6 space-y-4 md:space-y-6">
              <RadioGroup value={roomType} onValueChange={setRoomType} className="space-y-4 md:space-y-6">
                {/* Double Room Option */}
                <div className="flex items-start gap-3 md:gap-4 pb-4 md:pb-6 border-b border-[#e0e0e0] last:border-0 last:pb-0">
                  <RadioGroupItem
                    value="double"
                    id="double"
                    className="mt-1 border-[#1c8ca7] text-[#1c8ca7] flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <Label
                      htmlFor="double"
                      className="flex flex-col sm:flex-row sm:items-start sm:justify-between cursor-pointer gap-2"
                    >
                      <div className="flex gap-2 md:gap-3 min-w-0">
                        <BedDouble className="w-8 h-8 md:w-10 md:h-10 text-[#e97737] flex-shrink-0" strokeWidth={1.5} />
                        <div className="min-w-0">
                          <div className="text-sm md:text-base font-semibold text-[#1c1b1f] mb-1">
                            1 Double Room - 2 Adults
                          </div>
                          <div className="text-xs text-[#5a5a5a] uppercase tracking-wide">
                            1 DOUBLE BED IN EACH ROOM
                          </div>
                        </div>
                      </div>
                      <div className="text-base md:text-lg font-bold text-[#1c1b1f] sm:ml-4 flex-shrink-0">
                        ₹5,50,000
                      </div>
                    </Label>
                  </div>
                </div>

                {/* Twin Room Option */}
                <div className="flex items-start gap-3 md:gap-4 pb-4 md:pb-6 border-b border-[#e0e0e0] last:border-0 last:pb-0">
                  <RadioGroupItem
                    value="twin"
                    id="twin"
                    className="mt-1 border-[#1c8ca7] text-[#1c8ca7] flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <Label
                      htmlFor="twin"
                      className="flex flex-col sm:flex-row sm:items-start sm:justify-between cursor-pointer gap-2"
                    >
                      <div className="flex gap-2 md:gap-3 min-w-0">
                        <div className="flex gap-1 flex-shrink-0">
                          <BedSingle className="w-4 h-8 md:w-5 md:h-10 text-[#e97737]" strokeWidth={1.5} />
                          <BedSingle className="w-4 h-8 md:w-5 md:h-10 text-[#e97737]" strokeWidth={1.5} />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm md:text-base font-semibold text-[#1c1b1f] mb-1">
                            1 Twin Room - 2 Adults
                          </div>
                          <div className="text-xs text-[#5a5a5a] uppercase tracking-wide">1 TWIN BED IN EACH ROOM</div>
                        </div>
                      </div>
                      <div className="text-base md:text-lg font-bold text-[#1c1b1f] sm:ml-4 flex-shrink-0">
                        ₹5,50,000
                      </div>
                    </Label>
                  </div>
                </div>

                {/* Single Rooms Option */}
                <div className="flex items-start gap-3 md:gap-4">
                  <RadioGroupItem
                    value="single"
                    id="single"
                    className="mt-1 border-[#1c8ca7] text-[#1c8ca7] flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <Label
                      htmlFor="single"
                      className="flex flex-col sm:flex-row sm:items-start sm:justify-between cursor-pointer gap-2"
                    >
                      <div className="flex gap-2 md:gap-3 min-w-0">
                        <BedSingle className="w-8 h-8 md:w-10 md:h-10 text-[#e97737] flex-shrink-0" strokeWidth={1.5} />
                        <div className="min-w-0">
                          <div className="text-sm md:text-base font-semibold text-[#1c1b1f] mb-1">
                            2 Single Rooms - 1 Adult in each room
                          </div>
                          <div className="text-xs text-[#5a5a5a] uppercase tracking-wide">
                            1 SINGLE BED IN EACH ROOM
                          </div>
                        </div>
                      </div>
                      <div className="text-base md:text-lg font-bold text-[#1c1b1f] sm:ml-4 flex-shrink-0">
                        ₹5,60,000
                      </div>
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-center pt-4 md:pt-4">
            <Button
              onClick={onProceed}
              className="bg-[#e97737] hover:bg-[#d86628] text-white px-8 md:px-12 py-3 md:py-6 text-sm md:text-base font-semibold rounded-md w-full sm:w-auto"
            >
              SAVE AND PROCEED
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
