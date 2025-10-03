'use client';

import { Separator } from "@radix-ui/react-separator";


export default function Header() {

    return (
        <>
            <section className="max-w-[1920px] mx-auto px-4 md:px-6 lg:px-8 w-full">
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

                <Separator orientation="horizontal" className="mt-0 mb-1 bg-[#BBB] border border-[#BBB]" />

                <div className="flex flex-row justify-between items-center w-full p-0">
                    {/* -- Left section -- */}
                    <div className="flex items-center space-x-4">
                        <img src="/images/footer/logo_design_travel_pocket.svg"
                            alt="Reliable" className="shrink-0 aspect-[119/32]" />
                    </div>

                    {/* -- Middle section -- */}
                    <div className="flex items-center space-x-4">
                        <div className="flex gap-8">
                            <div className="flex gap-[8px]">
                                <div className="text-[#333] font-[Figtree] text-[14px] font-semibold leading-normal uppercase">Kailash Mansarovar</div>
                                <img src="/images/header/path_up.svg"
                                    alt="Reliable" className="shrink-0 aspect-[1/2]" />
                            </div>
                            <div className="flex gap-[8px]">
                                <div className="text-[#333] font-[Figtree] text-[14px] font-semibold leading-normal uppercase">ADI Kailash</div>
                                <img src="/images/header/path_up.svg"
                                    alt="Reliable" className="shrink-0 aspect-[1/2]" />
                            </div>
                            <div className="flex gap-[8px]">
                                <div className="text-[#333] font-[Figtree] text-[14px] font-semibold leading-normal uppercase">All Destinations</div>
                                <img src="/images/header/path_up.svg"
                                    alt="Reliable" className="shrink-0 aspect-[1/2]" />
                            </div>
                            <div className="flex gap-[8px]">
                                <div className="text-[#333] font-[Figtree] text-[14px] font-semibold leading-normal uppercase">WHO WE ARE</div>
                                <img src="/images/header/path_up.svg"
                                    alt="Reliable" className="shrink-0 aspect-[1/2]" />
                            </div>
                        </div>
                    </div>

                    {/* -- Right section -- */}
                    <div className="flex items-center space-x-4">
                        <div className="flex gap-8">
                            <img src="/images/header/magnifiying-glass.svg" width="22px" height="22px"
                                alt="Reliable" className="shrink-0" />
                            <img src="/images/header/wishlist.svg" width="22px" height="22px"
                                alt="Reliable" className="shrink-0" />
                            <img src="/images/header/cart.svg" width="22px" height="22px"
                                alt="Reliable" className="shrink-0" />
                            <img src="/images/header/user.svg" width="22px" height="22px"
                                alt="Reliable" className="shrink-0" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}