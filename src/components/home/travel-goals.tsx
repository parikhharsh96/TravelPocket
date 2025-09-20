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
        <section className="w-full py-12 px-4 sm:px-6 lg:px-8 mt-[50px] md:mt-[80px]">
            <div className="max-w-[1920px] mx-auto"> {/*max-w-6xl*/}
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
                        <p className="text-sm text-muted-foreground font-medium tracking-wide text-[#1A2F46] text-center font-['Figtree'] text-[16px] font-semibold leading-normal capitalize relative z-10">Get to Your New</p>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#1A2F46] text-center font-['Playfair'] text-[36px] font-semibold leading-norma relative z-10">
                            Explore by Travel Goals
                        </h2>
                    </div>

                    {/* Icons Section - horizontal flex layout */}
                    <div className="w-full">
                        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-12">
                            {travelGoals.map((goal, index) => {
                                const IconComponent = goal.icon
                                return (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center space-y-3 group cursor-pointer transition-transform hover:scale-105"
                                    >
                                        {/* Icon Container */}
                                        <div className="w-[200px] h-[220px] sm:w-[200px] sm:h-[220px] lg:w-[200px] lg:h-[220px] rounded-[100px] border border-[#BCCCF7] bg-white flex flex-col items-center justify-center group-hover:bg-white transition-colors">
                                            {/* <IconComponent className={`w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 ${goal.color}`} /> */}
                                            <img
                                                src={goal.image}
                                                alt="Title Circle"
                                                width={goal.width}
                                                height={goal.height}
                                                className="mx-auto mt-5"
                                            />

                                            {/* Label */}
                                            <span className="mt-[18px] h-[50px] text-[#1A2F46] text-center font-['Figtree'] text-[14px] md:text-[14px] lg:[text-16px] font-medium leading-normal text-foreground max-w-20">
                                                {goal.label}
                                            </span>

                                            {/* Forward Btn*/}
                                            <img
                                                src="/images/travelgoals/Group_1000007348_(1).svg"
                                                alt=""
                                                width="30px" height="30px"
                                                className="mx-auto mt-5 cursor:pointer"
                                            />
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