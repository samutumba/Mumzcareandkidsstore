// AUTO GENERATED FILE BY @kalissaac/prisma-typegen
// DO NOT EDIT


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
    id: string,
    v: number,
    createdAt: Date,
    email: string,
    employed: boolean,
    name: string,
    password: string,
    phone: string,
    profile?: File,
    role: string,
    updatedAt: Date,
    filesId?: string,
    feedbacks: Feedback[],
    events: Event[],
    eventsId: string[],
}

export interface Pickup {
    id: string,
    v: number,
    location: Location,
    files: File[],
    service: string,
    status: string,
    updatedAt: Date,
    createdAt: Date,
    user: User,
    contact: string,
    note: string,
    locationsId: string,
    usersId: string,
}

export interface Delivery {
    id: string,
    v: number,
    documents: File[],
    service: string,
    status: string,
    updatedAt: Date,
    createdAt: Date,
    location: DeliveryLocation,
}

export interface Event {
    id: string,
    v: number,
    files: File[],
    completed: boolean,
    description: string,
    endDate?: Date,
    participantsID: string[],
    participants: Admin[],
    startDate: Date,
    title: string,
    updatedAt: Date,
    createdAt: Date,
}

export interface Inquiry {
    id: string,
    v: number,
    category: string,
    contact: string,
    feedback: Feedback[],
    message: string,
    name: string,
    reference: string,
    user?: User,
    responded: boolean,
    type: string,
    updatedAt: Date,
    createdAt: Date,
    usersId?: string,
}

export interface Feedback {
    id: string,
    admin: Admin,
    message: string,
    updatedAt: Date,
    createdAt: Date,
    inquiries?: Inquiry,
    inquiriesId?: string,
    adminsId: string,
}

export interface Item {
    id: string,
    v: number,
    product: Product,
    color: string,
    material: string,
    size: string,
    model: string,
    sold: boolean,
    updatedAt: Date,
    createdAt: Date,
    sales: Sale[],
    salesId: string[],
    productsId: string,
}

export interface Location {
    id: string,
    v: number,
    address: string,
    email: string[],
    images: File[],
    isStore: boolean,
    maps: string,
    name: string,
    phone: string[],
    updatedAt: Date,
    createdAt: Date,
    pickups: Pickup[],
}

export interface Product {
    id: string,
    v: number,
    basePrice: number,
    brand: string,
    category: string,
    createdAt: Date,
    description: string,
    detail?: Detail,
    enabled: boolean,
    images: File[],
    keywords: string[],
    maxAge: number,
    minAge: number,
    subCategory: string,
    title: string,
    updatedAt: Date,
    cartItem: CartItem[],
    reviews: Review[],
    items: Item[],
}

export interface File {
    id: string,
    fileKey: string,
    link: string,
    type: string,
    updatedAt: Date,
    createdAt: Date,
    events?: Event,
    eventsId?: string,
    deliveries?: Delivery,
    deliveriesId?: string,
    pickups?: Pickup,
    pickupsId?: string,
    locations?: Location,
    locationsId?: string,
    products?: Product,
    productsId?: string,
    admins: Admin[],
}

export interface Review {
    id: string,
    products: Product,
    user: User,
    rating: number,
    description: string,
    updatedAt: Date,
    createdAt: Date,
    productsId: string,
    usersId: string,
}

export interface Session {
    id: string,
    expires: Date,
    session: string,
}

export interface Cart {
    id: string,
    items: CartItem[],
    updatedAt: Date,
    createdAt: Date,
    User: User,
    userId: string,
}

export interface Wishlist {
    id: string,
    items: CartItem[],
    updatedAt: Date,
    createdAt: Date,
    User: User,
    userId: string,
}

export interface CartItem {
    id: string,
    product: Product,
    quantity: number,
    detail?: CartDetail,
    cart?: Cart,
    cartId?: string,
    productsId: string,
    sales?: Sale,
    salesId?: string,
    wishlist?: Wishlist,
    wishlistId?: string,
}

export interface User {
    id: string,
    v: number,
    auth?: string,
    createdAt: Date,
    lastAccessed: Date,
    name: string,
    password?: string,
    phone: string[],
    points: number,
    policyAccepted: boolean,
    preferredCommunicationMethod: string,
    updatedAt: Date,
    username: string,
    email?: string,
    whatsAppNumber?: string,
    googleId?: string,
    facebookId?: string,
    verified: boolean,
    pickups: Pickup[],
    sales: Sale[],
    reviews: Review[],
    inquiries: Inquiry[],
    cartId?: string,
    wishlistId?: string,
    Cart?: Cart,
    Wishlist?: Wishlist,
}

export interface Sale {
    id: string,
    reference: string,
    user?: User,
    payments: Transaction[],
    products: CartItem[],
    items: Item[],
    updatedAt: Date,
    createdAt: Date,
    usersId?: string,
    itemsId: string[],
}

export interface Transaction {
    id: string,
    title: string,
    mode: PaymentType,
    amount: number,
    payment_fee?: number,
    transaction_id?: string,
    txt_ref?: string,
    isExpense: boolean,
    updatedAt: Date,
    createdAt: Date,
    sales?: Sale,
    salesId?: string,
}

export interface Error {
    id: string,
    message: string,
    content: any,
    updatedAt: Date,
    createdAt: Date,
}


export interface DeliveryLocation {
    lgt: string,
    lat: string,
    note: string,
    district: string,
    town: string,
    street: string,
    country: string
}

export interface Detail {
    color: DetailValue[],
    material: DetailValue[],
    model: DetailValue[],
    size: DetailValue[],
}

export interface DetailValue {
    name: string,
    valueAdd: number
}


export interface CartDetail {
    color?: string,
    material?: string,
    model?: string,
    size?: string,
}