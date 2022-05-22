import { NextPage } from "next"
import Image from "next/image";
import { MdAlternateEmail } from "react-icons/md";

const verifyRequest: NextPage = () => {

    return <div className="flex bg-base h-screen">
        <div className="m-auto w-4/5 shadow-lg rounded-xl bg-white h-3/5 max-w-2xl">
            <div className="flex flex-col md:flex-row h-full flex-wrap">
                <div className="flex items-center text-center p-6 font-title w-full md:w-1/2 h-1/2 md:h-full">
                    <div>
                            <h2 className="font-black text-5xl">You are almost There!!</h2><br/>
                            <p className="font-bold text-xl font-p">Check the email you entered for a link to sign in</p>
                            <p className="text-md font-p">The link lasts 24 hours so dont be long</p>
                    </div>
                </div>
                <div className="flex items-center w-full md:w-1/2 h-1/2 md:h-full p-6">
                    <div className="relative min-w-full min-h-full rounded-full m-auto">
                        <Image src="https://res.cloudinary.com/mumzcareandkidsstore/image/upload/v1653191000/media/pexels-karolina-grabowska-7269458_ettb6l.jpg" className="object-none md:object-fill p-4 rounded-2xl" layout="fill" alt="" />
                        
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default verifyRequest
