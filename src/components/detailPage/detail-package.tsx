"use client";

import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import React from "react";
import { DepartureDrawer } from "./departure-drawer";
import { Badge } from "../ui/badge";
import { itineraryList, ItineraryItem } from "@/data/detailpage";
import ContactOurExperts from "../home/contact-our-experts";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Calendar, CheckCircle, MapPin } from "lucide-react";

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

interface GiftProduct {
    id: number
    name: string
    description: string
    image: string
}

interface GiftProductCardProps {
    product: GiftProduct
}

interface ItineraryAccordionProps {
    itinerary: ItineraryItem[];
}

const sectionIds = [
    "overview",
    "highlights",
    "itinerary",
    "essentials",
    "inclusions",
    "info-links",
    "gallery",
    "reviews",
];

const sliderImgs = [
    { id: '0', imageSrc: '/images/detailpage/slideImg.png', alt: "Majestic snow-capped mountain peak", },
    { id: '1', imageSrc: '/images/detailpage/slideImg1.png', alt: "Majestic snow-capped mountain peak", },
    { id: '2', imageSrc: '/images/detailpage/slideImg2.png', alt: "Majestic snow-capped mountain peak", }
];

const months = [
    { label: "Sep", year: "2025", active: true },
    { label: "Oct", year: "2025", active: false },
    { label: "Nov", year: "2025", active: false },
    { label: "Dec", year: "2025", active: false },
];

const products = [
    {
        id: 1,
        name: "Duffel Bag",
        description: "Spacious, durable & travel-ready.",
        image: "/images/detailpage/bag_img.png",
    },
    {
        id: 2,
        name: "Backpack",
        description: "Lightweight & handy for daily yatra use.",
        image: "/images/detailpage/bagpack_m.png",
    },
    {
        id: 3,
        name: "Jacket",
        description: "Keeps you warm at high altitudes.",
        image: "/images/detailpage/gift_jacket.png",
    },
    {
        id: 4,
        name: "Puja Samagri Kit",
        description: "Includes all essentials for spiritual rituals.",
        image: "/images/detailpage/gift-acc.png",
    },
]

interface EssentialItem {
    text: string;
}

interface PackingListProps {
    leftColumn: EssentialItem[];
    rightColumn: EssentialItem[];
}

const leftColumnData: EssentialItem[] = [
    { text: "Thermal innerwear (tops and bottoms)." },
    { text: "Warm jackets and windcheaters (waterproof recommended)." },
    { text: "Comfortable trekking pants and T-shirts (quick-dry preferred)." },
    { text: "Woolen sweaters and fleece jackets." },
    { text: "Gloves (woolen and waterproof)." },
    { text: "Woolen cap, scarf, and balaclava." },
    { text: "Multiple pairs of woolen and cotton socks." },
    { text: "Lightweight raincoat or poncho." },
    { text: "Comfortable walking shoes (waterproof with good grip)." },
    { text: "Sunglasses (UV-protected) and sunscreen (SPF 50+)." },
    { text: "Woolen mufflers and gaiters for extra warmth." },
    { text: "Backpack (30-40 liters) with a rain cover." },
    { text: "Daypack for essentials during treks." },
    { text: "Daypack for essentials during treks." },
];

const rightColumnData: EssentialItem[] = [
    { text: "Trekking pole(s) for added support." },
    { text: "Personal toiletries (toothbrush, toothpaste, soap, shampoo, etc.)." },
    { text: "Quick-dry towel and tissues." },
    { text: "Moisturizer, lip balm (SPF protection), and antiseptic cream." },
    { text: "Basic medicines (for altitude sickness, headaches, fever, etc.)." },
    { text: "Reusable water bottle or hydration pack." },
    { text: "Energy bars, dry fruits, and light snacks." },
    { text: "Reusable water bottle or hydration pack." },
    { text: "Energy bars, dry fruits, and light snacks." },
    { text: "First-aid kit (basic items like band-aids, antiseptic wipes, etc.)." },
    { text: "Passport (valid for at least 6 months)." },
    { text: "Multiple passport-sized photographs." },
    { text: "Photocopies of ID proof and travel documents." },
    { text: "Travel insurance documents." },
];

export default function DetailPackage() {

    const [activeSection, setActiveSection] = useState("overview");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [open, setOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("inclusions");

    const sliderRef = useRef<HTMLDivElement>(null);
    const tabRefs = useRef<Record<string, HTMLDivElement | null>>({});
    const scrollAmount = 320; // Match card width + margin

    const [showAll, setShowAll] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const displayLimit = 14;
    const halfLimit = displayLimit / 2;

    // ✅ Detect screen size dynamically
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024); // lg breakpoint
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // ✅ Decide what to display
    const displayedLeft =
        isMobile && !showAll ? leftColumnData.slice(0, halfLimit) : leftColumnData;

    const displayedRight =
        isMobile && !showAll ? rightColumnData.slice(0, halfLimit) : rightColumnData;

    const hasExtraItems =
        leftColumnData.length > halfLimit || rightColumnData.length > halfLimit;

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sectionIds.forEach((id) => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });
        // return () => clearInterval(interval);

        return () => {
            observer.disconnect();
        }
    }, []);

    // Auto-slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            goToNext()
        }, 5000)

        return () => clearInterval(interval)
    }, [currentIndex]);

    useEffect(() => {
        const activeTab = tabRefs.current[activeSection];
        if (activeTab) {
            activeTab.scrollIntoView({
                behavior: "smooth",
                inline: "center", // keeps it centered horizontally
                block: "nearest",
            });
        }
    }, [activeSection]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index)
    }

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? sliderImgs.length - 1 : prevIndex - 1))
    }

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === sliderImgs.length - 1 ? 0 : prevIndex + 1))
    }

    const getTabClass = (id: string) =>
        `rounded-sm ${activeSection === id
            ? "bg-[#1A2F46]"
            : ""
        }`;

    const getTabTextClass = (id: string) =>
        `font-['Figtree'] text-sm font-semibold leading-6 capitalize ${activeSection === id
            ? "text-white"
            : "text-[#4D4D4D]"
        }`;

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 80, // Adjust offset for sticky header
                behavior: "smooth",
            });
        }
    };

    const scroll = (direction: 'left' | 'right') => {
        console.log("cliecked");
        if (sliderRef.current) {
            const value = direction === 'left' ? -scrollAmount : scrollAmount;
            sliderRef.current.scrollBy({ left: value, behavior: 'smooth' });
        }
    };

    const tags = Array.from({ length: 50 }).map(
        (_, i, a) => `v1.2.0-beta.${a.length - i}`
    )


    return (
        <>
            <section className="container mx-auto"> {/**max-w-[1920px] */}
                <div className="rounded-[0_0_30px_30px] bg-[#EBF5F7] w-full">
                    <div className="p-4 md:p-6 lg:p-8">
                        <div className="flex items-center gap-4 mb-6 md:mb-8 text-[#5a5a5a] pt-2">
                            <Link href="/" className="flex items-center gap-2 hover:text-[#000000] transition-colors">
                                {/* <ArrowLeft className="w-5 h-5" /> */}
                                <img src="/images/detailpage/arrow_back.svg" width="14px" height="14px"
                                    alt="Twitter" className="cursor-pointer" />
                                <span className="text-[#5A5A5A] font-['Figtree'] text-[11px] lg:text-[12px] font-normal leading-[14px]">Back</span>
                            </Link>
                            {/* <span className="text-[#d9d9d9]">|</span> */}
                            <Separator orientation="vertical" className="!h-[14px] w-px bg-[#BBB] border border-[#BBB]" />
                            <div className="flex items-center gap-2 text-base">
                                <Link href="/" className="hover:text-[#000000] transition-colors flex items-center">
                                    <span className="text-[#5A5A5A] font-['Figtree'] text-[11px] lg:text-[12px] font-normal leading-[14px]">Home</span>
                                </Link>
                                <img src="/images/detailpage/arrow-right.svg" width="12px" height="12px"
                                    alt="Twitter" className="cursor-pointer" />
                                <span className="text-black font-['Figtree'] text-[11px] lg:text-[12px] font-normal leading-[14px] cursor-pointer">Kailash Mansarovar Yatra</span>
                            </div>
                        </div>

                        <div className="mt-2 flex flex-col lg:flex-row justify-between items-start gap-[16px]">
                            {/* -- Left section -- */}
                            <div className="flex flex-col">
                                <div className="flex flex-col gap-[16px] flex-1 min-w-0">
                                    <div className="flex flex-col gap-[0px] lg:gap-[12px]">
                                        <div className="text-black font-['Figtree'] text-[18px] lg:text-[26px] font-semibold leading-[24px]">Kailash Mansarovar Yatra </div>
                                        <div className="text-black font-['Figtree'] text-[14px] lg:text-[20px] font-normal leading-[24px]">Charan Sparsh Outer Kora from Lucknow By Helicopter</div>
                                    </div>
                                    <div className="flex flex-wrap flex-row gap-[14px] items-center">
                                        <div className="flex gap-[6px] items-center">
                                            <img src="/images/detailpage/calendar_month.svg" width="14px" height="14px"
                                                alt="Twitter" className="cursor-pointer" />
                                            <div className="text-[#5A5A5A] font-[Figtree] text-[11px] lg:text-[13px] font-medium leading-[14px] uppercase">11 Nights 12 Days</div>
                                        </div>
                                        <Separator orientation="vertical" className="!h-[14px] w-px bg-[#BBB] border border-[#BBB]" />
                                        <div className="flex gap-[6px] items-center" >
                                            <img src="/images/detailpage/task_alt.svg" width="14px" height="14px"
                                                alt="Twitter" className="cursor-pointer" />
                                            <div className="text-[#5A5A5A] font-[Figtree] text-[11px] lg:text-[13px] font-medium leading-[14px] uppercase">20+ Inclusions</div>
                                        </div>
                                        <Separator orientation="vertical" className="!h-[14px] w-px bg-[#BBB] border border-[#BBB]" />
                                        <div className="flex gap-[6px] items-center">
                                            <img src="/images/detailpage/location_on.svg" width="14px" height="14px"
                                                alt="Twitter" className="cursor-pointer" />
                                            <div className="text-[#5A5A5A] font-[Figtree] text-[11px] lg:text-[13px] font-medium leading-[14px] uppercase">Pick up: Lucknow</div>
                                        </div>
                                        <Separator orientation="vertical" className="!h-[14px] w-px bg-[#BBB] border border-[#BBB]" />
                                        <div className="flex gap-[6px] items-center">
                                            <img src="/images/detailpage/group.svg" width="14px" height="14px"
                                                alt="Twitter" className="cursor-pointer" />
                                            <div className="text-[#5A5A5A] font-[Figtree] text-[11px] lg:text-[13px] font-medium leading-[14px] uppercase">Group Size: 30</div>
                                        </div>
                                        <Separator orientation="vertical" className="!h-[14px] w-px bg-[#BBB] border border-[#BBB]" />
                                        <div className="flex gap-[6px] items-center">
                                            <img src="/images/detailpage/elevation.svg" width="14px" height="14px"
                                                alt="Twitter" className="cursor-pointer" />
                                            <div className="text-[#5A5A5A] font-[Figtree] text-[11px] lg:text-[13px] font-medium leading-[14px] uppercase">Altitude: 6,638 m</div>
                                        </div>
                                        <Separator orientation="vertical" className="!h-[14px] w-px bg-[#BBB] border border-[#BBB]" />
                                        <div className="flex gap-[6px] items-center">
                                            <img src="/images/detailpage/footprint.svg" width="22px" height="22px"
                                                alt="footprint" className="cursor-pointer" />
                                            <div className="text-[#5A5A5A] font-[Figtree] text-[11px] lg:text-[13px] font-medium leading-[14px] uppercase">DIFFICULTY: Beginner</div>
                                        </div>
                                        {/* <Separator orientation="vertical" className="!h-[14px] w-px bg-[#BBB] border border-[#BBB]" /> */}
                                    </div>
                                </div>
                            </div>

                            <Separator orientation="horizontal" className="lg:hidden w-full bg-[#BBB] border border-[#BBB]" />

                            {/* -- Right section -- */}
                            <div className="flex flex-col items-center">
                                {/* <div className="text-[20px]">Hello world</div> */}
                                <div className="flex flex-col gap-[12px]">
                                    <div className="flex flex-row gap-[20px]">
                                        <div className="flex flex-row gap-[44px] lg:gap-[36px]">
                                            <div className="flex flex-col gap-[8px]">
                                                <div className="flex flex-row gap-[5px]">
                                                    <div className="text-[#5A5A5A] font-[Figtree] text-[14px] lg:text-[16px] font-semibold leading-[24px] line-through">
                                                        2,85,000
                                                    </div>
                                                    <div className="text-[#5A5A5A] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[24px]">
                                                        + GST
                                                    </div>
                                                </div>
                                                <div className="text-[#333] font-[Figtree] text-[20px] lg:text-[24px] font-semibold leading-[24px]">
                                                    ₹2,75,000
                                                </div>
                                            </div>
                                            <Separator orientation="vertical" className="w-px bg-[#BBB] border border-[#BBB]" />
                                            <div className="flex flex-col gap-[8px]">
                                                <div className="flex flex-row gap-[5px]">
                                                    <div className="text-[#5A5A5A] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[24px]">
                                                        EMI starts from
                                                    </div>
                                                </div>
                                                <div className="text-[#333] font-[Figtree] text-[20px] lg:text-[24px] font-semibold leading-[24px]">
                                                    ₹9500
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hidden lg:flex flex-col gap-[6px]">
                                            <div className="rounded-[5px] bg-[#00A53F]" style={{ padding: "10px 4px" }}>
                                                <div className="flex flex-row gap-[3px] items-center">
                                                    <div className="text-white font-[Figtree] text-[16px] lg:text-[20px] font-semibold leading-[24px]">4.9</div>
                                                    <div>
                                                        <img src="/images/detailpage/star_rate.svg" className="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-[#000] text-center font-[Figtree] text-[12px] font-semibold leading-[14px] underline">
                                                3 Reviews
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="rounded-[4px] bg-[#FFF7F2]" style={{ padding: "8px 14px" }}>
                                            <span className="text-black font-['Figtree'] text-[12px] lg:text-[14px] font-normal leading-normal">Earn </span>
                                            <img src="/images/detailpage/24-Crowns.png" className="inline mr-1" />
                                            <span className="text-[#000] font-[Figtree] text-[12px] lg:text-[14px] font-bold leading-normal">50 Reward Points</span>
                                            <span className="text-black font-['Figtree'] text-[12px] lg:text-[14px] font-normal leading-normal"> on this Booking</span>
                                        </div>
                                    </div>
                                    <div className="lg:hidden flex flex-row gap-[8px] items-center">
                                        <div className="rounded-[5px] bg-[#00A53F]" style={{ padding: "10px 4px" }}>
                                            <div className="flex flex-row gap-[3px] items-center">
                                                <div className="text-white font-[Figtree] text-[16px] lg:text-[20px] font-semibold leading-[24px]">4.9</div>
                                                <div>
                                                    <img src="/images/detailpage/star_rate.svg" className="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-[#000] text-center font-[Figtree] text-[12px] font-semibold leading-[14px] underline">
                                            3 Reviews
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/**Fixed mobile select date section */}
            <section className="container mx-auto lg:hidden"> {/**max-w-[1920px] */}
                <div className="w-full fixed bottom-0 left-0 right-0 z-100">
                    <div className="bg-[#E97737]" style={{ padding: "8px 16px" }}>
                        <div className="flex flex-row justify-between">

                            <div className="flex flex-col gap-[4px]">
                                <div className="text-white font-['Figtree'] text-[12px] font-semibold leading-[16px] uppercase w-[170px]">
                                    BOOK NOW OR reserve your seat*
                                </div>
                                <div className="flex flex-row gap-[6px] items-center">
                                    <div className="flex flex-row gap-[4px] items-center">
                                        <div className="text-white font-['Figtree'] text-[10px] font-semibold leading-[14px] line-through">2,85,000</div>
                                        <div className="text-white font-['Figtree'] text-[10px] font-semibold leading-[14px]">2,75,000</div>
                                    </div>
                                    <Separator orientation="vertical" className="!h-[12px] bg-[#D2D8E4] border border-[#D2D8E4]" />
                                    <div className="flex flex-row gap-[4px] items-center">
                                        <div className="text-white font-['Figtree'] text-[10px] font-semibold leading-[14px]">EMI starts from</div>
                                        <div className="text-white font-['Figtree'] text-[10px] font-semibold leading-[14px]">9,500</div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-[6px] flex items-center cursor-pointer" style={{ padding: "10px 8px" }} onClick={() => setOpen(true)}>
                                <div className="flex flex-row items-center justify-center gap-[6px]">
                                    <div className="text-black font-['Figtree'] text-[14px] font-semibold leading-[normal] capitalize">Select Dates</div>
                                    <img src="/images/detailpage/arrow-right_fd.svg" alt="" className="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#D06225]" style={{ padding: "8px 16px" }}>
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-row gap-[4px] shrink-0 items-center cursor-pointer">
                                <img src="/images/detailpage/call_white.svg" alt="" className="" />
                                <div className="text-white text-center font-['Figtree'] text-[13px] font-semibold leading-[normal] capitalize">
                                    Request
                                    <span className="lowercase"> a </span>
                                    call back
                                </div>
                            </div>
                            <div className="flex flex-row gap-[6px] shrink-0 items-center cursor-pointer">
                                <div className="text-white font-['Figtree'] text-[13px] font-semibold leading-[normal] capitalize">Chat with us</div>
                                <img src="/images/detailpage/whatsapp_white.svg" alt="" className="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <DepartureDrawer open={open} onOpenChange={setOpen} />

            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 mb-4 md:mb-8"> {/**max-w-[1920px] */}

                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_575px] gap-6">
                    {/**Left Section */}
                    <div>

                        {/** Image Slider */}
                        <div className="relative w-full overflow-hidden rounded-xl shadow-2xl mt-4 mb-4">
                            <div className="relative aspect-[2/1] w-full">
                                {sliderImgs.map((image, index) => (
                                    <div
                                        key={index}
                                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
                                            }`}
                                    >
                                        <img src={image.imageSrc || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>

                            <div className="lg:hidden absolute left-1/2 top-[10px] -translate-x-1/2 -10 w-[90%] px-5 py-2.5 rounded-[6px] bg-[#FFF]" style={{ padding: "10px 20px" }}>
                                <div className="flex flex-row justify-between items-center">
                                    <div className="flex flex-row items-center gap-[6px] cursor-pointer">
                                        <img src="/images/detailpage/share.svg" alt="" className="h-[18px] w-[18px]" />
                                        <div className="text-[#5A5A5A] font-['Figtree'] text-[14px] font-semibold leading-[18px]">Share</div>
                                    </div>
                                    <div className="flex flex-row items-center gap-[6px] cursor-pointer">
                                        <img src="/images/detailpage/contract.svg" alt="" className="h-[18px] w-[18px]" />
                                        <div className="text-[#5A5A5A] font-['Figtree'] text-[14px] font-semibold leading-[18px]">Enquire Now</div>
                                    </div>
                                    <div className="flex flex-row items-center gap-[6px] cursor-pointer">
                                        <img src="/images/detailpage/Vector.svg" alt="" className="h-[18px] w-[18px]" />
                                        <div className="text-[#5A5A5A] font-['Figtree'] text-[14px] font-semibold leading-[18px]">Wishlist</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center gap-3 mb-4">
                            {sliderImgs.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${index === currentIndex ? "bg-[#29A4C1] scale-125" : "bg-[#B3CAD0] hover:bg-[#93aeb5]"
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>

                        {/** Share Section */}
                        <div className="mb-3">
                            <div className="hidden lg:flex lg:flex-row lg:justify-between lg:items-center w-full">
                                <div className="flex flex-row gap-2 items-center">
                                    <div className="text-[#000] font-['Figtree'] text-[16px] font-medium leading-[24px]">
                                        Get our assistance for easy booking
                                    </div>
                                    <div className="rounded-[6px] bg-[#FFF0E8] cursor-pointer" style={{ padding: "4px 8px" }}>
                                        <div className="flex flex-row items-center gap-[5px]">
                                            <img src="/images/detailpage/call.svg" alt="" className="" />
                                            <div className="text-[#E97737] font-['Figtree'] text-[12px] font-semibold leading-[24px] uppercase">Want us to call you?</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-row gap-[20px] items-center">
                                    <div className="flex flex-row items-center gap-[8px] cursor-pointer">
                                        <img src="/images/detailpage/share.svg" alt="" className="h-[24px] w-[24px]" />
                                        <div className="text-[#5A5A5A] font-['Figtree'] text-[16px] font-semibold leading-[24px]">Share</div>
                                    </div>
                                    <div className="flex flex-row items-center gap-[8px] cursor-pointer">
                                        <img src="/images/detailpage/contract.svg" alt="" className="h-[24px] w-[24px]" />
                                        <div className="text-[#5A5A5A] font-['Figtree'] text-[16px] font-semibold leading-[24px]">Enquire Now</div>
                                    </div>
                                    <div className="flex flex-row items-center gap-[8px] cursor-pointer">
                                        <img src="/images/detailpage/Vector.svg" alt="" className="h-[24px] w-[24px]" />
                                        <div className="text-[#5A5A5A] font-['Figtree'] text-[16px] font-semibold leading-[24px]">Wishlist</div>
                                    </div>
                                </div>
                            </div>

                            {/** Mobile And Tablet Device */}
                            <div className="flex flex-row justify-between items-center w-full lg:hidden">
                                <div className="text-[#000] font-['Figtree'] text-[14px] font-medium leading-[19px] shrink-1">
                                    Get our assistance for easy booking
                                </div>
                                <div className="rounded-[6px] bg-[#FFF0E8] cursor-pointer shrink-0" style={{ padding: "4px 8px" }}>
                                    <div className="flex flex-row items-center gap-[5px]">
                                        <img src="/images/detailpage/call.svg" alt="" className="" />
                                        <div className="text-[#E97737] font-['Figtree'] text-[12px] font-semibold leading-[24px] uppercase">Want us to call you?</div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/** Fixed Section */}
                        <div className="sticky top-0 z-50 rounded-lg bg-white shadow-[0_4px_10px_0_rgba(0,_0,_0,_0.16)] mb-4 overflow-x-auto whitespace-nowrap scrollbar-hide" style={{ padding: "10px 10px" }}>
                            <div className="flex flex-row gap-4 items-center">
                                <div className={getTabClass("overview")} style={{ padding: "10px 20px", cursor: "pointer" }} onClick={() => scrollToSection("overview")} ref={(el) => {
                                    tabRefs.current["overview"] = el;
                                }}>
                                    <span className={getTabTextClass("overview")}>Overview</span>
                                </div>
                                <div className={getTabClass("highlights")} style={{ padding: "10px 20px", cursor: "pointer" }} onClick={() => scrollToSection("highlights")}
                                    ref={(el) => {
                                        tabRefs.current["highlights"] = el;
                                    }}>
                                    <span className={getTabTextClass("highlights")}>Highlights</span>
                                </div>
                                <div className={getTabClass("itinerary")} style={{ padding: "10px 20px", cursor: "pointer" }} onClick={() => scrollToSection("itinerary")} ref={(el) => {
                                    tabRefs.current["itinerary"] = el;
                                }}>
                                    <span className={getTabTextClass("itinerary")}>Itinerary</span>
                                </div>
                                <div className={getTabClass("essentials")} style={{ padding: "10px 20px", cursor: "pointer" }} onClick={() => scrollToSection("essentials")} ref={(el) => {
                                    tabRefs.current["essentials"] = el;
                                }}>
                                    <span className={getTabTextClass("essentials")}>Essentials</span>
                                </div>
                                <div className={getTabClass("inclusions")} style={{ padding: "10px 20px", cursor: "pointer" }} onClick={() => scrollToSection("inclusions")} ref={(el) => {
                                    tabRefs.current["inclusions"] = el;
                                }}>
                                    <span className={getTabTextClass("inclusions")}>Inclusions & Exclusions</span>
                                </div>
                                <div className={getTabClass("info-links")} style={{ padding: "10px 20px", cursor: "pointer" }} onClick={() => scrollToSection("info-links")} ref={(el) => {
                                    tabRefs.current["info-links"] = el;
                                }}>
                                    <span className={getTabTextClass("info-links")}>Info Links and Downloads</span>
                                </div>
                                <div className={getTabClass("gallery")} style={{ padding: "10px 20px", cursor: "pointer" }} onClick={() => scrollToSection("gallery")} ref={(el) => {
                                    tabRefs.current["gallery"] = el;
                                }}>
                                    <span className={getTabTextClass("gallery")}>Photo Gallery</span>
                                </div>
                                <div className={getTabClass("reviews")} style={{ padding: "10px 20px", cursor: "pointer" }} onClick={() => scrollToSection("reviews")} ref={(el) => {
                                    tabRefs.current["reviews"] = el;
                                }}>
                                    <span className={getTabTextClass("reviews")}>Reviews</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-[60px]">
                            {/* Overview */}
                            <div id="overview" className="rounded-[8px] border border-[#D2D8E4] bg-white" style={{ padding: "20px 15px" }}>
                                <div className="flex flex-col gap-[14px] items-start">
                                    <div className="text-[#1A2F46] font-['Playfair_Display'] text-[20px] lg:text-[32px] font-semibold leading-normal">
                                        Overview
                                    </div>

                                    <p className="text-[#333] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">
                                        Organized by TravelPocket, this 9 Nights 10 Days Kailash Mansarovar Yatra by Helicopter from Lucknow offers a perfect blend of comfort and spirituality. It allows pilgrims to experience the divine power of Kailash Parvat and the serene beauty of Mansarovar Lake without the strenuous trek, making it accessible even for senior citizens and families.

                                        Known as the ultimate Tirth Yatra, the Kailash Mansarovar journey is not just a tour—it&apos;s a life-transforming spiritual experience. Pilgrims from around the world undertake this yatra seeking peace, enlightenment, and inner awakening.

                                        Whether you are a spiritual seeker, an adventurer, or a devotee of Lord Shiva, the Kailash Mansarovar Yatra by Helicopter is your calling. Let TravelPocket, a trusted name in spiritual travel, guide you through this once-in-a-lifetime journey with expert support, reliable services, and soulful hospitality.
                                    </p>
                                </div>
                            </div>

                            {/* Highlights */}
                            <div id="highlights" className="rounded-[8px] border border-[#D2D8E4] bg-white" style={{ padding: "20px 15px" }}>
                                <div className="flex flex-col gap-[14px] items-start">
                                    <div className="text-[#1A2F46] font-['Playfair_Display'] text-[20px] lg:text-[32px] font-semibold leading-normal">
                                        Highlights
                                    </div>

                                    <div className="flex flex-col gap-[8px]">
                                        <div className="flex flex-row gap-[8px] items-center">
                                            <img src="/images/detailpage/iconspace.svg" />
                                            <div className="text-[#333] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Service : Lucknow To Lucknow</div>
                                        </div>
                                        <div className="flex flex-row gap-[8px] items-center">
                                            <img src="/images/detailpage/iconspace.svg" />
                                            <div className="text-[#333] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Transportation : Lucknow to Nepalgunj and return by Innova</div>
                                        </div>
                                        <div className="flex flex-row gap-[8px] items-center">
                                            <img src="/images/detailpage/iconspace.svg" />
                                            <div className="text-[#333] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Nepalgunj - Simikot - Fix Aircraft</div>
                                        </div>
                                        <div className="flex flex-row gap-[8px] items-center">
                                            <img src="/images/detailpage/iconspace.svg" />
                                            <div className="text-[#333] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Simikot - Hilsa - Helicopter</div>
                                        </div>
                                        <div className="flex flex-row gap-[8px] items-center">
                                            <img src="/images/detailpage/iconspace.svg" />
                                            <div className="text-[#333] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Oxygen cylinder for emergency use</div>
                                        </div>
                                        <div className="flex flex-row gap-[8px] items-center">
                                            <img src="/images/detailpage/iconspace.svg" />
                                            <div className="text-[#333] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Cost-effective & comfortable trip</div>
                                        </div>
                                        <div className="flex flex-row gap-[8px] items-center">
                                            <img src="/images/detailpage/iconspace.svg" />
                                            <div className="text-[#333] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">5 Nights in Hotel & 5 Nights in guest house accommodation</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Itinenary */}
                            <div id="itinerary" className="rounded-[8px] border border-[#D2D8E4] bg-white" style={{ padding: "20px 15px" }}>

                                <div className="flex flex-col gap-[14px] items-start">
                                    <div className="flex flex-col gap-2 md:flex-row justify-between items-center w-full mb-2">
                                        <div className="text-[#1A2F46] font-['Playfair_Display'] text-[20px] lg:text-[32px] font-semibold leading-normal">
                                            Itinerary
                                        </div>
                                        <div className="rounded-[8px] bg-[#F4F4F4] p-2">
                                            <div className="flex flex-row gap-4 items-center">
                                                <div className="flex flex-col md:flex-row gap-2 items-center justify-center">
                                                    <img src="/images/detailpage/whatsapp.svg" alt="" className="" />
                                                    <div className="text-black font-[Figtree] text-center text-[11px] md:text-[12px] font-normal leading-none uppercase">Send Itinerary</div>
                                                </div>
                                                <div className="flex flex-col md:flex-row gap-2 items-center">
                                                    <img src="/images/detailpage/download.svg" alt="" className="" />
                                                    <div className="text-black font-[Figtree] text-center text-[11px] md:text-[12px] font-normal leading-none uppercase">Download Itinerary</div>
                                                </div>
                                                <div className="flex flex-col md:flex-row gap-2 items-center">
                                                    <img src="/images/detailpage/mail.svg" alt="" className="" />
                                                    <div className="text-black font-[Figtree] text-center text-[11px] lg:text-[12px] font-normal leading-none uppercase">Email Itinerary</div>
                                                </div>
                                                <div className="flex flex-col md:flex-row gap-2 items-center">
                                                    <img src="/images/detailpage/headset_mic.svg" alt="" className="" />
                                                    <div className="text-black font-[Figtree] text-center text-[11px] lg:text-[12px] font-normal leading-none uppercase">Talk to Experts</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div className="w-full">
                                        <ItineraryAccordion />
                                        <div className="w-full mb-4">
                                            <Separator className="bg-[#E97737] border border-[#E97737]" />
                                        </div>
                                        <ItineraryAccordion />
                                        <div className="w-full mb-4">
                                            <Separator className="bg-[#E97737] border border-[#E97737]" />
                                        </div>
                                        <ItineraryAccordion />
                                        <div className="w-full mb-4">
                                            <Separator className="bg-[#E97737] border border-[#E97737]" />
                                        </div>
                                        <ItineraryAccordion />
                                        <div className="w-full mb-4">
                                            <Separator className="bg-[#E97737] border border-[#E97737]" />
                                        </div>
                                    </div> */}
                                    <div className="w-full flex flex-col">
                                        {itineraryList.map((item, index) => (
                                            <React.Fragment key={item.day}>
                                                <ItineraryAccordion itinerary={[item]} /> {/* Pass single item as array */}
                                                {index !== itineraryList.length - 1 && (
                                                    <div className="w-full mb-4">
                                                        <Separator className="bg-[#E97737] border border-[#E97737]" />
                                                    </div>
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Essentials */}
                            <div id="essentials" className="rounded-[8px] border border-[#D2D8E4] bg-white" style={{ padding: "20px 15px" }}>
                                <div className="flex flex-col gap-[14px] items-start">
                                    <div className="text-[#1A2F46] font-['Playfair_Display'] text-[20px] lg:text-[32px] font-semibold leading-normal">
                                        Essentials
                                    </div>

                                    {/* <div className="flex flex-col lg:flex-row justify-between lg:w-full">
                                        <div className="flex flex-col gap-[8px] items-start">
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[16px] font-normal leading-[22px]">Thermal innerwear (tops and bottoms).</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[16px] font-normal leading-[22px]">Warm jackets and windcheaters (waterproof recommended)</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[16px] font-normal leading-[22px]">Comfortable trekking pants and T-shirts (quick-dry preferred).</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[16px] font-normal leading-[22px]">Woolen sweaters and fleece jackets</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[16px] font-normal leading-[22px]">Gloves (woolen and waterproof).</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[16px] font-normal leading-[22px]">Woolen cap, scarf, and balaclava.</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[16px] font-normal leading-[22px]">Multiple pairs of woolen and cotton socks.</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[16px] font-normal leading-[22px]">Lightweight raincoat or poncho.</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[16px] font-normal leading-[22px]">Comfortable walking shoes (waterproof with good grip).</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[16px] font-normal leading-[22px]">Sunglasses (UV-protected) and sunscreen (SPF 50+).</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[16px] font-normal leading-[22px]">Woolen mufflers and gaiters for extra warmth.</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[16px] font-normal leading-[22px]">Backpack (30-40 liters) with a rain cover.</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[16px] font-normal leading-[22px]">Daypack for essentials during treks.</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[16px] font-normal leading-[22px]">Daypack for essentials during treks.</div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-[8px] items-start">
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Trekking pole(s) for added support.</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Personal toiletries (toothbrush, toothpaste, soap, shampoo, etc.).</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Quick-dry towel and tissues.</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Moisturizer, lip balm (SPF protection), and antiseptic cream.</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Basic medicines (for altitude sickness, headaches, fever, etc.).</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Reusable water bottle or hydration pack.</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Energy bars, dry fruits, and light snacks.</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Reusable water bottle or hydration pack.</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Energy bars, dry fruits, and light snacks.</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">First-aid kit (basic items like band-aids, antiseptic wipes, etc.)</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Passport (valid for at least 6 months).</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Multiple passport-sized photographs.</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Photocopies of ID proof and travel documents.</div>
                                            </div>
                                            <div className="flex gap-[8px] items-center">
                                                <img src="/images/detailpage/arrow.svg" />
                                                <div className="text-[#333] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Travel insurance documents.</div>
                                            </div>
                                        </div>
                                    </div> */}

                                    <div className="w-full">
                                        <div className="flex flex-col lg:flex-row justify-between lg:w-full">
                                            {/* LEFT COLUMN */}
                                            <div className="flex flex-col gap-[8px] items-start">
                                                {displayedLeft.map((item, index) => (
                                                    <div key={index} className="flex gap-[8px] items-center">
                                                        <img src="/images/detailpage/arrow.svg" alt="" />
                                                        <div className="text-[#333] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">
                                                            {item.text}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* RIGHT COLUMN */}
                                            <div className="flex flex-col gap-[8px] items-start mt-4 lg:mt-0">
                                                {displayedRight.map((item, index) => (
                                                    <div key={index} className="flex gap-[8px] items-center">
                                                        <img src="/images/detailpage/arrow.svg" alt="" />
                                                        <div className="text-[#333] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">
                                                            {item.text}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* View All / View Less for mobile only */}
                                        {isMobile && hasExtraItems && (
                                            <div className="flex mt-4 lg:hidden">
                                                <div className="flex items-center gap-[8px] cursor-pointer rounded-[6px] border border-[#E97737] px-4 py-2" onClick={() => setShowAll(!showAll)}>
                                                    <div className="text-[#E97737] font-figtree text-[14px] font-semibold leading-normal uppercase">
                                                        {showAll ? "View Less" : "View All"}
                                                    </div>
                                                    <img src="/images/detailpage/arrow-icon.svg" width="18px" height="19px" />
                                                </div>
                                                {/* <button
                                                    onClick={() => setShowAll(!showAll)}
                                                    className="rounded-[6px] border border-[#E97737] px-4 py-2 text-[#E97737] font-[Figtree] text-[14px] font-semibold uppercase"
                                                >
                                                    {showAll ? "View Less" : "View All"}
                                                </button> */}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Inclusions | Exclusions */}
                            <div id="inclusions" className="rounded-[8px] border border-[#D2D8E4] bg-white" style={{ padding: "20px 15px" }}>
                                <div className="flex flex-row gap-[30px]">
                                    <div onClick={() => setActiveTab("inclusions")}
                                        className={`font-['Playfair_Display'] text-[20px] lg:text-[32px] font-semibold leading-normal transition-colors duration-200 ${activeTab === "inclusions"
                                            ? "text-[#1A2F46]"
                                            : "text-[#ADADAD] hover:text-[#1A2F46]"
                                            }`}>Inclusions</div>
                                    <div onClick={() => setActiveTab("exclusions")}
                                        className={`font-['Playfair_Display'] text-[20px] lg:text-[32px] font-semibold leading-normal transition-colors duration-200 ${activeTab === "exclusions"
                                            ? "text-[#1A2F46]"
                                            : "text-[#ADADAD] hover:text-[#1A2F46]"
                                            }`}>Exclusions</div>
                                </div>
                                <Separator orientation="horizontal" className="w-full bg-[#BBB] border border-[#BBB] mt-[20px] mb-[20px]" />

                                {activeTab === "inclusions" ? (
                                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                                        <div className="flex flex-col items-start gap-[9px]">
                                            <img src="/images/detailpage/Frame_1.svg" />
                                            <p className="text-black font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[24px]">
                                                Tibet & Kailash Permits: All necessary entry permissions and group visas
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-start gap-[9px]">
                                            <img src="/images/detailpage/Frame_1.svg" />
                                            <p className="text-black font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[24px]">
                                                Chinese Visa Fee: Included in the package.
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-start gap-[9px]">
                                            <img src="/images/detailpage/Frame_1.svg" />
                                            <p className="text-black font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[24px]">
                                                Transportation: Lucknow–Nepalgunj by coach, Nepalgunj–Simikot by aircraft, Simikot–Hilsa by helicopter, and Tibet by luxury coach.
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-start gap-[9px]">
                                            <img src="/images/detailpage/Frame_3.svg" />
                                            <p className="text-black font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[24px]">
                                                Accommodation: Hotel stay in Nepalgunj and guesthouses in Tibet.
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-start gap-[9px]">
                                            <img src="/images/detailpage/Frame_1.svg" />
                                            <p className="text-black font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[24px]">
                                                Permits: Upper Humla permit fee included.
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-start gap-[9px]">
                                            <img src="/images/detailpage/cutlery.svg" />
                                            <p className="text-black font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[24px]">
                                                Support Services: Support truck for kitchen equipment and food supplies
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-start gap-[9px]">
                                            <img src="/images/detailpage/svg4089.svg" />
                                            <p className="text-black font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[24px]">
                                                Meals: All vegetarian meals throughout the journey.
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-start gap-[9px]">
                                            <img src="/images/detailpage/bus.svg" />
                                            <p className="text-black font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[24px]">
                                                Overland transfer in Tibet by luxury coach.
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-start gap-[9px]">
                                            <img src="/images/detailpage/winter-jacket.svg" />
                                            <p className="text-black font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[24px]">
                                                Gear: Complimentary duffle bag, day pack, and down jacket
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-start gap-[9px]">
                                            <img src="/images/detailpage/tent.svg" />
                                            <p className="text-black font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[24px]">
                                                Camping Equipment: Tents, utensils, and other essentials for camping.
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-start gap-[9px]">
                                            <img src="/images/detailpage/tour-guide.svg" />
                                            <p className="text-black font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[24px]">
                                                Guides: Expert Tibetan guide from FEC.
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-start gap-[9px]">
                                            <img src="/images/detailpage/capa.svg" />
                                            <p className="text-black font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[24px]">
                                                Health & Safety: Oxygen cylinders provided for the group.
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-start gap-[9px]">
                                            <img src="/images/detailpage/rupee.svg" />
                                            <p className="text-black font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[24px]">
                                                Entrance fees in Tibet
                                            </p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-[#333] font-[Figtree] text-[14px] lg:text-[16px] italic">
                                        Exclusion details will be added soon...
                                    </div>
                                )}

                            </div>

                            {/* Information Links and Downloads */}
                            <div id="info-links" className="rounded-[8px] border border-[#D2D8E4] bg-white" style={{ padding: "20px 15px" }}>
                                <div className="flex flex-col items-start gap-[14px]">
                                    <div className="text-[#1A2F46] font-['Playfair_Display'] text-[20px] lg:text-[32px] font-semibold leading-normal">
                                        Information Links and Downloads
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6 w-full">
                                        <div className="rounded-[8px] border border-[#D2D8E4] cursor-pointer" style={{ padding: "14px 16px" }}>
                                            <div className="flex flex-col items-start gap-3 lg:gap-[4px]">
                                                <img src="/images/detailpage/info.svg" />
                                                <div className="flex flex-row items-center gap-1 flex-wrap">
                                                    <div className="text-[#000] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Weather Info</div>
                                                    <img src="/images/detailpage/arrow_outward.svg" className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="rounded-[8px] border border-[#D2D8E4] cursor-pointer" style={{ padding: "14px 16px" }}>
                                            <div className="flex flex-col items-start gap-3 lg:gap-[4px]">
                                                <img src="/images/detailpage/info.svg" />
                                                <div className="flex flex-row items-center gap-1 flex-wrap">
                                                    <div className="text-[#000] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Documents</div>
                                                    <img src="/images/detailpage/arrow_outward.svg" className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="rounded-[8px] border border-[#D2D8E4] cursor-pointer" style={{ padding: "14px 16px" }}>
                                            <div className="flex flex-col items-start gap-3 lg:gap-[4px]">
                                                <img src="/images/detailpage/info.svg" />
                                                <div className="flex flex-row items-center gap-1 flex-wrap">
                                                    <div className="text-[#000] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Forms</div>
                                                    <img src="/images/detailpage/arrow_outward.svg" className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="rounded-[8px] border border-[#D2D8E4] cursor-pointer" style={{ padding: "14px 16px" }}>
                                            <div className="flex flex-col items-start gap-3 lg:gap-[4px]">
                                                <img src="/images/detailpage/info.svg" />
                                                <div className="flex flex-row items-center gap-1 flex-wrap">
                                                    <div className="text-[#000] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Registration Process</div>
                                                    <img src="/images/detailpage/arrow_outward.svg" className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="rounded-[8px] border border-[#D2D8E4] cursor-pointer" style={{ padding: "14px 16px" }}>
                                            <div className="flex flex-col items-start gap-3 lg:gap-[4px]">
                                                <img src="/images/detailpage/info.svg" />
                                                <div className="flex flex-row items-center gap-1 flex-wrap">
                                                    <div className="text-[#000] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Cancellation Policy</div>
                                                    <img src="/images/detailpage/arrow_outward.svg" className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="rounded-[8px] border border-[#D2D8E4] cursor-pointer" style={{ padding: "14px 16px" }}>
                                            <div className="flex flex-col items-start gap-3 lg:gap-[4px]">
                                                <img src="/images/detailpage/info.svg" />
                                                <div className="flex flex-row items-center gap-1 flex-wrap">
                                                    <div className="text-[#000] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Payment Terms</div>
                                                    <img src="/images/detailpage/arrow_outward.svg" className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="rounded-[8px] border border-[#D2D8E4] cursor-pointer" style={{ padding: "14px 16px" }}>
                                            <div className="flex flex-col items-start gap-3 lg:gap-[4px]">
                                                <img src="/images/detailpage/info.svg" />
                                                <div className="flex flex-row items-center gap-1 flex-wrap">
                                                    <div className="text-[#000] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">Tour Manager Info</div>
                                                    <img src="/images/detailpage/arrow_outward.svg" className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="rounded-[8px] border border-[#D2D8E4] cursor-pointer" style={{ padding: "14px 16px" }}>
                                            <div className="flex flex-col items-start gap-3 lg:gap-[4px]">
                                                <img src="/images/detailpage/info.svg" />
                                                <div className="flex flex-row items-center gap-1 flex-wrap">
                                                    <div className="text-[#000] font-[Figtree] text-[14px] lg:text-[16px] font-normal leading-[22px]">FAQs</div>
                                                    <img src="/images/detailpage/arrow_outward.svg" className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Photo Gallery */}
                            <div id="gallery" className="rounded-[8px] border border-[#D2D8E4] bg-white" style={{ padding: "25px 15px" }}>
                                <div className="flex flex-col items-start gap-[14px]">
                                    <div className="text-[#1A2F46] font-['Playfair_Display'] text-[20px] lg:text-[32px] font-semibold leading-normal">
                                        Photo Gallery
                                    </div>

                                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 w-full">
                                        <div className="flex">
                                            <img src="/images/detailpage/photogallery/photo_1.jpg" className="cursor-pointer rounded-lg" />
                                        </div>
                                        <div className="flex">
                                            <img src="/images/detailpage/photogallery/photo_2.png" className="cursor-pointer rounded-lg" />
                                        </div>
                                        <div className="flex">
                                            <img src="/images/detailpage/photogallery/photo_3.jpg" className="cursor-pointer rounded-lg" />
                                        </div>
                                        <div className="flex">
                                            <img src="/images/detailpage/photogallery/photo_4.png" className="cursor-pointer rounded-lg" />
                                        </div>
                                        <div className="flex">
                                            <img src="/images/detailpage/photogallery/photo_5.png" className="cursor-pointer rounded-lg" />
                                        </div>
                                        <div className="flex">
                                            <img src="/images/detailpage/photogallery/photo_6.png" className="cursor-pointer rounded-lg" />
                                        </div>
                                        <div className="flex">
                                            <img src="/images/detailpage/photogallery/photo_8.jpg" className="cursor-pointer rounded-lg" />
                                        </div>
                                        <div className="flex relative">
                                            <img src="/images/detailpage/photogallery/photo_7.png" className="cursor-pointer rounded-2xl" />
                                            <div className="absolute inset-0 bg-black/70 flex items-center justify-center text-white text-center font-[Inter] text-[14px] font-semibold leading-normal cursor-pointer rounded-lg">
                                                View all Photos
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* IReviews*/}
                            <div id="reviews" className="rounded-[8px] border border-[#D2D8E4] bg-white" style={{ padding: "20px 15px" }}>

                                {/**contents */}
                                <div className="flex flex-col items-start gap-[14px]">

                                    <div className="flex justify-between items-center w-full">
                                        <div className="text-[#1A2F46] font-['Playfair_Display'] text-[20px] lg:text-[32px] font-semibold leading-normal">
                                            Reviews
                                        </div>

                                        <div className="hidden md:block rounded-[6px] border border-[#E97737]" style={{ padding: "10px 15px" }}>
                                            <div className="flex items-center gap-[8px] cursor-pointer">
                                                <div className="text-[#E97737] font-figtree text-[14px] font-semibold leading-normal uppercase">
                                                    View all
                                                </div>
                                                <img src="/images/detailpage/arrow-icon.svg" width="18px" height="19px" />
                                            </div>
                                        </div>
                                    </div>

                                    {/**Review Cards with scroller for tablet and larger device */}
                                    <div className="hidden md:block relative w-full">
                                        {/* Slider container */}
                                        <div
                                            ref={sliderRef}
                                            className="flex overflow-x-auto scroll-smooth no-scrollbar gap-6 px-2 py-6"
                                        >
                                            <div className="rounded-[8px] border border-[#D2D8E4] bg-white w-[320px] flex-shrink-0" style={{ padding: "20px 15px" }}>
                                                <div className="flex items-start gap-4">
                                                    <img src="/images/detailpage/review_photo.jpg" alt="Profile" className="w-16 h-16 rounded-full object-cover" />
                                                    <div className="flex-1">
                                                        <div className="flex flex-col gap-[12px]">
                                                            <div className="flex flex-col gap-[10px]">
                                                                <div className="text-black font-['Inter'] text-[14px] font-semibold leading-none">My dream trip to see Kailash Manasarovar happened</div>
                                                                <div className="overflow-hidden text-black text-ellipsis font-['Inter'] text-[12px] font-normal leading-none">Kailash Manasarovar doordarshan yatra arranged by Travel pocket was very systematic, professional and sincere. The itinerary was followed...</div>
                                                            </div>
                                                            <div className="flex gap-[8px] items-center cursor-pointer">
                                                                <div className="text-[#E97737] font-['Figtree'] text-[14px] font-medium leading-none uppercase">READ MORE</div>
                                                                <img src="/images/detailpage/arrow-icon.svg" width="18px" height="19px" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="rounded-[8px] border border-[#D2D8E4] bg-white w-[320px] flex-shrink-0" style={{ padding: "20px 15px" }}>
                                                <div className="flex items-start gap-4">
                                                    <img src="/images/detailpage/review_photo.jpg" alt="Profile" className="w-16 h-16 rounded-full object-cover" />
                                                    <div className="flex-1">
                                                        <div className="flex flex-col gap-[12px]">
                                                            <div className="flex flex-col gap-[10px]">
                                                                <div className="text-black font-['Inter'] text-[14px] font-semibold leading-none">My dream trip to see Kailash Manasarovar happened</div>
                                                                <div className="overflow-hidden text-black text-ellipsis font-['Inter'] text-[12px] font-normal leading-none">Kailash Manasarovar doordarshan yatra arranged by Travel pocket was very systematic, professional and sincere. The itinerary was followed...</div>
                                                            </div>
                                                            <div className="flex gap-[8px] items-center cursor-pointer">
                                                                <div className="text-[#E97737] font-['Figtree'] text-[14px] font-medium leading-none uppercase">READ MORE</div>
                                                                <img src="/images/detailpage/arrow-icon.svg" width="18px" height="19px" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="rounded-[8px] border border-[#D2D8E4] bg-white w-[320px] flex-shrink-0" style={{ padding: "20px 15px" }}>
                                                <div className="flex items-start gap-4">
                                                    <img src="/images/detailpage/review_photo.jpg" alt="Profile" className="w-16 h-16 rounded-full object-cover" />
                                                    <div className="flex-1">
                                                        <div className="flex flex-col gap-[12px]">
                                                            <div className="flex flex-col gap-[10px]">
                                                                <div className="text-black font-['Inter'] text-[14px] font-semibold leading-none">My dream trip to see Kailash Manasarovar happened</div>
                                                                <div className="overflow-hidden text-black text-ellipsis font-['Inter'] text-[12px] font-normal leading-none">Kailash Manasarovar doordarshan yatra arranged by Travel pocket was very systematic, professional and sincere. The itinerary was followed...</div>
                                                            </div>
                                                            <div className="flex gap-[8px] items-center cursor-pointer">
                                                                <div className="text-[#E97737] font-['Figtree'] text-[14px] font-medium leading-none uppercase">READ MORE</div>
                                                                <img src="/images/detailpage/arrow-icon.svg" width="18px" height="19px" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="rounded-[8px] border border-[#D2D8E4] bg-white w-[320px] flex-shrink-0" style={{ padding: "20px 15px" }}>
                                                <div className="flex items-start gap-4">
                                                    <img src="/images/detailpage/review_photo.jpg" alt="Profile" className="w-16 h-16 rounded-full object-cover" />
                                                    <div className="flex-1">
                                                        <div className="flex flex-col gap-[12px]">
                                                            <div className="flex flex-col gap-[10px]">
                                                                <div className="text-black font-['Inter'] text-[14px] font-semibold leading-none">My dream trip to see Kailash Manasarovar happened</div>
                                                                <div className="overflow-hidden text-black text-ellipsis font-['Inter'] text-[12px] font-normal leading-none">Kailash Manasarovar doordarshan yatra arranged by Travel pocket was very systematic, professional and sincere. The itinerary was followed...</div>
                                                            </div>
                                                            <div className="flex gap-[8px] items-center cursor-pointer">
                                                                <div className="text-[#E97737] font-['Figtree'] text-[14px] font-medium leading-none uppercase">READ MORE</div>
                                                                <img src="/images/detailpage/arrow-icon.svg" width="18px" height="19px" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="rounded-[8px] border border-[#D2D8E4] bg-white w-[320px] flex-shrink-0" style={{ padding: "20px 15px" }}>
                                                <div className="flex items-start gap-4">
                                                    <img src="/images/detailpage/review_photo.jpg" alt="Profile" className="w-16 h-16 rounded-full object-cover" />
                                                    <div className="flex-1">
                                                        <div className="flex flex-col gap-[12px]">
                                                            <div className="flex flex-col gap-[10px]">
                                                                <div className="text-black font-['Inter'] text-[14px] font-semibold leading-none">My dream trip to see Kailash Manasarovar happened</div>
                                                                <div className="overflow-hidden text-black text-ellipsis font-['Inter'] text-[12px] font-normal leading-none">Kailash Manasarovar doordarshan yatra arranged by Travel pocket was very systematic, professional and sincere. The itinerary was followed...</div>
                                                            </div>
                                                            <div className="flex gap-[8px] items-center cursor-pointer">
                                                                <div className="text-[#E97737] font-['Figtree'] text-[14px] font-medium leading-none uppercase">READ MORE</div>
                                                                <img src="/images/detailpage/arrow-icon.svg" width="18px" height="19px" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="rounded-[8px] border border-[#D2D8E4] bg-white w-[320px] flex-shrink-0" style={{ padding: "20px 15px" }}>
                                                <div className="flex items-start gap-4">
                                                    <img src="/images/detailpage/review_photo.jpg" alt="Profile" className="w-16 h-16 rounded-full object-cover" />
                                                    <div className="flex-1">
                                                        <div className="flex flex-col gap-[12px]">
                                                            <div className="flex flex-col gap-[10px]">
                                                                <div className="text-black font-['Inter'] text-[14px] font-semibold leading-none">My dream trip to see Kailash Manasarovar happened</div>
                                                                <div className="overflow-hidden text-black text-ellipsis font-['Inter'] text-[12px] font-normal leading-none">Kailash Manasarovar doordarshan yatra arranged by Travel pocket was very systematic, professional and sincere. The itinerary was followed...</div>
                                                            </div>
                                                            <div className="flex gap-[8px] items-center cursor-pointer">
                                                                <div className="text-[#E97737] font-['Figtree'] text-[14px] font-medium leading-none uppercase">READ MORE</div>
                                                                <img src="/images/detailpage/arrow-icon.svg" width="18px" height="19px" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="rounded-[8px] border border-[#D2D8E4] bg-white w-[320px] flex-shrink-0" style={{ padding: "20px 15px" }}>
                                                <div className="flex items-start gap-4">
                                                    <img src="/images/detailpage/review_photo.jpg" alt="Profile" className="w-16 h-16 rounded-full object-cover" />
                                                    <div className="flex-1">
                                                        <div className="flex flex-col gap-[12px]">
                                                            <div className="flex flex-col gap-[10px]">
                                                                <div className="text-black font-['Inter'] text-[14px] font-semibold leading-none">My dream trip to see Kailash Manasarovar happened</div>
                                                                <div className="overflow-hidden text-black text-ellipsis font-['Inter'] text-[12px] font-normal leading-none">Kailash Manasarovar doordarshan yatra arranged by Travel pocket was very systematic, professional and sincere. The itinerary was followed...</div>
                                                            </div>
                                                            <div className="flex gap-[8px] items-center cursor-pointer">
                                                                <div className="text-[#E97737] font-['Figtree'] text-[14px] font-medium leading-none uppercase">READ MORE</div>
                                                                <img src="/images/detailpage/arrow-icon.svg" width="18px" height="19px" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                    {/**ends here */}

                                    {/**Review Cards mobile device */}
                                    <div className="md:hidden flex flex-col items-start gap-[16px]">
                                        <div className="rounded-[8px] border border-[#D2D8E4] bg-white flex-shrink-0" style={{ padding: "20px 15px" }}>
                                            <div className="flex items-start gap-4">
                                                <img src="/images/detailpage/review_photo.jpg" alt="Profile" className="w-16 h-16 rounded-full object-cover" />
                                                <div className="flex-1">
                                                    <div className="flex flex-col gap-[12px]">
                                                        <div className="flex flex-col gap-[10px]">
                                                            <div className="text-black font-['Inter'] text-[14px] font-semibold leading-none">My dream trip to see Kailash Manasarovar happened</div>
                                                            <div className="overflow-hidden text-black text-ellipsis font-['Inter'] text-[12px] font-normal leading-none">Kailash Manasarovar doordarshan yatra arranged by Travel pocket was very systematic, professional and sincere. The itinerary was followed...</div>
                                                        </div>
                                                        <div className="flex gap-[8px] items-center cursor-pointer">
                                                            <div className="text-[#E97737] font-['Figtree'] text-[14px] font-medium leading-none uppercase">READ MORE</div>
                                                            <img src="/images/detailpage/arrow-icon.svg" width="18px" height="19px" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="rounded-[8px] border border-[#D2D8E4] bg-white flex-shrink-0" style={{ padding: "20px 15px" }}>
                                            <div className="flex items-start gap-4">
                                                <img src="/images/detailpage/review_photo.jpg" alt="Profile" className="w-16 h-16 rounded-full object-cover" />
                                                <div className="flex-1">
                                                    <div className="flex flex-col gap-[12px]">
                                                        <div className="flex flex-col gap-[10px]">
                                                            <div className="text-black font-['Inter'] text-[14px] font-semibold leading-none">My dream trip to see Kailash Manasarovar happened</div>
                                                            <div className="overflow-hidden text-black text-ellipsis font-['Inter'] text-[12px] font-normal leading-none">Kailash Manasarovar doordarshan yatra arranged by Travel pocket was very systematic, professional and sincere. The itinerary was followed...</div>
                                                        </div>
                                                        <div className="flex gap-[8px] items-center cursor-pointer">
                                                            <div className="text-[#E97737] font-['Figtree'] text-[14px] font-medium leading-none uppercase">READ MORE</div>
                                                            <img src="/images/detailpage/arrow-icon.svg" width="18px" height="19px" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="rounded-[8px] border border-[#D2D8E4] bg-white flex-shrink-0" style={{ padding: "20px 15px" }}>
                                            <div className="flex items-start gap-4">
                                                <img src="/images/detailpage/review_photo.jpg" alt="Profile" className="w-16 h-16 rounded-full object-cover" />
                                                <div className="flex-1">
                                                    <div className="flex flex-col gap-[12px]">
                                                        <div className="flex flex-col gap-[10px]">
                                                            <div className="text-black font-['Inter'] text-[14px] font-semibold leading-none">My dream trip to see Kailash Manasarovar happened</div>
                                                            <div className="overflow-hidden text-black text-ellipsis font-['Inter'] text-[12px] font-normal leading-none">Kailash Manasarovar doordarshan yatra arranged by Travel pocket was very systematic, professional and sincere. The itinerary was followed...</div>
                                                        </div>
                                                        <div className="flex gap-[8px] items-center cursor-pointer">
                                                            <div className="text-[#E97737] font-['Figtree'] text-[14px] font-medium leading-none uppercase">READ MORE</div>
                                                            <img src="/images/detailpage/arrow-icon.svg" width="18px" height="19px" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/**ends here */}

                                    {/**View All mobile device */}
                                    <div className="md:hidden rounded-[6px] border border-[#E97737]" style={{ padding: "10px 15px" }}>
                                        <div className="flex items-center gap-[8px] cursor-pointer">
                                            <div className="text-[#E97737] font-figtree text-[14px] font-semibold leading-normal uppercase">
                                                View all
                                            </div>
                                            <img src="/images/detailpage/arrow-icon.svg" width="18px" height="19px" />
                                        </div>
                                    </div>
                                    {/** ends here */}

                                </div>

                                {/* Btns left and right */}
                                <div className="hidden md:flex justify-center gap-8">
                                    <img src="/images/detailpage/back_arrow.png" className="cursor-pointer" onClick={() => scroll('left')} />
                                    <img src="/images/detailpage/forward_arrow.png" className="cursor-pointer" onClick={() => scroll('right')} />
                                </div>
                            </div>

                        </div>
                    </div>
                    {/**Left Section ends here */}

                    {/**Right Section */}
                    <div className="w-full">
                        <div className="hidden lg:flex flex-col gap-[20px] items-start items-center">
                            <div className="flex flex-col gap-[10px] items-start">
                                <div className="text-black font-['Figtree'] text-[20px] not-italic font-semibold leading-none">Select Departure Month</div>
                                <div className="flex gap-[14px] flex-wrap">
                                    <div className="max-w-[50px] rounded-lg border border-[#D2D8E4] bg-white" style={{ padding: "12px 12px" }}>
                                        <div className="flex flex-col items-center gap-[8px]">
                                            <div className="text-[#4D4D4D] text-center font-['Figtree'] text-base not-italic font-normal leading-none">Aug</div>
                                            <div className="text-[#4D4D4D] text-center font-['Figtree'] text-[12px] not-italic font-normal leading-none">2025</div>
                                        </div>
                                    </div>
                                    <div className="max-w-[50px] rounded-lg border border-[#D2D8E4] bg-[#4D4D4D]" style={{ padding: "12px 12px" }}>
                                        <div className="flex flex-col items-center gap-[8px]">
                                            <div className="text-[#FFFFFF] text-center font-['Figtree'] text-base not-italic font-normal leading-none">Sep</div>
                                            <div className="text-[#FFFFFF] text-center font-['Figtree'] text-[12px] not-italic font-normal leading-none">2025</div>
                                        </div>
                                    </div>
                                    <div className="max-w-[50px] rounded-lg border border-[#D2D8E4] bg-white" style={{ padding: "12px 12px" }}>
                                        <div className="flex flex-col items-center gap-[8px]">
                                            <div className="text-[#4D4D4D] text-center font-['Figtree'] text-base not-italic font-normal leading-none">Oct</div>
                                            <div className="text-[#4D4D4D] text-center font-['Figtree'] text-[12px] not-italic font-normal leading-none">2025</div>
                                        </div>
                                    </div>
                                    <div className="max-w-[50px] rounded-lg border border-[#D2D8E4] bg-white" style={{ padding: "12px 12px" }}>
                                        <div className="flex flex-col items-center gap-[8px]">
                                            <div className="text-[#4D4D4D] text-center font-['Figtree'] text-base not-italic font-normal leading-none">Nov</div>
                                            <div className="text-[#4D4D4D] text-center font-['Figtree'] text-[12px] not-italic font-normal leading-none">2025</div>
                                        </div>
                                    </div>
                                    <div className="max-w-[50px] rounded-lg border border-[#D2D8E4] bg-white" style={{ padding: "12px 12px" }}>
                                        <div className="flex flex-col items-center gap-[8px]">
                                            <div className="text-[#4D4D4D] text-center font-['Figtree'] text-base not-italic font-normal leading-none">Dec</div>
                                            <div className="text-[#4D4D4D] text-center font-['Figtree'] text-[12px] not-italic font-normal leading-none">2025</div>
                                        </div>
                                    </div>
                                </div>

                                {/** Departures */}
                                <div className="rounded-lg bg-[#EBF5F7] w-full">
                                    <div className="flex justify-between items-center" style={{ padding: "30px 20px" }}>
                                        <div className="text-black font-['Figtree'] text-base not-italic font-semibold leading-none capitalize">Sept 2025 Departures</div>
                                        <div className="text-black text-right font-['Figtree'] text-[12px] not-italic font-normal leading-none uppercase">3 dates </div>
                                    </div>

                                    {/**Scroll Area */}
                                    <ScrollArea className="max-h-[550px]">
                                        <div className="flex flex-col gap-[20px] max-h-[550px]" style={{ padding: "30px 20px" }}>
                                            <div className="rounded-lg bg-white shadow-[0_6px_8px_0_rgba(0,0,0,0.2)]">
                                                <div className="relative">
                                                    <Badge variant="registration" icon="/images/detailpage/green_dot.svg" className="absolute top-[0px] left-[1px] z-10 text-xs font-semibold px-3 py-1 rounded-[4px] bg-[#DFF8F1]">
                                                        <span className="text-[#04852D] font-['Figtree'] text-[12px] font-semibold leading-[14px] uppercase">
                                                            Available
                                                        </span>
                                                    </Badge>
                                                </div>
                                                <div className="flex flex-col gap-[12px] mt-2" style={{ padding: "10px 10px" }}>
                                                    <div className="flex flex-col gap-[12px]">
                                                        <div className="flex flex-row gap-[50px]">
                                                            <div className="flex gap-[20px]">
                                                                <div className="flex flex-gap[14px] items-center">
                                                                    <div className="flex flex-col gap-[8px]">
                                                                        <div className="text-[#5D5D5D] font-['Figtree'] text-[10px] not-italic font-semibold leading-none uppercase">Start DATE</div>
                                                                        <div className="text-black font-['Figtree'] text-base not-italic font-bold leading-none">02 Sep,Tue</div>
                                                                    </div>
                                                                    <img src="images/detailpage/arrow-right_1.svg" className="ml-4 mr-4" />
                                                                    <div className="flex flex-col gap-[8px]">
                                                                        <div className="text-[#5D5D5D] font-['Figtree'] text-[10px] not-italic font-semibold leading-none uppercase">END DATE</div>
                                                                        <div className="text-black font-['Figtree'] text-base not-italic font-bold leading-none">13 Sep,Tue</div>
                                                                    </div>
                                                                </div>
                                                                <div className="flex flex-col items-start gap-[4px] justify-center">
                                                                    <div className="text-[#5D5D5D] font-['Figtree'] text-[10px] not-italic font-semibold leading-none uppercase">Seats remaining</div>
                                                                    <div className="rounded-[40px] bg-[#17A74E] w-[29px] h-[29px] flex flex-col items-center justify-center">
                                                                        <div className="text-white font-['Figtree'] text-[14px] not-italic font-bold leading-none">28</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="rounded-[6px] bg-[#E9FBFF]" style={{ padding: "8px 10px" }}>
                                                                <div className="flex flex-col gap-[10px]">
                                                                    <div className="flex gap-[8px] items-center">
                                                                        <img src="/images/detailpage/chat-bubble_1.svg" className="" />
                                                                        <div className="text-[#1C8CA7] font-['Figtree'] text-[11px] not-italic font-semibold leading-none uppercase">Chat with us</div>
                                                                    </div>
                                                                    <Separator className="w-full bg-[#BBB] border border-[#BBB]" />
                                                                    <div className="flex gap-[8px] items-center">
                                                                        <img src="/images/detailpage/mail_1.svg" className="" />
                                                                        <div className="text-[#1C8CA7] font-['Figtree'] text-[11px] not-italic font-semibold leading-none uppercase">Send Email</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <Separator orientation="horizontal" className="w-full bg-[#BBB] border border-[#BBB]" />
                                                        <div className="flex flex-col gap-[6px]">
                                                            <div className="text-[#4D4D4D] font-['Figtree'] text-[11px] not-italic font-bold leading-none">SPECIAL NOTE</div>
                                                            <div className="text-black font-['Figtree'] text-[12px] not-italic font-normal leading-none">07 Sep is full moon day on this special day we will be at mansarovar lake for holy dip</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style={{ padding: "10px 10px" }}>
                                                    <div className="w-full rounded-[6px] bg-[#E97737]" style={{ padding: "10px 10px" }}>
                                                        <div className="flex items-center justify-center">
                                                            <div className="text-white font-['Figtree'] text-[14px] not-italic font-semibold leading-[24px] uppercase">BOOK NOW  |  reserve your seat*</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="rounded-lg bg-white shadow-[0_6px_8px_0_rgba(0,0,0,0.2)]">
                                                <div className="relative">
                                                    <Badge variant="warning" icon="/images/detailpage/dot_brown.svg" className="absolute top-[0px] left-[1px] z-10 text-xs font-semibold px-3 py-1 rounded-[4px] bg-[#FFFAE1]">
                                                        <span className="text-[#853C04] font-['Figtree'] text-[12px] font-semibold leading-[14px] uppercase">
                                                            Filling Fast
                                                        </span>
                                                    </Badge>
                                                </div>
                                                <div className="flex flex-col gap-[12px] mt-2" style={{ padding: "10px 10px" }}>
                                                    <div className="flex flex-col gap-[12px]">
                                                        <div className="flex flex-row gap-[50px]">
                                                            <div className="flex gap-[20px]">
                                                                <div className="flex flex-gap[14px] items-center">
                                                                    <div className="flex flex-col gap-[8px]">
                                                                        <div className="text-[#5D5D5D] font-['Figtree'] text-[10px] not-italic font-semibold leading-none uppercase">Start DATE</div>
                                                                        <div className="text-black font-['Figtree'] text-base not-italic font-bold leading-none">02 Sep,Tue</div>
                                                                    </div>
                                                                    <img src="images/detailpage/arrow-right_1.svg" className="ml-4 mr-4" />
                                                                    <div className="flex flex-col gap-[8px]">
                                                                        <div className="text-[#5D5D5D] font-['Figtree'] text-[10px] not-italic font-semibold leading-none uppercase">END DATE</div>
                                                                        <div className="text-black font-['Figtree'] text-base not-italic font-bold leading-none">13 Sep,Tue</div>
                                                                    </div>
                                                                </div>
                                                                <div className="flex flex-col items-start gap-[4px] justify-center">
                                                                    <div className="text-[#5D5D5D] font-['Figtree'] text-[10px] not-italic font-semibold leading-none uppercase">Seats remaining</div>
                                                                    <div className="rounded-[40px] bg-[#17A74E] w-[29px] h-[29px] flex flex-col items-center justify-center">
                                                                        <div className="text-white font-['Figtree'] text-[14px] not-italic font-bold leading-none">28</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="rounded-[6px] bg-[#E9FBFF]" style={{ padding: "8px 10px" }}>
                                                                <div className="flex flex-col gap-[10px]">
                                                                    <div className="flex gap-[8px] items-center">
                                                                        <img src="/images/detailpage/chat-bubble_1.svg" className="" />
                                                                        <div className="text-[#1C8CA7] font-['Figtree'] text-[11px] not-italic font-semibold leading-none uppercase">Chat with us</div>
                                                                    </div>
                                                                    <Separator className="w-full bg-[#BBB] border border-[#BBB]" />
                                                                    <div className="flex gap-[8px] items-center">
                                                                        <img src="/images/detailpage/mail_1.svg" className="" />
                                                                        <div className="text-[#1C8CA7] font-['Figtree'] text-[11px] not-italic font-semibold leading-none uppercase">Send Email</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <Separator orientation="horizontal" className="w-full bg-[#BBB] border border-[#BBB]" />
                                                        <div className="flex flex-col gap-[6px]">
                                                            <div className="text-[#4D4D4D] font-['Figtree'] text-[11px] not-italic font-bold leading-none">SPECIAL NOTE</div>
                                                            <div className="text-black font-['Figtree'] text-[12px] not-italic font-normal leading-none">07 Sep is full moon day on this special day we will be at mansarovar lake for holy dip</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style={{ padding: "10px 10px" }}>
                                                    <div className="w-full rounded-[6px] bg-[#E97737]" style={{ padding: "10px 10px" }}>
                                                        <div className="flex items-center justify-center">
                                                            <div className="text-white font-['Figtree'] text-[14px] not-italic font-semibold leading-[24px] uppercase">BOOK NOW  |  reserve your seat*</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="rounded-lg bg-white shadow-[0_6px_8px_0_rgba(0,0,0,0.2)]">
                                                <div className="relative">
                                                    <Badge variant="warning" icon="/images/detailpage/dot_brown.svg" className="absolute top-[0px] left-[1px] z-10 text-xs font-semibold px-3 py-1 rounded-[4px] bg-[#FFFAE1]">
                                                        <span className="text-[#853C04] font-['Figtree'] text-[12px] font-semibold leading-[14px] uppercase">
                                                            Filling Fast
                                                        </span>
                                                    </Badge>
                                                </div>
                                                <div className="flex flex-col gap-[12px] mt-2" style={{ padding: "10px 10px" }}>
                                                    <div className="flex flex-col gap-[12px]">
                                                        <div className="flex flex-row gap-[50px]">
                                                            <div className="flex gap-[20px]">
                                                                <div className="flex flex-gap[14px] items-center">
                                                                    <div className="flex flex-col gap-[8px]">
                                                                        <div className="text-[#5D5D5D] font-['Figtree'] text-[10px] not-italic font-semibold leading-none uppercase">Start DATE</div>
                                                                        <div className="text-black font-['Figtree'] text-base not-italic font-bold leading-none">02 Sep,Tue</div>
                                                                    </div>
                                                                    <img src="images/detailpage/arrow-right_1.svg" className="ml-4 mr-4" />
                                                                    <div className="flex flex-col gap-[8px]">
                                                                        <div className="text-[#5D5D5D] font-['Figtree'] text-[10px] not-italic font-semibold leading-none uppercase">END DATE</div>
                                                                        <div className="text-black font-['Figtree'] text-base not-italic font-bold leading-none">13 Sep,Tue</div>
                                                                    </div>
                                                                </div>
                                                                <div className="flex flex-col items-start gap-[4px] justify-center">
                                                                    <div className="text-[#5D5D5D] font-['Figtree'] text-[10px] not-italic font-semibold leading-none uppercase">Seats remaining</div>
                                                                    <div className="rounded-[40px] bg-[#17A74E] w-[29px] h-[29px] flex flex-col items-center justify-center">
                                                                        <div className="text-white font-['Figtree'] text-[14px] not-italic font-bold leading-none">28</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="rounded-[6px] bg-[#E9FBFF]" style={{ padding: "8px 10px" }}>
                                                                <div className="flex flex-col gap-[10px]">
                                                                    <div className="flex gap-[8px] items-center">
                                                                        <img src="/images/detailpage/chat-bubble_1.svg" className="" />
                                                                        <div className="text-[#1C8CA7] font-['Figtree'] text-[11px] not-italic font-semibold leading-none uppercase">Chat with us</div>
                                                                    </div>
                                                                    <Separator className="w-full bg-[#BBB] border border-[#BBB]" />
                                                                    <div className="flex gap-[8px] items-center">
                                                                        <img src="/images/detailpage/mail_1.svg" className="" />
                                                                        <div className="text-[#1C8CA7] font-['Figtree'] text-[11px] not-italic font-semibold leading-none uppercase">Send Email</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <Separator orientation="horizontal" className="w-full bg-[#BBB] border border-[#BBB]" />
                                                        <div className="flex flex-col gap-[6px]">
                                                            <div className="text-[#4D4D4D] font-['Figtree'] text-[11px] not-italic font-bold leading-none">SPECIAL NOTE</div>
                                                            <div className="text-black font-['Figtree'] text-[12px] not-italic font-normal leading-none">07 Sep is full moon day on this special day we will be at mansarovar lake for holy dip</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style={{ padding: "10px 10px" }}>
                                                    <div className="w-full rounded-[6px] bg-[#E97737]" style={{ padding: "10px 10px" }}>
                                                        <div className="flex items-center justify-center">
                                                            <div className="text-white font-['Figtree'] text-[14px] not-italic font-semibold leading-[24px] uppercase">BOOK NOW  |  reserve your seat*</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="rounded-lg bg-white shadow-[0_6px_8px_0_rgba(0,0,0,0.2)]">
                                                <div className="relative">
                                                    <Badge variant="warning" icon="/images/detailpage/dot_brown.svg" className="absolute top-[0px] left-[1px] z-10 text-xs font-semibold px-3 py-1 rounded-[4px] bg-[#FFFAE1]">
                                                        <span className="text-[#853C04] font-['Figtree'] text-[12px] font-semibold leading-[14px] uppercase">
                                                            Filling Fast
                                                        </span>
                                                    </Badge>
                                                </div>
                                                <div className="flex flex-col gap-[12px] mt-2" style={{ padding: "10px 10px" }}>
                                                    <div className="flex flex-col gap-[12px]">
                                                        <div className="flex flex-row gap-[50px]">
                                                            <div className="flex gap-[20px]">
                                                                <div className="flex flex-gap[14px] items-center">
                                                                    <div className="flex flex-col gap-[8px]">
                                                                        <div className="text-[#5D5D5D] font-['Figtree'] text-[10px] not-italic font-semibold leading-none uppercase">Start DATE</div>
                                                                        <div className="text-black font-['Figtree'] text-base not-italic font-bold leading-none">02 Sep,Tue</div>
                                                                    </div>
                                                                    <img src="images/detailpage/arrow-right_1.svg" className="ml-4 mr-4" />
                                                                    <div className="flex flex-col gap-[8px]">
                                                                        <div className="text-[#5D5D5D] font-['Figtree'] text-[10px] not-italic font-semibold leading-none uppercase">END DATE</div>
                                                                        <div className="text-black font-['Figtree'] text-base not-italic font-bold leading-none">13 Sep,Tue</div>
                                                                    </div>
                                                                </div>
                                                                <div className="flex flex-col items-start gap-[4px] justify-center">
                                                                    <div className="text-[#5D5D5D] font-['Figtree'] text-[10px] not-italic font-semibold leading-none uppercase">Seats remaining</div>
                                                                    <div className="rounded-[40px] bg-[#17A74E] w-[29px] h-[29px] flex flex-col items-center justify-center">
                                                                        <div className="text-white font-['Figtree'] text-[14px] not-italic font-bold leading-none">28</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="rounded-[6px] bg-[#E9FBFF]" style={{ padding: "8px 10px" }}>
                                                                <div className="flex flex-col gap-[10px]">
                                                                    <div className="flex gap-[8px] items-center">
                                                                        <img src="/images/detailpage/chat-bubble_1.svg" className="" />
                                                                        <div className="text-[#1C8CA7] font-['Figtree'] text-[11px] not-italic font-semibold leading-none uppercase">Chat with us</div>
                                                                    </div>
                                                                    <Separator className="w-full bg-[#BBB] border border-[#BBB]" />
                                                                    <div className="flex gap-[8px] items-center">
                                                                        <img src="/images/detailpage/mail_1.svg" className="" />
                                                                        <div className="text-[#1C8CA7] font-['Figtree'] text-[11px] not-italic font-semibold leading-none uppercase">Send Email</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <Separator orientation="horizontal" className="w-full bg-[#BBB] border border-[#BBB]" />
                                                        <div className="flex flex-col gap-[6px]">
                                                            <div className="text-[#4D4D4D] font-['Figtree'] text-[11px] not-italic font-bold leading-none">SPECIAL NOTE</div>
                                                            <div className="text-black font-['Figtree'] text-[12px] not-italic font-normal leading-none">07 Sep is full moon day on this special day we will be at mansarovar lake for holy dip</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style={{ padding: "10px 10px" }}>
                                                    <div className="w-full rounded-[6px] bg-[#E97737]" style={{ padding: "10px 10px" }}>
                                                        <div className="flex items-center justify-center">
                                                            <div className="text-white font-['Figtree'] text-[14px] not-italic font-semibold leading-[24px] uppercase">BOOK NOW  |  reserve your seat*</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </ScrollArea>
                                </div>
                                {/**Ends here */}
                            </div>

                            {/* <div className="rounded-[8px] bg-[#FFF7F2]" style={{ padding: "10px 25px 20px 20px" }}>
                                <div className="flex flex-row gap-[10px]">
                                    <div className="">
                                        <img src="/images/detailpage/Group_icon.svg" width="34px" height="34px" className="" />
                                    </div>
                                    <div className="">
                                        <div className="">
                                            <span className="text-[#1A2F46] font-['Figtree'] text-[16px] font-bold leading-normal uppercase">*Reserve your Seat</span>
                                            <span className="ml-1 text-[#1C8CA7] font-['Figtree'] text-[16px] font-bold leading-normal uppercase">now and pay later</span>
                                        </div>
                                        <div className="mt-4 text-[#4D4D4D] font-['Figtree'] text-[14px] font-normal leading-[21px]">
                                            <span className="font-bold">Pay ₹11,000 now</span>
                                            <span className="">
                                                and book the package at this price, payment as per policy can be made in the next 24/48 hrs post confirmation. Holding of seats are subject to availability.
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-row gap-[10px] items-center mt-3">
                                    <div className="" style={{ visibility: "hidden" }}>
                                        <img src="/images/detailpage/Group_icon.svg" width={34} height={34} className="" />
                                    </div>
                                    <div className="flex items-center">
                                        <div className="mt-4 text-[#4D4D4D] font-['Figtree'] text-[14px] font-normal leading-[21px]">
                                            <span className="font-bold">Pay ₹11,000 now</span>
                                            <span className="">
                                                and book the package at this price, payment as per policy can be made in the next 24/48 hrs post confirmation. Holding of seats are subject to availability.
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-2 flex flex-row gap-[10px] items-center">
                                    <div className="" style={{ visibility: "hidden" }}>
                                        <img src="/images/detailpage/Group_icon.svg" width={34} height={34} className="" />
                                    </div>
                                    <div className="flex flex-row gap-1 items-center">
                                        <div className="font-['Figtree'] text-black text-[14px] font-semibold leading-normal">Pay this amount by 02 Aug 2025 to avail</div>
                                        <img src="/images/detailpage/rupee2.svg" height="22px" width="22px" className="inline ml-1 mr-1 w-[22px] h-[22px] align-middle" />
                                        <div className="font-['Figtree'] text-black text-[14px] font-semibold leading-normal">
                                            Extra Discount
                                        </div>
                                    </div>
                                </div>


                            </div> */}

                            <div className="rounded-[8px] bg-[#FFF7F2]" style={{ padding: "10px 25px 20px 20px" }}>
                                <div className="flex items-center space-x-3">
                                    {/* Icon */}
                                    <div className="w-8 h-8 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="34" viewBox="0 0 37 34" fill="none">
                                            <path d="M34 0H2.66667C1.95942 0 1.28115 0.280951 0.781048 0.781048C0.280951 1.28115 0 1.95942 0 2.66667V31.6667C0 32.2855 0.245833 32.879 0.683418 33.3166C1.121 33.7542 1.71449 34 2.33333 34H34.3333C34.9522 34 35.5457 33.7542 35.9832 33.3166C36.4208 32.879 36.6667 32.2855 36.6667 31.6667V2.66667C36.6667 1.95942 36.3857 1.28115 35.8856 0.781048C35.3855 0.280951 34.7072 0 34 0Z" fill="#EDEBF2" />
                                            <path d="M34 0H2.66667C1.95942 0 1.28115 0.280951 0.781048 0.781048C0.280951 1.28115 0 1.95942 0 2.66667V9H36.6667V2.66667C36.6667 1.95942 36.3857 1.28115 35.8856 0.781048C35.3855 0.280951 34.7072 0 34 0Z" fill="#E82525" />
                                            <path d="M23.6667 5.3335H13C12.7348 5.3335 12.4804 5.22814 12.2929 5.0406C12.1054 4.85307 12 4.59871 12 4.3335C12 4.06828 12.1054 3.81393 12.2929 3.62639C12.4804 3.43885 12.7348 3.3335 13 3.3335H23.6667C23.9319 3.3335 24.1862 3.43885 24.3738 3.62639C24.5613 3.81393 24.6667 4.06828 24.6667 4.3335C24.6667 4.59871 24.5613 4.85307 24.3738 5.0406C24.1862 5.22814 23.9319 5.3335 23.6667 5.3335Z" fill="#EDEBF2" />
                                            <path d="M18.3335 31.6665C23.8563 31.6665 28.3335 27.1894 28.3335 21.6665C28.3335 16.1437 23.8563 11.6665 18.3335 11.6665C12.8106 11.6665 8.3335 16.1437 8.3335 21.6665C8.3335 27.1894 12.8106 31.6665 18.3335 31.6665Z" fill="#0DBD5F" />
                                            <path d="M16.9999 25.3331C16.8686 25.3333 16.7385 25.3074 16.6172 25.2572C16.4958 25.2069 16.3856 25.1331 16.2929 25.0401L13.6262 22.3735C13.4398 22.1857 13.3355 21.9317 13.3359 21.6672C13.3364 21.4026 13.4417 21.149 13.6288 20.962C13.8159 20.7749 14.0695 20.6696 14.334 20.6691C14.5986 20.6686 14.8525 20.773 15.0403 20.9594L16.9999 22.919L21.6262 18.2927C21.814 18.1063 22.0679 18.002 22.3325 18.0024C22.5971 18.0029 22.8506 18.1082 23.0377 18.2953C23.2248 18.4824 23.3301 18.736 23.3306 19.0005C23.3311 19.2651 23.2267 19.519 23.0403 19.7068L17.7069 25.0401C17.6142 25.1331 17.504 25.2069 17.3827 25.2572C17.2613 25.3074 17.1313 25.3333 16.9999 25.3331Z" fill="white" />
                                        </svg>
                                    </div>
                                    {/* Text */}
                                    <div className="">
                                        <span className="text-[#1A2F46] font-['Figtree'] text-[16px] font-bold leading-normal uppercase">*Reserve your Seat</span>
                                        <span className="ml-1 text-[#1C8CA7] font-['Figtree'] text-[16px] font-bold leading-normal uppercase">now and pay later</span>
                                    </div>
                                </div>

                                {/* Description Content */}
                                <div className="ml-12 mt-2">
                                    <div className="text-[#4D4D4D] font-['Figtree'] text-[14px] font-normal leading-[21px]">
                                        <span className="font-bold">Pay ₹11,000 now</span>
                                        <span className="">
                                            and book the package at this price, payment as per policy can be made in the next 24/48 hrs post confirmation. Holding of seats are subject to availability.
                                        </span>
                                    </div>

                                    {/* Extra Discount Info */}
                                    <div className="flex flex-row gap-1 items-center mt-4">
                                        <div className="font-['Figtree'] text-black text-[14px] font-semibold leading-normal">Pay this amount by 02 Aug 2025 to avail</div>
                                        <img src="/images/detailpage/rupee2.svg" height="22px" width="22px" className="inline ml-1 mr-1 w-[22px] h-[22px] align-middle" />
                                        <div className="font-['Figtree'] text-black text-[14px] font-semibold leading-normal">
                                            Extra Discount
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Separator className="w-full bg-[#BBB] border border-[#BBB]" />

                            <div className="flex flex-col justify-center items-center gap-[25px] w-full">
                                <div className="text-black text-center font-['Figtree'] text-base not-italic font-semibold leading-none">Need help?</div>
                                <div className="flex items-center gap-[40px]">
                                    <div className="flex flex-col gap-[8px] items-center">
                                        <img src="/images/detailpage/whatsapp_help.svg" className="w-[22px] h-[22px]" />
                                        <div className="text-black text-center font-['Figtree'] text-[12px] not-italic font-normal leading-[16px] uppercase">send Itinerary</div>
                                    </div>
                                    <div className="flex flex-col gap-[8px] items-center">
                                        <img src="/images/detailpage/download_help.svg" className="w-[22px] h-[22px]" />
                                        <div className="text-black text-center font-['Figtree'] text-[12px] not-italic font-normal leading-[16px] uppercase">Download Itinerary</div>
                                    </div>
                                    <div className="flex flex-col gap-[8px] items-center">
                                        <img src="/images/detailpage/mail_help.svg" className="w-[22px] h-[22px]" />
                                        <div className="text-black text-center font-['Figtree'] text-[12px] not-italic font-normal leading-[16px] uppercase">Email Itinerary</div>
                                    </div>
                                    <div className="flex flex-col gap-[8px] items-center">
                                        <img src="/images/detailpage/headset_mic_help.svg" className="w-[22px] h-[22px]" />
                                        <div className="text-black text-center font-['Figtree'] text-[12px] not-italic font-normal leading-[16px] uppercase">Talk to Experts</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/**Ends here */}
                </div>

            </section>

            <ContactOurExperts />

            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 mt-[80px]"> {/**max-w-[1920px] */}
                <div className="flex flex-col justify-center items-center gap-8">
                    <div className="relative w-full">
                        <img
                            src="/images/trendingpackages/titledesign.svg"
                            alt="Title Circle"
                            width={150}
                            height={150}
                            className="mx-auto"
                        />
                        <div className="absolute top-0 md:top-[30px] w-full">
                            <p className="text-[#1A2F46] text-center font-['Figtree'] text-[14px] md:text-[16px] font-semibold capitalize">Thoughtful Travel Gifts</p>
                            <h2 className="text-[#1A2F46] text-center font-['Playfair Display'] text-[28px] md:text-[36px] font-semibold">
                                Kailash Mansarovar Parikrama 2025 ( Tibet ) Gift Sets
                            </h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 mb-4">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>

                {/* <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 mb-4 mt-[50px]">
                    <div className="flex flex-col gap-[10px] items-start">
                        <div className="relative inline-block">
                            <img
                                src="/images/detailpage/duffle_bag.png" 
                                alt="Travel Pocket"
                                className="w-full h-[200px] object-contain rounded-[8px]"
                            />
                           
                            <Badge
                                variant="popular"
                                icon="/images/detailpage/featured_seasonal_and_gifts.svg"
                                className="absolute top-1 left-1 rounded-[4px] bg-[#FCD205]"
                            >
                                <span className="text-[#1A2F46] font-['Figtree'] text-[12px] font-medium leading-[14px] uppercase">Gift</span>
                            </Badge>
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <div className="text-[#333] font-['Figtree'] text-[20px] font-semibold leading-normal">Duffel Bag</div>
                            <div className="text-[#333] font-['Figtree'] text-[16px] font-normal leading-[22px]">Spacious, durable & travel-ready.</div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-[10px] items-start">
                        <div className="relative inline-block">
                            <img
                                src="/images/detailpage/gift_1.png"
                                alt="Travel Pocket"
                                className="w-full h-[200px] object-contain rounded-[8px]"
                            />
                            
                            <Badge
                                variant="popular"
                                icon="/images/detailpage/featured_seasonal_and_gifts.svg"
                                className="absolute top-1 left-1 rounded-[4px] bg-[#FCD205]"
                            >
                                <span className="text-[#1A2F46] font-['Figtree'] text-[12px] font-medium leading-[14px] uppercase">Gift</span>
                            </Badge>
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <div className="text-[#333] font-['Figtree'] text-[20px] font-semibold leading-normal">Backpack</div>
                            <div className="text-[#333] font-['Figtree'] text-[16px] font-normal leading-[22px]">Lightweight & handy for daily yatra use.</div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-[10px] items-start">
                        <div className="relative inline-block">
                            <img
                                src="/images/detailpage/gift_2.png"
                                alt="Travel Pocket"
                                className="w-full h-[200px] object-contain rounded-[8px]"
                            />
                            
                            <Badge
                                variant="popular"
                                icon="/images/detailpage/featured_seasonal_and_gifts.svg"
                                className="absolute top-1 left-1 rounded-[4px] bg-[#FCD205]"
                            >
                                <span className="text-[#1A2F46] font-['Figtree'] text-[12px] font-medium leading-[14px] uppercase">Gift</span>
                            </Badge>
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <div className="text-[#333] font-['Figtree'] text-[20px] font-semibold leading-normal">Jacket</div>
                            <div className="text-[#333] font-['Figtree'] text-[16px] font-normal leading-[22px]">Keeps you warm at high altitudes.</div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-[10px] items-start">
                        <div className="relative inline-block">
                            <img
                                src="/images/detailpage/gift_3.png" 
                                alt="Travel Pocket"
                                className="w-full h-[200px] object-contain rounded-[8px]"
                            />
                            
                            <Badge
                                variant="popular"
                                icon="/images/detailpage/featured_seasonal_and_gifts.svg"
                                className="absolute top-1 left-1 rounded-[4px] bg-[#FCD205]"
                            >
                                <span className="text-[#1A2F46] font-['Figtree'] text-[12px] font-medium leading-[14px] uppercase">Gift</span>
                            </Badge>
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <div className="text-[#333] font-['Figtree'] text-[20px] font-semibold leading-normal">Puja Samagri Kit</div>
                            <div className="text-[#333] font-['Figtree'] text-[16px] font-normal leading-[22px]">Includes all essentials for spiritual rituals.</div>
                        </div>
                    </div>
                </div> */}


            </section>
            <RelatedPackages />
        </>
    )
}

function ProductCard({ product }: GiftProductCardProps) {
    return (
        <div className="flex flex-col gap-[10px] items-start">
            <div className="relative">
                <img
                    src={product.image}
                    alt={`product-`}
                    className="object-contain rounded-lg border border-[#EAEAEA] bg-white"
                />
                {/* Gift Badge - positioned absolutely at top-left for all devices */}
                <Badge
                    variant="popular"
                    icon="/images/detailpage/featured_seasonal_and_gifts.svg"
                    className="absolute top-1 left-1 rounded-[4px] bg-[#FCD205]"
                >
                    <span className="text-[#1A2F46] font-['Figtree'] text-[12px] font-medium leading-[14px] uppercase">Gift</span>
                </Badge>
            </div>

            {/* Product Info */}
            <div className="flex flex-col gap-[6px]">
                <h3 className="text-[#333] font-['Figtree'] text-[16px] md:text-[20px] font-semibold leading-normal">{product.name}</h3>
                <p className="text-[#333] font-['Figtree'] text-[14px] md:text-[16px] font-normal leading-[21px] md:leading-[22px]">{product.description}</p>
            </div>
        </div>
    )
}

function ItineraryAccordion({ itinerary }: ItineraryAccordionProps) {
    return (
        // <div className="w-full">
        //     <div className="flex flex-row gap-3 sm:gap-8">
        //         {/* Day Badge */}
        //         <div className="relative flex items-center flex-shrink-0 self-start top-[-5px]">
        //             <img src="/images/detailpage/Union.svg" className="w-[120px] h-[50px] object-contain" />
        //             <div className="absolute text-[#E97737] font-[Figtree] text-[14px] lg:text-[22px] font-bold leading-normal uppercase lg:top-[8px] left-[25px]">
        //                 Day 2
        //             </div>
        //         </div>

        //         {/* Right Column - Heading and all content */}
        //         <div className="flex-1 min-w-0">
        //             <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
        //                 <AccordionItem value="item-1" className="">
        //                     <AccordionTrigger className="hover:no-underline p-0 mb-4 sm:mb-6">
        //                         <div className="text-[#1A2F46] font-[Figtree] text-[16px] lg:text-[24px] font-semibold leading-normal text-left pr-2">
        //                             Lucknow Drive to Nepalgunj
        //                         </div>
        //                     </AccordionTrigger>
        //                     <AccordionContent>
        //                         {/* Description */}
        //                         <p className="text-[#333] font-['Figtree'] text-[14px] lg:text-base not-italic font-normal leading-6 mb-6 sm:mb-8">
        //                             Your spiritual journey to Kailash Mansarovar begins with a drive to Nepalgunj after breakfast. This
        //                             town, located near the India-Nepal border, serves as the official starting point for the yatra.
        //                         </p>

        //                         {/* Route Overview Section */}
        //                         <div className="flex flex-col gap-[8px] mb-4">
        //                             <div className="text-[#29A4C1] font-['Figtree'] text-base not-italic font-semibold leading-6">Route Overview</div>
        //                             <div className="flex flex-row gap-[6px] items-center">
        //                                 <img src="/images/detailpage/check_circle.svg" className="" />
        //                                 <div className="text-black font-['Figtree'] text-[14px] not-italic font-semibold leading-[24px]">
        //                                     Drive Duration:
        //                                     <span className="font-normal"> Approx. 4-5 hours</span>
        //                                 </div>
        //                             </div>
        //                             <div className="flex flex-row gap-[6px] items-center">
        //                                 <img src="/images/detailpage/check_circle.svg" className="" />
        //                                 <div className="text-black font-['Figtree'] text-[14px] not-italic font-semibold leading-[24px]">
        //                                     From:
        //                                     <span className="font-normal"> Starting Point (Lucknow or similar)</span>
        //                                 </div>
        //                             </div>
        //                             <div className="flex flex-row gap-[6px] items-center">
        //                                 <img src="/images/detailpage/check_circle.svg" className="" />
        //                                 <div className="text-black font-['Figtree'] text-[14px] not-italic font-semibold leading-[24px]">
        //                                     To:
        //                                     <span className="font-normal"> Nepalgunj (Altitude: 152 m)</span>
        //                                 </div>
        //                             </div>
        //                             <div className="flex flex-row gap-[6px] items-center">
        //                                 <img src="/images/detailpage/check_circle.svg" className="" />
        //                                 <div className="text-black font-['Figtree'] text-[14px] not-italic font-semibold leading-[24px]">
        //                                     Hotel:
        //                                     <span className="font-normal"> Soaltee Westend Premier or similar</span>
        //                                 </div>
        //                             </div>
        //                         </div>

        //                         {/* Key Highlights Section */}
        //                         <div className="flex flex-col gap-[8px] mb-4">
        //                             <div className="text-[#29A4C1] font-['Figtree'] text-base not-italic font-semibold leading-6">Key Highlights</div>
        //                             <div className="flex flex-row gap-[6px] items-center">
        //                                 <img src="/images/detailpage/check_circle.svg" className="" />
        //                                 <div className="text-black font-['Figtree'] text-[14px] not-italic font-semibold leading-[24px]">
        //                                     <span className="font-normal">Comfortable road trip with en-route refreshment break</span>
        //                                 </div>
        //                             </div>
        //                             <div className="flex flex-row gap-[6px] items-center">
        //                                 <img src="/images/detailpage/check_circle.svg" className="" />
        //                                 <div className="text-black font-['Figtree'] text-[14px] not-italic font-semibold leading-[24px]">
        //                                     <span className="font-normal">Check-in and rest at a premium hotel in Nepalgunj</span>
        //                                 </div>
        //                             </div>
        //                             <div className="flex flex-row gap-[6px] items-center">
        //                                 <img src="/images/detailpage/check_circle.svg" className="" />
        //                                 <div className="text-black font-['Figtree'] text-[14px] not-italic font-semibold leading-[24px]">
        //                                     Optional:
        //                                     <span className="font-normal"> Visit Bageshwari Temple, a revered Shakti Peeth</span>
        //                                 </div>
        //                             </div>
        //                             <div className="flex flex-row gap-[6px] items-center">
        //                                 <img src="/images/detailpage/check_circle.svg" className="" />
        //                                 <div className="text-black font-['Figtree'] text-[14px] not-italic font-semibold leading-[24px]">
        //                                     <span className="font-normal">Evening </span>
        //                                     Yatra Briefing Session
        //                                     <span className="font-normal"> covering route, medical advice, and travel essentials</span>
        //                                 </div>
        //                             </div>
        //                             <div className="flex flex-row gap-[6px] items-center">
        //                                 <img src="/images/detailpage/check_circle.svg" className="" />
        //                                 <div className="text-black font-['Figtree'] text-[14px] not-italic font-semibold leading-[24px]">
        //                                     <span className="font-normal">Prepare mentally and spiritually for the sacred journey ahead</span>
        //                                 </div>
        //                             </div>
        //                         </div>



        //                         {/* Feature Badges */}
        //                         <div className="flex flex-col lg:flex-row flex-wrap gap-2 sm:gap-4 mb-4">
        //                             <div className="rounded-lg bg-[#DDF9FF]" style={{ padding: "4px 12px" }}>
        //                                 <div className="flex flex-row gap-[8px] items-center">
        //                                     <img src="/images/detailpage/iconspace_3.svg" className="w-h h-4" />
        //                                     <div className="text-[#1C8CA7] font-['Figtree'] text-[14px] not-italic font-semibold leading-[22px]">Check-in at a Premium Hotel</div>
        //                                 </div>
        //                             </div>

        //                             <div className="rounded-lg bg-[#DDF9FF]" style={{ padding: "4px 12px" }}>
        //                                 <div className="flex flex-row gap-[8px] items-center">
        //                                     <img src="/images/detailpage/iconspace_2.svg" className="w-h h-4" />
        //                                     <div className="text-[#1C8CA7] font-['Figtree'] text-[14px] not-italic font-semibold leading-[22px]">Drive to Nepalgunj</div>
        //                                 </div>
        //                             </div>

        //                             <div className="rounded-lg bg-[#DDF9FF]" style={{ padding: "4px 12px" }}>
        //                                 <div className="flex flex-row gap-[8px] items-center">
        //                                     <img src="/images/detailpage/iconspace_1.svg" className="w-h h-4" />
        //                                     <div className="text-[#1C8CA7] font-['Figtree'] text-[14px] not-italic font-semibold leading-[22px]">Breakfast, Lunch, Dinner</div>
        //                                 </div>
        //                             </div>
        //                         </div>

        //                         {/* Image Cards */}
        //                         <div className="flex flex-row gap-[12px]">
        //                             <div className="flex flex-col gap-[8px] items-start flex-wrap max-w-[200px]">
        //                                 <img src="/images/detailpage/iternary_img_1.png" className="w-[200px] h-[150px]" />
        //                                 <div className="text-[#333] font-['Figtree'] text-[13px] not-italic font-normal leading-[24px]">Soaltee Westend Premier</div>
        //                             </div>
        //                             <div className="flex flex-col gap-[8px] items-start flex-wrap max-w-[200px]">
        //                                 <img src="/images/detailpage/iternary_img_2.png" className="w-[200px] h-[150px]" />
        //                                 <div className="text-[#333] font-['Figtree'] text-[13px] not-italic font-normal leading-[24px]">Bageshwari Temple, a revered Shakti Peeth</div>
        //                             </div>
        //                         </div>
        //                     </AccordionContent>
        //                 </AccordionItem>
        //             </Accordion>
        //         </div>
        //     </div>
        // </div>

        <div className="w-full flex flex-col gap-6">
            {itinerary.map((item, index) => (
                <div
                    key={index}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-8 w-full"
                >
                    {/* For mobile: Day + title + accordion icon inline */}
                    <Accordion
                        type="single"
                        collapsible
                        // defaultValue={index === 0 ? `item-${index + 1}` : undefined}
                        defaultValue="item-1"
                        className="w-full sm:hidden"
                    >
                        <AccordionItem value={`item-${index + 1}`}>
                            <AccordionTrigger className="hover:no-underline p-0 mb-4 sm:mb-6 flex items-center gap-3">
                                {/* Day Badge (mobile inline) */}
                                <div className="relative flex items-center flex-shrink-0">
                                    <img
                                        src="/images/detailpage/Union.svg"
                                        className="w-[100px] h-[40px] object-contain"
                                    />
                                    <div className="absolute text-[#E97737] font-[Figtree] text-[14px] font-bold uppercase top-[5px] left-[20px]">
                                        Day {item.day}
                                    </div>
                                </div>
                                {/* Title */}
                                <div className="text-[#1A2F46] font-[Figtree] text-[16px] font-semibold leading-normal text-left">
                                    {item.title}
                                </div>
                            </AccordionTrigger>

                            <AccordionContent>
                                <p className="text-[#333] font-['Figtree'] text-[14px] font-normal leading-6 mb-6 sm:mb-8 pl-4">
                                    {item.description}
                                </p>

                                {/* Route Overview */}
                                {item.routeOverview && item.routeOverview?.length > 0 && (
                                    <div className="flex flex-col gap-[8px] mb-4 pl-4">
                                        <div className="text-[#29A4C1] font-['Figtree'] text-base font-semibold leading-6">
                                            Route Overview
                                        </div>
                                        {item.routeOverview.map((route, idx) => (
                                            <div
                                                key={idx}
                                                className="flex flex-row gap-[6px] items-center"
                                            >
                                                <img src="/images/detailpage/check_circle.svg" alt="" />
                                                <div className="text-black font-['Figtree'] text-[14px] font-semibold leading-[24px]">
                                                    {route.label}:{" "}
                                                    <span className="font-normal">{route.value}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Key Highlights */}
                                {item.keyHighlights && item.keyHighlights?.length > 0 && (
                                    <div className="flex flex-col gap-[8px] mb-4 pl-4">
                                        <div className="text-[#29A4C1] font-['Figtree'] text-base font-semibold leading-6">
                                            Key Highlights
                                        </div>
                                        {item.keyHighlights.map((highlight, idx) => (
                                            <div
                                                key={idx}
                                                className="flex flex-row gap-[6px] items-center"
                                            >
                                                <img src="/images/detailpage/check_circle.svg" alt="" />
                                                <div className="text-black font-['Figtree'] text-[14px] font-semibold leading-[24px]">
                                                    <span className="font-normal">{highlight}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Feature Badges */}
                                {item.featureBadges && item.featureBadges?.length > 0 && (
                                    <div className="flex flex-col lg:flex-row flex-wrap gap-2 sm:gap-4 mb-4 pl-4">
                                        {item.featureBadges.map((badge, idx) => (
                                            <div
                                                key={idx}
                                                className="rounded-lg bg-[#DDF9FF]"
                                                style={{ padding: "4px 12px" }}
                                            >
                                                <div className="flex flex-row gap-[8px] items-center">
                                                    <img src={badge.icon} alt="" className="w-h h-4" />
                                                    <div className="text-[#1C8CA7] font-['Figtree'] text-[14px] font-semibold leading-[22px]">
                                                        {badge.text}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Images */}
                                {item.images && item.images?.length > 0 && (
                                    <div className="flex flex-row gap-[12px] flex-wrap pl-4">
                                        {item.images.map((img, idx) => (
                                            <div
                                                key={idx}
                                                className="flex flex-col gap-[8px] items-start max-w-[200px]"
                                            >
                                                <img
                                                    src={img.src}
                                                    alt={img.alt}
                                                    className="w-[200px] h-[150px]"
                                                />
                                                <div className="text-[#333] font-['Figtree'] text-[13px] font-normal leading-[24px]">
                                                    {img.caption}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    {/* Desktop layout (unchanged) */}
                    <div className="hidden sm:flex flex-row gap-3 sm:gap-8 w-full">
                        {/* Day Badge */}
                        <div className="relative flex items-center flex-shrink-0 self-start top-[-5px]">
                            <img
                                src="/images/detailpage/Union.svg"
                                className="w-[120px] h-[50px] object-contain"
                            />
                            <div className="absolute text-[#E97737] font-[Figtree] text-[14px] lg:text-[22px] font-bold leading-normal uppercase lg:top-[8px] left-[25px]">
                                Day {item.day}
                            </div>
                        </div>

                        {/* Accordion */}
                        <div className="flex-1 min-w-0">
                            <Accordion
                                type="single"
                                collapsible
                                defaultValue="item-1"
                                //defaultValue={index === 0 ? `item-${index + 1}` : undefined}
                                className="w-full"
                            >
                                <AccordionItem value={`item-${index + 1}`}>
                                    <AccordionTrigger className="hover:no-underline p-0 mb-4 sm:mb-6">
                                        <div className="text-[#1A2F46] font-[Figtree] text-[16px] lg:text-[24px] font-semibold leading-normal text-left pr-2">
                                            {item.title}
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-[#333] font-['Figtree'] text-[14px] font-normal leading-6 mb-6 sm:mb-8">
                                            {item.description}
                                        </p>

                                        {/* Route Overview */}
                                        {item.routeOverview && item.routeOverview?.length > 0 && (
                                            <div className="flex flex-col gap-[8px] mb-4">
                                                <div className="text-[#29A4C1] font-['Figtree'] text-base font-semibold leading-6">
                                                    Route Overview
                                                </div>
                                                {item.routeOverview.map((route, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex flex-row gap-[6px] items-center"
                                                    >
                                                        <img src="/images/detailpage/check_circle.svg" alt="" />
                                                        <div className="text-black font-['Figtree'] text-[14px] font-semibold leading-[24px]">
                                                            {route.label}:{" "}
                                                            <span className="font-normal">{route.value}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Key Highlights */}
                                        {item.keyHighlights && item.keyHighlights?.length > 0 && (
                                            <div className="flex flex-col gap-[8px] mb-4">
                                                <div className="text-[#29A4C1] font-['Figtree'] text-base font-semibold leading-6">
                                                    Key Highlights
                                                </div>
                                                {item.keyHighlights.map((highlight, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex flex-row gap-[6px] items-center"
                                                    >
                                                        <img src="/images/detailpage/check_circle.svg" alt="" />
                                                        <div className="text-black font-['Figtree'] text-[14px] font-semibold leading-[24px]">
                                                            <span className="font-normal">{highlight}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Feature Badges */}
                                        {item.featureBadges && item.featureBadges?.length > 0 && (
                                            <div className="flex flex-col lg:flex-row flex-wrap gap-2 sm:gap-4 mb-4">
                                                {item.featureBadges.map((badge, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="rounded-lg bg-[#DDF9FF]"
                                                        style={{ padding: "4px 12px" }}
                                                    >
                                                        <div className="flex flex-row gap-[8px] items-center">
                                                            <img src={badge.icon} alt="" className="w-h h-4" />
                                                            <div className="text-[#1C8CA7] font-['Figtree'] text-[14px] font-semibold leading-[22px]">
                                                                {badge.text}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Images */}
                                        {item.images && item.images?.length > 0 && (
                                            <div className="flex flex-row gap-[12px] flex-wrap">
                                                {item.images.map((img, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex flex-col gap-[8px] items-start max-w-[200px]"
                                                    >
                                                        <img
                                                            src={img.src}
                                                            alt={img.alt}
                                                            className="w-[200px] h-[150px]"
                                                        />
                                                        <div className="text-[#333] font-['Figtree'] text-[13px] font-normal leading-[24px]">
                                                            {img.caption}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            ))}
        </div>


    )
}

function RelatedPackages() {
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
                            Related Packages
                        </h2>
                    </div>
                </div>

                {/* View All button (aligned right) */}
                <Button variant="outline" className="hidden md:block rounded-[6px] border border-[#E97737] ml-0 mt-6 md:ml-6 md:mt-0 cursor-pointer hover:scale-115 transform transition duration-200">
                    <div className="flex flex-row gap-2 items-center">
                        <span className="text-[#E97737] font-['Figtree'] text-[14px] md:text-sm font-semibold uppercase">View All</span>
                        <img
                            src="/images/trendingpackages/Group1000007348.svg"
                            alt=""
                            width={20}
                            height={20}
                            className="mx-auto"
                        />
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
                                            <h3 className="text-[#333] font-['Figtree'] text-[16px] md:text-[20px] font-semibold leading-normal">{pkg.title}</h3>
                                            <p className="text-[#333] font-['Figtree'] text-[12px] md:text-[16px] font-normal leading-[22px]">{pkg.description}</p>
                                        </div>

                                        <div className="flex py-[2px] items-center content-center gap-[10px] flex-wrap">
                                            {/* Info Row */}
                                            <Calendar className="h-4 w-4" /> <span className="text-[#5A5A5A] font-[Figtree] text-[10px] md:text-[14px] font-medium leading-[14px] uppercase">{pkg.duration}</span>
                                            <Separator orientation="vertical" className="!h-[14px] w-px bg-[#BBB] border border-[#BBB]" />
                                            <CheckCircle className="h-4 w-4" /> <span className="text-[#5A5A5A] font-[Figtree] text-[10px] md:text-[14px] font-medium leading-[14px] uppercase">{pkg.inclusions}</span>
                                            <Separator orientation="vertical" className="!h-[14px] w-px bg-[#BBB] border border-[#BBB]" />
                                            <MapPin className="h-4 w-4" /> <span className="text-[#5A5A5A] font-[Figtree] text-[10px] md:text-[14px] font-medium leading-[14px] uppercase">{pkg.pickup}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-[6px]">
                                        <p className="text-[#333333] font-['Figtree'] text-[12px] md:text-[16px] font-normal leading-[24px]">
                                            EMI starts from <span className="text-[#333333] font-['Figtree'] text-[16px] md:text-[22px] font-semibold leading-[24px]">{pkg.price}</span>
                                        </p>
                                    </div>
                                </CardContent>
                                {/* <CardFooter> */}
                                {/* Buttons */}
                                <div className="flex flex-col md:flex-row lg:flex-row gap-4">
                                    <Button variant="outline" className="flex-1 shrink-0">
                                        <span className="text-[#1A2F46] text-center font-['Figtree'] text-[11px] md:text-[14px] font-medium uppercase leading-normal">View Details</span>
                                    </Button>
                                    <Button variant="outline" className="flex-1 shrink-0">
                                        <span className="text-[#E97737] text-center font-['Figtree'] text-[11px] md:text-[14px] font-medium uppercase leading-normal">Book Now</span>
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
                    className="hidden md:block absolute right-[0px] top-1/2 -translate-y-1/2 shadow-md rounded-full p-2 z-10 cursor-pointer"
                    style={{ background: '#E3E6EE' }}
                >
                    <ArrowRight className="h-5 w-5" />
                </Button>
            </div>

            {/** Mobile Layout */}
            <div className="md:hidden">
                {/* Cards */}
                <div
                    className="flex gap-6 items-center overflow-x-auto scroll-smooth scrollbar-hide no-scrollbar"
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
                                        <h3 className="text-[#333] font-['Figtree'] text-[16px] md:text-[20px] font-semibold leading-normal">{pkg.title}</h3>
                                        <p className="text-[#333] font-['Figtree'] text-[12px] md:text-[16px] font-normal leading-[22px]">{pkg.description}</p>
                                    </div>

                                    <div className="flex py-[2px] items-center content-center gap-[10px] flex-wrap">
                                        {/* Info Row */}
                                        <Calendar className="h-4 w-4" /> <span className="text-[#5A5A5A] font-[Figtree] text-[10px] md:text-[14px] font-medium leading-[14px] uppercase">{pkg.duration}</span>
                                        <Separator orientation="vertical" className="!h-[14px] w-px bg-[#BBB] border border-[#BBB]" />
                                        <CheckCircle className="h-4 w-4" /> <span className="text-[#5A5A5A] font-[Figtree] text-[10px] md:text-[14px] font-medium leading-[14px] uppercase">{pkg.inclusions}</span>
                                        <Separator orientation="vertical" className="!h-[14px] w-px bg-[#BBB] border border-[#BBB]" />
                                        <MapPin className="h-4 w-4" /> <span className="text-[#5A5A5A] font-[Figtree] text-[10px] md:text-[14px] font-medium leading-[14px] uppercase">{pkg.pickup}</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-[6px]">
                                    <p className="text-[#333333] font-['Figtree'] text-[12px] md:text-[16px] font-normal leading-[24px]">
                                        EMI starts from <span className="text-[#333333] font-['Figtree'] text-[16px] md:text-[22px] font-semibold leading-[24px]">{pkg.price}</span>
                                    </p>
                                </div>
                            </CardContent>
                            {/* <CardFooter> */}
                            {/* Buttons */}
                            <div className="flex flex-col md:flex-row lg:flex-row gap-4">
                                <Button variant="outline" className="flex-1 shrink-0">
                                    <span className="text-[#1A2F46] text-center font-['Figtree'] text-[11px] md:text-[14px] font-medium uppercase leading-normal">View Details</span>
                                </Button>
                                <Button variant="outline" className="flex-1 shrink-0">
                                    <span className="text-[#E97737] text-center font-['Figtree'] text-[11px] md:text-[14px] font-medium uppercase leading-normal">Book Now</span>
                                </Button>
                            </div>
                            {/* </CardFooter> */}
                        </Card>
                    ))}
                </div>
            </div>

            {/* View All button Mobile view */}
            <div className="flex items-center justify-center gap-2 md:hidden">
                <Button variant="outline" className="rounded-[6px] border border-[var(--Primary,#E97737)] mt-6 cursor-pointer hover:scale-115 transform transition duration-200">
                    <span className="text-[#E97737] font-['Figtree'] text-[14px] md:text-sm font-semibold uppercase">View All</span>
                    <img
                        src="/images/trendingpackages/Group1000007348.svg"
                        alt=""
                        width={20}
                        height={20}
                        className="mx-auto"
                    />
                </Button>
            </div>
        </section>
    );
}