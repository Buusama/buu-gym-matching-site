export const endpoint = {
    auth: {
        login: "/auth/login-matching",
        getMe: "/auth/profile"
    },
    services: {
        getList: "/services",
        getDetail: (id: string | number) => `/services/${id}`,
    },
    trainer: {
        getList: "/trainers",
        getDetail: (id: string | number) => `/trainers/${id}`,
    }
}