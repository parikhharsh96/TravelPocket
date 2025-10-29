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
      pointsIcon: "/images/account/rewards.svg",
      welcome: "Welcome bonus (50 points)",
      welcomeIcon: "/images/account/welcome_bonus.svg",
      hotel: "Flat 10% off on Hotel Stays",
      hotelIcon: "/images/account/hotel.svg",
      events: "Events, Sale and Special Promotions",
      eventsIcon: "/images/account/promotions_event.svg",
      room: "Guaranteed Room and Meals Upgrade",
      roomIcon: "/images/account/meal.svg",
      travel: "Earn Travel Points on outstation cabs",
      travelIcon: "/images/account/travel.svg",
      flights: "Free Domestic Flights 1 Seat / year",
      flightsIcon: "/images/account/flights.svg",
      support: "Priority Customer Support",
      supportIcon: "/images/account/customer_support.svg",
      iconSrc: "/images/account/bronze.svg"
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
      iconSrc: "/images/account/silver.svg",
      pointsIcon: "/images/account/rewards.svg",
      welcomeIcon: "/images/account/welcome_bonus.svg",
      hotelIcon: "/images/account/hotel.svg",
      eventsIcon: "/images/account/promotions_event.svg",
      roomIcon: "/images/account/meal.svg",
      travelIcon: "/images/account/travel.svg",
      flightsIcon: "/images/account/flights.svg",
      supportIcon: "/images/account/customer_support.svg",
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
      iconSrc: "/images/account/gold.svg",
      pointsIcon: "/images/account/rewards.svg",
      welcomeIcon: "/images/account/welcome_bonus.svg",
      hotelIcon: "/images/account/hotel.svg",
      eventsIcon: "/images/account/promotions_event.svg",
      roomIcon: "/images/account/meal.svg",
      travelIcon: "/images/account/travel.svg",
      flightsIcon: "/images/account/flights.svg",
      supportIcon: "/images/account/customer_support.svg",
    },
  ]

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Page Title */}
      <h2 className="text-black font-['Figtree'] text-[18px] md:text-[20px] font-semibold leading-normal">PocketClub Rewards</h2>
      <div className="bg-white rounded-lg border border-[#D2D8E4] p-4">
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
            <h1 className="text-[#FFF7F2] font-['Playfair_Display'] text-[48px] md:text-[62px] font-semibold leading-[80px]">
              Pocket<span className="text-[#29A4C1]">Club</span>
            </h1>
            <p className="text-[#FFF7F2] font-['Figtree'] text-[12px] md:text-[14px] font-light leading-normal mb-6 md:mb-8">
              Enjoy discounts on every booking as a member!
            </p>

            <h2 className="text-white font-['Playfair_Display'] text-[20px] md:text-[22px] font-semibold leading-normal mb-2">Welcome, Shivam Tripathi!</h2>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-white font-['Figtree'] text-[14px] md:text-[16px] font-normal leading-[19px]">Your Reward Points</span>
              <span className="text-white text-right font-['Figtree'] text-[14px] md:text-[16px] font-bold leading-normal ml-2">3400</span>
            </div>

            <button className="rounded-[4px] bg-[#FFF0E8] shadow-[0_4px_4px_0_rgba(0,0,0,0.10)] px-4 md:px-6 py-2 md:py-3 transition-colors mb-3">
              <div className="flex flex gap-[10px] items-center">
                <img src="/images/account/question_b.svg" className="h-[14px] w-[14px] md:h-[16px] md:w-[16px]" />
                <div className="text-[#1A2F46] font-['Figtree'] text-[12px] font-semibold leading-normal">How to earn PocketClub Rewards?</div>
              </div>
            </button>

            <p className="text-white font-['Figtree'] text-[12px] font-normal leading-[18px]">Points to unlock next level <span className="font-medium">5</span><span className="font-bold">000</span></p>
          </div>
        </div>

        {/* Reward Level Section */}
        <div className="bg-white rounded-lg p-6 md:p-8">
          <h2 className="text-black text-center font-['Playfair_Display'] text-[20px] md:text-[22px] font-semibold leading-normal mb-6 md:mb-8">Reward Level</h2>

          <div className="flex items-center justify-center gap-4 md:gap-8 lg:gap-16 mb-6 md:mb-8 relative">
            {/* Progress Line */}
            <div className="absolute top-6 left-1/4 right-1/4 h-0.5 border-t-2 border-dashed border-[#d9d9d9] -z-10" />

            {/* Bronze */}
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center mb-2">
                {/* <Award className="w-6 h-6 md:w-8 md:h-8 text-white" /> */}
                <img src="/images/account/bronze.svg" className="" />
              </div>
              <p className="text-[#7D7D7D] text-center font-['Figtree'] text-[18px] md:text-[20px] font-normal leading-normal">Bronze</p>
              <p className="text-[#7D7D7D] text-center font-['Figtree'] text-[10px] md:text-[12px] font-normal leading-normal">₹5000</p>
            </div>

            {/* Silver */}
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center mb-2">
                {/* <Award className="w-6 h-6 md:w-8 md:h-8 text-white" /> */}
                <img src="/images/account/silver.svg" className="" />
              </div>
              <p className="text-[#7D7D7D] text-center font-['Figtree'] text-[18px] md:text-[20px] font-normal leading-normal">Silver</p>
              <p className="text-[#7D7D7D] text-center font-['Figtree'] text-[10px] md:text-[12px] font-normal leading-normal">₹30,000</p>
            </div>

            {/* Gold */}
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center mb-2">
                {/* <Award className="w-6 h-6 md:w-8 md:h-8 text-white" /> */}
                <img src="/images/account/gold.svg" className="" />
              </div>
              <p className="text-black text-center font-['Figtree'] text-[18px] md:text-[20px] font-semibold leading-normal">Gold</p>
              <p className="text-black text-center font-['Figtree'] text-[10px] md:text-[12px] font-normal leading-normal">₹75,000</p>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="bg-[#e97737] rounded-lg px-6 md:px-8 py-2 md:py-3 hover:bg-[#d1013e] transition-colors flex items-center gap-[10px] cursor-pointer">
              <div className="text-white font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-[18px]">View Benefits</div>
              {/* <ChevronDown className="w-4 h-4" /> */}
              <img src="/images/account/down_arrow_white.svg" className="" />
            </button>
          </div>
        </div>

        {/* Reward History Section */}
        <div className="bg-white rounded-lg p-6 md:p-8">
          <h2 className="text-black text-center font-['Playfair_Display'] text-[20px] md:text-[22px] font-semibold leading-normal] text-center mb-6">Reward History</h2>

          {/* Tabs */}
          <div className="flex justify-center gap-2 mb-6">
            <div className="rounded-[8px] bg-white shadow-[0_4px_10px_0_rgba(0,0,0,0.16)] px-8 py-2">
              <div className="flex flex-row gap-4 items-center">
                <button
                  onClick={() => setActiveTab("earned")}
                  className={`px-6 md:px-8 py-2 md:py-3 rounded-lg transition-colors cursor-pointer ${activeTab === "earned" ? "bg-[#1A2F46] text-white" : "bg-[#e5e5e5] text-[#5a5a5a] hover:bg-[#d9d9d9]"
                    }`}
                >
                  <span className="font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-[21px] capitalize">Earned</span>
                </button>
                <button
                  onClick={() => setActiveTab("used")}
                  className={`px-6 md:px-8 py-2 md:py-3 rounded-lg transition-colors cursor-pointer ${activeTab === "used" ? "bg-[#1A2F46]  text-white" : "bg-[#e5e5e5] text-[#5a5a5a] hover:bg-[#d9d9d9]"
                    }`}
                >
                  <span className="font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-[21px] capitalize">Used</span>
                </button>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#FFF7F2]">
                <tr className="border-b border-[#e5e5e5]">
                  <th className="text-left py-3 px-2 md:px-4 text-[#1A2F46] font-['Figtree'] text-[10px] md:text-[12px] font-semibold leading-normal uppercase">SR. NO.</th>
                  <th className="text-left py-3 px-2 md:px-4 text-[#1A2F46] font-['Figtree'] text-[10px] md:text-[12px] font-semibold leading-normal uppercase">
                    BOOKING ID
                  </th>
                  <th className="text-left py-3 px-2 md:px-4 text-[#1A2F46] font-['Figtree'] text-[10px] md:text-[12px] font-semibold leading-normal uppercase">TRIP NAME</th>
                  <th className="text-center py-3 px-2 md:px-4 text-[#1A2F46] font-['Figtree'] text-[10px] md:text-[12px] font-semibold leading-normal uppercase">POINTS</th>
                </tr>
              </thead>
              <tbody>
                {rewardHistory.map((item, index) => (
                  <tr key={index} className="border-b border-[#e5e5e5] hover:bg-[#fff7f2] transition-colors">
                    <td className="py-4 px-2 md:px-4 text-black font-['Figtree'] text-[12px] md:text-[14px] font-normal leading-normal">{item.srNo}</td>
                    <td className="py-4 px-2 md:px-4 text-black font-['Figtree'] text-[12px] md:text-[14px] font-normal leading-normal">{item.bookingId}</td>
                    <td className="py-4 px-2 md:px-4 text-black font-['Figtree'] text-[12px] md:text-[14px] font-normal leading-normal">{item.tripName}</td>
                    <td className="py-4 px-2 md:px-4">
                      <div className="inline-block bg-[#D0FFED] px-3 py-1 rounded-[10px] w-full text-center">
                        <span className="text-[#0A8B7C] font-['Figtree'] text-[10px] md:text-[12px] font-semibold leading-normal">{item.points}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* How to earn Section */}
        <div className="bg-white rounded-lg p-6 md:p-8">
          <h2 className="text-[#1A2F46] text-center font-['Playfair_Display'] text-[20px] md:text-[22px] font-semibold leading-normal text-center mb-2">
            How to earn <span className="text-[#E97737]">PocketClub Rewards?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Bookings Card */}
            <div className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="relative bg-[#FFF0E8] w-[80px] h-[80px] rounded-[40px] shrink-0">
                  {/* <Luggage className="w-12 h-12 text-[#e97737]" /> */}
                  {/* <img src="/images/account/tile_orange.png" className="w-[80px] h-[80px] md:w-[80px] md:h-[80px]"/> */}
                  <div className="absolute top-[-10px] text-[#E97737] text-center font-['Playfair_Display'] text-[42px] font-semibold leading-[42px]">1</div>
                  <img src="/images/account/luggage_.svg" className="absolute top-3.5 left-4 w-[44px] h-[44px] md:w-[44px] md:h-[44px]" />
                </div>
                <div className="">
                  <h3 className="text-black font-['Figtree'] text-[16px] md:text-[18px] font-semibold leading-[27px] mb-2">Bookings</h3>
                  <p className="text-[#333333] font-['Figtree'] text-[10px] md:text-[12px] font-normal leading-[18px]">Earn upto 2x bonus points with Gold Benefits.</p>
                  <button className="text-[#1A2F46] font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-[18px] hover:underline decoration-solid decoration-current decoration-1 underline-offset-auto cursor-pointer">Book Now</button>
                </div>
              </div>

            </div>

            {/* Review Card */}
            <div className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="relative">
                  {/* <div className="text-3xl md:text-4xl font-bold text-[#e97737]">2</div>
                  <div className="flex gap-1">
                    <Star className="w-6 h-6 fill-[#ffaa00] text-[#ffaa00]" />
                    <Star className="w-6 h-6 fill-[#ffaa00] text-[#ffaa00]" />
                    <Star className="w-6 h-6 fill-[#ffaa00] text-[#ffaa00]" />
                  </div> */}
                  <div className="absolute top-[-10px] text-[#E97737] text-center font-['Playfair_Display'] text-[42px] font-semibold leading-[42px]">2</div>
                  <img src="/images/account/review_icon_.svg" className="w-[80px] h-[80px] md:w-[80px] md:h-[80px]" />
                </div>

                <div className="">
                  <h3 className="text-black font-['Figtree'] text-[16px] md:text-[18px] font-semibold leading-[27px] mb-2">Review & Rate</h3>
                  <p className="text-[#333333] font-['Figtree'] text-[10px] md:text-[12px] font-normal leading-[18px]">Earn 100 points for every Trip you review.</p>
                  <button className="text-[#1A2F46] font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-[18px] hover:underline decoration-solid decoration-current decoration-1 underline-offset-auto cursor-pointer">
                    Review Your Trip
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-lg p-6 md:p-8">
          <h2 className="text-[#E97737] text-center font-['Playfair_Display'] text-[20px] md:text-[22px] font-semibold leading-normal text-center mb-8">
            PocketClub<span className="text-[#1A2F46]"> Benefits</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="border border-[#e5e5e5] rounded-lg overflow-hidden h-full flex flex-col">
                {/* Header */}
                <div className={`bg-gradient-to-r ${benefit.color} text-white p-4 text-center relative`}>
                  <h3 className="text-white text-center font-['Figtree'] text-[16px] md:text-[18px] font-semibold leading-[22px] mb-2">{benefit.tier} <span className="font-normal">Benefits</span></h3>
                  <div className="flex items-center justify-center">
                    {/* <Award
                      className={`w-6 h-6 ${benefit.bgColor} bg-clip-text text-transparent`}
                      style={{ WebkitTextFillColor: benefit.bgColor.replace("bg-", "#") }}
                    /> */}
                    <img src={benefit.iconSrc} className="" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-4 flex-1 flex flex-col">
                  {/* Eligibility */}
                  <div>
                    <p className="text-black text-center font-['Figtree'] text-[10px] md:text-[12px] font-normal leading-[16px] uppercase mb-1">ELIGIBILITY</p>
                    <p className="text-black text-center font-['Figtree'] text-[12px] md:text-[14px] font-medium leading-[20px]">{benefit.eligibility}</p>
                  </div>

                  {/* Benefits Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Points */}
                    <div className="text-center">
                      <div className="mb-2 flex items-center justify-center">
                        {/* <svg className="w-10 h-10 text-[#ffaa00]" viewBox="0 0 24 24" fill="currentColor">
                          <circle cx="12" cy="12" r="10" />
                          <text x="12" y="16" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
                            %
                          </text>
                        </svg> */}
                        <img src={benefit.pointsIcon} className="" />
                      </div>
                      <p className="text-black text-center font-['Figtree'] text-[10px] md:text-[11px] font-medium leading-[16px]">{benefit.points}</p>
                    </div>

                    {/* Welcome */}
                    <div className="text-center">
                      <div className="mb-2 flex items-center justify-center">
                        {/* <Award className="w-10 h-10 text-[#ffaa00]" /> */}
                        <img src={benefit.welcomeIcon} className="" />
                      </div>
                      <p className="text-black text-center font-['Figtree'] text-[10px] md:text-[11px] font-medium leading-[16px]">{benefit.welcome}</p>
                    </div>

                    {/* Hotel */}
                    <div className="text-center">
                      <div className="mb-2 flex items-center justify-center">
                        {/* <Hotel className="w-10 h-10 text-[#ffaa00]" /> */}
                        <img src={benefit.hotelIcon} className="" />
                      </div>
                      <p className="text-black text-center font-['Figtree'] text-[10px] md:text-[11px] font-medium leading-[16px]">{benefit.hotel}</p>
                    </div>

                    {/* Events */}
                    <div className="text-center">
                      <div className="mb-2 flex items-center justify-center">
                        {/* <CalendarIcon className="w-10 h-10 text-[#ffaa00]" /> */}
                        <img src={benefit.eventsIcon} className="" />
                      </div>
                      <p className="text-black text-center font-['Figtree'] text-[10px] md:text-[11px] font-medium leading-[16px]">{benefit.events}</p>
                    </div>

                    {/* Room */}
                    <div className="text-center">
                      <div className="mb-2 flex items-center justify-center">
                        {/* <Hotel className="w-10 h-10 text-[#ffaa00]" /> */}
                        <img src={benefit.roomIcon} className="" />
                      </div>
                      <p className="text-black text-center font-['Figtree'] text-[10px] md:text-[11px] font-medium leading-[16px]">{benefit.room}</p>
                    </div>

                    {/* Travel */}
                    <div className="text-center">
                      <div className="mb-2 flex items-center justify-center">
                        {/* <Car className="w-10 h-10 text-[#ffaa00]" /> */}
                        <img src={benefit.travelIcon} className="" />
                      </div>
                      <p className="text-black text-center font-['Figtree'] text-[10px] md:text-[11px] font-medium leading-[16px]">{benefit.travel}</p>
                    </div>

                    {/* Flights */}
                    <div className="text-center">
                      <div className="mb-2 flex items-center justify-center">
                        {/* <Plane className="w-10 h-10 text-[#ffaa00]" /> */}
                        <img src={benefit.flightsIcon} className="" />
                      </div>
                      <p className="text-black text-center font-['Figtree'] text-[10px] md:text-[11px] font-medium leading-[16px]">{benefit.flights}</p>
                    </div>

                    {/* Support */}
                    <div className="text-center">
                      <div className="mb-2 flex items-center justify-center">
                        {/* <Headphones className="w-10 h-10 text-[#ffaa00]" /> */}
                        <img src={benefit.supportIcon} className="" />
                      </div>
                      <p className="text-black text-center font-['Figtree'] text-[10px] md:text-[11px] font-medium leading-[16px]">{benefit.support}</p>
                    </div>
                  </div>

                  {/* Book Now Button */}
                  <button className="w-full rounded-[4px] border border-[#e97737] py-2 hover:bg-[#e97737] hover:text-white transition-colors mt-auto">
                    <span className="text-[#1A2F46] text-center font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-normal">Book Now</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
