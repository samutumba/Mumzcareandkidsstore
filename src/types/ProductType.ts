export interface ProductType {
    _id?: string,
    brand: string,
    title:string,
    price:number,
    category:string,
    description:string,
    image:string
}

export interface SelectedProductType {
    _id?: string,
    brand: string,
    title: string,
    type: string,
    price: number,
    category: string,
    description: string,
    image: string
    quantity: number
}