import { IItem, Product } from "../../types";
import { Format } from "../../utils/formatter";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Autoplay } from "swiper";
import { Icon } from '@iconify/react';
import { useMemo, useState } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../../atoms";
import { CartUpdate } from "../Cart/AddToCart";
import { WishListHeart } from "../Cart/WishHeart";
import { useLocation } from 'react-router-dom';
import moment from "moment";

export const FullViewProduct: React.FC<{ product: Product, items?: IItem[] }> = ({ product, items }) => {
  const [quantity, setQuantity] = useState(1)
  const user = useRecoilValue(userState)
  const location = useLocation()

  const price = useMemo(() => {
    if (!user) {
      return product.basePrice
    }
    const cart = user?.Cart

    const filtered = cart?.items?.filter((list) => list.product.id === product.id).at(0)

    if (!filtered) {
      return product.basePrice
    } else {
      return product.basePrice * filtered.quantity
    }



  }, [user])



  return (<div className="w-full h-full min-h-screen px-6 lg:mx-3 my-7">

    <div className=" w-full flex-col flex md:flex-row gap-3 h-full items-stretch">
      <div className="lg:w-1/3 w-full h-full max-h-[30.5rem] lg:sticky lg:top-0">
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
                <img src={img.link} alt="" className="object-contain h-full max-h-[30rem] mx-auto" />
              </SwiperSlide>)
          }


        </Swiper>
      </div>
      <div className="flex flex-col gap-2 px-4 lg:w-2/3">

        <div className="flex flex-row justify-between gap-2">
          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-title  text-gray-400">{product.brand}</h1>
            <h2 className="font-semibold text-2xl font-title mb-2">{product.title} </h2>
          </div>
          <div>
            <button
              onClick={async () => await navigator.share({
                url: `https:\\www.mumzcareandkidsstore.com${location.pathname}`,
                title: `${product.brand} ${product.title} - Mumz Care and Kids Store`,
                text: product.description.replace(/(<([^>]+)>)/ig, ''),
              })}
              className="p-4 rounded-full bg-gray-300 hover:bg-rose hover:text-white">
              <Icon icon="fluent:share-ios-48-regular" className="text-2xl" />
            </button>
          </div>
        </div>
        {/* {
         items && items?.length === 0 &&
         <div className="flex flex-row gap-8 p-3 max-w-lg w-full bg-red-100 rounded-lg text-red-600">
             <span className="h-full flex text-center items-center">
               <Icon icon="ant-design:warning-outlined"  className="text-5xl"/>
             </span>
             <span>
               <h2 className="font-bold text-lg">Out of Stock!</h2>
               <p className="text-sm">This item seems not to have any stock available at this time. Please come back soon as we continue to restock</p>
             </span>
         </div>
       } */}
        <div>
          {
            (product.minAge && product.maxAge) &&
              product.maxAge === 99 ? "All Ages" : <>
              {product.minAge && moment().add(product.minAge, 'y').fromNow(true)} to {product.maxAge && moment().add(product.maxAge, 'y').fromNow(true)}
            </>
          }

        </div>
        <div className="my-2 font-semibold">
          {Format.currency(price)}
        </div>
        <div className="flex flex-row gap-4 flex-wrap">
          <CartUpdate product={product} view="sm" showQuantity />
          <WishListHeart product={product} />
        </div>
        <div className="prose-sm leading-tight list-disc mt-4"><h3><b>Description</b></h3> {Format.quill(product.description)}</div>
        <span className="grid grid-cols-2 justify-center mt-8">
          {/* <button onClick={addToCart} className="bg-rose text-center rounded-lg w-fit py-3 px-5 text-white capitalize text-lg">
        <BsBag className="inline"/> Add to cart
       </button> */}

        </span>
      </div>
    </div>
  </div>)
}