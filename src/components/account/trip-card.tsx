import { Clock, Calendar, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface TripCardProps {
  title: string
  subtitle: string
  daysToGo: number
  departureDate: string
  duration: string
  imageUrl: string
}

export function TripCard({ title, subtitle, daysToGo, departureDate, duration, imageUrl }: TripCardProps) {
  return (
    <div className="bg-white rounded-lg border border-[#e5e5e5] p-4 md:p-6">
      <h3 className="text-base md:text-lg font-semibold text-[#1a2f46] mb-3 md:mb-4">Your Next Trip</h3>

      <div className="flex items-center gap-2 text-xs md:text-sm text-[#333333] mb-3 md:mb-4">
        <Clock className="w-4 h-4" />
        <span className="font-medium">{daysToGo} Days To Go</span>
      </div>

      <div className="relative w-full h-40 md:h-48 rounded-lg overflow-hidden mb-3 md:mb-4">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>

      <h4 className="font-bold text-sm md:text-base text-[#1a2f46] mb-1">{title}</h4>
      <p className="text-xs md:text-sm text-[#5a5a5a] mb-3 md:mb-4">{subtitle}</p>

      <div className="space-y-2 mb-3 md:mb-4">
        <div className="flex items-center justify-between text-xs md:text-sm">
          <span className="text-[#5a5a5a]">DEPT. DATE</span>
          <span className="font-medium text-[#333333]">{departureDate}</span>
        </div>
        <div className="flex items-center gap-2 text-xs md:text-sm text-[#5a5a5a]">
          <Calendar className="w-4 h-4" />
          <span>{duration}</span>
        </div>
      </div>

      <div className="space-y-2">
        <Button
          variant="outline"
          className="w-full justify-center gap-2 border-[#e97737] text-[#e97737] hover:bg-[#fff7f2] bg-transparent text-xs md:text-sm"
        >
          <ExternalLink className="w-4 h-4" />
          VIEW DETAILS
        </Button>
        <Button variant="outline" className="w-full justify-center gap-2 bg-transparent text-xs md:text-sm">
          <Download className="w-4 h-4" />
          DOWNLOAD ITINERARY
        </Button>
      </div>
    </div>
  )
}
