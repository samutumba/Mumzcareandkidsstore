import { BsFacebook } from "react-icons/bs"

export const FacebookButton = () => {
    return(<>
    <a href="https://api.mumzcareandkidsstore.com/auth/facebook">
        <div className="flex max-w-sm justify-center hover:bg-[#0b4ca8] items-center border-2 bg-facebook-blue border-base hover:border-black py-2 px-3 rounded-2xl mb-4">
          <div className="mx-5">
              
                <button 
                    className="font-bold text-base-100 text-left text-md font-p w-full p-1 rounded-md"
                >
                  <BsFacebook className="mr-4 text-xl mb-1 inline" />
                  Sign in with Facebook
                </button>
              
            </div>
        </div>
      </a>
    </>)
}