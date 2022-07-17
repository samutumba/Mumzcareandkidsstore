import { FC } from "react"

interface ISectionType {
    image: string,
    title: string,
    link: string
}

export const ExploreSection: FC<ISectionType> = ({
    image,
    title,
    link
}) => {
    return (
        <a href={link} className="mx-auto my-3 md:mx-0 px-2 w-fit flex">
            <div className="relative w-[13rem] h-[13rem] mx-auto">
                <img src={image} alt={title} className="h-full rounded-3xl object-cover w-full"/>
                <div className="absolute flex px-2 inset-x-auto  mb-3 w-full text-center bottom-2  ">
                    <span className="bg-white rounded-full p-1 w-full">
                        {title}
                    </span> 
                </div>
            </div>
        </a>
    )
}