import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    edited: {
        type: Boolean,
        default: false
    },
    rating: { 
        type: Number,
        minlength: 1,
        maxlength: 4,
        required: true
    },
    description: {
        type: String,
        minlength: 5,
        maxlength: 1000,
        required: true
    },
    productId: { 
        type: String,
        required: true
    },
    type: {
        type: String,
        default: "product"
    },
    userId: { 
        type: String,
        required: true
    }
    
}, {timestamps: true});

export default mongoose.models.reviews || mongoose.model("reviews", ReviewSchema, "reviews" )