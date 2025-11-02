"use client"

import { Facebook, Twitter, Instagram, Phone, Search, Heart, ShoppingCart, User, ChevronDown, Menu } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";
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
import React, { useState } from "react";

interface DashboardHeaderProps {
  onMenuClick?: () => void
}

const navLinks = ["Kailash Mansarovar", "ADI Kailash", "All Destinations", "WHO WE ARE"];
const topLinks = [
  { label: "Blogs", href: "/blogs" },
  { label: "JOIN POCKETCLUB", href: "/rewards" },
  { label: "OFFERS", href: "/offers" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact-us" },
];
const icons = ["magnifiying-glass", "wishlist", "cart", "user"];

const whoWeAreOptions = [
  { label: "About us", href: "/about-us" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact us", href: "/contact-us" },
  { label: "Gallery/Media", href: "/gallery-media" },
  { label: "Blogs", href: "/blogs" },
  { label: "Careers", href: "/careers" },
];

const domesticDestinations = [
  { label: "Kailash Mansarovar", url: "/destinations/kailash-mansarovar" },
  { label: "Adi Kailash & Om Parvat", url: "/destinations/adi-kailash-om-parvat" },
  { label: "Chardham", url: "/destinations/chardham" },
  { label: "Do Dham", url: "/destinations/do-dham" },
  { label: "Kedarnath", url: "/destinations/kedarnath" },
  { label: "Himachal", url: "/destinations/himachal" },
  { label: "Rajasthan", url: "/destinations/rajasthan" },
  { label: "North India", url: "/destinations/north-india" }
];

const internationalDestinations = [
  { label: "Nepal", url: "/destinations/nepal" },
  { label: "Bali", url: "/destinations/bali" },
  { label: "Bhutan", url: "/destinations/bhutan" },
  { label: "Tibet", url: "/destinations/tibet" }
];

const destinationsList = [
  { label: "Kailash Mansarovar", url: "/destinations/kailash-mansarovar" },
  { label: "Adi Kailash", url: "/destinations/adi-kailash" },
  { label: "Nepal", url: "/destinations/nepal" },
  { label: "Kedarnath", url: "/destinations/kedarnath" }
];

const allDestinations = [
  ...domesticDestinations.map((d) => ({ ...d, type: "Domestic" })),
  ...internationalDestinations.map((d) => ({ ...d, type: "International" })),
];

export function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [popoverOpen, setPopoverOpen] = useState(false);

  return (
    <header className="w-full overflow-x-hidden relative bg-white rounded-md" style={{ boxShadow: "0 0 6px 0 rgba(0, 0, 0, 0.12)" }}>
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

      <Separator orientation="horizontal" className="bg-[#BBB] my-1" />

      {/* Bottom Bar */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-2 py-2">
        <div className="flex items-center gap-4">
          {/* Hamburger Menu for Mobile & Tablet */}
          <button
            // className="lg:hidden p-2"
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            <img src="/images/header/dehaze.svg" alt="Menu" className="w-6 h-6" />
          </button>

          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/images/footer/logo_design_travel_pocket.svg" alt="Logo" className="w-[100px] sm:w-[119px] h-auto" />
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
                    <div className="flex items-center justify-center gap-1 sm:gap-2 text-[12px] md:text-[12px] lg:text-[14px] font-semibold uppercase text-[#333] group hover:text-[#e97737] cursor-pointer">
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
                  <div className="flex items-center justify-center gap-1 sm:gap-2 text-[12px] md:text-[12px] lg:text-[14px] font-semibold uppercase text-[#333] group hover:text-[#e97737] cursor-pointer" onMouseEnter={() => setPopoverOpen(true)}
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
                      <button className="rounded-[6px] border border-[#E97737] px-3 py-3 cursor-pointer" tabIndex={-1}>
                        <div className="flex flex-row gap-[10px] justify-center items-center">
                          <div className="text-[#E97737] font-['Figtree'] text-[14px] font-semibold leading-normal uppercase">View all</div>
                          <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                              <circle cx="10" cy="10" r="9.5" stroke="#E97737" />
                              <path d="M12.8677 10.4H5.33333V9.6H12.8677L9.82973 6.562L10.4 6L14.4 10L10.4 14L9.82973 13.438L12.8677 10.4Z" fill="#E97737" />
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
            <img key={icon} src={`/images/header/${icon}.svg`} alt={icon} className={`w-5 h-5 sm:w-6 sm:h-6 ${icon === "wishlist" ? "hidden sm:block" : ""}`} />
          ))}
        </div>
      </div>

      {/* Main Navigation */}
      {/* <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 lg:gap-12">
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6 text-[#333333]" />
            </button>

            <div>
              <h1 className="text-xl md:text-2xl font-bold">
                <span className="text-[#1a2f46]">travel</span>
                <span className="text-[#e97737]">pocket</span>
              </h1>
              <p className="text-xs text-[#5a5a5a]">keep your adventure alive</p>
            </div>
            <nav className="hidden lg:flex gap-8 text-sm font-medium text-[#333333]">
              <button className="flex items-center gap-1 hover:text-[#e97737]">
                KAILASH MANSAROVAR <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-1 hover:text-[#e97737]">
                ADI KAILASH <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-1 hover:text-[#e97737]">
                ALL DESTINATIONS <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-1 hover:text-[#e97737]">
                WHO WE ARE <ChevronDown className="w-4 h-4" />
              </button>
            </nav>
          </div>
          <div className="flex items-center gap-3 md:gap-4">
            <Search className="w-5 h-5 text-[#333333] cursor-pointer hover:text-[#e97737]" />
            <Heart className="w-5 h-5 text-[#333333] cursor-pointer hover:text-[#e97737]" />
            <div className="relative cursor-pointer">
              <ShoppingCart className="w-5 h-5 text-[#333333] hover:text-[#e97737]" />
              <span className="absolute -top-2 -right-2 bg-[#e97737] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                0
              </span>
            </div>
            <User className="w-5 h-5 text-[#333333] cursor-pointer hover:text-[#e97737]" />
          </div>
        </div>
      </div> */}
    </header>
  )
}
