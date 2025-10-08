"use client";

import { Separator } from "@radix-ui/react-separator";
import Link from "next/link"


export default function DetailPackage() {


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
        </>
    )
}