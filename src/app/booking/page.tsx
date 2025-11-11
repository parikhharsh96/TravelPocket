"use client"

import { useState } from "react"
import { BookingHeader } from "@/components/booking/booking-header"
import { BreadcrumbNav } from "@/components/booking/breadcrumb-nav"
import { BookingProgress } from "@/components/booking/booking-progress"
import { TripContactForm } from "@/components/booking/trip-contact-form"
import { TravellersRoomsForm } from "@/components/booking/travellers-rooms-form"
import { TravellerDetailsForm } from "@/components/booking/traveller-details-form"
import { PanGstForm } from "@/components/booking/pan-gst-form"
import { BookingSummary } from "@/components/booking/booking-summary"
import { BookingConfirmation } from "@/components/booking/booking-confirmation"
import { InfoNote } from "@/components/booking/info-note"
import { Calendar } from "lucide-react"
import Header from "@/components/shared/header"
import NeedHelp from "@/components/shared/need-help"
import { Footer } from "@/components/shared/footer"

export default function BookingPage() {
  const [activeStep, setActiveStep] = useState<number>(1)
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(0)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [bookingDetails, setBookingDetails] = useState({
    bookingId: "",
    customerName: "",
    customerEmail: "",
  })

  const handlePaymentSuccess = (details: { bookingId: string; customerName: string; customerEmail: string }) => {
    setBookingDetails(details)
    setShowConfirmation(true)
  }

  if (showConfirmation) {
    return (
      <div className="min-h-screen bg-[#f4f4f4]">
        <BookingHeader />
        <BookingConfirmation
          bookingId={bookingDetails.bookingId}
          customerName={bookingDetails.customerName}
          customerEmail={bookingDetails.customerEmail}
          onClose={() => setShowConfirmation(false)}
        />
      </div>
    )
  }

  return (

    <>
      <div className="min-h-screen bg-[#f4f4f4]">
        {/* <BookingHeader /> */}
        <Header />
        <BreadcrumbNav />

        {/* Page Title */}
        <div className="bg-[#EBF5F7]">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-center md:relative gap-4">
              <div className="text-center">
                <h1 className="text-black text-center font-['Figtree'] text-[22px] md:text-[26px] font-semibold leading-[24px] mb-2">Kailash Mansarovar Yatra</h1>
                <p className="text-black text-center font-['Figtree'] text-[18px] md:text-[20px] font-normal leading-[24px]">
                  Charan Sparsh Outer Kora from Lucknow By Helicopter
                </p>
                <div className="flex items-center justify-center gap-2 px-4 py-2">
                  {/* <Calendar className="w-4 h-4 text-primary" /> */}
                  <img src="/images/booking/calendar_month.svg" alt="" className="" />
                  <span className="text-[#5A5A5A] font-['Figtree'] text-[11px] md:text-[13px] font-medium leading-[14px] uppercase">11 NIGHTS 12 DAYS</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <BookingProgress currentStep={activeStep} />

        <div className="bg-[#EBF5F7]">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                <InfoNote />
                <TripContactForm
                  isExpanded={activeStep === 1}
                  onToggle={() => setActiveStep(activeStep === 1 ? 0 : 1)}
                  onProceed={() => setActiveStep(2)}
                />
                <TravellersRoomsForm
                  isExpanded={activeStep === 2}
                  onToggle={() => setActiveStep(activeStep === 2 ? 0 : 2)}
                  onProceed={() => setActiveStep(3)}
                  adults={adults}
                  setAdults={setAdults}
                  childrenCount={children}
                  setChildren={setChildren}
                />
                <TravellerDetailsForm
                  isExpanded={activeStep === 3}
                  onToggle={() => setActiveStep(activeStep === 3 ? 0 : 3)}
                  onProceed={() => setActiveStep(4)}
                  travellerCount={adults + children}
                />
                <PanGstForm
                  isExpanded={activeStep === 4}
                  onToggle={() => setActiveStep(activeStep === 4 ? 0 : 4)}
                  onProceed={() => {
                    // This would typically navigate to payment page
                    alert("Proceeding to payment...")
                  }}
                />
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <BookingSummary onPaymentSuccess={handlePaymentSuccess} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <NeedHelp />
      <Footer showSections={{ whatsapp: false, helpCenter: false, newsletter: true }} />
    </>

  )
}