import { InferGetServerSidePropsType, NextPage } from "next";
import { Footer, Meta, NavBar } from "../../components";
import { useRouter } from 'next/router'
import axios from "axios"
import toast, { Toaster } from "react-hot-toast";
import dynamic from "next/dynamic";
import Image from "next/image";
import {HomeIconURL} from "../../data/image"
import { useState } from "react";
import { useForm, Controller, useFormState } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { verifyJWT } from "../../utils/jwt";

const schema = yup.object({
  username: yup.string().required(),
  password: yup.number().positive().integer().min(100000, "Passcode must be a 6 digit number").max(999999, "Passcode must be a 6 digit number").required(),
}).required();

const ReactCodeInput = dynamic(import('react-code-input'))

export async function getServerSideProps(context: any) {
    const { username } = context.params

    const response = await verifyJWT(username)

    if(!response.success){
        return {
            redirect: {
              destination: '/sign-in',
              permanent: false,
            },
        }
    }

    const info = response.payload

    await axios.post(`${process.env.API_ENDPOINT}/auth/prepareLogin`, {
        username: username
    }).then(function (res){
        const message: string = res.data.message || "OTP Code sent!"
        return {
            props: {message: "OTP Code sent!"}
          };
    }).catch(function (err){
        toast.error(err.message);

        return {
            redirect: {
              destination: '/sign-in',
              permanent: false,
            },
          }
    })

    return {
        redirect: {
          destination: '/sign-in',
          permanent: false,
        },
      }
  };

const Username: NextPage = (
    { message }: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
    const { register, control, handleSubmit, formState } = useForm({
        resolver: yupResolver(schema)

      });
      function onSubmit(data: any){ console.log(JSON.stringify(data))};

    const [resent, setResent] = useState(0)
    const [passcode, setPasscode] = useState('')
    const router = useRouter()
    const { username } = router.query
    toast.success(message)

    if(username == undefined){
        toast.error("No Username was provided")
        router.push("/sign-in");
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

    function submit(e){
        e.preventDefault();
        if(validateInput()){
            axios.post(`${process.env.API_ENDPOINT}/auth/login`,
                {
                    username: username,
                    password: passcode
                }).then(function (response) {
                    toast.success(response.data.message)
                  }).catch(function (error) {
                    toast.error(error.message)
                  })
            console.log(username, passcode)
        }
    }


 return (
      <div className="font-title dark:bg-black text-md">
        <Toaster
            position="top-right"
            reverseOrder={true}
        />
        <Meta
          title="Verify: Mumz Care and Kid's Store"
          robot={false}
          description="Verify your sign in crudentials"
        />
        <div className="min-h-screen">
        <div className="flex mx-auto pt-12 flex-col justify-center w-96 h-auto">
        <div className="flex justify-center">
            <Image src={HomeIconURL} alt="" width={55} height={55} />
        </div>
        <h1 className="text-3xl text-center font-bold">Verification</h1>
            <div className="w-96 m-auto">
                 <div className="flex flex-col justify-center text-center">
                    <p className="font-p text-sm text-neutral pt-3">
                        We sent a 6 digit passcode to {username} <br/>
                        Enter that below code to sign in
                    </p>
                    <form 
                        onSubmit={submit} 
                        className="flex flex-col w-96 font-p py-9"
                    >
                        <input className="hidden" {...register('username')} value={username?.toString()} disabled hidden/> 
                            <ReactCodeInput 
                                 type='tel'
                                 name="passcode"
                                 fields={6}
                                 value={passcode}
                                 onChange={setPasscode} 
                                 inputMode={"numeric"}                            />  
                        {passcode}
                        <div className="flex justify-evenly mt-5">
                            <button type="submit" className="bg-rose hover:border-1  rounded-lg py-2 m-1 text-white w-1/3">
                                Submit Code
                            </button>
                            <button onClick={() => toast.success('Passcode has been resent')} type="reset" className="bg-white  rounded-lg py-2 m-1 text-rose w-1/3  border-2 border-rose">
                                Resend Code
                            </button>
                        </div>
                    </form>
                 </div>
            </div>
        </div>
        </div>
        
      </div>
 );
 
};

export default Username
