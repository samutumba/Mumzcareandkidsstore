import { useState } from "react"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import axios from "axios";
import toast from "react-hot-toast";

export const AddEmployee = () => {
    const [pwdType, setPwdType] = useState("password")
    const [checked, setChecked ] = useState(false)
    
    const formSchema = Yup.object().shape({
        name: Yup.string()
            .required('Your Name is required')
            .min(5, 'Names are usually longer than this'),
        email: Yup.string().email("Must be a valid email")
            .required('Enter an email'),
        phone: Yup.number().integer("Phone number cannot be a decimal or fraction").required("Please enter your personal phone number").min(99999999, "Must be atleast 9 digits").max(999999999, "Must be 9 digits"),
        password: Yup.string()
            .required('Password is required')
            .min(4, 'Password length should be at least 4 characters'),
        passwordConfirm: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password')], 'Passwords must and should match'),
        role: Yup.string()
            .required('To work here you have a role')
        })

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema),
        mode: "onBlur"
    });
    
    const onSubmit = async (data: any) => {
        console.log(data)
         
         await axios.post('/api/auth/admin/register', {
            data
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

    const ToggleVisibility = () => {
        setChecked(!checked)
        if(pwdType === "password"){
            setPwdType("text")
        }else{
            setPwdType("password")
        }
    }

    return(<>
        <div className="w-auto h-auto  flex justify-center">
            <form  onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 w-4/5 mx-auto ">
                <label className="">
                    Name:
                    <input 
                        type="text" 
                        className="block input border-3 border-base  w-full max-w-lg"
                        {...register("name")}
                    />
                    {errors.name ? errors.name?.message: "" }
                </label>
               
                <label>
                    Email Address:
                    <input 
                        type="email" 
                        className={"block input border-3 border-base w-full max-w-lg"}
                         {...register("email")}
                    />
                    {errors.email ? errors.email?.message  : "" }
                </label>
                 <label>
                    Phone:
                    <div className="flex justify-items-center content-center input border-3 border-base">
                        <span className="mt-2 pr-1">+256</span>
                         <input 
                        type="number" 
                        className={"block  border-none outline-none w-full max-w-lg"}
                        {...register("phone")}
                    />

                    </div>
                   
                    {errors.phone ? errors.phone?.message  : "" }
                </label>
                <label>
                    Password:
                    <input 
                        type={pwdType} 
                        className="block input w-full border-3 border-base max-w-lg"
                        {...register("password"
                        )}   
                    />
                    {errors.password ? errors.password?.message : "" }
                </label>
                <label>
                    Confirm Password:
                    <input
                        type={pwdType} 
                        className="block input w-full border-3 border-base max-w-lg"
                        {...register("passwordConfirm"
                        )}   
                    />
                    {errors.passwordConfirm ? errors.passwordConfirm?.message : "" }
                </label>
                <div className="form-control max-w-lg">
                    <label className="label cursor-pointer">
                        <span className="">Show passwords</span> 
                        <input checked={checked} onChange={ToggleVisibility}  type="checkbox" className="checkbox" />
                    </label>
                </div>
                <label>
                    Role: 
                    <select {...register("role")} className="select border-3 border-base w-full block max-w-lg">
                        <option value="" disabled selected>Whats the role</option>
                        <option value="Admin">Admin</option>
                        <option value="Driver">Driver</option>
                        <option value="Cashier">Cashier</option>
                        <option value="Store">Store Keeper</option>
                    </select>
                </label>
                {errors.role ? errors.role?.message : "" }
                <button className="bg-rose p-4 text-white max-w-lg rounded-lg my-4">
                    Register
                </button>
            </form>
        </div>
    </>)
}