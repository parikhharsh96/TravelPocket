import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PendingItem {
  id: number
  label: string
}

const pendingItems: PendingItem[] = [
  { id: 1, label: "Make Final Payment" },
  { id: 2, label: "Upload PAN Card for TDS" },
]

export function PendingItemsCard() {
  return (
    <div className="rounded-[8px] border border-[#D2D8E4] bg-white p-4 md:p-6">
      <h3 className="text-black font-['Figtree'] text-[16px] md:text-[18px] font-semibold leading-normal mb-3 md:mb-4">Your Pending Items</h3>

      <div className="space-y-2 md:space-y-3 mb-3 md:mb-4">
        {pendingItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between py-2">
            <span className="text-black font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-normal">
              <span className="">{item.id}.</span> {item.label}
            </span>
            {/* <ChevronRight className="w-4 h-4 text-[#e97737]" /> */}
            <img src="/images/account/arrow-right.svg" alt="" className="" />
          </div>
        ))}
      </div>

      <Button className="w-full bg-[#e97737] hover:bg-[#c75414] text-white font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-[24px] uppercase">COMPLETE NOW</Button>
    </div>
  )
}
