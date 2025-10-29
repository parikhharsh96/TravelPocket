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
    <div className="rounded-[8px] border border-[#D2D8E4] bg-white p-4 md:p-6">
      <h3 className="text-black font-['Figtree'] text-[16px] md:text-[18px] font-semibold leading-normal mb-3 md:mb-4">Your Next Steps</h3>

      <div className="space-y-2 md:space-y-3">
        {nextSteps.map((step) => (
          <div
            key={step.id}
            className="flex items-center justify-between py-2 cursor-pointer hover:bg-[#fff7f2] -mx-2 px-2 rounded"
          >
            <span className="text-black font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-normal">
              <span className="">{step.id}.</span> {step.label}
            </span>
            {/* <ChevronRight className="w-4 h-4 text-[#e97737]" /> */}
            <img src="/images/account/arrow-right.svg" alt="" className="" />
          </div>
        ))}
      </div>
    </div>
  )
}
