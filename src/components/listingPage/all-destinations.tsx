"use client"

import { useState } from "react";

import { Separator } from "@radix-ui/react-separator";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Calendar, CheckCircle, MapPin } from "lucide-react";
import Link from "next/link";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/filters-accordion";
import { filterGroups, sortOptions } from "@/data/filters";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { SortByDrawer } from "./sort-by-drawer";
import { FilterByDrawer } from "./filter-by-drawer";

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
    },
    {
        id: 7,
        title: "Char Dham Yatra with Helicopter",
        description: "Visit the four sacred Dhams by Helicopter",
        image: "/images/trendingpackages/dummy_card_img.png",
        duration: "11 Nights 12 Days",
        inclusions: "20+ Inclusions",
        pickup: "Lucknow",
        price: "₹9500",
    },
    {
        id: 8,
        title: "Kailash Mansarovar Yatra",
        description: "Charan Sparsh Outer Kora from Lucknow By Helicopter",
        image: "/images/trendingpackages/dummy_card_img.png",
        duration: "11 Nights 12 Days",
        inclusions: "20+ Inclusions",
        pickup: "Lucknow",
        price: "₹9500",
    },
    {
        id: 9,
        title: "Char Dham Yatra with Helicopter",
        description: "Visit the four sacred Dhams by Helicopter",
        image: "/images/trendingpackages/dummy_card_img.png",
        duration: "11 Nights 12 Days",
        inclusions: "20+ Inclusions",
        pickup: "Lucknow",
        price: "₹9500",
    },
    {
        id: 10,
        title: "Kailash Mansarovar Yatra",
        description: "Charan Sparsh Outer Kora from Lucknow By Helicopter",
        image: "/images/trendingpackages/dummy_card_img.png",
        duration: "11 Nights 12 Days",
        inclusions: "20+ Inclusions",
        pickup: "Lucknow",
        price: "₹9500",
    },
    {
        id: 11,
        title: "Char Dham Yatra with Helicopter",
        description: "Visit the four sacred Dhams by Helicopter",
        image: "/images/trendingpackages/dummy_card_img.png",
        duration: "11 Nights 12 Days",
        inclusions: "20+ Inclusions",
        pickup: "Lucknow",
        price: "₹9500",
    },
    {
        id: 12,
        title: "Kailash Mansarovar Yatra",
        description: "Charan Sparsh Outer Kora from Lucknow By Helicopter",
        image: "/images/trendingpackages/dummy_card_img.png",
        duration: "11 Nights 12 Days",
        inclusions: "20+ Inclusions",
        pickup: "Lucknow",
        price: "₹9500",
    }
];


const tourOptions: string[] = [
    "All",
    "Most Popular",
    "Adi Kailash & Om Parvat Yatra",
    "Kailash Mansarover Darshan",
    "Kailash Mansarover Aerial Darshan",
    "Nepal: Land Of Gods & Monasteries",
    "Chardham Yatra",
    "Kedarnath",
];


export default function AllDestinations() {

    const [selected, setSelected] = useState<string[]>(['All']);
    const [openSortDrawer, setOpenSortDrawer] = useState(false);
    const [openFilterDrawer, setOpenFilterDrawer] = useState(false);

    const toggleOption = (option: string): void => {
        setSelected((prevSelected) => {
            console.log(prevSelected);
            if (prevSelected.includes(option)) {
                // Remove the option
                return prevSelected.filter((item) => item !== option);
            } else {
                // Add the option
                return [...prevSelected, option];
            }
        });

        console.log(selected);
        console.log(option);
    };


    return (
        <>
            <section className="max-w-[1920px] mx-auto">
                <div className="relative rounded-[0_0_30px_30px] bg-[#EBF5F7] w-full">
                    <div className="p-4 md:p-6 lg:p-8 lg:pb-[100px]">
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
                                <span className="text-black font-['Figtree'] text-[11px] lg:text-[12px] font-normal leading-[14px] cursor-pointer">All Destinations</span>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-col lg:flex-row items-start justify-between gap-8">
                            <div className="flex flex-col gap-[15px] flex-1 w-full lg:max-w-[55%]">
                                <div className="text-[#1A2F46] font-['Playfair_Display'] text-[28px] lg:text-[36px] not-italic font-semibold leading-normal">Explore All Destinations</div>
                                <div className="text-[#333] font-['Figtree'] text-[14px] lg:text-[16px] not-italic font-normal leading-[22px]">Lorem ipsum dolor sit amet consectetur. Adipiscing placerat urna eu arcu. Iaculis tortor platea cursus dignissim augue. Amet diam mattis nunc turpis sapien nibh malesuada nibh. Aliquam nunc ac diam pharetra pulvinar. Lorem ipsum dolor sit amet consectetur. Adipiscing placerat urna eu arcu. Iaculis tortor platea cursus dignissim augue. Amet diam mattis nunc turpis sapien nibh malesuada nibh. Aliquam nunc ac diam pharetra pulvinar.</div>
                            </div>
                            <div className="flex flex-row gap-[10px] items-center">
                                <div className="flex-1 text-black font-['Figtree'] text-[14px] lg:text-[16px] not-italic font-medium leading-6">Get our assistance for easy booking</div>
                                <div className="lg:flex-1">
                                    <div className="rounded-[6px] bg-[#FFF0E8] cursor-pointer py-2 px-2 cursor-pointer">
                                        <div className="flex flex-row items-center gap-[5px]">
                                            <img src="/images/detailpage/call.svg" alt="" className="" />
                                            <div className="text-[#E97737] font-['Figtree'] text-[12px] font-semibold leading-[24px] uppercase">Want us to call you?</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" hidden lg:flex flex-row w-full absolute top-[72%] ">
                        <img src="/images/listingpage/banner.png" alt="" className="object-cover p-4 md:p-6 lg:p-8" />
                    </div>
                    {/* <div className="hidden lg:block absolute top-[75%] flex w-full">
                        <img src="/images/listingpage/banner.png" alt="" className="p-4 md:p-6 lg:p-8" />
                    </div> */}
                </div>
            </section>

            <section className="max-w-[1920px] mx-auto mt-4 lg:mt-[250px]">
                <div className="p-0 md:p-6 lg:p-8">
                    <div className="rounded-[8px] bg-[#EBF5F7] w-full px-6 py-4.5 overflow-x-auto scroll-px-6">
                        <div className="flex flex-row lg:flex-wrap gap-[12px]">
                            {tourOptions.map((option: string, index: number) => {
                                const isActive: boolean = selected.includes(option);
                                return (
                                    <div key={index} onClick={() => toggleOption(option)} className={`px-5 py-3 rounded-[8px] border shrink-0 cursor-pointer transition-colors
                                        ${isActive ? "bg-[#1A2F46] border-[#1A2F46]" : "bg-white border-[#D2D8E4]"}
                                                `}>
                                        <div className="flex items-start w-full">
                                            <div className={`font-['Figtree'] text-[14px] lg:text-base font-normal leading-normal capitalize shrink-0
                                                ${isActive ? "text-[#FFFFFF]" : "text-[#1A2F46]"}
                                                `}>{option}</div>
                                        </div>
                                    </div>
                                )

                            })}
                            <div className="shrink-0 w-4"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/**Main Section with side bar */}
            <section className="max-w-[1920px] mx-auto">
                <div className="flex flex-row gap-6">

                    {/* sidebar content - filter */}
                    <aside className="hidden lg:block min-w-[280px] max-w-[380px] p-4 md:p-6 lg:p-8">
                        <div className="rounded-lg bg-[#EBF5F7] px-5 py-5">
                            <div className="flex flex-col gap-4 w-full">
                                <div className="flex flex-row justify-between items-center">
                                    <div className="text-black font-['Figtree'] text-[20px] font-semibold leading-normal not-italic">Filter by</div>
                                    <div className="text-[#4D4D4D] font-['Figtree'] text-[14px] font-normal leading-normal not-italic cursor-pointer">Clear all</div>
                                </div>

                                <Accordion type="multiple" defaultValue={filterGroups.map((g: any) => g.key)}>
                                    {filterGroups.map((group: any) => (
                                        <AccordionItem key={group.key} value={group.key}>
                                            <AccordionTrigger className="text-black font-['Figtree'] text-[16px] font-semibold leading-normal">
                                                {group.title}
                                            </AccordionTrigger>
                                            <AccordionContent className="pt-2">
                                                {/* Select type */}
                                                {group.type === "datepicker" ? (
                                                    <select
                                                        className="w-full border border-gray-300 rounded px-2 py-1"
                                                        name={group.key}
                                                    >
                                                        <option value="">Select {group.title}</option>
                                                        {group.options.map((opt: any) => (
                                                            <option key={opt.value} value={opt.value}>
                                                                {opt.label}
                                                            </option>
                                                        ))}
                                                    </select>
                                                ) : group.type === "label" ? (
                                                    <div className="flex flex-row gap-[16px] flex-wrap items-center">
                                                        {group.options.map((option: any) => (
                                                            <div key={option.value} className="rounded-[8px] border border-[#D2D8E4] bg-white px-3 py-3">
                                                                <div className="flex items-center">
                                                                    <div className="text-[#1A2F46] font-['Figtree'] text-[14px] font-normal leading-normal">{option.label}</div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    // Checkbox
                                                    <div className="flex flex-col gap-[16px]">
                                                        {group.options.map((opt: any) => (
                                                            <div key={opt.value} className="flex flex-row gap-[10px] items-center">
                                                                <Checkbox id={opt.value} className="rounded-[2px] border border-[#D2D8E4] bg-white
                                                                data-[state=checked]:rounded-[2px] data-[state=checked]:border data-[state=checked]:border-[#1C8CA7] data-[state=checked]:bg-[#1C8CA7] data-[state=checked]:text-white"/>
                                                                <Label key={opt.value} htmlFor={opt.value} className="text-black font-['Figtree'] text-[14px] font-normal leading-normal">{opt.label}</Label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </div>
                    </aside>

                    {/* Main content - flexible */}
                    <main className="flex-1 bg-white p-8">
                        <div className="flex flex-col gap-4 lg:flex-row justify-between w-full mb-4">

                            <div className="flex flex-row flex-wrap gap-[12px]">
                                <div className="rounded-[8px] border border-[#1C8CA7] px-3 py-1.5">
                                    <div className="flex flex-row gap-[10px] items-center">
                                        <div className="shrink-0 text-[#1C8CA7] font-['Figtree'] text-[14px] font-semibold leading-normal">₹2,00,000 & Above</div>
                                        <img src="/images/listingpage/close_brand.svg" alt="close" className="w-[11px] h-[11px] cursor-pointer" />
                                    </div>
                                </div>
                            </div>

                            {/**Sort by starts here */}
                            <div className="hidden lg:flex flex-row gap-[8px] items-center">
                                <div className="text-[#181818] font-['Figtree'] text-[14px] font-semibold leading-[21px] capitalize">Sort by</div>
                                <div className="">
                                    <Select defaultValue={sortOptions[0].value}>
                                        <SelectTrigger className="rounded-[4px] border border-[#1C8CA7] bg-white w-[180px] text-[#181818] font-['Figtree'] text-[14px] font-normal leading-[21px] capitalize">
                                            <SelectValue placeholder="Select a value" className="" />
                                        </SelectTrigger>
                                        <SelectContent className="w-[var(--radix-select-trigger-width)] bg-white">
                                            <SelectGroup className="text-[#181818] font-['Figtree'] text-[14px] font-normal leading-[21px] capitalize">
                                                {/* <SelectLabel>Fruits</SelectLabel> */}
                                                {sortOptions.map((option) => (
                                                    <SelectItem key={option.value} value={option.value} className="">
                                                        {option.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            {/**Sort by ends here */}
                        </div>

                        {/* <div className="flex flex-wrap flex-row gap-[40px]"> */}
                        <div className="grid grid-cols-1 justify-center sm:justify-center sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-start lg:flex-row gap-8">
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
                                            <span className="text-[#1A2F46] font-['Figtree'] text-[12px] font-medium leading-[14px] uppercase">Popular</span>
                                        </Badge>

                                    </div>
                                    <CardContent className="py-0 space-y-2">
                                        <Badge variant="registration" icon="/images/trendingpackages/Ellipse6306.svg" className="rounded-[4px] bg-[#DFF8F1]">
                                            <span className="text-[#00A53F] font-['Figtree'] text-[12px] font-semibold leading-[14px] uppercase">
                                                Registrations Open
                                            </span>
                                        </Badge>
                                        <div className="flex flex-col items-start gap-[12px] h-[165px]">
                                            <div className="flex flex-col items-start gap-[10px]">
                                                <h3 className="text-[#333] font-['Figtree'] text-[20px] font-semibold leading-normal">{pkg.title}</h3>
                                                <p className="text-[#333] font-['Figtree'] text-[16px] font-normal leading-[22px]">{pkg.description}</p>
                                            </div>

                                            <div className="flex py-[2px] items-center content-center gap-[10px] flex-wrap">
                                                {/* Info Row */}
                                                <Calendar className="h-4 w-4" /> {pkg.duration}
                                                <Separator orientation="vertical" className="!h-[14px] w-px bg-[#BBB] border border-[#BBB]" />
                                                <CheckCircle className="h-4 w-4" /> {pkg.inclusions}
                                                <Separator orientation="vertical" className="!h-[14px] w-px bg-[#BBB] border border-[#BBB]" />
                                                <MapPin className="h-4 w-4" /> {pkg.pickup}
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-[6px]">
                                            <p className="text-[#333333] font-['Figtree'] text-[16px] font-normal leading-[24px]">
                                                EMI starts from <span className="text-[#333333] font-['Figtree'] text-[22px] font-semibold leading-[24px]">{pkg.price}</span>
                                            </p>
                                        </div>
                                    </CardContent>
                                    {/* <CardFooter> */}
                                    {/* Buttons */}
                                    <div className="flex flex-col md:flex-row lg:flex-row gap-4">
                                        <Button variant="outline" className="flex-1 shrink-0">
                                            <span className="text-[#1A2F46] text-center font-['Figtree'] text-[14px] font-medium uppercase leading-normal">View Details</span>
                                        </Button>
                                        <Button variant="outline" className="flex-1 shrink-0">
                                            <span className="text-[#E97737] text-center font-['Figtree'] text-[14px] font-medium uppercase leading-normal">Book Now</span>
                                        </Button>
                                    </div>
                                    {/* </CardFooter> */}
                                </Card>
                            ))}

                            {/**Banner Featured Strip */}
                            <div className="hidden lg:flex flex-row w-full">
                                <div className="relative">
                                    <img src="/images/listingpage/Featured-Banner-Strip.png" className="" alt="" />
                                    <div className="absolute top-[30px] left-[60px]">
                                        <div className="flex flex-col gap-[10px] max-w-[80%]">
                                            <div className="text-white font-['Figtree'] text-[26px] font-normal leading-normal">Registrations Now Open for <span className="ont-bold">Kailash Mansarovar Yatra 2025 Parikrama!</span> Secure your seat today!</div>
                                            <div className="rounded-[6px] border border-white bg-white py-2 px-4 max-w-[160px]">
                                                <div className="flex flex-row items-center gap-[10px] cursor-pointer">
                                                    <div className="text-[#E97737] font-['Figtree'] text-[14px] font-semibold leading-normal uppercase shrink-0">Register NOW</div>
                                                    <img src="/images/listingpage/arror_icon_orange.svg" alt="" className="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/**Banner Featured Strip ends here*/}

                        </div>

                        {/**Load more btn */}
                        <div className="w-full flex flex-row items-center justify-center mt-4 mb-4">
                            <div className="rounded-[6px] border border-[#E97737] px-3 py-2 bg-[#E97737]">
                                <div className="flex flex-row gap-[10px] items-center">
                                    <div className="text-white font-['Figtree'] text-[14px] not-italic font-semibold leading-normal uppercase">Load More</div>
                                    <img src="/images/listingpage/loadMore_white.svg" alt="" className=""/>
                                </div>
                            </div>
                        </div>
                    </main>

                </div>
            </section>
            {/** Ends here */}

            {/** sort by & Filter sticky section starts here */}
            <section className="lg:hidden">
                <div className="w-full fixed bottom-0 left-0 right-0 z-100">
                    <div className="rounded-t-[6px] bg-[#1A2F46] shadow-[0_-4px_4px_0_rgba(0,0,0,0.25)] py-2 px-5">
                        <div className="flex flex-row gap-4 items-center justify-center">
                            <div className="px-3 py-3 w-full">
                                <div className="flex flex-row gap-[6px] items-center justify-center cursor-pointer" onClick={() => setOpenSortDrawer(true)}>
                                    <img src="/images/listingpage/sorting.svg" className="" alt="" />
                                    <div className="text-white text-center font-['Figtree'] text-[14px] font-semibold leading-normal">Sort</div>
                                </div>
                            </div>

                            <Separator orientation="vertical" className="!h-[38px] w-[1px] bg-[#BBB] border border-[#BBB]" />

                            <div className="px-3 py-3 w-full">
                                <div className="flex flex-row gap-[6px] items-center justify-center cursor-pointer">
                                    <img src="/images/listingpage/settings-sliders.svg" className="" alt="" />
                                    <div className="text-white text-center font-['Figtree'] text-[14px] font-semibold leading-normal" onClick={() => setOpenFilterDrawer(true)}>Filter</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/** sort by & Filter sticky section ends here */}

            {/**SortBy Drawer */}
            <SortByDrawer open={openSortDrawer} onOpenChange={setOpenSortDrawer} />
            {/**FilterBy Drawer */}
            <FilterByDrawer open={openFilterDrawer} onOpenChange={setOpenFilterDrawer} />

        </>
    )

}