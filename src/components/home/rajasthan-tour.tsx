"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Calendar, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function RajasthanTourSection() {
    const [currentSlide, setCurrentSlide] = useState(0)
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
        {
            id: 5,
            title: "Jodhpur Jaisalmer",
            image: "/images/rajasthan-tour/mahal.jpg",
            price: "₹9500",
            duration: "5 NIGHTS 6 DAYS",
            inclusions: "20+ INCLUSIONS",
        },
        {
            id: 6,
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
        <div className="relative min-h-screen">
            {/* Hero Background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/images/rajasthan-tour/Rajasthan.png')",
                }}
            >
                {/* <div className="absolute inset-0 bg-black/20" /> */}
            </div>

            {/* <div className="absolute inset-0" style={{
                background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)",
            }} /> */}

            {/* <div
                className="absolute inset-0"
                style={{
                    background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)",
                }}
            /> */}

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16">
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
                        <p className="text-[var(--Primary-Blue,#1A2F46)] text-center font-['Figtree'] text-[16px] font-semibold leading-normal capitalize">Explore and discover</p>
                        <h2 className="text-[var(--Primary-Blue,#1A2F46)] text-center font-['Playfair_Display'] text-[36px] font-semibold leading-normal">
                            Rajasthan: Where Royalty Lives On
                        </h2>
                    </div>
                </div>

                {/* Packages Section */}
                <div className="w-full max-w-7xl mt-64">
                    <h2 className="text-white text-center font-[Figtree] text-[32px] font-semibold leading-normal mb-8">Most Popular in Rajasthan</h2>

                    {/* Package Cards Container */}
                    <div className="relative">
                        {/* Navigation Arrows */}
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

                        {/* Package Cards */}
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
                                        className="flex-shrink-0 rounded-[8px] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] overflow-hidden max-w-[280px]"
                                        // style={{ width: `${100 / packages.length}%` }}
                                    >
                                        <div className="relative">
                                            <img
                                                src={pkg.image || "/placeholder.svg"}
                                                alt={pkg.title}
                                                className="h-32 sm:h-40 md:h-48 object-cover p-2"
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

                        {/* Slide Indicators */}
                        {/* <div className="flex justify-center mt-6 gap-2">
                            {packages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-2 h-2 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"
                                        }`}
                                />
                            ))}
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
