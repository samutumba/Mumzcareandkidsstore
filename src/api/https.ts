import axios from "axios";
import { useNavigate } from 'react-router-dom';
import * as types from '../types'
import { CartDetail, Detail } from "../types";
import { Transaction } from "../types/create";

const api = axios.create({
    //baseURL: `http://localhost:4000/`,
    //baseURL: `https://mumzcareandkidsstore.herokuapp.com/`,
    baseURL: `https://api.mumzcareandkidsstore.com/`,
    withCredentials: true
})

export class API {
    
    static async getLogin(username: string, auth: string) {
        try {
            const data = {
                username: username,
                auth: auth
            }
            await api.post("auth/getLogin", data)
                .then(res => { return { success: true, data: res.data } })
                .catch(err => { return { success: false, data: err } })
        } catch (err) {
            return false;
        }
    }

    static async getFee(amount: number){
        return api.post('sale/fee', { amount: amount })
    }

    static async getFacebook() {
        return api.get('auth/facebook')
    }

    static async createSale (data: {
        cartItem: types.CartItem[] | undefined;
        payment: Transaction;
    }) {
        return api.post("sale/user", data)
    }

    static async createDelivery (data: any) {
        return api.post("sale/delivery", data)
    }

    static async createPickUp (data: any) {
        return api.post("sale/pickup", data)
    }
    static async getMySales() {
        return api.get('sale/self')
    }

    static async getSale(id: string) {
        return api.get(`sale/details/${id}`)
    }

    static async getPaymentLink(data: { amount: number, sale: string, email?: string, phonenumber: string, name: string }) {
        return api.post('sale/link', data)
    }

    static async getGoogle() {
        return api.get('auth/google')
    }

    static async getUser() {

        return api.get("auth/user")
    }
    
    static async submit() {
        try {
            await api.get("auth/user").then(res => {
                return res.data
            })
        } catch (err) {
            return null
        }
    }
    
    static async login(username: string, password: string) {
        return api.post('auth/login', {
            username,
            password
        })
    }

     static async logout() {
        return api.post('auth/logout')
    }

    static async createInquiry(data: types.INewInquiry) {
        return api.post('feedback', data)
    }

    static async getLocations() {
        return api.get('location')
    }

    static async updateWishlist (data: {
        command: "UPDATE" | "DELETE" | "CLEAR",
        productID?: string,
        detial?: CartDetail,
        quantity?: number
}) {
        return api.post('user/wishlist', data)
    }

    static async updateCart (data: {
        command: "UPDATE" | "DELETE" | "CLEAR",
        productID?: string,
        detial?: CartDetail,
        quantity?: number
    }) {
        return api.post('user/cart', data)
    }

    static async getExists(username: string) {
        return api.post("auth/exists", {
            username: username
        })
    }

     static async getProductPage(id: string) {
        return api.get(`product/${id}`)
    }
    
    static async registerEmail(name: string, username: string, password: string) {
       
        return api.post("auth/email/register", { name, username, password } )
    }

    static async registerWhatsapp(name: string, username: string, password: string) {
        return api.post("auth/whatsapp/register", { name, username, password })
        
    }

    static async getProducts() {
        return api.get("product")
    }

     static async updateList(data: { list: "Cart" | "Wishlist", cart: types.INewCart[]  }) {
        return api.post("user/updateList", data)
    }

}



