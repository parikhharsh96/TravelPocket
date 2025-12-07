'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, CheckCircle, MapPin } from "lucide-react"
import { Separator } from "@radix-ui/react-separator"
import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function KailashMansarovarPage() {
    const packages = [
        {
            id: 1,
            title: "Kailash Mansarovar Yatra",
            description: "Charan Sparsh Outer Kora from Lucknow By Helicopter",
            duration: "11 NIGHTS 12 DAYS",
            inclusions: "20+ INCLUSIONS",
            pickup: "PICK UP: LUCKNOW",
            price: "₹9500",
            img: "/images/kailash-mansarovar/Mount-Kailash.png"
        },
        {
            id: 2,
            title: "Kailash Mansarovar Yatra",
            description: "Charan Sparsh Outer Kora from Lucknow By Helicopter",
            duration: "11 NIGHTS 12 DAYS",
            inclusions: "20+ INCLUSIONS",
            pickup: "PICK UP: LUCKNOW",
            price: "₹9500",
            img: "/images/kailash-mansarovar/Mount-Kailash.png"
        },
        {
            id: 3,
            title: "Kailash Mansarovar Yatra",
            description: "Charan Sparsh Outer Kora from Lucknow By Helicopter",
            duration: "11 NIGHTS 12 DAYS",
            inclusions: "20+ INCLUSIONS",
            pickup: "PICK UP: LUCKNOW",
            price: "₹9500",
            img: "/images/kailash-mansarovar/Mount-Kailash.png"
        },
        {
            id: 4,
            title: "Kailash Mansarovar Yatra",
            description: "Charan Sparsh Outer Kora from Lucknow By Helicopter",
            duration: "11 NIGHTS 12 DAYS",
            inclusions: "20+ INCLUSIONS",
            pickup: "PICK UP: LUCKNOW",
            price: "₹9500",
            img: "/images/kailash-mansarovar/Mount-Kailash.png"
        },
    ]

    const scrollRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const navigateToPackages = () => {
        router.push("/listing"); //need to add dynamic routing later
    };

    const navigateToPackageDetails = () => {
        router.push("/details"); //need to add dynamic routing later
    };

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

                {/* Hero Section */}
                <div className="relative w-full min-h-[650px] bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('/images/kailash-mansarovar/kailash-mansarovar.jpg')`,
                    }}
                >
                    {/* Gradient Overlays matching Figma specifications */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "linear-gradient(181.11deg, #FFFFFF 2.87%, rgba(243, 250, 255, 0.812144) 9.08%, rgba(231, 246, 255, 0.638386) 14.82%, rgba(196, 231, 255, 0.1) 32.61%, rgba(0, 0, 0, 0) 84.86%)",
                        }}
                    />

                    {/* Left side gradient overlay */}
                    <div
                        className="absolute left-0 top-0 w-1/3 h-full"
                        style={{
                            background: "linear-gradient(90deg, #FFFFFF 2.67%, rgba(255, 255, 255, 0) 84.05%)",
                        }}
                    />

                    {/* Right side gradient overlay */}
                    <div
                        className="absolute right-0 top-0 w-1/3 h-full"
                        style={{
                            background: "linear-gradient(270deg, #FFFFFF 4.2%, rgba(255, 255, 255, 0) 84.1%)",
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
                                <p className="text-[#1A2F46] text-center font-['Figtree'] text-[14px] md:text-[16px] font-semibold leading-normal capitalize">Walk the Sacred Circle</p>
                                <h2 className="text-[#1A2F46] text-center font-['Playfair_Display'] text-[28px] md:text-[36px] font-semibold leading-normal">
                                    Kailash Mansarovar: The Journey of a Lifetime
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="container mx-auto flex flex-col items-center gap-8">
                        {/* CTA Button */}
                        <Button
                            className="relative mt-[50px] mb-12 sm:mb-16 lg:mb-20 w-full max-w-s sm:w-auto group bg-white rounded-[6px] cursor-pointer group transition-transform duration-300 ease-in-out bg-[linear-gradient(90deg,_#E97737_0%,_#E97737_50%,_transparent_50%)] 
             bg-[length:200%_100%] bg-[position:100%_0] 
             transition-[background-position] duration-300 ease-out
             hover:bg-[position:0_0]" onClick={navigateToPackages}
                            style={{
                                padding: "0 15px",
                                border: "none",
                            }}
                            size="lg"
                        >
                            <span
                                className="text-[#E97737] font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-normal uppercase tracking-wide group-hover:text-white"
                            >
                                <span className="">EXPLORE Kailash Mansarovar TRIPS</span>
                            </span>

                            {/* Arrow icon matching Figma */}
                            <div className="ml-1 w-5 h-5 bg-white rounded-full flex items-center justify-center border border-[#E97737] group-hover:-rotate-45 transition-transform duration-300 ease-in-out">
                                <ArrowRight className="w-2.5 h-2.5 text-[#E97737]" />
                            </div>
                        </Button>
                    </div>
                </div>

                {/* Packages Section */}
                <div className="absolute left-0 right-0 z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 top-[65%]"
                    style={{
                        // top: "80vh", // Position it to overlap the bottom half of the background
                    }}>
                    {/* Section heading typography */}
                    <h2
                        className="font-semibold mb-8 sm:mb-12 text-center"
                    >
                        <span className="text-white text-center font-['Figtree'] text-[24px] md:text-[32px] font-semibold leading-normal">Kailash Mansarovar Yatra 2025 Packages</span>
                    </h2>

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
                                            src={pkg.img}
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
                </div>
            </section >


            <section className="hidden relative container mx-auto px-4 mb-[50px] pb-[50px] sm:px-6 md:px-8 lg:px-[50px] mt-[20px]">
                <div className="min-h-screen overflow-hidden">
                    {/* Hero Section */}
                    <div className="relative min-h-screen">
                        {/* Main Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                            style={{
                                backgroundImage: `url('/images/kailash-mansarovar/kailash-mansarovar.jpg')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                            }}
                        />

                        {/* Gradient Overlays matching Figma specifications */}
                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                    "linear-gradient(181.11deg, #FFFFFF 2.87%, rgba(243, 250, 255, 0.812144) 9.08%, rgba(231, 246, 255, 0.638386) 14.82%, rgba(196, 231, 255, 0.1) 32.61%, rgba(0, 0, 0, 0) 84.86%)",
                            }}
                        />

                        {/* Left side gradient overlay */}
                        <div
                            className="absolute left-0 top-0 w-1/3 h-full"
                            style={{
                                background: "linear-gradient(90deg, #FFFFFF 2.67%, rgba(255, 255, 255, 0) 84.05%)",
                            }}
                        />

                        {/* Right side gradient overlay */}
                        <div
                            className="absolute right-0 top-0 w-1/3 h-full"
                            style={{
                                background: "linear-gradient(270deg, #FFFFFF 4.2%, rgba(255, 255, 255, 0) 84.1%)",
                            }}
                        />

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
                                        <p className="text-[#1A2F46] text-center font-['Figtree'] text-[14px] md:text-[16px] font-semibold leading-normal capitalize">Walk the Sacred Circle</p>
                                        <h2 className="text-[#1A2F46] text-center font-['Playfair_Display'] text-[28px] md:text-[36px] font-semibold leading-normal">
                                            Kailash Mansarovar: The Journey of a Lifetime
                                        </h2>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <Button
                                className="relative mt-[100px] mb-12 sm:mb-16 lg:mb-20 w-full max-w-xs sm:w-auto group bg-[#E97737] rounded-[6px]"
                                style={{
                                    padding: "0 15px",
                                    border: "none",
                                }}
                                size="lg"
                            >
                                <span
                                    className="text-white font-['Figtree'] text-[14px] font-semibold leading-normal uppercase tracking-wide"
                                >
                                    <span className="hidden sm:inline">EXPLORE KAILASH MANSAROVAR TRIPS</span>
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
                            top: "70vh", // Position it to overlap the bottom half of the background
                        }}>
                        {/* Section heading typography */}
                        <h2
                            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 sm:mb-12 text-balance text-center"
                        >
                            <span className="text-white text-center font-['Figtree'] text-[32px] font-semibold leading-normal">Kailash Mansarovar Yatra 2025 Packages</span>
                        </h2>

                        {/* Package Cards Grid */}
                        <div className="slider-wrp">
                            <div className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide no-scrollbar"> {/**grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 */}
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
                                            <div className="flex flex-row sm:flex-row gap-2">
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
                    </div>
                    <div className="h-96 sm:h-[700px] lg:h-[400px]" />
                </div>
            </section>
        </>

    )
}