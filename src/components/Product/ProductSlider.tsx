import { useEffect, useMemo, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useProductQuery, useWindowSize } from "../../hooks"
import { Product, ISearch, ISort } from "../../types"
import { ProductFilter } from "../../utils/filter"
import { SectionTitle } from "../Title"
import { PreviewProduct, MiniProductPreview, LoadMiniProductPreview } from "./Product"

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";


interface ProductCarousel {
  title: string,
  filter: ISearch,
  sort?: ISort
}

export const ProductCarousel: React.FC<ProductCarousel> = ({ title, filter, sort }) => {
  const productData = useProductQuery()
  const size = useWindowSize()
  const [loading, setLoading] = useState(true)

  const products: Product[] = useMemo(() => {

   return productData.data ? ProductFilter(productData.data, filter, sort).slice(0, 25) : []

  }, [productData.data])


  useEffect(() => {
    if (products.length > 0) {
      setLoading(false)
    } else {
      setLoading(true)
    }
  }, [products])

  return (<div className="w-full h-fit mb-5 mt-9 flex mx-auto flex-col gap-4 px-3 lg:px-6">
    <SectionTitle title={title} />
    <Swiper
      effect={"fade"}
      slidesPerView={size.width <= 640 ? 2 : size.width <= 768 ? 3 : size.width <= 1024 ? 4 : 5}
      navigation={true}

      pagination={{
        clickable: true,
      }}
      modules={[Navigation]}
      className="mySwiper flex flex-row justify-evenly gap-1 w-full "
    >
      {
        loading ?
          [1, 2, 3, 4, 5].map((num, i) =>
            <SwiperSlide key={i} className="mx-auto">
              <LoadMiniProductPreview />
            </SwiperSlide>)
          :
          products.map((product, index) =>
            <SwiperSlide key={index} className="mx-auto w-full">
              <MiniProductPreview  {...product} />
            </SwiperSlide>)
      }
    </Swiper>
  </div>)
}