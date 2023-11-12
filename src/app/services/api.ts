import axios from "axios";

export const api = axios.create({
    // baseURL: 'http://localhost:5000' //Development URL
    baseURL: process.env.NEXT_PUBLIC_API_URL //Production URL
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