import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    user: {
        name: String,
        email: String,
        image: String
    },
    expires: Date 

}, { timestamps: true });

export default mongoose.models.users || mongoose.model("users", UserSchema, "users")