"use client"
import {
  LayoutGrid,
  User,
  Calendar,
  Send,
  Award,
  Users,
  MessageSquare,
  MapPin,
  LogOut,
  Phone,
  Mail,
  X,
} from "lucide-react"

interface AccountSidebarProps {
  activeItem?: string
  isOpen?: boolean
  onClose?: () => void
  onMenuItemClick?: (itemId: string) => void // Added callback for menu item clicks
}

export function AccountSidebar({
  activeItem = "overview",
  isOpen = false,
  onClose,
  onMenuItemClick,
}: AccountSidebarProps) {
  const menuItems = [
    { id: "overview", icon: LayoutGrid, label: "Overview", iconSrc: "/images/account/grid_view.svg" },
    {
      id: "bookings",
      icon: Calendar,
      iconSrc: "/images/account/luggage_orange.svg",
      label: "Bookings",
      subItems: ["Active Bookings", "Pending Bookings", "Past Bookings"],
    },
    { id: "update", icon: Send, label: "Send Update Request", iconSrc: "/images/account/autorenew.svg" },
    { id: "rewards", icon: Award, label: "PocketClub Rewards", iconSrc: "/images/account/chess_queen.svg" },
    { id: "travellers", icon: Users, label: "Saved Travellers", iconSrc: "/images/account/groups.svg" },
    { id: "testimonials", icon: MessageSquare, label: "My Testimonials", iconSrc: "/images/account/reviews.svg" },
    { id: "address", icon: MapPin, label: "My Address", iconSrc: "/images/account/location_on.svg" },
    { id: "logout", icon: LogOut, label: "Logout", iconSrc: "/images/account/exit_to_app.svg" },
  ]

  const handleMenuClick = (itemId: string) => {
    if (onMenuItemClick) {
      onMenuItemClick(itemId)
    }
    if (onClose) {
      onClose()
    }
  }

  return (
    <>
      {isOpen && <div className="lg:hidden fixed inset-0 bg-black/50 z-40" onClick={onClose} />}

      <aside
        className={`
          fixed lg:static top-0 left-0 h-full lg:h-auto
          w-80 lg:w-80 bg-[#fff7f2] rounded-none lg:rounded-lg 
          p-4 md:p-6 pt-16 lg:pt-6 z-40
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          overflow-y-auto
        `}
      >
        <button
          onClick={onClose}
          className="lg:hidden absolute top-4 right-4 p-2 rounded-lg hover:bg-white/50 transition-colors"
          aria-label="Close sidebar"
        >
          <X className="w-5 h-5 text-[#333333]" />
        </button>

        <nav className="space-y-0">
          {menuItems.map((item, index) => (
            <div key={item.id}>
              <button
                className={`w-full flex items-center gap-3 px-3 md:px-4 py-3 md:py-4 text-left transition-colors text-[14px] md:text-[16px] font-['Figtree'] not-italic leading-normal ${item.id === "bookings" ? "" : "border-b border-[#e5e5e5]"
                  } ${activeItem === item.id ? "text-[#E97737] font-bold" : "text-[#333333] font-normal"
                  }`}
                onClick={() => handleMenuClick(item.id)} // Use new handler
              >
                {/* <item.icon className="w-4 h-4 md:w-5 md:h-5" /> */}
                <img src={item.iconSrc} className="h-[18px] w-[18px] lg:h-[24px] lg:w-[24px]" />
                <div>{item.label}</div>
              </button>

              {item.id === "overview" && (
                <div className="p-3 md:p-4 border-b border-[#e5e5e5]">
                  <button
                    onClick={() => handleMenuClick("user-details")} // Make user profile clickable
                    className={`w-full text-left rounded-lg transition-colors ${activeItem === "user-details" ? "" : ""
                      }`}
                  >
                    <div className="flex items-center gap-2 text-[#333333] mb-3">
                      {/* <User className="w-6 h-6 text-[#E97737]" /> */}
                      <img src="/images/account/person_orange.svg" className="h-[18px] w-[18px] lg:h-[24px] lg:w-[24px]" />
                      <div className={`font-['Figtree'] text-[14px] lg:text-[16px] leading-normal ${activeItem === "user-details" ? "text-[#E97737] font-bold" : "text-black font-normal"}`}>Shivam Tripathi</div>
                    </div>

                    <div className="flex items-center gap-2 mb-2 ml-[30px]">
                      {/* <Phone className="w-4 h-4" /> */}
                      <img src="/images/account/call_black.svg" className="h-[18px] w-[18px] lg:h-[24px] lg:w-[24px]" />
                      <div className="text-[#5A5A5A] font-['Figtree'] text-[10px] lg:text-[12px] font-normal leading-normal">+91 98765 43210</div>
                    </div>
                    <div className="flex items-center gap-2 mb-3 ml-[30px]">
                      {/* <Mail className="w-4 h-4" /> */}
                      <img src="/images/account/mail_black.svg" className="h-[18px] w-[18px] lg:h-[24px] lg:w-[24px]" />
                      <span className="break-all text-[#5A5A5A] font-['Figtree'] text-[10px] lg:text-[12px] font-normal leading-normal">shivamtripathi@gmail.com</span>
                    </div>
                    <div className="p-3 rounded-[6px] bg-white space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[#5A5A5A] font-['Figtree'] text-[10px] lg:text-[12px] font-normal leading-normal">Reward Level</span>
                        <div className="flex items-center gap-2">
                          {/* <Award className="w-4 h-4 text-[#ffaa00]" /> */}
                          <img src="/images/account/icon.svg" className="h-[24px] w-[24px] lg:h-[30px] lg:w-[30px]" />
                          <span className="text-black font-['Figtree'] text-[12px] lg:text-[14px] font-semibold leading-normal">Gold</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#5A5A5A] font-['Figtree'] text-[10px] lg:text-[12px] font-normal leading-normal">Reward Points</span>
                        <span className="text-black font-['Figtree'] text-[12px] lg:text-[14px] font-semibold leading-normal">34900</span>
                      </div>
                    </div>
                  </button>
                </div>
              )}

              {item.subItems && item.id === "bookings" && (
                <div className="border-b border-[#e5e5e5]">
                  <div className="ml-8 md:ml-12 pb-2 space-y-1">
                    {item.subItems.map((subItem) => (
                      <button
                        key={subItem}
                        className={`w-full text-left px-3 md:px-4 py-2 font-['Figtree'] text-[14px] leading-normal transition-colors mb-0 ${activeItem === subItem ? "text-[#e97737] font-bold" : "text-[#5a5a5a] font-normal hover:text-[#e97737]"
                          }`}
                        onClick={() => handleMenuClick(subItem)}
                      >
                        {subItem}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </>
  )
}
