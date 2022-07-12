import axios from "axios"
import toast from "react-hot-toast"
import { BsFacebook } from "react-icons/bs"

export const FacebookButton = () => {

    async function faceBookSignIn(){
      let timer: NodeJS.Timeout | null = null
      const fbAuthLink = "https://api.mumzcareandkidsstore.com/auth/facebook";
      const newWindow = window.open(
        fbAuthLink,
        "_blank",
        "width=500,height=600"
      )

      // if(newWindow){
        
      //   }, 500)
      //}
    }

    return(<>
        <div className="flex max-w-sm justify-center hover:bg-[#0b4ca8] items-center border-2 bg-facebook-blue border-base hover:border-black py-2 px-3 rounded-2xl mb-4">
          <div className="mx-5">
                <button 
                    className="font-bold text-base-100 text-left text-md font-p w-full p-1 rounded-md"
                    onClick={faceBookSignIn}
                >
                  <BsFacebook className="mr-4 text-xl mb-1 inline" />
                  Sign in with Facebook
                </button>
              
            </div>
        </div>
    </>)
}