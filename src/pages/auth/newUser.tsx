import { NextPage } from "next"
import { useSession } from "next-auth/react"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router'
import { useEffect } from "react";
import { BiHome } from "react-icons/bi";
import { BsBag, BsSearch } from "react-icons/bs";
import { GoReport } from "react-icons/go";

const NewUser: NextPage = () => {

    const { data: session, status } = useSession()
    let myName = ""
    if(session?.user?.name){
        myName=session.user.name
    }else if(session?.user?.email){
        myName=session?.user?.email
    }
    
    const router = useRouter()
    useEffect(() => {
        if (!session) {
            router.push("/sign-in")
        }
    });
     

    return <div className="flex bg-base h-screen">
        <div className="m-auto w-4/5 shadow-lg rounded-xl bg-white h-fit md:h-4/5 max-w-2xl">
            <div className="flex w-full flex-row h-full flex-wrap">
                <div className="flex items-center text-center p-6 font-title w-full md:w-1/2 h-fit md:h-full">
                    <div className="w-full">
                        <h1 className="text-5xl font-bold md:text-left text-rose">Welcome <br/>
                            <span className="text-3xl ">{myName}!!</span>
                        </h1>
                        <p className="font-bold text-xl md:text-left font-p">We&#39;ve been waiting for you</p>
                        <p className="text-md font-p text-lg md:text-left">Happy shopping</p>
                        <Link href="/search" passHref>
                            <button className="font-bold text-xl rounded-lg py-5 hover:py-4 my-3 text-white bg-ocean border-0  h-full w-full">
                            <BsSearch className="mb-1"/> Explore
                            </button>
                        </Link>
                        <Link href="/" passHref>
                            <button className="font-bold text-xl rounded-lg py-5 hover:py-4 my-3 text-white border-0 bg-ocean h-full w-full">
                                <BiHome className="mb-1"/> Home
                            </button>
                        </Link>
                         <Link href="/cart" passHref>
                            <button className="font-bold text-xl rounded-lg py-5 hover:py-4 mt-3 text-white border-0 bg-ocean h-full w-full">
                                <BsBag className="mb-1"/> Cart
                            </button>
                        </Link>
                         
                    </div>
                </div>
                <div className="flex items-center w-full md:w-1/2 h-full md:h-full p-6">
                    <div className="relative min-w-full min-h-full m-auto">
                        <Image src="https://res.cloudinary.com/mumzcareandkidsstore/image/upload/v1653113041/media/kiana-bosman-GvleXr4tIPk-unsplash_pxxj8j.jpg" className="object-none md:object-cover rounded-2xl" layout="fill" alt="" />     
                    </div>
                </div>
            </div>
        </div>
    </div>
        ;
};

export default NewUser