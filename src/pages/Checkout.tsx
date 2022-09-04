import { CartView, Footer, SectionTitle } from "../components"
import PhoneInput from "react-phone-number-input";
import { useMemo, useState } from "react";
import { Icon } from '@iconify/react';
import { Checkbox, Label } from "flowbite-react";
import CreatableSelect from 'react-select/creatable';
import { useRecoilValue, useSetRecoilState } from "recoil";
import { authModalState, userState } from "../atoms";
import { Format } from "../utils/formatter";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";

export const CheckOutPage = () => {
 const setAuthModal = useSetRecoilState(authModalState)
 const [number, setNumber] = useState("")
 const [delivered, setDelivered] = useState(false)
  const user = useRecoilValue(userState)

     const subtotal = useMemo(() => {
    let total = 0;

        user?.cart?.forEach((cart) => {
            total += ( cart.product.basePrice * cart.quantity)
        })
        return total;
     }, [user])
 
 if (!user) {
  setAuthModal(true)
  toast('Sign in to preceed to checkout', {
   icon: '🛍️',
   duration: 6000
  })
  return(<Navigate to="/" />)
 }
     



 return (<div className="w-full flex flex-col flex-wrap">
  <header className="bg-ocean w-full py-3  flex justify-center">
   <a href="/" className="p-2 my-2 rounded-lg bg-white">
    <img src="/logo.png" alt="" className="h-[5rem] w-auto" />
   </a>
  </header>
  <div className="flex w-full flex-col justify-evenly lg:flex-row gap-1 px-2 lg:my-[7rem] lg:px-7">
   <div className="flex flex-col w-full lg:w-5/12 lg:px-12">
    <h2 className="w-full mt-7 lg:mt-0 text-center text-xl font-bold font-title uppercase mb-3">Contact Information</h2>
    <div className="my-2 mx-auto  w-full">
     <label 
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Do you want these items delivered to you: 
     </label> 
     <span className="grid grid-cols-2 w-full"  
     >
 <div className="flex items-center gap-2">
    <Checkbox
      id="delivered"
      checked={delivered}
      onClick={() => setDelivered(!delivered)}
    />
    <Label htmlFor="delivered">
      Yes
    </Label>
  </div>
   <div className="flex items-center gap-2">
    <Checkbox
      id="not_delivered"
      checked={!delivered}
      onClick={() => setDelivered(!delivered)}
    />
    <Label htmlFor="not_delivered">
      No
    </Label>
  </div>
     </span>
    </div>
    <div className="my-2 mx-auto w-full">
     <label 
        className="block mb-2 text-sm w-full font-medium text-gray-900 dark:text-gray-300">
         Approximate Location: 
     </label> 
     <CreatableSelect
      placeholder="e.g Gayaza, Mukono"
      className=" text-gray-700 font-p"
      />
    </div>
    <div className="my-2 mx-auto  w-full">
     <label 
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Phone Number: 
    </label> 
    <PhoneInput
        className="box-border appearance-none border border-gray w-full rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary mr-2 max-w-md font-p custom_style"
        type="tel"
        international
      name="Phone Number"
      defaultCountry="UG"
        value={number}
        placeholder="WhatsApp Number"
        onChange={(value) => setNumber(value?.toString() || '')}
        required
     />
     <span className="flex flex-row items-center p-1">
      <Icon icon="icon-park-solid:help" inline className="text-gray-500"/>
      <p className="uppercase text-rose text-[.60rem] ml-2 font-bold">Must Be the recipent's phone number</p>
     </span>
    
    </div>
    <div className="my-2 mx-auto  w-full">
     <label 
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Notes: 
    </label> 
    <textarea 
               id="message" 
                  rows={4} 
                 
               className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-rose focus:border-rose " 
               placeholder="Any Additional Information..."
       />
    </div>
   </div>
   <div className="flex flex-col justify-center px-2 lg:px-2 text-center w-full lg:w-5/12">
    <SectionTitle title="My Cart" />
     {
   user?.cart?.map((item) => <div className="flex-col w-full flex justify-center" key={item._id}>
       <CartView {...item} />
       
   </div>)
    }  
      <div className="mx-auto w-full max-w-md rounded-xl mt-5 bg-gray-200 border-1 border-darkBase flex flex-col p-5 font-semibold ">
             <table className="mb-7">
                 <tbody>
                <tr>
                    <td>SUBTOTAL :</td>
                    <td>{Format.currency(subtotal)}</td>
                </tr>
                <tr>
                    <td>TRANSACTION FEE :</td>
                    <td>{Format.currency(1500)}</td>
                </tr>
                <tr>
                    <td>TOTAL :</td>
                    <td>{Format.currency(subtotal + 1500)}</td>
                     </tr>
                 </tbody>
     </table>
       <button className="py-2 uppercase rounded-xl mx-auto text-center px-10 bg-gum border-gray border text-rose">
                Proceed to payment
            </button>
    </div>
    <div className="flex flex-row items-center font-title justify-center font-semibold gap-2 mt-1">
     HANDLED BY <img src="/images/Flutter.svg" alt="" className="h-6 w-auto" /> 
    </div>
    </div>
  </div>
  <div className="w-full lg:px-12 px-4 my-4">
    <h2 className=" mt-7 lg:mt-0 text-center w-full text-xl font-bold font-title uppercase mb-3">Our Store Location</h2>
     <iframe
  className="border-none mx-auto h-96 lg:h-[16rem] w-full lg:w-9/12"
  loading="lazy"
  allowFullScreen
  referrerPolicy="no-referrer-when-downgrade"
  src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GMAP_SECRET}
    &q=Mumz+care+and+kids+store/@0.3484148,32.5675735,13.75z/data=!4m5!3m4!1s0x177dbbbea01d07a9:0x42cca437bcbfbc9a!8m2!3d0.3476095!4d32.5824972`}>
</iframe>
  </div>
  <Footer />
  </div>
  )
}
