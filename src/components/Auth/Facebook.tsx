import { useCallback } from "react"
import { BsFacebook } from "react-icons/bs"
import { useRecoilState } from "recoil"
import { API } from "../../api/https"
import { embedState } from "../../atoms"

export const FacebookButton = () => {
  const [embed, setEmbed] = useRecoilState(embedState)
  
  const faceBookSignIn = useCallback(async () => {

    const response  = await API.getFacebook()

    console.log(response.request.res.responseUrl)

    setEmbed({...embed, title: "Connect with Facebook", link: response.request.res.responseUrl, icon: <BsFacebook className="mr-6 text-xl inline text-white" />, color: "#1877F2", open: true })
  }, [embed]) 
    return(<>
        <div className="flex max-w-sm justify-center hover:bg-[#0b4ca8] items-center border-2 bg-facebook-blue border-base hover:border-black py-2 px-3 rounded-2xl mb-4">
          <div className="mx-5">
                <button 
                    className="font-bold text-base-100 text-left text-md font-p w-full p-1 rounded-md"
                    onClick={faceBookSignIn}
                >
                  <BsFacebook className="mr-4 text-xl mb-1 inline" />
                  Continue with Facebook
                </button>
              
            </div>
        </div>
    </>)
}