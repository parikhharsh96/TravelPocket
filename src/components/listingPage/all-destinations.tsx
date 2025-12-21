"use client"

import { useState, useMemo, useEffect } from "react";

import { Separator } from "@radix-ui/react-separator";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Calendar, CheckCircle, MapPin, X } from "lucide-react";
import Link from "next/link";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/filters-accordion";
import { FilterGroup, filterGroups, FilterOption, sortOptions } from "@/data/filters";
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
import { Destination, destinations } from "@/data/destinations";
import React from "react";
import { useRouter } from "next/navigation";
import {
    FilterState,
    initialFilterState,
    applyFilters,
    getFilterLabel,
    hasActiveFilters,
    clearAllFilters,
} from "@/lib/filter-utils";
import { applySort, SortOption, DEFAULT_SORT } from "@/lib/sort-utils";
import { useApi } from '@/lib/use-api';
import { API_ENDPOINTS } from '@/lib/constants';

interface PackageListingItem {
    packageId: number;
    title: string;
    duration: string;
    price: number;
    priceUsd: number | null;
    mrp: number | null;
    discountAmount: number | null;
    discountPercent: number | null;
    destination: string | null;
    groupId: number;
    groupName: string;
    groupDescription: string;
    groupImageUrl: string;
    groupDisplayOrder: number;
    departureDate: string | null;
    emi: number;
    isPopular: boolean;
    isTrending: boolean;
    showRegistrationOpenFlag: boolean
}

interface FilterDestination {
    destinationId: number;
    destinationName: string;
}

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
    const { data, loading, error, execute } = useApi<any>();
    const [packageListings, setPackageListings] = useState<PackageListingItem[]>([]);
    const [filterDestinationData, setFilterDestinationData] = useState<FilterDestination[]>([]);

    const [selected, setSelected] = useState<string[]>(['All']);
    const [openSortDrawer, setOpenSortDrawer] = useState(false);
    const [openFilterDrawer, setOpenFilterDrawer] = useState(false);
    const [visibleCount, setVisibleCount] = useState(6); // initial 6 items
    const [filters, setFilters] = useState<FilterState>(initialFilterState);
    const [sortBy, setSortBy] = useState<SortOption>(DEFAULT_SORT);
    const router = useRouter();

    const { data: destinationList, execute: executeDestinationLists } = useApi<any>();

    // API call for package listing
    useEffect(() => {
        const requestBody = {
            "priceRanges": [
                {
                    "min": 1,
                    "max": 10000000
                }
            ],
            "durationRanges": [
                {
                    "min": 1,
                    "max": 20
                }
            ],
            "destinationIds": [0],
            "groupIds": [0],
            "departureMonth": 0,
            "sortBy": null
        };

        execute(API_ENDPOINTS.customerHome.getPackageListing, 'POST', requestBody);

        const apiUrl = `${API_ENDPOINTS.customerHome.getDestinationListing}`;
        executeDestinationLists(apiUrl, 'GET');
    }, [execute]);

    useEffect(() => {
        if (data) {
            console.log('Package Listing API data:', data);
            if (data.data) {
                setPackageListings(data.data);
            }
        }
        if (error) {
            console.error('Package Listing API error:', error);
        }
    }, [data, error, loading]);

    useEffect(() => {
        if (destinationList) {
            console.log('Package Itineraries API data:', destinationList);
            if (destinationList.success && destinationList.data) {
                setFilterDestinationData(destinationList.data || []);
            }
        }
    }, [destinationList]);
    
    // Map tour options to destination keywords
    const getTourOptionKeywords = (option: string): string[] => {
        const optionMap: Record<string, string[]> = {
            "All": [],
            "Most Popular": [],
            "Adi Kailash & Om Parvat Yatra": ["adi kailash", "om parvat"],
            "Kailash Mansarover Darshan": ["kailash mansarovar", "kailash mansarover"],
            "Kailash Mansarover Aerial Darshan": ["kailash", "helicopter"],
            "Nepal: Land Of Gods & Monasteries": ["nepal", "muktinath", "pashupatinath"],
            "Chardham Yatra": ["char dham", "chardham"],
            "Kedarnath": ["kedarnath"],
        };
        return optionMap[option] || [];
    };

    // Apply tour option filters
    const applyTourOptionFilters = (dests: Destination[]): Destination[] => {
        // If "All" is selected, show all destinations
        const hasAll = selected.includes("All");
        const otherOptions = selected.filter(opt => opt !== "All");

        if (hasAll) {
            // "All" is selected, show everything
            return dests;
        }

        // If no options selected, show all (shouldn't happen as "All" is default)
        if (otherOptions.length === 0) {
            return dests;
        }

        // Filter by selected options
        return dests.filter((dest) => {
            const titleLower = dest.title.toLowerCase();
            const descriptionLower = dest.description.toLowerCase();
            const combinedText = `${titleLower} ${descriptionLower}`;

            // Check if destination matches any selected option
            return otherOptions.some((option) => {
                // Handle "Most Popular" separately
                if (option === "Most Popular") {
                    return dest.isPopular;
                }

                // Handle destination keyword filters
                const keywords = getTourOptionKeywords(option);
                if (keywords.length === 0) return false;
                return keywords.some((keyword) =>
                    combinedText.includes(keyword.toLowerCase())
                );
            });
        });
    };

    // Apply filters to API data instead of static destinations
    const filteredDestinations = useMemo(() => {
        // Convert API data to destination format for filtering
        const convertedPackages = packageListings.map(pkg => ({
            id: pkg.packageId,
            title: pkg.groupName,
            description: pkg.title,
            duration: pkg.duration,
            nights: parseInt(pkg.duration.split(' ')[0]) || 0,
            days: parseInt(pkg.duration.split(' ')[2]) || 0,
            type: "Group Tour" as const,
            price: pkg.price,
            emi: pkg.emi,
            month: ["May", "June", "July"], // API doesn't provide months
            pickUp: "Departure", // API doesn't have pickup info
            inclusionsCount: 20, // API doesn't have inclusion count
            status: pkg.showRegistrationOpenFlag ? "Registrations Open" as const : "Closed" as const,
            isPopular: pkg.isPopular,
            images: [pkg.groupImageUrl || "/images/trendingpackages/dummy_card_img.png"]
        }));

        const filtered = applyFilters(convertedPackages, filters);
        return applyTourOptionFilters(filtered);
    }, [filters, selected, packageListings]);

    // Apply sorting to filtered destinations
    const sortedAndFilteredDestinations = useMemo(() => {
        return applySort(filteredDestinations, sortBy);
    }, [filteredDestinations, sortBy]);

    // Reset visible count when filters, sort, or tour options change
    React.useEffect(() => {
        setVisibleCount(6);
    }, [filters, sortBy, selected]);

    const navigateToPackageDetails = () => {
        router.push("/details"); //need to add dynamic routing later
    };

    const handleBack = () => {
        if (document.referrer !== "") {
            router.back()
        } else {
            router.push("/")   // fallback
        }
    }

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 6);
    };

    const allLoaded = visibleCount >= sortedAndFilteredDestinations.length;

    // Sort handler
    const handleSortChange = (newSort: SortOption) => {
        setSortBy(newSort);
        setOpenSortDrawer(false);
    };

    // Filter handlers
    const handleFilterChange = (groupKey: keyof FilterState, value: string, checked?: boolean) => {
        setFilters((prev) => {
            const newFilters = { ...prev };

            if (groupKey === "month" || groupKey === "packageType") {
                // Single select
                newFilters[groupKey] = checked ? value : null;
            } else {
                // Multi-select (Set)
                const newSet = new Set(newFilters[groupKey] as Set<string>);
                if (checked) {
                    newSet.add(value);
                } else {
                    newSet.delete(value);
                }
                newFilters[groupKey] = newSet as any;
            }

            return newFilters;
        });
    };

    const handleClearAllFilters = () => {
        setFilters(clearAllFilters());
    };

    const handleRemoveFilter = (groupKey: keyof FilterState, value: string) => {
        setFilters((prev) => {
            const newFilters = { ...prev };

            if (groupKey === "month" || groupKey === "packageType") {
                newFilters[groupKey] = null;
            } else {
                const newSet = new Set(newFilters[groupKey] as Set<string>);
                newSet.delete(value);
                newFilters[groupKey] = newSet as any;
            }

            return newFilters;
        });
    };

    // Get active filter chips for display
    const getActiveFilterChips = () => {
        const chips: Array<{ groupKey: keyof FilterState; value: string; label: string }> = [];

        // Price filters
        filters.price.forEach((value) => {
            chips.push({ groupKey: "price", value, label: getFilterLabel("price", value) });
        });

        // Duration filters
        filters.duration.forEach((value) => {
            chips.push({ groupKey: "duration", value, label: getFilterLabel("duration", value) });
        });

        // Month filter
        if (filters.month) {
            chips.push({ groupKey: "month", value: filters.month, label: getFilterLabel("month", filters.month) });
        }

        // Package type filter
        if (filters.packageType && filters.packageType !== "all") {
            chips.push({ groupKey: "packageType", value: filters.packageType, label: getFilterLabel("packageType", filters.packageType) });
        }

        // Destination filters
        filters.destinations.forEach((value) => {
            chips.push({ groupKey: "destinations", value, label: getFilterLabel("destinations", value) });
        });

        return chips;
    };

    const toggleOption = (option: string): void => {
        setSelected((prevSelected) => {
            const otherOptions = tourOptions.filter(opt => opt !== "All");

            if (option === "All") {
                // If "All" is clicked
                if (prevSelected.includes("All")) {
                    // If "All" is already selected, deselect it
                    return prevSelected.filter((item) => item !== "All");
                } else {
                    // If "All" is not selected, select "All" (which means all options)
                    return ["All", ...otherOptions];
                }
            } else {
                // For other options
                if (prevSelected.includes(option)) {
                    // Remove the option
                    const newSelected = prevSelected.filter((item) => item !== option && item !== "All");

                    // If no options left, select "All"
                    if (newSelected.length === 0) {
                        return ["All"];
                    }

                    // Check if all other options are still selected
                    const allSelected = otherOptions.every(opt =>
                        opt === option || newSelected.includes(opt)
                    );

                    // If all are selected, add "All", otherwise don't include "All"
                    return allSelected ? ["All", ...newSelected] : newSelected;
                } else {
                    // Add the option
                    const newSelected = [...prevSelected.filter((item) => item !== "All"), option];

                    // Check if all options are now selected
                    const allSelected = otherOptions.every(opt => newSelected.includes(opt));

                    // If all options are selected, include "All"
                    return allSelected ? ["All", ...newSelected] : newSelected;
                }
            }
        });
    };


    return (
        <>
            <section className="container mx-auto"> {/**max-w-[1920px] */}
                <div className="relative rounded-[0_0_30px_30px] bg-[#EBF5F7] w-full">
                    <div className="p-4 md:p-6 lg:p-8 lg:pb-[100px]">
                        <div className="flex items-center gap-4 mb-6 md:mb-8 text-[#5a5a5a] pt-2">
                            <div className="flex items-center gap-2 hover:text-[#000000] transition-colors cursor-pointer" onClick={handleBack}>
                                {/* <Link href="/" className="flex items-center gap-2 hover:text-[#000000] transition-colors"> */}
                                {/* <ArrowLeft className="w-5 h-5" /> */}
                                <img src="/images/detailpage/arrow_back.svg" width="14px" height="14px"
                                    alt="Twitter" className="cursor-pointer" />
                                <span className="text-[#5A5A5A] font-['Figtree'] text-[11px] md:text-[12px] font-normal leading-[14px]">Back</span>
                                {/* </Link> */}
                            </div>
                            {/* <span className="text-[#d9d9d9]">|</span> */}
                            <Separator orientation="vertical" className="!h-[14px] w-px bg-[#BBB] border border-[#BBB]" />
                            <div className="flex items-center gap-2 text-base">
                                <Link href="/" className="hover:text-[#000000] transition-colors flex items-center">
                                    <span className="text-[#5A5A5A] font-['Figtree'] text-[11px] md:text-[12px] font-normal leading-[14px]">Home</span>
                                </Link>
                                <img src="/images/detailpage/arrow-right.svg" width="12px" height="12px"
                                    alt="Twitter" className="cursor-pointer" />
                                <span className="text-black font-['Figtree'] text-[11px] md:text-[12px] font-normal leading-[14px] cursor-pointer">All Destinations</span>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-col lg:flex-row items-start justify-between gap-8">
                            <div className="flex flex-col gap-[15px] flex-1 w-full md:max-w-[55%]">
                                <div className="text-[#1A2F46] font-['Playfair_Display'] text-[28px] md:text-[36px] not-italic font-semibold leading-normal">Explore All Destinations</div>
                                <div className="text-[#333] font-['Figtree'] text-[14px] md:text-[16px] not-italic font-normal leading-[22px]">Lorem ipsum dolor sit amet consectetur. Adipiscing placerat urna eu arcu. Iaculis tortor platea cursus dignissim augue. Amet diam mattis nunc turpis sapien nibh malesuada nibh. Aliquam nunc ac diam pharetra pulvinar. Lorem ipsum dolor sit amet consectetur. Adipiscing placerat urna eu arcu. Iaculis tortor platea cursus dignissim augue. Amet diam mattis nunc turpis sapien nibh malesuada nibh. Aliquam nunc ac diam pharetra pulvinar.</div>
                            </div>
                            <div className="flex flex-row gap-[10px] items-center">
                                <div className="flex-1 text-black font-['Figtree'] text-[14px] md:text-[16px] not-italic font-medium leading-6">Get our assistance for easy booking</div>
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

            <section className="container mx-auto mt-4 lg:mt-[250px]"> {/**max-w-[1920px] */}
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
                                            <div className={`font-['Figtree'] text-[14px] md:text-base font-normal leading-normal capitalize shrink-0
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
            <section className="container mx-auto"> {/**max-w-[1920px]  */}
                <div className="flex flex-row gap-6">

                    {/* sidebar content - filter */}
                    <aside className="hidden lg:block min-w-[280px] max-w-[380px] p-4 md:p-6 lg:p-8">
                        <div className="rounded-lg bg-[#EBF5F7] px-5 py-5">
                            <div className="flex flex-col gap-4 w-full">
                                <div className="flex flex-row justify-between items-center">
                                    <div className="text-black font-['Figtree'] text-[20px] font-semibold leading-normal not-italic">Filter by</div>
                                    <div
                                        className={`font-['Figtree'] text-[14px] font-normal leading-normal not-italic ${hasActiveFilters(filters)
                                            ? "text-[#4D4D4D] cursor-pointer hover:text-[#1A2F46]"
                                            : "text-[#4D4D4D] opacity-50 cursor-not-allowed"
                                            }`}
                                        onClick={hasActiveFilters(filters) ? handleClearAllFilters : undefined}
                                    >
                                        Clear all
                                    </div>
                                </div>

                                <Accordion type="multiple" defaultValue={filterGroups.map((g: FilterGroup) => g.key)}>
                                    {filterGroups.map((group: FilterGroup) => (
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
                                                        value={filters.month || ""}
                                                        onChange={(e) => handleFilterChange("month", e.target.value, !!e.target.value)}
                                                    >
                                                        <option value="">Select {group.title}</option>
                                                        {group.options.map((opt: FilterOption) => (
                                                            <option key={opt.value} value={opt.value}>
                                                                {opt.label}
                                                            </option>
                                                        ))}
                                                    </select>
                                                ) : group.type === "label" ? (
                                                    <div className="flex flex-row gap-[16px] flex-wrap items-center">
                                                        {group.options.map((option: FilterOption) => {
                                                            const isSelected = filters.packageType === option.value;
                                                            return (
                                                                <div
                                                                    key={option.value}
                                                                    className={`rounded-[8px] border px-3 py-3 cursor-pointer transition-colors ${isSelected
                                                                        ? "border-[#1C8CA7] bg-[#1C8CA7]"
                                                                        : "border-[#D2D8E4] bg-white"
                                                                        }`}
                                                                    onClick={() => handleFilterChange("packageType", option.value, !isSelected)}
                                                                >
                                                                    <div className="flex items-center">
                                                                        <div className={`font-['Figtree'] text-[14px] font-normal leading-normal ${isSelected ? "text-white" : "text-[#1A2F46]"
                                                                            }`}>
                                                                            {option.label}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                ) : (
                                                    // Checkbox
                                                    <div className="flex flex-col gap-[16px]">
                                                        {group.options.map((opt: FilterOption) => {
                                                            const filterKey = group.key as keyof FilterState;
                                                            const isChecked = filterKey === "price" || filterKey === "duration" || filterKey === "destinations"
                                                                ? (filters[filterKey] as Set<string>).has(opt.value)
                                                                : false;
                                                            return (
                                                                <div key={opt.value} className="flex flex-row gap-[10px] items-center">
                                                                    <Checkbox
                                                                        id={`${group.key}-${opt.value}`}
                                                                        checked={isChecked}
                                                                        onCheckedChange={(checked) => handleFilterChange(filterKey, opt.value, checked as boolean)}
                                                                        className="rounded-[2px] border border-[#D2D8E4] bg-white
                                                                        data-[state=checked]:rounded-[2px] data-[state=checked]:border data-[state=checked]:border-[#1C8CA7] data-[state=checked]:bg-[#1C8CA7] data-[state=checked]:text-white"
                                                                    />
                                                                    <Label htmlFor={`${group.key}-${opt.value}`} className="text-black font-['Figtree'] text-[14px] font-normal leading-normal cursor-pointer">
                                                                        {opt.label}
                                                                    </Label>
                                                                </div>
                                                            );
                                                        })}
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
                                {getActiveFilterChips().map((chip, index) => (
                                    <div key={`${chip.groupKey}-${chip.value}-${index}`} className="rounded-[8px] border border-[#1C8CA7] px-3 py-1.5">
                                        <div className="flex flex-row gap-[10px] items-center">
                                            <div className="shrink-0 text-[#1C8CA7] font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-normal">
                                                {chip.label}
                                            </div>
                                            <img
                                                src="/images/listingpage/close_brand.svg"
                                                alt="close"
                                                className="w-[11px] h-[11px] cursor-pointer"
                                                onClick={() => handleRemoveFilter(chip.groupKey, chip.value)}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/**Sort by starts here */}
                            <div className="hidden lg:flex flex-row gap-[8px] items-center">
                                <div className="text-[#181818] font-['Figtree'] text-[14px] font-semibold leading-[21px] capitalize">Sort by</div>
                                <div className="">
                                    <Select value={sortBy} onValueChange={(value) => handleSortChange(value as SortOption)}>
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
                        <div className="grid grid-cols-1 justify-center sm:justify-center sm:flex sm:flex-row sm:flex-wrap lg:flex lg:flex-wrap lg:justify-start lg:flex-row gap-8">
                            {/* {destinations.map((pkg, index) => ( */}
                            {loading ? (
                                // Loading skeleton
                                Array.from({ length: 6 }).map((_, i) => (
                                    <div key={i} className="min-w-[300px] max-w-[320px] flex-shrink-0 rounded-xl">
                                        <div className="h-48 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded-t-xl" style={{ animationDelay: `${i * 0.1}s` }}></div>
                                        <div className="p-4 space-y-3">
                                            <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded" style={{ animationDelay: `${i * 0.1}s` }}></div>
                                            <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded" style={{ animationDelay: `${i * 0.1}s` }}></div>
                                            <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded w-3/4" style={{ animationDelay: `${i * 0.1}s` }}></div>
                                            <div className="flex gap-2 mt-4">
                                                <div className="h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded flex-1" style={{ animationDelay: `${i * 0.1}s` }}></div>
                                                <div className="h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded flex-1" style={{ animationDelay: `${i * 0.1}s` }}></div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                sortedAndFilteredDestinations.slice(0, visibleCount).map((pkg, index) => (
                                    <React.Fragment key={pkg.id}>
                                        <Card className="min-w-[300px] max-w-[320px] flex-shrink-0 rounded-xl group">
                                            <div className="relative overflow-hidden rounded-t-xl h-48">
                                                <img
                                                    src={pkg.images[0]}
                                                    alt={pkg.title}
                                                    className="w-full h-full object-cover transform transition-transform duration-500 ease-out group-hover:scale-110"
                                                />
                                                {pkg.isPopular && (
                                                    <Badge
                                                        variant="popular"
                                                        icon="/images/trendingpackages/local_fire_department.svg"
                                                        className="absolute top-0.5 left-0.5 rounded-[4px] bg-[#FCD205]"
                                                    >
                                                        <span className="text-[#1A2F46] font-['Figtree'] text-[10px] md:text-[12px] font-medium leading-[14px] uppercase">Popular</span>
                                                    </Badge>
                                                )}

                                            </div>
                                            <CardContent className="py-0 space-y-2">
                                                {/* Registrations Open Badge */}
                                                {pkg.status === "Registrations Open" && (
                                                    <Badge variant="registration" icon="/images/trendingpackages/Ellipse6306.svg" className="rounded-[4px] bg-[#DFF8F1]">
                                                        <span className="text-[#00A53F] font-['Figtree'] text-[12px] font-semibold leading-[14px] uppercase">
                                                            Registrations Open
                                                        </span>
                                                    </Badge>
                                                )}
                                                <div className="flex flex-col items-start gap-[12px] h-[155px]">
                                                    <div className="flex flex-col items-start gap-[10px]">
                                                        <h3 className="text-[#333] font-['Figtree'] text-[18px] md:text-[20px] font-semibold leading-normal">{pkg.title}</h3>
                                                        <p className="text-[#333] font-['Figtree'] text-[14px] md:text-[16px] font-normal leading-[22px]">{pkg.description}{pkg.description}</p>
                                                    </div>

                                                    <div className="flex py-[2px] items-center content-center gap-[10px] flex-wrap">
                                                        {/* Info Row */}
                                                        <div className="flex flex-row gap-1 items-center"><Calendar className="h-4 w-4 text-[#5A5A5A]" /><span className="text-[#5A5A5A] font-[Figtree] text-[12px] md:text-[14px] font-medium leading-[14px] uppercase">{pkg.duration}</span></div>
                                                        {/* <Calendar className="h-4 w-4" /> {pkg.duration} */}
                                                        <Separator orientation="vertical" className="!h-[14px] w-px bg-[#BBB] border border-[#BBB]" />
                                                        <div className="flex flex-row gap-1 items-center"><CheckCircle className="h-4 w-4 text-[#5A5A5A]" /><span className="text-[#5A5A5A] font-[Figtree] text-[12px] md:text-[14px] font-medium leading-[14px] uppercase">{pkg.inclusionsCount} Inclusions</span></div>
                                                        {/* <CheckCircle className="h-4 w-4" /> {pkg.inclusionsCount} */}
                                                        <Separator orientation="vertical" className="!h-[14px] w-px bg-[#BBB] border border-[#BBB]" />
                                                        <div className="flex flex-row gap-1 items-center"><MapPin className="h-4 w-4 text-[#5A5A5A]" /><span className="text-[#5A5A5A] font-[Figtree] text-[12px] md:text-[14px] font-medium leading-[14px] uppercase">Pick up: {pkg.pickUp}</span></div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-[6px] mt-4 pt-4">
                                                    <p className="text-[#333333] font-['Figtree'] text-[14px] md:text-[16px] font-normal leading-[24px]">
                                                        EMI starts from <span className="text-[#333333] font-['Figtree'] text-[16px] md:text-[18px] font-semibold leading-[24px]">₹{pkg.price}</span>
                                                    </p>
                                                </div>
                                            </CardContent>
                                            {/* <CardFooter> */}
                                            {/* Buttons */}
                                            <div className="flex flex-row md:flex-row lg:flex-row gap-4">
                                                <Button variant="outline" className="flex-1 shrink-0 cursor-pointer
                    group-hover:bg-[linear-gradient(90deg,_#1A2F46_0%,_#1A2F46_50%,_transparent_50%)] 
             group-hover:bg-[length:200%_100%] bg-[position:100%_0] 
             group-hover:transition-[background-position] duration-300 ease-out
             group-hover:bg-[position:0_0]" onClick={navigateToPackageDetails}>
                                                    <span className="ttext-[#1A2F46] text-center font-['Figtree'] text-[11px] md:text-[14px] font-medium uppercase leading-normal group-hover:text-white">View Details</span>
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

                                        {/** Banner Display Login - Show after last item if 1-2 items, or after 3rd item if 3+ items */}
                                        {((index === 0 && sortedAndFilteredDestinations.length === 1) ||
                                            (index === 1 && sortedAndFilteredDestinations.length === 2) ||
                                            (index === 2 && sortedAndFilteredDestinations.length > 2)) && (

                                                <div className="wave-pattern rounded-[8px] overflow-hidden mt-6 mb-2"
                                                    style={{
                                                        backgroundImage: "url('/images/listingpage/banner_strip_bg.png')",
                                                        backgroundSize: "cover",
                                                        backgroundPosition: "center",
                                                    }}
                                                >
                                                    <div className="flex flex-row md:flex-row items-center justify-between w-full px-6 py-6 md:py-8">
                                                        {/* Left content */}
                                                        <div className="flex flex-col gap-4 text-white font-['Figtree'] md:max-w-[70%]">
                                                            <div className="text-[14px] md:text-[26px] font-normal leading-snug">
                                                                Registrations Now Open for{" "}
                                                                <span className="font-bold">Kailash Mansarovar Yatra 2025 Parikrama!</span>{" "}
                                                                Secure your seat today!
                                                            </div>

                                                            <button className="flex items-center justify-center gap-2 border border-white bg-white text-[#E97737] rounded-[6px] py-2 px-6 text-[12px] md:text-[14px] font-semibold uppercase hover:bg-[#fff3ec] transition w-fit">
                                                                Register Now
                                                                <img src="/images/listingpage/arror_icon_orange.svg" alt="arrow" />
                                                            </button>
                                                        </div>

                                                        {/* Right image */}
                                                        <div className="mt-6 md:mt-0 md:ml-6 flex-shrink-0 ml-4 md:ml-0">
                                                            <img
                                                                src="/images/listingpage/feature_img.png"
                                                                alt="Kailash"
                                                                className="w-[150px] h-[100px] md:w-[220px] md:h-[120px] rounded-[6px] object-cover"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                    </React.Fragment>
                                )))}
                        </div>

                        <style jsx>{`
                            @keyframes shimmer {
                                0% { background-position: 200% 0; }
                                100% { background-position: -200% 0; }
                            }
                        `}</style>

                        {/**Load more btn */}
                        {/* <div className="w-full flex flex-row items-center justify-center mt-4 mb-4">
                            <div className="rounded-[6px] border border-[#E97737] px-3 py-2 bg-[#E97737]">
                                <div className="flex flex-row gap-[10px] items-center">
                                    <div className="text-white font-['Figtree'] text-[14px] not-italic font-semibold leading-normal uppercase">Load More</div>
                                    <img src="/images/listingpage/loadMore_white.svg" alt="" className="" />
                                </div>
                            </div>
                        </div> */}

                        {!allLoaded && (
                            <div className="w-full flex justify-center mt-4 mb-4">
                                <button
                                    onClick={handleLoadMore}
                                    className="rounded-[6px] border border-[#E97737] px-3 py-2 bg-[#E97737] flex items-center gap-2"
                                >
                                    <span className="text-white font-['Figtree'] text-[14px] font-semibold uppercase leading-normal">
                                        Load More
                                    </span>
                                    <img src="/images/listingpage/loadMore_white.svg" alt="Load more" />
                                </button>
                            </div>
                        )}

                        {/* Optional: Disabled button if all loaded */}
                        {allLoaded && (
                            <div className="w-full flex justify-center mt-4 mb-4 opacity-50 cursor-not-allowed">
                                <div className="rounded-[6px] border border-[#E97737] px-3 py-2 bg-[#E97737] flex items-center gap-2">
                                    <span className="text-white font-['Figtree'] text-[14px] font-semibold uppercase leading-normal">
                                        All Loaded
                                    </span>
                                    <img src="/images/listingpage/loadMore_white.svg" alt="All loaded" />
                                </div>
                            </div>
                        )}
                    </main>

                </div >
            </section >
            {/** Ends here */}

            {/** sort by & Filter sticky section starts here */}
            <section className="lg:hidden">
                <div className="w-full fixed bottom-0 left-0 right-0 z-[9999] pb-safe">
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
            <SortByDrawer
                open={openSortDrawer}
                onOpenChange={setOpenSortDrawer}
                sortBy={sortBy}
                onSortChange={handleSortChange}
            />
            {/**FilterBy Drawer */}
            <FilterByDrawer
                open={openFilterDrawer}
                onOpenChange={setOpenFilterDrawer}
                filters={filters}
                onFilterChange={handleFilterChange}
                onClearAll={handleClearAllFilters}
            />

        </>
    )

}