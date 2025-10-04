import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { User, Phone, MessageCircle } from "lucide-react"

export default function ContactOurExperts() {
  return (
    <div className="min-h-screen wave-pattern" style={{
      backgroundImage: "url('/images/contactus/contactus_bg.png')",
    }}>
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Section - Hero Image with Speech Bubbles */}
          <div className="relative">
            <div className="flex items-center justify-between py-10 relative mb-0 mt-2" style={{ visibility: 'hidden' }}>
              {/* Title with background circle */}
              <div className="relative flex-1 text-center">
                {/* Circle background */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-6" style={{ top: '-40px' }}>
                  <img
                    src="/images/trendingpackages/titledesign.svg"
                    alt="Title Circle"
                    width={150}
                    height={150}
                    className="mx-auto"
                  />
                </div>

                {/* Text */}
                <div className="relative">
                  <p className="text-[#1A2F46] text-center font-['Figtree']  text-[16px] font-semibold leading-normal capitalize">Need Help?</p>
                  <h2 className="text-[#1A2F46] text-center font-['Playfair_Display']r text-[36px] font-semibold leading-normal">
                    Contact our Experts
                  </h2>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/contactus/banner_1.png"
                alt="Travel expert in mountain landscape"
                className="object-cover"
              />

              {/* Speech Bubbles */}
              <div className="absolute top-[20px] left-[80px]">
                <div className="rounded-[30px_40px_40px_0] bg-[#DDF9FF] px-4 py-3 shadow-lg max-w-[160px]">
                  <p className="text-black font-[Figtree] text-[14px] font-semibold leading-normal">Need help with booking</p>
                  {/* <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white"></div> */}
                </div>
              </div>

              <div className="absolute top-[20px] right-[30px]">
                <div className="rounded-[30px_40px_40px_0] bg-[#DDF9FF]  px-4 py-3 shadow-lg max-w-[160px]">
                  <p className="text-black font-[Figtree] text-[14px] font-semibold leading-normal">What is cost breakdown?</p>
                  {/* <div className="absolute -bottom-2 right-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white"></div> */}
                </div>
              </div>

              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                <div className="rounded-[30px_40px_40px_0] bg-[#DDF9FF] l px-4 py-3 shadow-lg max-w-[160px]">
                  <p className="text-black font-[Figtree] text-[14px] font-semibold leading-normal">Which documents are needed?</p>
                  {/* <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white"></div> */}
                </div>
              </div>
            </div>
            <div className="absolute top-[-38px] left-[-310px]">
              <img
                src="/images/contactus/Banner.png"
                alt="Travel expert in mountain landscape"
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="relative">
            {/* Header */}
            <div className="flex items-center justify-between py-10 relative mb-0 mt-2">
              {/* Title with background circle */}
              <div className="relative flex-1 text-center">
                {/* Circle background */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-6" style={{ top: '-40px' }}>
                  <img
                    src="/images/trendingpackages/titledesign.svg"
                    alt="Title Circle"
                    width={150}
                    height={150}
                    className="mx-auto"
                  />
                </div>

                {/* Text */}
                <div className="relative">
                  <p className="text-[#1A2F46] text-center font-['Figtree']  text-[16px] font-semibold leading-normal capitalize">Need Help?</p>
                  <h2 className="text-[#1A2F46] text-center font-['Playfair_Display']r text-[36px] font-semibold leading-normal">
                    Contact our Experts
                  </h2>
                </div>
              </div>
            </div>

            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl rounded-3xl p-8 lg:p-10">
              <div className="space-y-8">
                {/* <div className="text-center">
                  <h1 className="text-3xl lg:text-4xl font-bold text-[#1c1b1f] mb-2 text-balance">
                    Contact our Experts
                  </h1>
                </div> */}

                <form className="space-y-6">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#1a2f46] w-6 h-6" />
                    <Input
                      type="text"
                      placeholder="Your Name"
                      className="h-14 rounded-[8px] border border-[#BCCCF7] bg-white p-4 text-[#1A2F46] font-[Figtree] text-[14px] font-normal leading-normal placeholder:text-[#1A2F46]/60 pl-14 pr-4"
                    />
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#1a2f46] w-6 h-6" />
                    <Input
                      type="tel"
                      placeholder="Mobile Number"
                      className="h-14 rounded-[8px] border border-[#BCCCF7] bg-white p-4 text-[#1A2F46] font-[Figtree] text-[14px] font-normal leading-normal placeholder:text-[#1A2F46]/60 pl-14 pr-4"
                    />
                  </div>

                  <div className="flex justify-center">
                    <Button
                      type="submit"
                      className="h-14 rounded-[8px] bg-[#E97737] p-4 transition-all duration-200 hover:scale-[1.02] cursor-pointer"
                      style={{ backgroundColor: "#e97737" }}
                    >
                      <span className="text-white text-center font-[Figtree] text-[14px] font-semibold leading-normal">ENQUIRE NOW</span>
                    </Button>
                  </div>
                </form>

                <div className="relative">
                  {/* <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-[#eaeaea]"></div>
                  </div> */}
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 text-black text-center font-[Figtree] text-[14px] font-normal leading-normal">OR</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full h-14 rounded-[8px] border border-[#E97737] p-4 transition-all duration-200 hover:scale-[1.02] cursor-pointer"
                >
                  {/* <MessageCircle className="w-5 h-5 mr-3" /> */}
                  <span className="text-[#E97737] text-center font-[Figtree] text-[14px] font-semibold leading-normal">CHAT WITH US ON WHATSAPP</span>
                  <img src="/images/contactus/whatsapp.svg" />
                </Button>

                {/* Available Agents */}
                <div className="flex items-center justify-center space-x-3 pt-4">
                  <div className="flex -space-x-2">
                    <img
                      src="/images/contactus/Ellipse_1.svg"
                      alt="Agent 1"
                      className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                    />
                    <img
                      src="/images/contactus/Ellipse_2.svg"
                      alt="Agent 2"
                      className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#64b161] rounded-full animate-pulse"></div>
                    <span className="text-black text-center font-[Figtree] text-[12px] font-semibold leading-normal">Available now</span>
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
