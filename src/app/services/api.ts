import axios from "axios";
import { BaseProps, NewtonProps } from "./types";

export const api = axios.create({
    baseURL: (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? "http://localhost:5000" : process.env.NEXT_PUBLIC_API_URL 
})

export const startAPI = async () => {
    return await api.get("/")
}

export const goldenSearch = async (data: BaseProps) => {
    return await api.post("/goldenSearch", data)
}

export const bissectionSearch = async (data: BaseProps) => {
    return await api.post("/bissectionSearch", data)
}

export const newtonSearch = async (data: NewtonProps) => {
    return await api.post("/newtonSearch", data)
}