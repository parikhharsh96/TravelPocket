"use client";

import { useRef, useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Calendar, CheckCircle, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator"
import { useRouter } from "next/navigation";
import { useApi } from '@/lib/use-api';
import { API_ENDPOINTS } from '@/lib/constants';

interface TrendingPackage {
    groupId: number;
    groupName: string;
    groupDescription: string;
    packageId: number;
    title: string;
    duration: string;
    tag: string;
    groupSize: string;
    departure: string;
    price: number;
    mrp: number;
    imageUrl: string;
    emiAmount: number;
    inclusionCaption: string;
}

export default function TrendingPackages() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const { data, loading, error, execute } = useApi<any>();
    const [trendingPackages, setTrendingPackages] = useState<TrendingPackage[]>([]);

    useEffect(() => {
        execute(API_ENDPOINTS.customerHome.getTrendingPackages);
    }, [execute]);

    useEffect(() => {
        if (data) {
            console.log('Trending Packages API data:', data);
            if (data.data) {
                setTrendingPackages(data.data);
            }
        }
        if (error) {
            console.error('Trending Packages API error:', error);
        }
    }, [data, error]);

    const navigateToAllDestinations = () => {
        router.push("/listing");
    }

    const navigateToPackageDetails = () => {
        console.log("Navigating to package details...");
        router.push("/details");
    }

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { clientWidth } = scrollRef.current;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -clientWidth : clientWidth,
                behavior: "smooth",
            });
        }
    };

    const PackagesSkeleton = () => (
        <div className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide no-scrollbar">
            {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="min-w-[300px] max-w-[320px] flex-shrink-0 rounded-xl">
                    <div className="h-48 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded-t-xl" style={{ animationDelay: `${i * 0.1}s` }}></div>
                    <div className="p-4 space-y-3">
                        <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded" style={{ animationDelay: `${i * 0.1}s` }}></div>
                        <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded" style={{ animationDelay: `${i * 0.1}s` }}></div>
                        <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded w-3/4" style={{ animationDelay: `${i * 0.1}s` }}></div>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <>
            <style jsx>{`
                @keyframes shimmer {
                    0% { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }
            `}</style>
            <section className="container mx-auto px-6 pb-[25px] sm:px-6 md:px-8 lg:px-[50px] mt-8 mb-4"> {/**max-w-[1920px] */}
                {/* Header */}
                <div className="flex flex-col md:flex-row items-center justify-between py-10 relative md:mb-4 md:mt-2">
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
                            <p className="text-[var(--Primary-Blue,#1A2F46)] text-center font-['Figtree'] text-[14px] md:text-[16px] font-semibold leading-normal capitalize">Most Popular</p>
                            <h2 className="text-[var(--Primary-Blue,#1A2F46)] text-center font-['Playfair_Display'] text-[28px] md:text-[36px] font-semibold leading-normal">
                                Trending Packages of 2025
                            </h2>
                        </div>
                    </div>

                    {/* View All button (aligned right) */}
                    <Button variant="outline" className="group hidden md:block rounded-[6px] border border-[#E97737] ml-0 mt-6 md:ml-6 md:mt-0 cursor-pointer
                    bg-[linear-gradient(90deg,_#E97737_0%,_#E97737_50%,_transparent_50%)] 
             bg-[length:200%_100%] bg-[position:100%_0] 
             transition-[background-position] duration-300 ease-out
             hover:bg-[position:0_0]" onClick={navigateToAllDestinations}>
                        <div className="flex flex-row gap-2 items-center">
                            <span className="text-[#E97737] font-['Figtree'] text-[14px] md:text-sm font-semibold uppercase group-hover:text-white">View All</span>
                            <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 cursor-pointer transition-transform duration-300 ease-in-out text-[#E97737] group-hover:-rotate-45 group-hover:bg-white group-hover:rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                                <circle className="group-hover:[stroke-width:0]" cx="10" cy="10" r="9.5" stroke="currentColor" strokeWidth="1" fill="none" />
                                <path d="M12.8677 10.4H5.33331V9.6H12.8677L9.82971 6.562L10.4 6L14.4 10L10.4 14L9.82971 13.438L12.8677 10.4Z" fill="currentColor" />
                            </svg>
                        </div>
                    </Button>
                </div>
                {/* Slider */}
                <div className="hidden md:block relative px-[50px]">
                    {/* Left Arrow */}
                    <button
                        onClick={() => scroll("left")}
                        className="hidden md:block absolute left-[0px] top-1/2 -translate-y-1/2 shadow-md rounded-full p-2 z-10"
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
                            {loading ? (
                                <PackagesSkeleton />
                            ) : (
                                trendingPackages.map((pkg, index) => (
                                    <Card key={pkg.packageId} className="min-w-[300px] max-w-[320px] flex-shrink-0 rounded-xl group">
                                        <div className="relative overflow-hidden rounded-t-xl h-48">
                                            <img
                                                src={pkg.imageUrl || "/images/trendingpackages/dummy_card_img.png"}
                                                alt={pkg.groupName}
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
                                            <div className="flex flex-col items-start gap-[12px] h-[165px]">
                                                <div className="flex flex-col items-start gap-[10px]">
                                                    <h3 className="text-[#333] font-['Figtree'] text-[16px] md:text-[20px] font-semibold leading-normal">{pkg.groupName}</h3>
                                                    <p className="text-[#333] font-['Figtree'] text-[12px] md:text-[16px] font-normal leading-[22px]">{pkg.title}</p>
                                                </div>

                                                <div className="flex py-[2px] items-center content-center gap-[10px] flex-wrap">
                                                    {/* Info Row */}
                                                    <Calendar className="h-4 w-4" /> <span className="text-[#5A5A5A] font-[Figtree] text-[10px] md:text-[14px] font-medium leading-[14px] uppercase">{pkg.duration}</span>
                                                    <Separator orientation="vertical" className="!h-[14px] w-px bg-[#BBB] border border-[#BBB]" />
                                                    <CheckCircle className="h-4 w-4" /> <span className="text-[#5A5A5A] font-[Figtree] text-[10px] md:text-[14px] font-medium leading-[14px] uppercase">{pkg.inclusionCaption}</span>
                                                    <Separator orientation="vertical" className="!h-[14px] w-px bg-[#BBB] border border-[#BBB]" />
                                                    <MapPin className="h-4 w-4" /> <span className="text-[#5A5A5A] font-[Figtree] text-[10px] md:text-[14px] font-medium leading-[14px] uppercase">{pkg.departure}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-[6px]">
                                                <p className="text-[#333333] font-['Figtree'] text-[12px] md:text-[16px] font-normal leading-[24px]">
                                                    EMI starts from <span className="text-[#333333] font-['Figtree'] text-[16px] md:text-[22px] font-semibold leading-[24px]">₹{pkg.emiAmount}</span>
                                                </p>
                                            </div>
                                        </CardContent>
                                        {/* <CardFooter> */}
                                        {/* Buttons */}
                                        <div className="flex flex-col md:flex-row lg:flex-row gap-4">
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
                                )))}
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

                {/** Mobile Layout */}
                <div className="md:hidden py-4">
                    {/* Cards */}
                    <div
                        className="flex gap-6 items-center overflow-x-auto scroll-smooth scrollbar-hide no-scrollbar"
                    >
                        {loading ? (
                            <PackagesSkeleton />
                        ) : (
                            trendingPackages.map((pkg, index) => (
                                <Card key={pkg.packageId} className="min-w-[300px] max-w-[320px] flex-shrink-0 rounded-xl">
                                    <div className="relative">
                                        <img
                                            src={pkg.imageUrl || "/images/trendingpackages/dummy_card_img.png"}
                                            alt={pkg.groupName}
                                            className="w-full h-48 object-cover rounded-t-xl"
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
                                        <div className="flex flex-col items-start gap-[12px] h-[135px]">
                                            <div className="flex flex-col items-start gap-[10px]">
                                                <h3 className="text-[#333] font-['Figtree'] text-[16px] md:text-[20px] font-semibold leading-normal">{pkg.groupName}</h3>
                                                <p className="text-[#333] font-['Figtree'] text-[12px] md:text-[16px] font-normal leading-[22px]">{pkg.title}</p>
                                            </div>

                                            <div className="flex py-[2px] items-center content-center gap-[10px] flex-wrap">
                                                {/* Info Row */}
                                                <Calendar className="h-4 w-4" /> <span className="text-[#5A5A5A] font-[Figtree] text-[10px] md:text-[14px] font-medium leading-[14px] uppercase">{pkg.duration}</span>
                                                <Separator orientation="vertical" className="!h-[14px] w-px bg-[#BBB] border border-[#BBB]" />
                                                <CheckCircle className="h-4 w-4" /> <span className="text-[#5A5A5A] font-[Figtree] text-[10px] md:text-[14px] font-medium leading-[14px] uppercase">{pkg.inclusionCaption}</span>
                                                <Separator orientation="vertical" className="!h-[14px] w-px bg-[#BBB] border border-[#BBB]" />
                                                <MapPin className="h-4 w-4" /> <span className="text-[#5A5A5A] font-[Figtree] text-[10px] md:text-[14px] font-medium leading-[14px] uppercase">{pkg.departure}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-[6px]">
                                            <p className="text-[#333333] font-['Figtree'] text-[12px] md:text-[16px] font-normal leading-[24px]">
                                                EMI starts from <span className="text-[#333333] font-['Figtree'] text-[16px] md:text-[22px] font-semibold leading-[24px]">₹{pkg.emiAmount}</span>
                                            </p>
                                        </div>
                                    </CardContent>
                                    {/* <CardFooter> */}
                                    {/* Buttons */}
                                    <div className="flex flex-col md:flex-row lg:flex-row gap-4">
                                        <Button variant="outline" className="flex-1 shrink-0 cursor-pointer" onClick={navigateToPackageDetails}>
                                            <span className="text-[#1A2F46] text-center font-['Figtree'] text-[11px] md:text-[14px] font-medium uppercase leading-normal">View Details</span>
                                        </Button>
                                        <Button variant="outline" className="flex-1 shrink-0 cursor-pointer" onClick={navigateToPackageDetails}>
                                            <span className="text-[#E97737] text-center font-['Figtree'] text-[11px] md:text-[14px] font-medium uppercase leading-normal">Book Now</span>
                                        </Button>
                                    </div>
                                    {/* </CardFooter> */}
                                </Card>
                            )))}
                        )
                    </div>
                </div>

                {/* View All button Mobile view */}
                <div className="flex items-center justify-center gap-2 md:hidden">
                    <Button variant="outline" className="group relative rounded-[6px] border border-[#E97737] mt-1 cursor-pointer
                    bg-[linear-gradient(90deg,_#E97737_0%,_#E97737_50%,_transparent_50%)] 
             bg-[length:200%_100%] bg-[position:100%_0] 
             transition-[background-position] duration-300 ease-out
             hover:bg-[position:0_0]" onClick={navigateToAllDestinations}>
                        <span className="text-[#E97737] font-['Figtree'] text-[14px] md:text-sm font-semibold uppercase group-hover:text-white">View All</span>
                        <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 cursor-pointer transition-transform duration-300 ease-in-out text-[#E97737] group-hover:-rotate-45 group-hover:bg-white group-hover:rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                            <circle className="group-hover:[stroke-width:0]" cx="10" cy="10" r="9.5" stroke="currentColor" strokeWidth="1" fill="none" />
                            <path d="M12.8677 10.4H5.33331V9.6H12.8677L9.82971 6.562L10.4 6L14.4 10L10.4 14L9.82971 13.438L12.8677 10.4Z" fill="currentColor" />
                        </svg>
                    </Button>
                </div>
            </section>
        </>
    );
}