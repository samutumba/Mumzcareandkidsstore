import { useQuery } from "@tanstack/react-query"
import { API } from "../api/https"
import * as types from "../types"

export const useProductQuery = () => {
    return useQuery<any, types.IProduct[]>(["products"],  async () => {
        const res = await API.getProducts()
        return res.data.products
    })
}   