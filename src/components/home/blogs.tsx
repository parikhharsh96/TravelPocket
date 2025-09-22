"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowCircleIcon } from "@/components/shared/ArrowCircleIcon";

const packages = [
    {
        id: 1,
        title: "Kailash Mansarovar Yatra Cost – Complete Breakdown for 2025",
        description: "The Kailash Mansarovar Yatra is a journey of immense spiritual significance. But for many yatris, understanding the exact cost of the...",
        image: "/images/blogs/f1d4bb31385135c2906d843d29601554b5a783d8.png",
        date: "26 June 2025",
        chip: "Kailash Mansarovar",
    },
    {
        id: 2,
        title: "Mansarovar Lake China – Sacred Waters at the Roof of the World",
        description: "Located at the foot of Kailash, Mansarovar Lake in China is one of the highest freshwater lakes in the world. It plays a central role in the ...",
        image: "/images/blogs/8830e7c2ce9d17c23b76b02e562c724c3b91ea75.png",
        date: "26 June 2025",
        chip: "Kailash Mansarovar",
    },
    {
        id: 3,
        title: "Panch Kailash yatra : The Five Sacred Kailash Peaks – A Complete Spiritual Guide",
        description: "In the majestic folds of the Himalayas lie five sacred peaks that carry divine resonance for millions of devotees – the Panch Kailash....",
        image: "/images/blogs/f1d4bb31385135c2906d843d29601554b5a783d8.png",
        date: "26 June 2025",
        chip: "Kailash Mansarovar",
    },
    {
        id: 4,
        title: "Pashupatinath Temple Kathmandu: A Complete Guide to Nepal's Most Sacred Shiva Temple",
        description: "Nestled on the banks of the sacred Bagmati River in Kathmandu, Pashupatinath Temple is not only Nepal’s most revered Hindu temple...",
        image: "/images/blogs/0e80f0a9eb66fdc49bf9c9513ace15d589b5df9e.png",
        date: "26 June 2025",
        chip: "Nepal Tours",
    },
    {
        id: 5,
        title: "What to pack for Adi Kailash Yatra-Complete Guide",
        description: "The Kailash Mansarovar Yatra is a journey of immense spiritual significance. But for many yatris, understanding the exact cost of the...",
        image: "/images/blogs/8830e7c2ce9d17c23b76b02e562c724c3b91ea75.png",
        date: "26 June 2025",
        chip: "Adi Kailash",
    }
];

export default function Blogs() {


    return (
        <section className="max-w-[1920px] mx-auto px-4 pb-[25px] sm:px-6 md:px-8 lg:px-[50px] bg-[#FFFFF]">
            {/* Header */}
            <div className="flex flex-col items-center justify-between py-10 relative mb-4 mt-2 gap-4">
                <div className="flex flex-col md:flex-row items-center justify-between py-10 md:w-full lg:w-full">
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
                            <p className="text-[#1A2F46] text-center font-['Figtree'] text-base font-semibold leading-normal capitalize">Blogs</p>
                            <h2 className="text-[#1A2F46] text-center font-['Playfair_Display'] text-[36px] font-semibold leading-normal">
                                Insights for Every Traveller
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

                <div className="relative">
                    <div className="blogs-wrp">
                        {/* Cards */}
                        <div
                            className="flex flex-col md:flex-row lg:flex-row gap-[55px] overflow-x-auto scroll-smooth scrollbar-hide no-scrollbar"
                        >
                            {packages.map((pkg) => (
                                <Card key={pkg.id} className="flex-col items-start gap-[14px] w-[300px] max-w-[320px] flex-shrink-0 rounded-xl pb-[20px]">
                                    <div className="relative">
                                        <img
                                            src={pkg.image}
                                            alt={pkg.title}
                                            className="w-full h-[248px] object-cover rounded-t-xl aspect-[300.36/247]"
                                        />

                                    </div>
                                    <CardContent className="py-0 space-y-2 flex flex-col items-start gap-2">
                                        <div className="flex px-[10px] py-[4px] justify-center items-center gap-[10px] rounded-[40px] bg-[#FBF0EB]">
                                            <div className="">
                                                <p className="text-[#E97737] font-['Figtree'] text-[14px] font-semibold leading-[16px]">{pkg.chip}</p>
                                            </div>
                                        </div>
                                        <div className="flex h-[184px] flex-col items-start gap-6 self-stretch">
                                            <div className="flex flex-col items-start gap-[10px] self-stretch">
                                                <div className="flex flex-col items-start gap-2 self-stretch">
                                                    <p className="text-[#323232] font-['Figtree'] text-[12px] font-normal leading-5 uppercase">
                                                        {pkg.date}
                                                    </p>
                                                    <p className="text-[#323232] font-['Figtree'] text-[16px] font-bold leading-[22px]">
                                                        {pkg.title}
                                                    </p>
                                                </div>
                                                <p className="text-[#323232] font-['Figtree'] text-[14px] font-normal leading-[20px]">
                                                    {pkg.description}
                                                </p>
                                            </div>
                                            {/* <div className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-140">
                                            <p className="text-[#E97737] text-center font-['Figtree'] text-[14px] font-medium leading-normal uppercase">
                                                READ MORE
                                            </p>
                                            <img src="/images/blogs/rightarrow_icon.svg"
                                                alt="Right Icon" className="aspect-square w-[18px] h-[19px]" />
                                        </div> */}
                                        </div>
                                    </CardContent>
                                    {/* <CardFooter> */}
                                    {/* Buttons */}
                                    <div className="flex items-center gap-2">
                                        {/* <p className="text-[#E97737] text-center font-['Figtree'] text-[14px] font-medium leading-normal uppercase">
                                        READ MORE
                                    </p> */}
                                        {/* <img src="/images/blogs/rightarrow_icon.svg"
                                        alt="Right Icon" className="aspect-square w-[18px] h-[19px]" /> */}
                                        {/* <svg xmlns="http://www.w3.org/2000/svg"
                                        width="18" height="19"
                                        viewBox="0 0 18 19"
                                        fill="none"
                                        className="inline-block">
                                        <circle cx="9" cy="9" r="8.5" stroke="#E97737" />
                                        <path d="M11.581 9.36039H4.80005V8.64039H11.581L8.84681 5.90619L9.36005 5.40039L12.96 9.00039L9.36005 12.6004L8.84681 12.0946L11.581 9.36039Z" fill="#E97737" />
                                    </svg> */}

                                        <div className="group flex items-center gap-2 cursor-pointer bg-transparent transition-all duration-300 hover:bg-[#E97737] hover:border-[#E97737] p-2">
                                            <p className="text-[#E97737] text-center font-['Figtree'] text-[14px] font-medium leading-normal uppercase group-hover:text-white">
                                                READ MORE
                                            </p>
                                            <ArrowCircleIcon className="w-6 h-6 text-[#E97737] group-hover:text-white" />
                                        </div>

                                    </div>
                                    {/* </CardFooter> */}
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
}