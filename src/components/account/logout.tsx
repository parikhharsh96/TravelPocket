"use client"

import { LogOut } from "lucide-react"

export function Logout() {
  const handleLogout = () => {
    // TODO: Implement actual logout logic
    // - Clear session/tokens
    // - Clear local storage
    // - Redirect to login page
    alert("Logout functionality will be implemented here")
    // Example: router.push('/login')
  }

  return (
    <div className="w-full">
      <h2 className="text-black font-['Figtree'] text-[18px] md:text-[20px] font-semibold leading-normal mb-6">Logout</h2>

      <div className="bg-white rounded-lg border border-[#D2D8E4] p-6 md:p-12">
        <h3 className="text-[#1A2F46] font-['Playfair_Display'] text-[18px] md:text-[22px] font-semibold leading-normal mb-8 md:mb-10">
          Are you sure you want to Logout?
        </h3>

        <button
          onClick={handleLogout}
          className="flex items-center justify-center gap-3 rounded-[6px] bg-[#CF3434] hover:bg-[#b82e2e] px-8 py-4 transition-colors"
        >
          {/* <LogOut className="w-5 h-5" /> */}
          <img src="/images/account/exit_to_app_white.svg" className="h-[20px] w-[20px] lg:h-[24px] lg:w-[24px]" />
          <span className="text-white font-['Figtree'] text-xs lg:text-sm font-semibold leading-[24px] uppercase">LOGOUT</span>
        </button>
      </div>
    </div>
  )
}
