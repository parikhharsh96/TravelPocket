"use client"

import { Facebook, Twitter, Instagram, Phone, Search, Heart, ShoppingCart, User, ChevronDown, Menu } from "lucide-react"

interface DashboardHeaderProps {
  onMenuClick?: () => void
}

export function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {
  return (
    <header className="border-b bg-white">
      {/* Top Bar */}
      <div className="hidden md:block bg-[#f8f8f8] border-b">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <div className="flex gap-3">
              <Facebook className="w-4 h-4 text-[#333333] cursor-pointer hover:text-[#e97737]" />
              <Twitter className="w-4 h-4 text-[#333333] cursor-pointer hover:text-[#e97737]" />
              <Instagram className="w-4 h-4 text-[#333333] cursor-pointer hover:text-[#e97737]" />
            </div>
            <div className="h-5 w-px bg-[#d2d8e4]" />
            <div className="flex items-center gap-2 text-[#333333]">
              <Phone className="w-4 h-4" />
              <span className="font-medium">+91 78270-33601</span>
            </div>
          </div>
          <div className="flex gap-4 lg:gap-6 text-[#333333] font-medium text-xs lg:text-sm">
            <span className="cursor-pointer hover:text-[#e97737]">BLOGS</span>
            <span className="hidden lg:inline cursor-pointer hover:text-[#e97737]">JOIN POCKETCLUB</span>
            <span className="cursor-pointer hover:text-[#e97737]">OFFERS</span>
            <span className="cursor-pointer hover:text-[#e97737]">FAQS</span>
            <span className="cursor-pointer hover:text-[#e97737]">CONTACT</span>
            <span className="cursor-pointer hover:text-[#e97737] flex items-center gap-1">
              EN <ChevronDown className="w-3 h-3" />
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
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
      </div>
    </header>
  )
}
