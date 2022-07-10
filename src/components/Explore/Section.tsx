import React, { FC } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
 
// import required modules
import { FreeMode, Navigation} from "swiper";
import { IExploreSection } from "../../types";
import { ExploreSection } from "./ExploreSection";
import { SectionTitle } from "..";

interface ISectionType {
    title: string,
    content: IExploreSection[]
}

export const Section: FC<ISectionType> = ({title, content}) => {
  return (
    <div className="h-fit my-6">
      <SectionTitle title={title}/>
      <Swiper
        slidesPerView={window.innerWidth <= 768 ? 2 : 3}
        spaceBetween={6}
        loop={true}
        freeMode={true}
        navigation={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper my-2"
      >
        {content.map((cont, index) => 
            <SwiperSlide key={index}>
                <ExploreSection {...cont}/>
            </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
}
