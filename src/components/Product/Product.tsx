import { FC, useCallback, useMemo } from "react"
import { IOrderItem, Product } from "../../types"
import { AiOutlineHeart } from "react-icons/ai"

// import required modules
import { Pagination } from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Format } from "../../utils/formatter";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useProductQuery } from "../../hooks";
import { ProductFilter } from "../../utils/filter";
import { BsHeart } from "react-icons/bs";
import { ImBin } from "react-icons/im"
import { CartUpdate } from "..";
import { WishListHeart } from "../Cart/WishHeart";


interface IExploreProducts {
    title: string,
    image: string,
}
export const PreviewProduct: FC<IExploreProducts> = ({ title, image }) => {
    return (<div className="h-fit flex flex-col p-3 justify-center">
        <img src={image} alt={title} className="w-[12rem] h-[12rem]" />
        <p className="text-center font-p">
            {title}
        </p>
    </div>)
}

export const ProductCartPreview: FC<IOrderItem> = (item) => {
    const navigate = useNavigate()

    const productData = useProductQuery()
    const product = useMemo(() => {
        return productData.data ?
            ProductFilter(productData.data, { id: item.productID }).at(0) :
            undefined

    }, [productData])

    if (!product) {
        return (<></>)
    }

    return (<div className="w-[40rem] justify-center rounded-2xl px-2 py-3 flex flex-row gap-4 font-p h-[15rem] text-center my-3">
        <div onClick={() => navigate(`/product/${product.id}`)} className="w-1/3 bg-white rounded-2xl m-2 p-3 border border-1 border-base">
            {product.images ?
                <Swiper pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }} loop modules={[Pagination]} className="mySwiper my-2 ">
                    {
                        product.images.map((img, i) =>
                            <SwiperSlide key={i}>
                                <img src={img.link} alt="" className="h-40 w-auto mx-auto rounded-lg " />
                            </SwiperSlide>
                        )
                    }
                </Swiper> :
                <div className="h-40 w-full my-2">
                    <img src="/favicon.ico" alt="" className="h-40 w-auto mx-auto rounded-lg " />
                </div>
            }
        </div>
        <div className="grid grid-flow-row w-96 h-full place-content-evenly  content-center">
            <div className="font-semibold text-lg h-12">
                {product.title}
            </div>
            <div className="grid grid-cols-3 items-center justify-evenly py-2 my-1">
                <ImBin className="inline" />  <BsHeart className="inline" /> <span className="text-rose text-lg font-semibold">+{item.quantity}</span>
            </div>
            <div className="font-semibold text-sm">
                {Format.currency(product.basePrice * item.quantity)}
            </div>
        </div>
    </div>)
}

export const ProductPreview: FC<Product> = (product) => {
    const navigate = useNavigate()
    return (<div className="w-full lg:w-[14rem] mx-auto rounded-2xl px-4 items-center py-3 flex flex-row lg:flex-col gap-1 font-p h-full lg:h-fit text-center my-3">
        <div onDoubleClick={() => navigate(`/product/${product.id}`)} className="w-6/12 lg:w-full h-full bg-white rounded-2xl m-2 p-1 border border-1 border-base">
            {product.images ?
                <Swiper pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }} loop modules={[Pagination]} className="mySwiper my-2 ">
                    {
                        product.images.map((img, i) =>
                            <SwiperSlide key={i}>
                                <img src={img.link} alt="" className="h-40 w-auto mx-auto rounded-lg " />
                            </SwiperSlide>
                        )
                    }
                </Swiper> :
                <div className="h-40 w-full my-2">
                    <img src="/favicon.ico" alt="" className="h-40 w-auto mx-auto rounded-lg " />
                </div>
            }
        </div>
        <div className="flex flex-col mt-2 lg:mt-o h-40 lg:h-full w-1/2 items-center gap-1 lg:w-full flex-wrap">
            <div onClick={() => navigate(`/product/${product.id}`)} className="font-semibold font-title text-sm h-14">
                {product.brand} {product.title}
            </div>
            <div onClick={() => navigate(`/product/${product.id}`)} className="font-semibold mt-3 text-lg w-full text-center">
                {Format.currency(product.basePrice)}
            </div>
            <div className="mt-1 ml-0.5 flex flex-row w-full justify-center gap-2">
                <CartUpdate product={product} view="sm" />
                <WishListHeart product={product} />
            </div>
        </div>

    </div>)
}

export const MiniProductPreview: FC<Product> = (product) => {
    const navigate = useNavigate()

    return (<div className="w-[9.5rem] lg:w-[14rem] rounded-2xl px-2 py-3 flex flex-col gap-1 font-p h-fit text-center my-3">
        <div onDoubleClick={() => navigate(`/product/${product.id}`)} className="w-full bg-white rounded-2xl m-2 p-1 border border-1 border-base">
            {product.images ?
                <Swiper pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }} loop modules={[Pagination]} className="mySwiper my-2 w-full">
                    {
                        product.images.map((img, i) =>
                            <SwiperSlide key={i}>
                                <img src={img.link} alt="" className="h-[8rem] w-auto mx-auto object-contain rounded-lg " />
                            </SwiperSlide>
                        )
                    }
                </Swiper> :
                <div className="h-25 w-full my-2">
                    <img src="/favicon.ico" alt="" className="h-24 w-auto mx-auto rounded-lg " />
                </div>
            }
        </div>
        <div onClick={() => navigate(`/product/${product.id}`)} className="text-ellipsis overflow-hidden font-semibold text-sm h-16">
            {product.brand} {product.title}
        </div>
        <div onClick={() => navigate(`/product/${product.id}`)} className="font-semibold text-md">
            {Format.currency(product.basePrice)}
        </div>
        <div className="mt-1 flex flex-row justify-center lg:ml-4 w-full items-center flex-wrap">
            <CartUpdate product={product} quantity={1} view="sm" />
            <WishListHeart product={product} />
        </div>
    </div>)
}

export const LoadMiniProductPreview = () => {
    //const navigate = useNavigate()

    return (<div className="w-[9.5rem] lg:w-[14rem] rounded-2xl px-2 py-3 flex flex-col gap-1 font-p h-fit text-center my-3">
        <div className="w-full bg-white rounded-2xl m-2 p-1 border border-1 border-base">
            <div className="mySwiper my-2 w-full">
                <div className="bg-base animate-pulse  h-[8rem] w-auto mx-auto object-contain rounded-lg " ></div>
            </div>
        </div>
        <div className="flex gap-1 flex-col text-ellipsis overflow-hidden font-semibold text-sm h-16">
            <div className="h-4 w-10/12 bg-base animate-pulse rounded-lg mx-auto"></div>
            <div className="h-4 w-7/12 bg-base animate-pulse rounded-lg  mx-auto"></div>
        </div>
        <div className="font-semibold text-md">
            <div className="h-6 w-2/3 mx-auto bg-base animate-pulse rounded-lg"></div>
        </div>
        <div className="mt-1 flex flex-row justify-center lg:ml-4 gap-1 w-full items-center flex-wrap">
            <div className="h-7 w-[8rem] bg-base animate-pulse rounded-full mx-auto"></div>
            <div className="h-6 w-6 bg-base animate-pulse rounded-full"></div>
        </div>
    </div>)
}