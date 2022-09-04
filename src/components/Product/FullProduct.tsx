import { INewCart, IProduct } from "../../types";
import { Format } from "../../utils/formatter";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

// import required modules
import { Pagination, Autoplay } from "swiper";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { authModalState, cartState, userState } from "../../atoms";
import { BsBag } from "react-icons/bs";
import { FiHeart } from 'react-icons/fi';
import toast from "react-hot-toast";
import { API } from "../../api/https";
import { CartUpdate } from "../Cart/AddToCart";
import { WishListHeart } from "../Cart/WishHeart";
 
export const FullViewProduct: React.FC<IProduct> = (product) => {
  const [quantity, setQuantity] = useState(1)
  const user = useRecoilValue(userState)

  const price = useMemo(() => {
    if (!user) {
   return product.basePrice
  }
    const cart = user?.cart
    
    const filtered = cart.filter((list) => list.product._id === product._id).at(0)

    if (!filtered) {
      return product.basePrice
    } else {
      return product.basePrice * filtered.quantity
    }
    


  }, [user])

  

 return (<div className="w-full h-full px-6 lg:mx-3 my-7">

  <div className=" w-full flex-col flex md:flex-row gap-3 h-full">
   <div className="lg:w-1/3 w-full lg:sticky lg:top-0">
    <Swiper
        pagination={{
      dynamicBullets: true,
       clickable: true,
        
     }}
     autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
     
      navigation={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper w-full flex items-center"
    >
     {
      product.images?.map((img, i) =>
      <SwiperSlide key={i} className="flex w-full items-center">
        <img src={img.link} alt="" className="object-contain h-full max-h-[30rem] mx-auto"/>
      </SwiperSlide> )
     }
        
     
      </Swiper>
  </div>
     <div className="flex flex-col gap-2 px-4 lg:w-2/3">
        <h1 className="text-lg font-title  text-gray-400">{product.brand}</h1>
       <h2 className="font-semibold text-2xl font-title mb-2">{product.title} </h2>
       <div className="my-2 font-semibold">
         {Format.currency(price)}
       </div>
       <div className="flex flex-row gap-4 flex-wrap">
         <CartUpdate product={product} view="sm" showQuantity />
         <WishListHeart product={product} />
        </div>     
       <div className="prose leading-tight list-disc mt-4"><h3><b>Description</b></h3> <br/>{Format.quill(product.description)}</div>
      <span className="grid grid-cols-2 justify-center mt-8">
       {/* <button onClick={addToCart} className="bg-rose text-center rounded-lg w-fit py-3 px-5 text-white capitalize text-lg">
        <BsBag className="inline"/> Add to cart
       </button> */}
       
     </span>
     </div>
    </div>
  </div>)
}