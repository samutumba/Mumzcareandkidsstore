import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Icon } from '@iconify/react';
import 'react-phone-number-input/style.css'
import { useForm } from "react-hook-form"
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form"

export const WhatsAppSignIn = () => {
    const { control, handleSubmit } = useForm()
    let [isOpen, setIsOpen] = useState(false)
    const [number, setNumber] = useState()
  
    function closeWhatsAppModal() {
      setIsOpen(false)
    }
  
    function openWhatsAppModal() {
      setIsOpen(true)
    }

    function handleSignIn(data: any) {

    }


    return (
      <>
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
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-2xl text-center font-medium leading-6 text-gray-900"
                    >
                      <Icon icon="akar-icons:whatsapp-fill" inline={true} />
                      Sign In with WhatsApp Number
                    </Dialog.Title>
                    <div className="mt-2">
                        <form onSubmit={handleSubmit(handleSignIn)}>
                            <label className="flex flex-col text-lg my-4">
                                <span className="mb-2 text-md">Enter your Number: </span>
                                <span className=" border-2 border-base p-3 rounded-xl">
                                <PhoneInputWithCountry
                                    international    
                                    className="focus:outline-none border-none focus:border-none  outline-none"
                                    defaultCountry="UG"
                                    name="phoneInputWithCountrySelect"
                                    control={control}
                                    value={number}
                                    onChange={setNumber}
                                 />
                                </span>
                            </label>
                            <div className="flex justify-evenly mt-4">
                                <button
                                    type="submit"
                                    className="inline-flex bg-rose text-white w-48 justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    onClick={closeWhatsAppModal}
                                >
                                    Submit
                                </button>
                                <button
                                    type="button"
                                    className="inline-flex justify-center w-48 text-rose rounded-md border-2 border-rose bg-blue-100 px-4 py-2 text-sm font-medium hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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