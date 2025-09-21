"use client";

import { useRef } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Calendar, CheckCircle, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator"

const packages = [
    {
        id: 1,
        title: "Kailash Mansarovar Yatra",
        description: "Charan Sparsh Outer Kora from Lucknow By Helicopter",
        image: "/images/trendingpackages/dummy_card_img.png",
        duration: "11 Nights 12 Days",
        inclusions: "20+ Inclusions",
        pickup: "Lucknow",
        price: "₹9500",
    },
    {
        id: 2,
        title: "Kedarnath, Tungnath and Badrinath Yatra",
        description: "Uttarakhand’s most revered temples",
        image: "/images/trendingpackages/dummy_card_img.png",
        duration: "11 Nights 12 Days",
        inclusions: "20+ Inclusions",
        pickup: "Lucknow",
        price: "₹9500",
    },
    {
        id: 3,
        title: "Adi Kailash Om Parvat Yatra",
        description: "via Lipu Pass | Pithoragarh",
        image: "/images/trendingpackages/dummy_card_img.png",
        duration: "11 Nights 12 Days",
        inclusions: "20+ Inclusions",
        pickup: "Lucknow",
        price: "₹9500",
    },
    {
        id: 4,
        title: "Char Dham Yatra with Helicopter",
        description: "Visit the four sacred Dhams by Helicopter",
        image: "/images/trendingpackages/dummy_card_img.png",
        duration: "11 Nights 12 Days",
        inclusions: "20+ Inclusions",
        pickup: "Lucknow",
        price: "₹9500",
    },
    {
        id: 5,
        title: "Char Dham Yatra with Helicopter",
        description: "Visit the four sacred Dhams by Helicopter",
        image: "/images/trendingpackages/dummy_card_img.png",
        duration: "11 Nights 12 Days",
        inclusions: "20+ Inclusions",
        pickup: "Lucknow",
        price: "₹9500",
    },
    {
        id: 6,
        title: "Kailash Mansarovar Yatra",
        description: "Charan Sparsh Outer Kora from Lucknow By Helicopter",
        image: "/images/trendingpackages/dummy_card_img.png",
        duration: "11 Nights 12 Days",
        inclusions: "20+ Inclusions",
        pickup: "Lucknow",
        price: "₹9500",
    }
];

export default function TrendingPackages() {
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
        <section className="max-w-[1920px] mx-auto px-4 pb-[25px] sm:px-6 md:px-8 lg:px-[50px]">
            {/* Header */}
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
                        <p className="text-[var(--Primary-Blue,#1A2F46)] text-center font-['Figtree'] text-[16px] font-semibold leading-normal capitalize">Most Popular</p>
                        <h2 className="text-[var(--Primary-Blue,#1A2F46)] text-center font-['Playfair_Display'] text-[36px] font-semibold leading-normal">
                            Trending Packages of 2025
                        </h2>
                    </div>
                </div>

                {/* View All button (aligned right) */}
                <Button variant="outline" className="rounded-[6px] border border-[var(--Primary,#E97737)] ml-0 mt-6 md:ml-6 md:mt-0 cursor-pointer hover:scale-115 transform transition duration-200">
                    <span className="text-[var(--Primary,#E97737)] font-['Figtree'] text-sm font-semibold uppercase">View All</span>
                    <img
                        src="/images/trendingpackages/Group1000007348.svg"
                        alt=""
                        width={20}
                        height={20}
                        className="mx-auto"
                    />
                </Button>
            </div>
            {/* Slider */}
            <div className="relative px-[50px]">
                {/* Left Arrow */}
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-[0px] top-1/2 -translate-y-1/2 shadow-md rounded-full p-2 z-10"
                    style={{ background: '#E3E6EE' }}
                >
                    <ArrowLeft className="h-5 w-5 cursor-pointer" />
                </button>

                <div className="slider-wrp">
                    {/* Cards */}
                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide no-scrollbar"
                    >
                        {packages.map((pkg) => (
                            <Card key={pkg.id} className="min-w-[300px] max-w-[320px] flex-shrink-0 rounded-xl">
                                <div className="relative">
                                    <img
                                        src={pkg.image}
                                        alt={pkg.title}
                                        className="w-full h-48 object-cover rounded-t-xl"
                                    />
                                    <Badge
                                        variant="popular"
                                        icon="/images/trendingpackages/local_fire_department.svg"
                                        className="absolute top-0.5 left-0.5 rounded-[4px] bg-[#FCD205]"
                                    >
                                        <span className="text-[#1A2F46] font-['Figtree'] text-[12px] font-medium leading-[14px] uppercase">Popular</span>
                                    </Badge>

                                </div>
                                <CardContent className="py-0 space-y-2">
                                    <Badge variant="registration" icon="/images/trendingpackages/Ellipse6306.svg" className="rounded-[4px] bg-[#DFF8F1]">
                                        <span className="text-[#00A53F] font-['Figtree'] text-[12px] font-semibold leading-[14px] uppercase">
                                            Registrations Open
                                        </span>
                                    </Badge>
                                    <div className="flex flex-col items-start gap-[12px] h-[165px]">
                                        <div className="flex flex-col items-start gap-[10px]">
                                            <h3 className="ttext-[#333] font-['Figtree'] text-[20px] font-semibold leading-normal">{pkg.title}</h3>
                                            <p className="text-[#333] font-['Figtree'] text-[16px] font-normal leading-[22px]">{pkg.description}</p>
                                        </div>

                                        <div className="flex py-[2px] items-center content-center gap-[10px] flex-wrap">
                                            {/* Info Row */}
                                            <Calendar className="h-4 w-4" /> {pkg.duration}
                                            <Separator orientation="vertical" className="!h-[14px] w-px bg-[#BBB] border border-[#BBB]" />
                                            <CheckCircle className="h-4 w-4" /> {pkg.inclusions}
                                            <Separator orientation="vertical" className="!h-[14px] w-px bg-[#BBB] border border-[#BBB]" />
                                            <MapPin className="h-4 w-4" /> {pkg.pickup}
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-[6px]">
                                        <p className="text-[#333333] font-['Figtree'] text-[16px] font-normal leading-[24px]">
                                            EMI starts from <span className="text-[#333333] font-['Figtree'] text-[22px] font-semibold leading-[24px]">{pkg.price}</span>
                                        </p>
                                    </div>
                                </CardContent>
                                {/* <CardFooter> */}
                                {/* Buttons */}
                                <div className="flex flex-col md:flex-row lg:flex-row gap-4">
                                    <Button variant="outline" className="flex-1 shrink-0">
                                        <span className="text-[#1A2F46] text-center font-['Figtree'] text-[14px] font-medium uppercase leading-normal">View Details</span>
                                    </Button>
                                    <Button variant="outline" className="flex-1 shrink-0">
                                        <span className="text-[#E97737] text-center font-['Figtree'] text-[14px] font-medium uppercase leading-normal">Book Now</span>
                                    </Button>
                                </div>
                                {/* </CardFooter> */}
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Right Arrow */}
                <Button
                    onClick={() => scroll("right")}
                    className="absolute right-[0px] top-1/2 -translate-y-1/2 shadow-md rounded-full p-2 z-10 cursor-pointer"
                    style={{ background: '#E3E6EE' }}
                >
                    <ArrowRight className="h-5 w-5"/>
                </Button>
            </div>
        </section>
    );
}