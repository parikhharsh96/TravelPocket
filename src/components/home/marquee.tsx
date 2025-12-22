"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { useEffect } from "react"

export default function Marquee() {

    const router = useRouter();

    const goToAboutUs = () => {
        // router.push("/about-us");
    };

    // Auto-scroll logic: scrolls right continuously and loops back to start.
    useEffect(() => {
        const els = Array.from(document.querySelectorAll<HTMLElement>(".auto-scroll-marquee"))
        if (els.length === 0) return

        const speed = 1.5 // pixels per frame — adjust to taste
        const cleanups: (() => void)[] = []

        els.forEach((el) => {
            let paused = false
            let rafId = 0

            const step = () => {
                if (!paused) {
                    // increment scroll
                    el.scrollLeft += speed
                    // if reached end, jump to start
                    if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) {
                        el.scrollLeft = 0
                    }
                }
                rafId = requestAnimationFrame(step)
            }

            const onEnter = () => { paused = true }
            const onLeave = () => { paused = false }

            // el.addEventListener("mouseenter", onEnter)
            // el.addEventListener("mouseleave", onLeave)

            rafId = requestAnimationFrame(step)

            cleanups.push(() => {
                cancelAnimationFrame(rafId)
                // el.removeEventListener("mouseenter", onEnter)
                // el.removeEventListener("mouseleave", onLeave)
            })
        })

        return () => {
            cleanups.forEach((fn) => fn())
        }
    }, [])
    return (
        <>
            <section className="w-full bg-[linear-gradient(180deg,#F3F8FC_0%,#D0E0EE_50.73%,rgba(238,245,251,0)_100%)]">
                <div className="container mx-auto px-2 py-1">
                    <div className="auto-scroll-marquee flex items-center gap-[50px] flex-row md:flex-row overflow-x-auto overflow-x-auto scrollbar-hide">
                        <div className="border-[#5A6C9C] px-2 py-1 inline-block">
                            <span className="font-['Figtree'] text-[44px] md:text-[74px] font-bold leading-normal tracking-[1.48px] uppercase text-stroke">Travel</span>
                        </div>

                        <img src="/images/marquee/divider.svg" alt="Divider" />

                        <div className="border-[#5A6C9C] px-2 py-1 inline-block">
                            <span className="font-['Figtree'] text-[44px] md:text-[74px] font-bold leading-normal tracking-[1.48px] uppercase text-stroke">Himalayas</span>
                        </div>

                        <img src="/images/marquee/divider.svg" alt="Divider" />

                        <div className="border-[#5A6C9C] px-2 py-1 inline-block">
                            <span className="font-['Figtree'] text-[44px] md:text-[74px] font-bold leading-normal tracking-[1.48px] uppercase text-stroke">India</span>
                        </div>

                        <img src="/images/marquee/divider.svg" alt="Divider" />

                        <div className="border-[#5A6C9C] px-2 py-1 inline-block">
                            <span className="font-['Figtree'] text-[44px] md:text-[74px] font-bold leading-normal tracking-[1.48px] uppercase text-stroke">Adventure</span>
                        </div>

                    </div>
                </div>
            </section>

            {/* <section className="hidden w-full bg-[linear-gradient(180deg,#F3F8FC_0%,#D0E0EE_50.73%,rgba(238,245,251,0)_100%)]">
                <div className="container mx-auto px-2 py-1">
                    <div className="flex items-center gap-[50px] flex-row md:flex-row overflow-x-auto scroll-smooth scrollbar-hide no-scrollbar">
                        <div className="border-[#5A6C9C] px-2 py-1 inline-block">
                            <span className="font-['Figtree'] text-[44px] md:text-[74px] font-bold leading-normal tracking-[1.48px] uppercase text-stroke">Travel</span>
                        </div>

                        <img src="/images/marquee/divider.svg"
                            alt="Marquee Divider" />

                        <div className="border-[#5A6C9C] px-2 py-1 inline-block">
                            <span className="font-['Figtree'] text-[44px] md:text-[74px] font-bold leading-normal tracking-[1.48px] uppercase text-stroke">Himalayas</span>
                        </div>

                        <img src="/images/marquee/divider.svg"
                            alt="Marquee Divider" />

                        <div className="border-[#5A6C9C] px-2 py-1 inline-block">
                            <span className="font-['Figtree'] text-[44px] md:text-[74px] font-bold leading-normal tracking-[1.48px] uppercase text-stroke">India</span>
                        </div>

                        <img src="/images/marquee/divider.svg"
                            alt="Marquee Divider" />

                        <div className="border-[#5A6C9C] px-2 py-1 inline-block">
                            <span className="font-['Figtree'] text-[44px] md:text-[74px] font-bold leading-normal tracking-[1.48px] uppercase text-stroke">Adventure</span>
                        </div>
                    </div>
                </div>
            </section> */}

            <section
                className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `linear-gradient(270deg, rgba(102, 102, 102, 0.00) 0.39%, rgba(0, 0, 0, 0.60) 65.95%), url('/images/marquee/24bc226117abfea57056d1a3d4d4cbbfdb2af8f7.jpg')`
                }}
            >
                <div className="container mx-auto px-6 py-16 h-full min-h-screen">
                    <div className="flex flex-col lg:flex-row justify-between items-start h-full min-h-[80vh] gap-8 lg:gap-16">
                        {/* Left Column - Content */}
                        <div className="flex-1 text-white space-y-6 max-w-lg">
                            <div className="space-y-2">
                                <p className="text-white font-['Figtree'] text-[14px] md:text-[16px] font-semibold leading-normal">Get to know us</p>
                                <h1 className="text-white font-['Playfair_Display'] text-[28px] md:text-[36px] font-semibold leading-normal">
                                    Our Purpose,<br />
                                    Our Journey
                                </h1>
                            </div>

                            <p className="text-white font-['Figtree'] text-[14px] md:text-[18px] font-light leading-[30px]">
                                Travel Racket is a team of passionate travelers and spiritual
                                seekers who believe every journey should be meaningful, soulful,
                                and soul-stirring. With over a decade of experience, we
                                specialize in crafting sacred and experiential trips that stay with
                                you long after your return.
                            </p>

                            <Button variant="outline" className="group rounded-[6px] border border-[#FFFFFF] hover:border-[#E97737] bg-transparent md:mt-0 px-6 py-3 bg-[linear-gradient(90deg,_#E97737_0%,_#E97737_50%,_transparent_50%)] 
             bg-[length:200%_100%] bg-[position:100%_0] 
             transition-[background-position] duration-300 ease-out
             hover:bg-[position:0_0] cursor-not-allowed" onClick={goToAboutUs}>
                                {/* <span className="text-white font-['Figtree'] text-[14px] font-semibold leading-normal uppercase">ABOUT US</span> */}
                                <div className="group flex items-center gap-2 cursor-not-allowed">
                                    <span className="text-white font-['Figtree'] text-[14px] font-semibold leading-normal uppercase">ABOUT US</span>
                                    {/* <svg className="w-3 h-3 hidden lg:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                    <svg className="lg:hidden" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <circle cx="10" cy="10" r="9.5" fill="white" stroke="white" />
                                        <path d="M12.2717 8.16084L6.94403 13.4885L6.37835 12.9228L11.706 7.59516L7.40959 7.59516L7.41544 6.79452L13.0723 6.79452L13.0723 12.4514L12.2717 12.4572V8.16084Z" fill="#E97737" />
                                    </svg> */}
                                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 cursor-pointer transition-transform duration-300 ease-in-out text-[#FFFFFF] group-hover:-rotate-45 group-hover:bg-white group-hover:rounded-full group-hover:text-[#E97737]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                                        <circle className="group-hover:[stroke-width:0]" cx="10" cy="10" r="9.5" stroke="currentColor" strokeWidth="1" fill="none" />
                                        <path d="M12.8677 10.4H5.33331V9.6H12.8677L9.82971 6.562L10.4 6L14.4 10L10.4 14L9.82971 13.438L12.8677 10.4Z" fill="currentColor" />
                                    </svg>
                                </div>
                            </Button>

                            {/* Bottom Left Stat */}
                            <div className="mt-16 lg:mt-24">
                                <div className="h-[170px] w-[170px] md:h-[300px] md:w-[300px] p-6 bg-black/60 rounded-full p-6 border border-gray-700/50">
                                    <div className="text-[#E97737] text-center font-['Figtree'] text-[42px] md:text-[84px] font-bold leading-normal mt-3">25K+</div>
                                    <div className="text-white text-center font-['Figtree'] text-[13px] md:text-[26px] font-light leading-normal mb-1">Travellers Served</div>
                                    <div className="text-white text-center font-['Figtree'] text-[7px] md:text-[14px] font-normal leading-normal">Across solo trips, families, and corporate groups</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Stats */}
                        <div className="hidden lg:block flex-1 text-white space-y-6 lg:max-w-sm lg:ml-auto">
                            <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50">
                                <div className="text-[#E97737] font-['Figtree'] text-[24px] md:text-[40px] font-bold leading-[21px] mb-2 p-6">#TravelWithSoul</div>
                                <div className="space-y-4">
                                    <div className="p-6">
                                        <div className="text-[#E97737] font-['Figtree'] text-[44px] md:text-[70px] font-light leading-normal mb-2">10+</div>
                                        <div className="text-white font-['Figtree'] text:[16px] md:text-[26px] font-light leading-normal mb-1">Years of Experience</div>
                                        <div className="hidden md:block text-white font-['Figtree'] text-[14px] font-normal leading-normal">In pilgrimage and experiential travel planning</div>
                                    </div>

                                    <div className="p-6">
                                        <div className="text-[#E97737] font-['Figtree'] text-[44px] md:text-[70px] font-light leading-normal mb-2">30+</div>
                                        <div className="text-white font-['Figtree'] text:[16px] md:text-[26px] font-light leading-normal mb-1">Destinations Covered</div>
                                        <div className="hidden md:block text-white font-['Figtree'] text-[14px] font-normal leading-normal">Across India, Nepal, Tibet, Bhutan and South Asia</div>
                                    </div>

                                    <div className="p-6">
                                        <div className="text-[#E97737] font-['Figtree'] text-[44px] md:text-[70px] font-light leading-normal mb-2">4.9</div>
                                        <div className="text-white font-['Figtree'] text:[16px] md:text-[26px] font-light leading-normal mb-1">Happy Customer Rating</div>
                                        <div className="hidden md:block text-white font-['Figtree'] text-[14px] font-normal leading-normal">Based on authentic feedback and return journeys</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column on Mobile - Empty for spacing */}
                        <div className="lg:hidden flex-1 px-4 py-2 bg-black/60 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50">
                            <div className="flex flex-col">
                                <div className="text-[#E97737] font-['Figtree'] text-[24px] md:text-[40px] font-bold leading-[21px] mb-2 p-6">#TravelWithSoul</div>
                                <div className="space-y-4 flex flex-row gap-4">
                                    <div className="flex flex-col gap-2">
                                        <div className="text-[#E97737] font-['Figtree'] text-[44px] md:text-[70px] font-light leading-normal mb-2">10+</div>
                                        <div className="text-white font-['Figtree'] text:[16px] md:text-[26px] font-light leading-normal mb-1">Years of Experience</div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="text-[#E97737] font-['Figtree'] text-[44px] md:text-[70px] font-light leading-normal mb-2">30+</div>
                                        <div className="text-white font-['Figtree'] text:[16px] md:text-[26px] font-light leading-normal mb-1">Destinations Covered</div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="text-[#E97737] font-['Figtree'] text-[44px] md:text-[70px] font-light leading-normal mb-2">4.9★</div>
                                        <div className="text-white font-['Figtree'] text:[16px] md:text-[26px] font-light leading-normal mb-1">Happy Customer Rating</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
} 