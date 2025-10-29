interface BookingProgressProps {
  currentStep: number
}

export function BookingProgress({ currentStep }: BookingProgressProps) {
  const steps = [
    { number: 1, title: "Trip & Contact Details" },
    { number: 2, title: "No. of Travellers & Rooms" },
    { number: 3, title: "Add Traveller's Details" },
    { number: 4, title: "Final Payment" },
  ]

  return (
    <div className="bg-[#1a2f46] text-white py-4 md:py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between max-w-4xl mx-auto gap-3 md:gap-0">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center flex-1">
              <div className="flex items-center gap-3">
                <div
                  className={`flex items-center gap-2 transition-all ${
                    currentStep === step.number
                      ? "opacity-100 bg-white/10 px-3 py-1 rounded-md"
                      : currentStep > step.number
                        ? "opacity-70"
                        : "opacity-50"
                  }`}
                >
                  <span className="text-base md:text-lg font-semibold">{step.number}.</span>
                  <span className="text-xs md:text-sm">{step.title}</span>
                </div>
              </div>
              {index < steps.length - 1 && <div className="hidden md:block flex-1 h-px bg-white/30 mx-4" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
