"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, Calendar, CheckCircle, ChevronLeft, ChevronRight, MapPin } from "lucide-react"
import { Separator } from "@radix-ui/react-separator"
import { useRef } from "react";
import { useRouter } from "next/navigation";

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
            image: "/images/trendingpackages/dummy_card_img.png"
        },
        {
            id: 2,
            title: "Panaromic Himalaya Mount Everest View Package",
            description: "Embark on a soulful pilgrimage to Muktinath",
            duration: "11 NIGHTS 12 DAYS",
            inclusions: "20+ INCLUSIONS",
            pickup: "PICK UP: LUCKNOW",
            price: "₹3500",
            image: "/images/trendingpackages/dummy_card_img.png"
        },
        {
            id: 3,
            title: "Panaromic Himalaya Mount Everest View Package",
            description: "Embark on a soulful pilgrimage to Muktinath",
            duration: "11 NIGHTS 12 DAYS",
            inclusions: "20+ INCLUSIONS",
            pickup: "PICK UP: LUCKNOW",
            price: "₹3500",
            image: "/images/trendingpackages/dummy_card_img.png"
        },
        {
            id: 4,
            title: "Muktinath Dham Yatra with Kailash Darshan",
            description: "Embark on a soulful pilgrimage to Muktinath",
            duration: "11 NIGHTS 12 DAYS",
            inclusions: "20+ INCLUSIONS",
            pickup: "PICK UP: LUCKNOW",
            price: "₹3500",
            image: "/images/trendingpackages/dummy_card_img.png"
        },
    ];

    const navItems = [
        { name: "Muktinath Dham" },
        { name: "Mount Everest View" },
        { name: "Nepal Wildlife" },
        { name: "Valleys of Nepal" },
    ]

    const router = useRouter();

    const navigateToPackages = () => {
        router.push("/listing"); //need to add dynamic routing later
    };

    const navigateToPackageDetails = () => {
        router.push("/details"); //need to add dynamic routing later
    };

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
        <>
            <section className="relative max-w-[1920px] mx-auto mt-[75px] pt-[50px] mb-[500px]"> {/**mb-[50px] pb-[50px] */}
                {/* <div className="min-h-screen"> */}
                {/* Hero Section */}
                <div className="relative w-full min-h-[900px] bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('/images/nepal-tour/nepal-tour-bg.png')`,
                    }}
                >
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

                    {/* Content */}
                    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-10 relative mb-4 mt-2">
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
                                <p className="text-[#1A2F46] text-center font-['Figtree'] text-[14px] md:text-[16px] font-semibold leading-normal capitalize">Explore and discover</p>
                                <h2 className="text-[#1A2F46] text-center font-['Playfair_Display'] text-[28px] md:text-[36px] font-semibold leading-normal">
                                    Nepal: Land of Gods & Monasteries
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="container mx-auto flex flex-col items-center gap-8">
                        <div className="flex items-center gap-4 mb-12 relative">
                            <button
                                onClick={() => scroll("left")}
                                className="shadow-md rounded-full p-2 z-10"
                                style={{ background: '#E3E6EE' }}
                            >
                                <ArrowLeft className="h-5 w-5 cursor-pointer" />
                            </button>

                            <div className="max-w-[240px] md:max-w-2xl overflow-hidden">
                                <div className="slider-wrp">
                                    <div ref={scrollRef} className="flex gap-2 md:gap-4 overflow-x-auto scroll-smooth scrollbar-hide no-scrollbar">
                                        {navItems.map((item, index) => (
                                            <div
                                                key={index}
                                                className="flex-shrink-0 md:w-[150px] md:h-[190px] w-[112px] h-[130px] rounded-[100px] bg-[#1A2F46] text-white px-6 flex flex-col items-center justify-center gap-2 group hover:bg-[#E97737] transition-transform duration-300 ease-in-out cursor-pointer"
                                            >
                                                {/* <img src="/images/nepal-tour/find.svg" className="h-6 w-6" /> */}
                                                <svg className="group-hover:-rotate-90 h-6 w-6 md:h-5 md:w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 27" fill="none">
                                                    <path d="M30.747 16.3422L25.7161 2.96653C25.7161 2.96653 25.7161 2.96165 25.7161 2.9584C25.3427 1.95854 24.6296 1.12176 23.7017 0.594369C22.7738 0.0669751 21.69 -0.117476 20.6399 0.0732661C19.5897 0.264008 18.64 0.817805 17.9568 1.63783C17.2737 2.45786 16.9004 3.49193 16.9025 4.55926V10.4101H14.3021V4.55926C14.3026 3.49309 13.9287 2.4606 13.2457 1.64194C12.5627 0.823279 11.6139 0.270423 10.5649 0.0798377C9.51589 -0.110748 8.43328 0.0730369 7.50595 0.599125C6.57862 1.12521 5.86544 1.9602 5.49086 2.9584C5.49086 2.9584 5.49086 2.96328 5.49086 2.96653L0.457505 16.3422C0.0889147 17.3225 -0.0598497 18.3718 0.0217268 19.416C0.103303 20.4601 0.413229 21.4736 0.929598 22.3847C1.44597 23.2959 2.15617 24.0825 3.01001 24.689C3.86385 25.2955 4.84049 25.707 5.87088 25.8945C6.90127 26.082 7.96027 26.0408 8.97302 25.774C9.98576 25.5072 10.9275 25.0211 11.7318 24.3503C12.536 23.6794 13.1831 22.84 13.6272 21.8916C14.0713 20.9431 14.3017 19.9087 14.3021 18.8613V18.2112H16.9025V18.8613C16.9028 19.9087 17.1332 20.9431 17.5773 21.8916C18.0215 22.84 18.6685 23.6794 19.4728 24.3503C20.277 25.0211 21.2188 25.5072 22.2315 25.774C23.2443 26.0408 24.3033 26.082 25.3337 25.8945C26.3641 25.707 27.3407 25.2955 28.1945 24.689C29.0484 24.0825 29.7586 23.2959 30.2749 22.3847C30.7913 21.4736 31.1012 20.4601 31.1828 19.416C31.2644 18.3718 31.1156 17.3225 30.747 16.3422ZM7.15104 23.412C6.25101 23.412 5.37118 23.1451 4.62283 22.6451C3.87448 22.145 3.29121 21.4343 2.94678 20.6028C2.60235 19.7713 2.51223 18.8563 2.68782 17.9736C2.86341 17.0908 3.29682 16.28 3.93324 15.6435C4.56966 15.0071 5.38051 14.5737 6.26325 14.3981C7.14599 14.2225 8.06098 14.3126 8.8925 14.6571C9.72403 15.0015 10.4347 15.5848 10.9348 16.3331C11.4348 17.0815 11.7017 17.9613 11.7017 18.8613C11.7004 20.0679 11.2206 21.2246 10.3674 22.0777C9.51429 22.9309 8.35756 23.4107 7.15104 23.412ZM24.0535 23.412C23.1535 23.412 22.2736 23.1451 21.5253 22.6451C20.7769 22.145 20.1937 21.4343 19.8492 20.6028C19.5048 19.7713 19.4147 18.8563 19.5903 17.9736C19.7659 17.0908 20.1993 16.28 20.8357 15.6435C21.4721 15.0071 22.283 14.5737 23.1657 14.3981C24.0485 14.2225 24.9634 14.3126 25.795 14.6571C26.6265 15.0015 27.3372 15.5848 27.8372 16.3331C28.3373 17.0815 28.6042 17.9613 28.6042 18.8613C28.6029 20.0679 28.123 21.2246 27.2699 22.0777C26.4167 22.9309 25.26 23.4107 24.0535 23.412Z" fill="white" />
                                                </svg>
                                                <span className="text-white text-center font-[Figtree] text-[20px] font-medium leading-[26px] group-hover:scale-105 transition-transform duration-300 ease-in-out">{item.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

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
                            className="relative mt-[50px] mb-12 sm:mb-16 lg:mb-20 w-full max-w-xs sm:w-auto group bg-white rounded-[6px] cursor-pointer group transition-transform duration-300 ease-in-out bg-[linear-gradient(90deg,_#E97737_0%,_#E97737_50%,_transparent_50%)] 
             bg-[length:200%_100%] bg-[position:100%_0] 
             transition-[background-position] duration-300 ease-out
             hover:bg-[position:0_0]"
                            style={{
                                padding: "0 15px",
                                border: "none",
                            }}
                            size="lg" onClick={navigateToPackages}
                        >
                            <span
                                className="text-[#E97737] font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-normal uppercase tracking-wide group-hover:text-white"
                            >
                                <span className="hidden sm:inline">EXPLORE NEPAL TRIPS</span>
                                <span className="sm:hidden">EXPLORE TRIPS</span>
                            </span>

                            {/* Arrow icon matching Figma */}
                            <div className="ml-1 w-5 h-5 bg-white rounded-full flex items-center justify-center border border-[#E97737] group-hover:-rotate-45 transition-transform duration-300 ease-in-out">
                                <ArrowRight className="w-2.5 h-2.5 text-[#E97737]" />
                            </div>
                        </Button>
                    </div>
                </div>

                {/* Packages Section */}
                <div className="absolute left-0 right-0 z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 top-[80%]"
                    style={{
                        // top: "80vh", // Position it to overlap the bottom half of the background
                    }}>
                    {/* Section heading typography */}
                    <h2
                        className="font-semibold mb-8 sm:mb-12 text-center"
                    >
                        <span className="text-white text-center font-['Figtree'] text-[24px] md:text-[32px] font-semibold leading-normal">Most Popular in Nepal</span>
                    </h2>

                    {/* Package Cards Grid */}
                    <div className="slider-wrp">
                        {/* Cards */}
                        <div
                            ref={scrollRef}
                            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide no-scrollbar"
                        >
                            {packages.map((pkg) => (
                                <Card key={pkg.id} className="min-w-[300px] max-w-[320px] flex-shrink-0 rounded-xl group">
                                    <div className="relative overflow-hidden rounded-t-xl h-48">
                                        <img
                                            src={pkg.image}
                                            alt={pkg.title}
                                            className="w-full h-full object-cover transform transition-transform duration-500 ease-out group-hover:scale-110"
                                        />
                                        <Badge
                                            variant="popular"
                                            icon="/images/trendingpackages/local_fire_department.svg"
                                            className="absolute top-0.5 left-0.5 rounded-[4px] bg-[#FCD205]"
                                        >
                                            <span className="text-[#1A2F46] font-['Figtree'] text-[10px] md:text-[12px] font-medium leading-[14px] uppercase">Popular</span>
                                        </Badge>

                                    </div>
                                    <CardContent className="py-0 space-y-2">
                                        <Badge variant="registration" icon="/images/trendingpackages/Ellipse6306.svg" className="rounded-[4px] bg-[#DFF8F1]">
                                            <span className="text-[#00A53F] font-['Figtree'] text-[11px] md:text-[12px] font-semibold leading-[14px] uppercase">
                                                Registrations Open
                                            </span>
                                        </Badge>
                                        <div className="flex flex-col items-start gap-[12px] h-[135px] md:h-[165px]">
                                            <div className="flex flex-col items-start gap-[10px]">
                                                <h3 className="text-[#333] font-['Figtree'] text-[16px] md:text-[20px] font-semibold leading-normal">{pkg.title}</h3>
                                                <p className="text-[#333] font-['Figtree'] text-[12px] md:text-[16px] font-normal leading-[22px]">{pkg.description}</p>
                                            </div>

                                            <div className="flex py-[2px] items-center content-center gap-[10px] flex-wrap">
                                                {/* Info Row */}
                                                <Calendar className="h-4 w-4" /> <span className="text-[#5A5A5A] font-[Figtree] text-[10px] md:text-[14px] font-medium leading-[14px] uppercase">{pkg.duration}</span>
                                                <Separator orientation="vertical" className="!h-[14px] w-px bg-[#BBB] border border-[#BBB]" />
                                                <CheckCircle className="h-4 w-4" /> <span className="text-[#5A5A5A] font-[Figtree] text-[10px] md:text-[14px] font-medium leading-[14px] uppercase">{pkg.inclusions}</span>
                                                <Separator orientation="vertical" className="!h-[14px] w-px bg-[#BBB] border border-[#BBB]" />
                                                <MapPin className="h-4 w-4" /> <span className="text-[#5A5A5A] font-[Figtree] text-[10px] md:text-[14px] font-medium leading-[14px] uppercase">{pkg.pickup}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-[6px]">
                                            <p className="text-[#333333] font-['Figtree'] text-[12px] md:text-[16px] font-normal leading-[24px]">
                                                EMI starts from <span className="text-[#333333] font-['Figtree'] text-[14px] md:text-[22px] font-semibold leading-[24px]">{pkg.price}</span>
                                            </p>
                                        </div>
                                    </CardContent>
                                    {/* <CardFooter> */}
                                    {/* Buttons */}
                                    <div className="flex flex-row md:flex-row lg:flex-row gap-4">
                                        <Button variant="outline" className="flex-1 shrink-0 cursor-pointer
                    group-hover:bg-[linear-gradient(90deg,_#1A2F46_0%,_#1A2F46_50%,_transparent_50%)] 
             group-hover:bg-[length:200%_100%] bg-[position:100%_0] 
             group-hover:transition-[background-position] duration-300 ease-out
             group-hover:bg-[position:0_0]" onClick={navigateToPackageDetails}>
                                            <span className="text-[#1A2F46] text-center font-['Figtree'] text-[11px] md:text-[14px] font-medium uppercase leading-normal group-hover:text-white">View Details</span>
                                        </Button>
                                        <Button variant="outline" className="flex-1 shrink-0 cursor-pointer
                    group-hover:bg-[linear-gradient(90deg,_#E97737_0%,_#E97737_50%,_transparent_50%)] 
             group-hover:bg-[length:200%_100%] bg-[position:100%_0] 
             group-hover:transition-[background-position] duration-300 ease-out
             group-hover:bg-[position:0_0]" onClick={navigateToPackageDetails}>
                                            <span className="text-[#E97737] text-center font-['Figtree'] text-[11px] md:text-[14px] font-medium uppercase leading-normal group-hover:text-white">Book Now</span>
                                        </Button>
                                    </div>
                                    {/* </CardFooter> */}
                                </Card>
                            ))}
                        </div>
                    </div>
                    {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
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
                                        
                                        <Badge
                                            variant="popular"
                                            icon="/images/trendingpackages/local_fire_department.svg"
                                            className="rounded-[4px] bg-[#FCD205] absolute top-[0.5px] left-[2px] z-10 px-3 py-1"
                                        >
                                            <span className="text-[#1A2F46] font-['Figtree'] text-[12px] font-medium leading-[14px] uppercase">Popular</span>
                                        </Badge>

                                       
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

                                       
                                        <h3 className="text-[#333] font-['Figtree'] text-[20px] font-semibold leading-normal mt-2 mb-1">
                                            {pkg.title}
                                        </h3>

                                        <p className="text-[#333] font-['Figtree'] text-[16px] font-normal leading-[22px] mt-1 mb-4">
                                            {pkg.description}
                                        </p>

                                       
                                        <div className="space-y-2 mb-4 mt-2">
                                            <div className="flex items-center text-xs flex-wrap">
                                                <Calendar className="h-4 w-4 mr-2" /> {pkg.duration}
                                                <Separator orientation="vertical" className="ml-2 mr-2 !h-[14px] w-px bg-[#BBB] border border-[#BBB]" />
                                                <CheckCircle className="h-4 w-4 mr-2" /> {pkg.inclusions}
                                                <Separator orientation="vertical" className="ml-2 mr-2 !h-[14px] w-px bg-[#BBB] border border-[#BBB]" />
                                                <MapPin className="h-4 w-4 mr-2 mt-1" /> <span className="mt-1">{pkg.pickup}</span>
                                            </div>
                                        </div>

                                       
                                        <div className="mb-4">
                                            <span className="text-[#333333] font-['Figtree'] text-[16px] font-normal leading-[24px]">
                                                EMI starts from{" "}
                                            </span>
                                            <span className="text-[#333333] font-['Figtree'] text-[22px] font-semibold leading-[24px]">
                                                {pkg.price}
                                            </span>
                                        </div>

                                        
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
                        </div> */}
                </div>
                {/* <div className="h-96 sm:h-[700px] md:h-[500px] lg:h-[400px]" /> */}
                {/* </div> */}
            </section >
            {/* <div className="h-96 md:h-auto" />*sm:h-[700px] md:h-[500px] lg:h-[400px] */}
        </>
    )
}