"use client";

import { Separator } from "@radix-ui/react-separator";


export default function DetailPackage() {


    return (
        <>
            <section className="max-w-[1920px] mx-auto">
                <div className="rounded-[0_0_30px_30px] bg-[#EBF5F7] w-full">
                    <div className="px-4 md:px-6 lg:px-8">
                        <div className="flex gap-[10px]">
                            <div className="flex gap-[3px]">
                                <img src="/images/detailpage/arrow_back.svg" width="14px" height="14px"
                                    alt="Twitter" className="cursor-pointer" />
                                <div className="text-[#5A5A5A] font-[Figtree] text-[12px] font-normal leading-[14px]">About</div>
                            </div>
                            <Separator orientation="vertical" className="!h-[14px] w-px bg-[#BBB] border border-[#BBB]" />
                            <div className="flex gap-[8px]">
                                <div className="text-[#5A5A5A] font-[Figtree] text-[12px] font-normal leading-[14px]">Home</div>
                                <img src="/images/detailpage/arrow-right.svg" width="12px" height="12px"
                                    alt="Twitter" className="cursor-pointer" />
                                <div className="text-[#5A5A5A] font-[Figtree] text-[12px] font-normal leading-[14px]">Kailash Mansarovar Yatra </div>
                            </div>
                        </div>

                        <div className="flex flex-row justify-between items-center w-full p-2">
                            {/* -- Left section -- */}
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center gap-4">
                                    <div className="">
                                        <img src="/images/header/facebook.svg" width="15px" height="16px"
                                            alt="Twitter" className="aspect-[23/24] cursor-pointer" />
                                    </div>
                                    <div className="">
                                        <img src="/images/header/logo_51.svg" width="15px" height="16px"
                                            alt="Twitter" className="aspect-[23/24] cursor-pointer" />
                                    </div>
                                    <div className="">
                                        <img src="/images/header/instagram.svg" width="18px" height="18px"
                                            alt="Twitter" className="aspect-[23/24] cursor-pointer" />
                                    </div>
                                </div>
                                <Separator orientation="vertical" className="!h-[14px] w-px bg-[#BBB] border border-[#BBB]" />
                                <div className="ml-2">
                                    <div className="flex items-center gap-2">
                                        <img src="/images/header/calendar.svg" width="18px" height="18px"
                                            alt="Twitter" className="aspect-[23/24] cursor-pointer" />
                                        <div className="text-[#333] font-[Figtree] text-[14px] font-normal leading-normal uppercase">2025 Calendar</div>
                                    </div>
                                </div>
                                <Separator orientation="vertical" className="!h-[14px] w-px bg-[#BBB] border border-[#BBB]" />
                                <div className="ml-2">
                                    <div className="flex items-center gap-2">
                                        <img src="/images/header/call.svg" width="18px" height="18px"
                                            alt="Twitter" className="aspect-[23/24] cursor-pointer" />
                                        <div className="text-[#333] font-[Figtree] text-[14px] font-normal leading-normal uppercase underline">+91 78270-33601</div>
                                    </div>
                                </div>
                            </div>

                            {/* -- Right section -- */}
                            <div className="flex items-center space-x-4">
                                <a href="#" className="text-[#333] font-[Figtree] text-[14px] font-normal leading-normal uppercase">Blogs</a>
                                <a href="#" className="text-[#333] font-[Figtree] text-[14px] font-normal leading-normal uppercase">JOIN POCKETCLUB</a>
                                <a href="#" className="text-[#333] font-[Figtree] text-[14px] font-normal leading-normal uppercase">OFFERS</a>
                                <a href="#" className="text-[#333] font-[Figtree] text-[14px] font-normal leading-normal uppercase">FAQs</a>
                                <a href="#" className="text-[#333] font-[Figtree] text-[14px] font-normal leading-normal uppercase">Contact</a>
                                <Separator orientation="vertical" className="!h-[14px] w-px bg-[#BBB] border border-[#BBB]" />
                                <div className="flex">
                                    <div className="text-[#333] font-[Figtree] text-[14px] font-normal leading-normal uppercase">EN</div>
                                    <img src="/images/header/Polygon.svg"
                                        alt="Reliable" className="ml-1 shrink-0" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}