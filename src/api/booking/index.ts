import axiosInstance from "api/axios";
import { endpoint } from "api/endpoint";

export interface PostCreateBookingRequest {
    schedule_id: string | number;
    participants: number;
    note: string;
}

export const postCreateBooking = async (request: PostCreateBookingRequest): Promise<{ data: any }> => {
    const response = await axiosInstance.post(endpoint.booking.create, request);
    return response.data;
}