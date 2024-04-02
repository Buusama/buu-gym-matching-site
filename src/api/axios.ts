import { localStore } from "utils";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_REACT_APP_URL
});

export const getAxiosInstance = (useBearer = true) => {
    const instance = axios.create({
        baseURL: import.meta.env.VITE_BACKEND_REACT_APP_URL
    });

    if (useBearer) {
        const token = localStore.get("token");
        if (!token) {
            throw new Error("No token found");
        }
        instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

    return instance;
};

export default axiosInstance;