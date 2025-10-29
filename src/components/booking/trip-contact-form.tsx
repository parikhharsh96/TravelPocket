"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, CalendarIcon, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"

interface TripContactFormProps {
  isExpanded?: boolean
  onToggle?: () => void
  onProceed?: () => void // Added onProceed prop to handle moving to next step
}

export function TripContactForm({ isExpanded: controlledExpanded, onToggle, onProceed }: TripContactFormProps) {
  const [internalExpanded, setInternalExpanded] = useState(true)
  const isExpanded = controlledExpanded !== undefined ? controlledExpanded : internalExpanded

  const [startDate, setStartDate] = useState<Date>(new Date(2025, 8, 2)) // Sep 2, 2025
  const [endDate, setEndDate] = useState<Date>(new Date(2025, 8, 13)) // Sep 13, 2025
  const [dateOfBirth, setDateOfBirth] = useState<Date>()

  const handleToggle = () => {
    if (onToggle) {
      onToggle()
    } else {
      setInternalExpanded(!internalExpanded)
    }
  }

  return (
    <div className="bg-white rounded-lg border border-border overflow-hidden">
      <button
        onClick={handleToggle}
        className="w-full flex items-center justify-between p-4 md:p-6 hover:bg-accent/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#e97737] text-white flex items-center justify-center font-semibold text-sm md:text-base">
            1
          </div>
          <h2 className="text-lg md:text-xl font-serif">Trip & Contact Details</h2>
        </div>
        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>

      {isExpanded && (
        <div className="p-4 md:p-6 pt-4 space-y-6 md:space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Trip Codes */}
            <div>
              <h3 className="text-sm font-bold mb-4 text-[#1c1b1f] tracking-wide">MY TRIP CODES</h3>
              <div className="grid grid-cols-2 gap-0 border border-[#d9d9d9] rounded-lg overflow-hidden">
                <div className="border-r border-[#d9d9d9]">
                  <div className="flex items-center gap-2 p-2 md:p-3 bg-white border-b border-[#d9d9d9]">
                    <Info className="w-4 h-4 text-[#5a5a5a]" />
                    <span className="text-xs md:text-sm text-[#5a5a5a]">Trip Code</span>
                  </div>
                  <div className="p-3 md:p-4 bg-[#f4f4f4]">
                    <p className="text-base md:text-lg font-bold text-[#1c1b1f]">TPKMY2516</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 p-2 md:p-3 bg-white border-b border-[#d9d9d9]">
                    <Info className="w-4 h-4 text-[#5a5a5a]" />
                    <span className="text-xs md:text-sm text-[#5a5a5a]">Batch No</span>
                  </div>
                  <div className="p-3 md:p-4 bg-[#f4f4f4]">
                    <p className="text-base md:text-lg font-bold text-[#1c1b1f]">HLKMY2516</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Departure Dates */}
            <div>
              <h3 className="text-sm font-bold mb-4 text-[#1c1b1f] tracking-wide">DEPARTURE DATES</h3>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {/* Start Date */}
                <Popover>
                  <PopoverTrigger asChild>
                    <button className="border border-[#d9d9d9] rounded-lg text-left hover:bg-[#f9f9f9] transition-colors overflow-hidden">
                      <div className="flex items-center gap-2 p-2 md:p-3 bg-white border-b border-[#d9d9d9]">
                        <CalendarIcon className="w-4 h-4 text-[#5a5a5a]" />
                        <span className="text-xs md:text-sm text-[#5a5a5a]">Start Date</span>
                      </div>
                      <div className="p-3 md:p-4 bg-[#f4f4f4]">
                        <p className="text-sm md:text-lg font-bold text-[#1c1b1f]">
                          {format(startDate, "dd MMM yyyy, EEE")}
                        </p>
                      </div>
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={startDate}
                      onSelect={(date) => date && setStartDate(date)}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>

                {/* End Date */}
                <Popover>
                  <PopoverTrigger asChild>
                    <button className="border border-[#d9d9d9] rounded-lg text-left hover:bg-[#f9f9f9] transition-colors overflow-hidden">
                      <div className="flex items-center gap-2 p-2 md:p-3 bg-white border-b border-[#d9d9d9]">
                        <CalendarIcon className="w-4 h-4 text-[#5a5a5a]" />
                        <span className="text-xs md:text-sm text-[#5a5a5a]">End Date</span>
                      </div>
                      <div className="p-3 md:p-4 bg-[#f4f4f4]">
                        <p className="text-sm md:text-lg font-bold text-[#1c1b1f]">
                          {format(endDate, "dd MMM yyyy, EEE")}
                        </p>
                      </div>
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={endDate}
                      onSelect={(date) => date && setEndDate(date)}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-4 text-[#1c1b1f] tracking-wide">CONTACT DETAILS</h3>
            <div className="space-y-4">
              {/* First row: stacks on mobile, 3 columns on lg+ */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-sm text-[#1c1b1f] mb-2 block">
                    First Name <span className="text-[#ff0000]">*</span>
                  </Label>
                  <Input id="firstName" placeholder="Enter First Name" className="border-[#d9d9d9] h-12" />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-sm text-[#1c1b1f] mb-2 block">
                    Last Name <span className="text-[#ff0000]">*</span>
                  </Label>
                  <Input id="lastName" placeholder="Enter Last Name" className="border-[#d9d9d9] h-12" />
                </div>
                <div className="md:col-span-2 lg:col-span-1">
                  <Label htmlFor="dob" className="text-sm text-[#1c1b1f] mb-2 block">
                    Date of Birth <span className="text-[#ff0000]">*</span>
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <div className="relative">
                        <Input
                          id="dob"
                          type="text"
                          placeholder="DD/MM/YYYY"
                          value={dateOfBirth ? format(dateOfBirth, "dd/MM/yyyy") : ""}
                          readOnly
                          className="border-[#d9d9d9] h-12 pr-10 cursor-pointer"
                        />
                        <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5a5a5a] pointer-events-none" />
                      </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={dateOfBirth}
                        onSelect={setDateOfBirth}
                        initialFocus
                        defaultMonth={new Date(1990, 0)}
                        captionLayout="dropdown-buttons"
                        fromYear={1940}
                        toYear={2010}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              {/* Second row: stacks on mobile, Mobile (1 col) + Email (2 cols) on lg+ */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="mobile" className="text-sm text-[#1c1b1f] mb-2 block">
                    Mobile No. <span className="text-[#ff0000]">*</span>
                  </Label>
                  <div className="flex gap-2 items-center">
                    <Select defaultValue="+91">
                      <SelectTrigger className="w-20 border-[#d9d9d9] min-h-12 h-12 py-3">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="+91">+91</SelectItem>
                        <SelectItem value="+1">+1</SelectItem>
                        <SelectItem value="+44">+44</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input id="mobile" placeholder="Enter Mobile Number" className="flex-1 border-[#d9d9d9] h-12" />
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <Label htmlFor="email" className="text-sm text-[#1c1b1f] mb-2 block">
                    Email Address <span className="text-[#ff0000]">*</span>
                  </Label>
                  <Input id="email" type="email" placeholder="Enter Email Address" className="border-[#d9d9d9] h-12" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-2">
            <Button
              onClick={onProceed} // Added onClick handler to proceed to next step
              className="bg-[#e97737] hover:bg-[#d2661f] text-white font-semibold px-8 md:px-12 py-3 rounded-md text-sm md:text-base w-full md:w-auto"
            >
              SAVE AND PROCEED
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
