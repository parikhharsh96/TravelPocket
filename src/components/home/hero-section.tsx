"use client"

import { useState, useEffect } from "react"

import {
  Search,
  Phone,
  Calendar,
  Facebook,
  Twitter,
  Instagram,
  Utensils,
  FileText,
  Plane,
  Building,
  Wind,
  MoreHorizontal,
  ArrowRight,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "../ui/separator"
import Link from "next/link"
import { useRouter } from "next/navigation"
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/filters-accordion";
import { ChevronDown } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import React from "react"
import { ScrollArea } from "../ui/scroll-area"
import Header from "../shared/header"
import { useApi } from '@/lib/use-api';
import { API_ENDPOINTS } from '@/lib/constants';
import { useAuth } from '@/hooks/use-auth';
import { SignupModal } from '../auth/signup-modal';

interface Package {
  packageId: number;
  packageName: string;
}

interface MenuGroup {
  groupId: number;
  groupName: string;
  packages: Package[];
}



const topLinks = [
  { label: "Blogs", href: "/blogs" },
  { label: "JOIN POCKETCLUB", href: "/rewards" },
  { label: "OFFERS", href: "/offers" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact-us" },
];

const navLinks = ["Kailash Mansarovar", "ADI Kailash", "All Destinations", "WHO WE ARE"];

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

const icons = ["magnifiying", "wishlist", "cart", "user"];

export default function HomeHeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [destinations, setDestinations] = useState<any[]>([]);
  const [tripTypes, setTripTypes] = useState<any[]>([]);
  const [tripDurations, setTripDurations] = useState<any[]>([]);
  const [travellers, setTravellers] = useState<any[]>([]);
  const [menuData, setMenuData] = useState<MenuGroup[] | null>(null);
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const router = useRouter();
  const { data, loading, error, execute } = useApi<any>();
  const { data: menuApiData, loading: menuLoading, error: menuError, execute: executeMenu } = useApi<any>();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    execute(API_ENDPOINTS.customerHome.getSearchDropdownValues);
  }, [execute]);

  useEffect(() => {
    const apiUrl = `${API_ENDPOINTS.header.getMenuSubmenus}?userid=0`;
    executeMenu(apiUrl);
  }, [executeMenu]);

  useEffect(() => {
    if (data) {
      console.log('Search Dropdown Values API data:', data);
      if (data.data) {
        setDestinations(data.data.destinations || []);
        setTripTypes(data.data.types || []);
        setTripDurations(data.data.durations || []);
        setTravellers(data.data.noOfTravellers || []);
      }
    }
    if (error) {
      console.error('Search Dropdown Values API error:', error);
    }
  }, [data, error]);

  useEffect(() => {
    if (menuApiData) {
      console.log('Menu Submenus API data:', menuApiData);
      if (menuApiData.success && menuApiData.data) {
        setMenuData(menuApiData.data);
      }
    }
    if (menuError) {
      console.error('Menu Submenus API error:', menuError);
    }
  }, [menuApiData, menuError]);

  const navigateToHome = () => {
    router.push("/");
  };

  const navigateToPackages = () => {
    router.push("/listings");
  };

  const handleIconClick = (icon: string) => {
    const route = iconRoutes[icon]

    if (!route) return // ignore if no route

    router.push(route)
  }

  const getPackagesByGroup = (groupName: string) => {
    return menuData?.find(group => group.groupName === groupName)?.packages || [];
  };

  return (
    <div className="min-h-screen bg-[#ffffff]">
      {/* Top Banner */}
      <div className="bg-[#242A3A] py-2 px-4 text-center">
        <div className="flex flex-col sm:inline-flex sm:flex-row items-center gap-1 lg:gap-2">
          <div className="flex sm:items-center gap-2">
            <img src="/images/microphone.gif" alt="Announcement" className="w-6 h-6" />
            <span className="text-white font-['Figtree'] text-[12px] lg:text-[14px] font-normal leading-normal">Registrations Now Open for <span className="font-semibold">Kailash Mansarovar Yatra 2025 Parikrama!</span> Secure your seat
              today!</span>
          </div>
          <Button
            variant="link"
            size="sm"
            className="mt-0 lg:mt-0 sm:mt-0 bg-transparent px-0 lg:px-1"
          >
            <span className="text-white font-['Figtree'] text-[12px] lg:text-[14px] font-semibold leading-normal underline underline-offset-auto decoration-solid uppercase">REGISTER NOW</span>
          </Button>
        </div>
      </div>

      {/* Background Image Container with Overlay */}
      <div
        className="min-h-screen bg-gradient-to-b from-[#1a2f46] to-[#21315d] bg-cover bg-center bg-no-repeat relative bg-[url('/images/home-section-bg-mob.png')] lg:bg-[url('/images/home-section-bg.png')]"
      >
        {/* Dark overlay for better text contrast */}
        {/* <div className="absolute inset-0 bg-black/30"></div> */}

        {/* Content with relative positioning */}
        <div className="relative z-10">
          {/* Header */}
          <header className="hidden lg:block border-b border-[#]/20 py-3 px-2 sm:px-4">
            <div className="mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 pr-4">
              {/* Social Links & Contact */}

              <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                <div className="flex items-center gap-2 sm:gap-4">
                  <img src="/images/header/facebook_white.svg" alt="Facebook" className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer" />
                  <img src="/images/header/twitter_white.svg" alt="Logo" className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer" />
                  <img src="/images/header/instagram_white.svg" alt="Instagram" className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer" />
                </div>

                <Separator orientation="vertical" className="!h-4 w-px bg-[#BBB] hidden lg:block" />

                <div className="flex items-center gap-1 sm:gap-2 text-[12px] md:text-[12px] lg:text-[14px] uppercase font-normal font-['Figtree'] text-white leading-normal hidden lg:flex">
                  <img src="/images/header/calendar_white.svg" alt="Calendar" className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-[12px] md:text-[12px] lg:text-[14px]"> <span className="hidden sm:inline">2025 CALENDAR</span>
                    <span className="sm:hidden">CALENDAR</span></span>
                </div>

                <Separator orientation="vertical" className="!h-4 w-px bg-[#BBB]" />
                <div className="flex items-center gap-1 sm:gap-2 text-[12px] md:text-[12px] lg:text-[14px] uppercase font-normal font-['Figtree'] text-white underline">
                  <img src="/images/header/call_white.svg" alt="Call" className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>+91 78270-33601</span>
                </div>
              </div>

              {/* Top Navigation - Desktop */}
              <nav className="hidden lg:flex items-center gap-6 text-sm text-[#ffffff]">
                {topLinks.map(link => (
                  // <a key={link} href="#" className={`text-[#333] font-[Figtree] text-[12px] md:text-[12px] lg:text-[14px] uppercase ${link !== "FAQs" ? "hidden lg:block" : ""}`}>{link}</a>
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-white font-['Figtree'] text-[12px] md:text-[12px] lg:text-[14px] font-normal leading-normal uppercase ${link.label !== "FAQs" ? "hidden lg:block" : ""
                      }`}
                  >
                    {link.label}
                  </Link>
                ))}

                <Separator orientation="vertical" className="!h-4 w-px bg-[#BBB] hidden lg:block" />

                <div className="hidden lg:flex items-center gap-1 sm:gap-2 text-[12px] md:text-[12px] lg:text-[14px] uppercase font-['Figtree'] text-[#FFFFFF]">
                  <span>EN</span>
                  <img src="/images/Polygon_white.svg" alt="Dropdown" className="w-2 h-2 sm:w-3 sm:h-3" />
                </div>
              </nav>

              {/* Hamburger Menu Button for Mobile */}
              <button className="lg:hidden text-[#ffffff] p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </header>

          <div className="lg:hidden"><Header bgColor="bg-[#ffffff]" rounded="rounded-none" showSearch={true} /></div>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div className="hidden lg:hidden fixed top-0 left-0 right-0 bottom-0 bg-[#1a2f46]/95 backdrop-blur-sm z-50">
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#ffffff] p-2 hover:bg-[#ffffff]/10 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="px-4 py-6 space-y-4">
                {/* Top Navigation Links */}
                <div className="space-y-3">
                  <nav className="flex flex-col gap-4 px-6 mt-4">
                    {topLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="text-[#FFFFFF] font-['Figtree'] text-[12px] md:text-[12px] font-semibold lg:text-[14px] uppercase hover:text-[#E97737] transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                      >
                        {link.label}
                      </Link>
                    ))}

                    <Separator orientation="horizontal" className="my-2 bg-[#E7E7E7] border border-[#E7E7E7]" />

                    {/**DestionList Accordion */}
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="destinations">
                        {/* Accordion Header */}
                        <AccordionTrigger className="text-[#FFFFFF] font-['Figtree'] text-[16px] font-semibold leading-normal hover:text-[#E97737] transition-colors py-1" iconColor="text-[#FFFFFF]">
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
                                    className="block px-2 py-2 text-[#FFFFFF] font-['Figtree'] text-[15px] font-medium hover:text-[#E97737] transition-colors"
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
                        <AccordionTrigger iconColor="text-[#FFFFFF]" className="text-[#FFFFFF] font-['Figtree'] text-[16px] font-semibold leading-normal hover:text-[#E97737] transition-colors py-1">
                          Who We Are
                        </AccordionTrigger>

                        {/* Accordion Content — contains all links */}
                        <AccordionContent className="">
                          <ScrollArea className="h-64 w-full">
                            <div className="flex flex-col gap-2 p-2">
                              {(getPackagesByGroup("Who We Are").length > 0 ? getPackagesByGroup("Who We Are") : whoWeAreOptions.map(opt => ({ packageName: opt.label, packageId: opt.href }))).map((option, index) => (
                                <div key={option.packageId}>
                                  <Link
                                    href={`/${option.packageName}`}
                                    className="block px-2 py-2 text-[#FFFFFF] font-['Figtree'] text-[15px] font-medium hover:text-[#E97737] transition-colors"
                                  >
                                    {option.packageName}
                                  </Link>

                                  {/* Separator below each link except the last one */}
                                  {index !== (getPackagesByGroup("Who We Are").length > 0 ? getPackagesByGroup("Who We Are") : whoWeAreOptions).length - 1 && (
                                    <Separator orientation="horizontal" className="w-full border border-[#E7E7E7] mb-2" />
                                  )}
                                </div>
                              ))}
                            </div>
                          </ScrollArea>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                  </nav>
                </div>
              </div>
            </div>
          )}

          {/* Main Navigation */}
          <nav className="py-4 px-2 sm:px-4 hidden lg:block">
            <div className="mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 pr-4">
              {/* Logo */}
              <div className="flex items-center">
                <div className="flex-shrink-0 cursor-pointer" onClick={navigateToHome}>
                  <img src="/images/header/logo_home.png" alt="Logo" className="w-[120px] sm:w-[240px] h-auto" />
                </div>
              </div>

              {/* Main Navigation - Desktop Only */}
              <div className="hidden lg:flex items-center gap-8">

                {menuData?.map((item, index) => {
                  if (item.groupName === "Kailash Mansarovar" || item.groupName === "Adi Kailash" || item.groupName === "All Destinations" || item.groupName === "Who We Are") {
                    return (
                      <DropdownMenu
                        key={item.groupId}
                        open={openIndex === index}
                        onOpenChange={(isOpen) => setOpenIndex(isOpen ? index : null)}
                      >
                        <DropdownMenuTrigger
                          asChild
                          onMouseEnter={() => setOpenIndex(index)}
                          onMouseLeave={() => setOpenIndex(null)}
                        >
                          <div className="flex items-center justify-center gap-1 sm:gap-2 text-[12px] md:text-[12px] lg:text-[14px] font-semibold uppercase text-white group hover:text-[#e97737] cursor-pointer">
                            <span>{item.groupName}</span>
                            <ChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180" />
                          </div>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent
                          className="w-56 rounded-[8px] bg-white shadow-[0_6px_9px_0_rgba(0,0,0,0.25)] border-none px-1"
                          align="start"
                          onMouseEnter={() => setOpenIndex(index)}
                          onMouseLeave={() => setOpenIndex(null)}
                        >
                          {item.groupName === "Who We Are" && (
                            <>
                              {(getPackagesByGroup(item.groupName).length > 0 ? getPackagesByGroup(item.groupName) : whoWeAreOptions.map(opt => ({ packageName: opt.label, packageId: opt.href }))).map((option, ind) => (
                                <React.Fragment key={ind}>
                                  <DropdownMenuItem>
                                    <Link
                                      href={ `/${option.packageName}`}
                                      className="block px-3 py-2 text-[#1A2F46] font-['Figtree'] text-[16px] font-medium leading-[24px]"
                                    >
                                      {option.packageName}
                                    </Link>
                                  </DropdownMenuItem>
                                  {ind !== (getPackagesByGroup(item.groupName).length > 0 ? getPackagesByGroup(item.groupName) : whoWeAreOptions).length - 1 && (
                                    <Separator orientation="horizontal" className="w-full border border-[#E7E7E7]" />
                                  )}
                                </React.Fragment>
                              ))}
                            </>
                          )}

                          {(item.groupName === "Kailash Mansarovar" || item.groupName === "Adi Kailash" || item.groupName === "All Destinations") && (
                            <>
                              {getPackagesByGroup(item.groupName).map((option, ind) => (
                                <React.Fragment key={ind}>
                                  <DropdownMenuItem>
                                    <Link
                                      href={`/details/${option.packageId}`}
                                      className="block px-3 py-2 text-[#1A2F46] font-['Figtree'] text-[16px] font-medium leading-[24px]"
                                    >
                                      {option.packageName}
                                    </Link>
                                  </DropdownMenuItem>
                                  {ind !== getPackagesByGroup(item.groupName).length - 1 && (
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
            //       return (
            //         <Popover key={item} open={popoverOpen} onOpenChange={setPopoverOpen}>
            //           <PopoverTrigger asChild>
            //             <div className="flex items-center justify-center gap-1 sm:gap-2 text-[12px] md:text-[12px] lg:text-[14px] font-semibold uppercase text-white group hover:text-[#e97737] cursor-pointer" onMouseEnter={() => setPopoverOpen(true)}
            //               onMouseLeave={() => setPopoverOpen(false)}>
            //               <span>{item}</span>
            //               <ChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180" />
            //             </div>
            //             {/* <Button
            //                             variant="outline"
            //                             onMouseEnter={() => setPopoverOpen(true)}
            //                             onMouseLeave={() => setPopoverOpen(false)}
            //                         >
            //                             Open popover
            //                         </Button> */}
            //           </PopoverTrigger>

            //           <PopoverContent
            //             className="w-full !z-50 rounded-[8px] bg-white shadow-[0_6px_9px_0_rgba(0,0,0,0.25)] border-none"
            //             onMouseEnter={() => setPopoverOpen(true)}
            //             onMouseLeave={() => setPopoverOpen(false)}
            //           >
            //             <div className="w-[800px] px-4 py-4">
            //               <div className="flex justify-between items-center mb-4">
            //                 <div className="text-[24px] font-semibold leading-normal font-['Playfair_Display'] text-[#1A2F46]">Explore All Destinations</div>
            //                 <button className="group rounded-[6px] border border-[#E97737] px-3 py-3 cursor-pointer
            //         bg-[linear-gradient(90deg,_#E97737_0%,_#E97737_50%,_transparent_50%)] 
            //  bg-[length:200%_100%] bg-[position:100%_0] 
            //  transition-[background-position] duration-300 ease-out
            //  hover:bg-[position:0_0]" onClick={navigateToPackages} tabIndex={-1}>
            //                   <div className="flex flex-row gap-[10px] justify-center items-center">
            //                     <div className="text-[#E97737] font-['Figtree'] text-[14px] font-semibold leading-normal uppercase group-hover:text-white">View all</div>
            //                     <div className="">
            //                       {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            //                                                 <circle cx="10" cy="10" r="9.5" stroke="#E97737" />
            //                                                 <path d="M12.8677 10.4H5.33333V9.6H12.8677L9.82973 6.562L10.4 6L14.4 10L10.4 14L9.82973 13.438L12.8677 10.4Z" fill="#E97737" />
            //                                             </svg> */}
            //                       <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 cursor-pointer transition-transform duration-300 ease-in-out text-[#E97737] group-hover:-rotate-45 group-hover:bg-white group-hover:rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
            //                         <circle className="group-hover:[stroke-width:0]" cx="10" cy="10" r="9.5" stroke="currentColor" strokeWidth="1" fill="none" />
            //                         <path d="M12.8677 10.4H5.33331V9.6H12.8677L9.82971 6.562L10.4 6L14.4 10L10.4 14L9.82971 13.438L12.8677 10.4Z" fill="currentColor" />
            //                       </svg>
            //                     </div>
            //                   </div>
            //                 </button>
            //               </div>

            //               <Separator orientation="horizontal" className="w-full border border-[#E7E7E7] mb-4" />

            //               <div className="grid grid-cols-[1fr_auto_1fr] gap-x-[40px]">
            //                 {/* Domestic Destinations */}
            //                 <div className="flex flex-col gap-[30px]">
            //                   <div className="text-[#E97737] font-['Playfair_Display'] text-[18px] font-semibold leading-normal mb-3">Domestic Destinations</div>
            //                   <div className="grid grid-cols-2 gap-x-[40px] gap-y-[30px]">
            //                     {domesticDestinations.map((dest, index) => (
            //                       // <div className="text-[#1A2F46] font-['Figtree'] text-[18px] font-medium leading-normal">Adi Kailash & Om Parvat</div>
            //                       <Link
            //                         key={index}
            //                         href={dest.url || "/"} // Replace with actual href
            //                         className="text-[#1A2F46] font-['Figtree'] text-[18px] font-medium leading-normal"
            //                       >
            //                         {dest.label}
            //                       </Link>
            //                     ))}
            //                   </div>

            //                   <img
            //                     src="/images/header/domestic_img.jpg"
            //                     alt="Domestic"
            //                     className="mt-4 rounded-lg w-full object-cover h-36"
            //                   />
            //                 </div>

            //                 {/* Vertical Separator */}
            //                 <Separator orientation="vertical" className="h-full w-[1px] bg-[#E7E7E7]" />

            //                 {/* International Destinations */}
            //                 <div className="flex flex-col gap-[30px]">
            //                   <div className="text-[#E97737] font-['Playfair_Display'] text-[18px] font-semibold leading-normal mb-3">International Destinations</div>

            //                   <div className="grid grid-cols-1 gap-y-[40px]">
            //                     {internationalDestinations.map((dest, index) => (
            //                       // <div className="text-[#1A2F46] font-['Figtree'] text-[18px] font-medium leading-normal">Adi Kailash & Om Parvat</div>
            //                       <Link
            //                         key={index}
            //                         href={dest.url || "/"} // Replace with actual href
            //                         className="text-[#1A2F46] font-['Figtree'] text-[18px] font-medium leading-normal"
            //                       >
            //                         {dest.label}
            //                       </Link>
            //                     ))}
            //                   </div>

            //                   <img
            //                     src="/images/header/international_trip.jpg"
            //                     alt="International"
            //                     className="mt-4 rounded-lg w-full object-cover h-36"
            //                   />
            //                 </div>
            //               </div>

            //             </div>
            //           </PopoverContent>
            //         </Popover>
            //       );

                })}
              </div>


              {/* Right Actions */}
              <div className="flex items-center gap-2 sm:gap-4">
                {icons.filter(icon => icon !== "user").map((icon) => (
                  <div key={icon} className="cursor-pointer" onClick={() => handleIconClick(icon)}>
                    <img src={`/images/header/${icon}_white.svg`} alt={icon} className={`w-5 h-5 sm:w-6 sm:h-6 ${icon === "wishlist" ? "hidden sm:block" : ""}`} />
                  </div>
                ))}
                {isAuthenticated ? (
                  <div className="cursor-pointer" onClick={() => handleIconClick("user")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none" className="w-5 h-5 sm:w-6 sm:h-6">
                      <g clipPath="url(#clip0_3292_1201)">
                        <path d="M9 0.873047C11.5103 0.873047 13.5527 2.88877 13.5527 5.37109C13.5526 7.85328 11.5102 9.86914 9 9.86914C6.48979 9.86914 4.44742 7.85328 4.44727 5.37109C4.44727 2.88877 6.4897 0.873048 9 0.873047ZM9 2.46191C7.37593 2.46191 6.05273 3.77008 6.05273 5.37109C6.05289 6.97197 7.37603 8.28027 9 8.28027C10.624 8.28027 11.9471 6.97197 11.9473 5.37109C11.9473 3.77008 10.6241 2.46191 9 2.46191Z" fill="white" stroke="white" strokeWidth="0.2" />
                        <path d="M11.8125 11.0576C14.8384 11.0576 17.3027 13.4899 17.3027 16.4814C17.3027 17.9452 16.104 19.1279 14.625 19.1279H3.375C1.896 19.1279 0.697345 17.9452 0.697266 16.4814C0.697266 13.4899 3.16157 11.0576 6.1875 11.0576H11.8125ZM6.1875 12.6465C4.0478 12.6465 2.30273 14.3712 2.30273 16.4814C2.30281 17.0639 2.78223 17.5391 3.375 17.5391H14.625C15.2178 17.5391 15.6972 17.0639 15.6973 16.4814C15.6973 14.3712 13.9522 12.6465 11.8125 12.6465H6.1875Z" fill="white" stroke="white" strokeWidth="0.2" />
                      </g>
                      <defs>
                        <clipPath id="clip0_3292_1201">
                          <rect width="18" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                ) : (
                  <SignupModal open={signupModalOpen} onOpenChange={setSignupModalOpen}>
                    <Button className="bg-[#e97737] hover:bg-[#c75414] px-2 sm:px-4 cursor-pointer">
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                          <g clipPath="url(#clip0_3292_1201)">
                            <path d="M9 0.873047C11.5103 0.873047 13.5527 2.88877 13.5527 5.37109C13.5526 7.85328 11.5102 9.86914 9 9.86914C6.48979 9.86914 4.44742 7.85328 4.44727 5.37109C4.44727 2.88877 6.4897 0.873048 9 0.873047ZM9 2.46191C7.37593 2.46191 6.05273 3.77008 6.05273 5.37109C6.05289 6.97197 7.37603 8.28027 9 8.28027C10.624 8.28027 11.9471 6.97197 11.9473 5.37109C11.9473 3.77008 10.6241 2.46191 9 2.46191Z" fill="white" stroke="white" strokeWidth="0.2" />
                            <path d="M11.8125 11.0576C14.8384 11.0576 17.3027 13.4899 17.3027 16.4814C17.3027 17.9452 16.104 19.1279 14.625 19.1279H3.375C1.896 19.1279 0.697345 17.9452 0.697266 16.4814C0.697266 13.4899 3.16157 11.0576 6.1875 11.0576H11.8125ZM6.1875 12.6465C4.0478 12.6465 2.30273 14.3712 2.30273 16.4814C2.30281 17.0639 2.78223 17.5391 3.375 17.5391H14.625C15.2178 17.5391 15.6972 17.0639 15.6973 16.4814C15.6973 14.3712 13.9522 12.6465 11.8125 12.6465H6.1875Z" fill="white" stroke="white" strokeWidth="0.2" />
                          </g>
                          <defs>
                            <clipPath id="clip0_3292_1201">
                              <rect width="18" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <div className="text-white font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-[24px] uppercase">
                          <span className="hidden sm:inline">LOGIN / REGISTER</span>
                          <span className="sm:hidden">LOGIN</span>
                        </div>
                      </div>
                    </Button>
                  </SignupModal>
                )}
              </div>
            </div>
          </nav>

          {/* Hero Section */}
          <main className="mx-auto py-8 sm:py-16 px-2 sm:px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 text-center lg:text-left">
                <div className="mb-8 rounded-lg"> {/**p-2 sm:p-4 */}
                  <h1 className="text-white font-['Playfair_Display'] text-[36px] md:text-[48px] lg:text-[64px] xl:text-[86px] font-bold leading-[42px] md:leading-[56px] lg:leading-[72px] xl:leading-[90px] mb-4">
                    Kailash
                    <br />
                    Mansarovar
                  </h1>
                  <div className="text-white font-['Figtree'] text-[22px] lg:text-[36px] font-semibold leading-normal mb-6">
                    Yatra with{" "}
                    <span className="relative text-[#ffffff] px-2 sm:px-3 py-1 rounded overflow-hidden">
                      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286 56" fill="none" preserveAspectRatio="none">
                        <path d="M251.995 22.8232C251.987 24.1267 254.269 23.5619 254.401 24.2685C254.955 25.2859 253.533 25.4845 253.944 26.4489C264.371 27.2529 274.995 28.0163 285.389 30.0721C283.508 30.7257 281.529 31.5138 279.654 31.0402C276.523 30.2497 273.277 30.1461 270.114 29.9488C263.463 29.5332 256.934 28.2395 250.208 28.4233C249.709 28.4369 249.21 28.4245 247.785 28.4245C249.853 28.9955 251.537 28.8278 252.253 30.4014C246.61 30.7923 241.262 29.691 235.643 29.4025C235.473 29.9118 235.291 30.4581 235.091 31.0587C251.752 31.6839 268.327 32.5053 285.422 35.2541C282.132 36.6798 279.435 36.1865 276.917 35.9854C271.637 35.5624 266.401 34.8435 261.139 34.291C260.395 34.2133 259.274 34.164 258.892 34.4809C257.168 35.9151 255.528 35.0457 253.437 34.825C254.563 33.9593 255.381 35.2652 256.446 34.1393C252.15 33.2107 248.054 34.6425 244.006 34.1331C239.928 33.6201 235.734 33.6226 231.051 33.3698C232.607 34.7867 234.649 34.5783 235.884 34.5882C239.789 34.6215 243.614 35.2726 247.515 35.1875C251.592 35.0988 255.604 35.6278 259.632 36.0188C262.206 36.2679 264.796 35.9558 267.359 35.6611C268.213 35.5637 267.736 35.962 267.865 36.2272C268.272 37.0658 269.561 36.993 270.653 36.9757C274.638 36.9091 278.488 37.5258 282.31 38.2854C282.869 38.3964 283.549 38.3039 283.587 38.9612C283.623 39.6112 282.935 39.5236 282.418 39.7135C279.443 40.8062 276.576 39.5446 273.659 39.5125C272.028 39.494 270.33 38.1979 268.935 39.9503C268.68 40.2697 267.893 40.0132 267.29 39.8899C263.795 39.1795 260.125 39.3978 256.564 38.5296C254.79 38.0967 252.216 38.6505 249.991 38.9736C246.906 39.4225 243.761 38.3471 240.573 38.1522C237.879 37.9882 235.03 37.6972 232.348 37.5603C226.796 37.2791 221.225 36.4763 214.985 37.1656C218.819 38.1831 222.347 38.2447 225.703 38.246C233.329 38.2509 240.689 40.3018 248.356 39.6815C254.018 42.561 260.79 41.0676 266.915 42.27C270.729 43.0186 274.816 42.9865 278.776 43.3318C279.098 43.3602 279.388 43.5982 279.623 44.1137C263.998 42.1824 248.184 42.8287 232.105 41.4437C235.921 43.3306 240.549 41.1897 244.08 43.9238C237.785 45.6712 231.73 43.0901 225.695 43.851C227.913 45.1151 231.289 44.8302 232.914 46.796C233.251 47.2029 233.012 47.7801 232.008 47.9478C233.844 48.8234 234.71 46.0733 236.48 47.6198C236.573 47.1166 236.652 46.6776 236.73 46.2546C237.372 45.9487 238.274 46.9846 237.952 47.5951C237.888 47.7172 237.962 47.8812 237.975 48.0243C252.576 48.3831 267.052 49.5633 281.886 51.2331C280.616 52.2 279.674 52.348 278.632 52.2678C273.124 51.8399 267.615 51.423 262.108 50.9852C259.644 50.7892 257.128 50.6424 254.7 50.582C248.825 50.4364 243.01 49.9567 237.164 49.6534C230.181 49.2908 223.138 49.5572 216.12 49.5769C215.096 49.5794 213.855 49.2563 213.147 50.4796C224.785 50.7485 236.322 51.005 247.821 51.5069C259.416 52.0125 271.133 52.6365 282.385 55.2843C278.964 56.1882 275.474 56.1093 272.189 55.7381C268.091 55.2756 263.947 54.7429 259.87 54.622C250.905 54.3557 241.967 53.7736 232.999 53.5195C219.157 53.1274 205.326 53.2618 191.491 53.1767C183.041 53.1249 174.581 52.9831 166.141 53.2075C152.206 53.5787 138.26 53.3715 124.336 53.702C114.076 53.945 103.811 53.7945 93.5668 54.1226C84.8062 54.4025 76.0323 54.6319 67.2915 55.0598C57.0377 55.5618 46.8037 55.2041 36.5681 55.4249C33.5802 55.489 30.5972 55.6062 27.4342 55.2411C28.1725 54.1583 29.2973 54.0387 30.4882 54.0708C37.0091 54.2471 43.4607 53.7415 49.9453 53.2865C52.9332 53.0768 56.0979 52.8832 59.2576 53.4677C61.1604 53.8204 63.4034 53.1977 65.5093 53.0731C71.249 52.734 76.987 52.4738 82.7332 52.2185C91.9927 51.8078 101.262 51.1468 110.518 51.4613C116.504 51.6648 122.437 50.8853 128.39 51.3737C130.208 51.5229 131.81 50.9001 133.518 50.4685C128.941 50.4685 124.364 50.4685 119.789 50.4685C112.342 50.4685 104.891 50.3612 97.4466 50.5018C91.185 50.619 84.9234 50.7719 78.6651 51.1986C76.6418 51.3367 74.445 51.2529 72.3077 51.3244C64.439 51.5846 56.5554 51.8337 48.685 51.7511C44.4996 51.7079 40.3687 51.6573 36.256 52.2592C34.4853 52.5181 33.0549 51.0802 31.1902 51.7141C31.3438 52.105 31.5023 52.5033 31.722 53.062C30.2784 53.062 28.5904 53.4542 27.8372 52.9942C24.5388 50.9778 20.4855 51.6265 16.8319 50.9618C15.494 50.7189 13.8737 50.9002 13.4938 49.6373C13.1321 48.4349 14.9671 48.3202 15.6063 47.2547C12.3162 45.9993 11.9528 42.7275 8.99625 40.7494C7.82024 40.8851 8.27608 43.2627 5.75227 41.9235C6.03472 44.1235 9.2258 45.4332 7.92261 47.6814C6.14702 47.991 5.33606 46.9378 4.70015 46.1177C1.95502 42.5845 -0.0848261 38.6036 0.00271418 34.6795C0.139806 28.5355 0.0720999 22.2571 2.75282 16.2772C2.93781 15.8628 3.05173 15.4028 3.37382 15.0551C4.09726 14.2719 4.28888 12.924 6.13879 13.1657C7.84004 13.3877 8.10926 14.5223 8.17368 15.5557C8.24966 16.7877 9.37611 17.1861 10.7355 17.8027C11.4044 16.5744 11.1269 15.1488 12.7373 14.4273C12.8695 14.3681 13.0033 14.0956 12.9504 14.0524C10.4993 12.0941 13.92 12.0743 14.7177 11.089C12.3195 9.42165 11.5943 7.24501 11.7876 4.76251C10.5273 4.5282 9.36127 4.39253 8.25463 4.79827C6.87215 5.30513 6.59633 4.33704 5.89931 3.91651C6.40308 3.46885 6.46748 2.88183 7.64184 2.72891C13.5649 1.95938 19.4416 1.15901 25.4951 0.923458C41.0806 0.316708 56.6661 0.134204 72.2664 0.00841413C81.5969 -0.066813 90.8514 0.370978 100.114 0.977728C102.934 1.16271 105.632 0.156399 108.427 0.544867C114.593 1.40196 120.805 0.837138 126.992 0.964161C132.641 1.08008 138.252 0.421546 143.959 0.917305C153.481 1.74357 163.1 1.18615 172.657 1.49939C180.01 1.73987 187.392 1.90264 194.714 2.40333C203.991 3.03845 213.274 3.6082 222.558 4.17919C231.24 4.71318 240.033 4.64288 248.568 6.00807C254.104 6.89476 259.768 7.04398 265.286 8.16005C268.461 8.80133 271.685 9.60171 274.972 9.90508C276.604 10.0555 275.656 10.8127 276.126 11.2826C273.021 10.5242 269.812 10.6043 266.745 9.99511C263.374 9.3267 260.037 9.12445 256.697 10.386C254.405 11.2518 251.79 10.608 249.481 10.3293C241.5 9.36739 233.463 8.85561 225.45 8.14404C215.989 7.30298 206.485 6.92437 197.016 6.27199C189.225 5.7343 181.429 5.83542 173.674 5.39146C164.759 4.8809 155.848 5.41243 146.973 4.9512C142.168 4.70209 137.377 4.69346 132.58 4.5874C129.272 4.5134 125.996 5.73307 122.584 4.83404C123.048 5.04246 123.514 5.43338 123.978 5.43338C132.235 5.42475 140.284 7.10442 148.602 6.92313C153.714 6.81214 158.906 7.09702 164.03 7.68404C166.516 7.96892 168.97 7.33749 171.63 7.60017C177.576 8.18966 183.664 8.00715 189.655 8.28956C199.317 8.74585 209.018 8.68666 218.629 9.24161C229.077 9.84466 239.495 11.1173 249.792 12.9364C254.618 13.7885 259.75 14.2818 264.819 14.489C265.255 14.5063 265.683 14.6185 266.054 14.896C262.386 14.9601 258.772 14.9058 255.231 14.4113C254.775 15.4324 256.307 15.1956 256.492 16.1378C248.824 17.6177 241.133 14.8577 233.578 16.0194C235.222 17.2588 237.543 16.8839 239.422 16.9074C245.061 16.9789 250.47 18.0456 255.967 18.6635C258.179 18.9126 260.534 18.6327 262.65 19.417C263.887 19.8758 266.218 18.4205 266.465 20.6317C269.569 20.0003 272.091 21.987 275.145 21.6886C278.262 21.3852 281.204 22.2436 284.208 22.6382C284.869 22.7245 285.857 22.8676 285.984 23.6026C286.136 24.4769 285.197 24.6903 284.365 24.9678C281.668 25.8668 279.147 24.5904 276.513 24.5879C275.794 24.5867 274.968 24.3622 274.179 24.382C266.692 24.5645 259.393 23.2573 251.975 22.8417C247.253 22.431 242.537 22.0166 237.822 21.6035C237.797 21.7971 237.772 21.9907 237.749 22.1856C242.47 22.5827 247.139 23.4423 251.995 22.8232ZM231.459 24.361C235.508 26.1554 239.693 25.5042 243.73 25.6497C239.781 25.027 235.823 24.4473 231.459 24.361Z" fill="url(#paint0_linear_142_21473)" fillOpacity="0.7"/>
                        <defs>
                          <linearGradient id="paint0_linear_142_21473" x1="0" y1="28" x2="286" y2="28" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#DF7B07"/>
                            <stop offset="1" stopColor="#EFAF81"/>
                          </linearGradient>
                        </defs>
                      </svg>
                      <span className="relative z-10">Charan Sparsh</span>
                    </span>
                  </div>
                  <p className="text-white font-['Figtree'] text-[14px] lg:text-[20px] font-semibold leading-normal mb-8">Touch the Divine. Awaken your Soul.</p>
                  <Button className="group rounded-[6px] border border-white bg-transparent px-6 sm:px-8 py-4 cursor-pointer hover:border-none
                    bg-[linear-gradient(90deg,_#ffffff_0%,_#ffffff_50%,_transparent_50%)] 
             bg-[length:200%_100%] bg-[position:100%_0] 
             transition-[background-position] duration-300 ease-out
             hover:bg-[position:0_0]">
                    <span className="text-white font-['Figtree'] text-[13px] lg:text-[16px] font-semibold leading-normal uppercase group-hover:text-[#1A2F46]">Book Now</span>
                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 cursor-pointer transition-transform duration-300 ease-in-out text-white group-hover:text-white group-hover:-rotate-45 group-hover:bg-[#E97737] group-hover:rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="none">
                      <circle className="group-hover:[stroke-width:0]" cx="15" cy="15" r="14.5" stroke="currentColor" strokeWidth="1" fill="none" />
                      <path d="M19.634 15.6H8V14.4H19.634L14.943 9.843L15.8235 9L22 15L15.8235 21L14.943 20.157L19.634 15.6Z" fill="currentColor" />
                    </svg>
                  </Button>
                </div>
              </div>

              {/* Inclusions Sidebar */}
              <div className="rounded-lg bg-black/40 lg:bg-black/20 backdrop-blur-sm p-4 sm:p-4 h-fit max-w-sm mx-auto mx-auto lg:ml-auto lg:mr-0
">
                <h3 className="text-white text-center font-['Figtree'] text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-medium leading-normal mb-4 sm:mb-6">Inclusions</h3>

                <div className="grid grid-cols-3 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="text-center flex flex-col gap-2 items-center">
                    <div className="w-10 sm:w-11 md:w-12 lg:w-14 h-10 sm:h-11 md:h-12 lg:h-14 flex items-center justify-center">
                      {/* <Utensils className="w-5 sm:w-6 h-5 sm:h-6 text-[#ffffff]" /> */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 sm:w-9 md:w-10 lg:w-12 h-8 sm:h-9 md:h-10 lg:h-12" viewBox="0 0 40 40" fill="none">
                        <g clipPath="url(#clip0_3292_18060)">
                          <mask id="mask0_3292_18060" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
                            <path d="M0 3.8147e-06H40V40H0V3.8147e-06Z" fill="white" />
                          </mask>
                          <g mask="url(#mask0_3292_18060)">
                            <path d="M9.0625 36.0938H30.9375V31.4062H9.0625V36.0938Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                          </g>
                          <path d="M28.9062 21.25V9.375" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M33.5938 13.2813L28.9062 16.4062" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M28.9062 16.4062L24.2188 13.2813" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                          <mask id="mask1_3292_18060" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
                            <path d="M0 3.8147e-06H40V40H0V3.8147e-06Z" fill="white" />
                          </mask>
                          <g mask="url(#mask1_3292_18060)">
                            <path d="M10.8828 15.1523H1.82916" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M36.3206 21.25C36.5752 20.7313 36.7188 20.1481 36.7188 19.5312C36.7188 18.6973 36.4527 17.9284 36.0076 17.2939C37.3683 16.4735 38.2812 14.9859 38.2812 13.2812C38.2812 10.6924 36.1825 8.59375 33.5938 8.59375C33.5938 6.00492 31.495 3.90625 28.9063 3.90625C26.3174 3.90625 24.2188 6.00492 24.2188 8.59375C21.6299 8.59375 19.5312 10.6924 19.5312 13.2812C19.5312 13.4383 19.5391 13.5934 19.5542 13.7464" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M23.1962 21.25C23.3522 20.7037 23.4375 20.1277 23.4375 19.5312C23.4375 16.0795 20.6392 13.2812 17.1875 13.2812C14.9686 13.2812 13.0213 14.4385 11.9122 16.1813" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4.19128 21.25C0.94839 17.697 1.04472 12.1862 4.48089 8.75L16.9809 21.25" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4.78467 21.25L10.8828 15.1519" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10.8828 21.25V15.1519" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M38.8281 21.25H1.17188L2.25789 25.956C2.99414 29.1463 5.78836 31.4062 9.0625 31.4062H30.9375C34.2116 31.4062 37.0059 29.1463 37.7421 25.956L38.8281 21.25Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                          </g>
                        </g>
                        <defs>
                          <clipPath id="clip0_3292_18060">
                            <rect width="40" height="40" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <p className="text-white text-center font-['Figtree'] text-[12px] md:text-[13px] lg:text-[14px] font-medium leading-normal">
                      Vegetarian
                      <br />
                      Meals
                    </p>
                  </div>

                  <div className="text-center flex flex-col gap-2 items-center">
                    <div className="w-10 sm:w-11 md:w-12 lg:w-14 h-10 sm:h-11 md:h-12 lg:h-14 flex items-center justify-center">
                      {/* <FileText className="w-5 sm:w-6 h-5 sm:h-6 text-[#ffffff]" /> */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 sm:w-9 md:w-10 lg:w-12 h-8 sm:h-9 md:h-10 lg:h-12" viewBox="0 0 50 52" fill="none">
                        <mask id="mask0_3292_7110" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="6" width="47" height="46">
                          <rect x="0.863525" y="6" width="46" height="46" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_3292_7110)">
                          <path d="M27.9915 29.8842H35.8058V27.9675H27.9915V29.8842ZM27.9915 24.5765H35.8058V22.6598H27.9915V24.5765ZM11.9213 35.3395H24.6005V35.0223C24.6005 33.9043 24.0391 33.0387 22.9162 32.4257C21.7934 31.8127 20.2417 31.5062 18.2611 31.5062C16.2806 31.5062 14.7287 31.8127 13.6055 32.4257C12.4827 33.0387 11.9213 33.9043 11.9213 35.0223V35.3395ZM18.2611 28.4098C19.0693 28.4098 19.7505 28.1329 20.3048 27.5789C20.859 27.0247 21.1361 26.3433 21.1361 25.5348C21.1361 24.7263 20.859 24.0451 20.3048 23.4912C19.7505 22.9369 19.0693 22.6598 18.2611 22.6598C17.4526 22.6598 16.7712 22.9369 16.217 23.4912C15.6631 24.0451 15.3861 24.7263 15.3861 25.5348C15.3861 26.3433 15.6631 27.0247 16.217 27.5789C16.7712 28.1329 17.4526 28.4098 18.2611 28.4098ZM9.7099 42.4163C8.82759 42.4163 8.09096 42.1209 7.49998 41.5299C6.90901 40.9389 6.61353 40.2023 6.61353 39.32V18.6794C6.61353 17.7971 6.90901 17.0604 7.49998 16.4695C8.09096 15.8785 8.82759 15.583 9.7099 15.583H38.0172C38.8995 15.583 39.6361 15.8785 40.2271 16.4695C40.818 17.0604 41.1135 17.7971 41.1135 18.6794V39.32C41.1135 40.2023 40.818 40.9389 40.2271 41.5299C39.6361 42.1209 38.8995 42.4163 38.0172 42.4163H9.7099ZM9.7099 40.4997H38.0172C38.3123 40.4997 38.5827 40.3768 38.8284 40.1312C39.074 39.8855 39.1969 39.6151 39.1969 39.32V18.6794C39.1969 18.3842 39.074 18.1138 38.8284 17.8682C38.5827 17.6225 38.3123 17.4997 38.0172 17.4997H9.7099C9.41473 17.4997 9.14432 17.6225 8.89867 17.8682C8.65302 18.1138 8.53019 18.3842 8.53019 18.6794V39.32C8.53019 39.6151 8.65302 39.8855 8.89867 40.1312C9.14432 40.3768 9.41473 40.4997 9.7099 40.4997Z" fill="white" />
                        </g>
                      </svg>
                    </div>
                    <p className="text-white text-center font-['Figtree'] text-[12px] md:text-[13px] lg:text-[14px] font-medium leading-normal">Tibet & Kailash Permits</p>
                  </div>

                  <div className="text-center flex flex-col gap-2 items-center">
                    <div className="w-10 sm:w-11 md:w-12 lg:w-14 h-10 sm:h-11 md:h-12 lg:h-14 flex items-center justify-center">
                      {/* <Plane className="w-5 sm:w-6 h-5 sm:h-6 text-[#ffffff]" /> */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 sm:w-9 md:w-10 lg:w-12 h-8 sm:h-9 md:h-10 lg:h-12" viewBox="0 0 50 52" fill="none">
                        <mask id="mask0_3292_7043" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="6" width="47" height="46">
                          <rect x="0.863525" y="6" width="46" height="46" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_3292_7043)">
                          <path d="M8.53016 44.3339V42.4173H39.1968V44.3339H8.53016ZM11.0736 34.8982L5.1391 24.9828L7.93312 24.253L13.0415 28.6101L20.9665 26.542L11.5269 13.87L15.0947 12.9375L28.7213 24.4854L36.904 22.3181C37.6314 22.129 38.3275 22.2303 38.9922 22.6219C39.657 23.0139 40.0839 23.5736 40.273 24.3009C40.4622 25.0283 40.3853 25.7244 40.0426 26.3891C39.6998 27.0539 39.1647 27.4808 38.4374 27.67L11.0736 34.8982Z" fill="white" />
                        </g>
                      </svg>
                    </div>
                    <p className="text-white text-center font-['Figtree'] text-[12px] md:text-[13px] lg:text-[14px] font-medium leading-normal">Modes of Transportation</p>
                  </div>

                  <div className="text-center hidden lg:flex flex-col gap-2 items-center">
                    <div className="w-10 sm:w-11 md:w-12 lg:w-14 h-10 sm:h-11 md:h-12 lg:h-14 flex items-center justify-center mx-auto">
                      {/* <Building className="w-5 sm:w-6 h-5 sm:h-6 text-[#ffffff]" /> */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 sm:w-9 md:w-10 lg:w-12 h-8 sm:h-9 md:h-10 lg:h-12" viewBox="0 0 50 52" fill="none">
                        <mask id="mask0_3292_13021" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="6" width="47" height="46">
                          <rect x="0.859985" y="6" width="46" height="46" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_3292_13021)">
                          <path d="M4.6933 40.4997V15.583H6.60996V32.833H22.9016V19.4163H37.2766C38.8579 19.4163 40.2115 19.9794 41.3376 21.1054C42.4636 22.2314 43.0266 23.5851 43.0266 25.1663V40.4997H41.11V34.7497H6.60996V40.4997H4.6933ZM14.2723 29.221C13.145 29.221 12.1881 28.8264 11.4016 28.037C10.6152 27.2477 10.2219 26.2893 10.2219 25.162C10.2219 24.0347 10.6166 23.0778 11.4059 22.2913C12.1953 21.5049 13.1536 21.1116 14.2809 21.1116C15.4083 21.1116 16.3652 21.5063 17.1516 22.2957C17.9381 23.085 18.3313 24.0433 18.3313 25.1707C18.3313 26.298 17.9367 27.2549 17.1473 28.0413C16.358 28.8278 15.3996 29.221 14.2723 29.221ZM24.8183 32.833H41.11V25.1663C41.11 24.1122 40.7346 23.2097 39.9839 22.459C39.2332 21.7084 38.3308 21.333 37.2766 21.333H24.8183V32.833ZM14.2766 27.3044C14.8689 27.3044 15.3733 27.0961 15.7898 26.6796C16.2064 26.263 16.4147 25.7586 16.4147 25.1663C16.4147 24.5741 16.2064 24.0697 15.7898 23.6531C15.3733 23.2366 14.8689 23.0283 14.2766 23.0283C13.6844 23.0283 13.18 23.2366 12.7634 23.6531C12.3469 24.0697 12.1386 24.5741 12.1386 25.1663C12.1386 25.7586 12.3469 26.263 12.7634 26.6796C13.18 27.0961 13.6844 27.3044 14.2766 27.3044Z" fill="white" />
                        </g>
                      </svg>
                    </div>
                    <p className="text-white text-center font-['Figtree'] text-[12px] md:text-[13px] lg:text-[14px] font-medium leading-normal">
                      Hotel
                      <br />
                      Stays
                    </p>
                  </div>

                  <div className="text-center hidden lg:flex flex-col gap-2 items-center">
                    <div className="w-10 sm:w-11 md:w-12 lg:w-14 h-10 sm:h-11 md:h-12 lg:h-14 flex items-center justify-center">
                      {/* <Wind className="w-5 sm:w-6 h-5 sm:h-6 text-[#ffffff]" /> */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 sm:w-9 md:w-10 lg:w-12 h-8 sm:h-9 md:h-10 lg:h-12" viewBox="0 0 36 36" fill="none">
                        <path d="M14.8502 34.9453H2.36517V15.0315C2.36517 11.5839 5.16002 8.78906 8.60766 8.78906C12.0553 8.78906 14.8501 11.5839 14.8501 15.0315V34.9453H14.8502Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                        <path d="M14.8502 30.7266H2.36517" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                        <path d="M8.60767 8.78906C9.77264 8.78906 10.717 7.84466 10.717 6.67969C10.717 5.51471 9.77264 4.57031 8.60767 4.57031C7.44269 4.57031 6.49829 5.51471 6.49829 6.67969C6.49829 7.84466 7.44269 8.78906 8.60767 8.78906Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                        <path d="M2.36517 15.0312H14.8502" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                        <path d="M8.60767 4.57031V1.05469" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                        <path d="M5.84027 1.05469H11.3751" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                        <path d="M29.7007 12.5156H28.8187C26.4562 12.5156 24.6267 10.4479 24.9144 8.10295L25.3554 4.50928C25.5974 2.5368 27.2725 1.05469 29.2597 1.05469C31.247 1.05469 32.922 2.5368 33.164 4.50921L33.605 8.10288C33.8928 10.4479 32.0632 12.5156 29.7007 12.5156Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                        <path d="M29.2597 12.5156V29.85C29.2597 32.6641 26.9784 34.9453 24.1644 34.9453C21.3503 34.9453 19.069 32.664 19.069 29.85V10.8984C19.069 8.56849 17.1802 6.67969 14.8503 6.67969H10.717" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                        <path d="M29.2597 4.67969V8.88916" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                      </svg>
                    </div>
                    <p className="text-white text-center font-['Figtree'] text-[12px] md:text-[13px] lg:text-[14px] font-medium leading-normal">
                      Oxygen
                      <br />
                      cylinders
                    </p>
                  </div>

                  <div className="text-center hidden lg:flex flex-col gap-2 items-center">
                    <div className="w-10 sm:w-11 md:w-12 lg:w-14 h-10 sm:h-11 md:h-12 lg:h-14 flex items-center justify-center">
                      {/* <MoreHorizontal className="w-5 sm:w-6 h-5 sm:h-6 text-[#ffffff]" /> */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 sm:w-9 md:w-10 lg:w-12 h-8 sm:h-9 md:h-10 lg:h-12" viewBox="0 0 50 50" fill="none">
                        <mask id="mask0_3292_7423" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="50">
                          <rect width="50" height="50" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_3292_7423)">
                          <path d="M34.7598 27.3257L26.7519 19.3174L34.7598 11.3096L42.7681 19.3174L34.7598 27.3257ZM12.6152 24.7757V13.4078H23.983V24.7757H12.6152ZM29.2291 41.3896V30.0217H40.5969V41.3896H29.2291ZM12.6152 41.3896V30.0217H23.983V41.3896H12.6152ZM14.5102 22.8811H22.0885V15.3028H14.5102V22.8811ZM34.8072 24.7169L40.1593 19.3648L34.8072 14.0126L29.455 19.3648L34.8072 24.7169ZM31.1236 39.4945H38.7019V31.9163H31.1236V39.4945ZM14.5102 39.4945H22.0885V31.9163H14.5102V39.4945Z" fill="#FEFEFE" />
                        </g>
                      </svg>
                    </div>
                    <p className="text-white text-center font-['Figtree'] text-[12px] md:text-[13px] lg:text-[14px] font-medium leading-normal">+10 More</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="w-full bg-[#d9d9d9] rounded-full h-1 relative">
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#ffffff] rounded-full"></div>
                  </div>
                </div>

                <Button
                  variant="link"
                  className="group w-full bg-transparent flex items-center justify-center gap-2 hover:no-underline"
                >
                  <span className="text-white text-center font-['Figtree'] text-[14px] font-medium leading-normal uppercase group-hover:text-[#e97737] group-hover:scale-102">VIEW DETAILS</span>
                  <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 cursor-pointer transition-transform duration-300 ease-in-out text-white group-hover:text-white group-hover:-rotate-45 group-hover:bg-[#E97737] group-hover:rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="none">
                    <circle className="group-hover:[stroke-width:0]" cx="15" cy="15" r="14.5" stroke="currentColor" strokeWidth="1" fill="none" />
                    <path d="M19.634 15.6H8V14.4H19.634L14.943 9.843L15.8235 9L22 15L15.8235 21L14.943 20.157L19.634 15.6Z" fill="currentColor" />
                  </svg>
                </Button>
              </div>
            </div>

            {/* Search Section */}
            <div className="py-4 hidden lg:block">{/**mt-12 sm:mt-24 */}
              <div className="mx-auto">
                <h2 className="text-white text-center font-['Figtree'] text-[18px] lg:text-[20px] font-semibold leading-normal mb-6 sm:mb-8 py-4">
                  Where Will You Go Next?
                </h2>

                <div className="max-w-5xl mx-auto">
                  <div className="bg-[#ffffff] rounded-2xl shadow-xl overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center">
                      <div className="flex-1 border-b md:border-b-0 md:border-r border-[#e4e4e4]">
                        <Select>
                          <SelectTrigger className="w-full !h-12 md:!h-16 border-0 rounded-none bg-transparent text-black font-['Figtree'] text-[12px] md:text-[14px] font-normal leading-[24px] uppercase px-3 flex items-center justify-center
                          focus:border-0 focus:ring-0 focus:ring-transparent
      focus-visible:ring-0 focus-visible:ring-transparent 
      focus-visible:border-0 outline-none data-[placeholder]:text-[#1A2F46]
      data-[placeholder]:font-medium
      data-[placeholder]:text-[16px]
      data-[placeholder]:leading-[24px] data-[placeholder]:uppercase data-[placeholder]:font-['Figtree']">
                            <SelectValue placeholder="DESTINATION" />
                          </SelectTrigger>
                          <SelectContent className="w-full bg-white border-0 px-2 py-2">
                            {destinations.map((item, index) => (
                              <React.Fragment key={item.value}>
                                <SelectItem
                                  value={item.value}
                                  className="text-black font-['Figtree'] text-[14px] font-normal leading-[24px] uppercase"
                                >
                                  {item.text}
                                </SelectItem>
                                {index !== destinations.length - 1 && (
                                  <Separator orientation="horizontal" className="w-full border border-[#E7E7E7] mt-1 mb-1" />
                                )}
                              </React.Fragment>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex-1 border-b md:border-b-0 md:border-r border-[#e4e4e4]">
                        <Select>
                          <SelectTrigger className="w-full !h-12 md:!h-16 border-0 rounded-none bg-transparent text-black font-['Figtree'] text-[12px] md:text-[14px] font-normal leading-[24px] uppercase px-3 flex items-center justify-center
                          focus:border-0 focus:ring-0 focus:ring-transparent
      focus-visible:ring-0 focus-visible:ring-transparent 
      focus-visible:border-0 outline-none data-[placeholder]:text-[#1A2F46]
      data-[placeholder]:font-medium
      data-[placeholder]:text-[16px]
      data-[placeholder]:leading-[24px] data-[placeholder]:uppercase data-[placeholder]:font-['Figtree']">
                            <SelectValue placeholder="TYPE OF TRIP" />
                          </SelectTrigger>
                          <SelectContent className="w-full bg-white border-0 px-2 py-2">
                            {tripTypes.map((item, index) => (
                              <React.Fragment key={item.value}>
                                <SelectItem
                                  value={item.value}
                                  className="text-black font-['Figtree'] text-[14px] font-normal leading-[24px] uppercase"
                                >
                                  {item.text}
                                </SelectItem>
                                {index !== tripTypes.length - 1 && (
                                  <Separator orientation="horizontal" className="w-full border border-[#E7E7E7] mt-1 mb-1" />
                                )}
                              </React.Fragment>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex-1 border-b md:border-b-0 md:border-r border-[#e4e4e4]">
                        <Select>
                          <SelectTrigger className="w-full !h-12 md:!h-16 border-0 rounded-none bg-transparent text-black font-['Figtree'] text-[12px] md:text-[14px] font-normal leading-[24px] uppercase px-3 flex items-center justify-center
                          focus:border-0 focus:ring-0 focus:ring-transparent
      focus-visible:ring-0 focus-visible:ring-transparent 
      focus-visible:border-0 outline-none data-[placeholder]:text-[#1A2F46]
      data-[placeholder]:font-medium
      data-[placeholder]:text-[16px]
      data-[placeholder]:leading-[24px] data-[placeholder]:uppercase data-[placeholder]:font-['Figtree']">
                            <SelectValue placeholder="TRIP DURATION" />
                          </SelectTrigger>
                          <SelectContent className="w-full bg-white border-0 px-2 py-2">
                            {tripDurations.map((item, index) => (
                              <React.Fragment key={item.value}>
                                <SelectItem
                                  value={item.value}
                                  className="text-black font-['Figtree'] text-[14px] font-normal leading-[24px] uppercase"
                                >
                                  {item.text}
                                </SelectItem>
                                {index !== tripDurations.length - 1 && (
                                  <Separator orientation="horizontal" className="w-full border border-[#E7E7E7] mt-1 mb-1" />
                                )}
                              </React.Fragment>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex-1 border-b md:border-b-0 md:border-r border-[#e4e4e4]">
                        <Select>
                          <SelectTrigger className="w-full !h-12 md:!h-16 border-0 rounded-none bg-transparent text-black font-['Figtree'] text-[12px] md:text-[14px] font-normal leading-[24px] uppercase px-3 flex items-center justify-center
                          focus:border-0 focus:ring-0 focus:ring-transparent
      focus-visible:ring-0 focus-visible:ring-transparent 
      focus-visible:border-0 outline-none data-[placeholder]:text-[#1A2F46]
      data-[placeholder]:font-medium
      data-[placeholder]:text-[16px]
      data-[placeholder]:leading-[24px] data-[placeholder]:uppercase data-[placeholder]:font-['Figtree']">
                            <SelectValue placeholder="NO. OF TRAVELLERS" />
                          </SelectTrigger>
                          <SelectContent className="w-full bg-white border-0 p-2">
                            {travellers.map((item, index) => (
                              <React.Fragment key={item.value}>
                                <SelectItem
                                  value={item.value}
                                  className="text-black font-['Figtree'] text-[14px] font-normal leading-[24px] uppercase"
                                >
                                  {item.text}
                                </SelectItem>
                                {index !== travellers.length - 1 && (
                                  <Separator orientation="horizontal" className="w-full border border-[#E7E7E7] mt-1 mb-1" />
                                )}
                              </React.Fragment>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <Button className="h-12 md:h-16 bg-[#1a2f46] hover:bg-[#21315d] px-6 sm:px-8 rounded-none font-medium flex items-center justify-center">
                        {/* <Search className="w-4 sm:w-5 h-4 sm:h-5 mr-2" /> */}
                        <svg className="h-4 w-4 md:w-5 md:h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                          <g clipPath="url(#clip0_3292_7780)">
                            <path d="M19.7722 18.6726L14.8912 13.7917C16.1045 12.3328 16.8354 10.4593 16.8354 8.41797C16.8354 3.77628 13.0592 0 8.41776 0C3.77618 0 0 3.77628 0 8.41797C0 13.0593 3.77618 16.8353 8.41776 16.8353C10.459 16.8353 12.3326 16.1045 13.7915 14.8912L18.6726 19.7722C18.8244 19.9241 19.0234 20 19.2224 20C19.4214 20 19.6204 19.9241 19.7723 19.7722C20.076 19.4685 20.076 18.9763 19.7722 18.6726ZM1.55518 8.41797C1.55518 4.63381 4.6337 1.55518 8.41776 1.55518C12.2017 1.55518 15.2801 4.63381 15.2801 8.41797C15.2801 12.2018 12.2017 15.2801 8.41776 15.2801C4.6337 15.2801 1.55518 12.2018 1.55518 8.41797Z" fill="white" />
                          </g>
                          <defs>
                            <clipPath id="clip0_3292_7780">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <span className="text-white font-['Figtree'] text-[18px] font-semibold leading-[24px] uppercase">SEARCH</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <section className="container mx-auto lg:hidden"> {/**max-w-[1920px] */}
        <div className="w-full fixed bottom-0 left-0 right-0 z-100">
          <div className="bg-[#D06225] px-4 py-3">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-[4px] shrink-0 items-center cursor-pointer">
                <img src="/images/detailpage/call_white.svg" alt="" className="" />
                <div className="text-white text-center font-['Figtree'] text-[13px] font-semibold leading-[normal] capitalize">
                  Request
                  <span className="lowercase"> a </span>
                  call back
                </div>
              </div>
              <div className="flex flex-row gap-[6px] shrink-0 items-center cursor-pointer">
                <div className="text-white font-['Figtree'] text-[13px] font-semibold leading-[normal] capitalize">Chat with us</div>
                <img src="/images/detailpage/whatsapp_white.svg" alt="" className="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
