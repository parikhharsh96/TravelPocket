import { Destination } from "@/data/destinations";

export type SortOption = 
  | "popularity"
  | "latest"
  | "featured"
  | "price_low_to_high"
  | "price_high_to_low"
  | "discount";

/**
 * Apply sorting to destinations based on the selected sort option
 */
export function applySort(
  destinations: Destination[],
  sortBy: SortOption
): Destination[] {
  const sorted = [...destinations];

  switch (sortBy) {
    case "popularity":
      // Sort by isPopular first, then by price (higher price = more popular)
      return sorted.sort((a, b) => {
        if (a.isPopular && !b.isPopular) return -1;
        if (!a.isPopular && b.isPopular) return 1;
        return b.price - a.price;
      });

    case "latest":
      // Sort by ID descending (assuming higher ID = newer)
      return sorted.sort((a, b) => b.id - a.id);

    case "featured":
      // Sort by isPopular and status "Registrations Open"
      return sorted.sort((a, b) => {
        const aFeatured = a.isPopular && a.status === "Registrations Open";
        const bFeatured = b.isPopular && b.status === "Registrations Open";
        if (aFeatured && !bFeatured) return -1;
        if (!aFeatured && bFeatured) return 1;
        return b.price - a.price;
      });

    case "price_low_to_high":
      // Sort by price ascending
      return sorted.sort((a, b) => a.price - b.price);

    case "price_high_to_low":
      // Sort by price descending
      return sorted.sort((a, b) => b.price - a.price);

    case "discount":
      // Sort by EMI (lower EMI might indicate better discount/offer)
      // Or you could calculate discount percentage if available
      return sorted.sort((a, b) => {
        // Sort by price difference (higher price might have better discount offers)
        // Or by EMI ratio (price/emi ratio)
        const aRatio = a.price / a.emi;
        const bRatio = b.price / b.emi;
        return bRatio - aRatio;
      });

    default:
      return sorted;
  }
}

/**
 * Get default sort option
 */
export const DEFAULT_SORT: SortOption = "popularity";

