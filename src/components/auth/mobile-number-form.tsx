"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { API_ENDPOINTS } from "@/lib/constants"
import { useApi } from "@/lib/use-api"
import { useToast } from "@/components/ui/use-toast"
import { GoogleAuthButton } from "./google-auth-button"
import type { SignupData } from "./signup-flow"

interface SendOtpRequest {
  phone: string | null
  email: string | null
  source: string
}

interface SendOtpResponse {
  success: boolean
  message: string
  data: {
    isSuccess: boolean
    message: string
  }
}

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
  const { execute, loading } = useApi<SendOtpResponse>()
  const { toast } = useToast()
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

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
    setErrorMessage(null)
    
    const requestBody: SendOtpRequest = {
      phone: `${data.countryCode}${data.mobileNumber}`,
      email: null,
      source: 'Web'
    }
    
    console.log('Sending OTP...', requestBody)
    const response = await execute(API_ENDPOINTS.auth.sendOtp, 'POST', requestBody)
    
    if (response && response.data && response.data.data) {
      const { isSuccess, message } = response.data.data
      
      if (isSuccess) {
        console.log('OTP sent successfully:', message)
        toast({
          title: "Success",
          description: "OTP sent successfully to your mobile number",
        })
        onNext(data)
      } else {
        setErrorMessage(message || 'Failed to send OTP. Please try again.')
        // console.error('Send OTP failed:', message)
      }
    } else {
      setErrorMessage('Failed to send OTP. Please try again.')
      // console.error('API error:', response?.error)
    }
  }

  const handleGoogleSuccess = () => {
    // Redirect to dashboard or home page after successful Google login
    window.location.href = '/'
  }

  const handleGoogleError = (error: string) => {
    setErrorMessage(error)
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-[#1A2F46] text-center font-['Playfair_Display'] text-[28px] font-semibold leading-normal">Login or Create your account</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="mobile" className="text-black font-['Figtree'] text-[14px] font-medium leading-normal">
            Mobile Number <span className="text-[#FF0000]">*</span>
          </Label>
          <div className="flex gap-2">
            <Select value={countryCode} onValueChange={(value) => setValue("countryCode", value)}>
              <SelectTrigger className="w-24 border-[#d9d9d9] text-[#5A5A5A] font-['Figtree'] text-[16px] font-normal leading-normal">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="+91">
                  <div className="flex items-center gap-2">
                    <span className="text-[#11892e]">🇮🇳</span>
                    <span>+91</span>
                  </div>
                </SelectItem>
                <SelectItem value="+1">
                  <div className="flex items-center gap-2">
                    <span>us</span>
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
              className="flex-1 border-[#d9d9d9] text-[#5A5A5A] font-['Figtree'] text-[16px] font-normal leading-normal placeholder:text-[#5A5A5A] placeholder:font-['Figtree'] placeholder:text-[16px] placeholder:font-normal placeholder:leading-normal"
            />
          </div>
          {errors.mobileNumber && <p className="text-[#FF0000] text-sm">{errors.mobileNumber.message}</p>}
          {errorMessage && <p className="text-[#FF0000] text-sm">{errorMessage}</p>}
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-[#e97737] hover:bg-[#c75414] text-white font-['Figtree'] text-[14px] font-semibold leading-[24px] uppercase py-3 rounded-lg"
        >
          {loading ? "Sending..." : "SEND OTP"}
        </Button>

        <p className="text-[#4E4E4E] text-center font-['Figtree'] text-[11px] font-normal leading-[19.5px]text-center">
          By verifying, you accept the{" "}
          <a href="#" className="text-[#E97737] hover:underline">
            Terms & Conditions
          </a>{" "}
          <span className="text-[#1D2125]/69">and</span>{" "}
          <a href="#" className="text-[#E97737] hover:underline">
            Privacy Policy
          </a>
          .
        </p>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#D2D8E4]" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-[#ffffff] px-4 text-black text-center font-['Figtree'] text-[11px] font-semibold leading-[19.5px]">Or Continue</span>
          </div>
        </div>

        <GoogleAuthButton 
          onSuccess={handleGoogleSuccess}
          onError={handleGoogleError}
        />
      </form>
    </div>
  )
}
