"use client"

import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Calendar, CheckCircle, ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function RajasthanTourSection() {
    const [currentSlide, setCurrentSlide] = useState(0)

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
    const packages = [
        {
            id: 1,
            title: "Highlights of Rajasthan",
            image: "/images/rajasthan-tour/mahal.jpg",
            price: "₹9500",
            duration: "5 NIGHTS 6 DAYS",
            inclusions: "20+ INCLUSIONS",
        },
        {
            id: 2,
            title: "Jodhpur Jaisalmer",
            image: "/images/rajasthan-tour/mahal.jpg",
            price: "₹9500",
            duration: "5 NIGHTS 6 DAYS",
            inclusions: "20+ INCLUSIONS",
        },
        {
            id: 3,
            title: "Highlights of Rajasthan",
            image: "/images/rajasthan-tour/mahal.jpg",
            price: "₹9500",
            duration: "5 NIGHTS 6 DAYS",
            inclusions: "20+ INCLUSIONS",
        },
        {
            id: 4,
            title: "Jodhpur Jaisalmer",
            image: "/images/rajasthan-tour/mahal.jpg",
            price: "₹9500",
            duration: "5 NIGHTS 6 DAYS",
            inclusions: "20+ INCLUSIONS",
        },
    ]

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % packages.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + packages.length) % packages.length)
    }

    return (
        <>
            <div className="relative max-w-[1920px] mx-auto min-h-screen">
                {/* Hero Background */}
                <div
                    className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/images/rajasthan-tour/Rajasthan_tour.png')",
                    }}
                >
                </div>
                <div
                    className="md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/images/rajasthan-tour/Rajasthan_mobile.png')",
                    }}
                >
                </div>

                {/* Content */}
                <div className="container mx-auto relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16 mb-[300px] md:mb-0">
                    {/* Header */}
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
                                Rajasthan: Where Royalty Lives On
                            </h2>
                        </div>
                    </div>

                    {/* Packages Section */}
                    <div className="w-full mt-64">
                        <h2 className="text-white text-center font-['Figtree'] text-[24px] md:text-[32px] font-semibold leading-normal mb-8">Most Popular in Rajasthan</h2>
                        {/* Slider */}
                        <div className="relative md:px-[50px]">
                            {/* Left Arrow */}
                            <button
                                onClick={() => scroll("left")}
                                className="hidden md:block absolute left-[0px] top-1/2 -translate-y-1/2 shadow-md rounded-full p-2 z-10"
                                style={{ background: '#E3E6EE' }}
                            >
                                <ArrowLeft className="h-5 w-5 cursor-pointer" />
                            </button>

                            <div className="slider-wrp absolute md:static container md:max-w-none">
                                {/* Cards */}
                                <div
                                    ref={scrollRef}
                                    className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide no-scrollbar"
                                >
                                    {packages.map((pkg) => (
                                        <Card
                                            key={pkg.id}
                                            className="flex-shrink-0 bg-white rounded-xl overflow-hidden shadow-lg"
                                        >
                                            <div className="relative p-2">
                                                <img
                                                    src={pkg.image || "/placeholder.svg"}
                                                    alt={pkg.title}
                                                    className="h-32 sm:h-40 md:h-48 object-cover rounded-xl"
                                                />
                                                {/* Price Badge */}
                                                <div className="absolute bottom-0 md:bottom-0 left-0 md:left-0 rounded-[0_8px_8px_0] bg-[#29A4C1] px-2 md:px-3 py-1 text-xs md:text-sm">
                                                    <span className="text-white font-[Figtree] text-[14px] font-normal leading-[24px]">EMI starts from </span><span className="text-white font-[Figtree] text-[16px] font-semibold leading-[24px]">{pkg.price}</span>
                                                </div>
                                            </div>

                                            <div className="p-3 md:p-6">
                                                <h3 className="text-black font-[Figtree] text-[16px] font-bold leading-normal mb-2 md:mb-4">{pkg.title}</h3>

                                                <div className="space-y-2 md:space-y-3">
                                                    <div className="flex items-center gap-2 text-[#5a5a5a]">
                                                        <Calendar className="h-3 w-3 md:h-4 md:w-4" />
                                                        <span className="text-[#5A5A5A] font-[Figtree] text-[14px] font-medium leading-[14px] uppercase">{pkg.duration}</span>
                                                    </div>

                                                    <div className="flex items-center gap-2 text-[#5a5a5a]">
                                                        <CheckCircle className="h-3 w-3 md:h-4 md:w-4" />
                                                        <span className="text-[#5A5A5A] font-[Figtree] text-[14px] font-medium leading-[14px] uppercase">{pkg.inclusions}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    ))}
                                </div>
                            </div>

                            {/* Right Arrow */}
                            <Button
                                onClick={() => scroll("right")}
                                className="hidden md:block absolute right-[0px] top-1/2 -translate-y-1/2 shadow-md rounded-full p-2 z-10 cursor-pointer"
                                style={{ background: '#E3E6EE' }}
                            >
                                <ArrowRight className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

{/* Package Cards Container  old*/ }
{/* <div className="relative hidden">
    
    <Button
        variant="outline"
        size="icon"
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white border-0 shadow-lg"
    >
        <ChevronLeft className="h-5 w-5 text-[#5a5a5a]" />
    </Button>

    <Button
        variant="outline"
        size="icon"
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white border-0 shadow-lg"
    >
        <ChevronRight className="h-5 w-5 text-[#5a5a5a" />
    </Button>

   
    <div className="overflow-hidden px-8 md:px-16">
        <div
            className="flex transition-transform duration-500 ease-in-out gap-4 md:gap-6"
            style={{
                transform: `translateX(-${currentSlide * (100 / packages.length)}%)`,
                width: `${packages.length * 30}%`,
            }}
        >
            {packages.map((pkg) => (
                <Card
                    key={pkg.id}
                    className="flex-shrink-0 bg-white rounded-xl overflow-hidden shadow-lg"
               
                >
                    <div className="relative">
                        <img
                            src={pkg.image || "/placeholder.svg"}
                            alt={pkg.title}
                            className="h-32 sm:h-40 md:h-48 object-cover"
                        />
                       
                        <div className="absolute bottom-0 md:bottom-0 left-0 md:left-0 rounded-[0_8px_8px_0] bg-[#29A4C1] px-2 md:px-3 py-1 text-xs md:text-sm">
                            <span className="text-white font-[Figtree] text-[14px] font-normal leading-[24px]">EMI starts from </span><span className="text-white font-[Figtree] text-[16px] font-semibold leading-[24px]">{pkg.price}</span>
                        </div>
                    </div>

                    <div className="p-3 md:p-6">
                        <h3 className="text-black font-[Figtree] text-[16px] font-bold leading-normal mb-2 md:mb-4">{pkg.title}</h3>

                        <div className="space-y-2 md:space-y-3">
                            <div className="flex items-center gap-2 text-[#5a5a5a]">
                                <Calendar className="h-3 w-3 md:h-4 md:w-4" />
                                <span className="text-[#5A5A5A] font-[Figtree] text-[14px] font-medium leading-[14px] uppercase">{pkg.duration}</span>
                            </div>

                            <div className="flex items-center gap-2 text-[#5a5a5a]">
                                <CheckCircle className="h-3 w-3 md:h-4 md:w-4" />
                                <span className="text-[#5A5A5A] font-[Figtree] text-[14px] font-medium leading-[14px] uppercase">{pkg.inclusions}</span>
                            </div>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    </div>
</div> */}