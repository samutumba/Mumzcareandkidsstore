import { FC } from "react"

interface IProps {
    username: string,
    auth: string
}

export const RegisterForm: FC<IProps> =({ username, auth })=>{
    
    if(auth=="email"){
        return(<>

            </>)
    }

    else if(auth=="whatsapp"){
        return(<>

        </>)

    }

    else if(auth=="facebook"){
        return(<>

            </>)
    }

    else{
        return(<>

            </>)
    }
    
}