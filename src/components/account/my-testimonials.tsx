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
        <h2 className="text-xl md:text-2xl font-bold text-[#1a2f46]">My Testimonials</h2>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-lg border border-[#e5e5e5] p-4 md:p-6">
        {/* Card Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h3 className="text-lg md:text-xl font-bold text-[#1a2f46]">Testimonials List</h3>
          <button
            onClick={handleAddTestimonial}
            className="flex items-center justify-center gap-2 px-4 md:px-6 py-2.5 md:py-3 bg-[#e97737] text-white rounded-lg font-medium hover:bg-[#d66629] transition-colors text-sm md:text-base"
          >
            <Plus className="w-4 h-4 md:w-5 md:h-5" />
            ADD NEW TESTIMONIAL
          </button>
        </div>

        {/* Testimonials List */}
        <div className="space-y-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="space-y-4">
              {/* Testimonial Header */}
              <div className="flex flex-col md:flex-row gap-4">
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
                  <div className="text-sm text-[#5a5a5a]">
                    Booking ID: <span className="font-semibold text-[#1a2f46]">{testimonial.bookingId}</span>
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-[#1a2f46]">{testimonial.tripName}</h4>
                  <p className="text-sm text-[#5a5a5a]">{testimonial.tripDescription}</p>
                  <p className="text-sm text-[#5a5a5a]">{testimonial.tripDate}</p>
                  <div className="inline-flex items-center gap-1 bg-[#00a53f] text-white px-3 py-1 rounded text-sm font-semibold">
                    {testimonial.rating}
                    <Star className="w-3 h-3 fill-white" />
                  </div>
                </div>
              </div>

              {/* Testimonial Title */}
              <h5 className="text-base md:text-lg font-bold text-[#1a2f46]">{testimonial.title}</h5>

              {/* Review Section */}
              <div className="bg-[#ddf9ff] rounded-lg p-4 md:p-6 relative">
                {/* Action Buttons */}
                <div className="flex justify-end items-center gap-2 mb-3 md:mb-0 md:absolute md:top-4 md:right-4">
                  <button
                    onClick={() => handleEdit(testimonial.id)}
                    className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full border-2 border-[#1c8ca7] text-[#1c8ca7] hover:bg-[#1c8ca7] hover:text-white transition-colors"
                    aria-label="Edit testimonial"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(testimonial.id)}
                    className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full border-2 border-[#1c8ca7] text-[#1c8ca7] hover:bg-[#1c8ca7] hover:text-white transition-colors"
                    aria-label="Delete testimonial"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Review Text */}
                <p className="text-sm md:text-base text-[#1a2f46] mb-4 md:pr-20">{testimonial.review}</p>

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
