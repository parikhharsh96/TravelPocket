import { SignupFlow } from "@/components/auth/signup-flow"
import { SignupModal } from "@/components/auth/signup-modal"
import { Button } from "@/components/ui/button"

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <SignupModal>
        <Button className="bg-[#e97737] hover:bg-[#c75414] text-white">
          Open Signup Modal
        </Button>
      </SignupModal>
    </div>
    // <SignupFlow />
  )
}
