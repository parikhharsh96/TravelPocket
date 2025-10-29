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
      <h2 className="text-black font-['Figtree'] text-[18px] md:text-[20px] font-semibold leading-normal">Send Update Request</h2>

      <div className="bg-white rounded-lg border border-[#D2D8E4] p-4 md:p-6 lg:p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-[#1A2F46] font-['Playfair_Display'] text-[20px] md:text-[22px] font-semibold leading-normal">Request Status</div>
          <button
            onClick={handleCreateRequest}
            className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-[#e97737] rounded-lg hover:bg-[#d86629] transition-colors cursor-pointer"
          >
            
            {/* <Plus className="w-4h-4 md:w-5 md:h-5" /> */}
            <img src="/images/account/add_box.svg" className="h-[18px] w-[18px] lg:h-[20px] lg:w-[20px]" />
            <span className="text-white font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-[24px] uppercase">CREATE NEW REQUEST</span>
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto -mx-4 md:mx-0">
          <div className="inline-block min-w-full align-middle">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-[#e5e5e5] bg-[#FFF7F2]">
                  <th className="text-left py-3 px-3 md:px-4 text-[#1A2F46] font-['Figtree'] text-[10px] md:text-[12px] font-semibold leading-normal uppercase">
                    SR. NO.
                  </th>
                  <th className="text-left py-3 px-3 md:px-4 text-[#1A2F46] font-['Figtree'] text-[10px] md:text-[12px] font-semibold leading-normal uppercase">
                    BOOKING ID
                  </th>
                  <th className="text-left py-3 px-3 md:px-4 text-[#1A2F46] font-['Figtree'] text-[10px] md:text-[12px] font-semibold leading-normal uppercase">
                    REQUESTED DATE
                  </th>
                  <th className="text-left py-3 px-3 md:px-4 text-[#1A2F46] font-['Figtree'] text-[10px] md:text-[12px] font-semibold leading-normal uppercase">
                    SUBJECT
                  </th>
                  <th className="text-left py-3 px-3 md:px-4 text-[#1A2F46] font-['Figtree'] text-[10px] md:text-[12px] font-semibold leading-normal uppercase min-w-[200px]">
                    MESSAGE
                  </th>
                  <th className="text-left py-3 px-3 md:px-4 text-[#1A2F46] font-['Figtree'] text-[10px] md:text-[12px] font-semibold leading-normal uppercase">
                    ACTIONS
                  </th>
                </tr>
              </thead>
              <tbody>
                {requests.map((request, index) => (
                  <tr key={index} className="border-b border-[#e5e5e5] hover:bg-[#fff7f2] transition-colors">
                    <td className="py-4 px-3 md:px-4 text-black font-['Figtree'] text-[12px] md:text-[14px] font-normal leading-normal">{request.srNo}</td>
                    <td className="py-4 px-3 md:px-4 text-black font-['Figtree'] text-[12px] md:text-[14px] font-normal leading-normal">
                      {request.bookingId}
                    </td>
                    <td className="py-4 px-3 md:px-4 text-black font-['Figtree'] text-[12px] md:text-[14px] font-normal leading-normal whitespace-nowrap">
                      {request.requestedDate}
                    </td>
                    <td className="py-4 px-3 md:px-4 text-black font-['Figtree'] text-[12px] md:text-[14px] font-normal leading-normal">{request.subject}</td>
                    <td className="py-4 px-3 md:px-4 text-black font-['Figtree'] text-[12px] md:text-[14px] font-normal leading-normal">{request.message}</td>
                    <td className="py-4 px-3 md:px-4">
                      <span className="inline-block bg-[#D0FFED] px-3 md:px-4 py-1.5 md:py-2 rounded-lg whitespace-nowrap">
                        <span className="text-[#0A8B7C] font-['Figtree'] text-[12px] font-semibold leading-normal">Submitted</span>
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
