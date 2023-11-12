import axios from "axios";

export const api = axios.create({
    baseURL: (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? "http://localhost:5000" : process.env.NEXT_PUBLIC_API_URL 
})

export const startAPI = async () => {
    return await api.get("/")
}

interface goldenSearchProps {
    function: string
    interval: number[] 
    limit: number
}

export const goldenSearch = async (data: goldenSearchProps) => {
    return await api.post("/goldenSearch", data)
}