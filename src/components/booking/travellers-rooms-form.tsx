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
    <div className="bg-white rounded-[8px] overflow-hidden">
      <button
        onClick={handleToggle}
        className="w-full flex items-center gap-3 md:gap-4 p-4 md:p-6 hover:bg-gray-50 transition-colors"
      >
        {/* <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#e97737] flex items-center justify-center flex-shrink-0">
          <span className="text-white text-lg md:text-xl font-bold">{adults.toString().padStart(2, "0")}</span>
        </div> */}
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#e97737] flex items-center justify-center">
          <span className="text-white text-center font-['Figtree'] font-semibold text-[21.333px] leading-[18.667px]">{adults.toString().padStart(2, "0")}</span>
        </div>
        <h2 className="text-[#1A2F46] font-['Playfair_Display'] text-[28px] font-semibold leading-normal flex-1 text-left">No. of Travellers & Rooms</h2>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 md:w-6 md:h-6 text-[#1C1B1F] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-[#1C1B1F] flex-shrink-0" />
        )}
      </button>

      {isExpanded && (
        <div className="p-4 md:p-6 pt-2 md:pt-4 space-y-8 md:space-y-8">
          {/* Select No. of Travellers */}
          <div>
            <div className="bg-[#FFF7F2] px-4 py-2 rounded-[2px] mb-4">
              <h3 className="text-[#1A2F46] font-['Figtree'] text-[12px] md:text-[14px] font-semibold uppercase">SELECT NO. OF TRAVELLERS</h3>
            </div>
            {/* <h3 className="text-xs md:text-sm font-bold mb-4 md:mb-6 text-[#1c1b1f] tracking-wide">
              SELECT NO. OF TRAVELLERS
            </h3> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {/* Adults Counter */}
              <div className="flex items-center justify-between gap-4 md:gap-4">
                <div className="flex items-center gap-2 md:gap-3 md:ml-2">
                  {/* <User className="w-8 h-8 md:w-8 md:h-8 text-[#1c1b1f]" strokeWidth={1.5} /> */}
                  <img src="/images/booking/man.svg" alt="" className="" />
                  <div>
                    <div className="text-black font-['Figtree'] text-[14px] md:text-[16px] font-semibold leading-[21px]">Adult</div>
                    <div className="text-black font-['Figtree'] text-[12px] md:text-[14px] font-normal leading-[21px] uppercase">ABOVE 12 YRS</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 md:gap-2 rounded-[8px] border border-[#D2D8E4] bg-white">
                  <button
                    onClick={decrementAdults}
                    disabled={adults <= 1}
                    className="w-12 h-12 flex items-center justify-center bg-[#ddf9ff] hover:bg-[#c0f0ff] disabled:opacity-50 disabled:cursor-not-allowed rounded-[8px] transition-colors"
                  >
                    {/* <Minus className="w-5 h-5 md:w-5 md:h-5 text-[#1c1b1f]" /> */}
                    <img src="/images/booking/remove.svg" alt="" className="" />
                  </button>
                  <div className="w-16 h-12 flex items-center justify-center text-xl font-semibold text-[#1c1b1f]">
                    {adults.toString().padStart(2, "0")}
                  </div>
                  <button
                    onClick={incrementAdults}
                    disabled={adults >= 10}
                    className="w-12 h-12 flex items-center justify-center bg-[#ddf9ff] hover:bg-[#c0f0ff] disabled:opacity-50 disabled:cursor-not-allowed rounded-[8px] transition-colors"
                  >
                    {/* <Plus className="w-5 h-5 md:w-5 md:h-5 text-[#1c1b1f]" /> */}
                    <img src="/images/booking/add_2.svg" alt="" className="" />
                  </button>
                </div>
              </div>

              {/* Children Counter */}
              <div className="flex items-center justify-between gap-4 md:gap-4">
                <div className="flex items-center gap-2 md:gap-3 md:ml-2">
                  {/* <Baby className="w-8 h-8 md:w-8 md:h-8 text-[#1c1b1f]" strokeWidth={1.5} /> */}
                  <img src="/images/booking/child.svg" alt="" className="" />
                  <div>
                    <div className="text-black font-['Figtree'] text-[14px] md:text-[16px] font-semibold leading-[21px]">Child</div>
                    <div className="text-black font-['Figtree'] text-[12px] md:text-[14px] font-normal leading-[21px] uppercase">ABOVE 5 YRS</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 md:gap-2 rounded-[8px] border border-[#D2D8E4] bg-white">
                  <button
                    onClick={decrementChildren}
                    disabled={children <= 0}
                    className="w-12 h-12 flex items-center justify-center bg-[#ddf9ff] hover:bg-[#c0f0ff] disabled:opacity-50 disabled:cursor-not-allowed rounded-[8px] transition-colors"
                  >
                    {/* <Minus className="w-5 h-5 md:w-5 md:h-5 text-[#1c1b1f]" /> */}
                    <img src="/images/booking/remove.svg" alt="" className="" />
                  </button>
                  <div className="w-16 h-12 flex items-center justify-center text-xl font-semibold text-[#1c1b1f]">
                    {children.toString().padStart(2, "0")}
                  </div>
                  <button
                    onClick={incrementChildren}
                    disabled={children >= 10}
                    className="w-12 h-12 flex items-center justify-center bg-[#ddf9ff] hover:bg-[#c0f0ff] disabled:opacity-50 disabled:cursor-not-allowed rounded-[8px] transition-colors"
                  >
                    {/* <Plus className="w-5 h-5 md:w-5 md:h-5 text-[#1c1b1f]" /> */}
                    <img src="/images/booking/add_2.svg" alt="" className="" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Select Rooms */}
          <div>
            <div className="bg-[#FFF7F2] px-4 py-2 rounded-[2px] mb-4">
              <h3 className="text-[#1A2F46] font-['Figtree'] text-[12px] md:text-[14px] font-semibold uppercase">SELECT ROOMS</h3>
            </div>
            {/* <h3 className="text-xs md:text-sm font-bold mb-4 md:mb-6 text-[#1c1b1f] tracking-wide">SELECT ROOMS</h3> */}
            <div className="rounded-lg p-4 md:p-6 space-y-4 md:space-y-6">
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
                        {/* <BedDouble className="w-8 h-8 md:w-10 md:h-10 text-[#e97737] flex-shrink-0" strokeWidth={1.5} /> */}
                        <div className="min-w-0">
                          <div className="text-black font-['Figtree'] text-[14px] md:text-[16px] font-semibold leading-[21px] mb-1">
                            1 Double Room - 2 Adults
                          </div>
                          <div className="flex flex-row gap-1 items-center">
                            <img src="/images/booking/zenithal.svg" alt="" className="" />
                            <div className="text-black font-['Figtree'] text-[12px] md:text-[14px] font-normal leading-[21px] uppercase">
                              1 DOUBLE BED IN EACH ROOM
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-black font-['Figtree'] text-[14px] md:text-[16px] font-semibold leading-[21px] sm:ml-4 flex-shrink-0">
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
                        {/* <div className="flex gap-1 flex-shrink-0">
                          <BedSingle className="w-4 h-8 md:w-5 md:h-10 text-[#e97737]" strokeWidth={1.5} />
                          <BedSingle className="w-4 h-8 md:w-5 md:h-10 text-[#e97737]" strokeWidth={1.5} />
                        </div> */}
                        <div className="min-w-0">
                          <div className="text-black font-['Figtree'] text-[14px] md:text-[16px] font-semibold leading-[21px]] mb-1">
                            1 Twin Room - 2 Adults
                          </div>
                          <div className="flex flex-row gap-1 items-center">
                            <img src="/images/booking/twin-beds.svg" alt="" className="" />
                            <div className="text-black font-['Figtree'] text-[12px] md:text-[14px] font-normal leading-[21px] uppercase">1 TWIN BED IN EACH ROOM</div>
                          </div>
                        </div>
                      </div>
                      <div className="text-black font-['Figtree'] text-[14px] md:text-[16px] font-semibold leading-[21px] sm:ml-4 flex-shrink-0">
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
                        {/* <BedSingle className="w-8 h-8 md:w-10 md:h-10 text-[#e97737] flex-shrink-0" strokeWidth={1.5} /> */}
                        <div className="min-w-0">
                          <div className="text-black font-['Figtree'] text-[14px] md:text-[16px] font-semibold leading-[21px] mb-1">
                            2 Single Rooms - 1 Adult in each room
                          </div>
                          <div className="flex flex-row gap-1 items-center">
                            <img src="/images/booking/single-bed.svg" alt="" className="" />
                            <div className="text-black font-['Figtree'] text-[12px] md:text-[14px] font-normal leading-[21px] uppercase">
                              1 SINGLE BED IN EACH ROOM
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-black font-['Figtree'] text-[14px] md:text-[16px] font-semibold leading-[21px] sm:ml-4 flex-shrink-0">
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
              className="bg-[#e97737] hover:bg-[#d86628] px-8 md:px-12 py-3 md:py-6 rounded-md w-full sm:w-auto"
            >
              <span className="text-white font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-[24px] uppercase">SAVE AND PROCEED</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
