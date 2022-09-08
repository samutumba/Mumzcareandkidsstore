import { IFile, IProduct } from "./product.type";
import { ICart, IUser } from "./user.type";

export interface ISales {
 _id: string,
 reference: string,
 user?: IUser,
 sale: ISaleType,
 isDelivery: boolean,
 delivery?: IDelivery,
 salesman?: string,
 items: ICart[],
 payment: {
  mode: IPaymentType,
  amount: number,
  txt_ref?: string,
  refund?: {
   amount: number,
   createdAt: Date
  }[]
 },
 ordered: ICart[],
 createdAt: Date,
 updatedAt: Date
}

export enum ISaleType {
 store = "In Store",
 online = "Online"
}

export enum IPaymentType {
 flutterwave = "Flutterwave",
 mobileMoney = "Mobile Money",
 cash = "Cash",
 visa = "Visa"
}

export interface IDelivery {
 _id: string,
 service: IService,
 user: {
  name: string,
  contact: string,
  district: string,
  town?: string,
  pin?: {
   lgt: string,
   lat: string,
   zoom: number
  },
  note: string 
 },
 status: IDeliveryStatus,
 documents: IFile[],
 packagedBy: string,
 outTime?: Date,
 delivered?: Date,
 createdAt: Date,
 updatedAt: Date
}

export enum IService {
 courieMate = "Courie Mate",
 self = "Self"
}

export enum IDeliveryStatus {
 ordered = "Ordered",
 received = "Confirmed",
 out = "Out for Delivery",
 delivered = "Delivered"
}