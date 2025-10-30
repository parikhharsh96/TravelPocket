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
    <div className="bg-white rounded-[8px] overflow-hidden">
      <button
        onClick={handleToggle}
        className="w-full flex items-center justify-between p-4 md:p-6 hover:bg-accent/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#e97737] flex items-center justify-center">
            <span className="text-white text-center font-['Figtree'] font-semibold text-[21.333px] leading-[18.667px]">1</span>
          </div>
          <h2 className="text-[#1A2F46] font-['Playfair_Display'] text-[28px] font-semibold leading-normal">Trip & Contact Details</h2>
        </div>
        {isExpanded ? <ChevronUp className="w-5 h-5 md:w-6 md:h-6 text-[#1C1B1F]" /> : <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-[#1C1B1F]" />}
      </button>

      {isExpanded && (
        <div className="p-4 md:p-6 pt-4 space-y-6 md:space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Trip Codes */}
            <div>
              <div className="bg-[#FFF7F2] px-4 py-2 rounded-[2px] mb-4">
                <h3 className="text-[#1A2F46] font-['Figtree'] text-[12px] md:text-[14px] font-semibold uppercase">MY TRIP CODES</h3>
              </div>
              <div className="grid grid-cols-2 gap-0 rounded-[8px] border border-[#D2D8E4] bg-white overflow-hidden">
                <div className="border-r border-[#d9d9d9]">
                  <div className="flex items-center gap-2 p-2 md:p-3 bg-white border-b border-[#d9d9d9]">
                    <Info className="w-4 h-4 text-[#5a5a5a]" />
                    <span className="text-[#1A2F46] font-['Figtree'] text-[12px] md:text-[14px] font-normal">Trip Code</span>
                  </div>
                  <div className="p-3 md:p-4 bg-[#F4F4F4]">
                    <p className="text-black font-['Figtree'] text-[14px] md:text-[16px] font-semibold">TPKMY2516</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 p-2 md:p-3 bg-white border-b border-[#d9d9d9]">
                    <Info className="w-4 h-4 text-[#5a5a5a]" />
                    <span className="text-[#1A2F46] font-['Figtree'] text-[12px] md:text-[14px] font-normal">Batch No</span>
                  </div>
                  <div className="p-3 md:p-4 bg-[#F4F4F4]">
                    <p className="text-black font-['Figtree'] text-[14px] md:text-[16px] font-semibold">HLKMY2516</p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div><img src="/images/booking/arrow-right.svg" alt="" className="" /></div> */}

            {/* Departure Dates */}
            <div>
              <div className="bg-[#FFF7F2] px-4 py-2 rounded-[2px] mb-4">
                <h3 className="text-[#1A2F46] font-['Figtree'] text-[12px] md:text-[14px] font-semibold uppercase">DEPARTURE DATES</h3>
              </div>
              {/* <h3 className="text-sm font-bold mb-4 text-[#1c1b1f] tracking-wide">DEPARTURE DATES</h3> */}
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {/* Start Date */}
                <Popover>
                  <PopoverTrigger asChild>
                    <button className="rounded-[8px] border border-[#D2D8E4] bg-white text-left hover:bg-[#f9f9f9] transition-colors overflow-hidden">
                      <div className="flex items-center gap-2 p-2 md:p-3 bg-white border-b border-[#d9d9d9]">
                        <CalendarIcon className="w-4 h-4 text-[#5a5a5a]" />
                        <span className="text-[#1A2F46] font-['Figtree'] text-[12px] md:text-[14px] font-normal">Start Date</span>
                      </div>
                      <div className="p-3 md:p-4 bg-[#F4F4F4]">
                        <p className="ttext-black font-['Figtree'] text-[14px] md:text-[16px] font-semibold">
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
                    <button className="rounded-[8px] border border-[#D2D8E4] bg-white rounded-lg text-left hover:bg-[#f9f9f9] transition-colors overflow-hidden">
                      <div className="flex items-center gap-2 p-2 md:p-3 bg-white border-b border-[#d9d9d9]">
                        <CalendarIcon className="w-4 h-4 text-[#5a5a5a]" />
                        <span className="text-[#1A2F46] font-['Figtree'] text-[12px] md:text-[14px] font-normal">End Date</span>
                      </div>
                      <div className="p-3 md:p-4 bg-[#F4F4F4]">
                        <p className="text-black font-['Figtree'] text-[14px] md:text-[16px] font-semibold">
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
            <div className="bg-[#FFF7F2] px-4 py-2 rounded-[2px] mb-4">
              <h3 className="text-[#1A2F46] font-['Figtree'] text-[12px] md:text-[14px] font-semibold uppercase">CONTACT DETAILS</h3>
            </div>
            {/* <h3 className="text-sm font-bold mb-4 text-[#1c1b1f] tracking-wide">CONTACT DETAILS</h3> */}
            <div className="space-y-4">
              {/* First row: stacks on mobile, 3 columns on lg+ */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-black font-['Figtree'] text-[12px] md:text-[14px] font-medium leading-normal mb-2 block">
                    First Name <span className="text-[#FF0000]">*</span>
                  </Label>
                  <Input id="firstName" placeholder="Enter First Name" className="border-[#d9d9d9] h-12 text-black font-['Figtree'] text-[14px] md:text-[16px] font-normal leading-normal placeholder:text-[#5A5A5A] placeholder:font-['Figtree'] placeholder:text-[14px] placeholder:md:text-[16px] placeholder:font-normal placeholder:leading-normal" />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-black font-['Figtree'] text-[12px] md:text-[14px] font-medium leading-normal mb-2 block">
                    Last Name <span className="text-[#FF0000]">*</span>
                  </Label>
                  <Input id="lastName" placeholder="Enter Last Name" className="border-[#d9d9d9] h-12 text-black font-['Figtree'] text-[14px] md:text-[16px] font-normal leading-normal placeholder:text-[#5A5A5A] placeholder:font-['Figtree'] placeholder:text-[14px] placeholder:md:text-[16px] placeholder:font-normal placeholder:leading-normal" />
                </div>
                <div className="md:col-span-2 lg:col-span-1">
                  <Label htmlFor="dob" className="text-black font-['Figtree'] text-[12px] md:text-[14px] font-medium leading-normal mb-2 block">
                    Date of Birth <span className="text-[#FF0000]">*</span>
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
                          className="border-[#d9d9d9] h-12 pr-10 cursor-pointer text-black font-['Figtree'] text-[14px] md:text-[16px] font-normal leading-normal placeholder:text-[#5A5A5A] placeholder:font-['Figtree'] placeholder:text-[14px] placeholder:md:text-[16px] placeholder:font-normal placeholder:leading-normal"
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
                  <Label htmlFor="mobile" className="text-black font-['Figtree'] text-[12px] md:text-[14px] font-medium leading-normal mb-2 block">
                    Mobile No. <span className="text-[#FF0000]">*</span>
                  </Label>
                  <div className="flex gap-2 items-center">
                    <Select defaultValue="+91">
                      <SelectTrigger className="w-20 border-[#d9d9d9] min-h-12 h-12 py-3 text-black font-['Figtree'] text-[14px] md:text-[16px] font-normal leading-normal placeholder:text-[#5A5A5A] placeholder:font-['Figtree'] placeholder:text-[14px] placeholder:md:text-[16px] placeholder:font-normal placeholder:leading-normal">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="text-black font-['Figtree'] text-[14px] md:text-[16px] font-normal leading-normal placeholder:text-[#5A5A5A] placeholder:font-['Figtree'] placeholder:text-[14px] placeholder:md:text-[16px] placeholder:font-normal placeholder:leading-normal">
                        <SelectItem value="+91">+91</SelectItem>
                        <SelectItem value="+1">+1</SelectItem>
                        <SelectItem value="+44">+44</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input id="mobile" placeholder="Enter Mobile Number" className="flex-1 border-[#d9d9d9] h-12 text-black font-['Figtree'] text-[14px] md:text-[16px] font-normal leading-normal placeholder:text-[#5A5A5A] placeholder:font-['Figtree'] placeholder:text-[14px] placeholder:md:text-[16px] placeholder:font-normal placeholder:leading-normal" />
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <Label htmlFor="email" className="text-black font-['Figtree'] text-[12px] md:text-[14px] font-medium leading-normal mb-2 block">
                    Email Address <span className="text-[#FF0000]">*</span>
                  </Label>
                  <Input id="email" type="email" placeholder="Enter Email Address" className="border-[#d9d9d9] h-12 text-black font-['Figtree'] text-[14px] md:text-[16px] font-normal leading-normal placeholder:text-[#5A5A5A] placeholder:font-['Figtree'] placeholder:text-[14px] placeholder:md:text-[16px] placeholder:font-normal placeholder:leading-normal" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-2">
            <Button
              onClick={onProceed} // Added onClick handler to proceed to next step
              className="bg-[#e97737] hover:bg-[#d2661f] px-6 md:px-8 py-4 rounded-md w-full md:w-auto"
            >
              <span className="text-white font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-[24px] uppercase">SAVE AND PROCEED</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
