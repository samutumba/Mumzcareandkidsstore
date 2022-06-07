import * as JWT from "jsonwebtoken"
const jsonSecret = process.env.SECRET || ""

export function signJWT(payload: any) {
    return JWT.sign(payload, jsonSecret)
}

export function verifyJWT(token: string){
    var output:{success: boolean, payload: any} = {success: false, payload: ""};
    JWT.verify(token, jsonSecret, function(err, decoded){
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
    return JWT.decode(token)
}