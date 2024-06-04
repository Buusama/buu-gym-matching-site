import { getAxiosInstance } from "api/axios";
import { endpoint } from "api/endpoint";

export interface PostCreateBookingRequest {
    schedule_id: string | number;
    participants: number;
    note: string;
}

export interface BookingDataType {
    serviceName?: string;
    servicePrice?: string | number;
    serviceThumbnail?: string;
    serviceType?: string | number;
    serviceDuration?: string | number;
    trainerName?: string;
    date?: string;
    time?: string;
    bookingId?: string | number;
    memberId?: string | number;
    participants?: string | number;
    payment_method?: string | number;
    notes?: string;
    bookingTrainerName?: string;
    workoutName?: string;
    workoutDuration?: string | number;
    workoutThumbnail?: string;
}


export const postCreateBooking = async (request: PostCreateBookingRequest): Promise<{ data: any }> => {
    const response = await getAxiosInstance().post(endpoint.booking.create, request);
    return response.data;
}

export const getListBooking = async (): Promise<{ data: BookingDataType[] }> => {
    const response = await getAxiosInstance().get(endpoint.booking.getList);
    return response.data;
}

export const getBookingDetail = async (id: number): Promise<{ data: BookingDataType }> => {
    const response = await getAxiosInstance().get(endpoint.booking.getDetail(id), { params: { id } });
    return response.data;
}