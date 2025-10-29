"use client"

import { useState } from "react"
import { Plus, Star, Edit2, Trash2 } from "lucide-react"
import AddTestimonialModal from "./add-testimonial-modal"

interface Testimonial {
  id: string
  bookingId: string
  tripName: string
  tripDescription: string
  tripDate: string
  rating: number
  title: string
  review: string
  images: string[]
  tripImage: string
}

export function MyTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      id: "1",
      bookingId: "#2145638",
      tripName: "Kailash Mansarovar Yatra",
      tripDescription: "Charan Sparsh Outer Kora from Lucknow By Helicopter",
      tripDate: "October 2024",
      rating: 4.9,
      title: "My dream trip to see Kailash Manasarovar happened",
      review:
        "Everything was perfectly organized — from the hotels to the local guides. I felt safe, cared for, and completely immersed in the experience. Can't wait to book my next trip!",
      images: ["/images/account/kailash-landscape.jpg", "/images/account/group-photo-at-airport.jpg"],
      tripImage: "/images/account/kailash-mountain-snow-peaks.jpg",
    },
    {
      id: "2",
      bookingId: "#2145638",
      tripName: "Kailash Mansarovar Yatra",
      tripDescription: "Charan Sparsh Outer Kora from Lucknow By Helicopter",
      tripDate: "October 2024",
      rating: 4.9,
      title: "My dream trip to see Kailash Manasarovar happened",
      review:
        "Everything was perfectly organized — from the hotels to the local guides. I felt safe, cared for, and completely immersed in the experience. Can't wait to book my next trip!",
      images: ["/images/account/kailash-landscape.jpg", "/images/account/group-photo-at-airport.jpg"],
      tripImage: "/images/account/kailash-mountain-snow-peaks.jpg",
    },
  ])

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleAddTestimonial = () => {
    setIsModalOpen(true)
  }

  const handleSubmitTestimonial = (testimonialData: {
    rating: number
    tripId: string
    title: string
    review: string
    photos: File[]
  }) => {
    const newTestimonial: Testimonial = {
      id: Date.now().toString(),
      bookingId: "#2145638",
      tripName:
        testimonialData.tripId === "kailash-mansarovar"
          ? "Kailash Mansarovar Yatra"
          : testimonialData.tripId === "char-dham"
            ? "Char Dham Yatra"
            : "Amarnath Yatra",
      tripDescription: "Charan Sparsh Outer Kora from Lucknow By Helicopter",
      tripDate: new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" }),
      rating: testimonialData.rating,
      title: testimonialData.title,
      review: testimonialData.review,
      images: testimonialData.photos.map((file) => URL.createObjectURL(file)),
      tripImage: "/images/account/kailash-mountain-snow-peaks.jpg",
    }

    setTestimonials((prev) => [newTestimonial, ...prev])

    setIsModalOpen(false)
  }

  const handleEdit = (id: string) => {
    console.log("Edit testimonial:", id)
  }

  const handleDelete = (id: string) => {
    console.log("Delete testimonial:", id)
  }

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-black font-['Figtree'] text-[18px] md:text-[20px] font-semibold leading-normal">My Testimonials</h2>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-lg border border-[#D2D8E4] p-4 md:p-6">
        {/* Card Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h3 className="text-[#1A2F46] font-['Playfair_Display'] text-[20px] md:text-[22px] font-semibold leading-normal">Testimonials List</h3>
          <button
            onClick={handleAddTestimonial}
            className="flex items-center justify-center gap-2 px-4 md:px-6 py-2.5 md:py-3 text-white font-['Figtree'] text-xs md:text-sm font-semibold leading-[24px] uppercase rounded-[6px] bg-[#E97737] font-medium hover:bg-[#d66629] transition-colors cursor-pointer"
          >
            {/* <Plus className="w-4 h-4 md:w-5 md:h-5" /> */}
            <img src="/images/account/add_box.svg" className="h-[18px] w-[18px] lg:h-[20px] lg:w-[20px]" />
            ADD NEW TESTIMONIAL
          </button>
        </div>

        {/* Testimonials List */}
        <div className="space-y-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="space-y-4">
              {/* Testimonial Header */}
              <div className="flex flex-col md:flex-row gap-4 mb-12 md:mb-8">
                {/* Trip Image */}
                <div className="w-full md:w-32 h-32 flex-shrink-0">
                  <img
                    src={testimonial.tripImage || "/placeholder.svg"}
                    alt={testimonial.tripName}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Trip Details */}
                <div className="flex-1 space-y-2">
                  <div className="text-black font-['Figtree'] text-xs md:text-sm font-medium leading-[18px]">
                    Booking ID: <span className="font-bold">{testimonial.bookingId}</span>
                  </div>
                  <h4 className="text-black font-['Figtree'] text-xs md:text-sm font-semibold leading-[20px]">{testimonial.tripName}</h4>
                  <p className="text-black font-['Figtree'] text-xs font-normal leading-[19px]">{testimonial.tripDescription}</p>
                  <p className="rounded-[6px] bg-[#FFF0E8] px-3 py-1 flex items-center"><span className="text-black font-['Figtree'] text-xs font-normal leading-normal">{testimonial.tripDate}</span></p>
                  <div className="inline-flex items-center gap-1 rounded-[5px] bg-[#00A53F] px-3 py-1 text-[#FFFFFF] font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-[24px] not-italic">
                    {testimonial.rating}
                    {/* <Star className="w-3 h-3 fill-white" /> */}
                    <img src="/images/account/star_rate.svg" className="h-[14px] w-[14px] lg:h-[16px] lg:w-[16px]" />
                  </div>
                  {/* Testimonial Title */}
                  <h5 className="text-[#000000] font-['Inter'] text-[14px] md:text-[16px] font-semibold leading-normal not-italic">{testimonial.title}</h5>

                  {/* Review Section */}
                  <div className="rounded-[7px] bg-[#EBF5F7] p-4 md:p-6 relative">
                    {/* Action Buttons */}
                    <div className="flex justify-end items-center gap-2 mb-3 md:mb-0 md:absolute md:top-4 md:right-4">
                      <button
                        onClick={() => handleEdit(testimonial.id)}
                        className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full border-2 border-[#1c8ca7] text-[#1c8ca7] hover:bg-[#1c8ca7] hover:text-white transition-colors"
                        aria-label="Edit testimonial"
                      >
                        <Edit2 className="w-4 h-4 cursor-pointer" />
                      </button>
                      <button
                        onClick={() => handleDelete(testimonial.id)}
                        className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full border-2 border-[#1c8ca7] text-[#1c8ca7] hover:bg-[#1c8ca7] hover:text-white transition-colors"
                        aria-label="Delete testimonial"
                      >
                        <Trash2 className="w-4 h-4 cursor-pointer" />
                      </button>
                    </div>

                    {/* Review Text */}
                    <p className="text-[#000000] font-['Figtree'] text-[12px] md:text-[14px] font-normal leading-[19px] not-italic mb-4 md:pr-20">{testimonial.review}</p>

                    {/* Review Images */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {testimonial.images.map((image, index) => (
                        <div key={index} className="w-full h-40 md:h-48 rounded-lg overflow-hidden">
                          <img
                            src={image || "/placeholder.svg"}
                            alt={`Review image ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AddTestimonialModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmitTestimonial}
      />
    </div>
  )
}
