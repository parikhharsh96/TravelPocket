import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { User, Phone, MessageCircle } from "lucide-react"

export default function ContactOurExperts() {
  return (
    <div className="min-h-screen wave-pattern" style={{ backgroundColor: "#ddf9ff" }}>
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Section - Hero Image with Speech Bubbles */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TravelPocket-oB5QRBCyqvVjbpOo23w9jXnfOXvpRW.png"
                alt="Travel expert in mountain landscape"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />

              {/* Speech Bubbles */}
              <div className="absolute top-6 left-6">
                <div className="bg-white rounded-2xl px-4 py-3 shadow-lg max-w-[160px]">
                  <p className="text-sm font-medium text-[#1c1b1f]">Need help with booking</p>
                  <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white"></div>
                </div>
              </div>

              <div className="absolute top-6 right-6">
                <div className="bg-white rounded-2xl px-4 py-3 shadow-lg max-w-[160px]">
                  <p className="text-sm font-medium text-[#1c1b1f]">What is cost breakdown?</p>
                  <div className="absolute -bottom-2 right-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white"></div>
                </div>
              </div>

              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-white rounded-2xl px-4 py-3 shadow-lg max-w-[160px]">
                  <p className="text-sm font-medium text-[#1c1b1f]">Which documents are needed?</p>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="relative">
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl rounded-3xl p-8 lg:p-10">
              <div className="space-y-8">
                <div className="text-center">
                  <h1 className="text-3xl lg:text-4xl font-bold text-[#1c1b1f] mb-2 text-balance">
                    Contact our Experts
                  </h1>
                </div>

                <form className="space-y-6">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#1a2f46] w-5 h-5" />
                    <Input
                      type="text"
                      placeholder="Your Name"
                      className="pl-12 h-14 rounded-xl border-[#eaeaea] bg-white text-[#1c1b1f] placeholder:text-[#1c1b1f]/60 focus:border-[#1a2f46] focus:ring-[#1a2f46]"
                    />
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#1a2f46] w-5 h-5" />
                    <Input
                      type="tel"
                      placeholder="Mobile Number"
                      className="pl-12 h-14 rounded-xl border-[#eaeaea] bg-white text-[#1c1b1f] placeholder:text-[#1c1b1f]/60 focus:border-[#1a2f46] focus:ring-[#1a2f46]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-14 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-[1.02]"
                    style={{ backgroundColor: "#e97737", color: "white" }}
                  >
                    ENQUIRE NOW
                  </Button>
                </form>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-[#eaeaea]"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-[#1c1b1f]/60 font-medium">OR</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full h-14 rounded-xl border-2 border-[#64b161] text-[#64b161] hover:bg-[#64b161] hover:text-white font-semibold text-lg transition-all duration-200 hover:scale-[1.02] bg-transparent"
                >
                  <MessageCircle className="w-5 h-5 mr-3" />
                  CHAT WITH US ON WHATSAPP
                </Button>

                {/* Available Agents */}
                <div className="flex items-center justify-center space-x-3 pt-4">
                  <div className="flex -space-x-2">
                    <img
                       src="/images/online1.svg"
                      alt="Agent 1"
                      className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                    />
                    <img
                      src="/images/online2"
                      alt="Agent 2"
                      className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#64b161] rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-[#1c1b1f]">Available now</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
