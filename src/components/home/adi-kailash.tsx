'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, CheckCircle, MapPin } from "lucide-react"
import { Separator } from "@radix-ui/react-separator"
import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useApi } from '@/lib/use-api';
import { API_ENDPOINTS } from '@/lib/constants';

interface ADIKailashPackage {
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

export default function ADIKailashPage() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const { data, loading, error, execute } = useApi<any>();
    const [adikailashPackages, setAdKailashPackages] = useState<ADIKailashPackage[]>([]);

    useEffect(() => {
        const apiUrl = `${API_ENDPOINTS.customerHome.getTrendingPackages}?userid=0&pageno=1&pagesize=10`;
        execute(apiUrl);
    }, [execute]);

    useEffect(() => {
        if (data) {
            console.log('ADI Kailash Packages API data:', data);
            if (data.data) {
                const filteredPackages = data.data.filter((pkg: ADIKailashPackage) => 
                    pkg.groupName === "Adi Kailash"
                );
                setAdKailashPackages(filteredPackages);
            }
        }
        if (error) {
            console.error('Kailash Packages API error:', error);
        }
    }, [data, error, loading]);

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

    const navigateToPackages = () => {
        router.push("/listing");
    };

    const navigateToPackageDetails = () => {
        router.push("/details");
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
            <style jsx>{`
                @keyframes shimmer {
                    0% { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }
            `}</style>

            <section className="relative max-w-[1920px] mx-auto mt-[75px] pt-[50px] mb-[500px]">
                {/* Hero Section */}
                <div className="relative w-full min-h-[650px] bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('/images/kailash-mansarovar/kailash-mansarovar.jpg')`,
                    }}
                >
                    {/* Gradient Overlays */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "linear-gradient(181.11deg, #FFFFFF 2.87%, rgba(243, 250, 255, 0.812144) 9.08%, rgba(231, 246, 255, 0.638386) 14.82%, rgba(196, 231, 255, 0.1) 32.61%, rgba(0, 0, 0, 0) 84.86%)",
                        }}
                    />

                    <div
                        className="absolute left-0 top-0 w-1/3 h-full"
                        style={{
                            background: "linear-gradient(90deg, #FFFFFF 2.67%, rgba(255, 255, 255, 0) 84.05%)",
                        }}
                    />

                    <div
                        className="absolute right-0 top-0 w-1/3 h-full"
                        style={{
                            background: "linear-gradient(270deg, #FFFFFF 4.2%, rgba(255, 255, 255, 0) 84.1%)",
                        }}
                    />

                    {/* Content */}
                    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-10 relative mb-4 mt-2">
                        <div className="relative flex-1 text-center">
                            <div className="absolute left-1/2 -translate-x-1/2 -top-6" style={{ top: '-40px' }}>
                                <img
                                    src="/images/trendingpackages/titledesign.svg"
                                    alt="Title Circle"
                                    width={150}
                                    height={150}
                                    className="mx-auto"
                                />
                            </div>

                            <div className="relative">
                                <p className="text-[#1A2F46] text-center font-['Figtree'] text-[14px] md:text-[16px] font-semibold leading-normal capitalize">Walk the Sacred Circle</p>
                                <h2 className="text-[#1A2F46] text-center font-['Playfair_Display'] text-[28px] md:text-[36px] font-semibold leading-normal">
                                    ADI Kailash: The Journey of a Lifetime
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="container mx-auto flex flex-col items-center gap-8">
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
                                <span className="">EXPLORE ADI KAILASH TRIPS</span>
                            </span>

                            <div className="ml-1 w-5 h-5 bg-white rounded-full flex items-center justify-center border border-[#E97737] group-hover:-rotate-45 transition-transform duration-300 ease-in-out">
                                <ArrowRight className="w-2.5 h-2.5 text-[#E97737]" />
                            </div>
                        </Button>
                    </div>
                </div>

                {/* Packages Section */}
                <div className="absolute left-0 right-0 z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 top-[65%]">
                    <h2 className="font-semibold mb-8 sm:mb-12 text-center">
                        <span className="text-white text-center font-['Figtree'] text-[24px] md:text-[32px] font-semibold leading-normal">ADI KAILASH YATRA 2025 Packages</span>
                    </h2>

                    <div className="slider-wrp">
                        <div
                            ref={scrollRef}
                            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide no-scrollbar"
                        >
                            {loading || adikailashPackages.length === 0 ? (
                                <PackagesSkeleton />
                            ) : (
                                adikailashPackages.map((pkg) => (
                                    <Card key={pkg.packageId} className="min-w-[300px] max-w-[320px] flex-shrink-0 rounded-xl group">
                                        <div className="relative overflow-hidden rounded-t-xl h-48">
                                            <img
                                                src={pkg.imageUrl || "/images/kailash-mansarovar/Mount-Kailash.png"}
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
                                    </Card>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}