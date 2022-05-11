import mongoose, { Document, model, Model, Schema }  from "mongoose";
import Review from "./Review";

export interface IProduct extends Document {
    _id?: string,
    createdAt?: string,
    title: string,
    description: string,
    images: string[],
    detail:{
        type: string[],
        price: number[],
    },
    quantity: {
        available: number,
        ordered: number,
        sold: number,
    },
    keywords: string[],
    departments: string[],
    reviews?: any
}

const ProductSchema = new Schema({
    title:{
        type: String,
        required: true,
        maxlength: 100,
    },
    description:{
        type: String,
        required: true,
        maxlength: 7000,
    },
    images:{
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
    }
    
}, {timestamps: true});

export const Product: Model<IProduct> = mongoose.models.products || model("products", ProductSchema, "products")