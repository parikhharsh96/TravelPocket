"use client"

import { Plus } from "lucide-react"

interface UpdateRequest {
  srNo: number
  bookingId: string
  requestedDate: string
  subject: string
  message: string
  status: "submitted" | "in-progress" | "resolved"
}

export function SendUpdateRequest() {
  const requests: UpdateRequest[] = [
    {
      srNo: 1,
      bookingId: "#2145638",
      requestedDate: "04 Aug 2024",
      subject: "Date change request",
      message: "Lorem ipsum dolor sit amet consectetur.",
      status: "submitted",
    },
    {
      srNo: 2,
      bookingId: "#2145638",
      requestedDate: "04 Aug 2024",
      subject: "Date change request",
      message: "Lorem ipsum dolor sit amet consectetur.",
      status: "submitted",
    },
    {
      srNo: 3,
      bookingId: "#2145638",
      requestedDate: "04 Aug 2024",
      subject: "Date change request",
      message: "Lorem ipsum dolor sit amet consectetur.",
      status: "submitted",
    },
    {
      srNo: 4,
      bookingId: "#2145638",
      requestedDate: "04 Aug 2024",
      subject: "Date change request",
      message: "Lorem ipsum dolor sit amet consectetur.",
      status: "submitted",
    },
  ]

  const handleCreateRequest = () => {
    console.log("[v0] Create new request clicked")
    // TODO: Open modal to create new request
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl md:text-2xl font-bold text-[#1a2f46]">Send Update Request</h2>

      <div className="bg-white border border-[#e5e5e5] rounded-lg p-4 md:p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 md:mb-8">
          <h3 className="text-lg md:text-xl font-bold text-[#1a2f46]">Request Status</h3>
          <button
            onClick={handleCreateRequest}
            className="bg-[#e97737] hover:bg-[#d86830] text-white font-medium py-3 px-4 md:px-6 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm md:text-base whitespace-nowrap"
          >
            <Plus className="w-5 h-5" />
            CREATE NEW REQUEST
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto -mx-4 md:mx-0">
          <div className="inline-block min-w-full align-middle">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-[#e5e5e5]">
                  <th className="text-left py-3 px-3 md:px-4 text-xs md:text-sm font-semibold text-[#5a5a5a] uppercase tracking-wide">
                    SR. NO.
                  </th>
                  <th className="text-left py-3 px-3 md:px-4 text-xs md:text-sm font-semibold text-[#5a5a5a] uppercase tracking-wide">
                    BOOKING ID
                  </th>
                  <th className="text-left py-3 px-3 md:px-4 text-xs md:text-sm font-semibold text-[#5a5a5a] uppercase tracking-wide">
                    REQUESTED DATE
                  </th>
                  <th className="text-left py-3 px-3 md:px-4 text-xs md:text-sm font-semibold text-[#5a5a5a] uppercase tracking-wide">
                    SUBJECT
                  </th>
                  <th className="text-left py-3 px-3 md:px-4 text-xs md:text-sm font-semibold text-[#5a5a5a] uppercase tracking-wide min-w-[200px]">
                    MESSAGE
                  </th>
                  <th className="text-left py-3 px-3 md:px-4 text-xs md:text-sm font-semibold text-[#5a5a5a] uppercase tracking-wide">
                    ACTIONS
                  </th>
                </tr>
              </thead>
              <tbody>
                {requests.map((request, index) => (
                  <tr key={index} className="border-b border-[#e5e5e5] hover:bg-[#fff7f2] transition-colors">
                    <td className="py-4 px-3 md:px-4 text-sm md:text-base text-[#1a2f46]">{request.srNo}</td>
                    <td className="py-4 px-3 md:px-4 text-sm md:text-base text-[#1a2f46] font-medium">
                      {request.bookingId}
                    </td>
                    <td className="py-4 px-3 md:px-4 text-sm md:text-base text-[#1a2f46] whitespace-nowrap">
                      {request.requestedDate}
                    </td>
                    <td className="py-4 px-3 md:px-4 text-sm md:text-base text-[#1a2f46]">{request.subject}</td>
                    <td className="py-4 px-3 md:px-4 text-sm md:text-base text-[#5a5a5a]">{request.message}</td>
                    <td className="py-4 px-3 md:px-4">
                      <span className="inline-block bg-[#d0ffed] text-[#0a8b7c] px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-medium whitespace-nowrap">
                        Submitted
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
