import { Modal } from "flowbite-react"
import { ErrorText, TextInput } from "..";
// "With country select" component.
import PhoneInput from 'react-phone-number-input'
import { useCallback, useState } from "react";
import { API } from "../../api/https";

import * as yup from 'yup';
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

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
 
 const signIn = useCallback(async () => {
  if (password.length < 6) {
   toast.error("Password must be atleast six characters")
   return;
  }else if(!await schema
   .isValid({
     password
   })) {
   toast.error("Please enter a valid password")
   return;
  }

  API.login(props.username, password).then(res => {
   //navigate('/')
   console.log("Done")
   toast.success("Successfully Signed In!")
  }).catch(err => {
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
                     className="focus:outline-none border-none appearance-none focus:border-none ring-none outline-none"
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