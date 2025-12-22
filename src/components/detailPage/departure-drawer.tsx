"use client"

import { X, MessageCircle, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@radix-ui/react-separator"
import { useRouter } from "next/navigation";

interface PackageDate {
    dateId: number;
    packageId: number;
    groupCode: string;
    startDate: string;
    endDate: string;
    groupSize: number;
    remaining: number;
    remark: string;
    isAvailable: boolean;
    isFillingFast: boolean;
}

interface DepartureDrawerProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    packageDates: PackageDate[]
    packageDatesLoading: boolean
}

const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' });
    return `${day} ${month},${dayOfWeek}`;
};

export function DepartureDrawer({ open, onOpenChange, packageDates, packageDatesLoading }: DepartureDrawerProps) {

    const router = useRouter();

    const nagivateToBooking = () => {
        router.push("/booking");
    };

    return (
        <Drawer open={open} onOpenChange={onOpenChange}>
            {/* open drawer to 90% of viewport height */}
            <DrawerContent
                // ensure bottom-direction drawer uses 90vh
                heightClass="data-[vaul-drawer-direction=bottom]:h-[90vh] data-[vaul-drawer-direction=bottom]:max-h-[90vh]"
                className="w-full overflow-hidden flex flex-col"
            >
                {/* Scroll area fills remaining space and handles scrolling */}
                <ScrollArea className="flex-1 min-h-0 overflow-y-auto">
                    <DrawerHeader className="pb-4">
                        <div className="flex flex-col gap-[10px]">
                            <div className="flex flex-row justify-between items-center w-full">
                                <DrawerTitle className="text-black font-['Figtree'] text-[18px] font-semibold leading-[normal]">Select Departure Month</DrawerTitle>
                                <Button variant="ghost" size="icon" onClick={() => onOpenChange(false)} className="h-8 w-8 ml-auto">
                                    <X className="h-5 w-5" />
                                </Button>
                            </div>
                        </div>
                        <div className="flex flex-row gap-[8px] items-center flex-wrap">
                            <div className="max-w-[50px] rounded-lg border border-[#D2D8E4] bg-[#1A2F46]" style={{ padding: "12px 12px" }}>
                                <div className="flex flex-col items-center gap-[8px]">
                                    <div className="text-white text-center font-['Figtree'] text-[14px] font-semibold leading-[normal]">Aug</div>
                                    <div className="text-white text-center font-['Figtree'] text-[14px] font-semibold leading-[normal]">2025</div>
                                </div>
                            </div>
                            <div className="max-w-[50px] rounded-lg border border-[#D2D8E4] bg-white" style={{ padding: "12px 12px" }}>
                                <div className="flex flex-col items-center gap-[8px]">
                                    <div className="text-[#4D4D4D] text-center font-['Figtree'] text-[14px] font-normal leading-[normal]">Oct</div>
                                    <div className="text-[#4D4D4D] text-center font-['Figtree'] text-[14px] font-normal leading-[normal]">2025</div>
                                </div>
                            </div>
                            <div className="max-w-[50px] rounded-lg border border-[#D2D8E4] bg-white" style={{ padding: "12px 12px" }}>
                                <div className="flex flex-col items-center gap-[8px]">
                                    <div className="text-[#4D4D4D] text-center font-['Figtree'] text-[14px] font-normal leading-[normal]">Nov</div>
                                    <div className="text-[#4D4D4D] text-center font-['Figtree'] text-[14px] font-normal leading-[normal]">2025</div>
                                </div>
                            </div>
                            <div className="max-w-[50px] rounded-lg border border-[#D2D8E4] bg-white" style={{ padding: "12px 12px" }}>
                                <div className="flex flex-col items-center gap-[8px]">
                                    <div className="text-[#4D4D4D] text-center font-['Figtree'] text-[14px] font-normal leading-[normal]">Dec</div>
                                    <div className="text-[#4D4D4D] text-center font-['Figtree'] text-[14px] font-normal leading-[normal]">2025</div>
                                </div>
                            </div>
                        </div>
                    </DrawerHeader>

                    <div className="rounded-lg bg-[#EBF5F7] w-full mb-4">
                        <div className="flex flex-col gap-[14px]">
                            <div className="flex justify-between items-center" style={{ padding: "15px 15px 15px 15px" }}>
                                <div className="text-black font-['Figtree'] text-base not-italic font-semibold leading-none capitalize">Sept 2025 Departures</div>
                                <div className="text-black text-right font-['Figtree'] text-[12px] font-normal leading-[normal] uppercase">{packageDates?.length || 0} dates </div>
                            </div>

                            <div className="flex flex-col gap-[16px]" style={{ padding: "0px 15px 15px 15px" }}>
                                {packageDatesLoading ? (
                                    Array.from({ length: 3 }).map((_, index) => (
                                        <div key={index} className="rounded-lg bg-white shadow-[0_6px_8px_0_rgba(0,0,0,0.2)]">
                                            <div className="flex flex-col gap-[16px]">
                                                <div className="relative">
                                                    <div className="absolute top-[0.5px] left-[1px] z-10 w-20 h-6 bg-gray-200 rounded animate-pulse"></div>
                                                </div>
                                                <div className="flex-grow mt-4">
                                                    <div className="" style={{ padding: "0px 15px 10px 15px" }}>
                                                        <div className="flex flex-col gap-[12px]">
                                                            <div className="flex flex-col gap-[12px]">
                                                                <div className="flex flex-col gap-[16px]">
                                                                    <div className="flex flex-row gap-[20px]">
                                                                        <div className="flex flex-row gap-[14px] items-center">
                                                                            <div className="flex flex-col gap-[8px]">
                                                                                <div className="h-[10px] w-16 bg-gray-200 rounded animate-pulse"></div>
                                                                                <div className="h-[16px] w-20 bg-gray-200 rounded animate-pulse"></div>
                                                                            </div>
                                                                            <div className="w-4 h-4 bg-gray-200 rounded animate-pulse"></div>
                                                                            <div className="flex flex-col gap-[8px]">
                                                                                <div className="h-[10px] w-16 bg-gray-200 rounded animate-pulse"></div>
                                                                                <div className="h-[16px] w-20 bg-gray-200 rounded animate-pulse"></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex flex-col gap-[2px]">
                                                                            <div className="h-[10px] w-24 bg-gray-200 rounded animate-pulse"></div>
                                                                            <div className="rounded-[40px] bg-gray-200 w-[29px] h-[29px] animate-pulse"></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="bg-gray-100 rounded-[6px] w-full max-w-[228px] h-12 animate-pulse"></div>
                                                                </div>
                                                                <div className="w-full h-px bg-gray-200 animate-pulse"></div>
                                                            </div>
                                                            <div className="w-full h-12 bg-gray-200 rounded-[6px] animate-pulse"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    packageDates.map((pkgDate, index) => (
                                        <div key={pkgDate.dateId} className="rounded-lg bg-white shadow-[0_6px_8px_0_rgba(0,0,0,0.2)]">
                                            <div className="flex flex-col gap-[16px]">
                                                <div className="relative">
                                                    <Badge
                                                        variant={pkgDate.isFillingFast ? "warning" : "registration"}
                                                        icon={pkgDate.isFillingFast ? "/images/detailpage/dot_brown.svg" : "/images/detailpage/green_dot.svg"}
                                                        className={`absolute top-[0.5px] left-[1px] z-10 text-xs font-semibold px-3 py-1 rounded-[4px] ${pkgDate.isFillingFast ? 'bg-[#FFFAE1]' : 'bg-[#DFF8F1]'}`}
                                                    >
                                                        <span className={`font-['Figtree'] text-[12px] font-semibold leading-[14px] uppercase ${pkgDate.isFillingFast ? 'text-[#853C04]' : 'text-[#04852D]'}`}>
                                                            {pkgDate.isFillingFast ? 'Filling Fast' : 'Available'}
                                                        </span>
                                                    </Badge>
                                                </div>

                                                <div className="flex-grow mt-4">
                                                    <div className="" style={{ padding: "0px 15px 10px 15px" }}>
                                                        <div className="flex flex-col gap-[12px]">
                                                            <div className="flex flex-col gap-[12px]">
                                                                <div className="flex flex-col gap-[16px]">
                                                                    <div className="flex flex-row gap-[20px]">
                                                                        <div className="flex flex-row gap-[14px] items-center">
                                                                            <div className="flex flex-col gap-[8px]">
                                                                                <div className="text-[#5D5D5D] font-['Figtree'] text-[10px] font-semibold leading-[normal] uppercase">START DATE</div>
                                                                                <div className="text-black font-['Figtree'] text-[16px] font-extrabold leading-[normal]">{formatDate(pkgDate.startDate)}</div>
                                                                            </div>
                                                                            <img src="/images/detailpage/arrow-right_1.svg" alt="" className="w-[18px] h-[18px]" />
                                                                            <div className="flex flex-col gap-[8px]">
                                                                                <div className="text-[#5D5D5D] font-['Figtree'] text-[10px] font-semibold leading-[normal] uppercase">END DATE</div>
                                                                                <div className="text-black font-['Figtree'] text-[16px] font-extrabold leading-[normal]">{formatDate(pkgDate.endDate)}</div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex flex-col gap-[2px]">
                                                                            <div className="text-[#5D5D5D] font-['Figtree'] text-[10px] font-semibold leading-[normal] uppercase">Seats remain...</div>
                                                                            <div className={`rounded-[40px] w-[29px] h-[29px] flex flex-col items-center justify-center ${pkgDate.isFillingFast ? 'bg-[#D6B40A]' : 'bg-[#17A74E]'}`}>
                                                                                <div className="text-white font-['Figtree'] text-[14px] font-extrabold leading-[normal]">{pkgDate.remaining}</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="bg-[#E9FBFF] rounded-[6px] w-full max-w-[228px]" style={{ padding: "4px 10px" }}>
                                                                        <div className="flex flex-row gap-[10px]">
                                                                            <div className="flex flex-row gap-[6px] items-center shrink-0">
                                                                                <img src="/images/detailpage/chat-bubble_blue.svg" alt="" className="" />
                                                                                <div className="text-[#1C8CA7] font-['Figtree'] text-[11px] font-semibold leading-[normal] uppercase">Chat with us</div>
                                                                            </div>
                                                                            <Separator className="bg-[#D2D8E4] border border-[#D2D8E4]" />
                                                                            <div className="flex flex-row gap-[6px] items-center shrink-0">
                                                                                <img src="/images/detailpage/mail_blue.svg" alt="" className="" />
                                                                                <div className="text-[#1C8CA7] font-['Figtree'] text-[11px] font-semibold leading-[normal] uppercase">Send Email</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <Separator className="w-full bg-[#D2D8E4] border border-[#D2D8E4]" />
                                                                {pkgDate.remark && (
                                                                    <div className="flex flex-col gap-[6px]">
                                                                        <div className="text-[#4D4D4D] font-['Figtree'] text-[11px] font-bold leading-[normal]">SPECIAL NOTE</div>
                                                                        <div className="text-black font-['Figtree'] text-[12px] font-normal leading-[normal]">{pkgDate.remark}</div>
                                                                    </div>
                                                                )}
                                                            </div>

                                                            <div style={{ padding: "" }}>
                                                                <div className="w-full rounded-[6px] bg-[#E97737] cursor-pointer" style={{ padding: "10px 10px" }} onClick={nagivateToBooking}>
                                                                    <div className="flex items-center justify-center">
                                                                        <div className="text-white font-['Figtree'] text-[14px] font-semibold leading-[24px] uppercase">BOOK NOW  |  reserve your seat*</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="w-full mt-4" style={{ padding: "0px 15px 0px 15px" }}>
                        <div className="rounded-[8px] bg-[#FFF7F2]" style={{ padding: "10px 25px 20px 20px" }}>
                            <div className="flex items-center space-x-3">
                                {/* Icon */}
                                <div className="w-8 h-8 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="37" height="34" viewBox="0 0 37 34" fill="none">
                                        <path d="M34 0H2.66667C1.95942 0 1.28115 0.280951 0.781048 0.781048C0.280951 1.28115 0 1.95942 0 2.66667V31.6667C0 32.2855 0.245833 32.879 0.683418 33.3166C1.121 33.7542 1.71449 34 2.33333 34H34.3333C34.9522 34 35.5457 33.7542 35.9832 33.3166C36.4208 32.879 36.6667 32.2855 36.6667 31.6667V2.66667C36.6667 1.95942 36.3857 1.28115 35.8856 0.781048C35.3855 0.280951 34.7072 0 34 0Z" fill="#EDEBF2" />
                                        <path d="M34 0H2.66667C1.95942 0 1.28115 0.280951 0.781048 0.781048C0.280951 1.28115 0 1.95942 0 2.66667V9H36.6667V2.66667C36.6667 1.95942 36.3857 1.28115 35.8856 0.781048C35.3855 0.280951 34.7072 0 34 0Z" fill="#E82525" />
                                        <path d="M23.6667 5.3335H13C12.7348 5.3335 12.4804 5.22814 12.2929 5.0406C12.1054 4.85307 12 4.59871 12 4.3335C12 4.06828 12.1054 3.81393 12.2929 3.62639C12.4804 3.43885 12.7348 3.3335 13 3.3335H23.6667C23.9319 3.3335 24.1862 3.43885 24.3738 3.62639C24.5613 3.81393 24.6667 4.06828 24.6667 4.3335C24.6667 4.59871 24.5613 4.85307 24.3738 5.0406C24.1862 5.22814 23.9319 5.3335 23.6667 5.3335Z" fill="#EDEBF2" />
                                        <path d="M18.3335 31.6665C23.8563 31.6665 28.3335 27.1894 28.3335 21.6665C28.3335 16.1437 23.8563 11.6665 18.3335 11.6665C12.8106 11.6665 8.3335 16.1437 8.3335 21.6665C8.3335 27.1894 12.8106 31.6665 18.3335 31.6665Z" fill="#0DBD5F" />
                                        <path d="M16.9999 25.3331C16.8686 25.3333 16.7385 25.3074 16.6172 25.2572C16.4958 25.2069 16.3856 25.1331 16.2929 25.0401L13.6262 22.3735C13.4398 22.1857 13.3355 21.9317 13.3359 21.6672C13.3364 21.4026 13.4417 21.149 13.6288 20.962C13.8159 20.7749 14.0695 20.6696 14.334 20.6691C14.5986 20.6686 14.8525 20.773 15.0403 20.9594L16.9999 22.919L21.6262 18.2927C21.814 18.1063 22.0679 18.002 22.3325 18.0024C22.5971 18.0029 22.8506 18.1082 23.0377 18.2953C23.2248 18.4824 23.3301 18.736 23.3306 19.0005C23.3311 19.2651 23.2267 19.519 23.0403 19.7068L17.7069 25.0401C17.6142 25.1331 17.504 25.2069 17.3827 25.2572C17.2613 25.3074 17.1313 25.3333 16.9999 25.3331Z" fill="white" />
                                    </svg>
                                </div>
                                {/* Text */}
                                <div className="">
                                    <span className="text-[#1A2F46] font-['Figtree'] text-[13px] font-bold leading-normal uppercase">*Reserve your Seat</span>
                                    <span className="ml-1 text-[#1C8CA7] font-['Figtree'] text-[14px] font-bold leading-normal uppercase">now and pay later</span>
                                </div>
                            </div>

                            {/* Description Content */}
                            <div className="mt-2">
                                <div className="text-[#4D4D4D] font-['Figtree'] text-[11px] font-normal leading-normal">
                                    <span className="font-bold">Pay ₹11,000 now </span>
                                    <span className="">
                                        and book the package at this price, payment as per policy can be made in the next 24/48 hrs post confirmation. Holding of seats are subject to availability.
                                    </span>
                                </div>

                                <div className="">
                                    <div className="font-['Figtree'] text-black text-[11px] font-semibold leading-normal">Pay this amount by 02 Aug 2025 to avail</div>
                                    <img src="/images/detailpage/rupee2.svg" height="22px" width="22px" className="inline ml-1 mr-1 w-[22px] h-[22px] align-middle" />
                                    <span className="font-['Figtree'] text-black text-[11px] font-semibold leading-normal">
                                        Extra Discount
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollArea>
            </DrawerContent>
        </Drawer>
    )
}