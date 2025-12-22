"use client";

import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useApi } from '@/lib/use-api';
import { API_ENDPOINTS } from '@/lib/constants';
import { useEffect, useState } from 'react';



export default function DestinationFlexLayout() {
    const router = useRouter();
    const { data, loading, error, execute } = useApi<any>();
    const [destinations, setDestinations] = useState<any[]>([]);

    useEffect(() => {
        const apiUrl = `${API_ENDPOINTS.customerHome.getDestinations}?userid=0&pageno=1&pagesize=10`;
        execute(apiUrl);
    }, [execute]);

    useEffect(() => {
        if (data) {
            console.log('Destinations API data:', data);
            setDestinations(data.data || []);
        }
        if (error) {
            console.error('Destinations API error:', error);
        }
    }, [data, error]);

    const goToDestination = (groupId: number) => {
        router.push(`/destinations/${groupId}`);
    };

    // Map API data to component format
    const displayDestinations = destinations.map(dest => ({
        id: dest.groupId,
        title: dest.groupName,
        price: dest.price > 0 ? `Starting from ₹${dest.price.toLocaleString()}` : "Price on Request",
        image: dest.imageUrl
    }));

    // Add "View All Tours" card if we have destinations
    const allDestinations = destinations.length > 0
        ? [...displayDestinations, { id: 999, title: "View All Tours", price: "Get Best Deals", image: displayDestinations[0]?.image || "/images/destinations/default.jpg" }]
        : [];

    const DestinationSkeleton = () => (
        <div className="grid grid-cols-2 gap-[10px] grid-rows-[auto_auto_auto_auto_auto_auto] lg:grid-cols-6 lg:grid-rows-2 lg:gap-[15px]">
            {/* Large shimmer */}
            <div className="col-span-2 row-span-1 lg:col-span-2 lg:row-span-1 h-[250px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded-lg"></div>
            {/* Tall shimmer */}
            <div className="col-span-1 row-span-1 lg:row-start-1 lg:col-start-3 lg:col-span-2 lg:row-span-2 lg:h-[518px] h-[250px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded-lg"></div>
            {/* Small shimmers */}
            {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="col-span-1 row-span-1 h-[250px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded-lg" style={{ animationDelay: `${i * 0.1}s` }}></div>
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
            <section className="container mx-auto px-6 pb-[25px] sm:px-6 md:px-8 lg:px-[50px] mt-8 mb-4">
                {/* Header */}
                <div className="flex items-center justify-between py-10 relative md:mb-4 md:mt-2">
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
                            <p className="text-[#1A2F46] text-center font-['Figtree']  text-[14px] md:text-[16px] font-semibold leading-normal capitalize">Explore our destinations</p>
                            <h2 className="text-[#1A2F46] text-center font-['Playfair_Display'] text-[28px] md:text-[36px] font-semibold leading-normal">
                                Destinations That Stay With You
                            </h2>
                        </div>
                    </div>
                </div>

                {loading ? (
                    <DestinationSkeleton />
                ) : (
                    <div className="grid grid-cols-2 gap-[10px] grid-rows-[auto_auto_auto_auto_auto_auto] lg:grid-cols-6 lg:grid-rows-2 lg:gap-[15px] ">

                        <div className="relative col-span-2 row-span-1 lg:col-span-2 lg:row-span-1 h-[250px] overflow-hidden rounded-lg group">
                            <div>
                                <Image
                                    src={allDestinations[0]?.image || "/images/destinations/default.jpg"}
                                    alt={`${allDestinations[0]?.title || "Destination"} destination`}
                                    fill
                                    loading="lazy"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover rounded-lg cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-105"
                                />

                                {/* Text overlay */}
                                <div className="absolute bottom-3 left-3 text-white flex flex-col gap-1 transition-all duration-300">
                                    <h3 className="font-['Figtree'] text-[16px] md:text-[20px] font-semibold leading-normal transition-transform duration-300 group-hover:-translate-y-1">
                                        {allDestinations[0]?.title}
                                    </h3>
                                    <p className="font-['Figtree'] text-[11px] md:text-[14px] font-normal leading-normal uppercase transition-transform duration-300 group-hover:-translate-y-1">
                                        {allDestinations[0]?.price}
                                    </p>
                                    <div className="mt-0 flex gap-2 items-center opacity-0 text-[12px] md:text-[14px] font-normal leading-normal transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 -translate-y-2 cursor-pointer group-hover:text-[#E97737]" onClick={() => goToDestination(allDestinations[0]?.id)}>
                                        <span className="group-hover:text-[#E97737]">View Packages</span>
                                        <svg className="w-4 h-4 md:w-4 md:h-4 lg:w-4 lg:h-4 cursor-pointer transition-transform duration-300 ease-in-out text-white group-hover:-rotate-45 group-hover:bg-[#E97737] group-hover:text-white group-hover:rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 19" fill="none">
                                            <circle className="group-hover:[stroke-width:0]" cx="9" cy="9" r="8.5" stroke="currentColor" strokeWidth="1" fill="none" />
                                            <path d="M11.581 9.3599H4.80006V8.6399H11.581L8.84682 5.9057L9.36006 5.3999L12.9601 8.9999L9.36006 12.5999L8.84682 12.0941L11.581 9.3599Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                </div>
                                {/* </Link> */}
                            </div>
                        </div>


                        {/* 2nd image (big vertical span) */}
                        <div className="relative col-span-1 row-span-1 lg:row-start-1 lg:col-start-3 lg:col-span-2 lg:row-span-2 lg:h-[518px] h-[250px] overflow-hidden rounded-lg group">
                            {/* <Link href={''}> */}
                            <Image src={allDestinations[1]?.image || "/images/destinations/default.jpg"} alt={`${allDestinations[1]?.title || "Destination"} destination`} fill loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover rounded-lg cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-105" />
                            <div className="absolute bottom-3 left-3 text-white flex flex-col gap-1 transition-all duration-300">
                                <h3 className="font-['Figtree'] text-[16px] md:text-[20px] font-semibold leading-normal transition-transform duration-300 group-hover:-translate-y-1">
                                    {allDestinations[1]?.title}
                                </h3>
                                <p className="font-['Figtree'] text-[11px] md:text-[14px] font-normal leading-normal uppercase transition-transform duration-300 group-hover:-translate-y-1">
                                    {allDestinations[1]?.price}
                                </p>
                                <div className="mt-0 flex gap-2 items-center opacity-0 text-[12px] md:text-[14px] font-normal leading-normal transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 -translate-y-2 cursor-pointer group hover:text-[#E97737]" onClick={() => goToDestination(allDestinations[1]?.id)}>
                                    <span className="group-hover:text-[#E97737]">View Packages</span>
                                    <svg className="w-4 h-4 md:w-4 md:h-4 lg:w-4 lg:h-4 cursor-pointer transition-transform duration-300 ease-in-out text-white group-hover:-rotate-45 group-hover:bg-[#E97737] group-hover:text-white group-hover:rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 19" fill="none">
                                        <circle className="group-hover:[stroke-width:0]" cx="9" cy="9" r="8.5" stroke="currentColor" strokeWidth="1" fill="none" />
                                        <path d="M11.581 9.3599H4.80006V8.6399H11.581L8.84682 5.9057L9.36006 5.3999L12.9601 8.9999L9.36006 12.5999L8.84682 12.0941L11.581 9.3599Z" fill="currentColor" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Remaining destination cards */}
                        {allDestinations.slice(2).map((destination, index) => (
                            <div key={destination.id} className={`relative ${index === 1 ? 'col-span-2 row-span-2 lg:col-span-1 lg:row-span-1' : 'col-span-1 row-span-1'} h-[250px] overflow-hidden rounded-lg group`}>
                                <Image src={destination.image} alt={`${destination.title} destination`} fill loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover rounded-lg cursor-pointer group-hover:scale-105 transform-transition duration-300 ease-in-out" />
                                <div className="absolute bottom-3 left-3 text-white flex flex-col gap-1 transition-all duration-300">
                                    <h3 className="font-['Figtree'] text-[16px] md:text-[20px] font-semibold leading-normal transition-transform duration-300 group-hover:-translate-y-1">
                                        {destination.title}
                                    </h3>
                                    <p className="font-['Figtree'] text-[11px] md:text-[14px] font-normal leading-normal uppercase transition-transform duration-300 group-hover:-translate-y-1">
                                        {destination.price}
                                    </p>
                                    <div className="mt-0 flex gap-2 items-center opacity-0 text-[12px] md:text-[14px] font-normal leading-normal transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 -translate-y-2 cursor-pointer group-hover:text-[#E97737]" onClick={() => destination.id === 999 ? router.push('/destinations') : goToDestination(destination.id)}>
                                        <span className="group-hover:text-[#E97737]">View Packages</span>
                                        <svg className="w-4 h-4 md:w-4 md:h-4 lg:w-4 lg:h-4 cursor-pointer transition-transform duration-300 ease-in-out text-white group-hover:-rotate-45 group-hover:bg-[#E97737] group-hover:text-white group-hover:rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 19" fill="none">
                                            <circle className="group-hover:[stroke-width:0]" cx="9" cy="9" r="8.5" stroke="currentColor" strokeWidth="1" fill="none" />
                                            <path d="M11.581 9.3599H4.80006V8.6399H11.581L8.84682 5.9057L9.36006 5.3999L12.9601 8.9999L9.36006 12.5999L8.84682 12.0941L11.581 9.3599Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </>
    );
} 
