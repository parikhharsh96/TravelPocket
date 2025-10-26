import { Bell, ExternalLink } from "lucide-react"

interface Notification {
  id: number
  title: string
  description: string
  timestamp: string
  status?: "reserved" | "info"
}

const notifications: Notification[] = [
  {
    id: 1,
    title: "Your Booking Status:",
    description: "Seat Reserved!",
    timestamp: "1 day ago",
    status: "reserved",
  },
  {
    id: 2,
    title: "Upload Passport for all Travellers is mandatory of Kailar Mansarovar yatra",
    description: "",
    timestamp: "1 day ago",
    status: "info",
  },
  {
    id: 3,
    title: "Upload Passport for all Travellers is mandatory of Kailar Mansarovar yatra",
    description: "",
    timestamp: "1 day ago",
    status: "info",
  },
  {
    id: 4,
    title: "Pay Remaining Amount to Complete your Booking Processs and receive confirmation",
    description: "",
    timestamp: "1 day ago",
    status: "info",
  },
]

export function NotificationsPanel() {
  return (
    <div className="bg-white rounded-lg border border-[#e5e5e5] p-4 md:p-6">
      <div className="flex items-center justify-between mb-3 md:mb-4">
        <div className="flex items-center gap-2">
          <Bell className="w-4 h-4 md:w-5 md:h-5 text-[#1a2f46]" />
          <h3 className="text-base md:text-lg font-semibold text-[#1a2f46]">Notifications</h3>
        </div>
        <ExternalLink className="w-4 h-4 text-[#5a5a5a] cursor-pointer hover:text-[#e97737]" />
      </div>

      <div className="space-y-3 md:space-y-4">
        {notifications.map((notification) => (
          <div key={notification.id} className="pb-3 md:pb-4 border-b border-[#e5e5e5] last:border-0">
            <div className="flex items-start justify-between gap-2 md:gap-3">
              <div className="flex-1">
                <p className="text-xs md:text-sm text-[#333333] mb-1">{notification.title}</p>
                {notification.description && (
                  <div className="inline-flex items-center gap-2 bg-[#fff7f2] border border-[#e97737] rounded-full px-2 md:px-3 py-1">
                    <div className="w-2 h-2 rounded-full bg-[#e97737]"></div>
                    <span className="text-xs font-medium text-[#e97737]">{notification.description}</span>
                  </div>
                )}
              </div>
              <span className="text-xs text-[#bbbbbb] whitespace-nowrap">{notification.timestamp}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
