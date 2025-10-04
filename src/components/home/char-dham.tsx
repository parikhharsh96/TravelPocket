import { ArrowRight } from "lucide-react"
import { Calendar, MapPin, CheckCircle } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@radix-ui/react-separator"

export default function HomePage() {
    const packages = [
        {
            title: "Char Dham Yatra By Helicopter From Dahradun",
            price: "₹9500",
            duration: "11 NIGHTS 12 DAYS",
            inclusions: "20+ INCLUSIONS",
            pickup: "PICK UP: LUCKNOW",
            imageUrl: "/images/char-dham/Char_Dham_bg.png",
            imageQuery: "helicopter flying over mountains with temples",
        },
        {
            title: "Char Dham Yatra with Helicopter",
            price: "₹9500",
            duration: "11 NIGHTS 12 DAYS",
            inclusions: "20+ INCLUSIONS",
            pickup: "PICK UP: LUCKNOW",
            imageUrl: "/images/char-dham/Char_Dham_bg.png",
            imageQuery: "aerial view of holy city with river and temples",
        },
        {
            title: "Kedarnath, Tungnath and Badrinath Yatra from Haridwar",
            price: "₹9600",
            duration: "11 NIGHTS 12 DAYS",
            inclusions: "20+ INCLUSIONS",
            pickup: "PICK UP: LUCKNOW",
            imageUrl: "/images/char-dham/Char_Dham_bg.png",
            imageQuery: "illuminated temple at night with snow mountains",
        },
        {
            title: "Char Dham Yatra By Road",
            price: "₹9500",
            duration: "11 NIGHTS 12 DAYS",
            inclusions: "20+ INCLUSIONS",
            pickup: "PICK UP: LUCKNOW",
            imageUrl: "/images/char-dham/Char_Dham_bg.png",
            imageQuery: "mountain road with snow peaks and pilgrimage tents",
        },
    ]

    return (
        <div
            className="min-h-screen flex flex-col lg:flex-row relative"
            style={{
                backgroundImage: "url('/images/char-dham/Char_Dham_bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Background overlay for the entire section */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Left Panel */}
            <div className="w-full lg:w-1/2 relative overflow-hidden min-h-[50vh] lg:min-h-screen">
                <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-8 md:px-12 py-8 lg:py-0 text-white">
                    <div className="max-w-md mx-auto lg:mx-0">
                        <p className="sm:text-sm opacity-90 font-['Figtree'] text-[16px] font-semibold leading-normal">Spiritually Enriching</p>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-6 lg:mb-8 text-balance text-white font-['Playfair_Display'] text-[36px] font-semibold leading-normal">
                            Char Dham Yatra
                        </h1>

                        <div className="flex flex-col space-y-3 sm:space-y-4 mb-6 lg:mb-8">
                            <Button
                                className="flex-shrink-0 max-w-[300px] rounded-[10px] bg-[#E97737] flex items-center justify-between cursor-pointer hover:bg-[#C75414]"
                                size="lg"
                            >
                                <span className="text-white font-['Figtree'] text-[18px] font-semibold leading-normal uppercase">BY HELICOPTER</span>
                                {/* <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" /> */}
                                <img src="/images/char-dham/Path_white.svg" alt="" className="w-4 h-4 ml-1"  />
                            </Button>

                            <Button
                                variant="outline"
                                className="flex-shrink-0 max-w-[300px] rounded-[10px] bg-[#fff] flex items-center justify-between cursor-pointer hover:bg-gray-100"
                                size="lg"
                            >
                                <span className="text-[#1A2F46] font-['Figtree'] text-[18px] font-medium leading-normal uppercase">BY ROAD</span>
                                {/* <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#1A2F46]" /> */}
                                <img src="/images/char-dham/Path72490.svg" alt="" className="w-4 h-4 ml-1"  />
                            </Button>
                        </div>

                        <Button variant="outline" className="bg-transparent flex items-center rounded-[6px] border border-white cursor-pointer hover:scale-105 transform transition duration-200">
                            <span className="text-white font-[Figtree] text-[14px] font-semibold leading-normal uppercase">VIEW ALL</span>
                            {/* <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" /> */}
                            <img src="/images/char-dham/arrow.svg" alt="" className="w-4 h-4 ml-1"  />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Right Panel - Package Cards */}
            <div className="w-full lg:w-1/2 relative z-10 p-4 sm:p-6 lg:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 h-full">
                    {/* First column */}
                    <div className="space-y-4 sm:space-y-6">
                        <TravelPackageCard
                            title={packages[0].title}
                            price={packages[0].price}
                            duration={packages[0].duration}
                            inclusions={packages[0].inclusions}
                            pickup={packages[0].pickup}
                            imageUrl={packages[0].imageUrl}
                            imageQuery={packages[0].imageQuery}
                        />
                        <TravelPackageCard
                            title={packages[2].title}
                            price={packages[2].price}
                            duration={packages[2].duration}
                            inclusions={packages[2].inclusions}
                            pickup={packages[2].pickup}
                            imageUrl={packages[2].imageUrl}
                            imageQuery={packages[2].imageQuery}
                        />
                    </div>

                    {/* Second column with responsive offset */}
                    <div className="space-y-4 sm:space-y-6 md:mt-8 lg:mt-12">
                        <TravelPackageCard
                            title={packages[1].title}
                            price={packages[1].price}
                            duration={packages[1].duration}
                            inclusions={packages[1].inclusions}
                            pickup={packages[1].pickup}
                            imageUrl={packages[1].imageUrl}
                            imageQuery={packages[1].imageQuery}
                        />
                        <TravelPackageCard
                            title={packages[3].title}
                            price={packages[3].price}
                            duration={packages[3].duration}
                            inclusions={packages[3].inclusions}
                            pickup={packages[3].pickup}
                            imageUrl={packages[3].imageUrl}
                            imageQuery={packages[3].imageQuery}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}


interface TravelPackageCardProps {
    title: string
    price: string
    duration: string
    inclusions: string
    pickup: string
    imageUrl: string
    imageQuery: string
}

function TravelPackageCard({
    title,
    price,
    duration,
    inclusions,
    pickup,
    imageUrl,
    imageQuery,
}: TravelPackageCardProps) {
    return (
        <Card className="overflow-hidden rounded-[8px] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
                <img src={imageUrl || "/placeholder.svg"} alt={imageQuery} className="w-full h-40 sm:h-48 object-cover p-2" />
                <div className="absolute bottom-0 left-0 sm:bottom-0 sm:left-0 bg-[#29a4c1] px-2 py-1 sm:px-3 sm:py-1 rounded-[0_8px_8px_0] bg-[#29A4C1] text-xs sm:text-sm">
                    <span className="text-white font-[Figtree] text-[14px] font-normal leading-[24px]">EMI starts from </span><span className="text-white font-[Figtree] text-[16px] font-semibold leading-[24px]">{price}</span>
                </div>
            </div>

            <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <h3 className="text-black font-[Figtree] text-[20px] font-bold leading-normal flex-1 pr-2">
                        {title}
                    </h3>
                    <button className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-[#fffff] border-2 border-[#e97737] rounded-full flex items-center justify-center hover:bg-[#e97737] transition-colors group">
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#e97737] group-hover:text-white transition-colors" />
                    </button>
                </div>

                <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center text-xs flex-wrap">
                        <Calendar className="h-4 w-4 mr-2" /> {duration}
                        <Separator orientation="vertical" className="ml-2 mr-2 !h-[14px] w-px bg-[#BBB] border border-[#BBB]" />
                        <CheckCircle className="h-4 w-4 mr-2" /> {inclusions}
                        <Separator orientation="vertical" className="ml-2 mr-2 !h-[14px] w-px bg-[#BBB] border border-[#BBB]" />
                    </div>
                    <div className="flex items-center text-xs flex-wrap">
                        <MapPin className="h-4 w-4 mr-2 mt-1" /> <span className="mt-1">{pickup}</span>
                    </div>
                </div>
            </div>
        </Card>
    )
}