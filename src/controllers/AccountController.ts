import Profile, { IProfile } from "../models/Profile";
import User from "../models/User";
import { APIResponse } from "../types";
import dbConnect from "../utils/dbConnect";

export class AccountController {

    static async getUser(nEmail: string | null){
        try {
            await dbConnect();

            if(nEmail == undefined){
                return{
                    success: false,
                    data: "No Email to be associated with an account"
                }
            }

            const user = await User.findOne({email: nEmail})

            if (user === undefined || user === null ){
                return {
                    success: false,
                    data: "User not found"
                }
            }else {
                return {
                    success: true,
                    data: user
                }
            }
        }catch(e){
            return {
                success: false,
                data: "User not found"
            }
        }
    }
    
    static async getProfile(id: string): Promise<APIResponse> {
        try {
            await dbConnect();

            const profile = await Profile.findOne({ "userID": id })

            if (profile === null){
                return await this.createProfile(id)
            }

            return {
                success: true,
                data: profile
            }

        } catch (e) {
            return {
                success: false,
                data: e
            }
        }

    }

    static async createProfile(id: string): Promise<APIResponse> {
        try {

            await dbConnect();

            if(!await Profile.exists({ userID: id })){
                
                const newProfile = await Profile.create({
                    userID: id,
                    policyAccepted: true
                })

                return {
                    success: true,
                    data: newProfile
                }

            }else{  
                return {
                    success: false,
                    data: "Profile Already Exists"
                }
            }

        }catch(e){
            console.log(e)
            return {
                success: false,
                data: "Error occurred trying to create profile" 
            }
        }
        
    }

    static async getWishList(userId: number) {
        await dbConnect();


    }

    static async addToCart(userId: number) {
        try {
            await dbConnect();



        }catch(err){

        }
        

      
    }

    static async getCart(userId: number) {
        await dbConnect();
        try {
            await dbConnect();


        } catch (err) {

        }

    }

    static async clearCart(userId: number) {
        await dbConnect();

    }

    static async removeFromCart(userId: number) {
        await dbConnect();

    }

    static async addToWishList(userId: number) {
        await dbConnect();

    }

    static async removeFromWishList(userId: number) {
        await dbConnect();

    }

    static async clearWishList(userId: number){
        await dbConnect();

    }

    static async changeProfilePicture(userId: number){
        await dbConnect();

    }

    static async changePhoneNumber(userId: number){
        await dbConnect();

    }





}