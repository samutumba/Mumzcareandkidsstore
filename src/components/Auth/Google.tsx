import { FcGoogle } from "react-icons/fc"
import { useRecoilState } from "recoil"
import { API } from "../../api/https"
import { embedState } from "../../atoms"
import { useCallback } from "react"

export const GoogleButton = () => {
    const [embed, setEmbed] = useRecoilState(embedState)

      const signIn = useCallback(async () => {

    const response = await API.getGoogle()

    console.log(response.request.res.responseUrl)

        setEmbed({ ...embed, title: "Connect with Google", link: response.request.res.responseUrl, icon: <FcGoogle className="mr-6 text-xl inline " />, color: "#4285F4", open: true })
        
      }, [embed]) 
  
    return(<>
        <div className="flex max-w-sm justify-center items-center border-2 border-base hover:border-black py-2 px-3 rounded-2xl mb-4">
          <div className="mx-5">
              
                <button 
                    className="font-bold bg-base-100 text-black text-md font-p w-full p-1 rounded-md"
                    onClick={signIn}
                >
                  <FcGoogle className="mr-4 text-xl mb-1 inline" />
                  Continue with Google
                </button>
              
            </div>
        </div>
    </>)
}