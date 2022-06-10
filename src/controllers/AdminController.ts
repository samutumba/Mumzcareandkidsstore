import Admin from "../models/Admin";
import dbConnect from "../utils/dbConnect";

export class AdminController {
    static async verifySignIn(email: string, password: string) {

    }

    static async createAccount(nName: string, nEmail: string, nPassword: string, nPhone:number,  nRole: string){
        try{
            await dbConnect();

            if(await Admin.exists({email: nEmail})){
                return {
                    success: false,
                    data: "Account with this email already exists"
                }
            }

            //Hash password
            const hashedPassword = nPassword

            const newAdmin = await Admin.create({
                name: nName,
                email: nEmail,
                password: hashedPassword,
                role: nRole,
                phone: nPhone
            })

            //Email

            return {
                success: true,
                data: "Account created! "
            }


        }catch(e){
            return {
                success: false,
                data: "Account could not be created"
            }

        }
    }

    static async disableAccount(){

    }

    static async enableAccount(){

    }

    
}