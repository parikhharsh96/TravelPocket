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
    data?: any
}

export function SortByDrawer({ open, onOpenChange, data }: SortByDrawerProps) {
    return (
        <Drawer open={open} onOpenChange={onOpenChange}>
            <DrawerContent className="max-h-[90vh] overflow-hidden">
                <ScrollArea className="max-h-[550px] overflow-y-auto">
                    <DrawerHeader className="pb-4">
                        <div className="flex flex-col gap-[10px]">
                            <div className="flex flex-row justify-between items-center w-full">
                                <DrawerTitle className="text-black font-['Figtree'] text-[18px] font-semibold leading-[normal]">Select Departure Month</DrawerTitle>
                                <Button variant="ghost" size="icon" onClick={() => onOpenChange(false)} className="h-8 w-8 ml-auto">
                                    <X className="h-5 w-5" />
                                </Button>
                            </div>
                        </div>
                        <div className="flex flex-row gap-[8px] items-center flex-wrap">
                            <div className="max-w-[50px] rounded-lg border border-[#D2D8E4] bg-[#1A2F46]" style={{ padding: "12px 12px" }}>
                                <div className="flex flex-col items-center gap-[8px]">
                                    <div className="text-white text-center font-['Figtree'] text-[14px] font-semibold leading-[normal]">Aug</div>
                                    <div className="text-white text-center font-['Figtree'] text-[14px] font-semibold leading-[normal]">2025</div>
                                </div>
                            </div>
                            <div className="max-w-[50px] rounded-lg border border-[#D2D8E4] bg-white" style={{ padding: "12px 12px" }}>
                                <div className="flex flex-col items-center gap-[8px]">
                                    <div className="text-[#4D4D4D] text-center font-['Figtree'] text-[14px] font-normal leading-[normal]">Oct</div>
                                    <div className="text-[#4D4D4D] text-center font-['Figtree'] text-[14px] font-normal leading-[normal]">2025</div>
                                </div>
                            </div>
                            <div className="max-w-[50px] rounded-lg border border-[#D2D8E4] bg-white" style={{ padding: "12px 12px" }}>
                                <div className="flex flex-col items-center gap-[8px]">
                                    <div className="text-[#4D4D4D] text-center font-['Figtree'] text-[14px] font-normal leading-[normal]">Nov</div>
                                    <div className="text-[#4D4D4D] text-center font-['Figtree'] text-[14px] font-normal leading-[normal]">2025</div>
                                </div>
                            </div>
                            <div className="max-w-[50px] rounded-lg border border-[#D2D8E4] bg-white" style={{ padding: "12px 12px" }}>
                                <div className="flex flex-col items-center gap-[8px]">
                                    <div className="text-[#4D4D4D] text-center font-['Figtree'] text-[14px] font-normal leading-[normal]">Dec</div>
                                    <div className="text-[#4D4D4D] text-center font-['Figtree'] text-[14px] font-normal leading-[normal]">2025</div>
                                </div>
                            </div>
                        </div>
                    </DrawerHeader>
                </ScrollArea>
            </DrawerContent>
        </Drawer>
    )
}
