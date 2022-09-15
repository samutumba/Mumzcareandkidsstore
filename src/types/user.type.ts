import { IProduct } from "./product.type";

export interface IUser {
    _id?: string
    name: string,
    username: string,
    profile?: string,
    password?: string,
    auth?: string,
    email?: string,
    phone?: [string],
    whatsAppNumber?: string,
    googleId?: string,
    facebookId?: string,
    address?: string,
    preferredCommunicationMethod: string,
    wishList: ICart[],
    cart: ICart[],
    policyAccepted: boolean,
    lastAccessed: Date,
    createdAt: Date,
    updatedAt: Date,
}

export interface ICart {
    _id?: string,
    product: IProduct,
    color?: string,
    material?: string,
    size?: string,
    model?: string,
    quantity: number
}

export interface INewCart {
    product?: string,
    color?: string,
    material?: string,
    size?: string,
    model?: string,
    quantity: number
}