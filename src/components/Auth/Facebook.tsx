import { useCallback } from "react"
import { BsFacebook } from "react-icons/bs"
import { useRecoilState } from "recoil"
import { API } from "../../api/https"
import { embedState } from "../../atoms"

export const FacebookButton = () => {
  const [embed, setEmbed] = useRecoilState(embedState)
  
  const faceBookSignIn = useCallback(async () => {
    window.open(`https://api.mumzcareandkidsstore.com/auth/facebook`, "_self")

    // setEmbed({...embed, title: "Connect with Facebook", link: "http://localhost:4000/auth/facebook", icon: <BsFacebook className="mr-6 text-xl inline text-white" />, color: "#1877F2", open: true })
  }, [embed]) 
    return(<>
        <div className="flex max-w-sm justify-center hover:bg-[#0b4ca8] items-center border-2 bg-facebook-blue border-base text-center hover:border-black py-2 px-3 rounded-2xl mb-4">
          <div className="mx-5">
                <button 
                    className="font-bold text-base-100 flex items-center text-md font-p w-full p-1 rounded-md"
                    onClick={faceBookSignIn}
                >
                  <BsFacebook className="mr-4 lg:text-xl text-3xl inline" />
                  Continue with Facebook
                </button>
              
            </div>
        </div>
    </>)
}