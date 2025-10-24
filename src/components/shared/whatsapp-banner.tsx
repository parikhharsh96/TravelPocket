"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppBanner() {
    const handleWhatsAppClick = () => {
        window.open("https://wa.me/918270333601", "_blank")
    }

    return (
        <section className="max-w-[1920px] mx-auto px-4 pb-[25px] sm:px-6 md:px-8 lg:px-10 xl:px-[200px]">
            <div className="relative w-full h-[280px] sm:h-[320px] md:h-[280px] lg:h-[220px] xl:h-[225px] overflow-hidden rounded-[10px] mt-[40px]">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/images/whatsappstrip/bg_img.png')",
                    }}
                />

                <div className="relative h-full p-4 sm:p-6 md:p-8">
                    {/* Small devices: Single column (icon top, text middle, button bottom) */}
                    <div className="flex flex-col items-center justify-between h-full sm:hidden">
                        {/* Icon at top */}
                        <div className="flex-shrink-0">
                            <img src="/images/whatsappstrip/icon.png" alt="Customer Support" className="w-28 h-28 xs:w-24 xs:h-18 object-contain" />
                        </div>

                        {/* Text in middle */}
                        <div className="text-center font-['Inter']">
                            <div className="font-bold text-black text-sm leading-normal">Yay! Now you can</div>
                            <div className="flex items-center justify-center gap-1 mt-1">
                                <div className="font-bold text-[#39AE41] text-base leading-normal">WHATSAPP</div>
                                <div className="text-[#323232] text-base leading-normal font-normal">TO</div>
                            </div>
                            <div className="font-bold text-[#323232] text-base leading-normal mt-1">BOOK YOUR TRIP</div>
                        </div>

                        {/* Button at bottom */}
                        <button
                            onClick={handleWhatsAppClick}
                            className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 hover:opacity-90"
                            style={{
                                background: "#1A2F46",
                                color: "#FFFFFF",
                            }}
                        >
                            <span className="font-['Inter'] font-bold text-xs leading-normal whitespace-nowrap">WhatsApp</span>
                            <img src="/images/whatsappstrip/whatapp_icon.svg" className="inline" />
                        </button>
                    </div>

                    {/* Medium devices: 2 columns (text+button left, icon right) */}
                    <div className="hidden sm:grid md:grid lg:hidden grid-cols-2 gap-6 h-full items-center">
                        {/* Left column: Text and Button */}
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="font-['Inter']">
                                <div className="font-bold text-black text-lg leading-normal">Yay! Now you can</div>
                                <div className="flex items-center gap-2 mt-2">
                                    <div className="font-bold text-[#39AE41] text-xl leading-normal">WHATSAPP</div>
                                    <div className="text-[#323232] text-xl leading-normal font-normal">TO</div>
                                </div>
                                <div className="font-bold text-[#323232] text-xl leading-normal mt-2">BOOK YOUR TRIP</div>
                            </div>

                            <button
                                onClick={handleWhatsAppClick}
                                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-colors duration-200 hover:opacity-90 w-fit"
                                style={{
                                    background: "#1A2F46",
                                    color: "#FFFFFF",
                                }}
                            >
                                <span className="font-['Inter'] font-bold text-sm leading-normal whitespace-nowrap">
                                    WhatsApp @+91 78270-33601
                                </span>
                                <img src="/images/whatsappstrip/whatapp_icon.svg" className="inline"/>
                            </button>
                        </div>

                        {/* Right column: Icon */}
                        <div className="flex justify-center items-center">
                            <img src="/images/whatsappstrip/icon.png" alt="Customer Support" className="w-28 h-20 md:w-60 md:h-60 object-contain" />
                        </div>
                    </div>

                    {/* Large devices: Row layout (text, button, icon all in row) */}
                    <div className="hidden lg:flex items-center justify-between h-full">
                        {/* Text */}
                        <div className="font-['Inter']">
                            <div className="font-bold text-black text-[28px] leading-[34px] lg:pl-[30px] xl:pl-[50px]">Yay! Now you can</div>
                            <div className="flex items-center gap-2 mt-[1px] lg:pl-[30px] xl:pl-[50px]">
                                <div className="font-bold text-[#39AE41] text-[38px] leading-[46px]">WHATSAPP</div>
                                <div className="text-[#323232] text-[38px] leading-[46px] font-normal">TO</div>
                            </div>
                            <div className="font-bold text-[#323232] text-[38px] leading-[46px] mt-[1px] lg:pl-[30px] xl:pl-[50px]">BOOK YOUR TRIP</div>
                        </div>

                        {/* Button */}
                        <button
                            onClick={handleWhatsAppClick}
                            className="flex items-center justify-center gap-[10px] px-[30px] py-[16px] rounded-[10px] transition-colors duration-200 hover:opacity-90"
                            style={{
                                background: "#1A2F46",
                                color: "#FFFFFF",
                            }}
                        >
                            <span className="font-['Inter'] font-bold text-[18px] leading-normal whitespace-nowrap">
                                WhatsApp @+91 78270-33601
                            </span>
                            <img src="/images/whatsappstrip/whatapp_icon.svg" className="inline"/>
                        </button>

                        {/* Icon */}
                        <div className="flex-shrink-0">
                            <img src="/images/whatsappstrip/icon.png" alt="Customer Support" className="w-36 h-28 xl:w-60 xl:h-52 2xl:w-60 2xl:h-56 object-contain" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
