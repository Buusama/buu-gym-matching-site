import axiosInstance from "api/axios";
import { endpoint } from "api/endpoint";
import { PaginationType } from "contains/type";
import { FilterService } from "states/slices/service";

export interface WorkoutDataType {
    id: string | number;
    name: string;
    duration: number;
    description: string | null;
    thumbnail: string | null;
}
export interface ServiceDataType {
    id: string | number;
    name: string;
    price: number;
    duration: number;
    description: string | null;
    maxParticipants: number;
    serviceGallaryImages: string[];
    workouts: WorkoutDataType[];
}

export interface GetListServicesRequest {
    filter: FilterService;
}
export const getListServices = async (
    request: GetListServicesRequest
): Promise<{ data: any[]; meta: PaginationType }> => {
    const response = await axiosInstance.get(endpoint.services.getList, {
        params: {
            ...request.filter,
            ...request.filter.page,
        },
    });
    return response.data;
}

export const getDetailService = async (id: string | number): Promise<{ data: ServiceDataType }> => {
    const response = await axiosInstance.get(endpoint.services.getDetail(id));
    return response.data;
}