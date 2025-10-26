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
    { id: "overview", icon: LayoutGrid, label: "Overview" },
    {
      id: "bookings",
      icon: Calendar,
      label: "Bookings",
      subItems: ["Active Bookings", "Pending Bookings", "Past Bookings"],
    },
    { id: "update", icon: Send, label: "Send Update Request" },
    { id: "rewards", icon: Award, label: "PocketClub Rewards" },
    { id: "travellers", icon: Users, label: "Saved Travellers" },
    { id: "testimonials", icon: MessageSquare, label: "My Testimonials" },
    { id: "address", icon: MapPin, label: "My Address" },
    { id: "logout", icon: LogOut, label: "Logout" },
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
          p-4 md:p-6 pt-24 lg:pt-6 z-40
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
                className={`w-full flex items-center gap-3 px-3 md:px-4 py-3 md:py-4 text-left transition-colors text-sm md:text-base ${
                  item.id === "bookings" ? "" : "border-b border-[#e5e5e5]"
                } ${
                  activeItem === item.id ? "bg-white text-[#e97737] font-medium" : "text-[#333333] hover:bg-white/50"
                }`}
                onClick={() => handleMenuClick(item.id)} // Use new handler
              >
                <item.icon className="w-4 h-4 md:w-5 md:h-5" />
                <span>{item.label}</span>
              </button>

              {item.id === "overview" && (
                <div className="p-3 md:p-4 border-b border-[#e5e5e5]">
                  <button
                    onClick={() => handleMenuClick("user-details")} // Make user profile clickable
                    className={`w-full text-left hover:bg-white/50 rounded-lg p-2 transition-colors ${
                      activeItem === "user-details" ? "bg-white" : ""
                    }`}
                  >
                    <div className="flex items-center gap-2 text-[#333333] mb-3">
                      <User className="w-4 h-4" />
                      <span className="font-medium text-sm md:text-base">Shivam Tripathi</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs md:text-sm text-[#5a5a5a] mb-2">
                      <Phone className="w-4 h-4" />
                      <span>+91 98765 43210</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs md:text-sm text-[#5a5a5a] mb-3">
                      <Mail className="w-4 h-4" />
                      <span className="break-all">shivamtripathi@gmail.com</span>
                    </div>
                    <div className="pt-3 border-t border-[#e5e5e5] space-y-2">
                      <div className="flex items-center justify-between text-xs md:text-sm">
                        <span className="text-[#5a5a5a]">Reward Level</span>
                        <div className="flex items-center gap-1">
                          <Award className="w-4 h-4 text-[#ffaa00]" />
                          <span className="font-medium text-[#333333]">Gold</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs md:text-sm">
                        <span className="text-[#5a5a5a]">Reward Points</span>
                        <span className="font-bold text-[#333333]">34900</span>
                      </div>
                    </div>
                  </button>
                </div>
              )}

              {item.subItems && item.id === "bookings" && (
                <div className="border-b border-[#e5e5e5]">
                  <div className="ml-8 md:ml-12 py-2 space-y-1">
                    {item.subItems.map((subItem) => (
                      <button
                        key={subItem}
                        className={`w-full text-left px-3 md:px-4 py-2 text-xs md:text-sm transition-colors ${
                          activeItem === subItem ? "text-[#e97737] font-medium" : "text-[#5a5a5a] hover:text-[#e97737]"
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
