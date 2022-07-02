import { FC } from "react"
import {FiAtSign} from "react-icons/fi"
import {FaWhatsappSquare} from "react-icons/fa"
import axios from 'axios'
import toast from "react-hot-toast"

interface IProps {
    username: string,
    auth: string,
    enabled: boolean
    setEnabled: any
    setSelf: any
}

export const OTPForm: FC<IProps> =({username,auth, enabled, setEnabled, setSelf})=>{
    
    async function requestOTP() {

        await axios.post(`${process.env.API_ENDPOINT}/auth/prepareLogin`, 
        { 
            "username": username
        }).then(function (response) {
            toast.success(response.data.message)
            setEnabled(true)
            setSelf(false)
          })
          .catch(function (error) {
            console.log(error.response.data)
            toast.error("Try again!")
          });
    }

    var method;
    
    if(auth == "email"){
        method = (<>
        <FiAtSign className="text-rose text-md -mt-1"/> Email
        </>)
    }else if (auth =='whatsapp'){
        method = (<div>
            <FaWhatsappSquare className="text-[#25D366] -mt-1 text-md" /> WhatsApp
            </div>)
    }

    if(enabled){
        return(<div className="flex flex-col place-content-center h-96">
        <p className=" text-lg text-center text-slate-600">
            First I we need to request a passcode that will be sent to <br/>
            <span className="text-center w-full font-semibold text-lg ">{username}  </span> <br/>
            via {method}
        </p>

        <button type="submit" onClick={requestOTP} className="bg-rose mt-4 text-p max-w-2xl text-white rounded-xl p-3">
            Request Passcode
        </button>
    </div>)
    }

    return(
        <>
        </>
    )
    
}