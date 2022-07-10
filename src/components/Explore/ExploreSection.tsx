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
        <a href={link} className="px-2 w-full flex">
            <div className="relative w-[13rem] h-[13rem] mx-auto">
                <img src={image} alt={title} className="h-full rounded-lg object-cover w-full"/>
                <div className="absolute bg-white rounded-full mx-auto mb-3 w-full text-center bottom-2  ">
                    {title}
                </div>
            </div>
        </a>
    )
}