export interface ISearch {
 id?: string,
 text?: string,
 minAge?: number,
 maxAge?: number,
 category?: string[],
 subCategory?: string[],
 color?: string[],
 material?: string[],
 size?: string[],
 model?: string[],
 maxPrice?: number,
 hasImages?: boolean
 minPrice?: number,
}

export enum ISort {
 featured = 'Featured',
 priceLow = 'Price (Low to High)',
 priceHigh = 'Price (High to Low)',
 newest = 'Newest'
}

export const maxPriceOptions = [
 { value: 500, label: "UGX 500" },
 { value: 1000, label: "UGX 1,000" },
 { value: 2000, label: "UGX 2,000" },
 { value: 5000, label: "UGX 5,000" },
 { value: 10000, label: "UGX 10,000" },
 { value: 15000, label: "UGX 15,000" },
 { value: 20000, label: "UGX 20,000" },
 { value: 25000, label: "UGX 25,000" },
 { value: 50000, label: "UGX 50,000" },
 { value: 100000, label: "UGX 100,000" },
 { value: 150000, label: "UGX 150,000" },
 { value: 200000, label: "UGX 200,000" },
 { value: 250000, label: "UGX 250,000" },
 { value: 500000, label: "UGX 500,000" },
 { value: 750000, label: "UGX 750,000" },
 { value: 1000000, label: "UGX 1,000,000" },
 { value: 1000000000, label: "UGX 1,100,000+" },
]

export const minPriceOptions = [
 { value: 0, label: "UGX 0" },
 { value: 500, label: "UGX 500" },
 { value: 1000, label: "UGX 1,000" },
 { value: 2000, label: "UGX 2,000" },
 { value: 5000, label: "UGX 5,000" },
 { value: 10000, label: "UGX 10,000" },
 { value: 15000, label: "UGX 15,000" },
 { value: 20000, label: "UGX 20,000" },
 { value: 25000, label: "UGX 25,000" },
 { value: 50000, label: "UGX 50,000" },
 { value: 100000, label: "UGX 100,000" },
 { value: 150000, label: "UGX 150,000" },
 { value: 200000, label: "UGX 200,000" },
 { value: 250000, label: "UGX 250,000" },
 { value: 500000, label: "UGX 500,000" },
 { value: 750000, label: "UGX 750,000" },
 { value: 1000000, label: "UGX 1,000,000" },
 { value: 1100000, label: "UGX 1,100,000" },
]

