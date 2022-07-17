// Import Swiper React components
// import required modules
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


interface IHeroProps {
    images: string[],
    title?: string
}


export const Hero: React.FC<IHeroProps> = ({ images, title }) => {
   
    if(images.length == 1){
        return (
            <div className="block">
                <div
                    className={`relative h-[24rem] md:h-[30rem] w-full`}>
                    <img 
                        src="/images/Puzzle-piece.png" 
                        alt="" 
                        className="absolute inset-x-0 z-1 top-0 w-full object-fill h-[4rem] md:h-[8rem]" 
                    />
                    <img 
                        src={images[0]} 
                        alt={`Slide`} 
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
        )
    }
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