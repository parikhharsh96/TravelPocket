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
      <Button variant="ghost" onClick={onBack} className="p-0 h-auto text-[#5a5a5a] hover:text-[#1c1b1f]">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back
      </Button>

      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-[#21296f] text-balance">Verify your Mobile Number</h1>
        <p className="text-[#5a5a5a]">Enter the OTP sent to your Mobile Number</p>
        <p className="font-medium text-[#1c1b1f]">{mobileNumber}</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <label className="block text-[#1c1b1f] font-medium">
            Enter OTP<span className="text-[#ff0000]">*</span>
          </label>

          <div className="flex gap-3 justify-center">
            {otpValues.map((value, index) => (
              <Input
                key={index}
                ref={(el) => {inputRefs.current[index] = el}}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={value}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-lg font-medium border-[#1c8ca7] focus:border-[#243de2] text-[#1c1b1f]"
              />
            ))}
          </div>

          {errors.otp && <p className="text-[#ff0000] text-sm text-center">{errors.otp.message}</p>}
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-[#5a5a5a]">
            <Clock className="w-4 h-4" />
            <span>{countdown}s</span>
          </div>

          {canResend ? (
            <button type="button" onClick={handleResendOtp} className="text-[#e97737] hover:underline font-medium">
              Re-Send OTP
            </button>
          ) : (
            <span className="text-[#d9d9d9]">Re-Send OTP</span>
          )}
        </div>

        <Button
          type="submit"
          disabled={isLoading || otpValues.join("").length !== 6}
          className="w-full bg-[#e97737] hover:bg-[#c75414] text-white font-medium py-3 rounded-lg"
        >
          {isLoading ? "Verifying..." : "VERIFY OTP"}
        </Button>

        <p className="text-sm text-[#5a5a5a] text-center">
          By verifying, you accept the{" "}
          <a href="#" className="text-[#e97737] hover:underline">
            Terms & Conditions
          </a>{" "}
          and{" "}
          <a href="#" className="text-[#e97737] hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </form>
    </div>
  )
}
