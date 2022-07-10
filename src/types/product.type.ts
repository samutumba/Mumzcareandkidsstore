export interface IProduct {
    _id?: string
    brand: string,
    title: string,
    gender?: string,
    family: string,
    description: string,
    image: string[],
    category: string,
    subCategory: string,
    minAge?: number,
    maxAge?: number,
    detail?: {
        color?: IDetailType[],
        material?: IDetailType[],
        size?: IDetailType[],
        model?: IDetailType[],
    },
    basePrice: number,
    enabled: boolean,
    keywords: string[]
}

export interface IDetailType {
    name: string,
    value: number
}

export interface IItem {
    _id?: string,
    productID: string,
    color?: string,
    material?: string,
    sold: boolean
}

export interface IOrderItem {
    productID: string,
    color?: string,
    material?: string,
    size?: string,
    price: number
}

export interface IOrder {
    items: IOrderItem[],
    sum: number,
    paid: boolean,
    paymentID?: number
}

export interface IOrderState {
    items: IOrderItem[],
    sum: number,
    paid: boolean
}

