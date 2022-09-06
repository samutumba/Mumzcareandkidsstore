import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Icon } from '@iconify/react';
import 'react-phone-number-input/style.css'
import { useForm } from "react-hook-form"
import { isValidPhoneNumber } from 'react-phone-number-input'
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form"
import { RegisterModal } from './Register';
import { API } from '../../api/https';
import toast from 'react-hot-toast';
import { LoginModal } from './SignIn';
import { Modal } from 'flowbite-react';

export const WhatsAppSignIn = () => {
  const { control,  watch, handleSubmit } = useForm<{
    number: string
  }>({
      mode: "onBlur"
    })
  let [isOpen, setIsOpen] = useState(false)
  const [login, setLogin] = useState(false)
  const [number, setNumber] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [registerOpen, setRegisterOpen] = useState(false)

  const formNumber = watch('number')
  
    function closeWhatsAppModal() {
      setIsOpen(false)
    }
  
    function openWhatsAppModal() {
      setIsOpen(true)
    }

    const handleSignIn = (data: {
    number: string
  }) => {
      if (!isValidPhoneNumber(data.number)) {
        toast.error("Enter a valid phone number")
        setNumber('')
        return;
      }


      API.getExists(data.number).then(res => {
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


    return (
      <> 
        <LoginModal open={login} setIsOpen={setLogin} name={name}  type="whatsapp"  username={formNumber} />
        <RegisterModal type="whatsapp" setLogin={setLogin} username={formNumber} open={registerOpen} setOpen={setRegisterOpen} />
        <div className="bg-[#25D366] hover:bg-[#075E54] flex max-w-sm justify-center items-center border-2 border-base hover:border-black py-2 px-3 rounded-2xl mb-4">
            <div className="mx-5">
                <button 
                    className=" text-white text-md flex items-center flex-row font-bold font-p w-full p-1 rounded-md"
                    onClick={openWhatsAppModal}
                >
                <Icon icon="akar-icons:whatsapp-fill" inline={true} className="mr-3 text-xl mt-0.5"/>
                Continue with WhatsApp
                </button>
            </div>
        </div>
        <Modal
    show={isOpen}
    size="md"
    popup={true}
    onClose={closeWhatsAppModal}
  >
    <Modal.Header />
    <Modal.Body>
            <div className="text-center">
              <h3 className="text-xl text-center flex items-center gap-4 justify-center w-full font-medium leading-6 text-gray-900">
                 <Icon icon="akar-icons:whatsapp-fill" inline={true} />
                      Sign In With WhatsApp
              </h3>
              <div className="mt-2">
                
                        <form onSubmit={handleSubmit(handleSignIn)}>
                            <label className="flex flex-col text-lg my-4">
                               
                                <span className="p-2">
                                <PhoneInputWithCountry
                                    international    
                                    className="box-border appearance-none border border-gray w-full rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary mr-2 font-Poppins custom_style"
                                    defaultCountry="UG"
                                    name="number"
                              control={control}
                               rules={{ required: true }} 
                                 
                                 />
                                </span>
                            </label>
                            <div className="flex justify-evenly font-semibold font-p gap-2 mt-4">
                                <button
                                    type="submit"
                                    className=" bg-rose text-white text-center hover:bg-white hover:ring-rose hover:text-rose py-2 px-4 w-48 rounded-lg"
                                >
                                    Enter
                                </button>
                                <button
                                    type="button"
                                    className="inline-flex justify-center w-48 text-rose rounded-md border-2 border-rose bg-white px-4 py-2 text-sm  "
                                    onClick={closeWhatsAppModal}
                                >
                                    Cancel
                                </button>
                            </div>
                        
                        </form>
                    </div>
      </div>
    </Modal.Body>
  </Modal>
  

        
      </>
    )
}
    
