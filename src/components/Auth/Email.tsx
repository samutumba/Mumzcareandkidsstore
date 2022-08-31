import { Modal } from "flowbite-react"
import { useState } from "react"
import { Icon } from '@iconify/react';
import { RegisterModal } from "./Register";

import * as yup from 'yup';
import toast from "react-hot-toast";
import { API } from "../../api/https";
import { LoginModal } from "./SignIn";

let schema = yup.object().shape({
  email: yup.string().email(),
});

export const EmailSignInButton = ()=>{
  const [isOpen, setIsOpen] = useState(false)
  const [registerOpen, setRegisterOpen] = useState(false)
  const [login, setLogin] = useState(false)
   const [name, setName] = useState<string>('')
  const [ email, setEmail] = useState("")

  const handleSignIn = async () => {
      if (!await schema
        .isValid({
          email
        })) {
        toast.error("Enter a valid email")
        setEmail('')
        return;
      }


      API.getExists(email).then(res => {
        toast.success(res.data.message)
        setName(res.data.name)
        setLogin(true)
        setIsOpen(false)
      }).catch(err => {
        toast.error(err.response.data.message)
        setIsOpen(false)
        setRegisterOpen(true)
        
      })
    } 
    

  return (<>
    <LoginModal open={login} setIsOpen={setLogin} name={name} type="email" username={email} />
      <RegisterModal setLogin={setLogin} type="email" username={email} open={registerOpen} setOpen={setRegisterOpen} />
     <div className="bg-rose hover:bg-[#ab0736] text-white flex max-w-sm justify-center items-center border-2 border-base hover:border-black py-2 px-3 rounded-2xl mb-4">
         <div className="mx-5">
            <button 
                className="font-bold flex flex-row text-md font-p w-full p-1 rounded-md"
                onClick={()=>setIsOpen(true)}
            >
              <Icon icon="carbon:email" inline={true} className="mr-3 text-xl mt-0.5"/>
              Sign in with your Email
            </button>
          </div>
      </div>

  <Modal
    show={isOpen}
    size="md"
    popup={true}
    onClose={()=> setIsOpen(false)}
  >
    <Modal.Header />
    <Modal.Body>
      <div className="text-center flex font-p flex-col">
      <label htmlFor="email-address-icon" className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Sing In With Email</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-5 h-5 text-gray-700 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
        </div>
        <input 
          type="email" 
          id="email-address-icon" 
              className="border-2 border-gray-300 my-3 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  " 
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
          placeholder="name@example.com" />
      </div>
      <div className="flex justify-evenly gap-4 mt-4">
            <button
                type="submit"
                className=" bg-rose text-white text-center hover:bg-white hover:ring-rose hover:text-rose py-2 px-4 w-48 rounded-lg"
                onClick={handleSignIn}
            >
                Submit
            </button>
            <button
                type="button"
                  className="inline-flex justify-center w-48 text-rose rounded-md border-2 border-rose bg-white px-4 py-2 text-sm  "
                onClick={()=>setIsOpen(false)}
            >
                Cancel
            </button>
        </div>
      </div>
    </Modal.Body>
  </Modal>
      </>)
}