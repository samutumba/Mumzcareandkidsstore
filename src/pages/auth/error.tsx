import { NextPage } from "next"
import {BiError} from "react-icons/bi"

const Error: NextPage = () => {

    return <>
    <div  className="bg-rose flex h-screen text-2xl font-bold font-title">
        
        <div className="card m-auto h-32 w-60 bg-base text-center p-16 ">
            <div className="card-body text-center">
                
                <p className="text-4xl text-black">
                    <BiError className="text-5xl"/> <br/> Oops!... <br/> An Error has ocurred
                </p>

                <button className="btn w-64 btn-rose ">Try again</button>
                <button className="btn btn-base ">Go home</button>
                <button className="btn  ">Has this been happening frequently? If so then, Report the issue</button>
            </div>
            
        </div>

    </div>;
    </>
};

export default Error
