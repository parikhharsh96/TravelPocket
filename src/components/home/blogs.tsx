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
        <section className="container mx-auto px-6 pb-[25px] sm:px-6 md:px-8 lg:px-[50px] mt-8 mb-4 bg-[#FFFFF]">

            <div className="flex flex-col gap-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-center justify-between py-10 relative md:mb-4 md:mt-2">
                    {/* Title with background circle */}
                    <div className="relative flex-1 text-center">
                        {/* Circle background */}
                        <div className="absolute left-1/2 -translate-x-1/2 -top-6" style={{ top: '-40px' }}>
                            <img
                                // src="/images/blogs/titledesign.svg"
                                src="/images/trendingpackages/titledesign.svg"
                                alt="Title Circle"
                                width={150}
                                height={150}
                                className="mx-auto"
                            />
                        </div>

                        {/* Text */}
                        <div className="relative">
                            <p className="text-[#1A2F46] text-center font-['Figtree'] text-[14px] md:text-base font-semibold leading-normal capitalize">Blogs</p>
                            <h2 className="text-[#1A2F46] text-center font-['Playfair_Display'] text-[28px] md:text-[36px] font-semibold leading-normal">
                                Insights for Every Traveller
                            </h2>
                        </div>
                    </div>

                    {/* View All button (aligned right) */}
                    <Button variant="outline" className="group hidden md:block rounded-[6px] border border-[#E97737] ml-0 mt-6 md:ml-6 md:mt-0 cursor-pointer
                    bg-[linear-gradient(90deg,_#E97737_0%,_#E97737_50%,_transparent_50%)] 
             bg-[length:200%_100%] bg-[position:100%_0] 
             transition-[background-position] duration-300 ease-out
             hover:bg-[position:0_0]">
                        <div className="flex flex-row gap-2 items-center">
                            <span className="text-[#E97737] font-['Figtree'] text-[14px] md:text-sm font-semibold uppercase group-hover:text-white">View All</span>
                            {/* <img
                                src="/images/trendingpackages/Group1000007348.svg"
                                alt=""
                                width={20}
                                height={20}
                                className="mx-auto"
                            /> */}
                            <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 cursor-pointer transition-transform duration-300 ease-in-out text-[#E97737] group-hover:-rotate-45 group-hover:bg-white group-hover:rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                                <circle className="group-hover:[stroke-width:0]" cx="10" cy="10" r="9.5" stroke="currentColor" strokeWidth="1" fill="none" />
                                <path d="M12.8677 10.4H5.33331V9.6H12.8677L9.82971 6.562L10.4 6L14.4 10L10.4 14L9.82971 13.438L12.8677 10.4Z" fill="currentColor" />
                            </svg>
                        </div>
                    </Button>
                </div>

                <div className="relative">
                    <div className="slider-wrp">
                        {/* Cards */}
                        <div
                            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide no-scrollbar"
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
                                                <p className="text-[#E97737] font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-[16px]">{pkg.chip}</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-start gap-6 self-stretch"> {/**h-[170px] md:h-[185px] */}
                                            <div className="flex flex-col items-start gap-[10px] self-stretch">
                                                <div className="flex flex-col items-start gap-2 self-stretch">
                                                    <p className="text-[#323232] font-['Figtree'] text-[9px] md:text-[12px] font-normal leading-5 uppercase">
                                                        {pkg.date}
                                                    </p>
                                                    <p className="text-[#323232] font-['Figtree'] text-[14px] md:text-[16px] font-bold leading-[22px]">
                                                        {pkg.title}
                                                    </p>
                                                </div>
                                                <p className="text-[#323232] font-['Figtree'] text-[12px] md:text-[14px] font-normal leading-[20px]">
                                                    {pkg.description}
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>

                                    {/* Buttons */}
                                    <div className="flex items-center gap-2 py-2">
                                        <div className="group flex items-center gap-2 cursor-pointer bg-transparent transition-all duration-300">
                                            <p className="text-[#E97737] text-center font-['Figtree'] text-[11px] md:text-[14px] font-medium leading-normal uppercase group-hover:scale-101 transition-transform duration-300 ease-in-out">
                                                READ MORE
                                            </p>
                                            {/* <ArrowCircleIcon className="w-6 h-6 text-[#E97737] group-hover:text-white" /> */}
                                            <svg className="w-4 h-4 md:w-6 md:h-6 lg:w-6 lg:h-6 cursor-pointer transition-transform duration-300 ease-in-out text-[#E97737] group-hover:-rotate-45 group-hover:bg-[#E97737] group-hover:text-white group-hover:rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 19" fill="none">
                                                <circle className="group-hover:[stroke-width:0]" cx="9" cy="9" r="8.5" stroke="currentColor" strokeWidth="1" fill="none" />
                                                <path d="M11.581 9.36039H4.80005V8.64039H11.581L8.84681 5.90619L9.36005 5.40039L12.96 9.00039L9.36005 12.6004L8.84681 12.0946L11.581 9.36039Z" fill="currentColor" />
                                            </svg>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>

                {/* View All button Mobile view */}
                <div className="flex items-center justify-center gap-2 md:hidden">
                    <Button variant="outline" className="group relative rounded-[6px] border border-[#E97737] mt-1 cursor-pointer
                    bg-[linear-gradient(90deg,_#E97737_0%,_#E97737_50%,_transparent_50%)] 
             bg-[length:200%_100%] bg-[position:100%_0] 
             transition-[background-position] duration-300 ease-out
             hover:bg-[position:0_0]">
                        <span className="text-[#E97737] font-['Figtree'] text-[14px] md:text-sm font-semibold uppercase group-hover:text-white">View All</span>
                        {/* <img
                            src="/images/trendingpackages/Group1000007348.svg"
                            alt=""
                            width={20}
                            height={20}
                            className="mx-auto"
                        /> */}
                        <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 cursor-pointer transition-transform duration-300 ease-in-out text-[#E97737] group-hover:-rotate-45 group-hover:bg-white group-hover:rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                            <circle className="group-hover:[stroke-width:0]" cx="10" cy="10" r="9.5" stroke="currentColor" strokeWidth="1" fill="none" />
                            <path d="M12.8677 10.4H5.33331V9.6H12.8677L9.82971 6.562L10.4 6L14.4 10L10.4 14L9.82971 13.438L12.8677 10.4Z" fill="currentColor" />
                        </svg>
                    </Button>
                </div>
            </div>
        </section>
    );
}




{/* <div className="blogs-wrp hidden">

    <div
        className="flex flex-col md:flex-row lg:flex-row gap-6 overflow-x-auto scroll-smooth scrollbar-hide no-scrollbar flex-wrap"
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
                       
                    </div>
                </CardContent>
               
                <div className="flex items-center gap-2">
                    

                    <div className="group flex items-center gap-2 cursor-pointer bg-transparent transition-all duration-300 hover:bg-[#E97737] hover:border-[#E97737] p-2">
                        <p className="text-[#E97737] text-center font-['Figtree'] text-[14px] font-medium leading-normal uppercase group-hover:text-white">
                            READ MORE
                        </p>
                        <ArrowCircleIcon className="w-6 h-6 text-[#E97737] group-hover:text-white" />
                    </div>

                </div>
                
            </Card>
        ))}
    </div>
</div> */}

{/* <div className="flex items-center justify-center gap-2 hidden">
                    <Button
                        variant="outline"
                        className="group relative rounded-[6px] border border-[var(--Primary,#E97737)] mt-1 cursor-pointer 
             bg-[linear-gradient(90deg,_#E97737_0%,_#E97737_50%,_transparent_50%)] 
             bg-[length:200%_100%] bg-[position:100%_0] 
             transition-[background-position] duration-300 ease-out
             hover:bg-[position:0_0]"
                    >
                        <span className="text-[#E97737] font-['Figtree'] text-[14px] md:text-sm font-semibold uppercase group-hover:text-white">
                            View All
                        </span>

                        <svg
                            className="ml-2 w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 transition-transform duration-300 ease-in-out text-[#E97737] group-hover:-rotate-45 group-hover:bg-white group-hover:rounded-full"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="none"
                        >
                            <circle className="group-hover:[stroke-width:0]" cx="10" cy="10" r="9.5" stroke="currentColor" strokeWidth="1" fill="none" />
                            <path
                                d="M12.8677 10.4H5.33331V9.6H12.8677L9.82971 6.562L10.4 6L14.4 10L10.4 14L9.82971 13.438L12.8677 10.4Z"
                                fill="currentColor"
                            />
                        </svg>
                    </Button>

                </div> */}