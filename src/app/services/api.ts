import axios from "axios";
import { baseProps } from "./types";

export const api = axios.create({
    baseURL: (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? "http://localhost:5000" : process.env.NEXT_PUBLIC_API_URL 
})

export const startAPI = async () => {
    return await api.get("/")
}

export const goldenSearch = async (data: baseProps) => {
    return await api.post("/goldenSearch", data)
}

export const bissectionSearch = async (data: baseProps) => {
    return await api.post("/bissectionSearch", data)
}