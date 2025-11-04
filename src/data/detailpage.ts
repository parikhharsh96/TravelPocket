export interface ItineraryItem {
  day: number;
  title: string;
  description: string;
  routeOverview?: { label: string; value: string }[];  // optional, since some days may not have it
  keyHighlights?: string[];                            // optional
  featureBadges?: { icon: string; text: string }[];   // optional
  images?: { src: string; alt: string; caption: string }[];  // optional
}

export const itineraryList: ItineraryItem[] = [
  {
    day: 1,
    title: "Arrival At Lucknow",
    description:
      "Welcome to Lucknow! The journey starts here at Lucknow Railway Station. Your yatra guide and support staff will assist you with your welcome and journey briefing.",
    routeOverview: [
      { label: "Arrival Time", value: "N/A" },
      { label: "Hotel", value: "Hotel Taj or similar" },
    ],
    keyHighlights: [
      "Meet & greet at the station",
      "Yatra briefing and medical check-up",
      "Check-in at the hotel",
      "Rest and prepare for the journey ahead",
    ],
    featureBadges: [
      {
        icon: "/images/detailpage/iconspace_1.svg",
        text: "Meet & Greet",
      },
      {
        icon: "/images/detailpage/iconspace_3.svg",
        text: "Yatra Briefing",
      },
    ],
    images: [
      {
        src: "/images/detailpage/iternary_img_1.png",
        alt: "Lucknow Railway Station",
        caption: "Arrival at Lucknow Railway Station",
      },
      {
        src: "/images/detailpage/iternary_img_2.png",
        alt: "Hotel Taj",
        caption: "Hotel Taj or similar",
      },
    ],
  },

  {
    day: 2,
    title: "Lucknow Drive to Nepalgunj",
    description:
      "Your spiritual journey to Kailash Mansarovar begins with a drive to Nepalgunj after breakfast. This town, located near the India-Nepal border, serves as the official starting point for the yatra.",
    routeOverview: [
      { label: "Drive Duration", value: "Approx. 4-5 hours" },
      { label: "From", value: "Starting Point (Lucknow or similar)" },
      { label: "To", value: "Nepalgunj (Altitude: 152 m)" },
      { label: "Hotel", value: "Soaltee Westend Premier or similar" },
    ],
    keyHighlights: [
      "Comfortable road trip with en-route refreshment break",
      "Check-in and rest at a premium hotel in Nepalgunj",
      "Optional: Visit Bageshwari Temple, a revered Shakti Peeth",
      "Evening Yatra Briefing Session covering route, medical advice, and travel essentials",
      "Prepare mentally and spiritually for the sacred journey ahead",
    ],
    featureBadges: [
      {
        icon: "/images/detailpage/iconspace_3.svg",
        text: "Check-in at a Premium Hotel",
      },
      {
        icon: "/images/detailpage/iconspace_2.svg",
        text: "Drive to Nepalgunj",
      },
      {
        icon: "/images/detailpage/iconspace_1.svg",
        text: "Breakfast, Lunch, Dinner",
      },
    ],
    images: [
      {
        src: "/images/detailpage/iternary_img_1.png",
        alt: "Soaltee Westend Premier",
        caption: "Soaltee Westend Premier",
      },
      {
        src: "/images/detailpage/iternary_img_2.png",
        alt: "Bageshwari Temple, a revered Shakti Peeth",
        caption: "Bageshwari Temple, a revered Shakti Peeth",
      },
    ],
  },

  // Day 3 full details
  {
    day: 3,
    title: "Nepalgunj - Simikot (Flight)",
    description:
      "Your journey begins with a flight to Simikot from Nepalgunj, followed by a briefing on the route and safety precautions.",
    keyHighlights: [
      "Flight to Simikot (Approx 1 hour)",
      "Meeting with trek support team",
      "Yatra briefing and medical checkup",
      "Start of the trek to Hilsa",
    ],
    featureBadges: [
      {
        icon: "/images/detailpage/iconspace_1.svg",
        text: "Flight to Simikot",
      },
      {
        icon: "/images/detailpage/iconspace_2.svg",
        text: "Trek Preparation",
      },
    ],
    images: [
      {
        src: "/images/detailpage/iternary_img_1.png",
        alt: "Simikot Airport",
        caption: "Flight to Simikot",
      },
    ],
  },

  // Days 4 to 11 reuse day 3 structure, only day and title changes
  {
    day: 4,
    title: "Simikot - Hilsa - Taklakot (Helicopter)",
    description:
      "Your journey begins with a flight to Simikot from Nepalgunj, followed by a briefing on the route and safety precautions.",
    keyHighlights: [
      "Flight to Simikot (Approx 1 hour)",
      "Meeting with trek support team",
      "Yatra briefing and medical checkup",
      "Start of the trek to Hilsa",
    ],
    featureBadges: [
      {
        icon: "/images/detailpage/iconspace_1.svg",
        text: "Flight to Simikot",
      },
      {
        icon: "/images/detailpage/iconspace_2.svg",
        text: "Trek Preparation",
      },
    ],
    images: [
      {
        src: "/images/detailpage/iternary_img_1.png",
        alt: "Simikot Airport",
        caption: "Flight to Simikot",
      },
    ],
  },
  {
    day: 5,
    title: "Taklakot - Mansarovar (4,590 m)",
    description:
      "Your journey begins with a flight to Simikot from Nepalgunj, followed by a briefing on the route and safety precautions.",
    keyHighlights: [
      "Flight to Simikot (Approx 1 hour)",
      "Meeting with trek support team",
      "Yatra briefing and medical checkup",
      "Start of the trek to Hilsa",
    ],
    featureBadges: [
      {
        icon: "/images/detailpage/iconspace_1.svg",
        text: "Flight to Simikot",
      },
      {
        icon: "/images/detailpage/iconspace_2.svg",
        text: "Trek Preparation",
      },
    ],
    images: [
      {
        src: "/images/detailpage/iternary_img_1.png",
        alt: "Simikot Airport",
        caption: "Flight to Simikot",
      },
    ],
  },
  {
    day: 6,
    title: "Mansarovar - Darchen (4,580 m)",
    description:
      "Your journey begins with a flight to Simikot from Nepalgunj, followed by a briefing on the route and safety precautions.",
    keyHighlights: [
      "Flight to Simikot (Approx 1 hour)",
      "Meeting with trek support team",
      "Yatra briefing and medical checkup",
      "Start of the trek to Hilsa",
    ],
    featureBadges: [
      {
        icon: "/images/detailpage/iconspace_1.svg",
        text: "Flight to Simikot",
      },
      {
        icon: "/images/detailpage/iconspace_2.svg",
        text: "Trek Preparation",
      },
    ],
    images: [
      {
        src: "/images/detailpage/iternary_img_1.png",
        alt: "Simikot Airport",
        caption: "Flight to Simikot",
      },
    ],
  },
  {
    day: 7,
    title: "First Day Paryatan - Darchen - Shingba ( Dhochak 14,705 m)",
    description:
      "Your journey begins with a flight to Simikot from Nepalgunj, followed by a briefing on the route and safety precautions.",
    keyHighlights: [
      "Flight to Simikot (Approx 1 hour)",
      "Meeting with trek support team",
      "Yatra briefing and medical checkup",
      "Start of the trek to Hilsa",
    ],
    featureBadges: [
      {
        icon: "/images/detailpage/iconspace_1.svg",
        text: "Flight to Simikot",
      },
      {
        icon: "/images/detailpage/iconspace_2.svg",
        text: "Trek Preparation",
      },
    ],
    images: [
      {
        src: "/images/detailpage/iternary_img_1.png",
        alt: "Simikot Airport",
        caption: "Flight to Simikot",
      },
    ],
  },
  {
    day: 8,
    title: "Trek to Kailash Charm Garph & Back to Darchen",
    description:
      "Your journey begins with a flight to Simikot from Nepalgunj, followed by a briefing on the route and safety precautions.",
    keyHighlights: [
      "Flight to Simikot (Approx 1 hour)",
      "Meeting with trek support team",
      "Yatra briefing and medical checkup",
      "Start of the trek to Hilsa",
    ],
    featureBadges: [
      {
        icon: "/images/detailpage/iconspace_1.svg",
        text: "Flight to Simikot",
      },
      {
        icon: "/images/detailpage/iconspace_2.svg",
        text: "Trek Preparation",
      },
    ],
    images: [
      {
        src: "/images/detailpage/iternary_img_1.png",
        alt: "Simikot Airport",
        caption: "Flight to Simikot",
      },
    ],
  },
  {
    day: 9,
    title: "Second Day Paryatan - Darchen - Zuthulpuk (4,680 m)",
    description:
      "Your journey begins with a flight to Simikot from Nepalgunj, followed by a briefing on the route and safety precautions.",
    keyHighlights: [
      "Flight to Simikot (Approx 1 hour)",
      "Meeting with trek support team",
      "Yatra briefing and medical checkup",
      "Start of the trek to Hilsa",
    ],
    featureBadges: [
      {
        icon: "/images/detailpage/iconspace_1.svg",
        text: "Flight to Simikot",
      },
      {
        icon: "/images/detailpage/iconspace_2.svg",
        text: "Trek Preparation",
      },
    ],
    images: [
      {
        src: "/images/detailpage/iternary_img_1.png",
        alt: "Simikot Airport",
        caption: "Flight to Simikot",
      },
    ],
  },
  {
    day: 10,
    title: "Zuthulpuk - Darchen - Taklakot - Hilsa",
    description:
      "Your journey begins with a flight to Simikot from Nepalgunj, followed by a briefing on the route and safety precautions.",
    keyHighlights: [
      "Flight to Simikot (Approx 1 hour)",
      "Meeting with trek support team",
      "Yatra briefing and medical checkup",
      "Start of the trek to Hilsa",
    ],
    featureBadges: [
      {
        icon: "/images/detailpage/iconspace_1.svg",
        text: "Flight to Simikot",
      },
      {
        icon: "/images/detailpage/iconspace_2.svg",
        text: "Trek Preparation",
      },
    ],
    images: [
      {
        src: "/images/detailpage/iternary_img_1.png",
        alt: "Simikot Airport",
        caption: "Flight to Simikot",
      },
    ],
  },
  {
    day: 11,
    title: "Departure",
    description:
      "Your journey begins with a flight to Simikot from Nepalgunj, followed by a briefing on the route and safety precautions.",
    keyHighlights: [
      "Flight to Simikot (Approx 1 hour)",
      "Meeting with trek support team",
      "Yatra briefing and medical checkup",
      "Start of the trek to Hilsa",
    ],
    featureBadges: [
      {
        icon: "/images/detailpage/iconspace_1.svg",
        text: "Flight to Simikot",
      },
      {
        icon: "/images/detailpage/iconspace_2.svg",
        text: "Trek Preparation",
      },
    ],
    images: [
      {
        src: "/images/detailpage/iternary_img_1.png",
        alt: "Simikot Airport",
        caption: "Flight to Simikot",
      },
    ],
  },
];
