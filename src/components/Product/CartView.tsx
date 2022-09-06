import { Pagination } from "flowbite-react"
import { FC, useMemo } from "react"
import { AiOutlineHeart } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
import { useRecoilValue } from "recoil";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { userState } from "../../atoms";
import { ICart, IProduct } from "../../types"
import { Format } from "../../utils/formatter"
import { CartUpdate } from "../Cart";
import { WishListHeart } from "../Cart/WishHeart";

export const CartView: FC<ICart> = (cart) => {
  const navigate = useNavigate()
  const user = useRecoilValue(userState)
    const price = useMemo(() => {
    if (!user) {
   return cart.product.basePrice
  }

      return cart.product.basePrice * cart.quantity
    


  }, [user])
 return (<div  className="w-full rounded-2xl px-2 py-3 flex text-md flex-row items-center gap-1 font-p h-full max-h-[12rem]  text-center my-3">
        <div className="w-5/12 bg-white rounded-2xl m-2 p-3 border h-[12rem]  border-1 border-base flex items-center">
            {cart.product.images ? 
    <div>
     <img src={cart.product.images[0].link} alt="" className="object-center object-cover max-h-[11rem] my-auto "/>
           </div>
           
           :
                <div className="h-20 w-full my-2">
                    <img src="/favicon.ico" alt="" className="h-40 w-auto mx-auto rounded-lg "/>
             </div>
           }
  </div>
  <div className="flex flex-col w-7/12 justify-center flex-wrap gap-2">
    <div onClick={() => navigate(`/product/${cart.product._id}`)} className="font-semibold lg:text-lg font-title ">
       { cart.product.brand} {cart.product.title} 
        </div>
        <div className="font-semibold ">
            {Format.currency(price)}
     </div>
     <div className="flex flex-row justify-center gap-2 flex-wrap">
         <CartUpdate product={cart.product} view="sm" />
         <WishListHeart product={cart.product} />
        </div>
   </div>
    </div>)
}