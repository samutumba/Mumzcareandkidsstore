import mongoose, {Document} from "mongoose";

export interface IUser extends Document {
    fullName: string,
    image: string,
    emailAddress:string,
    password: string,
    loginMethod: string,
    orders: string[],
    settings?: {
        address: string
    }
}

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

export default mongoose.models.users || mongoose.model("users", UserSchema, "users")