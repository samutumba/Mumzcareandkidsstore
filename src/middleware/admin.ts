import Cookies from "js-cookie";
import { JwtPayload } from "jsonwebtoken";
import { AdminRoles, IAdminUserType } from "../types";
import { decodeJWT } from "../utils/jwt";

export function isAdmin() {
    const authToken = Cookies.get('adminUser')

    if (authToken == undefined){
        return false;
    }else{
        const authPayload: IAdminUserType | JwtPayload | string | null = decodeJWT(authToken);

        if (typeof authPayload == "string" || authPayload == null){
            return false
        }
        if (authPayload.role !== AdminRoles.Admin){
            return false;
        }
        return true
    }
}

