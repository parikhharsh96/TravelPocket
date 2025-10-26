"use client"

import { useState } from "react"
import { Award, ChevronDown, Luggage, Star, Hotel, CalendarIcon, Plane, Headphones, Car } from "lucide-react"

export function PocketClubRewards() {
  const [activeTab, setActiveTab] = useState<"earned" | "used">("earned")

  const rewardHistory = [
    {
      srNo: 1,
      bookingId: "#2145638",
      tripName: "Kailash Mansarovar Yatra Charan Sparsh Outer Kora from Lucknow By Helicopter",
      points: "+1500",
    },
    {
      srNo: 2,
      bookingId: "#9145638",
      tripName: "Kedarnath, Tungnath and Badrinath Yatra",
      points: "+700",
    },
    {
      srNo: 2,
      bookingId: "#4145638",
      tripName: "Adi Kailash and Om Parvat Yatra",
      points: "+460",
    },
  ]

  const benefits = [
    {
      tier: "Bronze",
      color: "from-[#d8a38d] to-[#b24732]",
      bgColor: "bg-[#d8a38d]",
      eligibility: "Complete minimum 1 trip worth ₹5,000+ in a year",
      points: "1% Points Earned for every ₹100 Spent",
      welcome: "Welcome bonus (50 points)",
      hotel: "Flat 10% off on Hotel Stays",
      events: "Events, Sale and Special Promotions",
      room: "Guaranteed Room and Meals Upgrade",
      travel: "Earn Travel Points on outstation cabs",
      flights: "Free Domestic Flights 1 Seat / year",
      support: "Priority Customer Support",
    },
    {
      tier: "Silver",
      color: "from-[#92a1ba] to-[#565d69]",
      bgColor: "bg-[#92a1ba]",
      eligibility: "Complete minimum 3 Trips worth ₹30,000+ in a year",
      points: "1.5% Points Earned for every ₹100 Spent",
      welcome: "Welcome bonus (50 points)",
      hotel: "Flat 15% off on Hotel Stays",
      events: "Events, Sale and Special Promotions",
      room: "Guaranteed Room and Meals Upgrade",
      travel: "Earn Travel Points on outstation cabs",
      flights: "Free Domestic Flights 1 Seat / year",
      support: "Priority Customer Support",
    },
    {
      tier: "Gold",
      color: "from-[#ffaa00] to-[#de8800]",
      bgColor: "bg-[#ffaa00]",
      eligibility: "Complete minimum 5 Trips worth ₹75,000+ in a year",
      points: "2.5% Points Earned for every ₹100 Spent",
      welcome: "Welcome bonus (50 points)",
      hotel: "Flat 20% off on Hotel Stays",
      events: "Events, Sale and Special Promotions",
      room: "Guaranteed Room and Meals Upgrade",
      travel: "Earn 3% Travel Points on outstation cabs",
      flights: "Free Domestic Flights 3 Seats / year",
      support: "Priority Customer Support",
    },
  ]

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#1a2f46] to-[#29394d] rounded-lg p-6 md:p-8 lg:p-12 overflow-hidden">
        {/* Decorative Coins */}
        <div className="absolute top-8 right-8 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#ffaa00] opacity-90" />
        <div className="absolute top-20 right-24 w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#ffc608] opacity-80" />
        <div className="absolute top-32 right-12 w-6 h-6 md:w-10 md:h-10 rounded-full bg-[#de8800] opacity-70" />
        <div className="absolute bottom-12 right-16 w-16 h-16 md:w-24 md:h-24 rounded-full bg-[#ffaa00] opacity-60" />
        <div className="absolute bottom-24 right-32 w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#ffc608] opacity-50" />
        <div className="absolute bottom-8 right-48 w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#de8800] opacity-40" />

        <div className="relative z-10">
          <p className="text-white/80 text-xs md:text-sm mb-2">travelpocket</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
            Pocket<span className="text-[#29a4c1]">Club</span>
          </h1>
          <p className="text-white/90 text-sm md:text-base mb-6 md:mb-8">
            Enjoy discounts on every booking as a member!
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Welcome, Shivam Tripathi!</h2>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-white/90 text-sm md:text-base">Your Reward Points</span>
            <span className="text-2xl md:text-3xl font-bold text-white">3400</span>
          </div>

          <button className="bg-white text-[#1a2f46] px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base font-medium hover:bg-white/90 transition-colors mb-3">
            How to earn PocketClub Rewards?
          </button>

          <p className="text-white/80 text-xs md:text-sm">Points to unlock next level 5000</p>
        </div>
      </div>

      {/* Reward Level Section */}
      <div className="bg-white rounded-lg p-6 md:p-8">
        <h2 className="text-xl md:text-2xl font-bold text-[#1a2f46] text-center mb-6 md:mb-8">Reward Level</h2>

        <div className="flex items-center justify-center gap-4 md:gap-8 lg:gap-16 mb-6 md:mb-8 relative">
          {/* Progress Line */}
          <div className="absolute top-6 left-1/4 right-1/4 h-0.5 border-t-2 border-dashed border-[#d9d9d9] -z-10" />

          {/* Bronze */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#d8a38d] flex items-center justify-center mb-2">
              <Award className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
            <p className="text-sm md:text-base font-medium text-[#5a5a5a]">Bronze</p>
            <p className="text-xs md:text-sm text-[#5a5a5a]">₹5000</p>
          </div>

          {/* Silver */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#92a1ba] flex items-center justify-center mb-2">
              <Award className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
            <p className="text-sm md:text-base font-medium text-[#5a5a5a]">Silver</p>
            <p className="text-xs md:text-sm text-[#5a5a5a]">₹30,000</p>
          </div>

          {/* Gold */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#ffaa00] flex items-center justify-center mb-2 ring-4 ring-[#ffaa00]/30">
              <Award className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
            <p className="text-sm md:text-base font-bold text-[#1a2f46]">Gold</p>
            <p className="text-xs md:text-sm font-medium text-[#1a2f46]">₹75,000</p>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="bg-[#e97737] text-white px-6 md:px-8 py-2 md:py-3 rounded-lg text-sm md:text-base font-medium hover:bg-[#d1013e] transition-colors flex items-center gap-2">
            View Benefits
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Reward History Section */}
      <div className="bg-white rounded-lg p-6 md:p-8">
        <h2 className="text-xl md:text-2xl font-bold text-[#1a2f46] text-center mb-6">Reward History</h2>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-6">
          <button
            onClick={() => setActiveTab("earned")}
            className={`px-6 md:px-8 py-2 md:py-3 rounded-lg text-sm md:text-base font-medium transition-colors ${
              activeTab === "earned" ? "bg-[#1a2f46] text-white" : "bg-[#e5e5e5] text-[#5a5a5a] hover:bg-[#d9d9d9]"
            }`}
          >
            Earned
          </button>
          <button
            onClick={() => setActiveTab("used")}
            className={`px-6 md:px-8 py-2 md:py-3 rounded-lg text-sm md:text-base font-medium transition-colors ${
              activeTab === "used" ? "bg-[#1a2f46] text-white" : "bg-[#e5e5e5] text-[#5a5a5a] hover:bg-[#d9d9d9]"
            }`}
          >
            Used
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#e5e5e5]">
                <th className="text-left py-3 px-2 md:px-4 text-xs md:text-sm font-medium text-[#5a5a5a]">SR. NO.</th>
                <th className="text-left py-3 px-2 md:px-4 text-xs md:text-sm font-medium text-[#5a5a5a]">
                  BOOKING ID
                </th>
                <th className="text-left py-3 px-2 md:px-4 text-xs md:text-sm font-medium text-[#5a5a5a]">TRIP NAME</th>
                <th className="text-right py-3 px-2 md:px-4 text-xs md:text-sm font-medium text-[#5a5a5a]">POINTS</th>
              </tr>
            </thead>
            <tbody>
              {rewardHistory.map((item, index) => (
                <tr key={index} className="border-b border-[#e5e5e5] hover:bg-[#fff7f2] transition-colors">
                  <td className="py-4 px-2 md:px-4 text-xs md:text-sm text-[#333333]">{item.srNo}</td>
                  <td className="py-4 px-2 md:px-4 text-xs md:text-sm text-[#333333]">{item.bookingId}</td>
                  <td className="py-4 px-2 md:px-4 text-xs md:text-sm text-[#333333]">{item.tripName}</td>
                  <td className="py-4 px-2 md:px-4 text-right">
                    <span className="inline-block bg-[#d0ffed] text-[#0a8b7c] px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                      {item.points}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* How to earn Section */}
      <div className="bg-white rounded-lg p-6 md:p-8">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-2">
          How to earn <span className="text-[#e97737]">PocketClub Rewards?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Bookings Card */}
          <div className="border border-[#e5e5e5] rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="text-3xl md:text-4xl font-bold text-[#e97737]">1</div>
              <Luggage className="w-12 h-12 text-[#e97737]" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#1a2f46] mb-2">Bookings</h3>
            <p className="text-sm md:text-base text-[#5a5a5a] mb-4">Earn upto 2x bonus points with Gold Benefits.</p>
            <button className="text-[#e97737] font-medium text-sm md:text-base hover:underline">Book Now</button>
          </div>

          {/* Review Card */}
          <div className="border border-[#e5e5e5] rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="text-3xl md:text-4xl font-bold text-[#e97737]">2</div>
              <div className="flex gap-1">
                <Star className="w-6 h-6 fill-[#ffaa00] text-[#ffaa00]" />
                <Star className="w-6 h-6 fill-[#ffaa00] text-[#ffaa00]" />
                <Star className="w-6 h-6 fill-[#ffaa00] text-[#ffaa00]" />
              </div>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#1a2f46] mb-2">Review & Rate</h3>
            <p className="text-sm md:text-base text-[#5a5a5a] mb-4">Earn 100 points for every Trip you review.</p>
            <button className="text-[#e97737] font-medium text-sm md:text-base hover:underline">
              Review Your Trip
            </button>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white rounded-lg p-6 md:p-8">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-8">
          <span className="text-[#e97737]">PocketClub</span> Benefits
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="border border-[#e5e5e5] rounded-lg overflow-hidden h-full flex flex-col">
              {/* Header */}
              <div className={`bg-gradient-to-r ${benefit.color} text-white p-4 text-center relative`}>
                <h3 className="text-lg md:text-xl font-bold mb-2">{benefit.tier} Benefits</h3>
                <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center">
                  <Award
                    className={`w-6 h-6 ${benefit.bgColor} bg-clip-text text-transparent`}
                    style={{ WebkitTextFillColor: benefit.bgColor.replace("bg-", "#") }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-4 flex-1 flex flex-col">
                {/* Eligibility */}
                <div>
                  <p className="text-xs font-bold text-[#5a5a5a] mb-1">ELIGIBILITY</p>
                  <p className="text-xs md:text-sm text-[#333333]">{benefit.eligibility}</p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Points */}
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                      <svg className="w-10 h-10 text-[#ffaa00]" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="10" />
                        <text x="12" y="16" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
                          %
                        </text>
                      </svg>
                    </div>
                    <p className="text-xs text-[#333333]">{benefit.points}</p>
                  </div>

                  {/* Welcome */}
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                      <Award className="w-10 h-10 text-[#ffaa00]" />
                    </div>
                    <p className="text-xs text-[#333333]">{benefit.welcome}</p>
                  </div>

                  {/* Hotel */}
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                      <Hotel className="w-10 h-10 text-[#ffaa00]" />
                    </div>
                    <p className="text-xs text-[#333333]">{benefit.hotel}</p>
                  </div>

                  {/* Events */}
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                      <CalendarIcon className="w-10 h-10 text-[#ffaa00]" />
                    </div>
                    <p className="text-xs text-[#333333]">{benefit.events}</p>
                  </div>

                  {/* Room */}
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                      <Hotel className="w-10 h-10 text-[#ffaa00]" />
                    </div>
                    <p className="text-xs text-[#333333]">{benefit.room}</p>
                  </div>

                  {/* Travel */}
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                      <Car className="w-10 h-10 text-[#ffaa00]" />
                    </div>
                    <p className="text-xs text-[#333333]">{benefit.travel}</p>
                  </div>

                  {/* Flights */}
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                      <Plane className="w-10 h-10 text-[#ffaa00]" />
                    </div>
                    <p className="text-xs text-[#333333]">{benefit.flights}</p>
                  </div>

                  {/* Support */}
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                      <Headphones className="w-10 h-10 text-[#ffaa00]" />
                    </div>
                    <p className="text-xs text-[#333333]">{benefit.support}</p>
                  </div>
                </div>

                {/* Book Now Button */}
                <button className="w-full border-2 border-[#e97737] text-[#e97737] py-2 rounded-lg font-medium hover:bg-[#e97737] hover:text-white transition-colors mt-auto">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
