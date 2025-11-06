"use client"

import { X, MessageCircle, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@radix-ui/react-separator"

interface SortByDrawerProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: any
}

const filterItems = [
    {
        id: "popularity",
        iconSrc: "/images/listingpage/fire.svg",
        text: "Popularity"
    },
    {
        id: "latest",
        iconSrc: "/images/listingpage/tag-icon.svg",
        text: "Latest"
    },
    {
        id: "featured",
        iconSrc: "/images/listingpage/star.svg",
        text: "Featured"
    },
    {
        id: "price-low-to-high",
        iconSrc: "/images/listingpage/down.svg",
        text: "Price: Low to High"
    },
    {
        id: "price-high-to-low",
        iconSrc: "/images/listingpage/sort.svg",
        text: "Price: High to Low"
    },
    {
        id: "discount",
        iconSrc: "/images/listingpage/discount.svg",
        text: "Discount"
    }
];

export function SortByDrawer({ open, onOpenChange, data }: SortByDrawerProps) {
    return (
        <Drawer open={open} onOpenChange={onOpenChange}>
            <DrawerContent className="max-h-[90vh] overflow-hidden">
                <ScrollArea className="max-h-[550px] overflow-y-auto">
                    <DrawerHeader className="pb-4">
                        <div className="flex flex-col gap-[10px]">
                            <div className="flex flex-row justify-between items-center w-full">
                                <DrawerTitle className="text-black font-['Figtree'] text-[20px] not-italic font-semibold leading-normal">Sort By</DrawerTitle>
                                <Button variant="ghost" size="icon" onClick={() => onOpenChange(false)} className="!h-[24px] !w-[24px] ml-auto">
                                    <X className="!h-[24px] !w-[24px]" />
                                </Button>
                            </div>
                        </div>
                    </DrawerHeader>

                    <div className="w-full bg-[#EBF5F7] px-5 py-4">
                        <div className="flex flex-col items-start gap-[18px]">
                            {filterItems.map((item) => (
                                <div key={item.id} className="flex flex-row items-center gap-[12px] cursor-pointer">
                                    <img src={item.iconSrc} alt={item.text} className="" />
                                    <div className="text-black font-['Figtree'] text-[14px] font-medium leading-normal">{item.text}</div>
                                </div>

                            ))}
                        </div>
                    </div>
                </ScrollArea>
            </DrawerContent>
        </Drawer>
    )
}
