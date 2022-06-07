export interface ApparelType {
    _id?: string,
    title: string,
    price: string,
    category: string,
    description: string,
    image: string
}

export interface SelectedApparelType {
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