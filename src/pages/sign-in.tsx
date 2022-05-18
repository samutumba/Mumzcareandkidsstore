import { NextPage } from "next";
import { Footer, Meta, NavBar } from "../components";
import { getProviders, signIn } from "next-auth/react";
import {FcGoogle} from "react-icons/fc"
import {BsFacebook} from "react-icons/bs"
import Link from 'next/link'
import { useForm } from 'react-hook-form';

const SignIn: NextPage = () => {
  const { register, handleSubmit,  formState: { errors } } = useForm({
    mode: "onBlur"
  });

  return (
    <div className="font-title bg-slate-200 text-md text-white">
      <Meta
        title="Sign In: Mumz Care and Kid's Store"
        description="E-Commerce platform dedicated to providing the Ugandan market with produces for mother's, babies and the odd father."
      />

      <div className="m-auto w-96 border rounded-lg bg-base ">
        <h1 className="text-3xl mt-4 font-bold text-center text-black">
          Sign In
        </h1>
        <div className="flex flex-col m-5 gap-4">
          <div className="mx-5">
            <button 
                className="bg-base-100 text-black hover:border text-md font-p w-full p-1 rounded-md"
                onClick={() => signIn("google", { callbackUrl: "/" })}
            >
              <FcGoogle className="mr-4 mb-1" />
              Sign in with Google
            </button>
          </div>
          <div className="mx-5">
            <button 
                className="bg-facebook-blue text-base-100 hover:border text-md font-p w-full p-1 rounded-md"
                onClick={() => signIn("facebook", { callbackUrl: "/" })}
            >
              <BsFacebook className="mr-4 mb-1" />
              Sign in with Facebook
            </button>
          </div>
          <div className="divider text-black">Or sign in with e-mail</div>
            <form onSubmit={handleSubmit(d => signIn("email", { email: d.email }))}>
              <div className=" text-black mx-5">        
                <input
                type="email"
                placeholder="Your Email..."
                 {...register("email",
                { required: true, 
                 pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ 
                })}
                className={errors.email ? "input block h-9 w-full text-error border-2 border-error" : "input block h-9 w-full"}
                />
                {errors.email?.type === 'required' && <p className="text-xs text-center font-bold text-error">You must provide an email</p>}
                {errors.email?.type === 'pattern' && <p className="text-xs text-center font-bold text-error">You must provide a valid email address</p>}
            </div>
            <div className="mx-5 mb-6">
                <div className="form-control">
                    
                    <label className="label cursor-pointer">
                    <input 
                      type="checkbox" 
                      {...register("agreed", { required: true })}
                      className={errors.agreed ? "checkbox border-2 border-error" : "checkbox"}
                    />
                    
                    <span className="ml-4 label-text text-xs ">
                        By ticking, you are confirming that you have read, understood and agree to the 
                        <Link href="/terms-of-service" passHref>
                            <span className="underline text-info"> terms of service</span>
                        </Link>, 
                        <Link href="/privacy-policy" passHref>
                            <span className="underline text-info"> privacy policy</span>
                        </Link>, and
                        <Link href="/cookie-policy" passHref>
                            <span className="underline text-info"> cookie policy</span>
                        </Link>.
                    </span> 
                    </label>
                    {errors.agreed?.type === 'required' && <p className="text-xs text-center font-bold text-error">You must agree in order to sign in</p>}
                    
                </div>
                {errors.agreed && <p>{errors.agreed.message}</p>}
                <button
                className="bg-white text-black hover:border text-md font-p w-full p-1 rounded-md"
                type="submit"
                >
                Sign In
                </button>
            </div>

            </form>
            
        </div>
      </div>
      
    </div>
  );
};




export default SignIn;
