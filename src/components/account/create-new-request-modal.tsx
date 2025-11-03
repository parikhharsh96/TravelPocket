"use client"

import React, { useRef } from "react"
import { useState } from "react"
import { X, ChevronDown } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu" // adjust import path to your setup
import { ScrollArea } from "../ui/scroll-area"
import Link from "next/link"
import { Separator } from "../ui/separator"

interface CreateUpdateRequestModalProps {
    isOpen: boolean
    onClose: () => void
    onSubmit: (request: {
        bookingId: string
        subject: string
        message: string
    }) => void
}

export default function CreateUpdateRequestModal({
    isOpen,
    onClose,
    onSubmit,
}: CreateUpdateRequestModalProps) {
    const [bookingId, setBookingId] = useState<string>("")
    const [subject, setSubject] = useState<string>("")
    const [message, setMessage] = useState<string>("")
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const triggerRef = useRef<HTMLButtonElement>(null)

    const bookingOptions = ["#2145638", "#2145639", "#2145640"]

    if (!isOpen) return null

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!bookingId.trim() || !subject.trim() || !message.trim()) {
            alert("Please fill in all required fields")
            return
        }

        onSubmit({ bookingId, subject, message })
        setBookingId("")
        setSubject("")
        setMessage("")
    }

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <ScrollArea className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                    <h2 className="text-[#1A2F46] font-['Playfair_Display'] text-[24px] md:text-[28px] font-semibold leading-normal">
                        Send Update Request
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 transition-colors"
                        aria-label="Close modal"
                    >
                        <X className="w-6 h-6 cursor-pointer" />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    {/* Booking ID Dropdown */}
                    {/* Booking ID Dropdown */}
                    <div>
                        <label className="block text-black font-['Figtree'] text-[12px] md:text-[14px] font-medium leading-normal mb-2">
                            Booking ID <span className="text-[#FF0000]">*</span>
                        </label>

                        <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
                            <DropdownMenuTrigger asChild className="w-[50%]">
                                <button
                                    ref={triggerRef}
                                    type="button"
                                    className="w-full flex justify-between items-center px-4 py-3 border border-gray-300 rounded-lg text-left text-[#5A5A5A] font-['Figtree'] text-[14px] md:text-[16px] font-normal leading-normal hover:border-[#e97737] focus:outline-none focus:ring-2 focus:ring-[#e97737]"
                                >
                                    <span>{bookingId || "Select Booking ID"}</span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent
                                style={{ width: triggerRef.current ? `${triggerRef.current.offsetWidth}px` : "100%" }}
                                className="bg-white border border-gray-200 rounded-lg shadow-md mt-2 py-2"
                                align="start"
                            >
                                {bookingOptions.map((option, index) => (
                                    <React.Fragment key={index}>
                                        <DropdownMenuItem
                                            onClick={() => {
                                                setBookingId(option)
                                                setDropdownOpen(false)
                                            }}
                                            className="cursor-pointer px-4 py-2 text-[#1A2F46] font-['Figtree'] text-[14px] hover:bg-[#FFF7F2]"
                                        >
                                            {option}
                                        </DropdownMenuItem>
                                        {index !== bookingOptions.length - 1 && (
                                            <Separator orientation="horizontal" className="w-full border border-[#E7E7E7]" />
                                        )}
                                    </React.Fragment>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>


                    {/* Subject */}
                    <div>
                        <label className="block text-black font-['Figtree'] text-[12px] md:text-[14px] font-medium leading-normal mb-2">
                            Subject <span className="text-[#FF0000]">*</span>
                        </label>
                        <input
                            type="text"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            placeholder="Enter the Subject for your Request"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e97737] focus:border-transparent text-[#5A5A5A] font-['Figtree'] text-[14px] md:text-[16px] font-normal leading-normal placeholder:text-[#5A5A5A]"
                            required
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-black font-['Figtree'] text-[12px] md:text-[14px] font-medium leading-normal mb-2">
                            Message <span className="text-[#FF0000]">*</span>
                        </label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Enter the Message for your Request"
                            rows={6}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e97737] focus:border-transparent resize-none text-[#5A5A5A] font-['Figtree'] text-[14px] md:text-[16px] font-normal leading-normal placeholder:text-[#5A5A5A]"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center pt-4">
                        <button
                            type="submit"
                            className="px-8 py-3 bg-[#e97737] text-white font-semibold rounded-lg hover:bg-[#d66a2e] transition-colors cursor-pointer"
                        >
                            <span className="text-white font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-[24px] uppercase">
                                SUBMIT REQUEST
                            </span>
                        </button>
                    </div>
                </form>
            </ScrollArea>
        </div>
    )
}
