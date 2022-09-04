import { IOrderItem } from "./product.type"

export interface ICartItem {
    items: IOrderItem[],
    sum: number,
}   

export type IWishList = IWishlistItem[]

export interface IWishlistItem {

}