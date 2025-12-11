"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MobileNumberForm } from "./mobile-number-form"
import { OtpVerificationForm } from "./otp-verification-form"
import { ProfileCompletionForm } from "./profile-completion-form"

export interface SignupData {
  countryCode: string
  mobileNumber: string
  otp: string
  email: string
  firstName: string
  lastName: string
  marketingConsent: boolean
  whatsappConsent: boolean
}

interface SignupModalProps {
  children: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function SignupModal({ children, open, onOpenChange }: SignupModalProps) {
  const [step, setStep] = useState(1)
  const [signupData, setSignupData] = useState<Partial<SignupData>>({
    countryCode: "+91",
    marketingConsent: true,
    whatsappConsent: true,
  })

  const handleNext = (data: Partial<SignupData>) => {
    setSignupData((prev) => ({ ...prev, ...data }))
    setStep((prev) => prev + 1)
  }

  const handleBack = () => {
    setStep((prev) => prev - 1)
  }

  const handleComplete = (data: Partial<SignupData>) => {
    const finalData = { ...signupData, ...data }
    console.log("Signup completed:", finalData)
    // Handle final signup submission here
    onOpenChange?.(false)
    // Reset form
    setStep(1)
    setSignupData({
      countryCode: "+91",
      marketingConsent: true,
      whatsappConsent: true,
    })
  }

  const handleOpenChange = (newOpen: boolean) => {
    onOpenChange?.(newOpen)
    if (!newOpen) {
      // Reset form when modal closes
      setStep(1)
      setSignupData({
        countryCode: "+91",
        marketingConsent: true,
        whatsappConsent: true,
      })
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="h-[70vh] overflow-hidden p-0" width="w-[60vw] max-w-none" showCloseButton={true}>
        <DialogTitle className="sr-only">Sign up for TravelPocket</DialogTitle>
        <div className="h-full flex">
          {/* Left Column - Background Image (hidden on mobile and tablet) */}
          <div className="hidden lg:flex lg:w-5/12 relative">
            <img
              src="/images/signup-bg.svg"
              alt="Mountain landscape with prayer flags"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column - Form Content */}
          <div className="w-full lg:w-7/12 bg-[#ffffff] relative">
            <ScrollArea className="h-[70vh] w-full">
              <div className="flex items-center justify-center min-h-[70vh] p-6 py-8">
                <div className="w-full max-w-md">
                  {step === 1 && <MobileNumberForm initialData={signupData} onNext={handleNext} />}
                  {step === 2 && (
                    <OtpVerificationForm
                      mobileNumber={`${signupData.countryCode} ${signupData.mobileNumber}`}
                      onNext={handleNext}
                      onBack={handleBack}
                    />
                  )}
                  {step === 3 && (
                    <ProfileCompletionForm initialData={signupData} onComplete={handleComplete} onBack={handleBack} />
                  )}
                </div>
              </div>
            </ScrollArea>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}