import { getAxiosInstance } from "api/axios";
import { endpoint } from "api/endpoint";
import { ServiceDataType, ServiceScheduleDataType } from "api/service";

export interface PostCreateBookingRequest {
    schedule_id: string | number;
    participants: number;
    note: string;
}

export interface BookingDataType {
    bookingId: string | number;
    memberId: string | number;
    serviceName: string;
    scheduleDate: string;
    scheduleTime: string;
    servicePrice: string;
    participant: string | number;
    payment_method: string;
    notes: string;
}


export const postCreateBooking = async (request: PostCreateBookingRequest): Promise<{ data: any }> => {
    const response = await getAxiosInstance().post(endpoint.booking.create, request);
    return response.data;
}

export const getListBooking = async (): Promise<{ data: BookingDataType[] }> => {
    const response = await getAxiosInstance().get(endpoint.booking.getList);
    return response.data;
}