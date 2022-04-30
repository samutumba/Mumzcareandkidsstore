import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    firstName : {
        type: String,
    },
    lastName: {
        type: String,
    },
    emailAddress:{
        type: String,
    },
    password: {
        type: String,
        default: 0
    }, 
    loginMethod: {
        type: String,
        required: true,
    }
    
}, {timestamps: true});

export default mongoose.models.User || mongoose.model("User", UserSchema)