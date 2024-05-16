
export const endpoint = {
    auth: {
        login: "/auth/login-matching",
        getMe: "/auth/profile"
    },
    services: {
        getList: "/services",
        getTop: "/services/top",
        getDetail: (id: string | number) => `/services/${id}`,
        getScheduleService: (id: string | number) => `/services/${id}/schedules`,
    },
    trainer: {
        getList: "/trainers",
        getDetail: (id: string | number) => `/trainers/${id}`,
    },
    booking: {
        create: "/bookings",
        getList: "/bookings",
    },
    schedule: {
        memberList: "/schedules/member",
        trainerList: "/schedules/trainer",
        getDetail: (id: string | number) => `/schedules/${id}`,
    }
}