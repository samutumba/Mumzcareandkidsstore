import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    fullName : {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    emailAddress:{
        type: String,
        required: true
    },
    password: {
        type: String,
        default: 0
    }, 
    loginMethod: {
        type: String,
        required: true,
    },
    orders: {
        type: [String],
        default: []
    },
    settings: {
        address: {
            type: String,
            default: null
        }
    }
    
}, {timestamps: true});

export default mongoose.models.User || mongoose.model("User", UserSchema)