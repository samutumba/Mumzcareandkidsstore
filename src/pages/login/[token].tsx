import { InferGetServerSidePropsType, NextPage } from "next"
import { useState } from "react"
import { LoginForm, OTPForm  } from "../../components"
import { verifyJWT } from "../../utils/jwt"
import {Toaster} from "react-hot-toast"

interface loginPayload {
    username: string,
    auth: string,
    iat?: number,
    exp?: number
}

const Login: NextPage = () => {

    const [canLogin, setCanLogin] = useState(false)
    const [sentOTP, setOTPEnabled] = useState(true)

    var info: loginPayload = {
        username: "samutumba2001@gmail.com",
        auth: "email"
    }

    function requestOTP(){
        return info.username
    }

    return(
        <>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <div className="flex flex-col max-w-screen-2xl w-full">
                <div className="font-title mt-5 font-semibold text-5xl w-full text-center">
                    Welcome Back!
                </div>
                <div className="mx-auto">
                    <OTPForm 
                        auth={info.auth} 
                        username={info.username} 
                        enabled={sentOTP} 
                        setEnabled={setCanLogin}
                        setSelf={setOTPEnabled}
                    />
                </div>
                <div className="mx-auto">
                    <LoginForm 
                        username={info.username} 
                        enabled={canLogin}
                    />
                </div>
            </div>
           
        </>
    )
}


export async function getServerSideProps(context: any) {
    const { token } = context.params

    // const response = await verifyJWT(token)

    // if(!response.success){
    //     return {
    //         redirect: {
    //           destination: '/sign-in',
    //           permanent: false,
    //         },
    //     }
    // }

    // const info: LoginPayload = response.payload

    // return {
    //     props: {
    //         info
    //     }
    //   }

    return {
            props: {},
          }
  };

export default Login