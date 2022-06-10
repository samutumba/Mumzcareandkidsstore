import mongoose, { Document, model, Model, Schema } from "mongoose";
import Review from "./Review";

export interface IApparel extends Document {
    _id?: string,
    createdAt?: string,
    title: string,
    description: string,
    images: string[],
    detail: {
        age: string[],
        size: string[],
        price: number[],
    },
    colors: string[],
    quantity: {
        available: number,
        ordered: number,
        sold: number,
    },
    keywords: string[],
    departments: string[],
    reviews?: any,
    enabled: boolean
}

const ApparelSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxlength: 100,
    },
    description: {
        type: String,
        required: true,
        maxlength: 7000,
    },
    images: {
        type: [String],
        required: true
    },
    detail:
    {
        type: {
            type: [String],
            required: true,
        },
        price: {
            type: [Number],
            required: true,
        }
    }
    ,
    quantity: {
        available: {
            type: Number,
            required: true,
        },
        ordered: {
            type: Number,
            required: true,
            default: 0
        },
        sold: {
            type: Number,
            required: true,
            default: 0
        },
    },
    keywords: {
        type: [String],
        required: true,
    },
    departments: {
        type: [String],
        required: true
    },
    reviews: {
        type: [Object]
    },
    enabled: {
        type: Boolean,
        default: true
    }

}, { timestamps: true });

export const Apparel: Model<IApparel> = mongoose.models.apparels || model("apparels", ApparelSchema, "apparels")