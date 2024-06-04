import { getAxiosInstance } from "api/axios";
import { endpoint } from "api/endpoint";

export interface ScheduleDataType {
    id: string | number;
    date: string;
    time: string;
    serviceName: string;
    servicePrice: string;
    serviceDuration: number;
    serviceType: number;
    serviceThumbnail: string;
    participants: number;
    trainerName: string;
}

export const getListScheduleMember = async (): Promise<{ data: ScheduleDataType[] }> => {
    const response = await getAxiosInstance().get(endpoint.serviceClasses.memberList);
    return response.data;
}

export const getScheduleDetail = async (id: number): Promise<{ data: ScheduleDataType }> => {
    const response = await getAxiosInstance().get(endpoint.serviceClasses.getDetail(id));
    return response.data;
}