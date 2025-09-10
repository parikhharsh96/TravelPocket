"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { SignupData } from "./signup-flow"

const mobileSchema = z.object({
  countryCode: z.string().min(1, "Country code is required"),
  mobileNumber: z.string().min(10, "Mobile number must be at least 10 digits"),
})

type MobileFormData = z.infer<typeof mobileSchema>

interface MobileNumberFormProps {
  initialData: Partial<SignupData>
  onNext: (data: Partial<SignupData>) => void
}

export function MobileNumberForm({ initialData, onNext }: MobileNumberFormProps) {
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<MobileFormData>({
    resolver: zodResolver(mobileSchema),
    defaultValues: {
      countryCode: initialData.countryCode || "+91",
      mobileNumber: initialData.mobileNumber || "",
    },
  })

  const countryCode = watch("countryCode")

  const onSubmit = async (data: MobileFormData) => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    onNext(data)
  }

  const handleGoogleLogin = () => {
    console.log("Google login clicked")
    // Implement Google OAuth here
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-[#21296f] text-balance">Login or Create your account</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="mobile" className="text-[#1c1b1f] font-medium">
            Mobile Number <span className="text-[#ff0000]">*</span>
          </Label>
          <div className="flex gap-2">
            <Select value={countryCode} onValueChange={(value) => setValue("countryCode", value)}>
              <SelectTrigger className="w-24 border-[#d9d9d9]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="+91">
                  <div className="flex items-center gap-2">
                    <span className="text-[#11892e]">🇮🇳</span>
                    <span>+91</span>
                  </div>
                </SelectItem>
                <SelectItem value="+1">
                  <div className="flex items-center gap-2">
                    <span>🇺🇸</span>
                    <span>+1</span>
                  </div>
                </SelectItem>
                <SelectItem value="+44">
                  <div className="flex items-center gap-2">
                    <span>🇬🇧</span>
                    <span>+44</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
            <Input
              {...register("mobileNumber")}
              placeholder="Enter Mobile Number"
              className="flex-1 border-[#d9d9d9] text-[#1c1b1f] placeholder:text-[#5a5a5a]"
            />
          </div>
          {errors.mobileNumber && <p className="text-[#ff0000] text-sm">{errors.mobileNumber.message}</p>}
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[#e97737] hover:bg-[#c75414] text-white font-medium py-3 rounded-lg"
        >
          {isLoading ? "Sending..." : "SEND OTP"}
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

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#d9d9d9]" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-[#ffffff] px-4 text-[#5a5a5a]">Or Continue</span>
          </div>
        </div>

        <Button
          type="button"
          variant="outline"
          onClick={handleGoogleLogin}
          className="w-full border-[#d9d9d9] text-[#1c1b1f] hover:bg-[#d2d8e4] py-3 bg-transparent"
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Login / Signup with Google
        </Button>
      </form>
    </div>
  )
}
