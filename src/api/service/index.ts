import axiosInstance from "api/axios";
import { endpoint } from "api/endpoint";
import { PageType, PaginationType } from "contains/type";
import { Filter } from "states/slices/service";

export interface ServiceDataType {
    id: string | number;
    categories: string[];
    name: string;
    saleOff: string | null;
    is_online: boolean;
    description: string | null;
    price: number;
    duration: number | null;
    available: number[];
    language: string;
    max_capacity: number;
    bonus_description: string | null;
    featured_image: string;
    gallery_images: string[];
}

export interface GetListServicesRequest {
    filter: Filter;
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

export const getDetailService = async (id: string | number): Promise<ServiceDataType> => {
    const response = await axiosInstance.get(endpoint.services.getDetail.replace(":id", id.toString()));
    return response.data;
}