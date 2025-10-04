"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, Calendar, CheckCircle, ChevronLeft, ChevronRight, MapPin } from "lucide-react"
import { Separator } from "@radix-ui/react-separator"
import { useRef } from "react";

export default function NepalTourSection() {
    const packages = [
        {
            id: 1,
            title: "Muktinath – Where Earth Meets the Eternal",
            description: "Embark on a soulful pilgrimage to Muktinath",
            duration: "11 NIGHTS 12 DAYS",
            inclusions: "20+ INCLUSIONS",
            pickup: "PICK UP: LUCKNOW",
            price: "₹3500",
        },
        {
            id: 2,
            title: "Panaromic Himalaya Mount Everest View Package",
            description: "Embark on a soulful pilgrimage to Muktinath",
            duration: "11 NIGHTS 12 DAYS",
            inclusions: "20+ INCLUSIONS",
            pickup: "PICK UP: LUCKNOW",
            price: "₹3500",
        },
        {
            id: 3,
            title: "Panaromic Himalaya Mount Everest View Package",
            description: "Embark on a soulful pilgrimage to Muktinath",
            duration: "11 NIGHTS 12 DAYS",
            inclusions: "20+ INCLUSIONS",
            pickup: "PICK UP: LUCKNOW",
            price: "₹3500",
        },
        {
            id: 4,
            title: "Muktinath Dham Yatra with Kailash Darshan",
            description: "Embark on a soulful pilgrimage to Muktinath",
            duration: "11 NIGHTS 12 DAYS",
            inclusions: "20+ INCLUSIONS",
            pickup: "PICK UP: LUCKNOW",
            price: "₹3500",
        },
    ];

    const navItems = [
        { title: "Muktinath", subtitle: "Dham" },
        { title: "Mount", subtitle: "Everest View" },
        { title: "Nepal", subtitle: "Wildlife" },
        { title: "Valleys of", subtitle: "Nepal" },
    ]

    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { clientWidth } = scrollRef.current;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -clientWidth : clientWidth,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="relative max-w-[1920px] mx-auto mb-[50px] pb-[50px] mt-[75px] pt-[10px]">
            <div className="min-h-screen overflow-hidden">
                {/* Hero Section */}
                <div className="relative min-h-screen">
                    {/* Main Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url('/images/nepal-tour/nepal-tour-bg.png')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center center",
                        }}
                    />

                    {/* Gradient Overlays matching Figma specifications */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: "linear-gradient(181.11deg, #FFFFFF 2.87%, rgba(243, 250, 255, 0.812144) 9.08%, rgba(231, 246, 255, 0.638386) 14.82%, rgba(196, 231, 255, 0.1) 32.61%, rgba(0, 0, 0, 0) 84.86%)",
                        }}
                    />

                    <div className="absolute inset-0"
                        style={{
                            background: "linear-gradient(180deg, #FFF 0%, rgba(196, 231, 255, 0.67) 30.5%, rgba(0, 0, 0, 0.10) 84.1%)",
                        }}
                    />

                    {/* Left side gradient overlay */}
                    {/* <div
                        className="absolute left-0 top-0 w-1/3 h-full"
                        style={{
                            background: "linear-gradient(90deg, #FFFFFF 2.67%, rgba(255, 255, 255, 0) 84.05%)",
                        }}
                    /> */}

                    {/* Right side gradient overlay */}
                    {/* <div
                        className="absolute right-0 top-0 w-1/3 h-full"
                        style={{
                            background: "linear-gradient(270deg, #FFFFFF 4.2%, rgba(255, 255, 255, 0) 84.1%)",
                        }}
                    /> */}

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center min-h-screen px-4 sm:px-6 lg:px-8 text-center">

                        <div className="flex flex-col md:flex-row items-center justify-between py-10 relative mb-4 mt-2">
                            {/* Title with background circle */}
                            <div className="relative flex-1 text-center">
                                {/* Circle background */}
                                <div className="absolute left-1/2 -translate-x-1/2 -top-6" style={{ top: '-40px' }}>
                                    <img
                                        src="/images/trendingpackages/titledesign.svg"
                                        alt="Title Circle"
                                        width={150}
                                        height={150}
                                        className="mx-auto"
                                    />
                                </div>

                                {/* Text */}
                                <div className="relative">
                                    <p className="text-[var(--Primary-Blue,#1A2F46)] text-center font-['Figtree'] text-[16px] font-semibold leading-normal capitalize">Explore and discover</p>
                                    <h2 className="text-[var(--Primary-Blue,#1A2F46)] text-center font-['Playfair_Display'] text-[36px] font-semibold leading-normal">
                                        Nepal: Land of Gods & Monasteries
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 mb-2">
                            {/* <Button variant="ghost" size="icon" className="text-[#333333] hover:bg-white/20">
                                <ChevronLeft className="h-6 w-6" />
                            </Button> */}
                            <button
                                onClick={() => scroll("left")}
                                className="shadow-md rounded-full p-2 z-10"
                                style={{ background: '#E3E6EE' }}
                            >
                                <ArrowLeft className="h-5 w-5 cursor-pointer" />
                            </button>

                            <div className="" ref={scrollRef}>
                                <div className="flex gap-4">
                                    {navItems.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex gap-4 w-[150px] h-[190px] rounded-[100px] bg-[#1A2F46] shadow-[0_14px_20px_0_rgba(0,0,0,0.25)] text-white px-6 py-4 flex flex-col items-center gap-2 cursor-pointer hover:bg-[#1a2f46]/90 transition-colors"
                                        >
                                            <img src="/images/nepal-tour/find.svg" className="h-6 w-6 mt-4" />
                                            <div className="w-[180px]">
                                                <div className="text-white text-center font-[Figtree] text-[20px] font-medium">{item.title}</div>
                                                <div className="text-white text-center font-[Figtree] text-[20px] font-medium">{item.subtitle}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* <Button variant="ghost" size="icon" className="text-[#333333] hover:bg-white/20">
                                <ChevronRight className="h-6 w-6" />
                            </Button> */}
                            {/* Right Arrow */}
                            <Button
                                onClick={() => scroll("right")}
                                className="shadow-md rounded-full p-2 z-10 cursor-pointer"
                                style={{ background: '#E3E6EE' }}
                            >
                                <ArrowRight className="h-5 w-5" />
                            </Button>
                        </div>

                        {/* CTA Button */}
                        <Button
                            className="relative mt-[10px] mb-2 sm:mb-2 lg:mb-4 w-full max-w-xs sm:w-auto group rounded-[6px] border border-white bg-white cursor-pointer hover:scale-105"
                            style={{
                                padding: "0 15px",
                                border: "none",
                            }}
                            size="lg"
                        >
                            <span
                                className="text-[#E97737] font-['Figtree'] text-[14px] font-semibold leading-normal uppercase"
                            >
                                <span className="hidden sm:inline">EXPLORE NEPAL TRIPS</span>
                                <span className="sm:hidden">EXPLORE TRIPS</span>
                            </span>

                            {/* Arrow icon matching Figma */}
                            <div className="ml-1 w-5 h-5 bg-white rounded-full flex items-center justify-center border border-[#E97737]">
                                <ArrowRight className="w-2.5 h-2.5 text-[#E97737]" />
                            </div>
                        </Button>
                    </div>
                </div>

                {/* Packages Section */}
                <div className="absolute left-0 right-0 z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                    style={{
                        top: "80vh", // Position it to overlap the bottom half of the background
                    }}>
                    {/* Section heading typography */}
                    <h2
                        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 sm:mb-2 text-balance text-center"
                    >
                        <span className="text-white text-center font-['Figtree'] text-[32px] font-semibold leading-normal">Most Popular in Nepal</span>
                    </h2>

                    {/* Package Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                        {packages.map((pkg) => (
                            <Card
                                key={pkg.id}
                                className="overflow-hidden transition-all duration-300 transform hover:-translate-y-1"
                                style={{
                                    borderRadius: "8px",
                                    border: "none",
                                }}
                            >
                                <div className="relative">
                                    {/* Popular Badge */}
                                    <Badge
                                        variant="popular"
                                        icon="/images/trendingpackages/local_fire_department.svg"
                                        className="rounded-[4px] bg-[#FCD205] absolute top-[0.5px] left-[2px] z-10 px-3 py-1"
                                    >
                                        <span className="text-[#1A2F46] font-['Figtree'] text-[12px] font-medium leading-[14px] uppercase">Popular</span>
                                    </Badge>

                                    {/* Package Image */}
                                    <div
                                        className="h-40 sm:h-48 bg-cover bg-center"
                                        style={{
                                            backgroundImage: `url('/images/kailash-mansarovar/Mount-Kailash.png')`,
                                        }}
                                    />
                                </div>

                                <CardContent className="py-3 px-0 sm:py-4 relative">
                                    <Badge variant="registration" icon="/images/trendingpackages/Ellipse6306.svg" className="absolute top-[0.5px] left-[1px] z-10 text-xs font-semibold px-3 py-1 rounded-[4px] bg-[#DFF8F1]">
                                        <span className="text-[#00A53F] font-['Figtree'] text-[12px] font-semibold leading-[14px] uppercase">
                                            Registrations Open
                                        </span>
                                    </Badge>

                                    {/* Package Title */}
                                    <h3 className="text-[#333] font-['Figtree'] text-[20px] font-semibold leading-normal mt-2 mb-1">
                                        {pkg.title}
                                    </h3>

                                    {/* Package Description */}
                                    <p className="text-[#333] font-['Figtree'] text-[16px] font-normal leading-[22px] mt-1 mb-4">
                                        {pkg.description}
                                    </p>

                                    {/* Package Details */}
                                    <div className="space-y-2 mb-4 mt-2">
                                        <div className="flex items-center text-xs flex-wrap">
                                            <Calendar className="h-4 w-4 mr-2" /> {pkg.duration}
                                            <Separator orientation="vertical" className="ml-2 mr-2 !h-[14px] w-px bg-[#BBB] border border-[#BBB]" />
                                            <CheckCircle className="h-4 w-4 mr-2" /> {pkg.inclusions}
                                            <Separator orientation="vertical" className="ml-2 mr-2 !h-[14px] w-px bg-[#BBB] border border-[#BBB]" />
                                            <MapPin className="h-4 w-4 mr-2 mt-1" /> <span className="mt-1">{pkg.pickup}</span>
                                        </div>
                                    </div>

                                    {/* Price */}
                                    <div className="mb-4">
                                        <span className="text-[#333333] font-['Figtree'] text-[16px] font-normal leading-[24px]">
                                            EMI starts from{" "}
                                        </span>
                                        <span className="text-[#333333] font-['Figtree'] text-[22px] font-semibold leading-[24px]">
                                            {pkg.price}
                                        </span>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-2">
                                        <Button
                                            variant="outline"
                                            className="flex-1"
                                            size="sm"
                                        >
                                            <span className="text-[#1A2F46] text-center font-['Figtree'] text-[14px] font-medium uppercase leading-normal">VIEW DETAILS</span>
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="flex-1"
                                            size="sm"
                                        >
                                            <span className="text-[#E97737] text-center font-['Figtree'] text-[14px] font-medium uppercase leading-normal">BOOK NOW</span>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
                <div className="h-96 sm:h-[700px] lg:h-[400px]" />
            </div>
        </section>
    )
}