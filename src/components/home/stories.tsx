"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useApi } from '@/lib/use-api';
import { API_ENDPOINTS } from '@/lib/constants';

interface Story {
  storyId: number
  title: string
  storyDate: string
  postedBy: string
  shortDescription: string
  longDescription: string
  imageUrl: string
}

export function Stories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();
  const { data, loading, error, execute } = useApi<any>();
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    const apiUrl = `${API_ENDPOINTS.customerHome.getStories}?userid=0&pageno=1&pagesize=10`;
    execute(apiUrl);
  }, [execute]);

  useEffect(() => {
    if (data) {
      console.log('Stories API data:', data);
      if (data.data) {
        setStories(data.data);
      }
    }
    if (error) {
      console.error('Stories API error:', error);
    }
  }, [data, error]);

  const navigateToStories = () => {
    router.push("/stories");
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length)
  }

  const StoriesSkeleton = () => (
    <div className="relative h-[725px] md:h-[450px] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Left card (blurred) */}
        <div className="absolute w-full max-w-4xl" style={{ transform: "translateX(-80%) scale(0.85)", opacity: "1", zIndex: "5", filter: "blur(2px)" }}>
          <div className="bg-gray-300 rounded-2xl p-6 md:p-8 mx-4">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="flex-shrink-0">
                <div className="bg-white p-3 rounded-lg shadow-lg w-full md:w-56">
                  <div className="h-36 md:h-42 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded"></div>
                  <div className="mt-2 h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded"></div>
                </div>
              </div>
              <div className="flex-1 space-y-4">
                <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded w-24"></div>
                <div className="h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded"></div>
                  <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded w-3/4"></div>
                </div>
                <div className="h-10 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded w-40"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Center card (active) */}
        <div className="w-full max-w-4xl" style={{ transform: "translateX(0%) scale(1)", opacity: "1", zIndex: "10" }}>
          <div className="bg-gray-300 rounded-2xl p-6 md:p-8 mx-4">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="flex-shrink-0">
                <div className="bg-white p-3 rounded-lg shadow-lg w-full md:w-56">
                  <div className="h-36 md:h-42 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded"></div>
                  <div className="mt-2 h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded"></div>
                </div>
              </div>
              <div className="flex-1 space-y-4">
                <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded w-24"></div>
                <div className="h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded"></div>
                  <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded w-3/4"></div>
                </div>
                <div className="h-10 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded w-40"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right card (blurred) */}
        <div className="absolute w-full max-w-4xl" style={{ transform: "translateX(80%) scale(0.85)", opacity: "1", zIndex: "5", filter: "blur(2px)" }}>
          <div className="bg-gray-300 rounded-2xl p-6 md:p-8 mx-4">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="flex-shrink-0">
                <div className="bg-white p-3 rounded-lg shadow-lg w-full md:w-56">
                  <div className="h-36 md:h-42 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded"></div>
                  <div className="mt-2 h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded"></div>
                </div>
              </div>
              <div className="flex-1 space-y-4">
                <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded w-24"></div>
                <div className="h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded"></div>
                  <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded w-3/4"></div>
                </div>
                <div className="h-10 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] rounded w-40"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between py-10 relative md:mb-4 md:mt-2">
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
              <p className="text-[var(--Primary-Blue,#1A2F46)] text-center font-['Figtree'] text-[14px] md:text-[16px] font-semibold leading-normal capitalize">Real People</p>
              <h2 className="text-[var(--Primary-Blue,#1A2F46)] text-center font-['Playfair_Display'] text-[28px] md:text-[36px] font-semibold leading-normal">
                Incredible Stories
              </h2>
            </div>
          </div>

          {/* View All button (aligned right) */}
          <Button variant="outline" className="group hidden md:block rounded-[6px] border border-[#E97737] ml-0 mt-6 md:ml-6 md:mt-0 cursor-pointer
                    bg-[linear-gradient(90deg,_#E97737_0%,_#E97737_50%,_transparent_50%)] 
             bg-[length:200%_100%] bg-[position:100%_0] 
             transition-[background-position] duration-300 ease-out
             hover:bg-[position:0_0]" onClick={navigateToStories}>
            <div className="flex flex-row gap-2 items-center">
              <span className="text-[#E97737] font-['Figtree'] text-[14px] md:text-sm font-semibold uppercase group-hover:text-white">View All</span>
              <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 cursor-pointer transition-transform duration-300 ease-in-out text-[#E97737] group-hover:-rotate-45 group-hover:bg-white group-hover:rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                <circle className="group-hover:[stroke-width:0]" cx="10" cy="10" r="9.5" stroke="currentColor" strokeWidth="1" fill="none" />
                <path d="M12.8677 10.4H5.33331V9.6H12.8677L9.82971 6.562L10.4 6L14.4 10L10.4 14L9.82971 13.438L12.8677 10.4Z" fill="currentColor" />
              </svg>
            </div>
          </Button>
        </div>

        {/* Slider Container */}
        {loading ? (
          <StoriesSkeleton />
        ) : (
          <div className="relative h-[725px] md:h-[450px] overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              {stories.map((story, index) => {
              const isActive = index === currentIndex
              const isPrev = index === (currentIndex - 1 + stories.length) % stories.length
              const isNext = index === (currentIndex + 1) % stories.length

              let transform = "translateX(100%) scale(0.8)"
              let opacity = "0"
              let zIndex = "0"
              let blur = "blur(4px)"

              if (isActive) {
                transform = "translateX(0%) scale(1)"
                opacity = "1"
                zIndex = "10"
                blur = "blur(0px)"
              } else if (isPrev) {
                transform = "translateX(-80%) scale(0.85) rotate(0deg)"
                opacity = "1"
                zIndex = "5"
                blur = "blur(0px)"
              } else if (isNext) {
                transform = "translateX(80%) scale(0.85) rotate(0deg)"
                opacity = "1"
                zIndex = "5"
                blur = "blur(0px)"
              }

              return (
                <div
                  key={story.storyId}
                  className="absolute w-full max-w-4xl transition-all duration-700 ease-in-out"
                  style={{
                    transform,
                    opacity,
                    zIndex,
                    filter: blur
                  }}
                >
                  {/* Main Card */}
                  <div className="bg-[#1A2F46] rounded-2xl p-6 md:p-8 mx-4">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                      {/* Polaroid Photo */}
                      <div className="flex-shrink-0">
                        <div className="bg-white p-3 rounded-lg shadow-lg transform rotate-[-3deg] hover:rotate-0 transition-transform duration-300">
                          <img
                            src={story.imageUrl}
                            alt={story.title}
                            className="w-full h-36 md:w-56 md:h-42 object-cover rounded"
                          />
                          <div className="mt-2 text-center">
                            <p className="text-black font-['Dancing_Script'] text-[26px] font-normal leading-normal">
                              {story.postedBy}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 text-white">
                        <div className="mb-3">
                          <span className="rounded-md bg-white text-black font-['Figtree'] text-[12px] font-normal leading-normal px-3 py-1">
                            {new Date(story.storyDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                          </span>
                        </div>

                        <h3 className="text-white font-['Figtree'] text-[20px] md:text-[24px] lg:text-[28px] font-normal leading-normal mb-4">
                          {story.title}
                        </h3>

                        <p className="text-white font-['Figtree'] text-[12px] lg:text-[14px] font-light leading-[22px] mb-6">
                          {story.longDescription}
                        </p>

                        <Button
                          variant="outline"
                          className="group rounded-lg bg-[#1A2F46] shadow-[0_4px_14px_0_rgba(0,0,0,0.25)] border border-[#E97737] bg-[linear-gradient(90deg,_#E97737_0%,_#E97737_50%,_transparent_50%)] 
             bg-[length:200%_100%] bg-[position:100%_0] 
             transition-[background-position] duration-300 ease-out
             hover:bg-[position:0_0]"
                        >
                          <div className="flex flex-row gap-2 items-center">
                            <span className="text-[#E97737] font-['Figtree'] text-[14px] md:text-sm font-semibold uppercase group-hover:text-white">READ FULL STORY</span>
                            <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 cursor-pointer transition-transform duration-300 ease-in-out text-[#E97737] group-hover:-rotate-45 group-hover:bg-white group-hover:rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                              <circle className="group-hover:[stroke-width:0]" cx="10" cy="10" r="9.5" stroke="currentColor" strokeWidth="1" fill="none" />
                              <path d="M12.8677 10.4H5.33331V9.6H12.8677L9.82971 6.562L10.4 6L14.4 10L10.4 14L9.82971 13.438L12.8677 10.4Z" fill="currentColor" />
                            </svg>
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )
              })}
            </div>
          </div>
        )}

        {/* View All button Mobile view */}
        <div className="flex items-center justify-end gap-2 md:hidden">
          <Button variant="outline" className="group relative rounded-[6px] border border-[#E97737] mt-1 cursor-pointer
                    bg-[linear-gradient(90deg,_#E97737_0%,_#E97737_50%,_transparent_50%)] 
             bg-[length:200%_100%] bg-[position:100%_0] 
             transition-[background-position] duration-300 ease-out
             hover:bg-[position:0_0]" onClick={navigateToStories}>
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

        {/* Navigation */}
        <div className="flex justify-center mt-2 gap-4">
          <button
            onClick={prevSlide}
            className="w-12 h-12 bg-[#E3E6EE] hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors duration-300 shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
              <path d="M3.12446 7.64211H16.2105V6.25263H3.12446L8.40099 0.976106L7.41053 0L0.463158 6.94737L7.41053 13.8947L8.40099 12.9186L3.12446 7.64211Z" fill="#1A2F46" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="w-12 h-12 bg-[#E3E6EE] hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors duration-300 shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
              <path d="M13.0861 7.64211H0V6.25263H13.0861L7.80954 0.976106L8.8 0L15.7474 6.94737L8.8 13.8947L7.80954 12.9186L13.0861 7.64211Z" fill="#1A2F46" />
            </svg>
          </button>
        </div>

        </div>
      </section>
    </>
  )
}