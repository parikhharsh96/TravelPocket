"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export function NewsletterSection() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
        console.log("Form submitted:", { name, email })
    }

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/images/mountain-background.png')",
                }}
            />

            <div className="absolute top-0 left-0 w-full h-32 bg-contain bg-repeat-x bg-top opacity-80">
                <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="331" viewBox="0 0 1920 331" fill="none">
                    <path d="M1921 -151.277H0V330.723H1921V-151.277Z" fill="url(#paint0_linear_354_16472)" />
                    <defs>
                        <linearGradient id="paint0_linear_354_16472" x1="960.5" y1="-151.277" x2="960.5" y2="254.085" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" />
                            <stop offset="0.453" stopColor="white" />
                            <stop offset="0.594" stopColor="white" stopOpacity="0.62" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-white/20 via-white/10 to-transparent" />

            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-blue-900/30" />

            {/* Content Container */}
            <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-[50px]"> {/**max-w-7xl */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-16 items-center">
                    {/* Right Column - Journey Text (appears first on mobile) */}
                    <div className="order-1 lg:order-2 text-center lg:text-right">
                        <div className="space-y-4">
                            <p className="text-[#365C85] text-center font-['Figtree'] text-[80px] font-normal leading-normal rotate-[-3.871deg]">
                                Let The Journey Begin!
                            </p>
                            <div className="rotate-[-5.94deg] absolute top-[105px] right-[80px]">
                                <img src="/images/newsletter/Vector_8.svg" className="w-[330px] h-[75px]" />
                            </div>
                            <div className="flex flex-col justify-end items-end p-4">
                                <p className="text-right text-[#26415F] text-center font-['Figtree'] text-[14px] font-medium leading-normal uppercase">
                                    We are with you,
                                </p>
                                <p className="text-right text-[#26415F] text-center font-['Figtree'] text-[14px] font-medium leading-normal uppercase">
                                    at every step!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Left Column - Newsletter Form */}
                    <div className="order-2 lg:order-1 mt-4 lg:mt-0">
                        <Card className="p-8 relative rounded-[20px] bg-[#1A2F46]">
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 top-[-42px]">
                                {/* <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="66" viewBox="0 0 64 66" fill="none">
                                        <path d="M63.8475 26.6448V62.7797C63.8502 63.2255 63.758 63.6667 63.5769 64.0741C63.3959 64.4814 63.1302 64.8456 62.7975 65.1422L62.703 65.2367C62.1234 65.7311 61.3858 66.0015 60.624 65.9987H3.22054C2.46423 65.9985 1.73286 65.7282 1.15804 65.2367C1.11908 65.2137 1.08657 65.1812 1.06354 65.1422C0.728903 64.8464 0.461016 64.4827 0.27766 64.0754C0.0943042 63.6681 -0.000328476 63.2264 4.33895e-05 62.7797V26.6448C-0.0074817 25.8414 0.299985 25.0671 0.856543 24.4878C1.08372 24.2201 1.35641 23.9946 1.66204 23.8218C2.13856 23.5614 2.673 23.4252 3.21604 23.4258H60.6255C61.0718 23.4344 61.512 23.5316 61.9204 23.7119C62.3288 23.8921 62.6973 24.1518 63.0045 24.4758C63.5439 25.0697 63.8442 25.8424 63.8475 26.6448Z" fill="#29A4C1" />
                                        <path d="M63.0089 24.468C62.7824 24.75 31.941 49.275 31.941 49.275L0.855011 24.495L0.868511 24.4815V24.468L30.18 0.624054C30.6764 0.220378 31.2967 0 31.9365 0C32.5763 0 33.1966 0.220378 33.693 0.624054L63.0089 24.468Z" fill="#157C94" />
                                        <path d="M56.451 7.83984V29.7398L31.9365 49.2743L7.40854 29.7173V7.83984H56.451Z" fill="#EEEFEE" />
                                        <path d="M62.7974 65.1398C62.7698 65.1741 62.7386 65.2053 62.7044 65.2329L35.0834 46.8129L37.6109 44.7773L62.7974 65.1398Z" fill="#157C94" />
                                        <path d="M28.7714 46.8014L1.15648 65.2334C1.11606 65.2135 1.08336 65.1808 1.06348 65.1404L26.2304 44.7539L28.7714 46.8014Z" fill="#157C94" />
                                        <path d="M12.8415 13.5918H51.0029V15.2418H12.8415V13.5918Z" fill="#DBD8DD" />
                                        <path d="M12.8415 19.9785H51.0029V21.6285H12.8415V19.9785Z" fill="#DBD8DD" />
                                        <path d="M12.8415 26.3613H51.0029V28.0113H12.8415V26.3613Z" fill="#DBD8DD" />
                                        <path d="M19.2509 32.7539H44.6009V34.4039H19.2509V32.7539Z" fill="#DBD8DD" />
                                    </svg>
                                </div> */}
                                <img src="/images/newsletter/email.svg" className="" />
                            </div>

                            <div className="space-y-6 pt-4">
                                {/* Header */}
                                <div className="text-center space-y-2">
                                    <h3 className="text-white text-center font-['Figtree'] text-[38px] font-bold leading-normal">Let's Stay Connected</h3>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-white text-center font-['Figtree'] text-[18px] font-normal leading-normal">
                                            Join our email list to keep up to date with all the current
                                        </p>
                                        <p className="text-white text-center font-['Figtree'] text-[18px] font-normal leading-normal">
                                            trips and events
                                        </p>
                                    </div>
                                </div>

                                {/* Form */}
                                <form onSubmit={handleSubmit} className="space-y-4 px-0 lg:px-[100px]">
                                    <div className="flex flex-col lg:flex-row items-center gap-[10px]">
                                        <Input
                                            type="text"
                                            placeholder="Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="text-[#5A5A5A] font-['Figtree'] text-[14px] font-normal leading-normal text-white placeholder:text-[#5A5A5A] placeholder:font-['Figtree'] placeholder:text-[14px] placeholder:font-normal placeholder:leading-normal focus:border-blue-400 focus:ring-blue-400 rounded-[6px] border border-[#9FCADC] bg-white"
                                            required
                                        />
                                        <Input
                                            type="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="text-[#5A5A5A] font-['Figtree'] text-[14px] font-normal leading-normal text-white placeholder:text-[#5A5A5A] placeholder:font-['Figtree'] placeholder:text-[14px] placeholder:font-normal placeholder:leading-normal focus:border-blue-400 focus:ring-blue-400 rounded-[6px] border border-[#9FCADC] bg-white"
                                            required
                                        />
                                        <Button
                                            type="submit"
                                            className="w-full lg:w-auto bg-[#E97737] hover:bg-[#C75414] text-white font-['Figtree'] text-[14px] font-semibold leading-[24px] uppercase py-3 rounded-lg transition-colors duration-200"
                                        >
                                            Submit
                                        </Button>
                                    </div>
                                    {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    </div> */}
                                </form>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}