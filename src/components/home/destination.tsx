"use client";

import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useApi } from '@/lib/use-api';
import { API_ENDPOINTS } from '@/lib/constants';
import { useEffect, useState } from 'react';

const destinations1 = [
    { id: 1, title: "Kailash Mansarovar", price: "Starting from ₹99,000", image: "/images/destinations/19258d7685b00892b6dc1014baa2968860d17aee.jpg", href: "/destinations/kailash" },
    { id: 2, title: "Kedarnath", price: "Starting from ₹99,000", image: "/images/destinations/19258d7685b00892b6dc1014baa2968860d17aee.jpg", href: "/destinations/kedarnath" },
    { id: 3, title: "Adi Kailash Om Parvat", price: "Starting from ₹99,000", image: "/images/destinations/19258d7685b00892b6dc1014baa2968860d17aee.jpg", href: "/destinations/adi-kailash" },
    { id: 4, title: "Majestic Rajasthan", price: "Starting from ₹99,000", image: "/images/destinations/19258d7685b00892b6dc1014baa2968860d17aee.jpg", href: "/destinations/rajasthan" },
    { id: 5, title: "Char Dham", price: "Starting from ₹99,000", image: "/images/destinations/19258d7685b00892b6dc1014baa2968860d17aee.jpg", href: "/destinations/char-dham" },
    { id: 6, title: "Nepal Soul Trips", price: "Starting from ₹99,000", image: "/images/destinations/19258d7685b00892b6dc1014baa2968860d17aee.jpg", href: "/destinations/nepal" },
    { id: 7, title: "Do Dham", price: "Starting from ₹99,000", image: "/images/destinations/19258d7685b00892b6dc1014baa2968860d17aee.jpg", href: "/destinations/do-dham" },
    { id: 8, title: "View All Tours", price: "Get Best Deals", image: "/images/destinations/19258d7685b00892b6dc1014baa2968860d17aee.jpg", href: "/destinations" },
];

export default function DestinationFlexLayout() {
    const router = useRouter();
    const { data, loading, error, execute } = useApi<any>();
    const [destinations, setDestinations] = useState<any[]>([]);

    useEffect(() => {
        execute(API_ENDPOINTS.customerHome.getDestinations);
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

    const goToDestination = () => {
        router.push("/details"); //need to add dynamic routing later
    };

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
                {/* 1st image (big, 2 cols) */}
                {/* <div className="relative col-span-2 row-span-1 lg:col-span-2 lg:row-span-1 spect-[4/3] h-[250px] overflow-hidden rounded-lg group">
                    <Link href={''}>
                        <Image src={destinations[0].image} alt={destinations[0].title} fill className="object-cover rounded-lg cursor-pointer group-hover:scale-105 transform-transition duration-300 ease-in-out" />
                        <div className="absolute bottom-3 left-3 text-white flex flex-col gap-1 transition-all duration-300">
                            <h3 className="font-['Figtree'] text-[16px] md:text-[20px] font-semibold leading-normal transition-transform duration-300 group-hover:-translate-y-1">{destinations[0].title}</h3>
                            <p className="font-['Figtree'] text-[11px] md:text-[14px] font-normal leading-normal uppercase transition-transform duration-300 group-hover:-translate-y-1">{destinations[0].price}</p>
                        </div>
                    </Link>
                </div> */}

                <div className="relative col-span-2 row-span-1 lg:col-span-2 lg:row-span-1 h-[250px] overflow-hidden rounded-lg group">
                    {/* <Link href={destinations[0].href}> */}
                    {/* Image zoom on hover */}
                    <div>
                        <Image
                            src={destinations1[0].image}
                            alt={`${destinations1[0].title} destination`}
                            fill
                            loading="lazy"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover rounded-lg cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-105"
                        />

                        {/* Text overlay */}
                        <div className="absolute bottom-3 left-3 text-white flex flex-col gap-1 transition-all duration-300">
                            {/* Main title moves slightly upward on hover */}
                            <h3 className="font-['Figtree'] text-[16px] md:text-[20px] font-semibold leading-normal transition-transform duration-300 group-hover:-translate-y-1">
                                {destinations1[0].title}
                            </h3>

                            {/* Price stays initially visible */}
                            <p className="font-['Figtree'] text-[11px] md:text-[14px] font-normal leading-normal uppercase transition-transform duration-300 group-hover:-translate-y-1">
                                {destinations1[0].price}
                            </p>

                            {/* Additional details (hidden initially, fades in from below) */}
                            {/* <div className="flex gap-2">
                                <div className="group flex items-center gap-2 cursor-pointer bg-transparent transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 -translate-y-2">
                                    <p className="text-[#E97737] text-center font-['Figtree'] text-[11px] md:text-[14px] font-medium leading-normal uppercase group-hover:scale-101 transition-transform duration-300 ease-in-out">
                                        READ MORE
                                    </p>
                                    
                                    <svg className="w-4 h-4 md:w-6 md:h-6 lg:w-6 lg:h-6 cursor-pointer transition-transform duration-300 ease-in-out text-[#E97737] group-hover:-rotate-45 group-hover:bg-[#E97737] group-hover:text-white group-hover:rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 19" fill="none">
                                        <circle className="group-hover:[stroke-width:0]" cx="9" cy="9" r="8.5" stroke="currentColor" strokeWidth="1" fill="none" />
                                        <path d="M11.581 9.36039H4.80005V8.64039H11.581L8.84681 5.90619L9.36005 5.40039L12.96 9.00039L9.36005 12.6004L8.84681 12.0946L11.581 9.36039Z" fill="currentColor" />
                                    </svg>
                                </div>
                            </div> */}
                            <span className="opacity-0 text-[12px] md:text-[14px] font-normal leading-normal transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 -translate-y-2 cursor-pointer" onClick={goToDestination}>
                                View Packages
                            </span>
                        </div>
                        {/* </Link> */}
                    </div>
                </div>


                {/* 2nd image (big vertical span) */}
                <div className="relative col-span-1 row-span-1 lg:row-start-1 lg:col-start-3 lg:col-span-2 lg:row-span-2 lg:h-[518px] h-[250px] overflow-hidden rounded-lg group">
                    {/* <Link href={''}> */}
                        <Image src={destinations1[1].image} alt={`${destinations1[1].title} destination`} fill loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover rounded-lg cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-105" />
                        {/* Text overlay */}
                        <div className="absolute bottom-3 left-3 text-white flex flex-col gap-1 transition-all duration-300">
                            {/* Main title moves slightly upward on hover */}
                            <h3 className="font-['Figtree'] text-[16px] md:text-[20px] font-semibold leading-normal transition-transform duration-300 group-hover:-translate-y-1">
                                {destinations1[1].title}
                            </h3>

                            {/* Price stays initially visible */}
                            <p className="font-['Figtree'] text-[11px] md:text-[14px] font-normal leading-normal uppercase transition-transform duration-300 group-hover:-translate-y-1">
                                {destinations1[1].price}
                            </p>

                            {/* Additional details (hidden initially, fades in from below) */}
                            {/* <div className="flex gap-2">
                                <div className="group flex items-center gap-2 cursor-pointer bg-transparent transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 -translate-y-2">
                                    <p className="text-[#E97737] text-center font-['Figtree'] text-[11px] md:text-[14px] font-medium leading-normal uppercase group-hover:scale-101 transition-transform duration-300 ease-in-out">
                                        READ MORE
                                    </p>
                                    
                                    <svg className="w-4 h-4 md:w-6 md:h-6 lg:w-6 lg:h-6 cursor-pointer transition-transform duration-300 ease-in-out text-[#E97737] group-hover:-rotate-45 group-hover:bg-[#E97737] group-hover:text-white group-hover:rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 19" fill="none">
                                        <circle className="group-hover:[stroke-width:0]" cx="9" cy="9" r="8.5" stroke="currentColor" strokeWidth="1" fill="none" />
                                        <path d="M11.581 9.36039H4.80005V8.64039H11.581L8.84681 5.90619L9.36005 5.40039L12.96 9.00039L9.36005 12.6004L8.84681 12.0946L11.581 9.36039Z" fill="currentColor" />
                                    </svg>
                                </div>
                            </div> */}
                            <span className="opacity-0 text-[12px] md:text-[14px] font-normal leading-normal transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 -translate-y-2 cursor-pointer" onClick={goToDestination}>
                                View Packages
                            </span>
                        </div>
                        {/* <div className="absolute bottom-3 left-3 text-white">
                            <h3 className="font-['Figtree'] text-[16px] md:text-[20px] font-semibold leading-normal">{destinations[1].title}</h3>
                            <p className="font-['Figtree'] text-[11px] md:text-[14px] font-normal leading-normal uppercase">{destinations[1].price}</p>
                        </div> */}
                    {/* </Link> */}
                </div>

                {/* Remaining images one by one */}
                <div className="relative col-span-1 row-span-1 h-[250px] overflow-hidden rounded-lg group">
                    {/* <Link href={''}> */}
                        <Image src={destinations1[2].image} alt={`${destinations1[2].title} destination`} fill loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover rounded-lg cursor-pointer group-hover:scale-105 transform-transition duration-300 ease-in-out" />
                        {/* Text overlay */}
                        <div className="absolute bottom-3 left-3 text-white flex flex-col gap-1 transition-all duration-300">
                            {/* Main title moves slightly upward on hover */}
                            <h3 className="font-['Figtree'] text-[16px] md:text-[20px] font-semibold leading-normal transition-transform duration-300 group-hover:-translate-y-1">
                                {destinations1[2].title}
                            </h3>

                            {/* Price stays initially visible */}
                            <p className="font-['Figtree'] text-[11px] md:text-[14px] font-normal leading-normal uppercase transition-transform duration-300 group-hover:-translate-y-1">
                                {destinations1[2].price}
                            </p>

                            {/* Additional details (hidden initially, fades in from below) */}
                            {/* <div className="flex gap-2">
                                <div className="group flex items-center gap-2 cursor-pointer bg-transparent transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 -translate-y-2">
                                    <p className="text-[#E97737] text-center font-['Figtree'] text-[11px] md:text-[14px] font-medium leading-normal uppercase group-hover:scale-101 transition-transform duration-300 ease-in-out">
                                        READ MORE
                                    </p>
                                    
                                    <svg className="w-4 h-4 md:w-6 md:h-6 lg:w-6 lg:h-6 cursor-pointer transition-transform duration-300 ease-in-out text-[#E97737] group-hover:-rotate-45 group-hover:bg-[#E97737] group-hover:text-white group-hover:rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 19" fill="none">
                                        <circle className="group-hover:[stroke-width:0]" cx="9" cy="9" r="8.5" stroke="currentColor" strokeWidth="1" fill="none" />
                                        <path d="M11.581 9.36039H4.80005V8.64039H11.581L8.84681 5.90619L9.36005 5.40039L12.96 9.00039L9.36005 12.6004L8.84681 12.0946L11.581 9.36039Z" fill="currentColor" />
                                    </svg>
                                </div>
                            </div> */}
                            <span className="opacity-0 text-[12px] md:text-[14px] font-normal leading-normal transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 -translate-y-2 cursor-pointer" onClick={goToDestination}>
                                View Packages
                            </span>
                        </div>
                        {/* <div className="absolute bottom-3 left-3 text-white">
                            <h3 className="font-['Figtree'] text-[16px] md:text-[20px] font-semibold leading-normal">{destinations[2].title}</h3>
                            <p className="font-['Figtree'] text-[11px] md:text-[14px] font-normal leading-normal uppercase">{destinations[2].price}</p>
                        </div> */}
                    {/* </Link> */}
                </div>

                <div className="relative col-span-2 row-span-2 lg:col-span-1 lg:row-span-1 h-[250px] overflow-hidden rounded-lg group">
                    {/* <Link href={''}> */}
                        <Image src={destinations1[3].image} alt={`${destinations1[3].title} destination`} fill loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover rounded-lg cursor-pointer group-hover:scale-105 transform-transition duration-300 ease-in-out" />
                        {/* Text overlay */}
                        <div className="absolute bottom-3 left-3 text-white flex flex-col gap-1 transition-all duration-300">
                            {/* Main title moves slightly upward on hover */}
                            <h3 className="font-['Figtree'] text-[16px] md:text-[20px] font-semibold leading-normal transition-transform duration-300 group-hover:-translate-y-1">
                                {destinations1[3].title}
                            </h3>

                            {/* Price stays initially visible */}
                            <p className="font-['Figtree'] text-[11px] md:text-[14px] font-normal leading-normal uppercase transition-transform duration-300 group-hover:-translate-y-1">
                                {destinations1[3].price}
                            </p>

                            {/* Additional details (hidden initially, fades in from below) */}
                            {/* <div className="flex gap-2">
                                <div className="group flex items-center gap-2 cursor-pointer bg-transparent transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 -translate-y-2">
                                    <p className="text-[#E97737] text-center font-['Figtree'] text-[11px] md:text-[14px] font-medium leading-normal uppercase group-hover:scale-101 transition-transform duration-300 ease-in-out">
                                        READ MORE
                                    </p>
                                    
                                    <svg className="w-4 h-4 md:w-6 md:h-6 lg:w-6 lg:h-6 cursor-pointer transition-transform duration-300 ease-in-out text-[#E97737] group-hover:-rotate-45 group-hover:bg-[#E97737] group-hover:text-white group-hover:rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 19" fill="none">
                                        <circle className="group-hover:[stroke-width:0]" cx="9" cy="9" r="8.5" stroke="currentColor" strokeWidth="1" fill="none" />
                                        <path d="M11.581 9.36039H4.80005V8.64039H11.581L8.84681 5.90619L9.36005 5.40039L12.96 9.00039L9.36005 12.6004L8.84681 12.0946L11.581 9.36039Z" fill="currentColor" />
                                    </svg>
                                </div>
                            </div> */}
                            <span className="opacity-0 text-[12px] md:text-[14px] font-normal leading-normal transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 -translate-y-2 cursor-pointer" onClick={goToDestination}>
                                View Packages
                            </span>
                        </div>
                        {/* <div className="absolute bottom-3 left-3 text-white">
                            <h3 className="font-['Figtree'] text-[16px] md:text-[20px] font-semibold leading-normal">{destinations[3].title}</h3>
                            <p className="font-['Figtree'] text-[11px] md:text-[14px] font-normal leading-normal uppercase">{destinations[3].price}</p>
                        </div> */}
                    {/* </Link> */}
                </div>

                <div className="relative col-span-1 row-span-1 h-[250px] overflow-hidden rounded-lg group">
                    {/* <Link href={''}> */}
                        <Image src={destinations1[4].image} alt={`${destinations1[4].title} destination`} fill loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover rounded-lg cursor-pointer group-hover:scale-105 transform-transition duration-300 ease-in-out" />
                        {/* Text overlay */}
                        <div className="absolute bottom-3 left-3 text-white flex flex-col gap-1 transition-all duration-300">
                            {/* Main title moves slightly upward on hover */}
                            <h3 className="font-['Figtree'] text-[16px] md:text-[20px] font-semibold leading-normal transition-transform duration-300 group-hover:-translate-y-1">
                                {destinations1[4].title}
                            </h3>

                            {/* Price stays initially visible */}
                            <p className="font-['Figtree'] text-[11px] md:text-[14px] font-normal leading-normal uppercase transition-transform duration-300 group-hover:-translate-y-1">
                                {destinations1[4].price}
                            </p>

                            {/* Additional details (hidden initially, fades in from below) */}
                            {/* <div className="flex gap-2">
                                <div className="group flex items-center gap-2 cursor-pointer bg-transparent transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 -translate-y-2">
                                    <p className="text-[#E97737] text-center font-['Figtree'] text-[11px] md:text-[14px] font-medium leading-normal uppercase group-hover:scale-101 transition-transform duration-300 ease-in-out">
                                        READ MORE
                                    </p>
                                    
                                    <svg className="w-4 h-4 md:w-6 md:h-6 lg:w-6 lg:h-6 cursor-pointer transition-transform duration-300 ease-in-out text-[#E97737] group-hover:-rotate-45 group-hover:bg-[#E97737] group-hover:text-white group-hover:rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 19" fill="none">
                                        <circle className="group-hover:[stroke-width:0]" cx="9" cy="9" r="8.5" stroke="currentColor" strokeWidth="1" fill="none" />
                                        <path d="M11.581 9.36039H4.80005V8.64039H11.581L8.84681 5.90619L9.36005 5.40039L12.96 9.00039L9.36005 12.6004L8.84681 12.0946L11.581 9.36039Z" fill="currentColor" />
                                    </svg>
                                </div>
                            </div> */}
                            <span className="opacity-0 text-[12px] md:text-[14px] font-normal leading-normal transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 -translate-y-2 cursor-pointer" onClick={goToDestination}>
                                View Packages
                            </span>
                        </div>
                        {/* <div className="absolute bottom-3 left-3 text-white">
                            <h3 className="font-['Figtree'] text-[16px] md:text-[20px] font-semibold leading-normal">{destinations[4].title}</h3>
                            <p className="font-['Figtree'] text-[11px] md:text-[14px] font-normal leading-normal uppercase">{destinations[4].price}</p>
                        </div> */}
                    {/* </Link> */}
                </div>

                <div className="relative col-span-1 row-span-1 h-[250px] overflow-hidden rounded-lg group">
                    {/* <Link href={''}> */}
                        <Image src={destinations1[5].image} alt={`${destinations1[5].title} destination`} fill loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover rounded-lg cursor-pointer group-hover:scale-105 transform-transition duration-300 ease-in-out" />
                        {/* Text overlay */}
                        <div className="absolute bottom-3 left-3 text-white flex flex-col gap-1 transition-all duration-300">
                            {/* Main title moves slightly upward on hover */}
                            <h3 className="font-['Figtree'] text-[16px] md:text-[20px] font-semibold leading-normal transition-transform duration-300 group-hover:-translate-y-1">
                                {destinations1[5].title}
                            </h3>

                            {/* Price stays initially visible */}
                            <p className="font-['Figtree'] text-[11px] md:text-[14px] font-normal leading-normal uppercase transition-transform duration-300 group-hover:-translate-y-1">
                                {destinations1[5].price}
                            </p>

                            {/* Additional details (hidden initially, fades in from below) */}
                            {/* <div className="flex gap-2">
                                <div className="group flex items-center gap-2 cursor-pointer bg-transparent transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 -translate-y-2">
                                    <p className="text-[#E97737] text-center font-['Figtree'] text-[11px] md:text-[14px] font-medium leading-normal uppercase group-hover:scale-101 transition-transform duration-300 ease-in-out">
                                        READ MORE
                                    </p>
                                    
                                    <svg className="w-4 h-4 md:w-6 md:h-6 lg:w-6 lg:h-6 cursor-pointer transition-transform duration-300 ease-in-out text-[#E97737] group-hover:-rotate-45 group-hover:bg-[#E97737] group-hover:text-white group-hover:rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 19" fill="none">
                                        <circle className="group-hover:[stroke-width:0]" cx="9" cy="9" r="8.5" stroke="currentColor" strokeWidth="1" fill="none" />
                                        <path d="M11.581 9.36039H4.80005V8.64039H11.581L8.84681 5.90619L9.36005 5.40039L12.96 9.00039L9.36005 12.6004L8.84681 12.0946L11.581 9.36039Z" fill="currentColor" />
                                    </svg>
                                </div>
                            </div> */}
                            <span className="opacity-0 text-[12px] md:text-[14px] font-normal leading-normal transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 -translate-y-2 cursor-pointer" onClick={goToDestination}>
                                View Packages
                            </span>
                        </div>
                        {/* <div className="absolute bottom-3 left-3 text-white">
                            <h3 className="font-['Figtree'] text-[16px] md:text-[20px] font-semibold leading-normal">{destinations[5].title}</h3>
                            <p className="font-['Figtree'] text-[11px] md:text-[14px] font-normal leading-normal uppercase">{destinations[5].price}</p>
                        </div> */}
                    {/* </Link> */}
                </div>

                <div className="relative col-span-1 row-span-1 h-[250px] overflow-hidden rounded-lg group">
                    {/* <Link href={''}> */}
                        <Image src={destinations1[6].image} alt={`${destinations1[6].title} destination`} fill loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover rounded-lg cursor-pointer group-hover:scale-105 transform-transition duration-300 ease-in-out" />
                        {/* Text overlay */}
                        <div className="absolute bottom-3 left-3 text-white flex flex-col gap-1 transition-all duration-300">
                            {/* Main title moves slightly upward on hover */}
                            <h3 className="font-['Figtree'] text-[16px] md:text-[20px] font-semibold leading-normal transition-transform duration-300 group-hover:-translate-y-1">
                                {destinations1[6].title}
                            </h3>

                            {/* Price stays initially visible */}
                            <p className="font-['Figtree'] text-[11px] md:text-[14px] font-normal leading-normal uppercase transition-transform duration-300 group-hover:-translate-y-1">
                                {destinations1[6].price}
                            </p>

                            {/* Additional details (hidden initially, fades in from below) */}
                            {/* <div className="flex gap-2">
                                <div className="group flex items-center gap-2 cursor-pointer bg-transparent transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 -translate-y-2">
                                    <p className="text-[#E97737] text-center font-['Figtree'] text-[11px] md:text-[14px] font-medium leading-normal uppercase group-hover:scale-101 transition-transform duration-300 ease-in-out">
                                        READ MORE
                                    </p>
                                    
                                    <svg className="w-4 h-4 md:w-6 md:h-6 lg:w-6 lg:h-6 cursor-pointer transition-transform duration-300 ease-in-out text-[#E97737] group-hover:-rotate-45 group-hover:bg-[#E97737] group-hover:text-white group-hover:rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 19" fill="none">
                                        <circle className="group-hover:[stroke-width:0]" cx="9" cy="9" r="8.5" stroke="currentColor" strokeWidth="1" fill="none" />
                                        <path d="M11.581 9.36039H4.80005V8.64039H11.581L8.84681 5.90619L9.36005 5.40039L12.96 9.00039L9.36005 12.6004L8.84681 12.0946L11.581 9.36039Z" fill="currentColor" />
                                    </svg>
                                </div>
                            </div> */}
                            <span className="opacity-0 text-[12px] md:text-[14px] font-normal leading-normal transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 -translate-y-2 cursor-pointer" onClick={goToDestination}>
                                View Packages
                            </span>
                        </div>
                        {/* <div className="absolute bottom-3 left-3 text-white">
                            <h3 className="font-['Figtree'] text-[16px] md:text-[20px] font-semibold leading-normal">{destinations[6].title}</h3>
                            <p className="font-['Figtree'] text-[11px] md:text-[14px] font-normal leading-normal uppercase">{destinations[6].price}</p>
                        </div> */}
                    {/* </Link> */}
                </div>

                <div className="relative col-span-1 row-span-1 h-[250px] overflow-hidden rounded-lg group">
                    {/* <Link href={''}> */}
                        <Image src={destinations1[7].image} alt={`${destinations1[7].title} destination`} fill loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover rounded-lg cursor-pointer group-hover:scale-105 transform-transition duration-300 ease-in-out" />
                        {/* Text overlay */}
                        <div className="absolute bottom-3 left-3 text-white flex flex-col gap-1 transition-all duration-300">
                            {/* Main title moves slightly upward on hover */}
                            <h3 className="font-['Figtree'] text-[16px] md:text-[20px] font-semibold leading-normal transition-transform duration-300 group-hover:-translate-y-1">
                                {destinations1[7].title}
                            </h3>

                            {/* Price stays initially visible */}
                            <p className="font-['Figtree'] text-[11px] md:text-[14px] font-normal leading-normal uppercase transition-transform duration-300 group-hover:-translate-y-1">
                                {destinations1[7].price}
                            </p>

                            {/* Additional details (hidden initially, fades in from below) */}
                            {/* <div className="flex gap-2">
                                <div className="group flex items-center gap-2 cursor-pointer bg-transparent transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 -translate-y-2">
                                    <p className="text-[#E97737] text-center font-['Figtree'] text-[11px] md:text-[14px] font-medium leading-normal uppercase group-hover:scale-101 transition-transform duration-300 ease-in-out">
                                        READ MORE
                                    </p>
                                    
                                    <svg className="w-4 h-4 md:w-6 md:h-6 lg:w-6 lg:h-6 cursor-pointer transition-transform duration-300 ease-in-out text-[#E97737] group-hover:-rotate-45 group-hover:bg-[#E97737] group-hover:text-white group-hover:rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 19" fill="none">
                                        <circle className="group-hover:[stroke-width:0]" cx="9" cy="9" r="8.5" stroke="currentColor" strokeWidth="1" fill="none" />
                                        <path d="M11.581 9.36039H4.80005V8.64039H11.581L8.84681 5.90619L9.36005 5.40039L12.96 9.00039L9.36005 12.6004L8.84681 12.0946L11.581 9.36039Z" fill="currentColor" />
                                    </svg>
                                </div>
                            </div> */}
                            <span className="opacity-0 text-[12px] md:text-[14px] font-normal leading-normal transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 -translate-y-2 cursor-pointer" onClick={goToDestination}>
                                View Packages
                            </span>
                        </div>
                        {/* <div className="absolute bottom-3 left-3 text-white">
                            <h3 className="font-['Figtree'] text-[16px] md:text-[20px] font-semibold leading-normal">{destinations[7].title}</h3>
                            <p className="font-['Figtree'] text-[11px] md:text-[14px] font-normal leading-normal uppercase">{destinations[7].price}</p>
                        </div> */}
                    {/* </Link> */}
                </div>
            </div>
            )}
        </section>
        </>
    );
} 
