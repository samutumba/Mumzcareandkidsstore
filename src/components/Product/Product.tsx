import { FC, useCallback } from "react"
import { IProduct } from "../../types"
import { AiOutlineHeart } from "react-icons/ai"

// import required modules
import { Pagination } from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Format } from "../../utils/formatter";
import toast from "react-hot-toast";


export const Product = () => {
    return(<></>)
}
interface IExploreProducts {
    title: string,
    image: string,
}
export const PreviewProduct: FC<IExploreProducts> = ({title, image}) => {
    return(<div className="h-fit flex flex-col p-3 justify-center">
        <img src={image} alt={title} className="w-[12rem] h-[12rem]"/>
        <p className="text-center font-p">
            {title}
        </p>
    </div>)
}

export const ProductPreview: FC<IProduct> = (product) => {
    return (<div className="w-[14rem]  rounded-2xl px-2 py-3 flex flex-col gap-1 font-p h-fit text-center my-3">
        <div className="w-full bg-white rounded-2xl m-2 p-3 border border-1 border-base">
            {product.images ? 
           <Swiper pagination={{
                    dynamicBullets: true,
               clickable: true,
        }} loop modules={[Pagination]} className="mySwiper my-2 ">
                {
                    product.images.map((img, i) => 
                        <SwiperSlide key={i}>
                            <img src={img.link} alt="" className="h-40 w-auto mx-auto rounded-lg "/>
                        </SwiperSlide>
                    )
                }
                </Swiper> :
                <div className="h-40 w-full my-2">
                    <img src="/favicon.ico" alt="" className="h-40 w-auto mx-auto rounded-lg "/>
             </div>
           }
        </div>
        <div className="font-semibold text-sm h-12">
            {product.title} <AiOutlineHeart className="text-right inline"/>
        </div>
        <div className="font-semibold text-lg">
            {Format.currency(product.basePrice)}
        </div>
        <div className="mt-1">
            <button className="bg-gum border border-base font-semibold border-1 rounded-full py-1 px-3 text-xs">
                ADD TO CART
            </button>
        </div>
    </div>)
}

export const MiniProductPreview: FC<IProduct> = (product) => {

    const addToCart = useCallback(() => {
        
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
            ))
    }, [])
    return (<div className="w-[14rem] rounded-2xl px-2 py-3 flex flex-col gap-1 font-p h-fit text-center my-3">
        <div className="w-full bg-white rounded-2xl m-2 p-1 border border-1 border-base">
            {product.images ? 
           <Swiper pagination={{
            clickable: true,
          dynamicBullets: true,
        }} loop modules={[Pagination]} className="mySwiper my-2 w-full">
                {
                    product.images.map((img, i) => 
                        <SwiperSlide key={i}>
                            <img src={img.link} alt="" className="h-[8rem] w-auto mx-auto object-contain rounded-lg "/>
                        </SwiperSlide>
                    )
                }
                </Swiper> :
                <div className="h-25 w-full my-2">
                    <img src="/favicon.ico" alt="" className="h-24 w-auto mx-auto rounded-lg "/>
             </div>
           }
        </div>
        <div className="font-semibold text-sm h-14">
            {product.title} <AiOutlineHeart className="text-right inline"/>
        </div>
        <div className="font-semibold text-md">
            {Format.currency(product.basePrice)}
        </div>
        <div className="mt-1">
            <button onClick={addToCart} className="bg-gum border border-base font-semibold border-1 rounded-full py-1 px-3 text-xs">
                ADD TO CART
            </button>
        </div>
    </div>)
}