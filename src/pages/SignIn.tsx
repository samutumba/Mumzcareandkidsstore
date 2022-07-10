import { SignInForm } from "../components/Auth";


export const SignInPage = () => {
        
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