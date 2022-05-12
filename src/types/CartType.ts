import { ProductType } from "./ProductType";

export interface ICartType {
    items: ProductType[],
    total: number
}