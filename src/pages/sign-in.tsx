import { NextPage } from "next";
import Image from "next/image"
import { Footer, Meta, NavBar } from "../components";
import { getProviders, signIn, useSession } from "next-auth/react";
import { FcGoogle } from "react-icons/fc"
import { BsFacebook } from "react-icons/bs"
import Link from 'next/link'
import { useForm } from 'react-hook-form';
import { useRouter } from "next/router";
import { useEffect } from "react";

const SignIn: NextPage = () => {
  const { register, handleSubmit,  formState: { errors } } = useForm({
    mode: "onBlur"
  });
    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (session) {
            router.push("/")
        }
    });
     

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
			<div className="flex max-w-sm justify-center items-center border-2 border-base hover:border-black py-2 px-3 rounded-2xl mb-4">
         <div className="mx-5">
            <button 
                className="bg-base-100 text-black text-md font-p w-full p-1 rounded-md"
                onClick={() => signIn("google", { callbackUrl: "/" })}
            >
              <FcGoogle className="mr-4 mb-1" />
              Sign in with Google
            </button>
          </div>
      </div>
      <div className="flex max-w-sm justify-center items-center border-2 bg-facebook-blue border-base hover:border-black py-2 px-3 rounded-2xl mb-4">
        <div className="mx-5">
            <button 
                className=" text-base-100 text-left text-md font-p w-full p-1 rounded-md"
                onClick={() => signIn("facebook", { callbackUrl: "/" })}
            >
              <BsFacebook className="mr-4 mb-1" />
              Sign in with Facebook
            </button>
          </div>
      </div>
       <div className="divider text-black">Or sign in with e-mail</div>
					
      <form onSubmit={handleSubmit(d => signIn("email", { email: d.email, callbackUrl: "/" }))}>
        <div 
        className={errors.email ? "flex max-w-sm items-center py-2 px-3 rounded-2xl mb-4 border-2 border-error"
        : "flex max-w-sm items-center border-2 py-2 px-3 rounded-2xl mb-4"}
        >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
        </svg>
        <input 
        type="text" 
        id="" 
        placeholder="Email Address" 
        {...register("email",
            { required: true, 
              pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ 
            })}
            className=" pl-2 focus:outline-none border-none focus:border-none input block h-9 w-full"
          />
          
      </div>
      <span className="text-left">
        {errors.email?.type === 'required' && <p className="text-xs text-center font-bold text-error">You must provide an email</p>}
        {errors.email?.type === 'pattern' && <p className="text-xs text-center font-bold text-error">You must provide a valid email address</p>}
      </span>
      <div className="form-control">
         <label className="label cursor-pointer">
              <input 
                type="checkbox" 
                {...register("agreed", { required: true })}
                className={errors.agreed ? "checkbox border-2 border-error" : "checkbox"}
              />
              <span className="p-4 label-text text-xs ">
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
      {errors.agreed && <p className="text-error">{errors.agreed.message}</p>}
      


      <button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl bg-rose text-white font-semibold mb-2">Login</button>
      </form>
			  
		</div>
	</div>
</div>
    </>
  );
};



export default SignIn;
