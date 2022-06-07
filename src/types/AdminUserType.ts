import { AdminRoles } from "./enums";

export interface IAdminUserType {
    _id?: string,
    fname: string,
    lname: string,
    email: string,
    role: AdminRoles,
}