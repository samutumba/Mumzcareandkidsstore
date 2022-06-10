import { IProduct, Product } from "../models/Product";
import Review from "../models/Review";
import { APIResponse } from "../types";
import { SortType } from "../types/enums/Sort";
import { IFilterType } from "../types/FilterType";
import dbConnect from "../utils/dbConnect";

export class ProductController {

    /** Function to fetch all enabled products
     * 
     * @returns products
     */
    static async getProducts(): Promise<APIResponse> {
        try{
            await dbConnect();

            const products = await Product.where({enabled:true})

            return{
                success: true,
                data: products
            }

        }catch(e){
            return {
                success: false,
                data: e
            }

        }
        

    }

    /** Function to fetch all products
     * 
     * @returns products
     */
    static async getAllProducts(): Promise<APIResponse> {
        try {
            await dbConnect();

            const products = await Product.find()
        
            return {
                success: true,
                data: products
            }

        }catch(e){
            return {
                success: false,
                data: e
            }
        }
    }

    /** Function to fetch product by Id 
     * 
     * @param id 
     * @returns error or product
     */
    static async getProductById(id: string): Promise<APIResponse> {
        try {
            await dbConnect();

            const product = await Product.findById(id)

            return {
                success: true,
                data: product
            }

        } catch (e) {
            return {
                success: false,
                data: e
            }
        }

    }

    /** Function to fetch product by title
     * 
     * @param productTitle 
     * @returns product that matches the title
     */
    static async getProductByTitle(productTitle: string): Promise<APIResponse> {
        try {
            await dbConnect();

            const product = await Product.findOne({title: productTitle})

            return {
                success: true,
                data: product
            }

        } catch (e) {
            return {
                success: false,
                data: e
            }
        }

    }

    /** Function to delete product
     * 
     * @param productId 
     * @returns status
     */
    static async deleteProduct(productId: string): Promise<APIResponse> {
        try {
            await dbConnect();

            await Product.findByIdAndDelete(productId)

            return {
                success: true,
                data: `Product ${productId} has been deleted permanently`
            }

        } catch (e) {
            return {
                success: false,
                data: e
            }
        }

    }

    /** Function to create new product 
     * 
     * @param newProduct - Product object
     * @returns status with error or new product
     */
    static async addProduct(newProduct: IProduct): Promise<APIResponse> {
        try {
            await dbConnect();

            const product = await Product.create({...newProduct})

            return {
                success: true,
                data: product
            }

        } catch (e) {
            return {
                success: false,
                data: e
            }
        }

    }

    /** Function to edit product information
     * 
     * @param productId - Id of product to be updated
     * @param updateProduct - Updated product information
     * @returns - request status
     */
    static async editProduct(productId: number, updateProduct: IProduct): Promise<APIResponse> {
        try {
            await dbConnect();

            const product = await Product.findByIdAndUpdate(
                {_id: productId}, 
                {...updateProduct, _id: productId}
            )

            return {
                success: true,
                data: `Product ${productId} has been updated`
            }

        } catch (e) {
            return {
                success: false,
                data: e
            }
        }

    }

    /**Function to disable a product back onto the market
     * 
     * @param productId - ID of product to be updated
     * @returns request status
     */
    static async disableProduct(productId: string): Promise<APIResponse> {
        try {
            await dbConnect();

            const enabledProduct = await Product.findOneAndUpdate({ _id: productId }, { enabled: false })

            return {
                success: true,
                data: `Product ${productId} has been updated`
            }

        } catch (e) {
            return {
                success: false,
                data: e
            }
        }

    }

    /** Function to enable a product back onto the market
     * 
     * @param productId - ID of product to be updated
     * @returns status
     */
    static async enableProduct(productId: string): Promise<APIResponse> {
        try {
            await dbConnect();

            const disabledProduct = await Product.findOneAndUpdate({_id: productId}, {enabled: true})

            return {
                success: true,
                data: `Product ${productId} has been updated`
            }

        } catch (e) {
            return {
                success: false,
                data: e
            }
        }

    }

    static async getReviewsByUser(id: string, review: string, rating: number, userId: string) {
        try{
            const reviews = await Review.where({ userId: id })

        }catch(e){

        }
    }

    static async getReviewsByProduct(productId: string, review: string, rating: number, userId: string) {

    }

    static async createReview(productId: string, review: string, rating: number, userId: string) {

    }

    static async editReview(productId: string, review: string, rating: number, userId: string) {

    }

    static async deleteReview(productId: string, review: string, rating: number, userId: string) {

    }

    static async sortProducts(products: IProduct, filter: IFilterType, sort: SortType){
        
    }
}