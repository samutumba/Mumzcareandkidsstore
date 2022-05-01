import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        maxlength: 100,
    },
    description:{
        type: String,
        required: true,
        maxlength: 1000,
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
        },
        sold: {
            type: Number,
            required: true,
        },
    },
    keywords: {
        type: [String],
        required: true,
    },
    departments : {
        type: [String],
        required: true
    }
    
}, {timestamps: true});

export default mongoose.models.Product || mongoose.model("Product", ProductSchema)