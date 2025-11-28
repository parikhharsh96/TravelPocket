"use client";

import { useRef, useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Calendar, CheckCircle, MapPin, Play } from "lucide-react";
import { Separator } from "@/components/ui/separator"
import { useRouter } from "next/navigation";
import { useApi } from '@/lib/use-api';
import { API_ENDPOINTS } from '@/lib/constants';

export default function TestimonialCards() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const { data, loading, error, execute } = useApi<any>();
    const [experiences, setExperiences] = useState<any[]>([]);

    useEffect(() => {
        execute(API_ENDPOINTS.customerHome.getSharedExperiences);
    }, [execute]);

    useEffect(() => {
        if (data) {
            console.log('Shared Experiences API data:', data);
            if (data.data) {
                setExperiences(data.data);
            }
        }
        if (error) {
            console.error('Shared Experiences API error:', error);
        }
    }, [data, error]);

    const navigateToTravelVideos = () => {
        router.push("/videos"); //need to add dynamic routing later
    };

    const CARD_WIDTH = 400;
    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { clientWidth } = scrollRef.current;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -CARD_WIDTH : CARD_WIDTH,
                behavior: "smooth",
            });
        }
    };

    const getYouTubeEmbedUrl = (url: string) => {
        const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
        return videoId ? `https://www.youtube.com/embed/${videoId[1]}` : url;
    };

    const isYouTubeUrl = (url: string) => {
        return url.includes('youtube.com') || url.includes('youtu.be');
    };

    const ExperiencesSkeleton = () => (
        <>
            {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex-shrink-0 w-full h-[300px] sm:h-[320px] md:h-[350px] lg:h-[380px] w-[280px] md:w-[360px] lg:w-[480px] bg-white rounded-lg overflow-hidden snap-start">
                    <div className="h-[180px] md:h-[300px] relative">
                        <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded-lg" style={{ animationDelay: `${i * 0.1}s` }}></div>
                        <div className="absolute bottom-4 left-4 right-4">
                            <div className="bg-white shadow-[0px_8px_14px_rgba(0,0,0,0.12)] px-4 py-3 rounded-t-[8px] border-b-2 border-[#E97737]">
                                <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded mb-2" style={{ animationDelay: `${i * 0.1}s` }}></div>
                                <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded w-3/4 mb-1" style={{ animationDelay: `${i * 0.1}s` }}></div>
                                <div className="h-3 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded w-1/2" style={{ animationDelay: `${i * 0.1}s` }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );

    return (
        <>
            <style jsx>{`
                @keyframes shimmer {
                    0% { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }
            `}</style>
            <section className="container mx-auto px-4 pb-[25px] sm:px-6 md:px-8 lg:px-[50px]">

            <div className="flex flex-col gap-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-center justify-between py-10 relative mt-2">
                    {/* Title with background circle */}
                    <div className="flex-1 text-center">
                        {/* Text */}
                        <div className="">
                            <h2 className="text-[#1A2F46] text-center font-['Playfair_Display'] text-[28px] md:text-[36px] font-semibold leading-normal">
                                Experiences You Can Believe In
                            </h2>
                        </div>
                    </div>

                    {/* View All button (aligned right) */}
                    <Button variant="outline" className="group hidden md:block rounded-[6px] border border-[#E97737] ml-0 mt-6 md:ml-6 md:mt-0 cursor-pointer
                    bg-[linear-gradient(90deg,_#E97737_0%,_#E97737_50%,_transparent_50%)] 
             bg-[length:200%_100%] bg-[position:100%_0] 
             transition-[background-position] duration-300 ease-out
             hover:bg-[position:0_0]" onClick={navigateToTravelVideos}>
                        <div className="flex flex-row gap-2 items-center">
                            <span className="text-[#E97737] font-['Figtree'] text-[12px] md:text-[14px] font-semibold uppercase group-hover:text-white">View All</span>
                            <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 cursor-pointer transition-transform duration-300 ease-in-out text-[#E97737] group-hover:-rotate-45 group-hover:bg-white group-hover:rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                                <circle className="group-hover:[stroke-width:0]" cx="10" cy="10" r="9.5" stroke="currentColor" strokeWidth="1" fill="none" />
                                <path d="M12.8677 10.4H5.33331V9.6H12.8677L9.82971 6.562L10.4 6L14.4 10L10.4 14L9.82971 13.438L12.8677 10.4Z" fill="currentColor" />
                            </svg>
                        </div>
                    </Button>
                </div>
                {/* Slider */}
                <div className="relative px-[50px]">
                    {/* Left Arrow */}
                    <button
                        onClick={() => scroll("left")}
                        className="absolute left-[0px] top-1/2 -translate-y-1/2 shadow-md rounded-full p-2 z-10"
                        style={{ background: '#E3E6EE' }}
                    >
                        <ArrowLeft className="h-5 w-5 cursor-pointer" />
                    </button>

                    <div className="slider-wrp">
                        {/* Cards */}
                        <div
                            ref={scrollRef}
                            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-6 px-4 scrollbar-hide no-scrollbar"
                        >
                            {loading ? (
                                <ExperiencesSkeleton />
                            ) : (
                                experiences.map((exp, index) => (
                                <div key={exp.experienceId} className="flex-shrink-0 w-full h-[300px] sm:h-[320px] md:h-[350px] lg:h-[380px] w-[280px] md:w-[360px] lg:w-[480px] bg-white rounded-lg overflow-hidden snap-start">
                                    <div className="h-[180px] md:h-[300px] relative">
                                        {!isYouTubeUrl(exp.videoUrl) ? ( //remove ! feom isYoutubeURl
                                            <iframe
                                                src={getYouTubeEmbedUrl(exp.videoUrl)}
                                                className="w-full h-full rounded-lg"
                                                loading="lazy"
                                                style={{ transform: "translateY(-33px)" }}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        ) : (
                                            <video
                                                // poster={exp.imageUrl}
                                                poster="/images/testimonialCards/video_poster.png"
                                                src={exp.videoUrl}
                                                className="w-full h-full object-cover rounded-lg"
                                                style={{ transform: "translateY(-33px)" }}
                                                controls={true}
                                                muted
                                                playsInline
                                            >
                                            </video>
                                        )}

                                        <div className="absolute top-[50%] md:top-[55%] rounded-lg p-6 sm:p-6 flex items-center justify-center w-full">
                                            <div className="flex flex-row items-center justify-center max-w-[230px] max-h-[150px] md:max-w-[360px] md:max-h-[165px]">
                                                <div className="flex flex-col gap-2 bg-white shadow-[0px_8px_14px_rgba(0,0,0,0.12)] px-4 py-3 rounded-t-[8px] border-b-2 border-[#E97737]">
                                                    <h2
                                                        className="font-semibold font-['Figtree'] text-[14px] md:text-[20px] leading-tight text-black"
                                                    >
                                                        {exp.title}
                                                    </h2>

                                                    <div className="flex flex-col gap-1">
                                                        <p
                                                            className="font-medium font-['Figtree'] text-[12px] md:text-[14px] leading-tight text-black"
                                                        >
                                                            {exp.postedBy}
                                                        </p>
                                                        <p
                                                            className="font-normal font-['Figtree'] text-[10px] md:text-[12px] leading-tight uppercase text-black"
                                                        >
                                                            {exp.place}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )))}
                        </div>
                    </div>
                    {/* Right Arrow */}
                    <Button
                        onClick={() => scroll("right")}
                        className="absolute right-[0px] top-1/2 -translate-y-1/2 shadow-md rounded-full p-2 z-10 cursor-pointer"
                        style={{ background: '#E3E6EE' }}
                    >
                        <ArrowRight className="h-5 w-5" />
                    </Button>
                </div>

                {/* View All button Mobile view */}
                <div className="flex items-center justify-center gap-2 md:hidden">
                    <Button variant="outline" className="group relative rounded-[6px] border border-[#E97737] mt-1 cursor-pointer
                    bg-[linear-gradient(90deg,_#E97737_0%,_#E97737_50%,_transparent_50%)] 
             bg-[length:200%_100%] bg-[position:100%_0] 
             transition-[background-position] duration-300 ease-out
             hover:bg-[position:0_0]" onClick={navigateToTravelVideos}>
                        <span className="text-[#E97737] font-['Figtree'] text-[12px] md:text-[14px] font-semibold uppercase group-hover:text-white">View All</span>
                        <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 cursor-pointer transition-transform duration-300 ease-in-out text-[#E97737] group-hover:-rotate-45 group-hover:bg-white group-hover:rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                            <circle className="group-hover:[stroke-width:0]" cx="10" cy="10" r="9.5" stroke="currentColor" strokeWidth="1" fill="none" />
                            <path d="M12.8677 10.4H5.33331V9.6H12.8677L9.82971 6.562L10.4 6L14.4 10L10.4 14L9.82971 13.438L12.8677 10.4Z" fill="currentColor" />
                        </svg>
                    </Button>
                </div>
            </div>
        </section>
        </>
    );
}