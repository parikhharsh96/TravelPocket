"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowCircleIcon } from "@/components/shared/ArrowCircleIcon";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useApi } from '@/lib/use-api';
import { API_ENDPOINTS } from '@/lib/constants';

interface Blog {
  blogId: number
  title: string
  publishDate: string
  location: string
  shortDescription: string
  longDescription: string
  imageUrl: string
}

export default function Blogs() {
    const { data, loading, error, execute } = useApi<any>();
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const router = useRouter();

    useEffect(() => {
        const apiUrl = `${API_ENDPOINTS.customerHome.getBlogs}?userid=0&pageno=1&pagesize=10`;
        execute(apiUrl);
    }, [execute]);

    useEffect(() => {
        if (data) {
            console.log('Blogs API data:', data);
            if (data.data) {
                setBlogs(data.data);
            }
        }
        if (error) {
            console.error('Blogs API error:', error);
        }
    }, [data, error]);

    const navigateToBlogs = () => {
        router.push("/blogs"); //need to add dynamic routing later
    };

    const BlogsSkeleton = () => (
        <div className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide no-scrollbar">
            {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="min-w-[300px] max-w-[320px] flex-shrink-0 rounded-xl">
                    <div className="h-[248px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded-t-xl" style={{ animationDelay: `${i * 0.1}s` }}></div>
                    <div className="p-4 space-y-3">
                        <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded w-20" style={{ animationDelay: `${i * 0.1}s` }}></div>
                        <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded w-16" style={{ animationDelay: `${i * 0.1}s` }}></div>
                        <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded" style={{ animationDelay: `${i * 0.1}s` }}></div>
                        <div className="space-y-2">
                            <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded" style={{ animationDelay: `${i * 0.1}s` }}></div>
                            <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded w-3/4" style={{ animationDelay: `${i * 0.1}s` }}></div>
                        </div>
                        <div className="h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded w-24" style={{ animationDelay: `${i * 0.1}s` }}></div>
                    </div>
                </div>
            ))}
        </div>
    );


    return (
        <>
            <style jsx>{`
                @keyframes shimmer {
                    0% { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }
            `}</style>
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
             hover:bg-[position:0_0]" onClick={navigateToBlogs}>
                        <div className="flex flex-row gap-2 items-center">
                            <span className="text-[#E97737] font-['Figtree'] text-[14px] md:text-sm font-semibold uppercase group-hover:text-white">View All</span>
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
                            {loading ? (
                                <BlogsSkeleton />
                            ) : (
                                blogs.map((blog) => (
                                <Card key={blog.blogId} className="flex-col items-start gap-[14px] w-[300px] max-w-[320px] flex-shrink-0 rounded-xl pb-[20px]">
                                    <div className="relative">
                                        <img
                                            src={blog.imageUrl}
                                            alt={blog.title}
                                            className="w-full h-[248px] object-cover rounded-t-xl aspect-[300.36/247]"
                                        />

                                    </div>
                                    <CardContent className="py-0 space-y-2 flex flex-col items-start gap-2">
                                        <div className="flex px-[10px] py-[4px] justify-center items-center gap-[10px] rounded-[40px] bg-[#FBF0EB]">
                                            <div className="">
                                                <p className="text-[#E97737] font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-[16px]">{blog.location}</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-start gap-6 self-stretch"> {/**h-[170px] md:h-[185px] */}
                                            <div className="flex flex-col items-start gap-[10px] self-stretch">
                                                <div className="flex flex-col items-start gap-2 self-stretch">
                                                    <p className="text-[#323232] font-['Figtree'] text-[9px] md:text-[12px] font-normal leading-5 uppercase">
                                                        {new Date(blog.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                                    </p>
                                                    <p className="text-[#323232] font-['Figtree'] text-[14px] md:text-[16px] font-bold leading-[22px]">
                                                        {blog.title}
                                                    </p>
                                                </div>
                                                <p className="text-[#323232] font-['Figtree'] text-[12px] md:text-[14px] font-normal leading-[20px]">
                                                    {blog.longDescription}
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
                                            <svg className="w-4 h-4 md:w-6 md:h-6 lg:w-6 lg:h-6 cursor-pointer transition-transform duration-300 ease-in-out text-[#E97737] group-hover:-rotate-45 group-hover:bg-[#E97737] group-hover:text-white group-hover:rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 19" fill="none">
                                                <circle className="group-hover:[stroke-width:0]" cx="9" cy="9" r="8.5" stroke="currentColor" strokeWidth="1" fill="none" />
                                                <path d="M11.581 9.36039H4.80005V8.64039H11.581L8.84681 5.90619L9.36005 5.40039L12.96 9.00039L9.36005 12.6004L8.84681 12.0946L11.581 9.36039Z" fill="currentColor" />
                                            </svg>
                                        </div>
                                    </div>
                                </Card>
                                ))
                            )}
                        </div>
                    </div>
                </div>

                {/* View All button Mobile view */}
                <div className="flex items-center justify-center gap-2 md:hidden">
                    <Button variant="outline" className="group relative rounded-[6px] border border-[#E97737] mt-1 cursor-pointer
                    bg-[linear-gradient(90deg,_#E97737_0%,_#E97737_50%,_transparent_50%)] 
             bg-[length:200%_100%] bg-[position:100%_0] 
             transition-[background-position] duration-300 ease-out
             hover:bg-[position:0_0]" onClick={navigateToBlogs}>
                        <span className="text-[#E97737] font-['Figtree'] text-[14px] md:text-sm font-semibold uppercase group-hover:text-white">View All</span>
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