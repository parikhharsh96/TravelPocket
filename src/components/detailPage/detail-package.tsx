"use client";

import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";
import { useRef } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


export default function DetailPackage() {

    const sliderRef = useRef<HTMLDivElement>(null);
    const scrollAmount = 320; // Match card width + margin

    const scroll = (direction: 'left' | 'right') => {
        console.log("cliecked");
        if (sliderRef.current) {
            const value = direction === 'left' ? -scrollAmount : scrollAmount;
            sliderRef.current.scrollBy({ left: value, behavior: 'smooth' });
        }
    };


    return (
        <>
            <section className="max-w-[1920px] mx-auto">
                <div className="rounded-[0_0_30px_30px] bg-[#EBF5F7] w-full">
                    <div className="p-4 md:p-6 lg:p-8">
                        <div className="flex items-center gap-4 mb-6 md:mb-8 text-[#5a5a5a] pt-2">
                            <Link href="/" className="flex items-center gap-2 hover:text-[#000000] transition-colors">
                                {/* <ArrowLeft className="w-5 h-5" /> */}
                                <img src="/images/detailpage/arrow_back.svg" width="14px" height="14px"
                                    alt="Twitter" className="cursor-pointer" />
                                <span className="text-[#5A5A5A] font-['Figtree'] text-[11px] lg:text-[12px] font-normal leading-[14px]">Back</span>
                            </Link>
                            {/* <span className="text-[#d9d9d9]">|</span> */}
                            <Separator orientation="vertical" className="!h-[14px] w-px bg-[#BBB] border border-[#BBB]" />
                            <div className="flex items-center gap-2 text-base">
                                <Link href="/" className="hover:text-[#000000] transition-colors flex items-center">
                                    <span className="text-[#5A5A5A] font-['Figtree'] text-[11px] lg:text-[12px] font-normal leading-[14px]">Home</span>
                                </Link>
                                <img src="/images/detailpage/arrow-right.svg" width="12px" height="12px"
                                    alt="Twitter" className="cursor-pointer" />
                                <span className="text-black font-['Figtree'] text-[11px] lg:text-[12px] font-normal leading-[14px] cursor-pointer">Kailash Mansarovar Yatra</span>
                            </div>
                        </div>

                        <div className="mt-2 flex flex-col lg:flex-row justify-between items-start gap-[16px]">
                            {/* -- Left section -- */}
                            <div className="flex flex-col">
                                <div className="flex flex-col gap-[16px] flex-1 min-w-0">
                                    <div className="flex flex-col gap-[0px] lg:gap-[12px]">
                                        <div className="text-black font-['Figtree'] text-[18px] lg:text-[26px] font-semibold leading-[24px]">Kailash Mansarovar Yatra </div>
                                        <div className="text-black font-['Figtree'] text-[14px] lg:text-[20px] font-normal leading-[24px]">Charan Sparsh Outer Kora from Lucknow By Helicopter</div>
                                    </div>
                                    <div className="flex flex-wrap flex-row gap-[14px] items-center">
                                        <div className="flex gap-[6px] items-center">
                                            <img src="/images/detailpage/calendar_month.svg" width="14px" height="14px"
                                                alt="Twitter" className="cursor-pointer" />
                                            <div className="text-[#5A5A5A] font-[Figtree] text-[11px] lg:text-[13px] font-medium leading-[14px] uppercase">11 Nights 12 Days</div>
                                        </div>
                                        <Separator orientation="vertical" className="!h-[14px] w-px bg-[#BBB] border border-[#BBB]" />
                                        <div className="flex gap-[6px] items-center" >
                                            <img src="/images/detailpage/task_alt.svg" width="14px" height="14px"
                                                alt="Twitter" className="cursor-pointer" />
                                            <div className="text-[#5A5A5A] font-[Figtree] text-[11px] lg:text-[13px] font-medium leading-[14px] uppercase">20+ Inclusions</div>
                                        </div>
                                        <Separator orientation="vertical" className="!h-[14px] w-px bg-[#BBB] border border-[#BBB]" />
                                        <div className="flex gap-[6px] items-center">
                                            <img src="/images/detailpage/location_on.svg" width="14px" height="14px"
                                                alt="Twitter" className="cursor-pointer" />
                                            <div className="text-[#5A5A5A] font-[Figtree] text-[11px] lg:text-[13px] font-medium leading-[14px] uppercase">Pick up: Lucknow</div>
                                        </div>
                                        <Separator orientation="vertical" className="!h-[14px] w-px bg-[#BBB] border border-[#BBB]" />
                                        <div className="flex gap-[6px] items-center">
                                            <img src="/images/detailpage/group.svg" width="14px" height="14px"
                                                alt="Twitter" className="cursor-pointer" />
                                            <div className="text-[#5A5A5A] font-[Figtree] text-[11px] lg:text-[13px] font-medium leading-[14px] uppercase">Group Size: 30</div>
                                        </div>
                                        <Separator orientation="vertical" className="!h-[14px] w-px bg-[#BBB] border border-[#BBB]" />
                                        <div className="flex gap-[6px] items-center">
                                            <img src="/images/detailpage/elevation.svg" width="14px" height="14px"
                                                alt="Twitter" className="cursor-pointer" />
                                            <div className="text-[#5A5A5A] font-[Figtree] text-[11px] lg:text-[13px] font-medium leading-[14px] uppercase">Altitude: 6,638 m</div>
                                        </div>
                                        <Separator orientation="vertical" className="!h-[14px] w-px bg-[#BBB] border border-[#BBB]" />
                                        <div className="flex gap-[6px] items-center">
                                            <img src="/images/detailpage/footprint.svg" width="22px" height="22px"
                                                alt="footprint" className="cursor-pointer" />
                                            <div className="text-[#5A5A5A] font-[Figtree] text-[11px] lg:text-[13px] font-medium leading-[14px] uppercase">DIFFICULTY: Beginner</div>
                                        </div>
                                        {/* <Separator orientation="vertical" className="!h-[14px] w-px bg-[#BBB] border border-[#BBB]" /> */}
                                    </div>
                                </div>
                            </div>

                            <Separator orientation="horizontal" className="lg:hidden w-full bg-[#BBB] border border-[#BBB]" />

                            {/* -- Right section -- */}
                            <div className="flex flex-col items-center">
                                {/* <div className="text-[20px]">Hello world</div> */}
                                <div className="flex flex-col gap-[12px]">
                                    <div className="flex flex-row gap-[20px]">
                                        <div className="flex flex-row gap-[44px] lg:gap-[36px]">
                                            <div className="flex flex-col gap-[8px]">
                                                <div className="flex flex-row gap-[5px]">
                                                    <div className="text-[#5A5A5A] font-[Figtree] text-[14px] lg:text-[16px] font-semibold leading-[24px] line-through">
                                                        2,85,000
                                                    </div>
                                                    <div className="text-[#5A5A5A] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[24px]">
                                                        + GST
                                                    </div>
                                                </div>
                                                <div className="text-[#333] font-[Figtree] text-[20px] lg:text-[24px] font-semibold leading-[24px]">
                                                    ₹2,75,000
                                                </div>
                                            </div>
                                            <Separator orientation="vertical" className="w-px bg-[#BBB] border border-[#BBB]" />
                                            <div className="flex flex-col gap-[8px]">
                                                <div className="flex flex-row gap-[5px]">
                                                    <div className="text-[#5A5A5A] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[24px]">
                                                        EMI starts from
                                                    </div>
                                                </div>
                                                <div className="text-[#333] font-[Figtree] text-[20px] lg:text-[24px] font-semibold leading-[24px]">
                                                    ₹9500
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hidden lg:flex flex-col gap-[6px]">
                                            <div className="rounded-[5px] bg-[#00A53F]" style={{ padding: "10px 4px;" }}>
                                                <div className="flex flex-row gap-[3px] items-center">
                                                    <div className="text-white font-[Figtree] text-[16px] lg:text-[20px] font-semibold leading-[24px]">4.9</div>
                                                    <div>
                                                        <img src="/images/detailpage/star_rate.svg" className="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-[#000] text-center font-[Figtree] text-[12px] font-semibold leading-[14px] underline">
                                                3 Reviews
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="rounded-[4px] bg-[#FFF7F2]" style={{ padding: "8px 14px;" }}>
                                            <span className="text-black font-['Figtree'] text-[12px] lg:text-[14px] font-normal leading-normal">Earn </span>
                                            <img src="/images/detailpage/24-Crowns.png" className="inline mr-1" />
                                            <span className="text-[#000] font-[Figtree] text-[12px] lg:text-[14px] font-bold leading-normal">50 Reward Points</span>
                                            <span className="text-black font-['Figtree'] text-[12px] lg:text-[14px] font-normal leading-normal"> on this Booking</span>
                                        </div>
                                    </div>
                                    <div className="lg:hidden flex flex-row gap-[8px] items-center">
                                        <div className="rounded-[5px] bg-[#00A53F]" style={{ padding: "10px 4px;" }}>
                                            <div className="flex flex-row gap-[3px] items-center">
                                                <div className="text-white font-[Figtree] text-[16px] lg:text-[20px] font-semibold leading-[24px]">4.9</div>
                                                <div>
                                                    <img src="/images/detailpage/star_rate.svg" className="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-[#000] text-center font-[Figtree] text-[12px] font-semibold leading-[14px] underline">
                                            3 Reviews
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-[1920px] px-4 sm:px-6 lg:px-8 py-2">

                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_400px] gap-6">
                    {/**Left Section */}
                    <div>
                        <div className="flex flex-col gap-[60px]">
                            {/* Overview */}
                            <div className="rounded-[8px] border border-[#D2D8E4] bg-white" style={{ padding: "20px 15px" }}>
                                <div className="flex flex-col gap-[14px] items-start">
                                    <div className="text-[#1A2F46] font-['Playfair_Display'] text-[20px] lg:text-[32px] font-semibold leading-normal">
                                        Overview
                                    </div>

                                    <p className="text-[#333] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">
                                        Organized by TravelPocket, this 9 Nights 10 Days Kailash Mansarovar Yatra by Helicopter from Lucknow offers a perfect blend of comfort and spirituality. It allows pilgrims to experience the divine power of Kailash Parvat and the serene beauty of Mansarovar Lake without the strenuous trek, making it accessible even for senior citizens and families.

                                        Known as the ultimate Tirth Yatra, the Kailash Mansarovar journey is not just a tour—it's a life-transforming spiritual experience. Pilgrims from around the world undertake this yatra seeking peace, enlightenment, and inner awakening.

                                        Whether you are a spiritual seeker, an adventurer, or a devotee of Lord Shiva, the Kailash Mansarovar Yatra by Helicopter is your calling. Let TravelPocket, a trusted name in spiritual travel, guide you through this once-in-a-lifetime journey with expert support, reliable services, and soulful hospitality.
                                    </p>
                                </div>
                            </div>

                            {/* Highlights */}
                            <div className="rounded-[8px] border border-[#D2D8E4] bg-white" style={{ padding: "20px 15px" }}>
                                <div className="flex flex-col gap-[14px] items-start">
                                    <div className="text-[#1A2F46] font-['Playfair_Display'] text-[20px] lg:text-[32px] font-semibold leading-normal">
                                        Highlights
                                    </div>

                                    <div className="flex flex-col gap-[8px]">
                                        <div className="flex flex-row gap-[8px] items-center">
                                            <img src="/images/detailpage/iconspace.svg" />
                                            <div className="text-[#333] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Service : Lucknow To Lucknow</div>
                                        </div>
                                        <div className="flex flex-row gap-[8px] items-center">
                                            <img src="/images/detailpage/iconspace.svg" />
                                            <div className="text-[#333] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Transportation : Lucknow to Nepalgunj and return by Innova</div>
                                        </div>
                                        <div className="flex flex-row gap-[8px] items-center">
                                            <img src="/images/detailpage/iconspace.svg" />
                                            <div className="text-[#333] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Nepalgunj - Simikot - Fix Aircraft</div>
                                        </div>
                                        <div className="flex flex-row gap-[8px] items-center">
                                            <img src="/images/detailpage/iconspace.svg" />
                                            <div className="text-[#333] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Simikot - Hilsa - Helicopter</div>
                                        </div>
                                        <div className="flex flex-row gap-[8px] items-center">
                                            <img src="/images/detailpage/iconspace.svg" />
                                            <div className="text-[#333] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Oxygen cylinder for emergency use</div>
                                        </div>
                                        <div className="flex flex-row gap-[8px] items-center">
                                            <img src="/images/detailpage/iconspace.svg" />
                                            <div className="text-[#333] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Cost-effective & comfortable trip</div>
                                        </div>
                                        <div className="flex flex-row gap-[8px] items-center">
                                            <img src="/images/detailpage/iconspace.svg" />
                                            <div className="text-[#333] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">5 Nights in Hotel & 5 Nights in guest house accommodation</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Itinenary */}
                            <div className="rounded-[8px] border border-[#D2D8E4] bg-white" style={{ padding: "20px 15px" }}>
                                <div className="flex flex-col gap-[14px] items-start">
                                    <div className="flex flex-col lg:flex-row gap-[14px] justify-between items-center w-full">
                                        <div className="text-[#1A2F46] font-['Playfair_Display'] text-[20px] lg:text-[32px] font-semibold leading-normal">
                                            Itinerary
                                        </div>

                                        <div className="rounded-[8px] bg-[#F4F4F4]" style={{ padding: "10px" }}>
                                            <div className="flex flex-row gap-[20px]">
                                                <div className="flex flex-col lg:flex-row items-center gap-[10px] lg:gap-[8px]">
                                                    <img src="/images/detailpage/whatsapp.svg" />
                                                    <div className="text-black text-center font-[Figtree] text-[11px] lg:text-[12px] font-normal leading-normal uppercase">
                                                        Send Itinerary
                                                    </div>
                                                </div>
                                                <div className="flex flex-col lg:flex-row items-center gap-[10px] lg:gap-[8px]">
                                                    <img src="/images/detailpage/download.svg" />
                                                    <div className="text-black text-center font-[Figtree] text-[11px] lg:text-[12px] font-normal leading-normal uppercase">
                                                        Download Itinerary
                                                    </div>
                                                </div>
                                                <div className="flex flex-col lg:flex-row items-center gap-[10px] lg:gap-[8px]">
                                                    <img src="/images/detailpage/mail.svg" />
                                                    <div className="text-black text-center font-[Figtree] text-[11px] lg:text-[12px] font-normal leading-normal uppercase">
                                                        Email Itinerary
                                                    </div>
                                                </div>
                                                <div className="flex flex-col lg:flex-row items-center gap-[10px] lg:gap-[8px]">
                                                    <img src="/images/detailpage/headset_mic.svg" />
                                                    <div className="text-black text-center font-[Figtree] text-[11px] lg:text-[12px] font-normal leading-normal uppercase">
                                                        Talk to Experts
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger>
                                                <div className="grid grid-cols-2 sm:grid-cols-[auto_1fr] gap-x-3 gap-y-2">
                                                    <div className="row-span-1">
                                                        <div className="relative flex items-center">
                                                            <img src="/images/detailpage/Union.svg" className="w-[120px] h-[50px] object-contain" />
                                                            <div className="absolute text-[#E97737] font-[Figtree] text-[22px] font-bold leading-normal uppercase top-[8px] left-[25px]">
                                                                Day 1
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/** Right Column: Heading */}
                                                    <div className="flex flex-row justify-between items-center w-full">
                                                        <div className="text-[#1A2F46] font-['Playfair_Display'] text-[16px] lg:text-[24px] font-semibold leading-normal">
                                                            Arival In Lucknow
                                                        </div>
                                                    </div>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <div className="grid grid-cols-2 sm:grid-cols-[auto_1fr] gap-x-3 gap-y-2">
                                                    <div className="row-span-1">
                                                        <div className="relative flex items-center" style={{visibility: "hidden"}}>
                                                            <img src="/images/detailpage/Union.svg" className="w-[120px] h-[50px] object-contain" />
                                                            <div className="absolute text-[#E97737] font-[Figtree] text-[22px] font-bold leading-normal uppercase top-[8px] left-[25px]">
                                                                Day 1
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/** Right Column: Heading */}
                                                    <div className="flex flex-row justify-between items-center w-full">
                                                        <div className="text-[#000] font-[Figtree] text-[14px] leading-relaxed space-y-3 mb-5">
                                                <p>Welcome to Lucknow, the starting point of your sacred Kailash Mansarovar Yatra.</p>
                                                <p>
                                                    Our team will greet you at the Hotel Holiday Inn Lucknow / Lemon Tree Lucknow and assist you with hotel check-in.
                                                    Take this day to relax, acclimatize, and prepare mentally and spiritually for the journey ahead.
                                                </p>
                                                <p>
                                                    In the evening, join a briefing session with fellow yatris where we’ll share important travel guidelines,
                                                    documents check, and a glimpse of the divine adventure that awaits.
                                                </p>
                                            </div>
                                                    </div>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>

                                    <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger>
                                                <div className="grid grid-cols-2 sm:grid-cols-[auto_1fr] gap-x-3 gap-y-2">
                                                    <div className="row-span-1">
                                                        <div className="relative flex items-center">
                                                            <img src="/images/detailpage/Union.svg" className="w-[120px] h-[50px] object-contain" />
                                                            <div className="absolute text-[#E97737] font-[Figtree] text-[22px] font-bold leading-normal uppercase top-[8px] left-[25px]">
                                                                Day 1
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/** Right Column: Heading */}
                                                    <div className="flex flex-row justify-between items-center w-full">
                                                        <div className="text-[#1A2F46] font-['Playfair_Display'] text-[16px] lg:text-[24px] font-semibold leading-normal">
                                                            Arival In Lucknow
                                                        </div>
                                                    </div>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <div className="grid grid-cols-2 sm:grid-cols-[auto_1fr] gap-x-3 gap-y-2">
                                                    <div className="row-span-1">
                                                        <div className="relative flex items-center" style={{visibility: "hidden"}}>
                                                            <img src="/images/detailpage/Union.svg" className="w-[120px] h-[50px] object-contain" />
                                                            <div className="absolute text-[#E97737] font-[Figtree] text-[22px] font-bold leading-normal uppercase top-[8px] left-[25px]">
                                                                Day 1
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/** Right Column: Heading */}
                                                    <div className="flex flex-row justify-between items-center w-full">
                                                        <div className="text-[#000] font-[Figtree] text-[14px] leading-relaxed space-y-3 mb-5">
                                                <p>Welcome to Lucknow, the starting point of your sacred Kailash Mansarovar Yatra.</p>
                                                <p>
                                                    Our team will greet you at the Hotel Holiday Inn Lucknow / Lemon Tree Lucknow and assist you with hotel check-in.
                                                    Take this day to relax, acclimatize, and prepare mentally and spiritually for the journey ahead.
                                                </p>
                                                <p>
                                                    In the evening, join a briefing session with fellow yatris where we’ll share important travel guidelines,
                                                    documents check, and a glimpse of the divine adventure that awaits.
                                                </p>
                                            </div>
                                                    </div>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>


                                    <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger>
                                                <div className="grid grid-cols-2 sm:grid-cols-[auto_1fr] gap-x-3 gap-y-2">
                                                    <div className="row-span-1">
                                                        <div className="relative flex items-center">
                                                            <img src="/images/detailpage/Union.svg" className="w-[120px] h-[50px] object-contain" />
                                                            <div className="absolute text-[#E97737] font-[Figtree] text-[22px] font-bold leading-normal uppercase top-[8px] left-[25px]">
                                                                Day 1
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/** Right Column: Heading */}
                                                    <div className="flex flex-row justify-between items-center w-full">
                                                        <div className="text-[#1A2F46] font-['Playfair_Display'] text-[16px] lg:text-[24px] font-semibold leading-normal">
                                                            Arival In Lucknow
                                                        </div>
                                                    </div>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <div className="grid grid-cols-2 sm:grid-cols-[auto_1fr] gap-x-3 gap-y-2">
                                                    <div className="row-span-1">
                                                        <div className="relative flex items-center" style={{visibility: "hidden"}}>
                                                            <img src="/images/detailpage/Union.svg" className="w-[120px] h-[50px] object-contain" />
                                                            <div className="absolute text-[#E97737] font-[Figtree] text-[22px] font-bold leading-normal uppercase top-[8px] left-[25px]">
                                                                Day 1
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/** Right Column: Heading */}
                                                    <div className="flex flex-row justify-between items-center w-full">
                                                        <div className="text-[#000] font-[Figtree] text-[14px] leading-relaxed space-y-3 mb-5">
                                                <p>Welcome to Lucknow, the starting point of your sacred Kailash Mansarovar Yatra.</p>
                                                <p>
                                                    Our team will greet you at the Hotel Holiday Inn Lucknow / Lemon Tree Lucknow and assist you with hotel check-in.
                                                    Take this day to relax, acclimatize, and prepare mentally and spiritually for the journey ahead.
                                                </p>
                                                <p>
                                                    In the evening, join a briefing session with fellow yatris where we’ll share important travel guidelines,
                                                    documents check, and a glimpse of the divine adventure that awaits.
                                                </p>
                                            </div>
                                                    </div>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>


                                    <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger>
                                                <div className="grid grid-cols-2 sm:grid-cols-[auto_1fr] gap-x-3 gap-y-2">
                                                    <div className="row-span-1">
                                                        <div className="relative flex items-center">
                                                            <img src="/images/detailpage/Union.svg" className="w-[120px] h-[50px] object-contain" />
                                                            <div className="absolute text-[#E97737] font-[Figtree] text-[22px] font-bold leading-normal uppercase top-[8px] left-[25px]">
                                                                Day 1
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/** Right Column: Heading */}
                                                    <div className="flex flex-row justify-between items-center w-full">
                                                        <div className="text-[#1A2F46] font-['Playfair_Display'] text-[16px] lg:text-[24px] font-semibold leading-normal">
                                                            Arival In Lucknow
                                                        </div>
                                                    </div>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <div className="grid grid-cols-2 sm:grid-cols-[auto_1fr] gap-x-3 gap-y-2">
                                                    <div className="row-span-1">
                                                        <div className="relative flex items-center" style={{visibility: "hidden"}}>
                                                            <img src="/images/detailpage/Union.svg" className="w-[120px] h-[50px] object-contain" />
                                                            <div className="absolute text-[#E97737] font-[Figtree] text-[22px] font-bold leading-normal uppercase top-[8px] left-[25px]">
                                                                Day 1
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/** Right Column: Heading */}
                                                    <div className="flex flex-row justify-between items-center w-full">
                                                        <div className="text-[#000] font-[Figtree] text-[14px] leading-relaxed space-y-3 mb-5">
                                                <p>Welcome to Lucknow, the starting point of your sacred Kailash Mansarovar Yatra.</p>
                                                <p>
                                                    Our team will greet you at the Hotel Holiday Inn Lucknow / Lemon Tree Lucknow and assist you with hotel check-in.
                                                    Take this day to relax, acclimatize, and prepare mentally and spiritually for the journey ahead.
                                                </p>
                                                <p>
                                                    In the evening, join a briefing session with fellow yatris where we’ll share important travel guidelines,
                                                    documents check, and a glimpse of the divine adventure that awaits.
                                                </p>
                                            </div>
                                                    </div>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>

                                    <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger>
                                                <div className="grid grid-cols-2 sm:grid-cols-[auto_1fr] gap-x-3 gap-y-2">
                                                    <div className="row-span-1">
                                                        <div className="relative flex items-center">
                                                            <img src="/images/detailpage/Union.svg" className="w-[120px] h-[50px] object-contain" />
                                                            <div className="absolute text-[#E97737] font-[Figtree] text-[22px] font-bold leading-normal uppercase top-[8px] left-[25px]">
                                                                Day 1
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/** Right Column: Heading */}
                                                    <div className="flex flex-row justify-between items-center w-full">
                                                        <div className="text-[#1A2F46] font-['Playfair_Display'] text-[16px] lg:text-[24px] font-semibold leading-normal">
                                                            Arival In Lucknow
                                                        </div>
                                                    </div>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <div className="grid grid-cols-2 sm:grid-cols-[auto_1fr] gap-x-3 gap-y-2">
                                                    <div className="row-span-1">
                                                        <div className="relative flex items-center" style={{visibility: "hidden"}}>
                                                            <img src="/images/detailpage/Union.svg" className="w-[120px] h-[50px] object-contain" />
                                                            <div className="absolute text-[#E97737] font-[Figtree] text-[22px] font-bold leading-normal uppercase top-[8px] left-[25px]">
                                                                Day 1
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/** Right Column: Heading */}
                                                    <div className="flex flex-row justify-between items-center w-full">
                                                        <div className="text-[#000] font-[Figtree] text-[14px] leading-relaxed space-y-3 mb-5">
                                                <p>Welcome to Lucknow, the starting point of your sacred Kailash Mansarovar Yatra.</p>
                                                <p>
                                                    Our team will greet you at the Hotel Holiday Inn Lucknow / Lemon Tree Lucknow and assist you with hotel check-in.
                                                    Take this day to relax, acclimatize, and prepare mentally and spiritually for the journey ahead.
                                                </p>
                                                <p>
                                                    In the evening, join a briefing session with fellow yatris where we’ll share important travel guidelines,
                                                    documents check, and a glimpse of the divine adventure that awaits.
                                                </p>
                                            </div>
                                                    </div>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>


                                </div>
                            </div>

                            {/* Essentials */}
                            <div className="rounded-[8px] border border-[#D2D8E4] bg-white" style={{ padding: "20px 15px" }}>
                                <div className="flex flex-col gap-[14px] items-start">
                                    <div className="text-[#1A2F46] font-['Playfair_Display'] text-[20px] lg:text-[32px] font-semibold leading-normal">
                                        Essentials
                                    </div>

                                    <div className="flex justify-between lg:w-full">
                                        <div className="flex flex-col gap-[8px] items-start">
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[16px] font-normal leading-[22px]">Thermal innerwear (tops and bottoms).</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[16px] font-normal leading-[22px]">Warm jackets and windcheaters (waterproof recommended)</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[16px] font-normal leading-[22px]">Comfortable trekking pants and T-shirts (quick-dry preferred).</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[16px] font-normal leading-[22px]">Woolen sweaters and fleece jackets</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[16px] font-normal leading-[22px]">Gloves (woolen and waterproof).</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[16px] font-normal leading-[22px]">Woolen cap, scarf, and balaclava.</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[16px] font-normal leading-[22px]">Multiple pairs of woolen and cotton socks.</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[16px] font-normal leading-[22px]">Lightweight raincoat or poncho.</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[16px] font-normal leading-[22px]">Comfortable walking shoes (waterproof with good grip).</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[16px] font-normal leading-[22px]">Sunglasses (UV-protected) and sunscreen (SPF 50+).</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[16px] font-normal leading-[22px]">Woolen mufflers and gaiters for extra warmth.</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[16px] font-normal leading-[22px]">Backpack (30-40 liters) with a rain cover.</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[16px] font-normal leading-[22px]">Daypack for essentials during treks.</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[16px] font-normal leading-[22px]">Daypack for essentials during treks.</div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-[8px] items-start">
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Trekking pole(s) for added support.</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Personal toiletries (toothbrush, toothpaste, soap, shampoo, etc.).</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Quick-dry towel and tissues.</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Moisturizer, lip balm (SPF protection), and antiseptic cream.</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Basic medicines (for altitude sickness, headaches, fever, etc.).</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Reusable water bottle or hydration pack.</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Energy bars, dry fruits, and light snacks.</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Reusable water bottle or hydration pack.</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Energy bars, dry fruits, and light snacks.</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">First-aid kit (basic items like band-aids, antiseptic wipes, etc.)</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Passport (valid for at least 6 months).</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Multiple passport-sized photographs.</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Photocopies of ID proof and travel documents.</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Travel insurance documents.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Inclusions | Exclusions */}
                            <div className="rounded-[8px] border border-[#D2D8E4] bg-white" style={{ padding: "20px 15px" }}>
                                <div className="flex flex-row gap-[30px]">
                                    <div className="text-[#1A2F46] font-['Playfair_Display'] text-[20px] lg:text-[32px] font-semibold leading-normal">Inclusions</div>
                                    <div className="text-[#ADADAD] font-['Playfair_Display'] text-[20px] lg:text-[32px] font-semibold leading-normal">Exclusions</div>
                                </div>
                                <Separator orientation="horizontal" className="w-full bg-[#BBB] border border-[#BBB] mt-[20px] mb-[20px]" />

                                <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                                    <div className="flex flex-col items-start gap-[9px]">
                                        <img src="/images/detailpage/Frame_1.svg" />
                                        <p className="text-black font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[24px]">
                                            Tibet & Kailash Permits: All necessary entry permissions and group visas
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-start gap-[9px]">
                                        <img src="/images/detailpage/Frame_1.svg" />
                                        <p className="text-black font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[24px]">
                                            Chinese Visa Fee: Included in the package.
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-start gap-[9px]">
                                        <img src="/images/detailpage/Frame_1.svg" />
                                        <p className="text-black font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[24px]">
                                            Transportation: Lucknow–Nepalgunj by coach, Nepalgunj–Simikot by aircraft, Simikot–Hilsa by helicopter, and Tibet by luxury coach.
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-start gap-[9px]">
                                        <img src="/images/detailpage/Frame_3.svg" />
                                        <p className="text-black font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[24px]">
                                            Accommodation: Hotel stay in Nepalgunj and guesthouses in Tibet.
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-start gap-[9px]">
                                        <img src="/images/detailpage/Frame_1.svg" />
                                        <p className="text-black font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[24px]">
                                            Permits: Upper Humla permit fee included.
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-start gap-[9px]">
                                        <img src="/images/detailpage/cutlery.svg" />
                                        <p className="text-black font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[24px]">
                                            Support Services: Support truck for kitchen equipment and food supplies
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-start gap-[9px]">
                                        <img src="/images/detailpage/svg4089.svg" />
                                        <p className="text-black font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[24px]">
                                            Meals: All vegetarian meals throughout the journey.
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-start gap-[9px]">
                                        <img src="/images/detailpage/bus.svg" />
                                        <p className="text-black font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[24px]">
                                            Overland transfer in Tibet by luxury coach.
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-start gap-[9px]">
                                        <img src="/images/detailpage/winter-jacket.svg" />
                                        <p className="text-black font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[24px]">
                                            Gear: Complimentary duffle bag, day pack, and down jacket
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-start gap-[9px]">
                                        <img src="/images/detailpage/tent.svg" />
                                        <p className="text-black font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[24px]">
                                            Camping Equipment: Tents, utensils, and other essentials for camping.
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-start gap-[9px]">
                                        <img src="/images/detailpage/tour-guide.svg" />
                                        <p className="text-black font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[24px]">
                                            Guides: Expert Tibetan guide from FEC.
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-start gap-[9px]">
                                        <img src="/images/detailpage/capa.svg" />
                                        <p className="text-black font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[24px]">
                                            Health & Safety: Oxygen cylinders provided for the group.
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-start gap-[9px]">
                                        <img src="/images/detailpage/rupee.svg" />
                                        <p className="text-black font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[24px]">
                                            Entrance fees in Tibet
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Information Links and Downloads */}
                            <div className="rounded-[8px] border border-[#D2D8E4] bg-white" style={{ padding: "20px 15px" }}>
                                <div className="flex flex-col items-start gap-[14px]">
                                    <div className="text-[#1A2F46] font-['Playfair_Display'] text-[20px] lg:text-[32px] font-semibold leading-normal">
                                        Information Links and Downloads
                                    </div>

                                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 w-full">
                                        <div className="rounded-[8px] border border-[#D2D8E4] cursor-pointer" style={{ padding: "14px 16px" }}>
                                            <div className="flex flex-col items-start gap-[20px] lg:gap-[4px]">
                                                <img src="/images/detailpage/info.svg" />
                                                <div className="flex flex-row items-center gap-[1px]">
                                                    <div className="text-[#000] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Weather Info</div>
                                                    <img src="/images/detailpage/arrow_outward.svg" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="rounded-[8px] border border-[#D2D8E4] cursor-pointer" style={{ padding: "14px 16px" }}>
                                            <div className="flex flex-col items-start gap-[20px] lg:gap-[4px]">
                                                <img src="/images/detailpage/info.svg" />
                                                <div className="flex flex-row items-center gap-[1px]">
                                                    <div className="text-[#000] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Documents</div>
                                                    <img src="/images/detailpage/arrow_outward.svg" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="rounded-[8px] border border-[#D2D8E4] cursor-pointer" style={{ padding: "14px 16px" }}>
                                            <div className="flex flex-col items-start gap-[20px] lg:gap-[4px]">
                                                <img src="/images/detailpage/info.svg" />
                                                <div className="flex flex-row items-center gap-[1px]">
                                                    <div className="text-[#000] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Forms</div>
                                                    <img src="/images/detailpage/arrow_outward.svg" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="rounded-[8px] border border-[#D2D8E4] cursor-pointer" style={{ padding: "14px 16px" }}>
                                            <div className="flex flex-col items-start gap-[20px] lg:gap-[4px]">
                                                <img src="/images/detailpage/info.svg" />
                                                <div className="flex flex-row items-center gap-[1px]">
                                                    <div className="text-[#000] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Registration Process</div>
                                                    <img src="/images/detailpage/arrow_outward.svg" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="rounded-[8px] border border-[#D2D8E4] cursor-pointer" style={{ padding: "14px 16px" }}>
                                            <div className="flex flex-col items-start gap-[20px] lg:gap-[4px]">
                                                <img src="/images/detailpage/info.svg" />
                                                <div className="flex flex-row items-center gap-[1px]">
                                                    <div className="text-[#000] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Cancellation Policy</div>
                                                    <img src="/images/detailpage/arrow_outward.svg" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="rounded-[8px] border border-[#D2D8E4] cursor-pointer" style={{ padding: "14px 16px" }}>
                                            <div className="flex flex-col items-start gap-[20px] lg:gap-[4px]">
                                                <img src="/images/detailpage/info.svg" />
                                                <div className="flex flex-row items-center gap-[1px]">
                                                    <div className="text-[#000] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Payment Terms</div>
                                                    <img src="/images/detailpage/arrow_outward.svg" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="rounded-[8px] border border-[#D2D8E4] cursor-pointer" style={{ padding: "14px 16px" }}>
                                            <div className="flex flex-col items-start gap-[20px] lg:gap-[4px]">
                                                <img src="/images/detailpage/info.svg" />
                                                <div className="flex flex-row items-center gap-[1px]">
                                                    <div className="text-[#000] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Tour Manager Info</div>
                                                    <img src="/images/detailpage/arrow_outward.svg" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="rounded-[8px] border border-[#D2D8E4] cursor-pointer" style={{ padding: "14px 16px" }}>
                                            <div className="flex flex-col items-start gap-[20px] lg:gap-[4px]">
                                                <img src="/images/detailpage/info.svg" />
                                                <div className="flex flex-row items-center gap-[1px]">
                                                    <div className="text-[#000] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">FAQs</div>
                                                    <img src="/images/detailpage/arrow_outward.svg" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Photo Gallery */}
                            <div className="rounded-[8px] border border-[#D2D8E4] bg-white" style={{ padding: "25px 15px" }}>
                                <div className="flex flex-col items-start gap-[14px]">
                                    <div className="text-[#1A2F46] font-['Playfair_Display'] text-[20px] lg:text-[32px] font-semibold leading-normal">
                                        Photo Gallery
                                    </div>

                                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 w-full">
                                        <div className="flex">
                                            <img src="/images/detailpage/photogallery/photo_1.jpg" className="cursor-pointer rounded-lg" />
                                        </div>
                                        <div className="flex">
                                            <img src="/images/detailpage/photogallery/photo_2.png" className="cursor-pointer rounded-lg" />
                                        </div>
                                        <div className="flex">
                                            <img src="/images/detailpage/photogallery/photo_3.jpg" className="cursor-pointer rounded-lg" />
                                        </div>
                                        <div className="flex">
                                            <img src="/images/detailpage/photogallery/photo_4.png" className="cursor-pointer rounded-lg" />
                                        </div>
                                        <div className="flex">
                                            <img src="/images/detailpage/photogallery/photo_5.png" className="cursor-pointer rounded-lg" />
                                        </div>
                                        <div className="flex">
                                            <img src="/images/detailpage/photogallery/photo_6.png" className="cursor-pointer rounded-lg" />
                                        </div>
                                        <div className="flex">
                                            <img src="/images/detailpage/photogallery/photo_8.jpg" className="cursor-pointer rounded-lg" />
                                        </div>
                                        <div className="flex relative">
                                            <img src="/images/detailpage/photogallery/photo_7.png" className="cursor-pointer rounded-2xl" />
                                            <div className="absolute inset-0 bg-black/70 flex items-center justify-center text-white text-center font-[Inter] text-[14px] font-semibold leading-normal cursor-pointer rounded-lg">
                                                View all Photos
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* IReviews*/}
                            <div className="rounded-[8px] border border-[#D2D8E4] bg-white" style={{ padding: "20px 15px" }}>

                                {/**contents */}
                                <div className="flex flex-col items-start gap-[14px]">

                                    <div className="flex justify-between items-center w-full">
                                        <div className="text-[#1A2F46] font-['Playfair_Display'] text-[20px] lg:text-[32px] font-semibold leading-normal">
                                            Reviews
                                        </div>

                                        <div className="hidden md:block rounded-[6px] border border-[#E97737]" style={{ padding: "10px 15px" }}>
                                            <div className="flex items-center gap-[8px] cursor-pointer">
                                                <div className="text-[#E97737] font-figtree text-[14px] font-semibold leading-normal uppercase">
                                                    View all
                                                </div>
                                                <img src="/images/detailpage/arrow-icon.svg" width="18px" height="19px" />
                                            </div>
                                        </div>
                                    </div>

                                    {/**Review Cards with scroller for tablet and larger device */}
                                    <div className="hidden md:block relative w-full">
                                        {/* Slider container */}
                                        <div
                                            ref={sliderRef}
                                            className="flex overflow-x-auto scroll-smooth no-scrollbar gap-6 px-2 py-6"
                                        >
                                            <div className="rounded-[8px] border border-[#D2D8E4] bg-white w-[320px] flex-shrink-0" style={{ padding: "20px 15px" }}>
                                                <div className="flex items-start gap-4">
                                                    <img src="/images/detailpage/review_photo.jpg" alt="Profile" className="w-16 h-16 rounded-full object-cover" />
                                                    <div className="flex-1">
                                                        <div className="flex flex-col gap-[12px]">
                                                            <div className="flex flex-col gap-[10px]">
                                                                <div className="text-black font-['Inter'] text-[14px] font-semibold leading-none">My dream trip to see Kailash Manasarovar happened</div>
                                                                <div className="overflow-hidden text-black text-ellipsis font-['Inter'] text-[12px] font-normal leading-none">Kailash Manasarovar doordarshan yatra arranged by Travel pocket was very systematic, professional and sincere. The itinerary was followed...</div>
                                                            </div>
                                                            <div className="flex gap-[8px] items-center cursor-pointer">
                                                                <div className="text-[#E97737] font-['Figtree'] text-[14px] font-medium leading-none uppercase">READ MORE</div>
                                                                <img src="/images/detailpage/arrow-icon.svg" width="18px" height="19px" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="rounded-[8px] border border-[#D2D8E4] bg-white w-[320px] flex-shrink-0" style={{ padding: "20px 15px" }}>
                                                <div className="flex items-start gap-4">
                                                    <img src="/images/detailpage/review_photo.jpg" alt="Profile" className="w-16 h-16 rounded-full object-cover" />
                                                    <div className="flex-1">
                                                        <div className="flex flex-col gap-[12px]">
                                                            <div className="flex flex-col gap-[10px]">
                                                                <div className="text-black font-['Inter'] text-[14px] font-semibold leading-none">My dream trip to see Kailash Manasarovar happened</div>
                                                                <div className="overflow-hidden text-black text-ellipsis font-['Inter'] text-[12px] font-normal leading-none">Kailash Manasarovar doordarshan yatra arranged by Travel pocket was very systematic, professional and sincere. The itinerary was followed...</div>
                                                            </div>
                                                            <div className="flex gap-[8px] items-center cursor-pointer">
                                                                <div className="text-[#E97737] font-['Figtree'] text-[14px] font-medium leading-none uppercase">READ MORE</div>
                                                                <img src="/images/detailpage/arrow-icon.svg" width="18px" height="19px" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="rounded-[8px] border border-[#D2D8E4] bg-white w-[320px] flex-shrink-0" style={{ padding: "20px 15px" }}>
                                                <div className="flex items-start gap-4">
                                                    <img src="/images/detailpage/review_photo.jpg" alt="Profile" className="w-16 h-16 rounded-full object-cover" />
                                                    <div className="flex-1">
                                                        <div className="flex flex-col gap-[12px]">
                                                            <div className="flex flex-col gap-[10px]">
                                                                <div className="text-black font-['Inter'] text-[14px] font-semibold leading-none">My dream trip to see Kailash Manasarovar happened</div>
                                                                <div className="overflow-hidden text-black text-ellipsis font-['Inter'] text-[12px] font-normal leading-none">Kailash Manasarovar doordarshan yatra arranged by Travel pocket was very systematic, professional and sincere. The itinerary was followed...</div>
                                                            </div>
                                                            <div className="flex gap-[8px] items-center cursor-pointer">
                                                                <div className="text-[#E97737] font-['Figtree'] text-[14px] font-medium leading-none uppercase">READ MORE</div>
                                                                <img src="/images/detailpage/arrow-icon.svg" width="18px" height="19px" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="rounded-[8px] border border-[#D2D8E4] bg-white w-[320px] flex-shrink-0" style={{ padding: "20px 15px" }}>
                                                <div className="flex items-start gap-4">
                                                    <img src="/images/detailpage/review_photo.jpg" alt="Profile" className="w-16 h-16 rounded-full object-cover" />
                                                    <div className="flex-1">
                                                        <div className="flex flex-col gap-[12px]">
                                                            <div className="flex flex-col gap-[10px]">
                                                                <div className="text-black font-['Inter'] text-[14px] font-semibold leading-none">My dream trip to see Kailash Manasarovar happened</div>
                                                                <div className="overflow-hidden text-black text-ellipsis font-['Inter'] text-[12px] font-normal leading-none">Kailash Manasarovar doordarshan yatra arranged by Travel pocket was very systematic, professional and sincere. The itinerary was followed...</div>
                                                            </div>
                                                            <div className="flex gap-[8px] items-center cursor-pointer">
                                                                <div className="text-[#E97737] font-['Figtree'] text-[14px] font-medium leading-none uppercase">READ MORE</div>
                                                                <img src="/images/detailpage/arrow-icon.svg" width="18px" height="19px" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="rounded-[8px] border border-[#D2D8E4] bg-white w-[320px] flex-shrink-0" style={{ padding: "20px 15px" }}>
                                                <div className="flex items-start gap-4">
                                                    <img src="/images/detailpage/review_photo.jpg" alt="Profile" className="w-16 h-16 rounded-full object-cover" />
                                                    <div className="flex-1">
                                                        <div className="flex flex-col gap-[12px]">
                                                            <div className="flex flex-col gap-[10px]">
                                                                <div className="text-black font-['Inter'] text-[14px] font-semibold leading-none">My dream trip to see Kailash Manasarovar happened</div>
                                                                <div className="overflow-hidden text-black text-ellipsis font-['Inter'] text-[12px] font-normal leading-none">Kailash Manasarovar doordarshan yatra arranged by Travel pocket was very systematic, professional and sincere. The itinerary was followed...</div>
                                                            </div>
                                                            <div className="flex gap-[8px] items-center cursor-pointer">
                                                                <div className="text-[#E97737] font-['Figtree'] text-[14px] font-medium leading-none uppercase">READ MORE</div>
                                                                <img src="/images/detailpage/arrow-icon.svg" width="18px" height="19px" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="rounded-[8px] border border-[#D2D8E4] bg-white w-[320px] flex-shrink-0" style={{ padding: "20px 15px" }}>
                                                <div className="flex items-start gap-4">
                                                    <img src="/images/detailpage/review_photo.jpg" alt="Profile" className="w-16 h-16 rounded-full object-cover" />
                                                    <div className="flex-1">
                                                        <div className="flex flex-col gap-[12px]">
                                                            <div className="flex flex-col gap-[10px]">
                                                                <div className="text-black font-['Inter'] text-[14px] font-semibold leading-none">My dream trip to see Kailash Manasarovar happened</div>
                                                                <div className="overflow-hidden text-black text-ellipsis font-['Inter'] text-[12px] font-normal leading-none">Kailash Manasarovar doordarshan yatra arranged by Travel pocket was very systematic, professional and sincere. The itinerary was followed...</div>
                                                            </div>
                                                            <div className="flex gap-[8px] items-center cursor-pointer">
                                                                <div className="text-[#E97737] font-['Figtree'] text-[14px] font-medium leading-none uppercase">READ MORE</div>
                                                                <img src="/images/detailpage/arrow-icon.svg" width="18px" height="19px" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="rounded-[8px] border border-[#D2D8E4] bg-white w-[320px] flex-shrink-0" style={{ padding: "20px 15px" }}>
                                                <div className="flex items-start gap-4">
                                                    <img src="/images/detailpage/review_photo.jpg" alt="Profile" className="w-16 h-16 rounded-full object-cover" />
                                                    <div className="flex-1">
                                                        <div className="flex flex-col gap-[12px]">
                                                            <div className="flex flex-col gap-[10px]">
                                                                <div className="text-black font-['Inter'] text-[14px] font-semibold leading-none">My dream trip to see Kailash Manasarovar happened</div>
                                                                <div className="overflow-hidden text-black text-ellipsis font-['Inter'] text-[12px] font-normal leading-none">Kailash Manasarovar doordarshan yatra arranged by Travel pocket was very systematic, professional and sincere. The itinerary was followed...</div>
                                                            </div>
                                                            <div className="flex gap-[8px] items-center cursor-pointer">
                                                                <div className="text-[#E97737] font-['Figtree'] text-[14px] font-medium leading-none uppercase">READ MORE</div>
                                                                <img src="/images/detailpage/arrow-icon.svg" width="18px" height="19px" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                    {/**ends here */}

                                    {/**Review Cards mobile device */}
                                    <div className="md:hidden flex flex-col items-start gap-[16px]">
                                        <div className="rounded-[8px] border border-[#D2D8E4] bg-white flex-shrink-0" style={{ padding: "20px 15px" }}>
                                            <div className="flex items-start gap-4">
                                                <img src="/images/detailpage/review_photo.jpg" alt="Profile" className="w-16 h-16 rounded-full object-cover" />
                                                <div className="flex-1">
                                                    <div className="flex flex-col gap-[12px]">
                                                        <div className="flex flex-col gap-[10px]">
                                                            <div className="text-black font-['Inter'] text-[14px] font-semibold leading-none">My dream trip to see Kailash Manasarovar happened</div>
                                                            <div className="overflow-hidden text-black text-ellipsis font-['Inter'] text-[12px] font-normal leading-none">Kailash Manasarovar doordarshan yatra arranged by Travel pocket was very systematic, professional and sincere. The itinerary was followed...</div>
                                                        </div>
                                                        <div className="flex gap-[8px] items-center cursor-pointer">
                                                            <div className="text-[#E97737] font-['Figtree'] text-[14px] font-medium leading-none uppercase">READ MORE</div>
                                                            <img src="/images/detailpage/arrow-icon.svg" width="18px" height="19px" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="rounded-[8px] border border-[#D2D8E4] bg-white flex-shrink-0" style={{ padding: "20px 15px" }}>
                                            <div className="flex items-start gap-4">
                                                <img src="/images/detailpage/review_photo.jpg" alt="Profile" className="w-16 h-16 rounded-full object-cover" />
                                                <div className="flex-1">
                                                    <div className="flex flex-col gap-[12px]">
                                                        <div className="flex flex-col gap-[10px]">
                                                            <div className="text-black font-['Inter'] text-[14px] font-semibold leading-none">My dream trip to see Kailash Manasarovar happened</div>
                                                            <div className="overflow-hidden text-black text-ellipsis font-['Inter'] text-[12px] font-normal leading-none">Kailash Manasarovar doordarshan yatra arranged by Travel pocket was very systematic, professional and sincere. The itinerary was followed...</div>
                                                        </div>
                                                        <div className="flex gap-[8px] items-center cursor-pointer">
                                                            <div className="text-[#E97737] font-['Figtree'] text-[14px] font-medium leading-none uppercase">READ MORE</div>
                                                            <img src="/images/detailpage/arrow-icon.svg" width="18px" height="19px" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="rounded-[8px] border border-[#D2D8E4] bg-white flex-shrink-0" style={{ padding: "20px 15px" }}>
                                            <div className="flex items-start gap-4">
                                                <img src="/images/detailpage/review_photo.jpg" alt="Profile" className="w-16 h-16 rounded-full object-cover" />
                                                <div className="flex-1">
                                                    <div className="flex flex-col gap-[12px]">
                                                        <div className="flex flex-col gap-[10px]">
                                                            <div className="text-black font-['Inter'] text-[14px] font-semibold leading-none">My dream trip to see Kailash Manasarovar happened</div>
                                                            <div className="overflow-hidden text-black text-ellipsis font-['Inter'] text-[12px] font-normal leading-none">Kailash Manasarovar doordarshan yatra arranged by Travel pocket was very systematic, professional and sincere. The itinerary was followed...</div>
                                                        </div>
                                                        <div className="flex gap-[8px] items-center cursor-pointer">
                                                            <div className="text-[#E97737] font-['Figtree'] text-[14px] font-medium leading-none uppercase">READ MORE</div>
                                                            <img src="/images/detailpage/arrow-icon.svg" width="18px" height="19px" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/**ends here */}

                                    {/**View All mobile device */}
                                    <div className="md:hidden rounded-[6px] border border-[#E97737]" style={{ padding: "10px 15px" }}>
                                        <div className="flex items-center gap-[8px] cursor-pointer">
                                            <div className="text-[#E97737] font-figtree text-[14px] font-semibold leading-normal uppercase">
                                                View all
                                            </div>
                                            <img src="/images/detailpage/arrow-icon.svg" width="18px" height="19px" />
                                        </div>
                                    </div>
                                    {/** ends here */}

                                </div>

                                {/* Btns left and right */}
                                <div className="hidden md:flex justify-center gap-8">
                                    <img src="/images/detailpage/back_arrow.png" className="cursor-pointer" onClick={() => scroll('left')} />
                                    <img src="/images/detailpage/forward_arrow.png" className="cursor-pointer" onClick={() => scroll('right')} />
                                </div>
                            </div>

                        </div>
                    </div>
                    {/**Left Section ends here */}

                    {/**Right Section */}
                    <div>

                    </div>
                    {/**Ends here */}
                </div>

            </section>
        </>
    )
}