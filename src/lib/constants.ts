const DEFAULT_API_BASE_URL = "https://api.crmtravelpocket.cloud";

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? DEFAULT_API_BASE_URL;

// Mock mode configuration
export const USE_MOCK_DATA =
  process.env.NEXT_PUBLIC_USE_MOCK_DATA === "true" ||
  (process.env.NODE_ENV === "development" && process.env.NEXT_PUBLIC_USE_MOCK_DATA !== "false");

export const API_ENDPOINTS = {
  customerHome: {
    getTrendingPackages: `${API_BASE_URL}/api/CustomerHome/gettrendingpackages`,
    getDestinations: `${API_BASE_URL}/api/CustomerHome/getdestinations`,
    getSearchDropdownValues: `${API_BASE_URL}/api/CustomerHome/getsearchdropdownvalues`,
    getTravelGoals: `${API_BASE_URL}/api/CustomerHome/gettravelgoals`,
    getStories: `${API_BASE_URL}/api/CustomerHome/getstories`,
    getSharedExperiences: `${API_BASE_URL}/api/CustomerHome/getsharedexperiences`,
  },
  booking: {
    getCustomerBySearch: `${API_BASE_URL}/api/Booking/getcustomerbysearch`,
    saveEnquiry: `${API_BASE_URL}/api/Booking/saveenquiry`,
    getAllBookings: `${API_BASE_URL}/api/Booking/getallbookings`,
    getEnquiry: `${API_BASE_URL}/api/Booking/getenquiry`,
    getEnquiries: `${API_BASE_URL}/api/Booking/getenquiries`,
    addProposal: `${API_BASE_URL}/api/Booking/addproposal`,
    updateProposal: `${API_BASE_URL}/api/Booking/updateproposal`,
    addFollowup: `${API_BASE_URL}/api/Booking/addfollowup`,
  },
} as const;

export type ApiEndpointKey = keyof typeof API_ENDPOINTS;

