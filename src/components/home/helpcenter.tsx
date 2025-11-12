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
            <div className="container mx-auto px-4 pb-[25px] sm:px-6 md:px-8 lg:px-[50px]"> {/*max-w-6xl*/}
                <div className="flex flex-col md:flex-row md:items-center justify-between py-10 md:w-full lg:w-full lg:mb-[90px]">
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
                            <p className="text-[#1A2F46] text-center font-['Figtree'] text-[14px] md:text-base font-semibold leading-normal capitalize">FAQs</p>
                            <h2 className="text-[#1A2F46] text-center font-['Playfair_Display'] text-[28px] md:text-[36px] font-semibold leading-normal">
                                Help Center
                            </h2>
                        </div>
                    </div>

                    {/* View All button (aligned right) */}
                    <Button variant="outline" className="hidden md:block group relative rounded-[6px] border border-[#E97737] ml-0 mt-6 md:mt-0 cursor-pointer
                    bg-[linear-gradient(90deg,_#E97737_0%,_#E97737_50%,_transparent_50%)] 
             bg-[length:200%_100%] bg-[position:100%_0] 
             transition-[background-position] duration-300 ease-out
             hover:bg-[position:0_0]">
                        {/* <span className="text-[#E97737] font-['Figtree'] text-sm font-semibold uppercase">View All</span>
                                <img
                                    src="/images/trendingpackages/Group1000007348.svg"
                                    alt=""
                                    width={20}
                                    height={20}
                                    className="mx-auto"
                                /> */}
                        <div className="flex items-center gap-2 cursor-pointer">
                            <p className="text-[#E97737] font-['Figtree'] text-[14px] md:text-sm font-semibold uppercase group-hover:text-white">
                                View all FAQs
                            </p>
                            {/* <ArrowCircleIcon className="w-6 h-6 text-[#E97737] group-hover:text-white" /> */}
                            <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 cursor-pointer transition-transform duration-300 ease-in-out text-[#E97737] group-hover:-rotate-45 group-hover:bg-white group-hover:rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                                <circle className="group-hover:[stroke-width:0]" cx="10" cy="10" r="9.5" stroke="currentColor" strokeWidth="1" fill="none" />
                                <path d="M12.8677 10.4H5.33331V9.6H12.8677L9.82971 6.562L10.4 6L14.4 10L10.4 14L9.82971 13.438L12.8677 10.4Z" fill="currentColor" />
                            </svg>
                        </div>
                    </Button>
                </div>

                {/* FAQ Cards Grid - Responsive */}
                {/* <div className="min-h-[136px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pl-0 md:pl-[50px] lg:pl-[80px] gap-[100px] lg:gap-[32px]">
                    {faqData.map((faq, index) => {
                       
                        return (
                            <Card key={index} className="group lg:max-w-[315px] bg-white border-0 shadow-sm">
                                <CardContent className="p-6 text-center relative">
                                    <div className="w-[97px] h-[97px] absolute top-[-70px] left-[-70px] bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-600 transition-colors duration-200">
                                        <img src={faq.imgSrc} className="" />
                                    </div>

                                   
                                    <h3 className="min-h-[80px] text-[#1A2F46] font-['Figtree'] text-[18px] font-medium leading-normal flex items-center justify-center">
                                        {faq.title}
                                    </h3>

                                 
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
                </div> */}

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 px-4 sm:px-6 lg:px-12 mt-12 md:mt-8">
                    {faqData.map((faq, index) => (
                        <Card
                            key={index}
                            className="group relative bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition duration-200 flex flex-col text-left"
                        >
                            <CardContent className="p-6 pt-10 flex flex-col justify-between h-full relative">
                                {/* Orange Icon Box at Top-Left */}
                                <div
                                    className="w-12 h-12 md:w-14 md:h-14 bg-orange-500 rounded-lg flex items-center justify-center absolute -top-[25px] -left-[25px] group-hover:bg-orange-600 transition-colors duration-200"
                                >
                                    <img src={faq.imgSrc} alt="" className="w-5 h-5 md:w-6 md:h-6" />
                                </div>

                                {/* Title */}
                                <h3 className="text-[#1A2F46] font-['Figtree'] text-[14px] md:text-[18px] font-medium leading-normal flex items-center justify-center mb-4 mt-4">
                                    {faq.title}
                                </h3>

                                {/* Action Button */}
                                <Button
                                    variant="ghost"
                                    className="group p-0 h-auto flex items-center flex-wrap flex-row gap-1 underline-offset-4 text-[#1A2F46] font-['Figtree'] text-[14px] md:text-[16px] font-bold leading-normal underline cursor-pointer"
                                >
                                    <div className="flex items-center gap-1">
                                        <span>{faq.action}</span>
                                        {/* <ArrowCircleIcon className="w-4 h-4 rounded-[18px] text-[#1A2F46]" /> */}
                                        <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 cursor-pointer transition-transform duration-300 ease-in-out text-[#1A2F46] group-hover:-rotate-45 group-hover:bg-[#1A2F46] group-hover:text-white group-hover:rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 19" fill="none">
                                            <circle className="group-hover:[stroke-width:0]" cx="9" cy="9" r="8.5" stroke="currentColor" strokeWidth="1" fill="none" />
                                            <path d="M11.581 9.3599H4.80006V8.6399H11.581L8.84682 5.9057L9.36006 5.3999L12.9601 8.9999L9.36006 12.5999L8.84682 12.0941L11.581 9.3599Z" fill="currentColor" />
                                        </svg>
                                    </div>

                                    {/* <ArrowCircleIcon className="w-4 h-4 rounded-[18px] text-[#1A2F46]" /> */}
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

            </div>
        </section>
    )
}
