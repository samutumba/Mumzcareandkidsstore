import axios from "axios";
import { useNavigate } from 'react-router-dom';
import * as types from '../types'

const api = axios.create({
    //baseURL: `http://localhost:4000/`,
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

    static async getExists(username: string) {
        return api.post("auth/exists", {
            username: username
        })
    }
    
    static async registerEmail(name: string, username: string, password: string) {
       
        return api.post("auth/email/register", { name, username, password } )
    }

    static async registerWhatsapp(name: string, username: string, password: string) {
        return api.post("auth/whatsapp/register", { name, username, password })
        
    }

    static async getProducts() {
        return api.get("product/all")
    }

     static async updateList(data: { list: "Cart" | "Wishlist", cart: types.INewCart[]  }) {
        return api.post("user/updateList", data)
    }

}

