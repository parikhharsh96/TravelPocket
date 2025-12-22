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

import React from "react";
import { useRouter } from "next/navigation";
import {
    FilterState,
    initialFilterState,
    getFilterLabel,
    hasActiveFilters,
    clearAllFilters,
} from "@/lib/filter-utils";
import { SortOption, DEFAULT_SORT } from "@/lib/sort-utils";
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
    showRegistrationOpenFlag: boolean;
    inclusionCaption: string;
    departure: string;
}

interface ListingFiltersResponse {
    success: boolean;
    message: string;
    data: {
        destinations: {
            destinationId: number;
            destinationName: string;
        }[];
        prices: {
            minPrice: string;
            maxPrice: string;
        }[];
        durations: {
            minDays: string;
            maxDays: string;
        }[];
        months: {
            monthNo: string;
            monthName: string;
        }[];
        sortOptions: {
            sortText: string;
            sortValue: string;
        }[];
    };
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


export default function AllDestinations() {
    const { data, loading, error, execute } = useApi<any>();
    const [packageListings, setPackageListings] = useState<PackageListingItem[]>([]);
    const [listingFilters, setListingFilters] = useState<ListingFiltersResponse['data'] | null>(null);
    const [hasInitiallyLoaded, setHasInitiallyLoaded] = useState(false);

    const [selectedDestinations, setSelectedDestinations] = useState<number[]>([]);
    const [openSortDrawer, setOpenSortDrawer] = useState(false);
    const [openFilterDrawer, setOpenFilterDrawer] = useState(false);
    const [visibleCount, setVisibleCount] = useState(6); // initial 6 items
    const [filters, setFilters] = useState<FilterState>(initialFilterState);
    const [sortBy, setSortBy] = useState<SortOption>("popularity");
    const router = useRouter();

    const { data: listingFiltersData, loading: listingFiltersLoading, error: listingFiltersError, execute: executeListingFilters } = useApi<ListingFiltersResponse>();

    // Create tour options from API destinations
    const tourOptions = useMemo(() => {
        if (!listingFilters?.destinations) return [{ id: 0, name: "All" }];
        return [
            { id: 0, name: "All" },
            ...listingFilters.destinations.map(dest => ({ id: dest.destinationId, name: dest.destinationName }))
        ];
    }, [listingFilters]);

    const toggleDestinationOption = (destinationId: number): void => {
        setSelectedDestinations((prevSelected) => {
            if (destinationId === 0) {
                // "All" clicked
                if (prevSelected.includes(0)) {
                    // Deselect all - also clear filter destinations
                    setFilters(prev => ({ ...prev, destinations: new Set() }));
                    return [];
                } else {
                    // Select all - also set filter destinations
                    const allIds = listingFilters?.destinations.map(d => d.destinationId) || [];
                    setFilters(prev => ({ ...prev, destinations: new Set(allIds.map(id => id.toString())) }));
                    return [0, ...allIds];
                }
            } else {
                // Specific destination clicked
                if (prevSelected.includes(destinationId)) {
                    // Remove from both tour options and filters
                    setFilters(prev => {
                        const newSet = new Set(prev.destinations);
                        newSet.delete(destinationId.toString());
                        return { ...prev, destinations: newSet };
                    });
                    return prevSelected.filter(id => id !== destinationId && id !== 0);
                } else {
                    // Add to both tour options and filters
                    setFilters(prev => {
                        const newSet = new Set(prev.destinations);
                        newSet.add(destinationId.toString());
                        return { ...prev, destinations: newSet };
                    });
                    const newSelected = [...prevSelected.filter(id => id !== 0), destinationId];

                    // Check if all destinations are now selected
                    const allDestinationIds = listingFilters?.destinations.map(d => d.destinationId) || [];
                    const allSelected = allDestinationIds.every(id => newSelected.includes(id));

                    return allSelected ? [0, ...newSelected] : newSelected;
                }
            }
        });
    };

    // Build API request body from current filters
    const buildRequestBody = useMemo(() => {
        const priceRanges = Array.from(filters.price).map(priceRange => {
            const [min, max] = priceRange.split('-');
            return { min: parseInt(min), max: parseInt(max) };
        });

        const durationRanges = Array.from(filters.duration).map(durationRange => {
            const [min, max] = durationRange.split('-');
            return { min: parseInt(min), max: parseInt(max) };
        });

        // Combine destinations from both tour options and sidebar/drawer filters
        const tourDestinationIds = selectedDestinations.length > 0 && !selectedDestinations.includes(0)
            ? selectedDestinations
            : [];

        const filterDestinationIds = Array.from(filters.destinations).map(id => parseInt(id));

        // Merge both destination sources and remove duplicates
        const allDestinationIds = [...new Set([...tourDestinationIds, ...filterDestinationIds])];

        const requestBody = {
            priceRanges: priceRanges.length > 0 ? priceRanges : [{ min: 1, max: 10000000 }],
            durationRanges: durationRanges.length > 0 ? durationRanges : [{ min: 1, max: 20 }],
            destinationIds: allDestinationIds,
            groupIds: [0],
            departureMonth: filters.month ? parseInt(filters.month) : 0,
            sortBy: sortBy
        };

        return requestBody;
    }, [filters, sortBy, selectedDestinations]);

    // API call for package listing - trigger when filters change
    useEffect(() => {
        execute(API_ENDPOINTS.customerHome.getPackageListing, 'POST', buildRequestBody);
    }, [buildRequestBody, execute]);

    // Initial API calls
    useEffect(() => {
        executeListingFilters(API_ENDPOINTS.package.getListingFilters, 'GET');
    }, [executeListingFilters]);

    useEffect(() => {
        if (data) {
            console.log('Package Listing API data:', data);
            if (data.data) {
                setPackageListings(data.data);
            }
            setHasInitiallyLoaded(true);
        }
        if (error) {
            console.error('Package Listing API error:', error);
            setHasInitiallyLoaded(true);
        }
    }, [data, error, loading]);

    useEffect(() => {
        if (listingFiltersData) {
            console.log('Listing Filters API data:', listingFiltersData);
            if (listingFiltersData.success && listingFiltersData.data) {
                setListingFilters(listingFiltersData.data);
            }
        }
    }, [listingFiltersData, listingFiltersLoading, listingFiltersError]);

    // Reset visible count when filters, sort, or destinations change
    React.useEffect(() => {
        setVisibleCount(6);
    }, [filters, sortBy, selectedDestinations]);

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

    const allLoaded = visibleCount >= packageListings.length;

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

        // Sync destination filters with tour options
        if (groupKey === "destinations") {
            const destinationId = parseInt(value);
            setSelectedDestinations(prev => {
                if (checked) {
                    const newSelected = [...prev.filter(id => id !== 0), destinationId];
                    const allDestinationIds = listingFilters?.destinations.map(d => d.destinationId) || [];
                    const allSelected = allDestinationIds.every(id => newSelected.includes(id));
                    return allSelected ? [0, ...newSelected] : newSelected;
                } else {
                    return prev.filter(id => id !== destinationId && id !== 0);
                }
            });
        }
    };

    const handleClearAllFilters = () => {
        setFilters(clearAllFilters());
        setSelectedDestinations([]);
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

        // Sync destination removal with tour options
        if (groupKey === "destinations") {
            const destinationId = parseInt(value);
            setSelectedDestinations(prev => prev.filter(id => id !== destinationId && id !== 0));
        }
    };

    // Get active filter chips for display
    const getActiveFilterChips = () => {
        const chips: Array<{ groupKey: keyof FilterState; value: string; label: string }> = [];

        // Price filters
        filters.price.forEach((value) => {
            const [min, max] = value.split('-');
            const label = `₹${parseInt(min).toLocaleString()} - ₹${parseInt(max).toLocaleString()}`;
            chips.push({ groupKey: "price", value, label });
        });

        // Duration filters
        filters.duration.forEach((value) => {
            const [min, max] = value.split('-');
            const label = `${min} - ${max} days`;
            chips.push({ groupKey: "duration", value, label });
        });

        // Month filter
        if (filters.month) {
            const monthData = listingFilters?.months.find(m => m.monthNo === filters.month);
            const label = monthData?.monthName || filters.month;
            chips.push({ groupKey: "month", value: filters.month, label });
        }

        // Combined destination filters (from both tour options and sidebar/drawer)
        const allSelectedDestinations = new Set([
            ...Array.from(filters.destinations),
            ...selectedDestinations.filter(id => id !== 0).map(id => id.toString())
        ]);

        allSelectedDestinations.forEach((value) => {
            const destData = listingFilters?.destinations.find(d => d.destinationId.toString() === value);
            const label = destData?.destinationName || value;
            chips.push({ groupKey: "destinations", value, label });
        });

        return chips;
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
                            {listingFiltersLoading || !listingFilters ? (
                                // Tour options skeleton
                                Array.from({ length: 5 }).map((_, i) => (
                                    <div key={i} className="px-5 py-3 rounded-[8px] shrink-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] h-[44px] w-[120px]" style={{ animationDelay: `${i * 0.1}s` }}></div>
                                ))
                            ) : (
                                tourOptions.map((option, index: number) => {
                                    const isActive: boolean = selectedDestinations.includes(option.id);
                                    return (
                                        <div key={index} onClick={() => toggleDestinationOption(option.id)} className={`px-5 py-3 rounded-[8px] border shrink-0 cursor-pointer transition-colors
                                            ${isActive ? "bg-[#1A2F46] border-[#1A2F46]" : "bg-white border-[#D2D8E4]"}
                                                    `}>
                                            <div className="flex items-start w-full">
                                                <div className={`font-['Figtree'] text-[14px] md:text-base font-normal leading-normal capitalize shrink-0
                                                    ${isActive ? "text-[#FFFFFF]" : "text-[#1A2F46]"}
                                                    `}>{option.name}</div>
                                            </div>
                                        </div>
                                    )
                                })
                            )}
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

                                <Accordion type="multiple" defaultValue={["destinations", "price", "duration", "month"]}>
                                    {/* Destinations */}
                                    <AccordionItem value="destinations">
                                        <AccordionTrigger className="text-black font-['Figtree'] text-[16px] font-semibold leading-normal">
                                            Destinations
                                        </AccordionTrigger>
                                        <AccordionContent className="pt-2">
                                            {listingFiltersLoading || !listingFilters ? (
                                                // Destinations skeleton
                                                <div className="flex flex-col gap-[16px]">
                                                    {Array.from({ length: 4 }).map((_, i) => (
                                                        <div key={i} className="flex flex-row gap-[10px] items-center">
                                                            <div className="w-4 h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded-[2px]" style={{ animationDelay: `${i * 0.1}s` }}></div>
                                                            <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded flex-1" style={{ animationDelay: `${i * 0.1}s` }}></div>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className="flex flex-col gap-[16px]">
                                                    {listingFilters?.destinations.map((dest) => {
                                                        const isChecked = (filters.destinations as Set<string>).has(dest.destinationId.toString());
                                                        return (
                                                            <div key={dest.destinationId} className="flex flex-row gap-[10px] items-center">
                                                                <Checkbox
                                                                    id={`destinations-${dest.destinationId}`}
                                                                    checked={isChecked}
                                                                    onCheckedChange={(checked) => handleFilterChange("destinations", dest.destinationId.toString(), checked as boolean)}
                                                                    className="rounded-[2px] border border-[#D2D8E4] bg-white data-[state=checked]:rounded-[2px] data-[state=checked]:border data-[state=checked]:border-[#1C8CA7] data-[state=checked]:bg-[#1C8CA7] data-[state=checked]:text-white"
                                                                />
                                                                <Label htmlFor={`destinations-${dest.destinationId}`} className="text-black font-['Figtree'] text-[14px] font-normal leading-normal cursor-pointer">
                                                                    {dest.destinationName}
                                                                </Label>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            )}
                                        </AccordionContent>
                                    </AccordionItem>

                                    {/* Price */}
                                    <AccordionItem value="price">
                                        <AccordionTrigger className="text-black font-['Figtree'] text-[16px] font-semibold leading-normal">
                                            Price
                                        </AccordionTrigger>
                                        <AccordionContent className="pt-2">
                                            {listingFiltersLoading || !listingFilters ? (
                                                // Price skeleton
                                                <div className="flex flex-col gap-[16px]">
                                                    {Array.from({ length: 3 }).map((_, i) => (
                                                        <div key={i} className="flex flex-row gap-[10px] items-center">
                                                            <div className="w-4 h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded-[2px]" style={{ animationDelay: `${i * 0.1}s` }}></div>
                                                            <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded flex-1" style={{ animationDelay: `${i * 0.1}s` }}></div>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className="flex flex-col gap-[16px]">
                                                    {listingFilters?.prices.map((price, index) => {
                                                        const priceValue = `${price.minPrice}-${price.maxPrice}`;
                                                        const isChecked = (filters.price as Set<string>).has(priceValue);
                                                        return (
                                                            <div key={index} className="flex flex-row gap-[10px] items-center">
                                                                <Checkbox
                                                                    id={`price-${index}`}
                                                                    checked={isChecked}
                                                                    onCheckedChange={(checked) => handleFilterChange("price", priceValue, checked as boolean)}
                                                                    className="rounded-[2px] border border-[#D2D8E4] bg-white data-[state=checked]:rounded-[2px] data-[state=checked]:border data-[state=checked]:border-[#1C8CA7] data-[state=checked]:bg-[#1C8CA7] data-[state=checked]:text-white"
                                                                />
                                                                <Label htmlFor={`price-${index}`} className="text-black font-['Figtree'] text-[14px] font-normal leading-normal cursor-pointer">
                                                                    ₹{parseInt(price.minPrice).toLocaleString()} - ₹{parseInt(price.maxPrice).toLocaleString()}
                                                                </Label>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            )}
                                        </AccordionContent>
                                    </AccordionItem>

                                    {/* Duration */}
                                    <AccordionItem value="duration">
                                        <AccordionTrigger className="text-black font-['Figtree'] text-[16px] font-semibold leading-normal">
                                            Duration
                                        </AccordionTrigger>
                                        <AccordionContent className="pt-2">
                                            {listingFiltersLoading || !listingFilters ? (
                                                // Duration skeleton
                                                <div className="flex flex-col gap-[16px]">
                                                    {Array.from({ length: 3 }).map((_, i) => (
                                                        <div key={i} className="flex flex-row gap-[10px] items-center">
                                                            <div className="w-4 h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded-[2px]" style={{ animationDelay: `${i * 0.1}s` }}></div>
                                                            <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded flex-1" style={{ animationDelay: `${i * 0.1}s` }}></div>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className="flex flex-col gap-[16px]">
                                                    {listingFilters?.durations.map((duration, index) => {
                                                        const durationValue = `${duration.minDays}-${duration.maxDays}`;
                                                        const isChecked = (filters.duration as Set<string>).has(durationValue);
                                                        return (
                                                            <div key={index} className="flex flex-row gap-[10px] items-center">
                                                                <Checkbox
                                                                    id={`duration-${index}`}
                                                                    checked={isChecked}
                                                                    onCheckedChange={(checked) => handleFilterChange("duration", durationValue, checked as boolean)}
                                                                    className="rounded-[2px] border border-[#D2D8E4] bg-white data-[state=checked]:rounded-[2px] data-[state=checked]:border data-[state=checked]:border-[#1C8CA7] data-[state=checked]:bg-[#1C8CA7] data-[state=checked]:text-white"
                                                                />
                                                                <Label htmlFor={`duration-${index}`} className="text-black font-['Figtree'] text-[14px] font-normal leading-normal cursor-pointer">
                                                                    {duration.minDays} - {duration.maxDays} days
                                                                </Label>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            )}
                                        </AccordionContent>
                                    </AccordionItem>

                                    {/* Month */}
                                    <AccordionItem value="month">
                                        <AccordionTrigger className="text-black font-['Figtree'] text-[16px] font-semibold leading-normal">
                                            Month
                                        </AccordionTrigger>
                                        <AccordionContent className="pt-2">
                                            {listingFiltersLoading || !listingFilters ? (
                                                // Month skeleton
                                                <div className="h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded w-full"></div>
                                            ) : (
                                                <select
                                                    className="w-full border border-gray-300 rounded px-2 py-1"
                                                    value={filters.month || ""}
                                                    onChange={(e) => handleFilterChange("month", e.target.value, !!e.target.value)}
                                                >
                                                    <option value="">Select Month</option>
                                                    {listingFilters?.months.map((month) => (
                                                        <option key={month.monthNo} value={month.monthNo}>
                                                            {month.monthName}
                                                        </option>
                                                    ))}
                                                </select>
                                            )}
                                        </AccordionContent>
                                    </AccordionItem>
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
                                                {listingFilters?.sortOptions?.map((option) => (
                                                    <SelectItem key={option.sortValue} value={option.sortValue} className="">
                                                        {option.sortText}
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
                                packageListings.slice(0, visibleCount).map((pkg, index) => (
                                    <React.Fragment key={pkg.packageId}>
                                        <Card className="min-w-[300px] max-w-[320px] flex-shrink-0 rounded-xl group">
                                            <div className="relative overflow-hidden rounded-t-xl h-48">
                                                <img
                                                    src={pkg.groupImageUrl}
                                                    alt={pkg.groupName}
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
                                                {pkg.showRegistrationOpenFlag && (
                                                    <Badge variant="registration" icon="/images/trendingpackages/Ellipse6306.svg" className="rounded-[4px] bg-[#DFF8F1]">
                                                        <span className="text-[#00A53F] font-['Figtree'] text-[12px] font-semibold leading-[14px] uppercase">
                                                            Registrations Open
                                                        </span>
                                                    </Badge>
                                                )}
                                                <div className="flex flex-col items-start gap-[12px] h-[155px]">
                                                    <div className="flex flex-col items-start gap-[10px]">
                                                        <h3 className="text-[#333] font-['Figtree'] text-[18px] md:text-[20px] font-semibold leading-normal">{pkg.groupName}</h3>
                                                        <p className="text-[#333] font-['Figtree'] text-[14px] md:text-[16px] font-normal leading-[22px]">{pkg.title}</p>
                                                    </div>

                                                    <div className="flex py-[2px] items-center content-center gap-[10px] flex-wrap">
                                                        {/* Info Row */}
                                                        {pkg.duration && (
                                                            <div className="flex flex-row gap-1 items-center"><Calendar className="h-4 w-4 text-[#5A5A5A]" /><span className="text-[#5A5A5A] font-[Figtree] text-[12px] md:text-[14px] font-medium leading-[14px] uppercase">{pkg.duration}</span></div>
                                                        )}
                                                        {pkg.inclusionCaption && (
                                                            <>
                                                                <Separator orientation="vertical" className="!h-[14px] w-px bg-[#BBB] border border-[#BBB]" />
                                                                <div className="flex flex-row gap-1 items-center"><CheckCircle className="h-4 w-4 text-[#5A5A5A]" /><span className="text-[#5A5A5A] font-[Figtree] text-[12px] md:text-[14px] font-medium leading-[14px] uppercase">{pkg.inclusionCaption}</span></div>
                                                            </>
                                                        )}
                                                        {pkg.departure && (
                                                            <>
                                                                <Separator orientation="vertical" className="!h-[14px] w-px bg-[#BBB] border border-[#BBB]" />
                                                                <div className="flex flex-row gap-1 items-center"><MapPin className="h-4 w-4 text-[#5A5A5A]" /><span className="text-[#5A5A5A] font-[Figtree] text-[12px] md:text-[14px] font-medium leading-[14px] uppercase">{pkg.departure}</span></div>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-[6px] mt-4 pt-4">
                                                    <p className="text-[#333333] font-['Figtree'] text-[14px] md:text-[16px] font-normal leading-[24px]">
                                                        EMI starts from <span className="text-[#333333] font-['Figtree'] text-[16px] md:text-[18px] font-semibold leading-[24px]">₹{pkg.emi}</span>
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
                                        {((index === 0 && packageListings.length === 1) ||
                                            (index === 1 && packageListings.length === 2) ||
                                            (index === 2 && packageListings.length > 2)) && (

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

                        {!allLoaded && packageListings.length > 0 && (
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

                        {/* Show "All Loaded" only when there are packages and all are visible */}
                        {allLoaded && packageListings.length > 0 && (
                            <div className="w-full flex justify-center mt-4 mb-4 opacity-50 cursor-not-allowed">
                                <div className="rounded-[6px] border border-[#E97737] px-3 py-2 bg-[#E97737] flex items-center gap-2">
                                    <span className="text-white font-['Figtree'] text-[14px] font-semibold uppercase leading-normal">
                                        All Loaded
                                    </span>
                                    <img src="/images/listingpage/loadMore_white.svg" alt="All loaded" />
                                </div>
                            </div>
                        )}

                        {/* Show "No Results" when package list is empty after initial load */}
                        {!loading && hasInitiallyLoaded && packageListings.length === 0 && (
                            <div className="w-full flex justify-center mt-8 mb-8">
                                <div className="text-center">
                                    <div className="text-[#666] font-['Figtree'] text-[18px] font-medium mb-2">
                                        No packages found
                                    </div>
                                    <div className="text-[#999] font-['Figtree'] text-[14px]">
                                        Try adjusting your filters to see more results
                                    </div>
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
                listingFilters={listingFilters}
                loading={listingFiltersLoading}
            />
            {/**FilterBy Drawer */}
            <FilterByDrawer
                open={openFilterDrawer}
                onOpenChange={setOpenFilterDrawer}
                filters={filters}
                onFilterChange={handleFilterChange}
                onClearAll={handleClearAllFilters}
                listingFilters={listingFilters}
                loading={listingFiltersLoading}
            />

        </>
    )

}