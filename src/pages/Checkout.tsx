import { CartView, Footer, SectionTitle, Map } from "../components"
import PhoneInput from "react-phone-number-input";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Icon } from '@iconify/react';
import { Checkbox, Label } from "flowbite-react";
import CreatableSelect from 'react-select/creatable';
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { authModalState, userState, embedState, loadingState } from "../atoms";
import { Format } from "../utils/formatter";
import { Navigate } from "react-router-dom";
import LocationPicker from 'react-location-picker';
import toast from "react-hot-toast";
import { API } from "../api/https";
import { Districts } from "../data/page/Districts";

export const CheckOutPage = () => {
 const setAuthModal = useSetRecoilState(authModalState)
 const [number, setNumber] = useState("")
 const [delivered, setDelivered] = useState(true)
  const user = useRecoilValue(userState)
  const [embed, setEmbed] = useRecoilState(embedState)
  const [location, setLocation] = useState('')
  const [pin, setPin] = useState({
    address: "Akamwesi Shopping Mall, Gayaza, Uganda",
    position: {
      zoom: 10,
      lat: 0.36198869195990024,
      lng: 32.57449973816217
    }
  })
  const setLoading = useSetRecoilState(loadingState)

  const districtOptions = useMemo(() => {
    return Districts.sort().map((d) => {
      return {
        value: d,
        label: d
      }
    })
  }, [])
  
  
  const subtotal = useMemo(() => {
    let total = 0;

        user?.cart?.forEach((cart) => {
            total += ( cart.product.basePrice * cart.quantity)
        })
        return total;
  }, [user])
  
  useEffect(() => {
    (location === "Kampala" || location === "Wakiso" || location === "Mukono") && 
    console.log("success")
  }, [location])

  const completeOrder = useCallback(() => {
    (user && user?.cart.length > 0) &&
      setLoading(true)
      
    const date = new Date().toUTCString()
    
    API.getPaymentLink({
      tx_ref: `${date}-${user?._id}`,
      phonenumber: number,
      amount: subtotal,
      name: user?.name || "",
      email: user?.email,
      redirect_url: "https://www.mumzcareandkidsstore.com"
    }).then((res) => {
      const link = res.data.data.link 

      setEmbed({...embed, title: "Pay with Flutterwave", link: link, open: true, icon: <img src="/images/Flutterwave.png" alt="flutterwave logo" className="w-auto h-6 mr-5 bg-white p-3 rounded-full" />, color: "#ff9b00"})
    }).finally(() => {
      setLoading(false)
    })
  }, [user, embed, number, subtotal])
 
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
  <div className="flex w-full flex-col mt-12 justify-evenly lg:flex-row gap-1 px-2 lg:px-7">
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
      onChange={(e) => setDelivered(!delivered)}
    />
    <Label htmlFor="delivered">
      Yes
    </Label>
  </div>
   <div className="flex items-center gap-2">
    <Checkbox
      id="not_delivered"
      checked={!delivered}
      onChange={(e) => setDelivered(!delivered)}
    />
    <Label htmlFor="not_delivered">
      No
    </Label>
  </div>
     </span>
       </div>
       {
         delivered && <><div className="my-2 mx-auto w-full">
     <label 
        className="block mb-2 text-sm w-full font-medium text-gray-900 dark:text-gray-300">
         Select District: 
     </label> 
     <CreatableSelect
      placeholder="e.g Kampala, Mukono"
             className=" text-gray-700 font-p"
             options={districtOptions}
             onChange={(value, action) => {
              value && setLocation(value.value)
            }}
           />
           <p className="mb-5 mt-3">
             Note: <br />
            <Icon icon="ic:baseline-delivery-dining" inline={true} className="inline text-lg" /> Deliveries may take between 1-5 days to be delivered <br />
            <Icon icon="ic:baseline-delivery-dining" inline={true}  className="inline text-lg" /> Delivery fees are charged on arrival
             {(location === "Kampala" || location === "Wakiso" || location === "Mukono") && <>
             <LocationPicker
                containerElement={ <div style={ {height: '100%'} } /> }
                mapElement={ <div className="rounded-lg" style={ {height: '400px'} } /> }
                  defaultPosition={pin.position}
                 onChange={({ position, address, places }: any) => {
                  setPin({position, address})
                }}
              />
             
             </>}
           </p>
    </div>
    <div className="my-2 mx-auto  w-full">
     <label 
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Phone Number: 
    </label> 
    <PhoneInput
        className="box-border appearance-none border border-gray w-full rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary mr-2 max-w-md font-p custom_style"
        type="tel"
        name="Phone Number"
        country="UG"
        value={number}
        placeholder="Phone Number"
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
         Delivery Notes: 
    </label> 
    <textarea 
               id="message" 
                  rows={4} 
                 
               className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-rose focus:border-rose " 
               placeholder="Any Additional Information..."
       />
           </div>
           <div className="flex-row flex items-center gap-8 my-5 w-full justify-center mx-3">
             <h2 className=" font-title font-bold uppercase">Shipping Handled By</h2>
             <img src="/images/Couriemate.png" alt="CourieMate" className="h-[4rem] w-auto" />
             </div>
         </>
       }
    
   </div>
   <div className="flex flex-col justify-center px-2 lg:px-2 text-center w-full lg:w-5/12">
    <SectionTitle title="My Cart" />
     {
   user?.cart?.map((item) => <div className="flex-col w-full flex justify-center" key={item._id}>
       <CartView {...item} />
       
   </div>)
    }  
  
    </div>
   </div>
   <div className="px-2 lg:px-7 my-[4rem] w-full flex flex-col">
     <h2 className="w-full mt-7 lg:mt-0 text-center text-xl font-bold font-title uppercase mb-3">Supported Payment Methods</h2>
     <div className="flex flex-row flex-wrap gap-8 justify-center items-center">
       <img src="/images/Visa.png" alt="Visa" className="h-7 w-auto" />
       <img src="/images/Mastercard.png" alt="Mastercard" className="h-[3.7rem] w-auto" />
       <img src="/images/AmericanExpress.png" alt="American Express" className="h-[3.2rem] w-auto" />
       <img src="/images/Discover.png" alt="Discover" className="h-5 w-auto" />
        <img src="/images/mtn.png" alt="MTN Mobile Money" className="h-12 w-auto" />
       <img src="/images/Airtel.png" alt="Airtel Mobile Money" className="h-11 w-auto" />
       <img src="/images/barter.svg" alt="Barter" className="h-8 w-auto" />
     </div> 
   </div>
   <div className="mx-auto w-full mb-7 max-w-md rounded-xl mt-5 bg-gray-200 border-1 border-darkBase flex flex-col p-5 font-semibold ">
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
                {
                  delivered &&  <tr>
                            <td>DELIVERY FEE :</td>
                            <td>Will be Paid on Delivery</td>
                </tr>
                }
                <tr>
                    <td>TOTAL :</td>
                    <td>{Format.currency(subtotal + 1500)}</td>
                     </tr>
                 </tbody>
     </table>
       <button onClick={completeOrder} className="py-2 uppercase rounded-xl mx-auto text-center px-10 bg-gum border-gray border text-rose">
                Proceed to payment
            </button>
   </div>
    <div className="flex flex-row items-center mb-[7rem] font-title justify-center font-semibold gap-2 mt-1">
     HANDLED BY <img src="/images/Flutter.svg" alt="" className="h-6 w-auto" /> 
    </div>
  <Map />
  <Footer />
  </div>
  )
}

