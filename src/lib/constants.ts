const DEFAULT_API_BASE_URL = "https://api.crmtravelpocket.cloud";

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? DEFAULT_API_BASE_URL;

// Mock mode configuration
export const USE_MOCK_DATA =
  process.env.NEXT_PUBLIC_USE_MOCK_DATA === "true" ||
  (process.env.NODE_ENV === "development" && process.env.NEXT_PUBLIC_USE_MOCK_DATA !== "false");

export const API_ENDPOINTS = {
  auth: {
    generateToken: `${API_BASE_URL}/api/Auth/generatetoken`,
    sendOtp: `${API_BASE_URL}/api/OTP/send`,
    verifyOtp: `${API_BASE_URL}/api/OTP/verify`,
    checkUserExist: `${API_BASE_URL}/api/OTP/user-exist`,
    addCustomerProfile: `${API_BASE_URL}/api/customerhome/add-customer-profile`,
  },
  header: {
    getMenuSubmenus: `${API_BASE_URL}/api/package/menu-submenus`,
  },
  customerHome: {
    getTrendingPackages: `${API_BASE_URL}/api/customerhome/trending-packages`,
    getDestinations: `${API_BASE_URL}/api/customerhome/destinations`,
    getSearchDropdownValues: `${API_BASE_URL}/api/customerhome/search-dropdown-values`,
    getTravelGoals: `${API_BASE_URL}/api/customerhome/travel-goals`,
    getStories: `${API_BASE_URL}/api/customerhome/stories`,
    getSharedExperiences: `${API_BASE_URL}/api/customerhome/shared-experiences`,
    getTravelGalleries: `${API_BASE_URL}/api/customerhome/travel-galleries`,
    getBlogs: `${API_BASE_URL}/api/customerhome/blogs`,
    getPackageListing: `${API_BASE_URL}/api/customerhome/package-listing`,
  },
  accounts: {
    getUserDetails: `${API_BASE_URL}/api/customerhome/user-details`,
  },
  package: {
    getOverview: `${API_BASE_URL}/api/package/overview`,
    getItineraries: `${API_BASE_URL}/api/package/package-itineraries`,
    getEssentialInclusions: `${API_BASE_URL}/api/package/package-essential-inclusions`,
    getPackageDates: `${API_BASE_URL}/api/package/package-dates`,
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
    saveMember: `${API_BASE_URL}/api/Booking/savemember`,
    saveMemberDocs: `${API_BASE_URL}/api/Booking/savememberdocs`,
    replaceMemberDocs: `${API_BASE_URL}/api/Booking/replacememberdocs`,
  },
} as const;

export type ApiEndpointKey = keyof typeof API_ENDPOINTS;

