"use client";

import { Button } from "../ui/button";

export default function Marquee() {
    return (
        <>
            <section className="w-full bg-[linear-gradient(180deg,#F3F8FC_0%,#D0E0EE_50.73%,rgba(238,245,251,0)_100%)]">
                {/* <div className="w-full bg-[url('/images/marquee/24bc226117abfea57056d1a3d4d4cbbfdb2af8f7.jpg')] bg-cover bg-center"> */}
                <div className="max-w-[1920px] mx-auto">
                    <div className="flex items-center gap-[50px]">
                        <div className="border-[#5A6C9C] px-2 py-1 inline-block">
                            <span className="font-[Figtree] text-[74px] font-bold leading-normal tracking-[1.48px] uppercase text-stroke">Travel</span>
                        </div>
                        <div className="dvdr-wrpr">
                            <img src="/images/marquee/divider.svg"
                                alt="Marquee Divider" />
                        </div>
                        <div className="border-[#5A6C9C] px-2 py-1 inline-block">
                            <span className="font-[Figtree] text-[74px] font-bold leading-normal tracking-[1.48px] uppercase text-stroke">Himalayas</span>
                        </div>
                        <div className="dvdr-wrpr">
                            <img src="/images/marquee/divider.svg"
                                alt="Marquee Divider" />
                        </div>
                        <div className="border-[#5A6C9C] px-2 py-1 inline-block">
                            <span className="font-[Figtree] text-[74px] font-bold leading-normal tracking-[1.48px] uppercase text-stroke">India</span>
                        </div>
                        <div className="dvdr-wrpr">
                            <img src="/images/marquee/divider.svg"
                                alt="Marquee Divider" />
                        </div>
                        <div className="border-[#5A6C9C] px-2 py-1 inline-block">
                            <span className="font-[Figtree] text-[74px] font-bold leading-normal tracking-[1.48px] uppercase text-stroke">Adventure</span>
                        </div>
                        {/* <div className="dvdr-wrpr">
                    <img src="/images/marquee/divider.svg"
                        alt="Marquee Divider" />
                </div> */}
                    </div>
                </div>
            </section>
            {/* <section className="w-full bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(270deg, rgba(102, 102, 102, 0.00) 0.39%, rgba(0, 0, 0, 0.60) 65.95%), url('/images/marquee/24bc226117abfea57056d1a3d4d4cbbfdb2af8f7.jpg')`
                }}>
                <div
                    className="absolute inset-0 -z-10 bg-[linear-gradient(270deg,rgba(102,102,102,0)_0.39%,rgba(0,0,0,0.6)_65.95%)] backdrop-blur-0"
                />
                <div className="container mx-auto px-4 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 max-w-lg">
                        <p className="text-sm uppercase tracking-wide">Get to know us</p>
                        <h2 className="text-3xl lg:text-4xl font-bold leading-snug">
                            Our Purpose, <br /> Our Journey
                        </h2>
                        <p className="text-gray-200">
                            Travel Packet is a team of passionate travelers and spiritual seekers
                            who believe every journey should be meaningful, safe, and soul
                            stirring. With over a decade of experience, we specialize in curating
                            sacred travel experiences that stay with you long after your return.
                        </p>

                        <Button variant="secondary" className="mt-4">
                            ABOUT US
                        </Button>
                        <div className="mt-10">
                            <div className="bg-black/60 w-40 h-40 flex flex-col justify-center items-center rounded-full text-center">
                                <p className="text-3xl font-bold text-orange-400">25K+</p>
                                <p className="text-sm text-gray-200">
                                    Travellers Served <br /> across tours, families, and corporate
                                    groups
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-8 bg-black/60 p-6 rounded-lg">
                        <h3 className="text-orange-400 font-semibold text-lg">
                            #TravelWithSoul
                        </h3>

                        <div className="space-y-6">
                            <div>
                                <p className="text-3xl font-bold text-orange-400">10+</p>
                                <p className="text-sm text-gray-200">Years of Experience</p>
                            </div>

                            <div>
                                <p className="text-3xl font-bold text-orange-400">30+</p>
                                <p className="text-sm text-gray-200">
                                    Destinations Covered <br /> (India, Nepal, Tibet, Bhutan, South
                                    Asia)
                                </p>
                            </div>

                            <div>
                                <p className="text-3xl font-bold text-orange-400">4.9</p>
                                <p className="text-sm text-gray-200">
                                    Happy Customer Rating <br /> (based on authentic feedback)
                                </p>
                            </div>
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
                <div className="mx-auto px-6 py-16 h-full min-h-screen max-w-[1920px]">
                    <div className="flex flex-col lg:flex-row justify-between items-start h-full min-h-[80vh] gap-8 lg:gap-16">
                        {/* Left Column - Content */}
                        <div className="flex-1 text-white space-y-6 max-w-lg">
                            <div className="space-y-2">
                                <p className="text-white font-[Figtree] text-[16px] font-semibold leading-normal">Get to know us</p>
                                <h1 className="text-white font-['Playfair_Display'] text-[36px] font-semibold leading-normal">
                                    Our Purpose,<br />
                                    Our Journey
                                </h1>
                            </div>

                            <p className="text-white font-[Figtree] text-[18px] font-light leading-[30px]">
                                Travel Racket is a team of passionate travelers and spiritual
                                seekers who believe every journey should be meaningful, soulful,
                                and soul-stirring. With over a decade of experience, we
                                specialize in crafting sacred and experiential trips that stay with
                                you long after your return.
                            </p>

                            <button className="flex items-center gap-2 border border-orange-500 text-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 group">
                                ABOUT US
                                <div className="w-6 h-6 rounded-full border border-orange-500 flex items-center justify-center group-hover:border-white">
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </button>

                            {/* Bottom Left Stat */}
                            <div className="mt-16 lg:mt-24">
                                <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-orange-500/30 max-w-xs">
                                    <div className="text-3xl lg:text-4xl font-bold text-orange-500 mb-2">25K+</div>
                                    <div className="text-white font-semibold mb-1">Travellers Served</div>
                                    <div className="text-sm text-gray-300">Across solo trips, families, and corporate groups</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Stats */}
                        <div className="flex-1 text-white space-y-6 lg:max-w-sm lg:ml-auto">
                            <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50">
                                <div className="text-2xl lg:text-3xl font-bold text-orange-500 mb-2">#TravelWithSoul</div>
                            </div>

                            <div className="space-y-4">
                                <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-orange-500/30">
                                    <div className="text-3xl lg:text-4xl font-bold text-orange-500 mb-2">10+</div>
                                    <div className="text-white font-semibold mb-1">Years of Experience</div>
                                    <div className="text-sm text-gray-300">In pilgrimage and experiential travel planning</div>
                                </div>

                                <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-orange-500/30">
                                    <div className="text-3xl lg:text-4xl font-bold text-orange-500 mb-2">30+</div>
                                    <div className="text-white font-semibold mb-1">Destinations Covered</div>
                                    <div className="text-sm text-gray-300">Across India, Nepal, Tibet, Bhutan and South Asia</div>
                                </div>

                                <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-orange-500/30">
                                    <div className="text-3xl lg:text-4xl font-bold text-orange-500 mb-2">4.9</div>
                                    <div className="text-white font-semibold mb-1">Happy Customer Rating</div>
                                    <div className="text-sm text-gray-300">Based on authentic feedback and return journeys</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
} 