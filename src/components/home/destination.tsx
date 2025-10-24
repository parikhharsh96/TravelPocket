"use client";

import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";

const destinations = [
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
    return (
        <section className="max-w-[1920px] mx-auto px-4 pb-[25px] sm:px-6 md:px-8 lg:px-[50px]">
            {/* Header */}
            <div className="flex items-center justify-between py-10 relative mb-0 mt-2">
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
                        <p className="text-[#1A2F46] text-center font-['Figtree']  text-[16px] font-semibold leading-normal capitalize">Explore our destinations</p>
                        <h2 className="text-[#1A2F46] text-center font-['Playfair_Display']r text-[36px] font-semibold leading-normal">
                            Destinations That Stay With You
                        </h2>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 grid-rows-auto lg:grid-cols-6 lg:grid-rows-2 gap-[15px]">
                {/* 1st image (big, 2 cols) */}
                <div className="relative lg:col-span-2 lg:row-span-1 spect-[4/3] h-[250px]">
                    <Link href={''}>
                        <Image src={destinations[0].image} alt={destinations[0].title} fill className="object-cover rounded-lg cursor-pointer hover:scale-105 transform transition duration-200" />
                        <div className="absolute bottom-3 left-3 text-white">
                            <h3 className="font-['Figtree'] text-[20px] font-semibold leading-normal">{destinations[0].title}</h3>
                            <p className="font-['Figtree']  text-[14px] font-normal leading-normal uppercase">{destinations[0].price}</p>
                        </div>
                    </Link>
                </div>

                {/* 2nd image (big vertical span) */}
                <div className="relative lg:row-start-1 lg:col-start-3 lg:col-span-2 lg:row-span-2 lg:h-[518px] h-[250px]">
                    <Link href={''}>
                        <Image src={destinations[1].image} alt={destinations[1].title} fill className="object-cover rounded-lg cursor-pointer hover:scale-105 transform transition duration-200" />
                        <div className="absolute bottom-3 left-3 text-white">
                            <h3 className="font-['Figtree']  text-[20px] font-semibold leading-normal">{destinations[1].title}</h3>
                            <p className="font-['Figtree']  text-[14px] font-normal leading-normal uppercase">{destinations[1].price}</p>
                        </div>
                    </Link>
                </div>

                {/* Remaining images one by one */}
                <div className="relative h-[250px]">
                    <Link href={''}>
                        <Image src={destinations[2].image} alt={destinations[2].title} fill className="object-cover rounded-lg cursor-pointer hover:scale-105 transform transition duration-200" />
                        <div className="absolute bottom-3 left-3 text-white">
                            <h3 className="font-['Figtree']  text-[20px] font-semibold leading-normal">{destinations[2].title}</h3>
                            <p className="font-['Figtree']  text-[14px] font-normal leading-normal uppercase">{destinations[2].price}</p>
                        </div>
                    </Link>
                </div>

                <div className="relative h-[250px]">
                    <Link href={''}>
                        <Image src={destinations[3].image} alt={destinations[3].title} fill className="object-cover rounded-lg cursor-pointer hover:scale-105 transform transition duration-200" />
                        <div className="absolute bottom-3 left-3 text-white">
                            <h3 className="font-['Figtree']  text-[20px] font-semibold leading-normal">{destinations[3].title}</h3>
                            <p className="font-['Figtree']  text-[14px] font-normal leading-normal uppercase">{destinations[3].price}</p>
                        </div>
                    </Link>
                </div>

                <div className="relative h-[250px]">
                    <Link href={''}>
                        <Image src={destinations[4].image} alt={destinations[4].title} fill className="object-cover rounded-lg cursor-pointer hover:scale-105 transform transition duration-200" />
                        <div className="absolute bottom-3 left-3 text-white">
                            <h3 className="font-['Figtree']  text-[20px] font-semibold leading-normal">{destinations[4].title}</h3>
                            <p className="font-['Figtree']  text-[14px] font-normal leading-normal uppercase">{destinations[4].price}</p>
                        </div>
                    </Link>
                </div>

                <div className="relative h-[250px]">
                    <Link href={''}>
                        <Image src={destinations[5].image} alt={destinations[5].title} fill className="object-cover rounded-lg cursor-pointer hover:scale-105 transform transition duration-200" />
                        <div className="absolute bottom-3 left-3 text-white">
                            <h3 className="font-['Figtree']  text-[20px] font-semibold leading-normal">{destinations[5].title}</h3>
                            <p className="font-['Figtree']  text-[14px] font-normal leading-normal uppercase">{destinations[5].price}</p>
                        </div>
                    </Link>
                </div>

                <div className="relative h-[250px]">
                    <Link href={''}>
                        <Image src={destinations[6].image} alt={destinations[6].title} fill className="object-cover rounded-lg cursor-pointer hover:scale-105 transform transition duration-200" />
                        <div className="absolute bottom-3 left-3 text-white">
                            <h3 className="font-['Figtree']  text-[20px] font-semibold leading-normal">{destinations[6].title}</h3>
                            <p className="font-['Figtree']  text-[14px] font-normal leading-normal uppercase">{destinations[6].price}</p>
                        </div>
                    </Link>
                </div>

                <div className="relative h-[250px]">
                    <Link href={''}>
                        <Image src={destinations[7].image} alt={destinations[7].title} fill className="object-cover rounded-lg cursor-pointer hover:scale-105 transform transition duration-200" />
                        <div className="absolute bottom-3 left-3 text-white">
                            <h3 className="font-['Figtree']  text-[20px] font-semibold leading-normal">{destinations[7].title}</h3>
                            <p className="font-['Figtree']  text-[14px] font-normal leading-normal uppercase">{destinations[7].price}</p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
} 
