import type { NextPage } from "next";
import {MdOutlineAlternateEmail} from "react-icons/md"
import {ImKey} from "react-icons/im"
import { useForm } from "react-hook-form";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios"
import { APIResponse } from "../../types";

const isValidEmail = (email:string) =>
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );

const SignIn: NextPage = () => {
    const [timesSubmitted, setTimeSubmitted] = useState(0);
    const { register, handleSubmit, formState: { errors } } = useForm({mode: "onBlur"});

    async function onSubmit(data: any){
        setTimeSubmitted(timesSubmitted+1);
        console.log(data)
        toast.error(JSON.stringify(data))
        
        await axios.post('/api/auth/admin/sign-in', {
            email: data.email,
            password: data.password
        }).then(function (res){
            if(res.status === 200){
                toast.success(res.data)
                
            }else{
                toast.error(res.data)
            }
        }).catch(function (error) {
            toast.error(error);
        });
    };

    

    return (<>
     <Toaster position="top-right" reverseOrder={false} />
      <div className="flex h-screen">
            <div className="m-auto self-center h-fit bg-base p-7 text-xl rounded-lg w-auto">
                <div className="font-title font-extrabold text-center pb-3 text-3xl">
                    Admin Sign-In
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <label>
                        Email:
                        <div className="flex p-3 bg-white w-96 rounded-lg">
                            <MdOutlineAlternateEmail className="text-2xl mr-3" />
                            <input 
                            {...register("email", 
                                {
                                    required: true,
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address"
                                }}
                            )} 
                                className="border-none outline-none w-full" type="text" placeholder="example@something.com"/>
                        </div>
                        {errors.email?.type === 'required' && "Email is required"}
                        {errors.email?.type === 'pattern' && errors.email?.message}
                    </label>
                    <label>
                        Password:
                        <div className="flex p-3 bg-white w-96 rounded-lg">
                            <ImKey className="text-2xl mr-3" />
                            <input {...register("password", {
                                required: true}
                            )} 
                            className="border-none outline-none" 
                            type="password" 
                            placeholder="mumzcare@123" />
                        </div>
                        {errors.password?.type === 'required' && "Password is required"}
                    </label>
                    <button type="submit" className="bg-rose p-3 mt-2 text-white rounded-lg">
                        Sign In
                    </button>
                </form>
            </div>

        </div>
    </>
      
    )
}

export default SignIn;