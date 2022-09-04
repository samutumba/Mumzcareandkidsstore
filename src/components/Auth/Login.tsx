import { EmailSignInButton } from "./Email"
import { FacebookButton } from "./Facebook"
import { GoogleButton } from "./Google"
import { WhatsAppSignIn } from "./Whatsapp"

export const SignInForm = () => {
    return(<>
    	<div className="flex justify-center py-2 px-6 items-center bg-white">
		    <div className="bg-white flex flex-col max-w-sm justify-center">
                <img src="/favicon.ico" alt="" className="h-12 w-12 mx-auto"/>
                <h1 className="text-gray-800 text-center font-title font-bold text-2xl mb-7">Sign Into Mumz Care and Kids Store</h1>
                {/* <GoogleButton/>
                <FacebookButton/> */}
                <WhatsAppSignIn/>
                <EmailSignInButton/>
            </div>
        </div>
			
    </>)
}