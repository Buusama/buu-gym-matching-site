import { getScheduleService } from "./service";

export const endpoint = {
    auth: {
        login: "/auth/login-matching",
        getMe: "/auth/profile"
    },
    services: {
        getList: "/services",
        getDetail: (id: string | number) => `/services/${id}`,
        getScheduleService: (id: string | number) => `/services/${id}/schedules`,
    },
    trainer: {
        getList: "/trainers",
        getDetail: (id: string | number) => `/trainers/${id}`,
    },
    booking: {
        create: "/bookings",
    },
}