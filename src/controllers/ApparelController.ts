import { IApparel, Apparel } from "../models/Apparel";
import { APIResponse } from "../types";
import dbConnect from "../utils/dbConnect";

export class ApparelController {

    /** Function to fetch all enabled Apparels
     * 
     * @returns Apparels
     */
    static async getApparels(): Promise<APIResponse> {
        try {
            await dbConnect();

            const apparel = await Apparel.where({ enabled: true })

            return {
                success: true,
                data: apparel
            }

        } catch (e) {
            return {
                success: false,
                data: e
            }

        }


    }

    /** Function to fetch all Apparels
     * 
     * @returns Apparels
     */
    static async getAllApparel(): Promise<APIResponse> {
        try {
            await dbConnect();

            const apparel = await Apparel.find()

            return {
                success: true,
                data: apparel
            }

        } catch (e) {
            return {
                success: false,
                data: e
            }
        }
    }

    /** Function to fetch Apparel by Id 
     * 
     * @param id 
     * @returns error or Apparel
     */
    static async getApparelById(id: string): Promise<APIResponse> {
        try {
            await dbConnect();

            const apparel = await Apparel.findById(id)

            return {
                success: true,
                data: apparel
            }

        } catch (e) {
            return {
                success: false,
                data: e
            }
        }

    }

    /** Function to fetch Apparel by title
     * 
     * @param ApparelTitle 
     * @returns Apparel that matches the title
     */
    static async getApparelByTitle(ApparelTitle: string): Promise<APIResponse> {
        try {
            await dbConnect();

            const apparel = await Apparel.findOne({ title: ApparelTitle })

            return {
                success: true,
                data: apparel
            }

        } catch (e) {
            return {
                success: false,
                data: e
            }
        }

    }

    /** Function to delete Apparel
     * 
     * @param apparelId 
     * @returns status
     */
    static async deleteApparel(apparelId: string): Promise<APIResponse> {
        try {
            await dbConnect();

            await Apparel.findByIdAndDelete(apparelId)

            return {
                success: true,
                data: `Apparel ${apparelId} has been deleted permanently`
            }

        } catch (e) {
            return {
                success: false,
                data: e
            }
        }

    }

    /** Function to create new Apparel 
     * 
     * @param newApparel - Apparel object
     * @returns status with error or new Apparel
     */
    static async addApparel(newApparel: IApparel): Promise<APIResponse> {
        try {
            await dbConnect();

            const apparel = await Apparel.create({ ...newApparel })

            return {
                success: true,
                data: apparel
            }

        } catch (e) {
            return {
                success: false,
                data: e
            }
        }

    }

    /** Function to edit Apparel information
     * 
     * @param apparelId - Id of Apparel to be updated
     * @param updateApparel - Updated Apparel information
     * @returns - request status
     */
    static async editApparel(apparelId: number, updateApparel: IApparel): Promise<APIResponse> {
        try {
            await dbConnect();

            const apparel = await Apparel.findByIdAndUpdate(
                { _id: apparelId },
                { ...updateApparel, _id: apparelId }
            )

            return {
                success: true,
                data: `Apparel ${apparelId} has been updated`
            }

        } catch (e) {
            return {
                success: false,
                data: e
            }
        }

    }

    /**Function to disable a Apparel back onto the market
     * 
     * @param apparelId - ID of Apparel to be updated
     * @returns request status
     */
    static async disableApparel(apparelId: string): Promise<APIResponse> {
        try {
            await dbConnect();

            const enabledApparel = await Apparel.findOneAndUpdate({ _id: apparelId }, { enabled: false })

            return {
                success: true,
                data: `Apparel ${apparelId} has been updated`
            }

        } catch (e) {
            return {
                success: false,
                data: e
            }
        }

    }

    /** Function to enable a Apparel back onto the market
     * 
     * @param apparelId - ID of Apparel to be updated
     * @returns status
     */
    static async enableApparel(apparelId: string): Promise<APIResponse> {
        try {
            await dbConnect();

            const disabledApparel = await Apparel.findOneAndUpdate({ _id: apparelId }, { enabled: true })

            return {
                success: true,
                data: `Apparel ${apparelId} has been updated`
            }

        } catch (e) {
            return {
                success: false,
                data: e
            }
        }

    }

}