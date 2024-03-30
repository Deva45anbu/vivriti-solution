import axios from "axios";


export const apiCall = async (config) => {
    try {
        const response = axios.request(config)
        return response;
    } catch (error) {
        return error
    }
}