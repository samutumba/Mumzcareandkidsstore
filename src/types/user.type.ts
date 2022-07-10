import { ICart, IWishList } from "./cart.type";

export interface IUser {
    _id?: string
    name: string,
    username: string,
    profile?: string,
    password?: string,
    auth?: string,
    email?: string,
    phone?: string,
    whatsAppNumber?: string,
    googleId?: string,
    facebookId?: string,
    address?: string,
    preferredCommunicationMethod: string,
    wishlist: IWishList,
    cart: ICart,
    policyAccepted: boolean,
    lastAccessed: Date
}