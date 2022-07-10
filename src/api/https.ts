import axios from "axios";
import { useNavigate } from 'react-router-dom';

const api = axios.create({
    baseURL: `${process.env.API_ENDPOINT}/`,
    withCredentials: true
})

class API{
    
    static async getLogin(username: string, auth: string){
        try{
            const data = {
                username: username,
                auth: auth
            }
            await api.post("auth/getLogin", data)
                .then(res => { return { success: true, data: res.data } })
                .catch(err => { return { success: false, data: err } })
        }catch(err){
            return false;
        }
    }

    static async registerWhatsApp() {
        try {
            await api.get("auth/user").then(res => {
                return {
                    success: true,
                    data: res.data
                }
            })
        }catch(err){
            return {
                success: false,
                data: err
            }
        }
    }


    static async getUser() {
        try {
            api.get("auth/user").then(res => {
                return res.data
            })
        }catch(err){
            return null
        }
    }
    
    static async submit() {
        try {
            await api.get("auth/user").then(res => {
                return res.data
            })
        }catch(err){
            return null
        }
    }
    
    static async login(uName: string, otp: string) {
        try {
            await api.post("auth/login", {username: uName, password: otp}).then(res => {
                return {
                    success: true,
                    data: res
                };
            })
        }catch(err){
            return {
                success: false,
                data: err
            };
        }
    }
    
    static async registerEmail() {
        try {
            api.get("auth/email/register").then(res => {
                return res.data
            })
        }catch(err){
            return null
        }
    }

    static async registerWhatsappNumber() {
        try {
            api.get("auth/email/register").then(res => {
                return res.data
            })
        }catch(err){
            return null
        }
    }

}

module.exports = API
