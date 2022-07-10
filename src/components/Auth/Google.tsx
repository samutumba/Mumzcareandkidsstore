import { FcGoogle } from "react-icons/fc"

export const GoogleButton = () => {
    return(<>
    <a href="https://api.mumzcareandkidsstore.com/auth/google">
        <div className="flex max-w-sm justify-center items-center border-2 border-base hover:border-black py-2 px-3 rounded-2xl mb-4">
          <div className="mx-5">
              
                <button 
                    className="font-bold bg-base-100 text-black text-md font-p w-full p-1 rounded-md"
                >
                  <FcGoogle className="mr-4 text-xl mb-1 inline" />
                  Sign in with Google
                </button>
              
            </div>
        </div>
      </a>
    </>)
}