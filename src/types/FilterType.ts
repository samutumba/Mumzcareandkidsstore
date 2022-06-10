export interface IFilterType {
    title?: string,
    price?: {
        min?: number,
        max?: number
    },
    category?: string,
    subCategory?: string[],
    color?: string,
    size?: string,
    age?: {
        min?: number,
        max?: number
    },
    keywords: string[]
}

