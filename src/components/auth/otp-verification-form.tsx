"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Clock } from "lucide-react"

const otpSchema = z.object({
  otp: z.string().length(6, "OTP must be 6 digits"),
})

type OtpFormData = z.infer<typeof otpSchema>

interface OtpVerificationFormProps {
  mobileNumber: string
  onNext: (data: { otp: string }) => void
  onBack: () => void
}

export function OtpVerificationForm({ mobileNumber, onNext, onBack }: OtpVerificationFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [countdown, setCountdown] = useState(21)
  const [canResend, setCanResend] = useState(false)
  const [otpValues, setOtpValues] = useState(["5", "1", "", "", "", ""])
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<OtpFormData>({
    resolver: zodResolver(otpSchema),
  })

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
      return () => clearTimeout(timer)
    } else {
      setCanResend(true)
    }
  }, [countdown])

  useEffect(() => {
    setValue("otp", otpValues.join(""))
  }, [otpValues, setValue])

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return

    const newOtpValues = [...otpValues]
    newOtpValues[index] = value
    setOtpValues(newOtpValues)

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const onSubmit = async (data: OtpFormData) => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    onNext(data)
  }

  const handleResendOtp = () => {
    setCountdown(30)
    setCanResend(false)
    setOtpValues(["", "", "", "", "", ""])
    inputRefs.current[0]?.focus()
    console.log("Resending OTP...")
  }

  return (
    <div className="space-y-6">
      <Button variant="ghost" onClick={onBack} className="p-0 h-auto text-[#5A5A5A] font-['Figtree'] text-[12px] font-normal leading-[14px] hover:text-[#1c1b1f]">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back
      </Button>

      <div className="text-center space-y-4">
        <h1 className="text-[#1A2F46] text-center font-['Playfair_Display'] text-[28px] font-semibold leading-normal">Verify your Mobile Number</h1>
        <p className="text-black text-center font-['Figtree'] text-[14px] font-normal leading-[21px]">Enter the OTP sent to your Mobile Number</p>
        <p className="text-black text-center font-['Figtree'] text-[14px] font-semibold leading-[21px]">{mobileNumber}</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4 rounded-md bg-[#FFF7F2] px-8 py-5">
          <label className="block text-black font-['Figtree'] text-[14px] font-medium leading-normal">
            Enter OTP<span className="text-black">*</span>
          </label>

          <div className="flex gap-3">
            {otpValues.map((value, index) => (
              <Input
                key={index}
                ref={(el) => { inputRefs.current[index] = el }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={value}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-black font-['Figtree'] text-[20px] font-medium leading-normal rounded-md border border-[#29A4C1] focus:border-[#243de2]"
              />
            ))}
          </div>

          {errors.otp && <p className="text-[#ff0000] text-sm text-center">{errors.otp.message}</p>}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-black font-['Figtree'] text-[15px] font-normal leading-[18px]">
              <Clock className="w-4 h-4" />
              <span>{countdown}s</span>
            </div>

            {canResend ? (
              <button type="button" onClick={handleResendOtp} className="text-[#E97737] text-center font-['Figtree'] text-[14px] font-semibold leading-[18px] hover:underline">
                Re-Send OTP
              </button>
            ) : (
              <span className="text-[#E97737] text-center font-['Figtree'] text-[14px] font-semibold leading-[18px]">Re-Send OTP</span>
            )}
          </div>
        </div>

        <Button
          type="submit"
          disabled={isLoading || otpValues.join("").length !== 6}
          className="w-full bg-[#e97737] hover:bg-[#c75414] text-white font-['Figtree'] text-[14px] font-semibold leading-[24px] uppercase py-3 rounded-lg"
        >
          {isLoading ? "Verifying..." : "VERIFY OTP"}
        </Button>

        <p className="text-[#4E4E4E] text-center font-['Figtree'] text-[11px] font-normal leading-[19.5px] text-center">
          By verifying, you accept the{" "}
          <a href="#" className="text-[#e97737] hover:underline">
            Terms & Conditions
          </a>{" "}
          <span className="text-[#1D2125]/69">and</span>{" "}
          <a href="#" className="text-[#e97737] hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </form>
    </div>
  )
}
