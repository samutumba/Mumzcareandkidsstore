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
                    className=" text-white text-md flex flex-row font-bold font-p w-full p-1 rounded-md"
                    onClick={openWhatsAppModal}
                >
                <Icon icon="akar-icons:whatsapp-fill" inline={true} className="mr-3 text-xl mt-0.5"/>
                Sign in with Whatsapp
                </button>
            </div>
        </div>
  
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeWhatsAppModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>
  
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md font-p transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-2xl text-center flex items-center gap-4 justify-center w-full font-medium leading-6 text-gray-900"
                    >
                      <Icon icon="akar-icons:whatsapp-fill" inline={true} />
                      Sign In With WhatsApp
                    </Dialog.Title>
                    <div className="mt-2">
                        <form onSubmit={handleSubmit(handleSignIn)}>
                            <label className="flex flex-col text-lg my-4">
                                <span className="mb-2 text-md">Enter your Number: </span>
                                <span className="p-2">
                                <PhoneInputWithCountry
                                    international    
                                    className="focus:outline-none border-none appearance-none focus:border-none ring-none outline-none"
                                    defaultCountry="UG"
                                    name="number"
                              control={control}
                               rules={{ required: true }} 
                                 
                                 />
                                </span>
                            </label>
                            <div className="flex justify-evenly font-semibold font-p mt-4">
                                <button
                                    type="submit"
                                    className=" bg-rose text-white text-center hover:bg-white hover:ring-rose hover:text-rose py-2 px-4 w-48 rounded-lg"
                                >
                                    Sign In
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
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        
      </>
    )
}
    
