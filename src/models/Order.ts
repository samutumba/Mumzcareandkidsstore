import mongoose from "mongoose";
import { OrderStatusType } from "../types/enums/OrderStatus";

const OrderSchema = new mongoose.Schema({
    user : {
        id : {
            type: String,
            required: true,
        },   
    },
    items: {
        type: [Object],
        required: true
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
        type: String,
        default: OrderStatusType.Ordered
    }, 
    method: {
        type: String,
        required: true,
    },
    
}, {timestamps: true});

export default mongoose.models.orders || mongoose.model("orders", OrderSchema, "orders")