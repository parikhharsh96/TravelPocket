# Google OAuth Setup Instructions

> **Status**: ✅ Already implemented in the codebase
> **Purpose**: Documentation and setup reference

## Quick Start
The Google OAuth is already integrated. Just add your credentials to `.env.local`:

```env
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here
NEXTAUTH_SECRET=your_nextauth_secret_here
```

## 3. Google Console Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Go to Credentials → Create Credentials → OAuth 2.0 Client IDs
5. Set authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (development)
   - `https://yourdomain.com/api/auth/callback/google` (production)

## 4. Update Root Layout
Add the AuthProvider to your root layout:

```tsx
import { AuthProvider } from '@/components/providers/session-provider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
```

## 5. Backend API Endpoint
Your backend needs to handle the Google login endpoint:
`POST /api/Auth/google-login`

Request body:
```json
{
  "email": "user@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "googleId": "google_user_id",
  "source": "google"
}
```

## 6. Usage
The Google auth button is now integrated into the mobile number form and can be used anywhere by importing:
```tsx
import { GoogleAuthButton } from '@/components/auth/google-auth-button'
```