
export const endpoint = {
    auth: {
        login: "/auth/login-matching",
        getMe: "/auth/profile"
    },
    services: {
        getList: "/services",
        getTop: "/services/top",
        getDetail: (id: string | number) => `/services/${id}`,
        getScheduleService: (id: string | number) => `/services/${id}/service_classes`,
    },
    trainer: {
        getList: "/trainers",
        getDetail: (id: string | number) => `/trainers/${id}`,
    },
    booking: {
        create: "/bookings",
        getList: "/bookings",
        getDetail: (id: string | number) => `/bookings/${id}`,
    },
    serviceClasses: {
        memberList: "/service_classes/member",
        trainerList: "/service_classes/trainer",
        getDetail: (id: string | number) => `/service_classes/${id}`,
    }
}