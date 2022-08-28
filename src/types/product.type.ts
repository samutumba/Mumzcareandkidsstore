export interface IProduct {
    _id?: string,
    brand: string,
    title: string,
    gender?: string,
    description: string,
    images?: IFile[],
    category: string,
    subCategory: string,
    minAge?: number,
    maxAge?: number,
    detail?: {
        color?: DetailType[],
        material?: DetailType[],
        size?: DetailType[],
        model?: DetailType[] 
    },
    basePrice: number,
    enabled?: boolean,
    keywords: string[]
    createdAt?: string,
    updatedAt?: string
     
} 


export interface IFile {
    _id?: string,
    type: string,
    fileKey:  string,
    link:  string,
}

export interface DetailType {
    _id: string,
    name: string,
    addedValue: number
}

export enum ICategory {
    BabiesAndKids = "Babies & Kids",
    MotherHood = "Motherhood",
    Youth = "Youth",
    Apparel = "Apparel",
    Other = "Other"
}

export const ACategory = [
    "Babies & Kids",
    "Motherhood",
    "Youth",
    "Apparel",
    "Other"
]

export const ABaby = [
    "Baby Saftey & Gadgets",
    "Health Care",
    "Baby Food & Formula",
    "Nursery",
    "On The Go",
    "Oral Care",
    "Meal Time",
    "Potty Time",
    "Bath Time",
    "Toys",
    "Books",
    "Other"

]

export const AMotherHood = [
    "Maternity",
    "Health Care",
    "Gadgets",
    "Self Help Books",
    "Other"
]

export const AYouth = [
    "Baby Saftey & Gadgets",
    "Health Care",
    "On The Go",
    "Oral Care",
    "Meal Time",
    "Bath Time",
    "Toys",
    "Books",
    "Other"
]

export const AApparel = [
    "Babies & Kids",
    "Boys",
    "Girls",
    "Teens",
    "Men",
    "Maternity",
    "Women",
    "Other"
]

export const AOther = [
    "Furniture",
    "Other"
]

export function determineSubCategories(category: string): string[] {
    if (category === ICategory.BabiesAndKids) {
        return ABaby
    }else if (category === ICategory.MotherHood){
        return AMotherHood
    } else if (category === ICategory.Youth) {
        return AYouth
    } else if (category === ICategory.Apparel) {
        return AApparel
    }

    return AOther
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
    quantity: number
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

