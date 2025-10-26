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
      <h2 className="text-2xl md:text-3xl font-bold text-[#1a2f46] mb-6">Logout</h2>

      <div className="bg-white rounded-lg border border-[#e5e5e5] p-6 md:p-12">
        <h3 className="text-2xl md:text-3xl font-serif text-[#1a2f46] mb-8 md:mb-12">
          Are you sure you want to Logout?
        </h3>

        <button
          onClick={handleLogout}
          className="flex items-center justify-center gap-3 bg-[#cf3434] hover:bg-[#b82e2e] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-base md:text-lg"
        >
          <LogOut className="w-5 h-5" />
          LOGOUT
        </button>
      </div>
    </div>
  )
}
