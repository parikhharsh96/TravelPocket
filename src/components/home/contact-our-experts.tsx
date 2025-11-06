'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { User, Phone, MessageCircle, UserIcon, PhoneIcon } from "lucide-react"
import { useState } from "react";

export default function ContactOurExperts() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <>
      {/** new design */}
      <div className="hidden lg:block wave-pattern" style={{
        backgroundImage: "url('/images/contactus/contactus_bg.png')",
      }}>

        {/**Larger Device */}
        <div className="container mx-auto hidden lg:block px-4 py-8 lg:py-16">
          <div className=""> {/**bg-[#EAF6F8] bg-[url('/bg-lines.svg')] bg-cover bg-no-repeat py-12 px-4 sm:px-8 lg:px-16 */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 items-end">

              {/* LEFT SECTION (your uploaded image) */}
              <div className="flex justify-center">
                <img
                  src="/images/contactus/Contact_Experts_web.png"
                  alt="Travel Expert"
                  className="w-full max-w-2xl h-auto object-contain"
                />{/** rounded-xl shadow-md */}
              </div>

              {/* RIGHT SECTION (Contact Form) */}
              <div className="flex flex-col items-center max-w-md mx-auto">
                {/* <div className="text-center w-full mb-6">
                  <p className="text-sm text-gray-600">Need Help?</p>
                  <h2 className="text-2xl font-semibold text-[#1A2F46]">
                    Contact our Experts
                  </h2>
                </div> */}

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
                      <p className="text-[#1A2F46] text-center font-['Figtree'] text-[14px] md:text-[16px] font-semibold leading-normal capitalize">Need Help?</p>
                      <h2 className="text-[#1A2F46] text-center font-['Playfair_Display'] text-[28px]  md:text-[36px] font-semibold leading-normal">
                        Contact our Experts
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <form className="w-full space-y-4 bg-white shadow-lg rounded-2xl p-8">

                  {/* Name Input */}
                  <div className="relative mb-6">
                    <UserIcon
                      className={`w-5 h-5 text-[#1C1B1F] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none transform transition-all duration-200 ${name ? "-translate-x-2 opacity-0" : "translate-x-0 opacity-100"
                        }`}
                    />
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-[8px] border border-[#BCCCF7] bg-white pl-9 pr-4 py-2 text-[#1A2F46] font-['Figtree'] text-[14px] font-normal leading-none focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>


                  {/* Phone Input */}
                  <div className="relative mb-6">
                    <PhoneIcon
                      className={`w-5 h-5 text-[#1C1B1F] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none transform transition-all duration-200 ${phone ? "-translate-x-2 opacity-0" : "translate-x-0 opacity-100"
                        }`}
                    />
                    <input
                      type="tel"
                      placeholder="Mobile Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-[8px] border border-[#BCCCF7] bg-white pl-9 pr-4 py-2 text-[#1A2F46] font-['Figtree'] text-[14px] font-normal leading-none focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>

                  <button
                    type="button"
                    className="w-full bg-[#E97737] hover:bg-orange-600 py-2 rounded-md transition"
                  >
                    <span className="text-white text-center font-['Figtree'] text-[14px] font-semibold leading-none">ENQUIRE NOW</span>
                  </button>

                  <div className="flex items-center justify-center text-black text-center font-['Figtree'] text-[14px] font-normal leading-none">OR</div>

                  <button
                    type="button"
                    className="w-full border border-orange-500 text-orange-600 font-semibold p-2 rounded-md hover:bg-orange-50 transition"
                  >
                    <div className="flex flex-row items-center gap-2">
                      <div className="text-[#E97737] text-center font-['Figtree'] text-[14px] font-semibold leading-none">CHAT WITH US ON WHATSAPP</div>
                      <img src="/images/contactus/whatsapp_green.svg" className="" />
                    </div>
                  </button>

                  {/* <div className="flex items-center gap-2 justify-center text-sm text-green-600 pt-2"> */}
                  <div className="flex items-center justify-center space-x-3 pt-4">
                    <div className="flex -space-x-2">
                      <img
                        src="/images/contactus/person_1.svg"
                        alt="Agent 1"
                        className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                      />
                      <img
                        src="/images/contactus/person_2.svg"
                        alt="Agent 2"
                        className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#64b161] rounded-full animate-pulse"></div>
                      <span className="text-black text-center font-['Figtree'] text-[12px] font-semibold leading-none">Available now</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="h-[900px] lg:hidden wave-pattern" style={{
        backgroundImage: "url('/images/contactus/contactus_bg.png')",
      }}>
        {/**Mobile Device */}
        <div className="container mx-auto lg:hidden px-4 py-8 lg:py-16">
          <div className="">
            <div className="max-w-7xl mx-auto grid grid-cols-1 gap-10 items-center">
              <div className="flex flex-col items-center max-w-md mx-auto">
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
                      <p className="text-[#1A2F46] text-center font-['Figtree'] text-[14px] md:text-[16px] font-semibold leading-normal capitalize">Need Help?</p>
                      <h2 className="text-[#1A2F46] text-center font-['Playfair_Display'] text-[28px]  md:text-[36px] font-semibold leading-normal">
                        Contact our Experts
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="relative flex justify-center">
                  <img
                    src="/images/contactus/Contact_us_expert_img.png"
                    alt="Travel Expert"
                    className="w-full max-w-2xl h-auto object-contain"
                  />

                  <div className="p-2 absolute top-[90%]">
                    {/* Form */}
                    <form className="w-full space-y-4 bg-white shadow-lg rounded-2xl p-8">
                      {/* Name Input */}
                      <div className="relative mb-6">
                        <UserIcon
                          className={`w-5 h-5 text-[#1C1B1F] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none transform transition-all duration-200 ${name ? "-translate-x-2 opacity-0" : "translate-x-0 opacity-100"
                            }`}
                        />
                        <input
                          type="text"
                          placeholder="Your Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full rounded-[8px] border border-[#BCCCF7] bg-white pl-9 pr-4 py-2 text-[#1A2F46] font-['Figtree'] text-[14px] font-normal leading-none focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>


                      {/* Phone Input */}
                      <div className="relative mb-6">
                        <PhoneIcon
                          className={`w-5 h-5 text-[#1C1B1F] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none transform transition-all duration-200 ${phone ? "-translate-x-2 opacity-0" : "translate-x-0 opacity-100"
                            }`}
                        />
                        <input
                          type="tel"
                          placeholder="Mobile Number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full rounded-[8px] border border-[#BCCCF7] bg-white pl-9 pr-4 py-2 text-[#1A2F46] font-['Figtree'] text-[14px] font-normal leading-none focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>

                      <button
                        type="button"
                        className="w-full bg-[#E97737] hover:bg-orange-600 py-2 rounded-md transition"
                      >
                        <span className="text-white text-center font-['Figtree'] text-[14px] font-semibold leading-none">ENQUIRE NOW</span>
                      </button>

                      <div className="flex items-center justify-center text-black text-center font-['Figtree'] text-[14px] font-normal leading-none">OR</div>

                      <button
                        type="button"
                        className="w-full border border-orange-500 text-orange-600 font-semibold p-2 rounded-md hover:bg-orange-50 transition"
                      >
                        <div className="flex flex-row items-center gap-2">
                          <div className="text-[#E97737] text-center font-['Figtree'] text-[14px] font-semibold leading-none">CHAT WITH US ON WHATSAPP</div>
                          <img src="/images/contactus/whatsapp_green.svg" className="" />
                        </div>
                      </button>

                      {/* <div className="flex items-center gap-2 justify-center text-sm text-green-600 pt-2"> */}
                      <div className="flex items-center justify-center space-x-3 pt-4">
                        <div className="flex -space-x-2">
                          <img
                            src="/images/contactus/person_1.svg"
                            alt="Agent 1"
                            className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                          />
                          <img
                            src="/images/contactus/person_2.svg"
                            alt="Agent 2"
                            className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                          />
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-[#64b161] rounded-full animate-pulse"></div>
                          <span className="text-black text-center font-['Figtree'] text-[12px] font-semibold leading-none">Available now</span>
                        </div>
                      </div>
                    </form>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/**
     * Old one
     */}
      {/* <div className="min-h-screen wave-pattern hidden" style={{
        backgroundImage: "url('/images/contactus/contactus_bg.png')",
      }}>
        <div className="container mx-auto px-4 py-8 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
            
            <div className="relative">
              <div className="flex items-center justify-between py-10 relative mb-0 mt-2" style={{ visibility: 'hidden' }}>
               
                <div className="relative flex-1 text-center">
                  
                  <div className="absolute left-1/2 -translate-x-1/2 -top-6" style={{ top: '-40px' }}>
                    <img
                      src="/images/trendingpackages/titledesign.svg"
                      alt="Title Circle"
                      width={150}
                      height={150}
                      className="mx-auto"
                    />
                  </div>

                
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

            
                <div className="absolute top-[20px] left-[80px]">
                  <div className="rounded-[30px_40px_40px_0] bg-[#DDF9FF] px-4 py-3 shadow-lg max-w-[160px]">
                    <p className="text-black font-[Figtree] text-[14px] font-semibold leading-normal">Need help with booking</p>

                  </div>
                </div>

                <div className="absolute top-[20px] right-[30px]">
                  <div className="rounded-[30px_40px_40px_0] bg-[#DDF9FF]  px-4 py-3 shadow-lg max-w-[160px]">
                    <p className="text-black font-[Figtree] text-[14px] font-semibold leading-normal">What is cost breakdown?</p>
                  </div>
                </div>

                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                  <div className="rounded-[30px_40px_40px_0] bg-[#DDF9FF] l px-4 py-3 shadow-lg max-w-[160px]">
                    <p className="text-black font-[Figtree] text-[14px] font-semibold leading-normal">Which documents are needed?</p>
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

            
            <div className="relative">
              
              <div className="flex items-center justify-between py-10 relative mb-0 mt-2">
                
                <div className="relative flex-1 text-center">
                  
                  <div className="absolute left-1/2 -translate-x-1/2 -top-6" style={{ top: '-40px' }}>
                    <img
                      src="/images/trendingpackages/titledesign.svg"
                      alt="Title Circle"
                      width={150}
                      height={150}
                      className="mx-auto"
                    />
                  </div>

                 
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
                      className="h-14 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-[1.02] "
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
      </div> */}


    </>
  )
}
