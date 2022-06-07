import mongoose from "mongoose";
import { AdminRoles } from "../types";

const AdminSchema = new mongoose.Schema({

    fname: {
        type: String
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    role: {
        type: AdminRoles,
        default: AdminRoles.Employee
    },
    password: {
        type: String,
        required: true
    },
    employed: {
        type: Boolean,
        default: true
    }


}, { timestamps: true });

export default mongoose.models.admins || mongoose.model("admins", AdminSchema, "admins")