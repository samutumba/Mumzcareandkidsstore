import { SwipeableDrawer } from "@mui/material"
import { useMemo, useState } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { CartUpdate, CartView, SectionTitle } from ".."
import { cartDrawerState, userState } from "../../atoms"
import { Format } from "../../utils/formatter"
import { SignInButton } from "../Auth"

export const CartDrawer = () => {
    const [open, setOpen] = useRecoilState(cartDrawerState)
    const user = useRecoilValue(userState)
    
    const subtotal = useMemo(() => {
    let total = 0;

        user?.cart?.forEach((cart) => {
            total += ( cart.product.basePrice * cart.quantity)
        })
        return total;
    }, [user])


 return(<SwipeableDrawer
      anchor={'right'}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
 >
      <div className="w-80 px-4 my-7 lg:w-[30rem] h-full flex flex-col pb-7 overscroll-contain font-p">
         <SectionTitle title="My Cart" />
         {
             (!user || user.cart.length === 0) && <div className="h-full flex-grow flex flex-col mb-3 items-center">
                 <img src="/images/emptyCart.png" alt="" className="px-3" />
                 <h3 className="mx-auto mt-3 text-xl font-semibold text-center w-full">{ !user ? <SignInButton /> : "Your Cart is Empty"}</h3>
             </div>
         }
  {
   user?.cart?.map((item) => <div className="flex-col w-full flex justify-center" key={item._id}>
       <CartView {...item} />
       
   </div>)
         }       
                 <div className="mx-auto w-full max-w-md text-sm rounded-xl mt-5 bg-gray-200 border-1 border-darkBase flex flex-col p-5 font-semibold mb-6">
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
          
            <a href="/checkout" className="py-2 rounded-xl mx-auto text-center  px-10 bg-gum border-gray border text-rose">
                CHECKOUT
            </a>
         </div>
    </div>
  
    </SwipeableDrawer>)
}