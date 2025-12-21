"use client"

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { FilterState } from "@/lib/filter-utils";

interface ListingFiltersData {
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
}

interface FilterByDrawerProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    filters: FilterState
    onFilterChange: (groupKey: keyof FilterState, value: string, checked?: boolean) => void
    onClearAll: () => void
    listingFilters: ListingFiltersData | null
}

const filterCategories = [
    { key: "destinations", title: "Destinations" },
    { key: "price", title: "Price" },
    { key: "duration", title: "Duration" },
    { key: "month", title: "Month" }
];

export function FilterByDrawer({ open, onOpenChange, filters, onFilterChange, onClearAll, listingFilters }: FilterByDrawerProps) {
    const [activeKey, setActiveKey] = useState<string>("destinations");

    const renderFilterContent = () => {
        switch (activeKey) {
            case "destinations":
                return (
                    <div className="flex flex-col gap-[16px]">
                        {listingFilters?.destinations.map((dest) => {
                            const isChecked = (filters.destinations as Set<string>).has(dest.destinationId.toString());
                            return (
                                <div key={dest.destinationId} className="flex flex-row gap-[10px] items-center">
                                    <Checkbox
                                        id={`drawer-destinations-${dest.destinationId}`}
                                        checked={isChecked}
                                        onCheckedChange={(checked) => onFilterChange("destinations", dest.destinationId.toString(), checked === true)}
                                        className="rounded-[2px] border border-[#D2D8E4] bg-white data-[state=checked]:rounded-[2px] data-[state=checked]:border data-[state=checked]:border-[#1C8CA7] data-[state=checked]:bg-[#1C8CA7] data-[state=checked]:text-white"
                                    />
                                    <Label htmlFor={`drawer-destinations-${dest.destinationId}`} className="text-black font-['Figtree'] text-[14px] font-normal leading-normal cursor-pointer">
                                        {dest.destinationName}
                                    </Label>
                                </div>
                            );
                        })}
                    </div>
                );

            case "price":
                return (
                    <div className="flex flex-col gap-[16px]">
                        {listingFilters?.prices.map((price, index) => {
                            const priceValue = `${price.minPrice}-${price.maxPrice}`;
                            const isChecked = (filters.price as Set<string>).has(priceValue);
                            return (
                                <div key={index} className="flex flex-row gap-[10px] items-center">
                                    <Checkbox
                                        id={`drawer-price-${index}`}
                                        checked={isChecked}
                                        onCheckedChange={(checked) => onFilterChange("price", priceValue, checked === true)}
                                        className="rounded-[2px] border border-[#D2D8E4] bg-white data-[state=checked]:rounded-[2px] data-[state=checked]:border data-[state=checked]:border-[#1C8CA7] data-[state=checked]:bg-[#1C8CA7] data-[state=checked]:text-white"
                                    />
                                    <Label htmlFor={`drawer-price-${index}`} className="text-black font-['Figtree'] text-[14px] font-normal leading-normal cursor-pointer">
                                        ₹{parseInt(price.minPrice).toLocaleString()} - ₹{parseInt(price.maxPrice).toLocaleString()}
                                    </Label>
                                </div>
                            );
                        })}
                    </div>
                );

            case "duration":
                return (
                    <div className="flex flex-col gap-[16px]">
                        {listingFilters?.durations.map((duration, index) => {
                            const durationValue = `${duration.minDays}-${duration.maxDays}`;
                            const isChecked = (filters.duration as Set<string>).has(durationValue);
                            return (
                                <div key={index} className="flex flex-row gap-[10px] items-center">
                                    <Checkbox
                                        id={`drawer-duration-${index}`}
                                        checked={isChecked}
                                        onCheckedChange={(checked) => onFilterChange("duration", durationValue, checked === true)}
                                        className="rounded-[2px] border border-[#D2D8E4] bg-white data-[state=checked]:rounded-[2px] data-[state=checked]:border data-[state=checked]:border-[#1C8CA7] data-[state=checked]:bg-[#1C8CA7] data-[state=checked]:text-white"
                                    />
                                    <Label htmlFor={`drawer-duration-${index}`} className="text-black font-['Figtree'] text-[14px] font-normal leading-normal cursor-pointer">
                                        {duration.minDays} - {duration.maxDays} days
                                    </Label>
                                </div>
                            );
                        })}
                    </div>
                );

            case "month":
                return (
                    <select
                        className="w-full border border-gray-300 rounded px-2 py-1 text-[#464646] font-['Figtree'] text-[14px] font-normal leading-normal"
                        value={filters.month || ""}
                        onChange={(e) => onFilterChange("month", e.target.value, !!e.target.value)}
                    >
                        <option value="">Select Month</option>
                        {listingFilters?.months.map((month) => (
                            <option key={month.monthNo} value={month.monthNo}>
                                {month.monthName}
                            </option>
                        ))}
                    </select>
                );

            default:
                return null;
        }
    };

    return (
        <Drawer open={open} onOpenChange={onOpenChange}>
            <DrawerContent heightClass="data-[vaul-drawer-direction=bottom]:max-h-screen" className="h-screen overflow-hidden">
                <ScrollArea className="max-h-screen overflow-y-auto">
                    <DrawerHeader className="pb-4">
                        <div className="flex flex-col gap-[10px]">
                            <div className="flex flex-row justify-between items-center w-full">
                                <DrawerTitle className="text-black font-['Figtree'] text-[20px] not-italic font-semibold leading-normal">Filter By</DrawerTitle>
                                <Button variant="ghost" size="icon" onClick={() => onOpenChange(false)} className="!h-[24px] !w-[24px] ml-auto">
                                    <X className="!h-[24px] !w-[24px]" />
                                </Button>
                            </div>
                        </div>
                    </DrawerHeader>

                    <div className="flex w-full overflow-hidden">
                        {/* Left Section */}
                        <div className="w-2/5 bg-[#FFFFFF]">
                            {filterCategories.map((category) => {
                                const isActive = category.key === activeKey;
                                return (
                                    <div
                                        key={category.key}
                                        onClick={() => setActiveKey(category.key)}
                                        className={`px-3 py-3 cursor-pointer border-y border-[#E1EAED] ${
                                            isActive ? "bg-[#EBF5F7]" : "bg-[#FFFFFF]"
                                        }`}
                                    >
                                        <div className="flex flex-row items-center w-full">
                                            <div className={`font-['Figtree'] text-[14px] not-italic leading-normal shrink-1 ${
                                                isActive ? "text-[#000000] font-semibold" : "text-[#464646] font-normal"
                                            }`}>
                                                {category.title}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Right Section */}
                        <div className="flex-1 h-screen bg-[#EBF5F7] border-y border-[#E1EAED] p-4">
                            {renderFilterContent()}
                        </div>
                    </div>
                </ScrollArea>
                <div className="bg-white shadow-[0_-4px_14px_0_rgba(0,0,0,0.10)] flex flex-row items-center gap-2 justify-between px-4 py-3">
                    <Button
                        type="button"
                        variant="outline"
                        className="bg-[#DDF9FF] rounded-[8px] border border-[#DDF9FF] cursor-pointer"
                        onClick={onClearAll}
                    >
                        <div className="flex flex-row items-center px-2">
                            <span className="text-[#1A2F46] text-center font-['Figtree'] text-[14px] font-semibold leading-normal">Clear all</span>
                        </div>
                    </Button>
                    <Button
                        type="button"
                        variant="outline"
                        className="bg-[#1A2F46] rounded-[8px] border border-[#DDF9FF] cursor-pointer"
                        onClick={() => onOpenChange(false)}
                    >
                        <div className="flex flex-row items-center px-2">
                            <span className="text-white text-center font-['Figtree'] text-[14px] font-semibold leading-normal">Apply</span>
                        </div>
                    </Button>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
