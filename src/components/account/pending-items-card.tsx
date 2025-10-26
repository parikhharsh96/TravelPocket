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
    <div className="bg-white rounded-lg border border-[#e5e5e5] p-4 md:p-6">
      <h3 className="text-base md:text-lg font-semibold text-[#1a2f46] mb-3 md:mb-4">Your Pending Items</h3>

      <div className="space-y-2 md:space-y-3 mb-3 md:mb-4">
        {pendingItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between py-2">
            <span className="text-xs md:text-sm text-[#333333]">
              <span className="font-medium">{item.id}.</span> {item.label}
            </span>
            <ChevronRight className="w-4 h-4 text-[#e97737]" />
          </div>
        ))}
      </div>

      <Button className="w-full bg-[#e97737] hover:bg-[#c75414] text-white text-xs md:text-sm">COMPLETE NOW</Button>
    </div>
  )
}
