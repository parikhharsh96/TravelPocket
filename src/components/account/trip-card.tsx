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
    <div className="rounded-lg bg-[#EBF5F7] border border-[#e5e5e5] p-4 md:p-6">
      <h3 className="text-black font-['Figtree'] text-[16px] md:text-[18px] font-semibold leading-normal mb-3 md:mb-4">Your Next Trip</h3>

      <div className="flex items-center gap-1 mb-3 md:mb-4">
        {/* <Clock className="w-4 h-4" /> */}
        <img src="/images/account/watch_black.png" className="h-[18px] w-[18px] lg:h-[20px] lg:w-[20px]" />
        <span className="text-black text-center font-['Figtree'] text-xs md:text-sm font-normal leading-normal capitalize">{daysToGo} Days To Go</span>
      </div>

      <div className="relative w-full h-40 md:h-48 rounded-lg overflow-hidden mb-3 md:mb-4">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>

      <h4 className="text-black font-['Figtree'] text-[14px] md:text-[16px] font-semibold leading-[20px] mb-1">{title}</h4>
      <p className="text-black font-['Figtree'] font-normal leading-[19px] text-xs md:text-sm mb-3 md:mb-4">{subtitle}</p>

      <div className="space-y-2 mb-3 md:mb-4">
        <div className="flex items-center justify-between">
          <span className="text-[#5A5A5A] font-['Figtree'] text-xs md:text-sm font-normal leading-normal uppercase">DEPT. DATE</span>
          <span className="text-black font-['Figtree'] text-xs md:text-sm  font-semibold leading-normal">{departureDate}</span>
        </div>
        <div className="flex items-center gap-2 mb-2 md:mb-3">
          {/* <Calendar className="w-4 h-4" /> */}
          <img src="/images/account/calendar_month.svg" className="h-[14px] w-[12px] lg:h-[12px] lg:w-[10px]" />
          <span className="text-[#5A5A5A] font-['Figtree'] text-[11px] md:text-[13px] font-medium leading-[14px] uppercase">{duration}</span>
        </div>
      </div>

      <div className="space-y-2">
        <Button
          variant="outline"
          className="w-full justify-center gap-2 rounded-[6px] border border-[#BEC3D0] group hover:bg-[#E97737] bg-transparent"
        >
          {/* <ExternalLink className="w-4 h-4" /> */}
          <img src="/images/account/article_person.svg" alt="" className="group-hover:text-white" />
          <span className="text-[#1A2F46] text-center font-['Figtree'] text-[12px] md:text-[14px] font-medium leading-normal uppercase">VIEW DETAILS</span>
        </Button>
        <Button variant="outline" className="w-full justify-center gap-2 bg-transparent rounded-[6px] border border-[#BEC3D0] group hover:bg-[#E97737]">
          {/* <Download className="w-4 h-4" /> */}
          <img src="/images/account/download.svg" alt="" className="group-hover:text-white" />
          <span className="text-[#1A2F46] text-center font-['Figtree'] text-[12px] md:text-[14px] font-medium leading-normal uppercase">DOWNLOAD ITINERARY</span>
        </Button>
      </div>
    </div>
  )
}
