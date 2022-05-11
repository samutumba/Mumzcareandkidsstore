import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    user : {
        id : {
            type: String,
            required: true,
        }, 
        name : {
            type: String,
            required: true,
        }, 
        email : {
            type: String,
            required: true,
        }
    },
    paid: {
        type: Number,
        required: true,
    },
    delivery:{
       method : {
            type: Boolean,
            required: true
        }, 
        address : {
            type: String
        },
        contactPhone : {
            type : Number
        }
    },
    status: {
        type: Number,
        default: 0
    }, 
    method: {
        type: [String],
        required: true,
    },
    
}, {timestamps: true});

export default mongoose.models.orders || mongoose.model("orders", OrderSchema, "orders")