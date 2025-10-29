import { Phone, Mail, MessageCircle, Send, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HelpCenter() {
  return (
    <div className="rounded-[8px] bg-[#FFF7F2] p-4 md:p-6">
      <h3 className="text-black font-['Figtree'] text-[16px] md:text-[18px] font-semibold leading-normal mb-3 md:mb-4">Help Center</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
        <Button
          variant="outline"
          className="justify-start gap-2 md:gap-3 bg-white hover:bg-[#fff7f2] rounded-[8px] border border-[#D2D8E4] h-auto py-3"
        >
          {/* <Phone className="w-4 h-4 text-[#e97737] flex-shrink-0" /> */}
          <img src="/images/account/Path_1.svg" alt="" className="" />
          <span className="text-black font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-[20px]">Call us @+91 78270-33601</span>
        </Button>

        <Button
          variant="outline"
          className="justify-start gap-2 md:gap-3 bg-white hover:bg-[#fff7f2] rounded-[8px] border border-[#D2D8E4] h-auto py-3"
        >
          {/* <Mail className="w-4 h-4 text-[#e97737] flex-shrink-0" /> */}
          <img src="/images/account/mail_1.svg" alt="" className="" />
          <span className="text-black font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-[20px]">Write to us</span>
        </Button>

        <Button
          variant="outline"
          className="justify-start gap-2 md:gap-3 bg-white hover:bg-[#fff7f2] rounded-[8px] border border-[#D2D8E4] h-auto py-3"
        >
          {/* <Send className="w-4 h-4 text-[#e97737] flex-shrink-0" /> */}
          <img src="/images/account/autorenew_1.svg" alt="" className="" />
          <span className="text-black font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-[20px]">Send an Update Request</span>
        </Button>

        <Button
          variant="outline"
          className="justify-start gap-2 md:gap-3 bg-white hover:bg-[#fff7f2] rounded-[8px] border border-[#D2D8E4] h-auto py-3"
        >
          {/* <MessageCircle className="w-4 h-4 text-[#64b161] flex-shrink-0" /> */}
          <img src="/images/account/whatsapp_1.svg" alt="" className="" />
          <span className="text-black font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-[20px]">Chat with us on WhatsApp</span>
        </Button>

        <Button
          variant="outline"
          className="justify-start gap-2 md:gap-3 bg-white hover:bg-[#fff7f2] rounded-[8px] border border-[#D2D8E4] sm:col-span-2 text-xs md:text-sm h-auto py-3"
        >
          {/* <HelpCircle className="w-4 h-4 text-[#e97737] flex-shrink-0" /> */}
          <img src="/images/account/help_center.svg" alt="" className="" />
          <span className="text-black font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-[20px]">FAQs</span>
        </Button>
      </div>
    </div>
  )
}
