import { Modal } from "flowbite-react"
import { useState } from "react"
import { Icon } from '@iconify/react';
import { RegisterModal } from "./Register";

import * as yup from 'yup';
import toast from "react-hot-toast";
import { API } from "../../api/https";
import { LoginModal } from "./SignIn";
import { BasicInput } from "..";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

let schema = yup.object().shape({
  email: yup.string().email(),
});

export const EmailSignInButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [registerOpen, setRegisterOpen] = useState(false)
  const [login, setLogin] = useState(false)
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState("")
  const { watch, setValue, handleSubmit, formState: {errors} } = useForm<{ email: string }>({
    mode: "onBlur",
    resolver: yupResolver(schema)
  })

  const handleSignIn = (data : { email: string }) => {

    API.getExists(data.email).then(res => {
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
    <LoginModal open={login} setIsOpen={setLogin} name={name} type="email" username={watch("email")} />
      <RegisterModal setLogin={setLogin} type="email" username={watch("email")} open={registerOpen} setOpen={setRegisterOpen} />
     <div className="bg-rose hover:bg-[#ab0736] text-white flex max-w-sm justify-center items-center border-2 border-base hover:border-black py-2 px-3 rounded-2xl mb-4">
         <div className="mx-5">
            <button 
                className="font-bold flex items-center text-md font-p w-full p-1 rounded-md"
                onClick={()=>setIsOpen(true)}
            >
              <Icon icon="carbon:email" inline={true} className="mr-3 lg:text-xl text-3xl mt-0.5"/>
              Continue with Email
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
      <form onSubmit={handleSubmit(handleSignIn)} className="text-center flex font-p flex-col">
          <label htmlFor="email-address-icon" className="flex items-center gap-2 justify-center w-full font-title mb-2 text-center text-xl font-medium text-gray-900 dark:text-gray-300"><Icon icon="carbon:email" className="mr-3 lg:text-xl text-3xl mt-0.5 inline" /> Sign In With Email</label>
          <BasicInput
            type="email"
            name="Email Address"
            value={watch("email")}
            callback={(e) => setValue('email', e)}
            error={errors.email}
          />
     
      <div className="flex justify-evenly gap-4 mt-4">
            <button
                type="submit"
                className=" bg-rose text-white flex items-center justify-center text-center hover:bg-white hover:ring-rose hover:text-rose py-2 px-4 w-48 rounded-lg"
                
            >
                Enter
            </button>
            <button
                type="reset"
                  className="inline-flex justify-center w-48 text-rose rounded-md border-2 border-rose bg-white px-4 py-2 text-sm  "
                onClick={()=>setIsOpen(false)}
            >
                Cancel
            </button>
        </div>
      </form>
    </Modal.Body>
  </Modal>
      </>)
}