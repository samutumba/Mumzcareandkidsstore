import { InferGetServerSidePropsType, NextPage } from "next"
import { verifyJWT } from "../../utils/jwt"

interface registerPayload {
    username: string,
    auth?: string,
    iat?: number,
    exp?: number
}

const Register: NextPage = () => {

    var info: registerPayload = {
        username: "samutumba2001@gmail.com",
        auth: "email"
    }

    function requestOTP(){
        return info.username
    }

    return(<></>)
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

    // const info: registerPayload = response.payload

    // return {
    //     props: {
    //         info
    //     }
    //   }

    return {
            props: {},
          }
  };

export default Register