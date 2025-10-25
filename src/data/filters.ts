// src/data/filters.ts

export interface FilterOption {
  label: string;
  value: string;
}

export interface FilterGroup {
  title: string;
  key: string;
  type: "checkbox" | "radio" | "datepicker" | "label";
  options: FilterOption[];
}

export const filterGroups: FilterGroup[] = [
  {
    title: "Price",
    key: "price",
    type: "checkbox",
    options: [
      { label: "₹20,000 – ₹80,000", value: "20000-80000" },
      { label: "₹80,000 – ₹1,40,000", value: "80000-140000" },
      { label: "₹1,40,000 – ₹2,00,000", value: "140000-200000" },
      { label: "₹2,00,000 & Above", value: "200000+" },
    ],
  },
  {
    title: "Tour Duration",
    key: "duration",
    type: "checkbox",
    options: [
      { label: "4 – 6 days", value: "4-6" },
      { label: "7 – 8 days", value: "7-8" },
      { label: "8 – 12 days", value: "8-12" },
      { label: "13 – 22 days", value: "13-22" },
    ],
  },
  {
    title: "Departure Month",
    key: "month",
    type: "datepicker",
    options: [
      { label: "January", value: "january" },
      { label: "February", value: "february" },
      { label: "March", value: "march" },
      { label: "April", value: "april" },
      { label: "May", value: "may" },
      { label: "June", value: "june" },
      { label: "July", value: "july" },
      { label: "August", value: "august" },
      { label: "September", value: "september" },
      { label: "October", value: "october" },
      { label: "November", value: "november" },
      { label: "December", value: "december" },
    ],
  },
  {
    title: "Package Type",
    key: "packageType",
    type: "label",
    options: [
      { label: "All", value: "all" },
      { label: "Group Tours", value: "group-tours" },
      { label: "Speciality Tour", value: "speciality-tour" }
    ],
  },
  {
    title: "Select Destinations",
    key: "destinations",
    type: "checkbox",
    options: [
      { label: "Adi Kailash & Om Parvat Yatra", value: "adi-kailash-om-parvat" },
      { label: "Kailash Mansarover Yatra", value: "kailash-mansarover" },
      { label: "CharDham Yatra", value: "chardham" },
      { label: "Kedarnath", value: "kedarnath" },
      { label: "Do Dham Yatra", value: "do-dham" },
      { label: "Nepal", value: "nepal" },
      { label: "Bali", value: "bali" },
      { label: "Sri Lanka", value: "sri-lanka" },
    ],
  },
];

export const sortOptions = [
  { value: "popularity", label: "Popularity" },
  { value: "latest", label: "Latest" },
  { value: "featured", label: "Featured" },
  { value: "price_low_to_high", label: "Price: Low to High" },
  { value: "price_high_to_low", label: "Price: High to Low" },
  { value: "discount", label: "Discount" },
];