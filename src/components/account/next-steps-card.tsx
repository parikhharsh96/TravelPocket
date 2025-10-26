import { ChevronRight } from "lucide-react"

interface NextStep {
  id: number
  label: string
}

const nextSteps: NextStep[] = [
  { id: 1, label: "Update Traveller Info" },
  { id: 2, label: "Upload Documents" },
  { id: 3, label: "Download Booking Form" },
]

export function NextStepsCard() {
  return (
    <div className="bg-white rounded-lg border border-[#e5e5e5] p-4 md:p-6">
      <h3 className="text-base md:text-lg font-semibold text-[#1a2f46] mb-3 md:mb-4">Your Next Steps</h3>

      <div className="space-y-2 md:space-y-3">
        {nextSteps.map((step) => (
          <div
            key={step.id}
            className="flex items-center justify-between py-2 cursor-pointer hover:bg-[#fff7f2] -mx-2 px-2 rounded"
          >
            <span className="text-xs md:text-sm text-[#333333]">
              <span className="font-medium">{step.id}.</span> {step.label}
            </span>
            <ChevronRight className="w-4 h-4 text-[#e97737]" />
          </div>
        ))}
      </div>
    </div>
  )
}
