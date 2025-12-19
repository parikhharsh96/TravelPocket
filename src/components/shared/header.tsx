'use client';

import { useState, useEffect } from "react";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useApi } from '@/lib/use-api';
import { API_ENDPOINTS } from '@/lib/constants';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import React from "react";
import { ChevronDown, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/filters-accordion";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
    InputGroupText,
    InputGroupTextarea,
} from "@/components/ui/input-group"
import { ScrollArea } from "../ui/scroll-area";
import { useRouter } from "next/navigation";

interface HeaderProps {
    bgColor?: string; // pass tailwind background class
    rounded?: string;
    showSearch?: boolean;
}

interface Package {
    packageId: number;
    packageName: string;
}

interface MenuGroup {
    groupId: number;
    groupName: string;
    packages: Package[];
}



const whoWeAreOptions = [
    { label: "About us", href: "/about-us" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact us", href: "/contact-us" },
    { label: "Gallery/Media", href: "/gallery-media" },
    { label: "Blogs", href: "/blogs" },
    { label: "Careers", href: "/careers" },
];

const domesticDestinations = [
    { label: "Kailash Mansarovar", url: "/details" },
    { label: "Adi Kailash & Om Parvat", url: "/details" },
    { label: "Chardham", url: "/details" },
    { label: "Do Dham", url: "/details" },
    { label: "Kedarnath", url: "/details" },
    { label: "Himachal", url: "/details" },
    { label: "Rajasthan", url: "/details" },
    { label: "North India", url: "/details" }
];

const internationalDestinations = [
    { label: "Nepal", url: "/details" },
    { label: "Bali", url: "/details" },
    { label: "Bhutan", url: "/details" },
    { label: "Tibet", url: "/details" }
];

const destinationsList = [
    { label: "Kailash Mansarovar", url: "/details" },
    { label: "Adi Kailash", url: "/details" },
    { label: "Nepal", url: "/details" },
    { label: "Kedarnath", url: "/details" }
];

const allDestinations = [
    ...domesticDestinations.map((d) => ({ ...d, type: "Domestic" })),
    ...internationalDestinations.map((d) => ({ ...d, type: "International" })),
];

const iconRoutes: Record<string, string> = {
    "magnifiying-glass": "/search",
    "wishlist": "/wishlist",
    "cart": "/cart",
    "user": "/account",
}


export default function Header({ bgColor, rounded, showSearch = false }: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [popoverOpen, setPopoverOpen] = useState(false);
    const [menuData, setMenuData] = useState<MenuGroup[] | null>(null);
    const router = useRouter();
    const { data, loading, error, execute } = useApi<any>();

    useEffect(() => {
        const apiUrl = `${API_ENDPOINTS.header.getMenuSubmenus}?userid=0`;
        execute(apiUrl);
    }, [execute]);

    useEffect(() => {
        if (data) {
            console.log('Menu Submenus API data:', data);
            if (data.success && data.data) {
                setMenuData(data.data);
            }
        }
        if (error) {
            console.error('Menu Submenus API error:', error);
        }
    }, [data, error]);

    const navLinks = ["Kailash Mansarovar", "ADI Kailash", "All Destinations", "WHO WE ARE"];
    const topLinks = [
        { label: "Blogs", href: "/blogs" },
        { label: "JOIN POCKETCLUB", href: "/rewards" },
        { label: "OFFERS", href: "/offers" },
        { label: "FAQs", href: "/faqs" },
        { label: "Contact", href: "/contact-us" },
    ];
    const icons = [
        ...(!showSearch ? ["magnifiying-glass"] : []),
        "wishlist",
        "cart",
        "user"
    ];

    const handleIconClick = (icon: string) => {
        const route = iconRoutes[icon]

        if (!route) return // ignore if no route

        router.push(route)
    }

    const navigateToHome = () => {
        router.push("/");
    };

    const navigateToPackages = () => {
        router.push("/listing");
    };

    const getPackagesByGroup = (groupName: string) => {
        return menuData?.find(group => group.groupName === groupName)?.packages || [];
    };

    return (
        // <header className="w-full overflow-x-hidden relative bg-white rounded-md" style={{ boxShadow: "0 0 6px 0 rgba(0, 0, 0, 0.12)" }}>
        <header
            className={`w-full overflow-x-hidden relative ${rounded ?? "rounded-md"} ${bgColor ?? "bg-white"}`}
            style={{ boxShadow: "0 0 6px 0 rgba(0, 0, 0, 0.12)" }}
        >
            {/* Top Bar */}
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap justify-between items-center gap-2">
                {/* Left Section */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                    <div className="flex items-center gap-2 sm:gap-4">
                        <img src="/images/header/facebook.svg" alt="Facebook" className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer" />
                        <img src="/images/header/logo_51.svg" alt="Logo" className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer" />
                        <img src="/images/header/instagram.svg" alt="Instagram" className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer" />
                    </div>

                    <Separator orientation="vertical" className="!h-4 w-px bg-[#BBB] hidden lg:block" />

                    <div className="flex items-center gap-1 sm:gap-2 text-[12px] md:text-[12px] lg:text-[14px] uppercase font-normal font-[Figtree] text-[#333] hidden lg:flex">
                        <img src="/images/header/calendar.svg" alt="Calendar" className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-[12px] md:text-[12px] lg:text-[14px]">2025 Calendar</span>
                    </div>

                    <Separator orientation="vertical" className="!h-4 w-px bg-[#BBB]" />
                    <div className="flex items-center gap-1 sm:gap-2 text-[12px] md:text-[12px] lg:text-[14px] uppercase font-normal font-[Figtree] text-[#333] underline">
                        <img src="/images/header/call.svg" alt="Call" className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>+91 78270-33601</span>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex items-center flex-wrap gap-2 sm:gap-4">
                    {topLinks.map(link => (
                        // <a key={link} href="#" className={`text-[#333] font-[Figtree] text-[12px] md:text-[12px] lg:text-[14px] uppercase ${link !== "FAQs" ? "hidden lg:block" : ""}`}>{link}</a>
                        <Link
                            key={link.label}
                            href={link.href}
                            className={`text-[#333] font-['Figtree'] text-[12px] md:text-[12px] lg:text-[14px] uppercase ${link.label !== "FAQs" ? "hidden lg:block" : ""
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}

                    <Separator orientation="vertical" className="!h-4 w-px bg-[#BBB] hidden lg:block" />

                    <div className="hidden lg:flex items-center gap-1 sm:gap-2 text-[12px] md:text-[12px] lg:text-[14px] uppercase font-[Figtree] text-[#333]">
                        <span>EN</span>
                        <img src="/images/header/Polygon.svg" alt="Dropdown" className="w-2 h-2 sm:w-3 sm:h-3" />
                    </div>
                </div>
            </div>

            <Separator orientation="horizontal" className="bg-[#BBB] my-1 h-[1px]" />

            {/* Bottom Bar */}
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-2 py-0">{/**py-2 */}
                <div className="flex items-center gap-0">
                    {/* Hamburger Menu for Mobile & Tablet */}
                    <button
                        className="lg:hidden p-1"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <img src="/images/header/dehaze.svg" alt="Menu" className="w-6 h-6" />
                    </button>

                    {/* Logo */}
                    <div className="flex-shrink-0 cursor-pointer" onClick={navigateToHome}>
                        <img src="/images/footer/logo_design_travel_pocket.svg" alt="Logo" className="w-[140px] sm:w-[220px] h-auto" />
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="hidden lg:flex items-center gap-4">
                    {navLinks.map((item, index) => {
                        if (item === "Kailash Mansarovar" || item === "ADI Kailash" || item === "WHO WE ARE") {
                            return (
                                <DropdownMenu
                                    key={item}
                                    open={openIndex === index}
                                    onOpenChange={(isOpen) => setOpenIndex(isOpen ? index : null)}
                                >
                                    <DropdownMenuTrigger
                                        asChild
                                        onMouseEnter={() => setOpenIndex(index)}
                                        onMouseLeave={() => setOpenIndex(null)}
                                    >
                                        <div className="flex items-center justify-center gap-1 sm:gap-2 text-[12px] md:text-[12px] lg:text-[14px] font-semibold font-['Figtree'] uppercase text-[#333] group hover:text-[#e97737] cursor-pointer">
                                            <span className="font-['Figtree']">{item}</span>
                                            <ChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180" />
                                        </div>
                                    </DropdownMenuTrigger>

                                    <DropdownMenuContent
                                        className="w-56 rounded-[8px] bg-white shadow-[0_6px_9px_0_rgba(0,0,0,0.25)] border-none px-1"
                                        align="start"
                                        onMouseEnter={() => setOpenIndex(index)}
                                        onMouseLeave={() => setOpenIndex(null)}
                                    >
                                        {item === "WHO WE ARE" && (
                                            <>
                                                {whoWeAreOptions.map((option, ind) => (
                                                    <React.Fragment key={ind}>
                                                        <DropdownMenuItem>
                                                            <Link
                                                                href={option.href || "/"}
                                                                className="block px-3 py-2 text-[#1A2F46] font-['Figtree'] text-[16px] font-medium leading-[24px]"
                                                            >
                                                                {option.label}
                                                            </Link>
                                                        </DropdownMenuItem>
                                                        {ind !== whoWeAreOptions.length - 1 && (
                                                            <Separator orientation="horizontal" className="w-full border border-[#E7E7E7]" />
                                                        )}
                                                    </React.Fragment>
                                                ))}
                                            </>
                                        )}

                                        {(item === "Kailash Mansarovar" || item === "ADI Kailash") && (
                                            <>
                                                {getPackagesByGroup(item === "ADI Kailash" ? "Adi Kailash" : item).map((pkg, ind) => (
                                                    <React.Fragment key={pkg.packageId}>
                                                        <DropdownMenuItem>
                                                            <Link
                                                                href={`/details?packageId=${pkg.packageId}`}
                                                                className="block px-3 py-2 text-[#1A2F46] font-['Figtree'] text-[16px] font-medium leading-[24px]"
                                                            >
                                                                {pkg.packageName}
                                                            </Link>
                                                        </DropdownMenuItem>
                                                        {ind !== getPackagesByGroup(item === "ADI Kailash" ? "Adi Kailash" : item).length - 1 && (
                                                            <Separator orientation="horizontal" className="w-full border border-[#E7E7E7]" />
                                                        )}
                                                    </React.Fragment>
                                                ))}
                                            </>
                                        )}

                                    </DropdownMenuContent>
                                </DropdownMenu>
                            );
                        }

                        // For All Destination nav links, just Popover
                        return (
                            <Popover key={item} open={popoverOpen} onOpenChange={setPopoverOpen}>
                                <PopoverTrigger asChild>
                                    <div className="flex items-center justify-center gap-1 sm:gap-2 text-[12px] md:text-[12px] lg:text-[14px] font-semibold uppercase text-[#333] group hover:text-[#e97737] cursor-pointer" onMouseEnter={() => setPopoverOpen(true)}
                                        onMouseLeave={() => setPopoverOpen(false)}>
                                        <span className="font-['Figtree']">{item}</span>
                                        <ChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180" />
                                    </div>
                                    {/* <Button
                                        variant="outline"
                                        onMouseEnter={() => setPopoverOpen(true)}
                                        onMouseLeave={() => setPopoverOpen(false)}
                                    >
                                        Open popover
                                    </Button> */}
                                </PopoverTrigger>

                                <PopoverContent
                                    className="w-full !z-50 rounded-[8px] bg-white shadow-[0_6px_9px_0_rgba(0,0,0,0.25)] border-none"
                                    onMouseEnter={() => setPopoverOpen(true)}
                                    onMouseLeave={() => setPopoverOpen(false)}
                                >
                                    <div className="w-[800px] px-4 py-4">
                                        <div className="flex justify-between items-center mb-4">
                                            <div className="text-[24px] font-semibold leading-normal font-['Playfair_Display'] text-[#1A2F46]">Explore All Destinations</div>
                                            <button className="group rounded-[6px] border border-[#E97737] px-3 py-3 cursor-pointer
                    bg-[linear-gradient(90deg,_#E97737_0%,_#E97737_50%,_transparent_50%)] 
             bg-[length:200%_100%] bg-[position:100%_0] 
             transition-[background-position] duration-300 ease-out
             hover:bg-[position:0_0]" onClick={navigateToPackages} tabIndex={-1}>
                                                <div className="flex flex-row gap-[10px] justify-center items-center">
                                                    <div className="text-[#E97737] font-['Figtree'] text-[14px] font-semibold leading-normal uppercase group-hover:text-white">View all</div>
                                                    <div className="">
                                                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                            <circle cx="10" cy="10" r="9.5" stroke="#E97737" />
                                                            <path d="M12.8677 10.4H5.33333V9.6H12.8677L9.82973 6.562L10.4 6L14.4 10L10.4 14L9.82973 13.438L12.8677 10.4Z" fill="#E97737" />
                                                        </svg> */}
                                                        <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 cursor-pointer transition-transform duration-300 ease-in-out text-[#E97737] group-hover:-rotate-45 group-hover:bg-white group-hover:rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                                                            <circle className="group-hover:[stroke-width:0]" cx="10" cy="10" r="9.5" stroke="currentColor" strokeWidth="1" fill="none" />
                                                            <path d="M12.8677 10.4H5.33331V9.6H12.8677L9.82971 6.562L10.4 6L14.4 10L10.4 14L9.82971 13.438L12.8677 10.4Z" fill="currentColor" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>

                                        <Separator orientation="horizontal" className="w-full border border-[#E7E7E7] mb-4" />

                                        <div className="grid grid-cols-[1fr_auto_1fr] gap-x-[40px]">
                                            {/* Domestic Destinations */}
                                            <div className="flex flex-col gap-[30px]">
                                                <div className="text-[#E97737] font-['Playfair_Display'] text-[18px] font-semibold leading-normal mb-3">Domestic Destinations</div>
                                                <div className="grid grid-cols-2 gap-x-[40px] gap-y-[30px]">
                                                    {domesticDestinations.map((dest, index) => (
                                                        // <div className="text-[#1A2F46] font-['Figtree'] text-[18px] font-medium leading-normal">Adi Kailash & Om Parvat</div>
                                                        <Link
                                                            key={index}
                                                            href={dest.url || "/"} // Replace with actual href
                                                            className="text-[#1A2F46] font-['Figtree'] text-[18px] font-medium leading-normal"
                                                        >
                                                            {dest.label}
                                                        </Link>
                                                    ))}
                                                </div>

                                                <img
                                                    src="/images/header/domestic_img.jpg"
                                                    alt="Domestic"
                                                    className="mt-4 rounded-lg w-full object-cover h-36"
                                                />
                                            </div>

                                            {/* Vertical Separator */}
                                            <Separator orientation="vertical" className="h-full w-[1px] bg-[#E7E7E7]" />

                                            {/* International Destinations */}
                                            <div className="flex flex-col gap-[30px]">
                                                <div className="text-[#E97737] font-['Playfair_Display'] text-[18px] font-semibold leading-normal mb-3">International Destinations</div>

                                                <div className="grid grid-cols-1 gap-y-[40px]">
                                                    {internationalDestinations.map((dest, index) => (
                                                        // <div className="text-[#1A2F46] font-['Figtree'] text-[18px] font-medium leading-normal">Adi Kailash & Om Parvat</div>
                                                        <Link
                                                            key={index}
                                                            href={dest.url || "/"} // Replace with actual href
                                                            className="text-[#1A2F46] font-['Figtree'] text-[18px] font-medium leading-normal"
                                                        >
                                                            {dest.label}
                                                        </Link>
                                                    ))}
                                                </div>

                                                <img
                                                    src="/images/header/international_trip.jpg"
                                                    alt="International"
                                                    className="mt-4 rounded-lg w-full object-cover h-36"
                                                />
                                            </div>
                                        </div>

                                    </div>
                                </PopoverContent>
                            </Popover>
                        );

                    })}
                </div>

                {/* Icons */}
                <div className="flex items-center gap-2 sm:gap-4">
                    {icons.map((icon) => (
                        <div key={icon} className="cursor-pointer" onClick={() => handleIconClick(icon)}>
                            <img src={`/images/header/${icon}.svg`} alt={icon} className={`w-5 h-5 sm:w-6 sm:h-6 ${icon === "wishlist" ? "hidden sm:block" : ""}`} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile/Tablet Sidebar Menu */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {/* Close Button */}
                <div className="flex justify-end p-4">
                    <button onClick={() => setIsMenuOpen(false)}>
                        <img src="/images/header/close.svg" alt="Close" className="w-6 h-6" />
                    </button>
                </div>

                {/* Links */}
                <ScrollArea className="h-[calc(100%-64px)] px-6 pb-6">
                    <nav className="flex flex-col gap-4 mt-4">
                        {topLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-[#1A2F46] font-['Figtree'] text-[12px] md:text-[12px] font-semibold lg:text-[14px] uppercase hover:text-[#E97737] transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}

                        <Separator orientation="horizontal" className="my-2 bg-[#E7E7E7] border border-[#E7E7E7]" />

                        {/* {navLinks.map((link) => (
                        <a
                            key={link}
                            href="#"
                            className="text-[#333] font-[Figtree] text-[12px] md:text-[12px] lg:text-[14px] uppercase"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link}
                        </a>
                    ))} */}

                        {/**DestionList Accordion */}
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="destinations">
                                {/* Accordion Header */}
                                <AccordionTrigger className="text-[#1A2F46] font-['Figtree'] text-[16px] font-semibold leading-normal hover:text-[#E97737] transition-colors py-1">
                                    All Destinations
                                </AccordionTrigger>

                                {/* Accordion Content — contains all links */}
                                <AccordionContent className="">
                                    <ScrollArea className="h-64 w-full">
                                        <div className="flex flex-col gap-2 p-2">
                                            {allDestinations.map((destination, index) => (
                                                <div key={destination.label}>
                                                    <Link
                                                        href={destination.url}
                                                        className="block px-2 py-2 text-[#1A2F46] font-['Figtree'] text-[15px] font-medium hover:text-[#E97737] transition-colors"
                                                    >
                                                        {destination.label}
                                                    </Link>

                                                    {/* Separator below each link except the last one */}
                                                    {index !== allDestinations.length - 1 && (
                                                        <Separator orientation="horizontal" className="w-full border border-[#E7E7E7]" />
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </ScrollArea>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        {/* <Separator orientation="horizontal" className="w-full border border-[#E7E7E7]" /> */}

                        {/**Who are we accordion */}
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="who-we-are">
                                {/* Accordion Header */}
                                <AccordionTrigger className="text-[#1A2F46] font-['Figtree'] text-[16px] font-semibold leading-normal hover:text-[#E97737] transition-colors py-1">
                                    Who We Are
                                </AccordionTrigger>

                                {/* Accordion Content — contains all links */}
                                <AccordionContent className="">
                                    <ScrollArea className="h-64 w-full">
                                        <div className="flex flex-col gap-2 p-2">
                                            {whoWeAreOptions.map((option, index) => (
                                                <div key={option.label}>
                                                    <Link
                                                        href={option.href}
                                                        className="block px-2 py-2 text-[#1A2F46] font-['Figtree'] text-[15px] font-medium hover:text-[#E97737] transition-colors"
                                                    >
                                                        {option.label}
                                                    </Link>

                                                    {/* Separator below each link except the last one */}
                                                    {index !== whoWeAreOptions.length - 1 && (
                                                        <Separator orientation="horizontal" className="w-full border border-[#E7E7E7] mb-2" />
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </ScrollArea>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        {/* Extra spacing at the bottom */}
                        <div className="h-6" />
                    </nav>
                </ScrollArea>
            </div>

            {/* Overlay */}
            {
                isMenuOpen && (
                    <div
                        className="fixed inset-0 bg-opacity-30 z-40"
                        onClick={() => setIsMenuOpen(false)}
                    />
                )
            }

            {
                showSearch && (
                    <div className="px-6 pb-4 pt-1">
                        <InputGroup
                            className="[&[data-slot=input-group]]:border-0 [&[data-slot=input-group]]:shadow-none [&[data-slot=input-group]]:bg-[#DDF9FF] [&[data-slot=input-group]]:focus-within:ring-0 text-[#000000] placeholder-[#4D4D4D] font-['Figtree'] text-[14px] font-normal leading-normal"
                        >
                            <InputGroupInput
                                placeholder="Search..."
                                className="bg-[#DDF9FF] !border-0 !shadow-none !focus:ring-0 !outline-none text-[#000000] placeholder-[#4D4D4D] font-['Figtree'] text-[14px] font-normal leading-normal"
                            />
                            <InputGroupAddon className="bg-[#DDF9FF]">
                                <Search className="w-4 h-4 text-[#1A2F46]" />
                            </InputGroupAddon>
                        </InputGroup>
                    </div>
                )
            }
        </header >
    );
}
