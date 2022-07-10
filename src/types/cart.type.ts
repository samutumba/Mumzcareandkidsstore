import { IOrderItem } from "./product.type"

export type ICart = ICartItem[]

export interface ICartItem {
    items: IOrderItem[],
    sum: number,
}   

export type IWishList = IWishlistItem[]

export interface IWishlistItem {

}