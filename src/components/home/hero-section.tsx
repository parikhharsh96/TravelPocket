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

export default function HomeHeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#ffffff]">
      {/* Top Banner */}
      <div className="bg-[#21315d] text-[#ffffff] py-2 px-4 text-center text-xs sm:text-sm">
        <span className="flex flex-col sm:inline-flex sm:flex-row items-center gap-2">
          <span className="flex items-center gap-2">
            🔥 Registrations Now Open for <strong>Kailash Mansarovar Yatra 2025 Parikrama!</strong> Secure your seat
            today!
          </span>
          <Button
            variant="outline"
            size="sm"
            className="mt-2 sm:mt-0 sm:ml-2 bg-transparent border-[#ffffff] text-[#ffffff] hover:bg-[#ffffff] hover:text-[#21315d]"
          >
            REGISTER NOW
          </Button>
        </span>
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
              <div className="flex items-center gap-4 text-sm text-[#ffffff]">
                <div className="flex gap-2 pr-4 border-r border-[#ffffff]/20">
                  <Facebook className="w-4 h-4 text-[#ffffff]" />
                  <Twitter className="w-4 h-4 text-[#ffffff]" />
                  <Instagram className="w-4 h-4 text-[#ffffff]" />
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
              </div>

              {/* Top Navigation - Desktop */}
              <nav className="hidden lg:flex items-center gap-6 text-sm text-[#ffffff]">
                <a href="#" className="hover:text-[#e97737]">
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
                </a>
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
                  <h1 className="text-3xl sm:text-4xl md:text-6xl font-light text-[#ffffff] mb-4 leading-tight">
                    Kailash
                    <br />
                    Mansarovar
                  </h1>
                  <div className="text-xl sm:text-2xl md:text-3xl text-[#ffffff] mb-6">
                    Yatra with{" "}
                    <span className="bg-[#e97737] text-[#ffffff] px-2 sm:px-3 py-1 rounded">Charan Sparsh</span>
                  </div>
                  <p className="text-lg sm:text-xl text-[#ffffff] mb-8">Touch the Divine. Awaken your Soul.</p>
                  <Button className="bg-[#1a2f46] hover:bg-[#21315d] text-[#ffffff] px-6 sm:px-8 py-3 text-base sm:text-lg">
                    BOOK NOW
                  </Button>
                </div>
              </div>

              {/* Inclusions Sidebar */}
              <div className="bg-[#777777] rounded-lg p-4 sm:p-6 h-fit max-w-sm mx-auto lg:mx-0">
                <h3 className="text-lg sm:text-xl font-normal mb-4 sm:mb-6 text-center text-[#ffffff]">Inclusions</h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="text-center">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center mx-auto mb-2">
                      <Utensils className="w-5 sm:w-6 h-5 sm:h-6 text-[#ffffff]" />
                    </div>
                    <p className="text-xs sm:text-sm font-normal text-[#ffffff]">
                      Vegetarian
                      <br />
                      Meals
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center mx-auto mb-2">
                      <FileText className="w-5 sm:w-6 h-5 sm:h-6 text-[#ffffff]" />
                    </div>
                    <p className="text-xs sm:text-sm font-normal text-[#ffffff]">Tibet & Kailash Permits</p>
                  </div>

                  <div className="text-center">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center mx-auto mb-2">
                      <Plane className="w-5 sm:w-6 h-5 sm:h-6 text-[#ffffff]" />
                    </div>
                    <p className="text-xs sm:text-sm font-normal text-[#ffffff]">Modes of Transportation</p>
                  </div>

                  <div className="text-center">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center mx-auto mb-2">
                      <Building className="w-5 sm:w-6 h-5 sm:h-6 text-[#ffffff]" />
                    </div>
                    <p className="text-xs sm:text-sm font-normal text-[#ffffff]">
                      Hotel
                      <br />
                      Stays
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center mx-auto mb-2">
                      <Wind className="w-5 sm:w-6 h-5 sm:h-6 text-[#ffffff]" />
                    </div>
                    <p className="text-xs sm:text-sm font-normal text-[#ffffff]">
                      Oxygen
                      <br />
                      cylinders
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center mx-auto mb-2">
                      <MoreHorizontal className="w-5 sm:w-6 h-5 sm:h-6 text-[#ffffff]" />
                    </div>
                    <p className="text-xs sm:text-sm font-normal text-[#ffffff]">+10 More</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="w-full bg-[#d9d9d9] rounded-full h-1 relative">
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#ffffff] rounded-full"></div>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full bg-transparent border-[#ffffff] text-[#ffffff] hover:bg-[#ffffff] hover:text-[#777777] font-normal flex items-center justify-center gap-2 text-xs sm:text-sm"
                >
                  VIEW DETAILS
                  <div className="w-5 sm:w-6 h-5 sm:h-6 border border-[#ffffff] rounded-full flex items-center justify-center">
                    <ArrowRight className="w-2.5 sm:w-3 h-2.5 sm:h-3" />
                  </div>
                </Button>
              </div>
            </div>

            {/* Search Section */}
            <div className="mt-12 sm:mt-24 py-8">
              <div className="mx-auto">
                <h2 className="text-xl sm:text-2xl md:text-3xl text-center text-[#ffffff] mb-6 sm:mb-8 font-light py-4">
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

                      <Button className="h-12 md:h-16 bg-[#1a2f46] hover:bg-[#21315d] text-[#ffffff] px-6 sm:px-8 rounded-none font-medium flex items-center justify-center">
                        <Search className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                        SEARCH
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
