import { ProductType } from "./ProductType";

export interface IOrderType {
    _id?: string,
    userId?: string, 
    items: ProductType[],
    status: OrderStatusType,
    mode: IMode,
    paid: boolean,
    paymentId?: any
}

export enum IMode {
    Delivery = "Delivery",
    PickUp = "Pick Up"
}

export enum OrderStatusType {
    Ordered = "Ordered",
    Approved = "Been Approved",
    Preparation = "Being Prepared",
    Delivery = "On The Way",
    Delivered = "Delivered"
}