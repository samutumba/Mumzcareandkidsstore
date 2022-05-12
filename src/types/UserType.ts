export interface IUserType {
    _id?: string,
    email?: string,
    username?: string,
    authMethod?: "Email"|"Google"|"Facebook"|"Apple",
    type?: "Customer"| "Admin",
    signedIn: boolean
}