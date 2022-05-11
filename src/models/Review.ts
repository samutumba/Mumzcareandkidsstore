import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    
    rating: Number,
    description: String
    
}, {timestamps: true});

export default mongoose.models.reviews || mongoose.model("reviews", ReviewSchema, "reviews" )