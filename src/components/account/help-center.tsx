import { Phone, Mail, MessageCircle, Send, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HelpCenter() {
  return (
    <div className="bg-[#ebf5f7] rounded-lg p-4 md:p-6">
      <h3 className="text-base md:text-lg font-semibold text-[#1a2f46] mb-3 md:mb-4">Help Center</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
        <Button
          variant="outline"
          className="justify-start gap-2 md:gap-3 bg-white hover:bg-[#fff7f2] border-[#d2d8e4] text-xs md:text-sm h-auto py-3"
        >
          <Phone className="w-4 h-4 text-[#e97737] flex-shrink-0" />
          <span className="text-[#333333] text-left">Call us @+91 78270-33601</span>
        </Button>

        <Button
          variant="outline"
          className="justify-start gap-2 md:gap-3 bg-white hover:bg-[#fff7f2] border-[#d2d8e4] text-xs md:text-sm h-auto py-3"
        >
          <Mail className="w-4 h-4 text-[#e97737] flex-shrink-0" />
          <span className="text-[#333333]">Write to us</span>
        </Button>

        <Button
          variant="outline"
          className="justify-start gap-2 md:gap-3 bg-white hover:bg-[#fff7f2] border-[#d2d8e4] text-xs md:text-sm h-auto py-3"
        >
          <Send className="w-4 h-4 text-[#e97737] flex-shrink-0" />
          <span className="text-[#333333]">Send an Update Request</span>
        </Button>

        <Button
          variant="outline"
          className="justify-start gap-2 md:gap-3 bg-white hover:bg-[#fff7f2] border-[#d2d8e4] text-xs md:text-sm h-auto py-3"
        >
          <MessageCircle className="w-4 h-4 text-[#64b161] flex-shrink-0" />
          <span className="text-[#333333]">Chat with us on WhatsApp</span>
        </Button>

        <Button
          variant="outline"
          className="justify-start gap-2 md:gap-3 bg-white hover:bg-[#fff7f2] border-[#d2d8e4] sm:col-span-2 text-xs md:text-sm h-auto py-3"
        >
          <HelpCircle className="w-4 h-4 text-[#e97737] flex-shrink-0" />
          <span className="text-[#333333]">FAQs</span>
        </Button>
      </div>
    </div>
  )
}
