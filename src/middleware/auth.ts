import Cookies from "js-cookie";
import { JwtPayload } from "jsonwebtoken";
import { IAdminUserType, AdminRoles } from "../types";
import { decodeJWT } from "../utils/jwt";

export function isAuthenticated() {
    const authToken = Cookies.get("adminUser")

    if (authToken == undefined) {
        return false;
    } else {
        const authPayload: IAdminUserType | JwtPayload | string | null = decodeJWT(authToken);

        if (typeof authPayload == "string" || authPayload == null) {
            return false
        }
        return true
    }
} 