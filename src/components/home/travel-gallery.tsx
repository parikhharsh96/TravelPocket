import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"
import { ArrowCircleIcon } from "../shared/ArrowCircleIcon"

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

  return (
    <div className="max-w-[1920px] mx-auto px-4 pb-[25px] sm:px-6 md:px-8 lg:px-[50px] bg-[#FFFFF] relative overflow-hidden">
      {/* Header Section */}
      <div className="relative z-10 pt-8 pb-12 flex flex-col items-center justify-between relative mb-4 mt-2 gap-4">
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
              <p className="text-[#1A2F46] text-center font-['Figtree'] text-base font-semibold leading-normal capitalize">Travel Gallery</p>
              <h2 className="text-[#1A2F46] text-center font-['Playfair_Display'] text-[36px] font-semibold leading-normal">
                One Community, Many Stories
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


        {/* Instagram Icon */}
        <div className="w-full pe-[0px] lg:pe-[100px] md:pe-[100px]">
          <div className="text-black font-['Figtree'] text-4xl font-light leading-normal text-center"><img src="/images/travelgallery/instagram.svg" className="inline cursor-pointer hover:scale-105" /><span className="ml-1">@travelpocket</span></div>
        </div>
      </div>

      {/* Photo Grid */}
      <div className="relative z-10 px-4 pb-12">
        {/* <div className="max-w-7xl mx-auto">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 pb-4" style={{ width: "max-content" }}>
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 overflow-hidden rounded-lg ${index === 2
                      ? "w-72 h-64 md:w-80 md:h-72 lg:w-96 lg:h-80"
                      : "w-48 h-36 md:w-56 md:h-42 lg:w-64 lg:h-48"
                    }`}
                >
                  <img
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div> */}

        <div className="max-w-[1920px] mx-auto px-4 pb-[25px] sm:px-6 md:px-8 lg:px-[50px] mt-4">
          <div className="block md:hidden">
            {/* Mobile: Show 1 image at a time with horizontal scroll */}
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-4 pb-4">
                {photos.map((photo, index) => (
                  <div key={`mobile-${index}`} className="flex-shrink-0 w-80 h-60 overflow-hidden rounded-lg">
                    <img
                      src={photo.src || "/placeholder.svg"}
                      alt={photo.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}

                {/* {restructurePhotos.map((photo, index) => (
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
                          className={`w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-lg`}
                        />
                      ))}
                    </div>
                  ):(
                    <div
                      key={`desktop-${index}`}
                      className={"flex-shrink-0 flex justify-center items-center overflow-hidden w-96 relative h-[530px]"}
                    >
                      <img
                          key={index}
                          src={photo.src}
                          alt={photo.alt}
                          className={`w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-lg`}
                        />
                    </div>
                  )))} */}
              </div>
            </div>
          </div>

          <div className="hidden md:block lg:hidden">
            {/* Tablet: Show 2 images at a time with horizontal scroll */}
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-4 pb-4">
                {/* {photos.map((photo, index) => (
                  <div
                    key={`tablet-${index}`}
                    className={`flex-shrink-0 overflow-hidden rounded-lg ${index === 2 ? "w-80 h-72" : "w-80 h-72"}`}
                  >
                    <img
                      src={photo.src || "/placeholder.svg"}
                      alt={photo.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))} */}

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
                          className={`w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-lg`}
                        />
                      ))}
                    </div>
                  ):(
                    <div
                      key={`desktop-${index}`}
                      className={"flex-shrink-0 flex justify-center items-center overflow-hidden w-96 relative h-[530px]"}
                    >
                      <img
                          key={index}
                          src={photo.src}
                          alt={photo.alt}
                          className={`w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-lg`}
                        />
                    </div>
                  )))}
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            {/* Desktop: Show 3 images at a time with horizontal scroll */}
            <div className="overflow-x-auto scrollbar-hide">
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
                          className={`w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-lg`}
                        />
                      ))}
                    </div>
                  ):(
                    <div
                      key={`desktop-${index}`}
                      className={"flex-shrink-0 flex justify-center items-center overflow-hidden w-96 relative h-[530px]"}
                    >
                      <img
                          key={index}
                          src={photo.src}
                          alt={photo.alt}
                          className={`w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-lg`}
                        />
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
