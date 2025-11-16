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


const topLinks = [
  { label: "Blogs", href: "/blogs" },
  { label: "JOIN POCKETCLUB", href: "/rewards" },
  { label: "OFFERS", href: "/offers" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact-us" },
];

export default function HomeHeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
                <h1 className="text-xl sm:text-2xl font-light text-[#ffffff]">
                  travel<span className="font-semibold text-[#ffffff]">pocket</span>
                </h1>
                <p className="text-xs text-[#ffffff] ml-2">your travel designer app</p>
              </div>

              {/* Main Navigation - Desktop Only */}
              <div className="hidden lg:flex items-center gap-8">
                <Select>
                  <SelectTrigger
                    className="border-none !text-white font-medium [&>svg]:!text-white [&>svg]:!fill-white [&_svg]:!text-white [&_svg]:!fill-white"
                    style={{ color: "white" }}
                  >
                    <SelectValue placeholder="KAILASH MANSAROVAR" className="!text-white" style={{ color: "white" }} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kailash">Kailash Mansarovar</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger
                    className="border-none !text-white font-medium [&>svg]:!text-white [&>svg]:!fill-white [&_svg]:!text-white [&_svg]:!fill-white"
                    style={{ color: "white" }}
                  >
                    <SelectValue placeholder="ADI KAILASH" className="!text-white" style={{ color: "white" }} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="adi">Adi Kailash</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger
                    className="border-none !text-white font-medium [&>svg]:!text-white [&>svg]:!fill-white [&_svg]:!text-white [&_svg]:!fill-white"
                    style={{ color: "white" }}
                  >
                    <SelectValue placeholder="ALL DESTINATIONS" className="!text-white" style={{ color: "white" }} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Destinations</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger
                    className="border-none !text-white font-medium [&>svg]:!text-white [&>svg]:!fill-white [&_svg]:!text-white [&_svg]:!fill-white"
                    style={{ color: "white" }}
                  >
                    <SelectValue placeholder="WHO WE ARE" className="!text-white" style={{ color: "white" }} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="about">About Us</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Right Actions */}
              <div className="flex items-center gap-2 sm:gap-4">
                <Search className="w-5 h-5 text-[#ffffff]" />
                <div className="hidden sm:block w-5 h-5 text-[#ffffff]">♡</div>
                <div className="hidden sm:flex items-center gap-1 text-[#ffffff]">
                  <span>🛍</span>
                  <span className="text-sm">0</span>
                </div>
                <Button className="bg-[#e97737] hover:bg-[#c75414] text-[#ffffff] text-xs sm:text-sm px-2 sm:px-4">
                  <span className="hidden sm:inline">LOGIN / REGISTER</span>
                  <span className="sm:hidden">LOGIN</span>
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
                  <h1 className="text-white font-['Playfair_Display'] text-[86px] font-bold leading-[90px] mb-4">
                    Kailash
                    <br />
                    Mansarovar
                  </h1>
                  <div className="text-white font-['Figtree'] text-[36px] font-semibold leading-normal mb-6">
                    Yatra with{" "}
                    <span className="bg-[#e97737] text-[#ffffff] px-2 sm:px-3 py-1 rounded">Charan Sparsh</span>
                  </div>
                  <p className="text-white font-['Figtree'] text-[20px] font-semibold leading-normal mb-8">Touch the Divine. Awaken your Soul.</p>
                  <Button className="group rounded-[6px] border border-white bg-transparent px-6 sm:px-8 py-4 cursor-pointer hover:border-none
                    bg-[linear-gradient(90deg,_#ffffff_0%,_#ffffff_50%,_transparent_50%)] 
             bg-[length:200%_100%] bg-[position:100%_0] 
             transition-[background-position] duration-300 ease-out
             hover:bg-[position:0_0]">
                    <span className="text-white font-['Figtree'] text-[16px] font-semibold leading-normal uppercase group-hover:text-[#1A2F46]">Book Now</span>
                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 cursor-pointer transition-transform duration-300 ease-in-out text-white group-hover:text-white group-hover:-rotate-45 group-hover:bg-[#E97737] group-hover:rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="none">
                      <circle className="group-hover:[stroke-width:0]" cx="15" cy="15" r="14.5" stroke="currentColor" strokeWidth="1" fill="none" />
                      <path d="M19.634 15.6H8V14.4H19.634L14.943 9.843L15.8235 9L22 15L15.8235 21L14.943 20.157L19.634 15.6Z" fill="currentColor" />
                    </svg>
                  </Button>
                </div>
              </div>

              {/* Inclusions Sidebar */}
              <div className="rounded-[8px] bg-[rgba(0,0,0,0.20)] backdrop-blur-[4px] p-4 sm:p-6 h-fit max-w-sm mx-auto lg:mx-0">
                <h3 className="text-white text-center font-['Figtree'] text-[20px] font-medium leading-normal mb-4 sm:mb-6">Inclusions</h3>

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
                    <p className="text-white text-center font-['Figtree'] text-[14px] font-medium leading-normal">
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
                    <p className="text-white text-center font-['Figtree'] text-[14px] font-medium leading-normal">Tibet & Kailash Permits</p>
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
                    <p className="text-white text-center font-['Figtree'] text-[14px] font-medium leading-normal">Modes of Transportation</p>
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
                    <p className="text-white text-center font-['Figtree'] text-[14px] font-medium leading-normal">
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
                    <p className="text-white text-center font-['Figtree'] text-[14px] font-medium leading-normal">
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
                    <p className="text-white text-center font-['Figtree'] text-[14px] font-medium leading-normal">+10 More</p>
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
                <h2 className="text-white text-center font-['Figtree'] text-[20px] font-semibold leading-normal mb-6 sm:mb-8 py-4">
                  Where Will You Go Next?
                </h2>

                <div className="max-w-5xl mx-auto">
                  <div className="bg-[#ffffff] rounded-2xl shadow-xl overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="flex-1 border-b md:border-b-0 md:border-r border-[#e4e4e4]">
                        <Select>
                          <SelectTrigger className="h-12 md:h-16 border-0 rounded-none bg-transparent text-[#333333] font-medium px-3 flex items-center justify-center">
                            <SelectValue placeholder="DESTINATION" />
                          </SelectTrigger>
                          <SelectContent className="w-full">
                            <SelectItem value="kailash">Kailash Mansarovar</SelectItem>
                            <SelectItem value="adi">Adi Kailash</SelectItem>
                            <SelectItem value="other">Other Destinations</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex-1 border-b md:border-b-0 md:border-r border-[#e4e4e4]">
                        <Select>
                          <SelectTrigger className="h-12 md:h-16 border-0 rounded-none bg-transparent text-[#333333] font-medium px-3 flex items-center justify-center">
                            <SelectValue placeholder="TYPE OF TRIP" />
                          </SelectTrigger>
                          <SelectContent className="w-full">
                            <SelectItem value="pilgrimage">Pilgrimage</SelectItem>
                            <SelectItem value="adventure">Adventure</SelectItem>
                            <SelectItem value="cultural">Cultural</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex-1 border-b md:border-b-0 md:border-r border-[#e4e4e4]">
                        <Select>
                          <SelectTrigger className="h-12 md:h-16 border-0 rounded-none bg-transparent text-[#333333] font-medium px-3 flex items-center justify-center">
                            <SelectValue placeholder="TRIP DURATION" />
                          </SelectTrigger>
                          <SelectContent className="w-full">
                            <SelectItem value="7days">7 Days</SelectItem>
                            <SelectItem value="14days">14 Days</SelectItem>
                            <SelectItem value="21days">21 Days</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex-1 border-b md:border-b-0 md:border-r border-[#e4e4e4]">
                        <Select>
                          <SelectTrigger className="h-12 md:h-16 border-0 rounded-none bg-transparent text-[#333333] font-medium px-3 flex items-center justify-center">
                            <SelectValue placeholder="NO. OF TRAVELLERS" />
                          </SelectTrigger>
                          <SelectContent className="w-full">
                            <SelectItem value="1">1 Traveller</SelectItem>
                            <SelectItem value="2">2 Travellers</SelectItem>
                            <SelectItem value="3-5">3-5 Travellers</SelectItem>
                            <SelectItem value="group">Group (6+)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <Button className="h-12 md:h-16 bg-[#1a2f46] hover:bg-[#21315d] px-6 sm:px-8 rounded-none font-medium flex items-center justify-center">
                        <Search className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
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
