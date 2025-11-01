"use client"

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { filterGroups } from "@/data/filters";
import { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

interface FilterByDrawerProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    data?: any
}


type FilterCategory = "Price" | "Tour Duration" | "Departure Month" | "Package Type" | "Destinations";

interface FilterOption {
    label: string;
    value: string;
}

const filterOptions: Record<FilterCategory, FilterOption[]> = {
    Price: [
        { label: "₹20,000 - ₹80,000", value: "range1" },
        { label: "₹80,000 - ₹1,40,000", value: "range2" },
        { label: "₹1,40,000 - ₹2,00,000", value: "range3" },
        { label: "₹1,00,000 - ₹2,00,000", value: "range4" },
        { label: "₹2,00,000 & Above", value: "range5" },
    ],
    "Tour Duration": [
        { label: "1-3 Days", value: "1-3" },
        { label: "4-7 Days", value: "4-7" },
        { label: "8+ Days", value: "8plus" },
    ],
    "Departure Month": [
        { label: "January", value: "jan" },
        { label: "February", value: "feb" },
        { label: "March", value: "mar" },
    ],
    "Package Type": [
        { label: "Family", value: "family" },
        { label: "Adventure", value: "adventure" },
        { label: "Romantic", value: "romantic" },
    ],
    Destinations: [
        { label: "Goa", value: "goa" },
        { label: "Kerala", value: "kerala" },
        { label: "Ladakh", value: "ladakh" },
    ],
};

export function FilterByDrawer({ open, onOpenChange, data }: FilterByDrawerProps) {

    const [activeKey, setActiveKey] = useState<string>(filterGroups[0].key);
    // Track selected checkboxes per group key and multiple selections
    const [selectedValues, setSelectedValues] = useState<Record<string, Set<string>>>(
        {}
    );

    const toggleCheckbox = (groupKey: string, value: string) => {
        setSelectedValues((prev) => {
            const currentSet = prev[groupKey] ?? new Set<string>();
            const newSet = new Set(currentSet);

            if (newSet.has(value)) {
                newSet.delete(value);
            } else {
                newSet.add(value);
            }

            return { ...prev, [groupKey]: newSet };
        });
    };

    const activeGroup = filterGroups.find((g) => g.key === activeKey)!;

    return (
        <Drawer open={open} onOpenChange={onOpenChange}>
            <DrawerContent className="max-h-[90vh] overflow-hidden">
                <ScrollArea className="max-h-[550px] overflow-y-auto">
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
                            {filterGroups.map((group) => {
                                const isActive = group.key === activeKey;
                                return (
                                    <div
                                        key={group.key}
                                        onClick={() => setActiveKey(group.key)}
                                        className={`px-3 py-3 cursor-pointer border-y border-[#E1EAED] ${isActive
                                            ? "bg-[#EBF5F7]"
                                            : "bg-[#FFFFFF]"
                                            }`}
                                    >
                                        <div className="flex flex-row items-center w-full">
                                            <div className={`font-['Figtree'] text-[14px] not-italic leading-normal shrink-1 ${isActive
                                                ? "text-[#000000] font-semibold"
                                                : "text-[#464646] font-normal"
                                                }`}>{group.title}</div>
                                        </div>

                                    </div>
                                );
                            })
                            }
                        </div>

                        {/* Right Section */}
                        <div className="flex-1 bg-[#EBF5F7] border-y border-[#E1EAED] p-4">
                            {activeGroup.type === "datepicker" ? (
                                <select
                                    className="w-full border border-gray-300 rounded px-2 py-1 text-[#464646] font-['Figtree'] text-[14px] font-normal leading-normal"
                                    name={activeGroup.key}
                                    defaultValue=""
                                >
                                    <option value="" disabled>
                                        Select {activeGroup.title}
                                    </option>
                                    {activeGroup.options.map((opt) => (
                                        <option key={opt.value} value={opt.value}>
                                            {opt.label}
                                        </option>
                                    ))}
                                </select>
                            ) : activeGroup.type === "label" ? (
                                <div className="flex flex-row gap-[16px] flex-wrap items-center">
                                    {activeGroup.options.map((option) => (
                                        <div
                                            key={option.value}
                                            className="rounded-[8px] border border-[#D2D8E4] bg-white px-3 py-3"
                                        >
                                            <div className="flex items-center">
                                                <div className="text-[#1A2F46] font-['Figtree'] text-[14px] font-normal leading-normal">
                                                    {option.label}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                // Checkbox group
                                <div className="flex flex-col gap-[16px]">
                                    {activeGroup.options.map((opt) => {
                                        const checked =
                                            selectedValues[activeGroup.key]?.has(opt.value) ?? false;
                                        return (
                                            <div
                                                key={opt.value}
                                                className="flex flex-row gap-[10px] items-center"
                                            >
                                                <Checkbox
                                                    id={opt.value}
                                                    checked={checked}
                                                    onChange={() =>
                                                        toggleCheckbox(activeGroup.key, opt.value)
                                                    }
                                                    className="rounded-[2px] border border-[#D2D8E4] bg-white
                                                                data-[state=checked]:rounded-[2px] data-[state=checked]:border data-[state=checked]:border-[#1C8CA7] data-[state=checked]:bg-[#1C8CA7] data-[state=checked]:text-white"
                                                />
                                                <Label htmlFor={opt.value} className="text-black font-['Figtree'] text-[14px] font-normal leading-normal">{opt.label}</Label>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                </ScrollArea>
            </DrawerContent>
        </Drawer>
    )
}
