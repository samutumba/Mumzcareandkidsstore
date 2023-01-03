import { useQuery } from "@tanstack/react-query"
import { API } from "../api/https"
import { Location, Product } from "../types/db"

export const useProductQuery = () => {
    return useQuery<Product[]>(["products"], async () => {
        const res = await API.getProducts()
        localStorage.setItem('products', JSON.stringify(res.data.products))
        return res.data.products
    }, {
        placeholderData: JSON.parse(localStorage.getItem('products') || "[]")
    })
}   

export const useLocationQuery = () => {
    return useQuery<Location[]>(["locations"],  async () => {
        const res = await API.getLocations()
        localStorage.setItem('locations', JSON.stringify(res.data.locations))
        return res.data.locations
    }, {
        placeholderData: JSON.parse(localStorage.getItem('locations') || "[]")
    })
}   