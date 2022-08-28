import moment from "moment";
import { IProduct, ISearch, ISort } from "../../types";

export function ProductFilter(products: IProduct[], filter: ISearch, sort?: ISort) {
 let filtered: IProduct[] = []

 products.forEach((pro) => {
  if(filter._id && pro._id){
   if (filter._id !== pro._id) {
    return;
   }
  }
  if (filter.text) {
   const value = filter.text.toLowerCase()
   if (!pro.brand.toLowerCase().includes(value) && !pro.title.toLowerCase().includes(value) && !pro.description.toLowerCase().includes(value) && !pro.category.toLowerCase().includes(value) && !pro.subCategory.toLowerCase().includes(value)) {
    return;
   }
  } 
  if (filter.category) {
   if (!filter.category.includes(pro.category)) {
    return;
   }
  }
  if (filter.subCategory) {
   if (!filter.subCategory.includes(pro.subCategory)) {
    return;
   }
  }
  if (filter.minPrice || filter.maxPrice) {
   if (filter.minPrice && filter.maxPrice) {
    if (!(pro.basePrice <= filter.maxPrice) || !(pro.basePrice >= filter.minPrice)) {
     return;
    }
   }
   else if (filter.maxPrice) {
    if (!(pro.basePrice <= filter.maxPrice)) {
     return;
    }
   }
   else if (filter.minPrice) {
    if (!(pro.basePrice >= filter.minPrice)) {
     return;
    }
   }
  }
   if (filter.minAge || filter.maxAge) {
   if (filter.minAge && pro.minAge) {
    if (!(pro.minAge >= filter.minAge)) {
     return;
    }
   }
   else if (filter.maxAge && pro.maxAge) {
    if (!(pro.maxAge <= filter.maxAge)) {
     return;
    }
   }
  }
  
 filtered.push(pro)
 })

 if (sort === ISort.newest) { 
  filtered.sort((p1, p2) => moment(p2.createdAt).valueOf() - moment(p1.createdAt).valueOf())
 } else if (sort === ISort.priceHigh) {
  filtered.sort((p1, p2) => p2.basePrice -  p1.basePrice )
 } else if (sort === ISort.priceLow) {
  filtered.sort((p1, p2) => p1.basePrice - p2.basePrice)
 } 
 
 return filtered;
}