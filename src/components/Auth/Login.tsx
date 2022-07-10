import { EmailSignInButton } from "./Email"
import { FacebookButton } from "./Facebook"
import { GoogleButton } from "./Google"
import { WhatsAppSignIn } from "./Whatsapp"

export const SignInForm = () => {
    return(<>
    	<div className="flex md:w-1/2 justify-center py-10 px-10 items-center bg-white">
		    <div className="bg-white flex flex-col max-w-sm justify-center">
                <h1 className="text-gray-800 text-center  font-bold text-2xl mb-7">Sign In / Register</h1>
                <GoogleButton/>
                <FacebookButton/>
                <WhatsAppSignIn/>
                <EmailSignInButton/>
            </div>
        </div>
			
    </>)
}