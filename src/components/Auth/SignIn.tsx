import { Modal } from "flowbite-react"
import { ErrorText, TextInput } from "..";
// "With country select" component.
import PhoneInput from 'react-phone-number-input'
import { useCallback, useState } from "react";
import { API } from "../../api/https";

import * as yup from 'yup';
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { authModalState, fetchUserState, loadingState, userState } from "../../atoms";

interface ILogin {
 open: boolean,
 setIsOpen: (value: any) => void,
 username: string,
 name?: string
 type: 'whatsapp'| 'email'
}
let schema = yup.object().shape({
  password: yup.string().min(6).required(),
});

export const LoginModal: React.FC<ILogin> = (props) => {
 const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [user, setUser] = useRecoilState(userState)
  const [signModal, setSignModal] = useRecoilState(authModalState)
  const [fetchUser, setFetchUser] = useRecoilState(fetchUserState) 
   const [loading, setLoading] = useRecoilState(loadingState)
 
 const signIn = useCallback(async () => {
  setLoading(true)
  if (password.length < 6) {
   toast.error("Password must be atleast six characters")
   setLoading(false)
    return;
  }else if(!await schema
   .isValid({
     password
   })) {
   toast.error("Please enter a valid password")
   setLoading(false)
   return;
  }

  API.login(props.username, password).then(res => {
   //navigate('/')
   setLoading(false)
    toast.success("Successfully Signed In!")
    props.setIsOpen(false)
    navigate('/')
    setSignModal(false)
    setFetchUser(!fetchUser)
    
    
  }).catch(err => {
    setLoading(false)
   toast.error(err.response.data.message)
  })
 }, [props, password])

 return (<>
  <Modal
    show={props.open}
    size="md"
    popup={true}
    onClose={() => props.setIsOpen(false)}
  >
    <Modal.Header />
    <Modal.Body>
    <div className="h-fit flex flex-col w-full">
      <div className="mb-2">
      <h2 className="text-3xl font-title font-bold ">Welcome Back <br/><p className="text-lg">{props.name}</p></h2>
           </div>
           <div className="my-2">
             {
               props.type === "whatsapp" ? 
                 <div>
                   <label 
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                          WhatsApp Number: 
                  </label> 
                   <PhoneInput 
                    
                     international
                   className="box-border appearance-none border border-gray w-full rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary mr-2 font-Poppins custom_style"
                   disabled
                     defaultCountry="UG"
                     value={props.username}
                     onChange={(value: any) => { }}
                   />
                 </div> : 
                 <TextInput
                  label="Email: "
                  type="text"
                  value={props.username}
                   placeholder="e.g Flavia Katamba"
                   disabled

                  />
             }
     </div>
     <div className="my-2">
      <TextInput
        label="Password: "
        type="password"
       value={password}
       onChange={(e: any) => setPassword(e.currentTarget.value)}
         placeholder=""
      />
     </div>
     <button 
      onClick={signIn}
         className="px-4 self-center py-2 bg-rose my-4 rounded-lg text-white">
               Sign In
          </button>
       </div>
    </Modal.Body>
  </Modal>
 </>)
}