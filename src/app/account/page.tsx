"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/account/dashboard-header"
import { AccountSidebar } from "@/components/account/account-sidebar"
import { TripCard } from "@/components/account/trip-card"
import { PendingItemsCard } from "@/components/account/pending-items-card"
import { NextStepsCard } from "@/components/account/next-steps-card"
import { NotificationsPanel } from "@/components/account/notifications-panel"
import { HelpCenter } from "@/components/account/help-center"
import { UserDetails } from "@/components/account/user-details"
import { ActiveBookings } from "@/components/account/active-bookings"
import { PocketClubRewards } from "@/components/account/pocketclub-rewards"
import { BookingDetails } from "@/components/account/booking-details"
import { SendUpdateRequest } from "@/components/account/send-update-request"
import { SavedTravellers } from "@/components/account/saved-travellers"
import { MyTestimonials } from "@/components/account/my-testimonials"
import { MyAddress } from "@/components/account/my-address"
import { Logout } from "@/components/account/logout"
import { Award } from "lucide-react"

export default function AccountPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [activeView, setActiveView] = useState("overview")
  const [selectedBookingId, setSelectedBookingId] = useState<string | null>(null)

  const handleMenuItemClick = (itemId: string) => {
    setActiveView(itemId)
    setSelectedBookingId(null)
  }

  const handleViewDetails = (bookingId: string) => {
    setSelectedBookingId(bookingId)
  }

  const handleBackToBookings = () => {
    setSelectedBookingId(null)
  }

  return (
    <div className="min-h-screen bg-white">
      <DashboardHeader onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />

      <main className="container mx-auto px-4 py-4 md:py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-[#1a2f46] mb-4 md:mb-8">Your Account</h1>

        <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
          <AccountSidebar
            activeItem={activeView}
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
            onMenuItemClick={handleMenuItemClick}
          />

          <div className="flex-1 space-y-4 md:space-y-6">
            {activeView === "user-details" ? (
              <UserDetails />
            ) : activeView === "Active Bookings" ? (
              selectedBookingId ? (
                <BookingDetails bookingId={selectedBookingId} onBack={handleBackToBookings} />
              ) : (
                <ActiveBookings onViewDetails={handleViewDetails} />
              )
            ) : activeView === "rewards" ? (
              <PocketClubRewards />
            ) : activeView === "update" ? (
              <SendUpdateRequest />
            ) : activeView === "travellers" ? (
              <SavedTravellers />
            ) : activeView === "testimonials" ? (
              <MyTestimonials />
            ) : activeView === "address" ? (
              <MyAddress />
            ) : activeView === "logout" ? (
              <Logout />
            ) : (
              <>
                {/* Welcome Section */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-[#1a2f46] mb-1">Namaste, Shivam</h2>
                    <p className="text-sm md:text-base text-[#5a5a5a]">
                      Your next trip begins soon. Let's get everything ready!
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-[#ffaa00] to-[#de8800] text-white rounded-lg px-4 md:px-6 py-3 md:py-4 w-full md:min-w-[200px] md:w-auto">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs md:text-sm">Reward Level</span>
                      <Award className="w-4 h-4" />
                      <span className="font-bold text-sm md:text-base">Gold</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs md:text-sm">Reward Points</span>
                      <span className="text-xl md:text-2xl font-bold">34900</span>
                    </div>
                  </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  <TripCard
                    title="Kailash Mansarovar Yatra"
                    subtitle="Charan Sparsh Outer Kora from Lucknow By Helicopter"
                    daysToGo={22}
                    departureDate="10 Sep 2025"
                    duration="11 NIGHTS 12 DAYS"
                    imageUrl="/images/account/kailash-mountain-snow-peaks.jpg"
                  />

                  <div className="space-y-4 md:space-y-6">
                    <PendingItemsCard />
                    <NextStepsCard />
                  </div>

                  <NotificationsPanel />
                </div>

                {/* Help Center */}
                <HelpCenter />
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}