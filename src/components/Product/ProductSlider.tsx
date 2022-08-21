import { useMemo } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useProductQuery } from "../../hooks"
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

 const products = useMemo(() => {
  return productData.data ?
   ProductFilter(productData.data, filter, sort).slice(0,25) :
  []
 }, [filter, sort, productData])

 return (<div className="w-full h-fit my-3 py-3 px-5 lg:px-7">
  <SectionTitle title={title} />
       <Swiper
        slidesPerView={window.innerWidth <= 896 ? 2 : 5 }
        effect={"fade"}
        
        navigation={true}
        loop
        pagination={{
          clickable: true,
        }}
        modules={[ Navigation]}
        className=" px-4 lg:px-2 flex flex-row justify-center lg:justify-evenly gap-4 w-full "
      >    
         {
             products.map((product, index)=>
             <SwiperSlide key={index} className="block ">
                 <MiniProductPreview  {...product} />
             </SwiperSlide> )
         }
        </Swiper>
 </div>)
}