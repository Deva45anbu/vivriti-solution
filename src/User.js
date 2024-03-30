import { apiCall } from "./Client";

export const fetchProductData = async () => {
    try {
        let config = {
            method: 'get',
            url: 'https://dummyjson.com/products'
        }

        const response = await apiCall(config)
        return response

    } catch (error) {
        return error
    }

}

export const fetchProductCategory = async () => {
    try {
        let config = {
            method: 'get',
            url: 'https://dummyjson.com/products/categories'
        }

        const response = await apiCall(config)
        return response

    } catch (error) {
        return error
    }

}