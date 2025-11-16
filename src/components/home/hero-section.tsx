"use client"

import { useState } from "react"

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
import { ChevronDown } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import React from "react"


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

const destinations = [
  { label: "KAILASH MANSAROVAR", value: "kailash-mansarovar" },
  { label: "ADI KAILASH & OM PARVAT", value: "adi-kailash-om-parvat" },
  { label: "CHAR DHAM", value: "char-dham" },
  { label: "KEDARNATH", value: "kedarnath" },
  { label: "RAJASTHAN", value: "rajasthan" },
];

const tripTypes = [
  { label: "BY ROAD", value: "by-road" },
  { label: "BY HELICOPTER", value: "by-helicopter" },
];

const tripDurations = [
  { label: "5 NIGHT 6 DAYS", value: "5-night-6-days" },
  { label: "7 NIGHT 8 DAYS", value: "7-night-8-days" },
  { label: "6 NIGHT 7 DAYS", value: "6-night-7-days" },
  { label: "8 NIGHT / 9 DAYS", value: "8-night-9-days" },
  { label: "13 NIGHT 14 DAYS", value: "13-night-14-days" },
];

const travellers = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
];


const allDestinations = [
  ...domesticDestinations.map((d) => ({ ...d, type: "Domestic" })),
  ...internationalDestinations.map((d) => ({ ...d, type: "International" })),
];

const iconRoutes: Record<string, string> = {
  "magnifiying-glass": "/search",
  "wishlist": "/wishlist",
  "cart": "/cart",
  // "user": "/account",
}

const icons = ["magnifiying", "wishlist", "cart"];

export default function HomeHeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const router = useRouter();

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

  return (
    <div className="min-h-screen bg-[#ffffff]">
      {/* Top Banner */}
      <div className="bg-[#242A3A] py-2 px-4 text-center">
        <div className="flex flex-col sm:inline-flex sm:flex-row items-center gap-2">
          <div className="flex items-center gap-2">
            <img src="/images/microphone.gif" alt="Announcement" className="w-6 h-6" />
            <span className="text-white font-['Figtree'] text-[14px] font-normal leading-normal">Registrations Now Open for <span className="font-semibold">Kailash Mansarovar Yatra 2025 Parikrama!</span> Secure your seat
              today!</span>
          </div>
          <Button
            variant="link"
            size="sm"
            className="mt-2 sm:mt-0 bg-transparent px-1"
          >
            <span className="text-white font-['Figtree'] text-[14px] font-semibold leading-normal underline underline-offset-auto decoration-solid uppercase">REGISTER NOW</span>
          </Button>
        </div>
      </div>

      {/* Background Image Container with Overlay */}
      <div
        className="min-h-screen bg-gradient-to-b from-[#1a2f46] to-[#21315d] bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url('/images/hero-section-bg.svg')`,
        }}
      >
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content with relative positioning */}
        <div className="relative z-10 px-2 sm:px-4">
          {/* Header */}
          <header className="border-b border-[#ffffff]/20 py-3">
            <div className="mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
              {/* Social Links & Contact */}
              {/* <div className="flex items-center gap-4 text-sm text-[#ffffff]">
                <div className="flex gap-2 pr-4 border-r border-[#ffffff]/20">
                  <img src="/images/header/facebook.svg" alt="Facebook" className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer" />
                  <img src="/images/header/logo_51.svg" alt="Logo" className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer" />
                  <img src="/images/header/instagram.svg" alt="Instagram" className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer" />
                </div>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1 pr-4 border-r border-[#ffffff]/20">
                    <Calendar className="w-4 h-4 text-[#ffffff]" />
                    <span className="hidden sm:inline">2025 CALENDAR</span>
                    <span className="sm:hidden">CALENDAR</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Phone className="w-4 h-4 text-[#ffffff]" />
                    <span className="hidden sm:inline">+91 78270-33601</span>
                    <span className="sm:hidden">CALL</span>
                  </span>
                </div>
              </div> */}

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
                {/* <a href="#" className="hover:text-[#e97737]">
                  BLOGS
                </a>
                <a href="#" className="hover:text-[#e97737]">
                  JOIN POCKETCLUB
                </a>
                <a href="#" className="hover:text-[#e97737]">
                  OFFERS
                </a>
                <a href="#" className="hover:text-[#e97737]">
                  FAQS
                </a>
                <a href="#" className="hover:text-[#e97737]">
                  CONTACT
                </a> */}
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

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div className="lg:hidden fixed top-0 left-0 right-0 bottom-0 bg-[#1a2f46]/95 backdrop-blur-sm z-50">
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
                  <a href="#" className="block text-[#ffffff] hover:text-[#e97737] py-2 text-sm font-medium">
                    BLOGS
                  </a>
                  <a href="#" className="block text-[#ffffff] hover:text-[#e97737] py-2 text-sm font-medium">
                    JOIN POCKETCLUB
                  </a>
                  <a href="#" className="block text-[#ffffff] hover:text-[#e97737] py-2 text-sm font-medium">
                    OFFERS
                  </a>
                  <a href="#" className="block text-[#ffffff] hover:text-[#e97737] py-2 text-sm font-medium">
                    FAQS
                  </a>
                  <a href="#" className="block text-[#ffffff] hover:text-[#e97737] py-2 text-sm font-medium">
                    CONTACT
                  </a>
                </div>

                <div className="border-t border-[#ffffff]/20 pt-4 space-y-3">
                  <a href="#" className="block text-[#ffffff] hover:text-[#e97737] py-2 text-sm font-medium">
                    KAILASH MANSAROVAR
                  </a>
                  <a href="#" className="block text-[#ffffff] hover:text-[#e97737] py-2 text-sm font-medium">
                    ADI KAILASH
                  </a>
                  <a href="#" className="block text-[#ffffff] hover:text-[#e97737] py-2 text-sm font-medium">
                    ALL DESTINATIONS
                  </a>
                  <a href="#" className="block text-[#ffffff] hover:text-[#e97737] py-2 text-sm font-medium">
                    WHO WE ARE
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Main Navigation */}
          <nav className="py-4">
            <div className="mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
              {/* Logo */}
              <div className="flex items-center">
                <div className="flex-shrink-0 cursor-pointer" onClick={navigateToHome}>
                  <img src="/images/header/logo_home.png" alt="Logo" className="w-[120px] sm:w-[240px] h-auto" />
                </div>
              </div>

              {/* Main Navigation - Desktop Only */}
              <div className="hidden lg:flex items-center gap-8">

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
                          <div className="flex items-center justify-center gap-1 sm:gap-2 text-[12px] md:text-[12px] lg:text-[14px] font-semibold uppercase text-white group hover:text-[#e97737] cursor-pointer">
                            <span>{item}</span>
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
                              {destinationsList.map((option, ind) => (
                                <React.Fragment key={ind}>
                                  <DropdownMenuItem>
                                    <Link
                                      href={option.url || "/"}
                                      className="block px-3 py-2 text-[#1A2F46] font-['Figtree'] text-[16px] font-medium leading-[24px]"
                                    >
                                      {option.label}
                                    </Link>
                                  </DropdownMenuItem>
                                  {ind !== destinationsList.length - 1 && (
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
                        <div className="flex items-center justify-center gap-1 sm:gap-2 text-[12px] md:text-[12px] lg:text-[14px] font-semibold uppercase text-white group hover:text-[#e97737] cursor-pointer" onMouseEnter={() => setPopoverOpen(true)}
                          onMouseLeave={() => setPopoverOpen(false)}>
                          <span>{item}</span>
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


              {/* Right Actions */}
              <div className="flex items-center gap-2 sm:gap-4">
                {icons.map((icon) => (
                  <div key={icon} className="cursor-pointer" onClick={() => handleIconClick(icon)}>
                    <img src={`/images/header/${icon}_white.svg`} alt={icon} className={`w-5 h-5 sm:w-6 sm:h-6 ${icon === "wishlist" ? "hidden sm:block" : ""}`} />
                  </div>
                ))}
                <Button className="bg-[#e97737] hover:bg-[#c75414] px-2 sm:px-4">
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
              </div>
            </div>
          </nav>

          {/* Hero Section */}
          <main className="mx-auto py-8 sm:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="mb-8 rounded-lg p-4 sm:p-8">
                  <h1 className="text-white font-['Playfair_Display'] text-[36px] lg:text-[86px] font-bold leading-[42px] lg:leading-[90px] mb-4">
                    Kailash
                    <br />
                    Mansarovar
                  </h1>
                  <div className="text-white font-['Figtree'] text-[22px] lg:text-[36px] font-semibold leading-normal mb-6">
                    Yatra with{" "}
                    <span className="bg-[#e97737] text-[#ffffff] px-2 sm:px-3 py-1 rounded">Charan Sparsh</span>
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
              <div className="rounded-[8px] bg-[rgba(0,0,0,0.20)] backdrop-blur-[4px] p-4 sm:p-6 h-fit max-w-sm mx-auto lg:mx-0">
                <h3 className="text-white text-center font-['Figtree'] text-[14px] lg:text-[20px] font-medium leading-normal mb-4 sm:mb-6">Inclusions</h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="text-center flex flex-col gap-2 items-center">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center">
                      {/* <Utensils className="w-5 sm:w-6 h-5 sm:h-6 text-[#ffffff]" /> */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
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
                    <p className="text-white text-center font-['Figtree'] text-[12px] lg:text-[14px] font-medium leading-normal">
                      Vegetarian
                      <br />
                      Meals
                    </p>
                  </div>

                  <div className="text-center flex flex-col gap-2 items-center">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center">
                      {/* <FileText className="w-5 sm:w-6 h-5 sm:h-6 text-[#ffffff]" /> */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="52" viewBox="0 0 50 52" fill="none">
                        <mask id="mask0_3292_7110" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="6" width="47" height="46">
                          <rect x="0.863525" y="6" width="46" height="46" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_3292_7110)">
                          <path d="M27.9915 29.8842H35.8058V27.9675H27.9915V29.8842ZM27.9915 24.5765H35.8058V22.6598H27.9915V24.5765ZM11.9213 35.3395H24.6005V35.0223C24.6005 33.9043 24.0391 33.0387 22.9162 32.4257C21.7934 31.8127 20.2417 31.5062 18.2611 31.5062C16.2806 31.5062 14.7287 31.8127 13.6055 32.4257C12.4827 33.0387 11.9213 33.9043 11.9213 35.0223V35.3395ZM18.2611 28.4098C19.0693 28.4098 19.7505 28.1329 20.3048 27.5789C20.859 27.0247 21.1361 26.3433 21.1361 25.5348C21.1361 24.7263 20.859 24.0451 20.3048 23.4912C19.7505 22.9369 19.0693 22.6598 18.2611 22.6598C17.4526 22.6598 16.7712 22.9369 16.217 23.4912C15.6631 24.0451 15.3861 24.7263 15.3861 25.5348C15.3861 26.3433 15.6631 27.0247 16.217 27.5789C16.7712 28.1329 17.4526 28.4098 18.2611 28.4098ZM9.7099 42.4163C8.82759 42.4163 8.09096 42.1209 7.49998 41.5299C6.90901 40.9389 6.61353 40.2023 6.61353 39.32V18.6794C6.61353 17.7971 6.90901 17.0604 7.49998 16.4695C8.09096 15.8785 8.82759 15.583 9.7099 15.583H38.0172C38.8995 15.583 39.6361 15.8785 40.2271 16.4695C40.818 17.0604 41.1135 17.7971 41.1135 18.6794V39.32C41.1135 40.2023 40.818 40.9389 40.2271 41.5299C39.6361 42.1209 38.8995 42.4163 38.0172 42.4163H9.7099ZM9.7099 40.4997H38.0172C38.3123 40.4997 38.5827 40.3768 38.8284 40.1312C39.074 39.8855 39.1969 39.6151 39.1969 39.32V18.6794C39.1969 18.3842 39.074 18.1138 38.8284 17.8682C38.5827 17.6225 38.3123 17.4997 38.0172 17.4997H9.7099C9.41473 17.4997 9.14432 17.6225 8.89867 17.8682C8.65302 18.1138 8.53019 18.3842 8.53019 18.6794V39.32C8.53019 39.6151 8.65302 39.8855 8.89867 40.1312C9.14432 40.3768 9.41473 40.4997 9.7099 40.4997Z" fill="white" />
                        </g>
                      </svg>
                    </div>
                    <p className="text-white text-center font-['Figtree'] text-[12px] lg:text-[14px] font-medium leading-normal">Tibet & Kailash Permits</p>
                  </div>

                  <div className="text-center flex flex-col gap-2 items-center">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center">
                      {/* <Plane className="w-5 sm:w-6 h-5 sm:h-6 text-[#ffffff]" /> */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="52" viewBox="0 0 50 52" fill="none">
                        <mask id="mask0_3292_7043" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="6" width="47" height="46">
                          <rect x="0.863525" y="6" width="46" height="46" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_3292_7043)">
                          <path d="M8.53016 44.3339V42.4173H39.1968V44.3339H8.53016ZM11.0736 34.8982L5.1391 24.9828L7.93312 24.253L13.0415 28.6101L20.9665 26.542L11.5269 13.87L15.0947 12.9375L28.7213 24.4854L36.904 22.3181C37.6314 22.129 38.3275 22.2303 38.9922 22.6219C39.657 23.0139 40.0839 23.5736 40.273 24.3009C40.4622 25.0283 40.3853 25.7244 40.0426 26.3891C39.6998 27.0539 39.1647 27.4808 38.4374 27.67L11.0736 34.8982Z" fill="white" />
                        </g>
                      </svg>
                    </div>
                    <p className="text-white text-center font-['Figtree'] text-[12px] lg:text-[14px] font-medium leading-normal">Modes of Transportation</p>
                  </div>

                  <div className="text-center flex flex-col gap-2 items-center">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center mx-auto">
                      {/* <Building className="w-5 sm:w-6 h-5 sm:h-6 text-[#ffffff]" /> */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="52" viewBox="0 0 50 52" fill="none">
                        <mask id="mask0_3292_13021" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="6" width="47" height="46">
                          <rect x="0.859985" y="6" width="46" height="46" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_3292_13021)">
                          <path d="M4.6933 40.4997V15.583H6.60996V32.833H22.9016V19.4163H37.2766C38.8579 19.4163 40.2115 19.9794 41.3376 21.1054C42.4636 22.2314 43.0266 23.5851 43.0266 25.1663V40.4997H41.11V34.7497H6.60996V40.4997H4.6933ZM14.2723 29.221C13.145 29.221 12.1881 28.8264 11.4016 28.037C10.6152 27.2477 10.2219 26.2893 10.2219 25.162C10.2219 24.0347 10.6166 23.0778 11.4059 22.2913C12.1953 21.5049 13.1536 21.1116 14.2809 21.1116C15.4083 21.1116 16.3652 21.5063 17.1516 22.2957C17.9381 23.085 18.3313 24.0433 18.3313 25.1707C18.3313 26.298 17.9367 27.2549 17.1473 28.0413C16.358 28.8278 15.3996 29.221 14.2723 29.221ZM24.8183 32.833H41.11V25.1663C41.11 24.1122 40.7346 23.2097 39.9839 22.459C39.2332 21.7084 38.3308 21.333 37.2766 21.333H24.8183V32.833ZM14.2766 27.3044C14.8689 27.3044 15.3733 27.0961 15.7898 26.6796C16.2064 26.263 16.4147 25.7586 16.4147 25.1663C16.4147 24.5741 16.2064 24.0697 15.7898 23.6531C15.3733 23.2366 14.8689 23.0283 14.2766 23.0283C13.6844 23.0283 13.18 23.2366 12.7634 23.6531C12.3469 24.0697 12.1386 24.5741 12.1386 25.1663C12.1386 25.7586 12.3469 26.263 12.7634 26.6796C13.18 27.0961 13.6844 27.3044 14.2766 27.3044Z" fill="white" />
                        </g>
                      </svg>
                    </div>
                    <p className="text-white text-center font-['Figtree'] text-[12px] lg:text-[14px] font-medium leading-normal">
                      Hotel
                      <br />
                      Stays
                    </p>
                  </div>

                  <div className="text-center flex flex-col gap-2 items-center">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center">
                      {/* <Wind className="w-5 sm:w-6 h-5 sm:h-6 text-[#ffffff]" /> */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
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
                    <p className="text-white text-center font-['Figtree'] text-[12px] lg:text-[14px] font-medium leading-normal">
                      Oxygen
                      <br />
                      cylinders
                    </p>
                  </div>

                  <div className="text-center flex flex-col gap-2 items-center">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center">
                      {/* <MoreHorizontal className="w-5 sm:w-6 h-5 sm:h-6 text-[#ffffff]" /> */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                        <mask id="mask0_3292_7423" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="50">
                          <rect width="50" height="50" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_3292_7423)">
                          <path d="M34.7598 27.3257L26.7519 19.3174L34.7598 11.3096L42.7681 19.3174L34.7598 27.3257ZM12.6152 24.7757V13.4078H23.983V24.7757H12.6152ZM29.2291 41.3896V30.0217H40.5969V41.3896H29.2291ZM12.6152 41.3896V30.0217H23.983V41.3896H12.6152ZM14.5102 22.8811H22.0885V15.3028H14.5102V22.8811ZM34.8072 24.7169L40.1593 19.3648L34.8072 14.0126L29.455 19.3648L34.8072 24.7169ZM31.1236 39.4945H38.7019V31.9163H31.1236V39.4945ZM14.5102 39.4945H22.0885V31.9163H14.5102V39.4945Z" fill="#FEFEFE" />
                        </g>
                      </svg>
                    </div>
                    <p className="text-white text-center font-['Figtree'] text-[12px] lg:text-[14px] font-medium leading-normal">+10 More</p>
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
            <div className="mt-12 sm:mt-24 py-8">
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
                                  {item.label}
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
                                  {item.label}
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
                                  {item.label}
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
                                  {item.label}
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
    </div>
  )
}
