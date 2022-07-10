import jwt from "jsonwebtoken"
const jsonSecret = process.env.SECRET || ""

export function signJWT(payload: any) {
    return jwt.sign(payload, jsonSecret)
}

export function verifyJWT(token: string){
    var output:{success: boolean, payload: any} = {success: false, payload: ""};
    jwt.verify(token, jsonSecret, function(err:any, decoded: any){
        if (err){
            output = {
                success: false,
                payload: err.message
            }
        }
        output = {
            success: true,
            payload: decoded
        }
    })
    return output
}

export function decodeJWT(token: any){
    return jwt.decode(token)
}