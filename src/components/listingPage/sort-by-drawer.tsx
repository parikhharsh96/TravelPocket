"use client"

import { X, MessageCircle, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@radix-ui/react-separator"
import { SortOption } from "@/lib/sort-utils"

interface SortByDrawerProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    sortBy: SortOption
    onSortChange: (sort: SortOption) => void
    listingFilters: {
        sortOptions: {
            sortText: string;
            sortValue: string;
        }[];
    } | null
    loading?: boolean
}

const filterItems = [
    {
        id: "popularity" as SortOption,
        iconSrc: "/images/listingpage/fire.svg",
        text: "Popularity"
    },
    {
        id: "latest" as SortOption,
        iconSrc: "/images/listingpage/tag-icon.svg",
        text: "Latest"
    },
    {
        id: "featured" as SortOption,
        iconSrc: "/images/listingpage/star.svg",
        text: "Featured"
    },
    {
        id: "pricelowtohigh" as SortOption,
        iconSrc: "/images/listingpage/down.svg",
        text: "Price: Low to High"
    },
    {
        id: "pricehightolow" as SortOption,
        iconSrc: "/images/listingpage/sort.svg",
        text: "Price: High to Low"
    },
    {
        id: "discount" as SortOption,
        iconSrc: "/images/listingpage/discount.svg",
        text: "Discount"
    }
];

export function SortByDrawer({ open, onOpenChange, sortBy, onSortChange, listingFilters, loading }: SortByDrawerProps) {
    return (
        <Drawer open={open} onOpenChange={onOpenChange}>
            <DrawerContent
                // bottom drawer limited to half the viewport height
                heightClass="data-[vaul-drawer-direction=bottom]:max-h-[50vh]"
                className="overflow-hidden flex flex-col"
            >
                {/* header stays fixed */}
                <DrawerHeader className="pb-4">
                    <div className="flex flex-col gap-[10px]">
                        <div className="flex flex-row justify-between items-center w-full">
                            <DrawerTitle className="text-black font-['Figtree'] text-[20px] not-italic font-semibold leading-normal">Sort By</DrawerTitle>
                            <Button type="button" variant="ghost" size="icon" onClick={() => onOpenChange(false)} className="!h-[24px] !w-[24px] ml-auto">
                                <X className="!h-[24px] !w-[24px]" />
                            </Button>
                        </div>
                    </div>
                </DrawerHeader>

                {/* scroll only the list; fill remaining space */}
                <ScrollArea className="flex-1 overflow-y-auto bg-[#EBF5F7]">
                    <div className="w-full bg-[#EBF5F7] px-5 py-4 h-full">
                        <div className="flex flex-col items-start gap-[18px]">
                            {loading || !listingFilters ? (
                                // Skeleton loading
                                Array.from({ length: 5 }).map((_, i) => (
                                    <div key={i} className="flex flex-row items-center gap-[12px] w-full">
                                        <div className="w-6 h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded" style={{ animationDelay: `${i * 0.1}s` }}></div>
                                        <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded flex-1" style={{ animationDelay: `${i * 0.1}s` }}></div>
                                    </div>
                                ))
                            ) : (
                                listingFilters?.sortOptions?.map((option) => {
                                    const isSelected = sortBy === option.sortValue;
                                    const iconSrc = filterItems.find(item => item.id === option.sortValue)?.iconSrc || "/images/listingpage/sort.svg";
                                    return (
                                        <button
                                            key={option.sortValue}
                                            type="button"
                                            className={`flex flex-row items-center gap-[12px] cursor-pointer text-left w-full ${
                                                isSelected ? "opacity-100" : "opacity-70 hover:opacity-100"
                                            }`}
                                            onClick={() => onSortChange(option.sortValue as SortOption)}
                                        >
                                            <img src={iconSrc} alt={option.sortText} />
                                            <div className={`font-['Figtree'] text-[14px] font-medium leading-normal ${
                                                isSelected ? "text-[#1C8CA7]" : "text-black"
                                            }`}>
                                                {option.sortText}
                                            </div>
                                            {isSelected && (
                                                <div className="ml-auto">
                                                    <div className="w-2 h-2 rounded-full bg-[#1C8CA7]"></div>
                                                </div>
                                            )}
                                        </button>
                                    );
                                })
                            )}
                        </div>
                    </div>
                </ScrollArea>
            </DrawerContent>
        </Drawer>
    )
}
