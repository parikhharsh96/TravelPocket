import { api } from "@/lib/api-client";
import { API_ENDPOINTS } from "@/lib/constants";

export interface GetCustomerBySearchParams {
    searchBy: string;
}

export interface SaveEnquiryPayload {
    enquiryID: number;
    customerID: number;
    firstName: string;
    lastName: string;
    mobileNo: string;
    emailAddress: string;
    city: string;
    state: string;
    country: string;
    age: number;
    groupTypeId: number;
    groupTypeName: string;
    clientTypeId: number;
    clientTypeName: string;
    groupId: number;
    groupPackageName: string;
    packageId: number;
    dateId: number;
    packageDate: string;
    packageName: string;
    mrp: number;
    packageAmount: number;
    travelDateFrom: string;
    travelDateTo: string;
    travelMonth: string;
    noOfAdults: number;
    noOfChildrens: number;
    noOfInfants: number;
    leadSourceId: number;
    leadSourceName: string;
    priorityId: number;
    priorityName: string;
    assignTo: string;
    serviceRequired: string;
    remarks: string;
    decisionReason: string;
    status: string;
    statusId: number;
    createdBy: string;
    createdOn: string;
}

export async function getCustomerBySearch({
    searchBy,
}: GetCustomerBySearchParams) {
    const searchParams = new URLSearchParams({ searchBy });
    const endpoint = `${API_ENDPOINTS.booking.getCustomerBySearch}?${searchParams.toString()}`;
    return api.get(endpoint);
}

export async function saveEnquiry(payload: SaveEnquiryPayload) {
    return api.post(API_ENDPOINTS.booking.saveEnquiry, payload);
}

export async function getAllBookings(enquiryId: number) {
    const searchParams = new URLSearchParams({
        enquiryId: String(enquiryId),
    });

    const endpoint = `${API_ENDPOINTS.booking.getAllBookings}?${searchParams.toString()}`;
    return api.get(endpoint);
}

export async function getEnquiry(enquiryId: number) {
    const searchParams = new URLSearchParams({
        enquiryId: String(enquiryId),
    });

    const endpoint = `${API_ENDPOINTS.booking.getEnquiry}?${searchParams.toString()}`;
    return api.get(endpoint);
}

export async function getEnquiries() {
    return api.get(API_ENDPOINTS.booking.getEnquiries);
}

export interface AddProposalPayload {
    proposalId: number;
    enquiryId: number;
    packageId: number;
    packageName: string;
    price: number;
    discount: number;
    offerPrice: number;
    offerValidTill: string;
    groupDateId: number;
    groupDateText: string;
    status: string;
    remark: string;
    createdBy: string;
    createdOn: string;
    isTcsApplicable: boolean;
}

export async function addProposal(payload: AddProposalPayload) {
    return api.post(API_ENDPOINTS.booking.addProposal, payload);
}

export interface UpdateProposalPayload {
    proposalId: number;
    enquiryId: number;
    packageId: number;
    packageName: string;
    price: number;
    discount: number;
    offerPrice: number;
    offerValidTill: string;
    groupDateId: number;
    groupDateText: string;
    status: string;
    remark: string;
    createdBy: string;
    createdOn: string;
    isTcsApplicable: boolean;
}

export async function updateProposal(payload: UpdateProposalPayload) {
    return api.post(API_ENDPOINTS.booking.updateProposal, payload);
}

export interface AddFollowupPayload {
    followupId: number;
    enquiryId: number;
    nextActivity: string;
    followupType: string;
    nextFollowupDateTime: string;
    assignedEmployee: string;
    assignedEmployeeId: number;
    setReminder: boolean;
    remarks: string;
    createdBy: string;
}

export async function addFollowup(payload: AddFollowupPayload) {
    return api.post(API_ENDPOINTS.booking.addFollowup, payload);
}



