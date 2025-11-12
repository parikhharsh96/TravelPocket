import { MapPin, Mountain, Binary as Binoculars, UtensilsCrossed, Church, Waves, Backpack, ArrowLeft } from "lucide-react"

const travelGoals = [
    {
        icon: MapPin,
        label: "Nepal Soul Trips",
        color: "text-orange-500",
        image: "/images/travelgoals/noun-nepal-2554926_1.svg",
        height: '48px',
        width: '48px'
    },
    {
        icon: Mountain,
        label: "Adventure Sports",
        color: "text-orange-500",
        image: "/images/travelgoals/icons_(3).svg",
        height: '48px',
        width: '48px'
    },
    {
        icon: Binoculars,
        label: "Nature and Wilderness",
        color: "text-orange-500",
        image: "/images/travelgoals/icons_(2).svg",
        height: '48px',
        width: '48px'
    },
    {
        icon: UtensilsCrossed,
        label: "Culture and Food Tour",
        color: "text-orange-500",
        image: "/images/travelgoals/noun-ramen-7758349_1.svg",
        height: '48px',
        width: '48px'
    },
    {
        icon: Church,
        label: "Religious / Pilgrimage",
        color: "text-orange-500",
        image: "/images/travelgoals/icons_(1).svg",
        height: '48px',
        width: '48px'
    },
    {
        icon: Waves,
        label: "Beaches",
        color: "text-orange-500",
        image: "/images/travelgoals/icons.svg",
        height: '48px',
        width: '48px'
    },
    {
        icon: Backpack,
        label: "Solo Trips",
        color: "text-orange-500",
        image: "/images/travelgoals/noun-solo-7433689_1.svg",
        height: '48px',
        width: '48px'
    },
]

export function TravelGoalsSection() {
    return (
        <section className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-[50px] md:mt-[80px]">
            <div className=""> {/*max-w-6xl max-w-[1920px]*/}
                {/* Main flex container - vertical layout */}
                <div className="flex flex-col items-center space-y-8 gap-6">
                    {/* Header Section */}
                    <div className="text-center space-y-2 relative">
                        {/* Background image */}
                        <div className="absolute left-1/2 -translate-x-1/2 -top-6" style={{ top: '-40px' }}>
                            <img
                                src="/images/trendingpackages/titledesign.svg"
                                alt="Title Circle"
                                width={150}
                                height={150}
                                className="mx-auto"
                            />
                        </div>
                        <p className="text-[#1A2F46] text-center font-['Figtree'] text-[14px] md:text-[16px] font-semibold leading-normal capitalize relative z-10">Get to Your New</p>
                        <h2 className="text-[#1A2F46] text-center font-['Playfair'] text-[28px] md:text-[36px] font-semibold leading-norma relative z-10">
                            Explore by Travel Goals
                        </h2>
                    </div>

                    {/* Icons Section - horizontal flex layout */}
                    <div className="w-full">
                        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                            {travelGoals.map((goal, index) => {
                                const IconComponent = goal.icon
                                return (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center space-y-3 group cursor-pointer transition-transform"
                                    >
                                        {/* Icon Container */}
                                        <div className="w-[106px] h-[118px] md:w-[200px] md:h-[220px] lg:w-[200px] lg:h-[220px] rounded-[50px] md:rounded-[100px] lg:rounded-[100px] border border-[#BCCCF7] bg-white flex flex-col items-center justify-center transition-transform duration-300 ease-in-out group-hover:bg-[#1A2F46]">
                                            {/* <IconComponent className={`w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 ${goal.color}`} /> */}
                                            {/* <img
                                                src={goal.image}
                                                alt="Title Circle"
                                                width={goal.width}
                                                height={goal.height}
                                                className="mx-auto mt-5"
                                            /> */}

                                            <img src={goal.image} alt={goal.label} className="mx-auto mt-3 md:mt-4 lg:mt-5 w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 group-hover:scale-102 transition-transform duration-300 ease-in-out" />

                                            {/* Label */}
                                            <span className="mt-2 md:mt-4 h-[40px] md:h-[50px] lg:h-[50px] text-[#1A2F46] text-center font-['Figtree'] text-[12px] md:text-[14px] lg:[text-16px] font-medium leading-normal text-foreground max-w-20 group-hover:text-[#ffffff]">
                                                {goal.label}
                                            </span>

                                            {/* Forward Btn*/}
                                            {/* <img
                                                src="/images/travelgoals/Group_1000007348_(1).svg"
                                                alt={`${goal.label} forward button`}
                                                className="mb-2 mt-2 w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 cursor-pointer transition-transform duration-300 ease-in-out group-hover:-rotate-45"
                                            /> */}
                                            <svg className="mb-2 mt-2 w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 cursor-pointer transition-transform duration-300 ease-in-out text-[#1A2F46] group-hover:-rotate-45 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="none">
                                                <circle cx="15" cy="15" r="14.5" stroke="currentColor" strokeWidth="1" fill="none" />
                                                <path d="M19.3016 15.6H8V14.4H19.3016L14.7446 9.843L15.6 9L21.6 15L15.6 21L14.7446 20.157L19.3016 15.6Z" fill="currentColor" />
                                            </svg>
                                            
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}