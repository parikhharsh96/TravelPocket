'use client';
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Separator } from "../ui/separator"

export function BreadcrumbNav() {
  return (
    <div className="bg-[#EBF5F7]">
      <div className="container mx-auto px-4 py-3">
        {/* <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="flex items-center gap-1 hover:text-primary transition-colors">
            <ChevronLeft className="w-4 h-4" />
            <span>Back</span>
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/kailash-mansarovar-yatra" className="hover:text-primary transition-colors">
            Kailash Mansarovar Yatra
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground">Book Package</span>
        </div> */}
        <div className="flex items-center gap-4 text-[#5a5a5a] pt-2"> {/**mb-6 md:mb-8 */}
          <Link href="/" className="flex items-center gap-2 hover:text-[#000000] transition-colors">
            {/* <ArrowLeft className="w-5 h-5" /> */}
            <img src="/images/detailpage/arrow_back.svg" width="14px" height="14px"
              alt="Twitter" className="cursor-pointer" />
            <span className="text-[#5A5A5A] font-['Figtree'] text-[10px] md:text-[12px] font-normal leading-[14px]">Back</span>
          </Link>
          {/* <span className="text-[#d9d9d9]">|</span> */}
          <Separator orientation="vertical" className="!h-[14px] w-px bg-[#BBB] border border-[#BBB]" />
          <div className="flex items-center gap-2 text-base">
            <Link href="/" className="hover:text-[#000000] transition-colors flex items-center">
              <span className="text-[#5A5A5A] font-['Figtree'] text-[10px] md:text-[12px] font-normal leading-[14px]">Home</span>
            </Link>
            <img src="/images/detailpage/arrow-right.svg" width="12px" height="12px"
              alt="Twitter" className="cursor-pointer" />
            <span className="text-[#5A5A5A] font-['Figtree'] text-[10px] md:text-[12px] font-normal leading-[14px] cursor-pointer">Kailash Mansarovar Yatra</span>
            <img src="/images/detailpage/arrow-right.svg" width="12px" height="12px"
              alt="Twitter" className="cursor-pointer" />
            <span className="text-black font-['Figtree'] text-[10px] md:text-[12px] font-normal leading-[14px] cursor-pointer">Book Package</span>
          </div>
        </div>
      </div>
    </div>
  )
}
