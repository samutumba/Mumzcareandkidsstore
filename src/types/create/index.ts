// AUTO GENERATED FILE BY @kalissaac/prisma-typegen
// DO NOT EDIT

import { DeliveryLocation, Detail, CartDetail } from "../db";


export enum PaymentType {
    flutterwave = 'flutterwave',
    cash = 'cash',
    mobile_money = 'mobile_money',
    credit = 'credit',
    debit = 'debit',
}

export enum PaymentPurpose {
    bill = 'bill',
    sale = 'sale',
    refund = 'refund',
    donation = 'donation',
}


export interface Admin {
    id?: string,
    v?: number,
    createdAt?: (Date | string),
    email: string,
    employed?: boolean,
    name: string,
    password: string,
    phone: string,
    role: string,
    updatedAt: (Date | string),
    filesId?: string | null,
    eventsId: string[],
}

export interface Pickup {
    id?: string,
    v?: number,
    service: string,
    status: string,
    updatedAt: (Date | string),
    createdAt?: (Date | string),
    contact: string,
    note: string,
    locationsId: string,
    usersId: string,
}

export interface Delivery {
    id?: string,
    v?: number,
    service: string,
    status: string,
    updatedAt: (Date | string),
    createdAt?: (Date | string),
    location: DeliveryLocation,
}

export interface Event {
    id?: string,
    v?: number,
    completed?: boolean,
    description: string,
    endDate?: (Date | string) | null,
    participantsID: string[],
    startDate: (Date | string),
    title: string,
    updatedAt: (Date | string),
    createdAt?: (Date | string),
}

export interface Inquiry {
    id?: string,
    v?: number,
    category: string,
    contact: string,
    message: string,
    name: string,
    reference: string,
    responded?: boolean,
    type: string,
    updatedAt: (Date | string),
    createdAt?: (Date | string),
    usersId?: string | null,
}

export interface Feedback {
    id?: string,
    message: string,
    updatedAt: (Date | string),
    createdAt?: (Date | string),
    inquiriesId?: string | null,
    adminsId: string,
}

export interface Item {
    id?: string,
    v?: number,
    color: string,
    material: string,
    size: string,
    model: string,
    sold?: boolean,
    updatedAt: (Date | string),
    createdAt?: (Date | string),
    salesId: string[],
    productsId: string,
}

export interface Location {
    id?: string,
    v?: number,
    address: string,
    email: string[],
    isStore: boolean,
    maps: string,
    name: string,
    phone: string[],
    updatedAt: (Date | string),
    createdAt?: (Date | string),
}

export interface Product {
    id?: string,
    v?: number,
    basePrice: number,
    brand: string,
    category: string,
    createdAt?: (Date | string),
    description: string,
    detail?: Detail | null,
    enabled: boolean,
    keywords: string[],
    maxAge: number,
    minAge: number,
    subCategory: string,
    title: string,
    updatedAt: (Date | string),
}

export interface File {
    id?: string,
    fileKey: string,
    link: string,
    type: string,
    updatedAt: (Date | string),
    createdAt?: (Date | string),
    eventsId?: string | null,
    deliveriesId?: string | null,
    pickupsId?: string | null,
    locationsId?: string | null,
    productsId?: string | null,
}

export interface Review {
    id?: string,
    rating?: number,
    description: string,
    updatedAt: (Date | string),
    createdAt?: (Date | string),
    productsId: string,
    usersId: string,
}

export interface Session {
    id: string,
    expires: (Date | string),
    session: string,
}

export interface Cart {
    id?: string,
    updatedAt: (Date | string),
    createdAt?: (Date | string),
    userId: string,
}

export interface Wishlist {
    id?: string,
    updatedAt: (Date | string),
    createdAt?: (Date | string),
    userId: string,
}

export interface CartItem {
    id?: string,
    quantity?: number,
    detail?: CartDetail | null,
    cartId?: string | null,
    productsId: string,
    salesId?: string | null,
    wishlistId?: string | null,
}

export interface User {
    id?: string,
    v?: number,
    auth?: string | null,
    createdAt?: (Date | string),
    lastAccessed?: (Date | string),
    name: string,
    password?: string | null,
    phone: string[],
    points?: number,
    policyAccepted?: boolean,
    preferredCommunicationMethod?: string,
    updatedAt: (Date | string),
    username: string,
    email?: string | null,
    whatsAppNumber?: string | null,
    googleId?: string | null,
    facebookId?: string | null,
    verified?: boolean,
    cartId: string,
    wishlistId: string,
}

export interface Sale {
    id?: string,
    reference: string,
    updatedAt: (Date | string),
    createdAt?: (Date | string),
    usersId?: string | null,
    itemsId: string[],
}

export interface Transaction {
    id?: string,
    title?: string,
    mode?: PaymentType,
    amount: number,
    payment_fee?: number | null,
    transaction_id?: string | null,
    txt_ref?: string | null,
    isExpense?: boolean,
    updatedAt?: (Date | string),
    createdAt?: (Date | string),
    salesId?: string | null,
}

export interface Error {
    id?: string,
    message: string,
    content: any,
    updatedAt: (Date | string),
    createdAt?: (Date | string),
}
