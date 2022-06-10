import mongoose, { Document } from "mongoose"
import { ICartType } from "../types"

export interface IProfile extends Document {
    _id?: string,
    userID: string,
    phone?: string,
    alternativePhone?: string,
    whatsappNumber: string,
    email?: string,
    address?: string,
    preferredCommunicationMethod: string,
    wishList: ICartType,
    cart: ICartType,
    policyAccepted: boolean,
    lastAccessed: Date
}

const ProfileSchema = new mongoose.Schema({
    userID: {
        type: String,
        required: true
    },
    phone: {
        type: String,
    },
    alternativePhone: {
        type: String
    },
    whatsappNumber: {
        type: String
    },
    email: {
        type: String
    },
    address: {
        type: String
    },
    preferredCommunicationMethod: {
        type: String,
        default: "email"
    },
    wishList: {
        type: [Object],
        default: []
    },
    cart: {
        type: [Object],
        default: []
    },
    policyAccepted: {
        type: Boolean,
        default: true
    }, 
    lastAccessed: {
        type: Date,
        default: () => Date.now()
    }

}, { timestamps: true })

export default mongoose.models.profiles || mongoose.model("profiles", ProfileSchema, "profiles")