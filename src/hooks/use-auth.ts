"use client"

import { useSession } from "next-auth/react"
import { useState, useEffect } from "react"

interface User {
  id: string
  email?: string
  name?: string
  phone?: string
  loginMethod: 'google' | 'mobile'
}

export function useAuth() {
  const { data: session, status } = useSession()
  const [mobileUser, setMobileUser] = useState<User | null>(null)

  // Check for mobile login user in sessionStorage
  useEffect(() => {
    const savedUser = sessionStorage.getItem('mobile_user')
    if (savedUser) {
      setMobileUser(JSON.parse(savedUser))
    }
  }, [])

  // Determine current user (Google or Mobile)
  const user: User | null = session?.user 
    ? {
        id: session.user.userId || session.user.email || '',
        email: session.user.email || undefined,
        name: session.user.name || undefined,
        loginMethod: 'google'
      }
    : mobileUser

  const isAuthenticated = !!user
  const isLoading = status === "loading"

  // Login with mobile (call after OTP verification)
  const loginWithMobile = (userData: any) => {
    const user: User = {
      id: userData.userId || userData.phone,
      email: userData.email,
      name: `${userData.firstName} ${userData.lastName}`,
      phone: userData.phone,
      loginMethod: 'mobile'
    }
    setMobileUser(user)
    sessionStorage.setItem('mobile_user', JSON.stringify(user))
  }

  // Logout (works for both)
  const logout = async () => {
    if (session) {
      const { signOut } = await import("next-auth/react")
      await signOut({ redirect: false })
    }
    setMobileUser(null)
    sessionStorage.removeItem('mobile_user')
  }

  return {
    user,
    isAuthenticated,
    isLoading,
    loginWithMobile,
    logout
  }
}