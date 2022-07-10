import { FiAtSign } from "react-icons/fi"

export const EmailSignInButton = ()=>{
    return(<>
     <div className="bg-rose hover:bg-[#ab0736] text-white flex max-w-sm justify-center items-center border-2 border-base hover:border-black py-2 px-3 rounded-2xl mb-4">
         <div className="mx-5">
            <button 
                className="font-bold text-md font-p w-full p-1 rounded-md"
            >
              <FiAtSign className="mr-4 text-xl mb-1 inline" />
              Sign in with your Email
            </button>
          </div>
      </div>
      </>)
}