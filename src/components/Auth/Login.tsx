import { FC, useState } from "react"
import dynamic from "next/dynamic";
import toast from "react-hot-toast";
const ReactCodeInput = dynamic(import('react-code-input'))
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";

const schema = yup.object({
    username: yup.string().required(),
    passcode: yup.number().positive("Must be a number").integer("Must be a number").min(100000, "Must be six digits").max(999999, "Must be six digits").required("You must enter the latest code sent to you"),
  }).required();

interface IProps {
    username: string,
    enabled: boolean
}

export const LoginForm: FC<IProps> =({username, enabled})=>{
    const [passcode, setPasscode] = useState('')
    const { register, handleSubmit, control, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    async function onSubmit (data: any){
        await axios.post(`${process.env.API_ENDPOINT}/auth/login`,{
            username: data.username,
            password: data.passcode
        })
          .then(function (response) {
            toast.success(response.data.message)
          })
          .catch(function (error) {
            toast.error(error.message)
          });    
    }

    function isNumeric(val: any) {
        return /^-?\d+$/.test(val);
    }

    function validateInput(){
        if(passcode == ''){
            toast.error('Please enter a passcode')
            return false;
        }else if(!isNumeric(passcode)){
            setPasscode('');
            toast.error('Passcode must be a number')
            return false;
        }else if (parseInt(passcode) < 100000 || parseInt(passcode) > 999999){
            setPasscode('');
            toast.error('Passcode must be a six digit number');
            return false;
        };

        return true
    }


    if(enabled){
        return(<>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="text-center">
                    <input className="hidden" {...register("username")} value={username} disabled hidden/> 
                            Enter the code sent to:<br/> {username}<br/>
                            <Controller
        name="passcode"
        control={control}
        render={({ field }) =>
        <ReactCodeInput 
        type='tel'
        fields={6}
        {...field}
        inputMode={"numeric"}     
   />} />
                              
                            <br/>
                            <span>
                                Allow up to 1 minute before requeting a new code
                            </span>

                        <div className="flex justify-evenly mt-5 w-full">
                            <button type="submit" className="bg-rose hover:border-1  rounded-lg py-2 m-1 text-white w-1/3">
                                Submit Code
                            </button>
                            <button onClick={() => toast.success('Passcode has been resent')} type="reset" className="bg-white  rounded-lg py-2 m-1 text-rose w-1/3  border-2 border-rose">
                                Resend Code
                            </button>
                        </div>

                </form>
            </div>
        
        </>)
    }
    
    return(<>
    </>)
}