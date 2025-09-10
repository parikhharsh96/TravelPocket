"use client"

import { useState } from "react"
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

export function SignupFlow() {
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
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Column - Background Image (hidden on mobile) */}
      <div className="hidden md:flex md:w-2/5 relative">
        <img
          src="/images/signup-bg.svg"
          alt="Mountain landscape with prayer flags"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Column - Form Content */}
      <div className="w-full md:w-3/5 min-h-screen md:min-h-0 flex items-center justify-center p-6 py-8 bg-[#ffffff] overflow-y-auto">
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
    </div>
  )
}
