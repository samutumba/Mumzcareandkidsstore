import { Modal } from "flowbite-react"
import { useState } from "react"
import { Icon } from '@iconify/react';

export const EmailSignInButton = ()=>{
    const [isOpen, setIsOpen] = useState(false)

    

    return(<>
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
      <div className="text-center flex flex-col">
      <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Email</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
        </div>
        <input 
          type="text" 
          id="email-address-icon" 
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  " 
          placeholder="name@example.com" />
      </div>
      <div className="flex justify-evenly mt-4">
            <button
                type="submit"
                className="inline-flex bg-rose text-white w-48 justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                onClick={()=>setIsOpen(false)}
            >
                Submit
            </button>
            <button
                type="button"
                className="inline-flex justify-center w-48 text-rose rounded-md border-2 border-rose bg-blue-100 px-4 py-2 text-sm font-medium hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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