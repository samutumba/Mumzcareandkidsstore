export interface INewInquiry {
 name: string , category: string , type: string , message: string , contact: string 
}

export const IInquiryTypes = [
 "Account",
 "Billing",
 "Website Management",
 "Order or Sales",
 "Delivery",
 "Other"
]