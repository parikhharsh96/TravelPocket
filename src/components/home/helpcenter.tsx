import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CreditCard, FileText, Heart, HelpCircle } from "lucide-react"
import { ArrowCircleIcon } from "../shared/ArrowCircleIcon"

const faqData = [
    {
        imgSrc: "/images/helpcenter/noun-passport-6740635.svg",
        title: "“I need assistance with Visa”",
        action: "Talk with expert",
    },
    {
        imgSrc: "/images/helpcenter/noun-bag-2354441.svg",
        title: "“What is included in your travel packages?”",
        action: "View Details",
    },
    {
        imgSrc: "/images/helpcenter/noun-document-7837712.svg",
        title: "“What documents do I need to carry?”",
        action: "View Details",
    },
    {
        imgSrc: "/images/helpcenter/noun-medicine-7921226.svg",
        title: "“I’m worried, I have a medical condition”",
        action: "Talk with expert",
    },
]

export function HelpCenterSection() {
    return (
        <section className="py-16 bg-[#FFF]">
            <div className="max-w-[1920px] mx-auto px-4 pb-[25px] sm:px-6 md:px-8 lg:px-[50px]"> {/*max-w-6xl*/}
                <div className="flex flex-col md:flex-row items-center justify-between py-10 md:w-full lg:w-full lg:mb-[90px]">
                    {/* Title with background circle */}
                    <div className="relative flex-1 text-center">
                        {/* Circle background */}
                        <div className="absolute left-1/2 -translate-x-1/2 -top-6" style={{ top: '-35px' }}>
                            <img
                                src="/images/blogs/titledesign.svg"
                                alt="Title Circle"
                                width="150px"
                                height="150px"
                                className="mx-auto"
                            />
                        </div>

                        {/* Text */}
                        <div className="relative">
                            <p className="text-[#1A2F46] text-center font-['Figtree'] text-base font-semibold leading-normal capitalize">FAQs</p>
                            <h2 className="text-[#1A2F46] text-center font-['Playfair_Display'] text-[36px] font-semibold leading-normal">
                                Help Center
                            </h2>
                        </div>
                    </div>

                    {/* View All button (aligned right) */}
                    <Button variant="outline" className="group relative right-[40px] rounded-[6px] border border-[#E97737] ml-0 mt-6 md:mt-0 cursor-pointer bg-transparent transition-all duration-300 hover:bg-[#E97737] hover:border-[#E97737]">
                        {/* <span className="text-[#E97737] font-['Figtree'] text-sm font-semibold uppercase">View All</span>
                                <img
                                    src="/images/trendingpackages/Group1000007348.svg"
                                    alt=""
                                    width={20}
                                    height={20}
                                    className="mx-auto"
                                /> */}
                        <div className="group flex items-center gap-2 cursor-pointer">
                            <p className="text-[#E97737] font-['Figtree'] text-sm font-semibold uppercase group-hover:text-white">
                                View All
                            </p>
                            <ArrowCircleIcon className="w-6 h-6 text-[#E97737] group-hover:text-white" />
                        </div>
                    </Button>
                </div>

                {/* FAQ Cards Grid - Responsive */}
                <div className="min-h-[136px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pl-0 md:pl-[50px] lg:pl-[80px] gap-[100px] lg:gap-[32px]">
                    {faqData.map((faq, index) => {
                        // const IconComponent = faq.icon
                        return (
                            <Card key={index} className="group lg:max-w-[255px] bg-white border-0 shadow-sm">
                                <CardContent className="p-6 text-center relative">
                                    <div className="w-[97px] h-[97px] absolute top-[-70px] left-[-70px] bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-600 transition-colors duration-200">
                                        <img src={faq.imgSrc} className="" />
                                    </div>

                                    {/* FAQ Title */}
                                    <h3 className="min-h-[80px] text-[#1A2F46] font-['Figtree'] text-[18px] font-medium leading-normal flex items-center justify-center">
                                        {faq.title}
                                    </h3>

                                    {/* Action Button */}
                                    <Button
                                        variant="ghost"
                                        className="group p-0 h-auto cursor-pointer hover:scale-105 transform transition"
                                    >
                                        <span className="underline-offset-4 text-[#1A2F46] font-['Figtree'] text-[16px] font-bold leading-normal underline">
                                            {faq.action}
                                        </span>
                                        <ArrowCircleIcon className="w-18 h-18 rounded-[18px] text-[#1A2F46]" />
                                    </Button>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
