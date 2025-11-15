"use client"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"
import { ArrowCircleIcon } from "../shared/ArrowCircleIcon"
import { useRouter } from "next/navigation"

interface Photo {
  src: string
  alt: string
  className: string
}

interface NestedPhoto {
  nestedPhoto: Photo[]
}

type RestructuredPhoto = Photo | NestedPhoto

export default function TravelGallery() {
  const photos: Photo[] = [
    {
      src: "/images/travelgallery/images_1.png",
      alt: "Group of hikers",
      className: "col-span-1 row-span-1",
    },
    {
      src: "/images/travelgallery/images_2.png",
      alt: "Desert adventure",
      className: "col-span-1 row-span-1",
    },
    {
      src: "/images/travelgallery/images_3.png",
      alt: "Winter portrait",
      className: "col-span-2 row-span-2",
    },
    {
      src: "/images/travelgallery/images_1.png",
      alt: "Cultural ceremony",
      className: "col-span-1 row-span-1",
    },
    {
      src: "/images/travelgallery/images_4.png",
      alt: "Mountain couple",
      className: "col-span-1 row-span-1",
    },
    {
      src: "/images/travelgallery/images_2.png",
      alt: "Lake sunset",
      className: "col-span-1 row-span-1",
    },
    {
      src: "/images/travelgallery/images_3.png",
      alt: "Mountain landscape",
      className: "col-span-1 row-span-1",
    },
    {
      src: "/images/travelgallery/images_1.png",
      alt: "Mountain picnic",
      className: "col-span-1 row-span-1",
    },
    {
      src: "/images/travelgallery/images_3.png",
      alt: "Happy couple",
      className: "col-span-1 row-span-1",
    },
    {
      src: "/images/travelgallery/images_1.png",
      alt: "Group of hikers",
      className: "col-span-1 row-span-1",
    },
    {
      src: "/images/travelgallery/images_2.png",
      alt: "Desert adventure",
      className: "col-span-1 row-span-1",
    },
    {
      src: "/images/travelgallery/images_3.png",
      alt: "Winter portrait",
      className: "col-span-2 row-span-2",
    },
    {
      src: "/images/travelgallery/images_1.png",
      alt: "Cultural ceremony",
      className: "col-span-1 row-span-1",
    },
    {
      src: "/images/travelgallery/images_4.png",
      alt: "Mountain couple",
      className: "col-span-1 row-span-1",
    },
    {
      src: "/images/travelgallery/images_2.png",
      alt: "Lake sunset",
      className: "col-span-1 row-span-1",
    },
    {
      src: "/images/travelgallery/images_3.png",
      alt: "Mountain landscape",
      className: "col-span-1 row-span-1",
    },
    {
      src: "/images/travelgallery/images_1.png",
      alt: "Mountain picnic",
      className: "col-span-1 row-span-1",
    },
    {
      src: "/images/travelgallery/images_3.png",
      alt: "Happy couple",
      className: "col-span-1 row-span-1",
    },
  ]

  const router = useRouter();

    const navigateToGallery = () => {
        router.push("/gallery"); //need to add dynamic routing later
    };

  const travelGalleryPhotos = (photos: Photo[]): RestructuredPhoto[] => {
    const newList: RestructuredPhoto[] = [];

    for (let i = 0; i < photos.length; i++) {
      // Step 1: group [i, i+1]
      if (i % 5 === 0 && photos[i + 1]) {
        newList.push({ nestedPhoto: [photos[i], photos[i + 1]] });
        i++; // skip next, since we already grouped it
      }
      // Step 2: group [i, i+1]
      else if ((i - 2) % 5 === 0 && photos[i + 1]) {
        newList.push({ nestedPhoto: [photos[i], photos[i + 1]] });
        i++;
      }
      // Step 3: single object (like index 4, 9, 14...)
      else if ((i - 4) % 5 === 0) {
        newList.push(photos[i]);
      }
    }

    return newList;
  };

  const restructurePhotos = travelGalleryPhotos(photos);
  console.log(restructurePhotos);

  // Auto-scroll logic: scrolls right continuously and loops back to start.
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".auto-scroll"))
    if (els.length === 0) return

    const speed = 0.6 // pixels per frame — adjust to taste
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

      el.addEventListener("mouseenter", onEnter)
      el.addEventListener("mouseleave", onLeave)

      rafId = requestAnimationFrame(step)

      cleanups.push(() => {
        cancelAnimationFrame(rafId)
        el.removeEventListener("mouseenter", onEnter)
        el.removeEventListener("mouseleave", onLeave)
      })
    })

    return () => {
      cleanups.forEach((fn) => fn())
    }
  }, [])

  return (
    <div className="container mx-auto px-4 pb-[25px] sm:px-6 md:px-8 lg:px-[50px] bg-[#FFFFF] relative overflow-hidden">
      {/* Header Section */}
      <div className="relative z-10 pt-8 pb-6 flex flex-col items-center justify-between relative mb-4 mt-2 gap-4">
        {/* View All Button */}
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
              <p className="text-[#1A2F46] text-center font-['Figtree'] text-[14px] md:text-base font-semibold leading-normal capitalize">Travel Gallery</p>
              <h2 className="text-[#1A2F46] text-center font-['Playfair_Display'] text-[28px] md:text-[36px] font-semibold leading-normal">
                One Community, Many Stories
              </h2>
            </div>
          </div>

          {/* View All button (aligned right) */}
          <Button variant="outline" className="group hidden md:block rounded-[6px] border border-[#E97737] ml-0 mt-6 md:mt-0 cursor-pointer
           bg-[linear-gradient(90deg,_#E97737_0%,_#E97737_50%,_transparent_50%)] 
             bg-[length:200%_100%] bg-[position:100%_0] 
             transition-[background-position] duration-300 ease-out
             hover:bg-[position:0_0]" onClick={navigateToGallery}>
            <div className="group flex items-center gap-2 cursor-pointer">
              <span className="text-[#E97737] font-['Figtree'] text-[14px] md:text-sm font-semibold uppercase group-hover:text-white">View All</span>
              {/* <ArrowCircleIcon className="w-6 h-6 text-[#E97737] group-hover:text-white" /> */}
              <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 cursor-pointer transition-transform duration-300 ease-in-out text-[#E97737] group-hover:-rotate-45 group-hover:bg-white group-hover:rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                <circle className="group-hover:[stroke-width:0]" cx="10" cy="10" r="9.5" stroke="currentColor" strokeWidth="1" fill="none" />
                <path d="M12.8677 10.4H5.33331V9.6H12.8677L9.82971 6.562L10.4 6L14.4 10L10.4 14L9.82971 13.438L12.8677 10.4Z" fill="currentColor" />
              </svg>
            </div>
          </Button>
        </div>


        {/* Instagram Icon */}
        <div className="w-full pe-[0px] lg:pe-[100px] md:pe-[100px]">
          <div className="text-black font-['Figtree'] text-[22px] md:text-[36px] font-light leading-normal text-center"><img src="/images/travelgallery/instagram.svg" className="inline w-5 h-5 md:w-8 md:h-8 lg:w-8 lg:h-8" /><span className="ml-1 text-black font-['Figtree'] text-[22px] md:text-[36px] font-light leading-normal">@travelpocket</span></div>
        </div>
      </div>

      {/* Photo Grid */}
      <div className="relative z-10 pb-6"> {/**px-4 pb-12*/}
        <div className="container mx-auto pb-[25px] mt-4">
          <div className="hidden md:hidden">
            {/* Mobile: Show 1 image at a time with horizontal scroll */}
            <div className="overflow-x-auto scrollbar-hide auto-scroll">
              <div className="flex gap-4 pb-4">
                {photos.map((photo, index) => (
                  <div key={`mobile-${index}`} className="flex-shrink-0 w-80 h-60 overflow-hidden rounded-lg">
                    <img
                      src={photo.src || "/placeholder.svg"}
                      alt={photo.alt}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    {/**hover:scale-105 transition-transform duration-300 */}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:block lg:hidden">{/**hidden */}
            {/* Tablet: Show 2 images at a time with horizontal scroll */}
            <div className="overflow-x-auto scrollbar-hide auto-scroll">
              <div className="flex gap-4 pb-4">
                {restructurePhotos.map((photo, index) => (
                  "nestedPhoto" in photo ? (
                    <div
                      key={`desktop-${index}`}
                      className={"flex-shrink-0 overflow-hidden flex flex-col gap-2 w-64"}
                    >
                      {photo.nestedPhoto.map((nestedPhoto, j) => (
                        <img
                          key={j}
                          src={nestedPhoto.src}
                          alt={nestedPhoto.alt}
                          className={`w-full h-full object-cover rounded-lg`}
                        />
                      ))}
                    </div>
                  ) : (
                    <div
                      key={`desktop-${index}`}
                      className={"flex-shrink-0 flex justify-center items-center overflow-hidden w-96 relative h-[530px]"}
                    >
                      <img
                        key={index}
                        src={photo.src}
                        alt={photo.alt}
                        className={`w-full h-full object-cover rounded-lg`}
                      />

                    </div>
                  )))}
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            {/* Desktop: Show 3 images at a time with horizontal scroll */}
            <div className="overflow-x-auto scrollbar-hide auto-scroll">
              <div className="flex gap-4 pb-4">
                {restructurePhotos.map((photo, index) => (
                  "nestedPhoto" in photo ? (
                    <div
                      key={`desktop-${index}`}
                      className={"flex-shrink-0 overflow-hidden flex flex-col gap-2 w-64"}
                    >
                      {photo.nestedPhoto.map((nestedPhoto, j) => (
                        <img
                          key={j}
                          src={nestedPhoto.src}
                          alt={nestedPhoto.alt}
                          className={`w-full h-full object-cover rounded-lg`}
                        />
                      ))}
                    </div>
                  ) : (
                    <div
                      key={`desktop-${index}`}
                      className={"flex-shrink-0 flex justify-center items-center overflow-hidden w-96 relative h-[530px]"}
                    >
                      <img
                        key={index}
                        src={photo.src}
                        alt={photo.alt}
                        className={`w-full h-full object-cover rounded-lg`}
                      />
                      {/**hover:scale-105 transition-transform duration-300 */}
                    </div>
                  )))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
