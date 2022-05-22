import { NextPage } from "next"
import {BiError, BiHome } from "react-icons/bi"
import {BsArrowRepeat} from "react-icons/bs"
import {GoReport} from "react-icons/go"
import { useSession } from "next-auth/react"
import { useRouter } from 'next/router'

const Error: NextPage = () => {
    const { data: session, status } = useSession()
    const router = useRouter()

     if (session) {
        router.push("/")
     }

    return <>
    <div  className="bg-cryingBaby flex h-screen text-2xl font-bold font-title">
        
        <div className="card m-auto w-4/5 md:w-2/3 bg-base  ">
            <div className="card-body">
                
                <div className="flex flex-row flex-wrap ">
                    <div className="w-full md:w-1/2 h-44 p-3">
                        <p className="text-4xl text-black">
                            <BiError className="text-center text-5xl"/> Error! <br/> Something went wrong
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 h-44 p-3 text-white font-p font-extrabold">
                        <button className="rounded-lg bg-rose border-0  h-full w-full">
                            <BsArrowRepeat /> Try again
                        </button>
                    </div>
                    <div className="w-full md:w-1/2 h-44 p-3 text-white font-p">
                        <button className="rounded-lg btn-base border-0 bg-gold h-full w-full">
                            <BiHome/> Go home
                        </button>
                    </div>
                    <div className="w-full md:w-1/2 h-44 p-3 text-white font-p">
                        <button className="rounded-lg h-full border-0 bg-ocean w-full">
                            <GoReport /> Report the issue
                        </button>
                    </div>

                </div>


                

               
                
                
            </div>
            
        </div>

    </div>;
    </>
};

export default Error
