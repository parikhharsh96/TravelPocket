"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft } from "lucide-react"
import type { SignupData } from "./signup-flow"

const profileSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  marketingConsent: z.boolean(),
  whatsappConsent: z.boolean(),
})

type ProfileFormData = z.infer<typeof profileSchema>

interface ProfileCompletionFormProps {
  initialData: Partial<SignupData>
  onComplete: (data: Partial<SignupData>) => void
  onBack: () => void
}

export function ProfileCompletionForm({ initialData, onComplete, onBack }: ProfileCompletionFormProps) {
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      email: initialData.email || "",
      firstName: initialData.firstName || "",
      lastName: initialData.lastName || "",
      marketingConsent: initialData.marketingConsent ?? true,
      whatsappConsent: initialData.whatsappConsent ?? true,
    },
  })

  const marketingConsent = watch("marketingConsent")
  const whatsappConsent = watch("whatsappConsent")

  const onSubmit = async (data: ProfileFormData) => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    onComplete(data)
  }

  return (
    <div className="space-y-6">
      <Button variant="ghost" onClick={onBack} className="p-0 h-auto text-[#5a5a5a] hover:text-[#1c1b1f]">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back
      </Button>

      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-[#21296f] text-balance">Complete your Sign up</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="mobile" className="text-[#1c1b1f] font-medium">
            Mobile Number <span className="text-[#ff0000]">*</span>
          </Label>
          <div className="flex gap-2">
            <Select value={initialData.countryCode} disabled>
              <SelectTrigger className="w-24 border-[#d9d9d9] bg-[#d2d8e4]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="+91">
                  <div className="flex items-center gap-2">
                    <span className="text-[#11892e]">🇮🇳</span>
                    <span>+91</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
            <Input
              value={initialData.mobileNumber}
              disabled
              className="flex-1 border-[#d9d9d9] bg-[#d2d8e4] text-[#5a5a5a]"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-[#1c1b1f] font-medium">
            Email Address <span className="text-[#ff0000]">*</span>
          </Label>
          <Input
            {...register("email")}
            type="email"
            placeholder="Enter Email Address"
            className="border-[#d9d9d9] text-[#1c1b1f] placeholder:text-[#5a5a5a]"
          />
          {errors.email && <p className="text-[#ff0000] text-sm">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-[#1c1b1f] font-medium">
            First Name <span className="text-[#ff0000]">*</span>
          </Label>
          <Input
            {...register("firstName")}
            placeholder="Enter First Name"
            className="border-[#d9d9d9] text-[#1c1b1f] placeholder:text-[#5a5a5a]"
          />
          {errors.firstName && <p className="text-[#ff0000] text-sm">{errors.firstName.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-[#1c1b1f] font-medium">
            Last Name <span className="text-[#ff0000]">*</span>
          </Label>
          <Input
            {...register("lastName")}
            placeholder="Enter Last Name"
            className="border-[#d9d9d9] text-[#1c1b1f] placeholder:text-[#5a5a5a]"
          />
          {errors.lastName && <p className="text-[#ff0000] text-sm">{errors.lastName.message}</p>}
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Checkbox
              id="marketing"
              checked={marketingConsent}
              onCheckedChange={(checked) => setValue("marketingConsent", !!checked)}
              className="border-[#1c8ca7] data-[state=checked]:bg-[#1c8ca7]"
            />
            <Label htmlFor="marketing" className="text-[#1c1b1f] text-sm leading-relaxed">
              Keep me updated on special promotions and offers.
            </Label>
          </div>

          <div className="flex items-center space-x-3">
            <Checkbox
              id="whatsapp"
              checked={whatsappConsent}
              onCheckedChange={(checked) => setValue("whatsappConsent", !!checked)}
              className="border-[#1c8ca7] data-[state=checked]:bg-[#1c8ca7]"
            />
            <Label htmlFor="whatsapp" className="text-[#1c1b1f] text-sm leading-relaxed">
              I would like to get WhatsApp notifications
            </Label>
          </div>
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[#e97737] hover:bg-[#c75414] text-white font-medium py-3 rounded-lg"
        >
          {isLoading ? "Creating Profile..." : "COMPLETE PROFILE"}
        </Button>
      </form>
    </div>
  )
}
