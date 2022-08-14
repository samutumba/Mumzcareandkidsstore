// Import Swiper React components
// import required modules
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { IProduct } from "../../types";


interface IHeroProps {
    products?: IProduct[]
}


export const Hero: React.FC<IHeroProps> = ({ products }) => {
   
    
    return (
        <div className="block h-fit font-p text-center mt-2 min-h-96 w-full bg-gum">
            <span className=" flex flex-col md:flex-row  gap-4 py-8 items-center justify-evenly">
                <div className="w-72">
                    <h2 className="leading-tight text-5xl font-title font-bold text-black ">For My Little <br/>
                        <span className="underline underline-offset-[12px] decoration-ocean decoration-dotted decoration-[5px]">
                            One and Me
                        </span>
                    </h2>
                   
                    <p className="text-xl mt-3 w-64 mx-auto">Simplifying you and your baby's needs.</p>

                    <button className="text-white mt-4 py-1 px-4 bg-rose font-semibold uppercase rounded-2xl" >
                        Shop Now
                    </button>
                </div>
                <div className="w-72">
                    .
                </div>
            </span>
        </div>
    )


}