import { IProduct } from "../../types";
import { Format } from "../../utils/formatter";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

// import required modules
import { Pagination, Autoplay } from "swiper";
import { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { cartState } from "../../atoms";
import { BsBag } from "react-icons/bs";
import { FiHeart } from 'react-icons/fi';
import toast from "react-hot-toast";
 
export const FullViewProduct: React.FC<IProduct> = (product) => {
  const [cart, setCart] = useRecoilState(cartState)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {

  }, [cart])

  // useEffect(() => {
  //   const cartItems = cart
  //   cartItems.forEach((item) => {
  //     if (item.productID === product._id) {
  //       item.quantity = quantity
  //       setCart(cartItems)
  //     }
  //   })
   
  // }, [quantity, cart])

  const addToCart = useCallback(() => {

     product._id &&
    setCart([ ...cart, {
      productID: product._id,
      quantity
    }])
     toast.custom((t) => (
            <div
                className={`${
                t.visible ? 'animate-enter' : 'animate-leave'
                } max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
       >
        
                <div className="flex-1 w-0 p-2">
                <div className="flex items-start">
                    <div className="flex-shrink-0 pt-0.5">
                    <img
                        className="h-14 w-14 rounded-lg"
                        src={product.images?.at(0)?.link}
                        alt=""
                    />
                    </div>
                    <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                 {product.title}
                 
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                        Added to Cart!
                    </p>
                    </div>
                </div>
                </div>
                <div className="flex border-l border-gray-200">
                <button
                    onClick={() => toast.dismiss(t.id)}
                    className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-rose hover:text-gum focus:outline-none focus:ring-2 focus:ring-rose"
                >
                    Dismiss
                </button>
                </div>
            </div>
            ),  {
    duration: 6000,
  })
  }, [cart])

 return (<div className="w-full px-6 lg:mx-3 my-7">
  <h1 className="text-lg font-title  text-gray-400">{product.brand}</h1>
  <h2 className="font-semibold text-4xl font-title mb-10">{product.title}</h2>
  <div className="w-full flex-col flex lg:flex-row gap-3 h-fit">
   <div className="lg:w-1/3 w-full">
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
   <div className="flex flex-col gap-2 px-4">
       <p className="prose leading-tight list-disc"> {Format.quill(product.description)}</p>
       <label className="mt-6 font-title font-semibold">Quantity</label>
       <div className="flex flex-row font-bold">
         <button onClick={() => setQuantity(quantity+1)} className="bg-base font-bold p-3 rounded-l-lg">+</button><p className="flex border-y-2 border-base justify-center items-center p-3 w-10">{quantity}</p><button onClick={() => setQuantity(quantity-1)} disabled={quantity <= 1} className="bg-base p-3 font-bold rounded-r-lg"> - </button>
       </div>
      <span className="grid grid-cols-2 justify-center mt-8">
       <button onClick={addToCart} className="bg-rose text-center rounded-lg w-fit py-3 px-5 text-white capitalize text-lg">
        <BsBag className="inline"/> Add to cart
       </button>
       <button className="bg-rose text-center w-fit rounded-lg py-3 px-5 text-white capitalize text-lg">
         <FiHeart className="inline"/> Add to Wishlist
       </button>
     </span>
     </div>
    </div>
  </div>)
}