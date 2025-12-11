"use client"

import { ArrowRight } from "lucide-react"
import { Calendar, MapPin, CheckCircle } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@radix-ui/react-separator"
import { useRouter } from "next/navigation"

export default function HomePage() {
    const packages = [
        {
            title: "Char Dham Yatra By Helicopter From Dahradun",
            price: "₹9500",
            duration: "11 NIGHTS 12 DAYS",
            inclusions: "20+ INCLUSIONS",
            pickup: "PICK UP: LUCKNOW",
            imageUrl: "/images/char-dham/Char_Dham_bg.png",
            imageQuery: "helicopter flying over mountains with temples",
        },
        {
            title: "Char Dham Yatra By Helicopter From Dahradun",
            price: "₹9500",
            duration: "11 NIGHTS 12 DAYS",
            inclusions: "20+ INCLUSIONS",
            pickup: "PICK UP: LUCKNOW",
            imageUrl: "/images/char-dham/Char_Dham_bg.png",
            imageQuery: "aerial view of holy city with river and temples",
        },
        {
            title: "Kedarnath, Tungnath and Badrinath Yatra from Haridwar",
            price: "₹9600",
            duration: "11 NIGHTS 12 DAYS",
            inclusions: "20+ INCLUSIONS",
            pickup: "PICK UP: LUCKNOW",
            imageUrl: "/images/char-dham/Char_Dham_bg.png",
            imageQuery: "illuminated temple at night with snow mountains",
        },
        {
            title: "Char Dham Yatra By Helicopter From Dahradun",
            price: "₹9500",
            duration: "11 NIGHTS 12 DAYS",
            inclusions: "20+ INCLUSIONS",
            pickup: "PICK UP: LUCKNOW",
            imageUrl: "/images/char-dham/Char_Dham_bg.png",
            imageQuery: "mountain road with snow peaks and pilgrimage tents",
        },
    ]

    const router = useRouter();

    const navigateToPackages = () => {
        router.push("/listing"); //need to add dynamic routing later
    };

    const navigateToPackageDetails = () => {
        router.push("/details"); //need to add dynamic routing later
    };

    return (
        <div
            className="flex flex-col lg:flex-row relative"
            style={{
                backgroundImage: "url('/images/char-dham/Char_Dham_bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        > {/**min-h-screen */}
            {/* Background overlay for the entire section */}
            <div className="absolute inset-0 bg-black/40" />

            <div className="container mx-auto px-4 flex flex-col lg:flex-row relative md:gap-10 lg:gap-16 ">
                {/* Left Panel */}
                <div className="w-full lg:w-1/4 relative overflow-hidden">{/**md:min-h-[50vh] lg:min-h-screen */}
                    <div className="relative z-10 h-full flex flex-col justify-center px-2 sm:px-2 md:px-4 py-8 lg:py-0 text-white">
                        <div className="max-w-md lg:mx-0">
                            <p className="opacity-90 font-['Figtree'] text-[14px] md:text-[16px] font-semibold leading-normal">Spiritually Enriching</p>
                            <h1 className="mb-6 lg:mb-8 text-balance text-white font-['Playfair_Display'] text0[28px] md:text-[36px] font-semibold leading-normal">
                                Char Dham Yatra
                            </h1>

                            <div className="space-y-3 sm:space-y-4 mb-6 lg:mb-8">
                                <div className="flex flex-row lg:flex-col gap-4 w-full">
                                    <Button
                                        className="rounded-[10px] bg-[#E97737] flex items-center flex-1 p-4 group cursor-pointer"
                                    // size="sm"
                                    >
                                        <span className="text-white font-['Figtree'] text-[14px] md:text-[18px] font-semibold leading-normal uppercase">BY HELICOPTER</span>
                                        {/* <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" /> */}
                                        <svg className="hidden lg:block w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 19" fill="none">
                                            <path d="M1.05325 1.06799L9.16525 9.06799L1.05325 17.068" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                                        </svg>
                                    </Button>

                                    <Button
                                        variant="outline"
                                        className="rounded-[10px] bg-[#fff] flex items-center flex-1 p-4  group cursor-pointer hover:border-0 transform transition-transform duration-300 ease-out
                                         bg-[linear-gradient(90deg,_#E97737_0%,_#E97737_50%,_transparent_50%)] 
             bg-[length:200%_100%] bg-[position:100%_0] 
             transition-[background-position] duration-300 ease-out
             hover:bg-[position:0_0]"
                                    // size="sm"
                                    >
                                        <span className="text-[#1A2F46] font-['Figtree'] text-[14px] md:text-[18px] font-medium leading-normal uppercase group-hover:text-white group-hover:scale-102 transform transition-transform duration-300 ease-out">BY ROAD</span>
                                        {/* <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#1A2F46]" /> */}
                                        <svg className="hidden lg:block w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 group-hover:text-white text-[#1A2F46] transform transition-transform duration-300 ease-out group-hover:translate-x-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 19" fill="none">
                                            <path d="M1.05325 1.06799L9.16525 9.06799L1.05325 17.068" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
                                        </svg>
                                    </Button>
                                </div>
                            </div>

                            <div className="hidden lg:block">
                                <Button
                                    variant="outline"
                                    className="group bg-transparent flex items-center rounded-[6px] border border-white hover:border-0 cursor-pointer
    bg-[linear-gradient(90deg,_#E97737_0%,_#E97737_50%,_transparent_50%)] 
    bg-[length:200%_100%] bg-[position:100%_0] 
    transition-[background-position] duration-300 ease-out
    hover:bg-[position:0_0]" onClick={navigateToPackages}
                                >
                                    <div className="flex flex-row gap-2 items-center">
                                        <span className="text-white font-['Figtree'] text-[14px] md:text-sm font-semibold uppercase group-hover:text-white">
                                            View All
                                        </span>
                                        <svg
                                            className="w-4 h-4 md:w-5 lg:w-6 cursor-pointer transition-transform duration-300 ease-in-out text-white group-hover:-rotate-45 group-hover:text-[#E97737] group-hover:bg-white group-hover:rounded-full"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                        >
                                            <circle
                                                className="group-hover:[stroke-width:0]"
                                                cx="10"
                                                cy="10"
                                                r="9.5"
                                                stroke="currentColor"
                                                strokeWidth="1"
                                                fill="none"
                                            />
                                            <path
                                                d="M12.8677 10.4H5.33331V9.6H12.8677L9.82971 6.562L10.4 6L14.4 10L10.4 14L9.82971 13.438L12.8677 10.4Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </div>
                                </Button>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Right Panel - Package Cards */}
                <div className="w-full lg:w-3/4 relative z-10 py-4 sm:py-6 lg:py-8">
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-2 sm:gap-2 md:gap-6 h-full">
                        {/* First column */}
                        <div className="space-y-4 sm:space-y-6">
                            <TravelPackageCard
                                title={packages[0].title}
                                price={packages[0].price}
                                duration={packages[0].duration}
                                inclusions={packages[0].inclusions}
                                pickup={packages[0].pickup}
                                imageUrl={packages[0].imageUrl}
                                imageQuery={packages[0].imageQuery}
                                onClick={navigateToPackageDetails}
                            />
                            <TravelPackageCard
                                title={packages[2].title}
                                price={packages[2].price}
                                duration={packages[2].duration}
                                inclusions={packages[2].inclusions}
                                pickup={packages[2].pickup}
                                imageUrl={packages[2].imageUrl}
                                imageQuery={packages[2].imageQuery}
                                onClick={navigateToPackageDetails}
                            />
                        </div>

                        {/* Second column with responsive offset */}
                        <div className="space-y-4 sm:space-y-6 mt-4 md:mt-8 lg:mt-12">
                            <TravelPackageCard
                                title={packages[1].title}
                                price={packages[1].price}
                                duration={packages[1].duration}
                                inclusions={packages[1].inclusions}
                                pickup={packages[1].pickup}
                                imageUrl={packages[1].imageUrl}
                                imageQuery={packages[1].imageQuery}
                                onClick={navigateToPackageDetails}
                            />
                            <TravelPackageCard
                                title={packages[3].title}
                                price={packages[3].price}
                                duration={packages[3].duration}
                                inclusions={packages[3].inclusions}
                                pickup={packages[3].pickup}
                                imageUrl={packages[3].imageUrl}
                                imageQuery={packages[3].imageQuery}
                                onClick={navigateToPackageDetails}
                            />
                        </div>
                    </div>
                </div>

                {/* View All button Mobile view */}
                <div className="flex items-center justify-center gap-2 lg:hidden py-4">
                    <Button variant="outline" className="group relative rounded-[6px] border border-[#E97737] mt-1 cursor-pointer
                    bg-[linear-gradient(90deg,_#E97737_0%,_#E97737_50%,_transparent_50%)] 
             bg-[length:200%_100%] bg-[position:100%_0] 
             transition-[background-position] duration-300 ease-out
             hover:bg-[position:0_0]" onClick={navigateToPackages}>
                        <span className="text-[#E97737] font-['Figtree'] text-[14px] md:text-sm font-semibold uppercase group-hover:text-white">View All</span>
                        <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 cursor-pointer transition-transform duration-300 ease-in-out text-[#E97737] group-hover:-rotate-45 group-hover:bg-white group-hover:rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                            <circle className="group-hover:[stroke-width:0]" cx="10" cy="10" r="9.5" stroke="currentColor" strokeWidth="1" fill="none" />
                            <path d="M12.8677 10.4H5.33331V9.6H12.8677L9.82971 6.562L10.4 6L14.4 10L10.4 14L9.82971 13.438L12.8677 10.4Z" fill="currentColor" />
                        </svg>
                    </Button>
                </div>
            </div>
        </div>
    )
}


interface TravelPackageCardProps {
    title: string
    price: string
    duration: string
    inclusions: string
    pickup: string
    imageUrl: string
    imageQuery: string
    onClick?: () => void 
}

function TravelPackageCard({
    title,
    price,
    duration,
    inclusions,
    pickup,
    imageUrl,
    imageQuery,
    onClick
}: TravelPackageCardProps) {
    return (
        <Card className="h-auto md:h-auto lg:h-auto overflow-hidden bg-white rounded-lg md:rounded-xl shadow-lg transition-shadow duration-300 gap-1 sm:gap-2 md:gap-3 group cursor-pointer" onClick={onClick}> {/**h-[220px] sm:h-[280px] md:h-[380px] */}
            <div className="relative p-1 md:p-2">
                <img src={imageUrl || "/placeholder.svg"} alt={imageQuery} className="w-full h-[90px] sm:h-[120px] md:h-[260px] object-cover rounded-[4px] md:rounded-xl" />
                <div className="absolute bottom-0 left-0 sm:bottom-0 sm:left-0 bg-[#29a4c1] px-2 py-1 sm:px-2 sm:py-1 rounded-[0_8px_8px_0] bg-[#29A4C1]">
                    <span className="text-white font-['Figtree'] text-[10px] md:text-[14px] font-normal leading-[24px]">EMI starts from </span><span className="text-white font-['Figtree'] text-[10px] md:text-[16px] font-semibold leading-[24px]">{price}</span>
                </div>
            </div>

            <div className="p-2 sm:p-4">
                <div className="flex items-start justify-between mb-2 sm:mb-3">
                    <h3 className="text-black font-['Figtree'] text-[12px] md:text-[20px] font-bold leading-normal flex-1 pr-2">
                        {title}
                    </h3>
                    <button className="flex-shrink-0 w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 rounded-full flex items-center justify-center transition-colors">
                        {/* <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#e97737] group-hover:text-white transition-colors" /> */}
                        <svg className="cursor-pointer transition-transform duration-300 ease-in-out text-[#E97737] group-hover:-rotate-45 group-hover:text-white group-hover:bg-[#e97737] group-hover:rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                            <circle className="group-hover:[stroke-width:0]" cx="10" cy="10" r="9.5" stroke="currentColor" strokeWidth="1" fill="none" />
                            <path d="M12.8677 10.4H5.33331V9.6H12.8677L9.82971 6.562L10.4 6L14.4 10L10.4 14L9.82971 13.438L12.8677 10.4Z" fill="currentColor" />
                        </svg>
                    </button>
                </div>

                <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center flex-wrap gap-1 md:gap-4">
                        <div className="flex items-center gap-1 md:gap-2"><Calendar className="h-4 w-4 mr-0 md:mr-2" /><span className="text-[10px] md:text-[14px] text-[#5A5A5A] font-['Figtree'] font-medium leading-[14px] uppercase">{duration}</span></div>
                        <Separator orientation="vertical" className="ml-2 mr-2 !h-[14px] w-px bg-[#BBB] border border-[#BBB]" />
                        <div className="flex items-center gap-1 md:gap-2"><CheckCircle className="h-4 w-4 mr-0 md:mr-2" /><span className="text-[10px] md:text-[14px] text-[#5A5A5A] font-['Figtree'] font-medium leading-[14px] uppercase">{inclusions}</span></div>
                        <Separator orientation="vertical" className="ml-2 mr-2 !h-[14px] w-px bg-[#BBB] border border-[#BBB]" />
                        <div className="flex items-center gap-1 md:gap-2"><MapPin className="h-4 w-4 mr-0 md:mr-2" /><span className="text-[10px] md:text-[14px] text-[#5A5A5A] font-['Figtree'] font-medium leading-[14px] uppercase">{pickup}</span></div>
                    </div>
                </div>
            </div>
        </Card>
    )
}