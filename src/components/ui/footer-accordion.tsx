"use client"

import Link from "next/link"
import { Accordion, AccordionItem, AccordionContent } from "@/components/ui/accordion"
import { FooterAccordionTrigger } from "@/components/ui/footer-accordion-trigger"
import { Plus, Minus } from "lucide-react"

interface FooterAccordionProps {
    title: string
    links?: { label: string; href: string }[]
    showCustomContent?: boolean
    children?: React.ReactNode
}

export function FooterAccordion({ title, links, showCustomContent = false, children, }: FooterAccordionProps) {
    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value={title.toLowerCase().replace(/\s+/g, "-")}>
                <FooterAccordionTrigger className="group flex justify-between items-center border-b border-[#D2D8E4] py-4">
                    <div className="text-[#1A2F46] font-['Figtree'] text-[18px] font-semibold leading-normal">
                        {title}
                    </div>

                    <div className="flex-shrink-0">
                        {/* <Plus className="h-5 w-5 data-[state=open]:hidden" />
                            <Minus className="h-5 w-5 hidden data-[state=open]:block" /> */}
                        <img
                            src="/images/header/add_circle.svg"
                            className="h-6 w-6 group-data-[state=open]:hidden"
                        />
                        <img
                            src="/images/header/do_not_disturb_on.svg"
                            className="h-6 w-6 hidden group-data-[state=open]:block"
                        />
                    </div>
                </FooterAccordionTrigger>

                <AccordionContent className="px-4 py-3 space-y-2">
                    {/* {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="block text-[#4D4D4D] font-['Figtree'] text-[14px] font-normal leading-[30px] transition-transform hover:font-semibold transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))} */}
                    {showCustomContent ? (
                        <div>{children}</div> // Render custom JSX passed as children
                    ) : (
                        links?.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block text-[#4D4D4D] font-['Figtree'] text-[14px] font-normal leading-[30px] hover:font-semibold transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))
                    )}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}