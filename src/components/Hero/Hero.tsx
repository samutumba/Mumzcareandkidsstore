// Import Swiper React components
// import required modules
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


interface IHeroProps {
    images: string[],
}


export const Hero: React.FC<IHeroProps> = ({ images}) => {
    
    return (
        <div
            className={`block h-fit w-full`}>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {images.map((image, i) => 
                    <SwiperSlide key={i}>
                        <img 
                        src={image} 
                        alt={`Slide ${i}`} 
                        className="block object-cover"
                        />
                    </SwiperSlide>
                    )}
            </Swiper>
        </div>
    )
}