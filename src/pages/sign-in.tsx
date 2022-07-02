import { NextPage } from "next";
import Image from "next/image"
import { Footer, Meta, NavBar, WhatsAppSignIn } from "../components";

import { FcGoogle} from "react-icons/fc"
import {FiAtSign} from "react-icons/fi"
import { BsFacebook, BsApple, BsWhatsapp } from "react-icons/bs"
import Link from 'next/link'
import { useForm } from 'react-hook-form';
import { useRouter } from "next/router";
import { useEffect } from "react";

const SignIn: NextPage = () => {
  const { register, handleSubmit,  formState: { errors } } = useForm({
    mode: "onBlur"
  });
    const router = useRouter()
     
  return (
    <>
    <div className="h-screen md:flex">
      <Meta
        title="Sign In: Mumz Care and Kid's Store"
        description="E-Commerce platform dedicated to providing the Ugandan market with produces for mother's, babies and the odd father."
      />
	<div
		className="relative overflow-hidden md:flex w-1/2 bg-rose i justify-around items-center hidden">
		<div>
			<Image src="/favicon-white.png" width={200} height={200} alt=""/>
		</div>
		
	</div>
	<div className="flex md:w-1/2 justify-center py-10 px-10 items-center bg-white">
		<div className="bg-white flex flex-col max-w-sm justify-center">
			<h1 className="text-gray-800 text-center  font-bold text-2xl mb-7">Sign In</h1>
			<Link href="https://api.mumzcareandkidsstore.com/auth/google" passHref>
        <div className="flex max-w-sm justify-center items-center border-2 border-base hover:border-black py-2 px-3 rounded-2xl mb-4">
          <div className="mx-5">
              
                <button 
                    className="font-bold bg-base-100 text-black text-md font-p w-full p-1 rounded-md"
                >
                  <FcGoogle className="mr-4 text-xl mb-1" />
                  Sign in with Google
                </button>
              
            </div>
        </div>
      </Link>
      <Link href="https://api.mumzcareandkidsstore.com/auth/facebook" passHref>
        <div className="flex max-w-sm justify-center hover:bg-[#0b4ca8] items-center border-2 bg-facebook-blue border-base hover:border-black py-2 px-3 rounded-2xl mb-4">
          <div className="mx-5">
              
                <button 
                    className="font-bold text-base-100 text-left text-md font-p w-full p-1 rounded-md"
                >
                  <BsFacebook className="mr-4 text-xl mb-1" />
                  Sign in with Facebook
                </button>
              
            </div>
        </div>
      </Link>

       <WhatsAppSignIn/>

      <div className="bg-rose hover:bg-[#ab0736] text-white flex max-w-sm justify-center items-center border-2 border-base hover:border-black py-2 px-3 rounded-2xl mb-4">
         <div className="mx-5">
            <button 
                className="font-bold text-md font-p w-full p-1 rounded-md"
            >
              <FiAtSign className="mr-4 text-xl mb-1" />
              Sign in with your Email
            </button>
          </div>
      </div>
		</div>
	</div>
</div>
    </>
  );
};



export default SignIn;
