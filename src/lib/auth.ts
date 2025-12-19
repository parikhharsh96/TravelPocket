import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { API_BASE_URL, API_ENDPOINTS } from "./constants"
import { api } from "./api-client"

// Extend the built-in session types
declare module "next-auth" {
  interface User {
    userId?: string
  }
  interface Session {
    user: {
      userId?: string
      name?: string | null
      email?: string | null
      image?: string | null
    }
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    userId?: string
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "google") {
        try {
          console.log('=== Google OAuth Data ===');
          console.log('User:', JSON.stringify(user, null, 2));
          console.log('Account:', JSON.stringify(account, null, 2));
          console.log('Profile:', JSON.stringify(profile, null, 2));
          console.log('========================');
          
          console.log('Google sign-in attempt for:', user.email)
          
          // Get token using existing api-client (reuses cached token)
          const token = await api.refreshToken();
          
          if (!token) {
            console.error('Failed to get authentication token');
            return false;
          }
          
          // First check if user exists
          const checkResponse = await fetch(`${API_ENDPOINTS.auth.checkUserExist}?email=${user.email}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
          })
          console.log('User exist check status:', checkResponse.status)
          
          if (checkResponse.ok) {
            const checkData = await checkResponse.json()
            console.log('User exist response:', checkData)
            
            if (checkData.success && checkData.data?.isSuccess) {
              // User exists - get userId from the response
              if (checkData.data?.userId) {
                user.userId = checkData.data.userId.toString()
                console.log('Existing user login successful, userId:', user.userId)
                return true
              }
              console.log('User exists but no userId in response')
              return false
            } else {
              // User doesn't exist - create new user
              console.log('User does not exist, creating new user')
              const createResponse = await fetch(`${API_BASE_URL}/api/customerhome/add-customer-profile`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                  'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                  email: user.email,
                  firstName: user.name?.split(' ')[0] || '',
                  lastName: user.name?.split(' ').slice(1).join(' ') || '',
                  phone: null,
                  source: 'google'
                }),
              })
              
              console.log('Create user status:', createResponse.status)
              
              if (createResponse.ok) {
                const createData = await createResponse.json()
                console.log('Create user response:', createData)
                if (createData.success && createData.data?.userId) {
                  user.userId = createData.data.userId.toString()
                  console.log('New user created successfully, userId:', user.userId)
                  return true
                }
              }
            }
          } else {
            console.log('User exist API failed with status:', checkResponse.status)
          }
          return false
        } catch (error) {
          console.error('Google sign-in error:', error)
          return false
        }
      }
      return true
    },
    async jwt({ token, user }) {
      if (user) {
        token.userId = user.userId
      }
      return token
    },
    async session({ session, token }) {
      session.user.userId = token.userId as string
      return session
    },
  },
  pages: {
    signIn: '/signup',
    error: '/signup',
  },
}