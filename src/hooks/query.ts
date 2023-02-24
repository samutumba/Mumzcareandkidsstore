import { useQuery } from "@tanstack/react-query"
import { API } from "../api/https"
import { Location, Product } from "../types/db"

export const useProductQuery = () => {
    return useQuery<Product[]>(["products"], async () => {
        const res = await API.getProducts()
        return res.data.products
    })
}   

export const useLocationQuery = () => {
    return useQuery<Location[]>(["locations"], async () => {
        const res = await API.getLocations()
        return res.data.locations
    })
}   