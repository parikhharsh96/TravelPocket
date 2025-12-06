import Link from "next/link"
import { ChevronLeft, ChevronRight, Flag, ThumbsUp, FileCheck, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      {/* Breadcrumb Navigation */}
      <div className="border-b border-[#d9d9d9] bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="flex items-center gap-1 text-[#5a5a5a] hover:text-[#000000] transition-colors">
              <ChevronLeft className="w-4 h-4" />
              <span>Back</span>
            </Link>
            <span className="text-[#d9d9d9]">|</span>
            <Link href="/" className="text-[#5a5a5a] hover:text-[#000000] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-[#d9d9d9]" />
            <span className="text-[#333333] font-medium">About us</span>
          </nav>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="w-full">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
          <img
            src="/images/travelpocket.png"
            alt="TravelPocket team on Kailash & Om Parvat tour in snowy mountains"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16 md:py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-[#333333] text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 md:mb-10">About Us</h1>
          <p className="text-[#333333] text-base sm:text-lg md:text-xl leading-relaxed text-balance">
            TravelPocket Exploration Pvt. Ltd. is India&apos;s fastest-growing and most soulful spiritual travel
            company, offering life-changing journeys to the most sacred pilgrimage destinations across India, Nepal, and
            Tibet. We specialize in premium yet affordable tour packages for the Kailash Mansarovar Yatra, Adi Kailash &
            Om Parvat Tour, Chardham Yatra, Manimahesh Kailash Yatra, and more. From planning to execution, we handle
            everything with a deep spiritual understanding, ensuring that each journey is safe, seamless, and profoundly
            meaningful.
          </p>
        </div>
      </div>

      {/* What Sets Us Apart & Our Purpose Section */}
      <div className="bg-[#fff7f2] py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left: Image */}
            <div className="lg:col-span-1">
              <div className="relative w-full h-[400px] sm:h-[500px] lg:h-full rounded-lg overflow-hidden">
                <img
                  src="/images/travelpocket.png"
                  alt="TravelPocket pilgrims at temple gate"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Middle: What Sets us Apart */}
            <div className="lg:col-span-1">
              <h2 className="text-[#1a2f46] text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10">
                What Sets us Apart
              </h2>

              <div className="space-y-8">
                {/* Feature 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Flag className="w-8 h-8 sm:w-10 sm:h-10 text-[#e97737]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[#1a2f46] text-sm sm:text-base leading-relaxed">
                      India's First Company to open the Kailash Mansarovar Yatra via Limi Valley, Nepal for Indian
                      citizens in 2024 – a Visa-Free Route for Indian pilgrims.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <ThumbsUp className="w-8 h-8 sm:w-10 sm:h-10 text-[#e97737]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[#1a2f46] text-sm sm:text-base leading-relaxed">
                      5-star Google rating backed by hundreds of happy customers across India and abroad.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <FileCheck className="w-8 h-8 sm:w-10 sm:h-10 text-[#e97737]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[#1a2f46] text-sm sm:text-base leading-relaxed">
                      Customizable packages, expert tour leaders, and on-ground team support for complete peace of mind.
                    </p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#e30613] flex items-center justify-center rounded">
                      <span className="text-white font-bold text-xs sm:text-sm">ISO</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#1a2f46] text-sm sm:text-base leading-relaxed">
                      Certified with ISO 9001 & ISO 10002, delivering high-quality and reliable services.
                    </p>
                  </div>
                </div>

                {/* Feature 5 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-[#e97737]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[#1a2f46] text-sm sm:text-base leading-relaxed">
                      Specialized in both senior citizen pilgrimage tours and adventure spiritual expeditions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Our Purpose */}
            <div className="lg:col-span-1">
              <h2 className="text-[#1a2f46] text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10">Our Purpose</h2>
              <p className="text-[#1a2f46] text-sm sm:text-base md:text-lg leading-relaxed">
                We believe that a pilgrimage is not just a journey; it's a spiritual calling. At TravelPocket, we go
                beyond itineraries and offer experiences that connect you to the divine. Whether it's meditating by Lake
                Mansarovar, trekking to Adi Kailash, or praying at Chardham, we ensure that every moment of your journey
                is filled with devotion, comfort, and inner peace.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Book Package Section */}
      <div className="relative bg-[#ffffff] py-12 sm:py-16">
        <h2 className="text-[#1a2f46] text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 px-4">
          Why Book Package With TravelPocket?
        </h2>

        <div className="relative w-full h-[600px] sm:h-[700px] lg:h-[600px]">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src="/images/travelpocket.png"
              alt="TravelPocket pilgrims at mountain expedition with Adi Kailash banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Content */}
          <div className="relative h-full pl-8 pr-4">
            <div className="h-full flex items-center">
              <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8">
                {/* Feature 1: Expert-Led Spiritual Journeys */}
                <div className="space-y-2">
                  <h3 className="text-[#ffffff] text-lg sm:text-xl font-bold">
                    Expert-Led
                    <br />
                    Spiritual Journeys
                  </h3>
                  <p className="text-[#ffffff] text-xs sm:text-sm leading-relaxed max-w-lg">
                    We specialize in guided spiritual pilgrimages to sacred destinations like Kailash Mansarovar, Adi
                    Kailash, and Om Parvat Yatra, led by experienced spiritual guides who ensure a meaningful,
                    transformative experience.
                  </p>
                </div>

                {/* Feature 2: Safety, Comfort, and Seamless Travel */}
                <div className="space-y-2">
                  <h3 className="text-[#ffffff] text-lg sm:text-xl font-bold">
                    Safety
                    <br />
                    Comfort, and Seamless Travel
                  </h3>
                  <p className="text-[#ffffff] text-xs sm:text-sm leading-relaxed max-w-lg">
                    With a focus on your safety and comfort, we handle all logistics—accommodation, transportation,
                    permits, and more—so you can fully immerse yourself in your spiritual journey, worry-free.
                  </p>
                </div>

                {/* Feature 3: Personalized Hassle-Free Experience */}
                <div className="space-y-2">
                  <h3 className="text-[#ffffff] text-lg sm:text-xl font-bold">
                    Personalized
                    <br />
                    Hassle-Free Experience
                  </h3>
                  <p className="text-[#ffffff] text-xs sm:text-sm leading-relaxed max-w-lg">
                    We offer customized itineraries and small group sizes, ensuring a personal, intimate pilgrimage that
                    caters to your unique needs, while our dedicated team manages every detail of your trip.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Vision Section */}
      <div className="bg-[#ffffff] py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <h2 className="text-[#1a2f46] text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16">
            Our Vision
          </h2>

          {/* Three Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            {/* Left Column: Vision Statement */}
            <div className="space-y-6">
              <p className="text-[#333333] text-sm sm:text-base leading-relaxed text-center lg:text-left">
                Our vision is to become India's leading spiritual travel company, specializing in premium yet affordable
                Himalayan pilgrimage tours and holy yatras.
              </p>
              <p className="text-[#333333] text-sm sm:text-base leading-relaxed text-center lg:text-left">
                We aim to be the top choice for devotees seeking trusted services for Kailash Mansarovar Yatra 2025, Adi
                Kailash Yatra, Chardham by helicopter, Nepal pilgrimage tours, and other spiritually significant
                circuits.
              </p>
              <p className="text-[#333333] text-sm sm:text-base leading-relaxed text-center lg:text-left">
                With a growing network of partners, certified team, and a 5-star rating, TravelPocket aspires to deliver
                purposeful travel experiences that help seekers reconnect with their inner self while exploring sacred
                sites across India, Nepal, and Tibet.
              </p>
            </div>

            {/* Middle Column: Illustration */}
            <div className="flex justify-center items-center">
              <div className="relative w-full max-w-md h-[300px] sm:h-[350px]">
                <img
                  src="/spiritual-journey-illustration-person-telescope-st.jpg"
                  alt="Person with telescope on steps - vision and goals illustration"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Right Column: Mission Statement */}
            <div className="space-y-6">
              <p className="text-[#333333] text-sm sm:text-base leading-relaxed text-center lg:text-left">
                At TravelPocket, our mission is to offer soulful spiritual tour packages to the most revered
                destinations like Kailash Mansarovar, Adi Kailash Om Parvat, Chardham Yatra, Manimahesh Yatra, and more.
              </p>
              <p className="text-[#333333] text-sm sm:text-base leading-relaxed text-center lg:text-left">
                We are committed to providing safe, affordable, and well-organized pilgrimage tours for Indian and
                international devotees of all age groups. With customizable itineraries, reliable logistics, and
                dedicated on-ground support, we ensure a peaceful, enriching, and transformative travel experience.
              </p>
              <p className="text-[#333333] text-sm sm:text-base leading-relaxed text-center lg:text-left">
                Our goal is to make sacred journeys like Kailash Mansarovar Yatra via Nepal (Limi Valley) visa-free for
                Indian pilgrims, more accessible and unforgettable—for both solo travelers and spiritual groups.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
