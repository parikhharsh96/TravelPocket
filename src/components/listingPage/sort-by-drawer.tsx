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
                            {filterItems.map((item) => (
                                <button
                                    key={item.id}
                                    type="button"
                                    className="flex flex-row items-center gap-[12px] cursor-pointer text-left"
                                >
                                    <img src={item.iconSrc} alt={item.text} />
                                    <div className="text-black font-['Figtree'] text-[14px] font-medium leading-normal">{item.text}</div>
                                </button>
                            ))}
                        </div>
                    </div>
                </ScrollArea>
            </DrawerContent>
        </Drawer>
    )
}
