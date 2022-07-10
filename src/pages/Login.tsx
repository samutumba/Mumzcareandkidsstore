import toast from "react-hot-toast";
import { useQuery } from "../hooks";
import { useNavigate } from 'react-router-dom';
import { verifyJWT } from "../utils/jwt";

export const LoginPage = () => {
//    { let userData: any
//     const query = useQuery();
//     const token = query.get("token") 
//     const navigate = useNavigate();

//     if(!token){
//         navigate('/sign-in');
//         toast.error("Select a login method")
//         return(<></>);
//     }else{
//         const validData = verifyJWT(token)
//         if(!validData.success){
//             navigate('/sign-in');
//             toast.error("Select a login method")
//             return(<></>);
//         }
//         userData = validData.payload
//     }

//     const { auth, username } = userData

//     if(auth === 'whatsapp'){
//         return(<>

//             </>)
//     }}
        return(<>
        <div>
            login
        </div>
            </>)
   
}