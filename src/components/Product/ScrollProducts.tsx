import { FC } from "react"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// import required modules
import { Pagination, Navigation } from "swiper";
import { PreviewProduct } from "./Product";
import { SectionTitle } from "..";

interface IExploreProducts {
    title: string,
    image: string,
}

interface IExploreProductsA {
    products: IExploreProducts[]
    title: string
}

export const ExploreProducts: FC<IExploreProductsA> = ({products, title}) => {
    return(<div className="my-7">
       <SectionTitle title={title}/>
        <Swiper
            slidesPerView={window.innerWidth <= 768 ? 2 : 4 }
            spaceBetween={2}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
        >
            {
                products.map((product, index)=>
                <SwiperSlide key={index}>
                    <PreviewProduct {...product} />
                </SwiperSlide> )
            }
        </Swiper>
    </div>)
}