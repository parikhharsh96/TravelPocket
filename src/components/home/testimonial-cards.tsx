"use client";

import { useRef } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Calendar, CheckCircle, MapPin, Play } from "lucide-react";
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

export default function TestimonialCards() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const CARD_WIDTH = 400;
    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { clientWidth } = scrollRef.current;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -CARD_WIDTH : CARD_WIDTH,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="max-w-[1920px] mx-auto px-4 pb-[25px] sm:px-6 md:px-8 lg:px-[50px]">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-center justify-between py-10 relative mb-4 mt-2">
                {/* Title with background circle */}
                <div className="flex-1 text-center">
                    {/* Text */}
                    <div className="">
                        <h2 className="text-[var(--Primary-Blue,#1A2F46)] text-center font-['Playfair_Display'] text-[36px] font-semibold leading-normal">
                            Experiences You Can Believe In
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
                        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-6 px-4 scrollbar-hide no-scrollbar"
                    >
                        {packages.map((pkg) => (
                            <div className="relative flex-shrink-0 w-full sm:h-[200px] sm:w-1/2 lg:w-1/3 xl:w-1/4 bg-white rounded-lg overflow-hidden snap-start" style={{height: "325px"}}>
                                <div className="aspect-[4/3] w-full relative">
                                    <video
                                        poster="/images/testimonialCards/video_poster.png"
                                        className="w-full h-full object-contain rounded-lg"
                                        style={{ transform: "translateY(-33px)" }}
                                        controls={false}
                                        muted
                                        playsInline
                                    >
                                        {/* No video source - just using poster frame */}
                                    </video>

                                    <div className="absolute left-0 right-0 bottom-0 sm:bottom-[-85px] md:bottom-[-100px] rounded-lg p-4 sm:p-6">
                                        <div className="flex flex-col gap-2 bg-white shadow-[0px_8px_14px_rgba(0,0,0,0.12)] p-2 rounded-t-[8px] border-b-2 border-[#E97737]">
                                            <h2
                                                className="font-semibold text-sm sm:text-base md:text-[20px] leading-tight text-black"
                                                style={{ fontFamily: "Figtree, sans-serif" }}
                                            >
                                                How Family Experienced with @travelpocket on Adi Kailash & Om Parvat yatra.
                                            </h2>

                                            <div className="flex flex-col gap-1">
                                                <p
                                                    className="font-medium text-xs sm:text-sm md:text-[14px] leading-tight text-black"
                                                    style={{ fontFamily: "Figtree, sans-serif" }}
                                                >
                                                    Sameer Shukla
                                                </p>
                                                <p
                                                    className="font-normal text-[10px] sm:text-xs md:text-[12px] leading-tight uppercase text-black"
                                                    style={{ fontFamily: "Figtree, sans-serif" }}
                                                >
                                                    MUMBAI
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        ))}
                    </div>
                </div>
                {/* Right Arrow */}
                <Button
                    onClick={() => scroll("right")}
                    className="absolute right-[0px] top-1/2 -translate-y-1/2 shadow-md rounded-full p-2 z-10 cursor-pointer"
                    style={{ background: '#E3E6EE' }}
                >
                    <ArrowRight className="h-5 w-5" />
                </Button>
            </div>
        </section>
    );
}