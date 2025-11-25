import { Destination } from "@/data/destinations";

export interface FilterState {
  price: Set<string>;
  duration: Set<string>;
  month: string | null;
  packageType: string | null;
  destinations: Set<string>;
}

export const initialFilterState: FilterState = {
  price: new Set(),
  duration: new Set(),
  month: null,
  packageType: null,
  destinations: new Set(),
};

/**
 * Check if a price matches a price range filter
 */
function matchesPriceRange(price: number, range: string): boolean {
  if (range === "200000+") {
    return price >= 200000;
  }

  const [min, max] = range.split("-").map(Number);
  return price >= min && price <= max;
}

/**
 * Check if days match a duration range filter
 */
function matchesDurationRange(days: number, range: string): boolean {
  const [min, max] = range.split("-").map(Number);
  return days >= min && days <= max;
}

/**
 * Check if a month matches (case-insensitive)
 */
function matchesMonth(availableMonths: string[], selectedMonth: string): boolean {
  const normalizedSelected = selectedMonth.toLowerCase();
  return availableMonths.some(
    (month) => month.toLowerCase() === normalizedSelected
  );
}

/**
 * Check if package type matches
 */
function matchesPackageType(
  type: "Group Tour" | "Speciality Tour",
  filterType: string
): boolean {
  if (filterType === "all") return true;
  if (filterType === "group-tours") return type === "Group Tour";
  if (filterType === "speciality-tour") return type === "Speciality Tour";
  return false;
}

/**
 * Check if destination title matches any selected destination filter
 */
function matchesDestination(title: string, selectedDestinations: Set<string>): boolean {
  if (selectedDestinations.size === 0) return true;

  const titleLower = title.toLowerCase();
  return Array.from(selectedDestinations).some((filterValue) => {
    // Map filter values to keywords in titles
    const keywordMap: Record<string, string[]> = {
      "adi-kailash-om-parvat": ["adi kailash", "om parvat"],
      "kailash-mansarover": ["kailash mansarovar", "kailash mansarover"],
      chardham: ["char dham", "chardham"],
      kedarnath: ["kedarnath"],
      "do-dham": ["do dham", "kedarnath", "badrinath"],
      nepal: ["nepal", "muktinath", "pashupatinath"],
      bali: ["bali"],
      "sri-lanka": ["sri lanka", "ramayana"],
    };

    const keywords = keywordMap[filterValue] || [filterValue];
    return keywords.some((keyword) => titleLower.includes(keyword.toLowerCase()));
  });
}

/**
 * Apply all filters to destinations
 */
export function applyFilters(
  destinations: Destination[],
  filters: FilterState
): Destination[] {
  return destinations.filter((dest) => {
    // Price filter
    if (filters.price.size > 0) {
      const matchesPrice = Array.from(filters.price).some((range) =>
        matchesPriceRange(dest.price, range)
      );
      if (!matchesPrice) return false;
    }

    // Duration filter
    if (filters.duration.size > 0) {
      const matchesDuration = Array.from(filters.duration).some((range) =>
        matchesDurationRange(dest.days, range)
      );
      if (!matchesDuration) return false;
    }

    // Month filter
    if (filters.month) {
      if (!matchesMonth(dest.month, filters.month)) return false;
    }

    // Package type filter
    if (filters.packageType) {
      if (!matchesPackageType(dest.type, filters.packageType)) return false;
    }

    // Destinations filter
    if (filters.destinations.size > 0) {
      if (!matchesDestination(dest.title, filters.destinations)) return false;
    }

    return true;
  });
}

/**
 * Get human-readable label for a filter value
 */
export function getFilterLabel(groupKey: string, value: string): string {
  const labelMap: Record<string, Record<string, string>> = {
    price: {
      "20000-80000": "₹20,000 – ₹80,000",
      "80000-140000": "₹80,000 – ₹1,40,000",
      "140000-200000": "₹1,40,000 – ₹2,00,000",
      "200000+": "₹2,00,000 & Above",
    },
    duration: {
      "4-6": "4 – 6 days",
      "7-8": "7 – 8 days",
      "8-12": "8 – 12 days",
      "13-22": "13 – 22 days",
    },
    month: {
      january: "January",
      february: "February",
      march: "March",
      april: "April",
      may: "May",
      june: "June",
      july: "July",
      august: "August",
      september: "September",
      october: "October",
      november: "November",
      december: "December",
    },
    packageType: {
      all: "All",
      "group-tours": "Group Tours",
      "speciality-tour": "Speciality Tour",
    },
    destinations: {
      "adi-kailash-om-parvat": "Adi Kailash & Om Parvat Yatra",
      "kailash-mansarover": "Kailash Mansarover Yatra",
      chardham: "CharDham Yatra",
      kedarnath: "Kedarnath",
      "do-dham": "Do Dham Yatra",
      nepal: "Nepal",
      bali: "Bali",
      "sri-lanka": "Sri Lanka",
    },
  };

  return labelMap[groupKey]?.[value] || value;
}

/**
 * Check if any filters are active
 */
export function hasActiveFilters(filters: FilterState): boolean {
  return (
    filters.price.size > 0 ||
    filters.duration.size > 0 ||
    filters.month !== null ||
    filters.packageType !== null ||
    filters.destinations.size > 0
  );
}

/**
 * Clear all filters
 */
export function clearAllFilters(): FilterState {
  return { ...initialFilterState };
}

