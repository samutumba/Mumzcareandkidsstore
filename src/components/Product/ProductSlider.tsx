import { useMemo } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useProductQuery, useWindowSize } from "../../hooks"
import { ISearch, ISort } from "../../types"
import { ProductFilter } from "../../utils/filter"
import { SectionTitle } from "../Title"
import { PreviewProduct, MiniProductPreview } from "./Product"

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";


interface IProductCarousel {
 title: string,
 filter: ISearch,
 sort?: ISort
}


export const ProductCarousel: React.FC<IProductCarousel> = ({ title, filter, sort }) => {
 const productData = useProductQuery()
 const size = useWindowSize()

 const products = useMemo(() => {
  return productData.data ?
   ProductFilter(productData.data, filter, sort).slice(0,25) :
  []
 }, [filter, sort, productData])

 return (<div className="w-full h-fit mb-5 mt-9 flex flex-col gap-4 px-3 lg:px-6">
  <SectionTitle title={title} />
       <Swiper
        effect={"fade"}
      slidesPerView={size.width <= 640 ? 2 : size.width <= 768 ? 3 : size.width <=1024 ? 4 : 5}
        navigation={true}
       
        pagination={{
          clickable: true,
        }}
        modules={[ Navigation ]}
        className="mySwiper flex flex-row justify-between gap-2 w-full "
      >    
         {
             products.map((product, index)=>
             <SwiperSlide key={index} className="mx-auto">
                 <MiniProductPreview  {...product} />
             </SwiperSlide> )
         }
        </Swiper>
 </div>)
}