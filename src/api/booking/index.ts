import { getAxiosInstance } from "api/axios";
import { endpoint } from "api/endpoint";
import { ServiceDataType, ServiceScheduleDataType } from "api/service";

export interface PostCreateBookingRequest {
    schedule_id: string | number;
    participants: number;
    note: string;
}

export interface BookingDataType {
    id: string | number;
    participants: number;
    note: string;
    schedule: ServiceScheduleDataType
    service: ServiceDataType
}


export const postCreateBooking = async (request: PostCreateBookingRequest): Promise<{ data: any }> => {
    const response = await getAxiosInstance().post(endpoint.booking.create, request);
    return response.data;
}