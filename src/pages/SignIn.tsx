import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "../atoms";
import { SignInForm } from "../components/Auth";


export const SignInPage = () => {
    const navigate = useNavigate()
    const user = useRecoilValue(userState)

    if (user) {
        navigate("/")
    }
        
    return (<>
        <div className="h-screen md:flex">
            <div
                className="overflow-hidden md:flex w-1/2 bg-rose i justify-around items-center hidden">
                <div>
                    <img src="/favicon-white.png"  alt=""/>
                </div>
                
            </div>
            <SignInForm />
        </div>
    </>)
}