"use client"

import type React from "react"

import { useState, useRef, type DragEvent, type ChangeEvent } from "react"
import { X, Smile, ImagePlus } from "lucide-react"
import { ScrollArea } from "../ui/scroll-area"

interface AddTestimonialModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (testimonial: {
    rating: number
    tripId: string
    title: string
    review: string
    photos: File[]
  }) => void
}

export default function AddTestimonialModal({ isOpen, onClose, onSubmit }: AddTestimonialModalProps) {
  const [rating, setRating] = useState<number>(5)
  const [selectedTrip, setSelectedTrip] = useState<string>("kailash-mansarovar")
  const [title, setTitle] = useState<string>("")
  const [review, setReview] = useState<string>("")
  const [photos, setPhotos] = useState<File[]>([])
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!rating || !selectedTrip || !title.trim() || !review.trim()) {
      alert("Please fill in all required fields")
      return
    }

    onSubmit({
      rating,
      tripId: selectedTrip,
      title,
      review,
      photos,
    })

    // Reset form
    setRating(5)
    setSelectedTrip("kailash-mansarovar")
    setTitle("")
    setReview("")
    setPhotos([])
  }

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)

    const files = Array.from(e.dataTransfer.files).filter((file) => file.type.startsWith("image/"))
    setPhotos((prev) => [...prev, ...files])
  }

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files).filter((file) => file.type.startsWith("image/"))
      setPhotos((prev) => [...prev, ...files])
    }
  }

  const handleChooseFile = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <ScrollArea className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-[#1A2F46] font-['Playfair_Display'] text-[24px] md:text-[28px] font-semibold leading-normal">Add New Testimonial</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 cursor-pointer" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Rating */}
          <div>
            <label className="block text-black font-['Figtree'] text-[12px] md:text-[14px] font-medium leading-normal mb-3">
              Rate your Trip Experience <span className="text-[#FF0000]">*</span>
            </label>
            <div className="flex gap-3">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setRating(value)}
                  className={`w-12 h-12 md:w-14 md:h-14 rounded-lg border-2 text-black font-['Figtree'] text-[14px] md:text-[16px] font-normal leading-normal transition-all ${
                    rating === value
                      ? "bg-[#15803D] border-[#15803D] text-white"
                      : "bg-[#DCFCE7] border-[#15803D] text-[#000000] hover:bg-green-50"
                  }`}
                >
                  {value === 5 && rating === 5 ? <Smile className="w-6 h-6 mx-auto" /> : value}
                </button>
              ))}
            </div>
          </div>

          {/* Select Trip */}
          <div className="">
            <label className="block text-black font-['Figtree'] text-[12px] md:text-[14px] font-medium leading-normal mb-2">
              Select your trip <span className="text-[#FF0000]">*</span>
            </label>
            <select
              value={selectedTrip}
              onChange={(e) => setSelectedTrip(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e97737] focus:border-transparent text-black font-['Figtree'] text-[14px] md:text-[16px] font-normal leading-normal"
              required
            >
              <option value="kailash-mansarovar">Kailash Mansarovar Yatra</option>
              <option value="char-dham">Char Dham Yatra</option>
              <option value="amarnath">Amarnath Yatra</option>
            </select>
          </div>

          {/* Title */}
          <div>
            <label className="block text-black font-['Figtree'] text-[12px] md:text-[14px] font-medium leading-normal mb-2">
              Title of your review <span className="text-[#FF0000]">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter the Subject for your Request"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e97737] focus:border-transparent text-[#5A5A5A] font-['Figtree'] text-[14px] md:text-[16px] font-normal leading-normal placeholder:text-[#5A5A5A] placeholder:font-['Figtree'] placeholder:text-[14px] placeholder:md:text-[16px] placeholder:font-normal leading-normal"
              required
            />
          </div>

          {/* Review */}
          <div>
            <label className="block text-black font-['Figtree'] text-[12px] md:text-[14px] font-medium leading-normal mb-2">
              Your Review <span className="text-[#FF0000]">*</span>
            </label>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Enter the Message for your Request"
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e97737] focus:border-transparent resize-none text-[#5A5A5A] font-['Figtree'] text-[14px] md:text-[16px] font-normal leading-normal placeholder:text-[#5A5A5A] placeholder:font-['Figtree'] placeholder:text-[14px] placeholder:md:text-[16px] placeholder:font-normal leading-normal"
              required
            />
          </div>

          {/* Upload Photos */}
          <div>
            <label className="block text-black font-['Figtree'] text-[12px] md:text-[14px] font-medium leading-normals mb-2">Upload your Photos</label>
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-lg p-8 md:p-12 text-center transition-colors ${
                isDragging ? "border-[#1c8ca7] bg-[#ddf9ff]" : "border-gray-300 bg-white"
              }`}
            >
              <ImagePlus className="w-12 h-12 md:w-16 md:h-16 mx-auto text-[#1c8ca7] mb-4" />
              <p className="text-black font-['Figtree'] text-[14px] md:text-[16px] font-normal leading-normal">
                Drag and drop your files here or{" "}
                <button
                  type="button"
                  onClick={handleChooseFile}
                  className="text-[#1c8ca7] underline hover:text-[#15758e] font-medium"
                >
                  <span className="text-black font-['Figtree'] text-[14px] md:text-[16px] font-normal leading-normal underline decoration-solid">choose file</span>
                </button>
              </p>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileSelect}
                className="hidden"
              />
            </div>
            {photos.length > 0 && (
              <div className="mt-3 text-sm text-gray-600">
                {photos.length} photo{photos.length !== 1 ? "s" : ""} selected
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="px-8 py-3 bg-[#e97737] text-white font-semibold rounded-lg hover:bg-[#d66a2e] transition-colors cursor-pointer"
            >
              <span className="text-white font-['Figtree'] text-[12px] md:text-[14px] font-semibold leading-[24px] uppercase">SUBMIT REVIEW</span>
            </button>
          </div>
        </form>
      </ScrollArea>
    </div>
  )
}
