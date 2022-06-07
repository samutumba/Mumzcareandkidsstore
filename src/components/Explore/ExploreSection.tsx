import Link from "next/link"
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
        <Link href={link} passHref>
            <div className="flex w-20 h-10 bg-center " style={{backgroundImage: image }}>

                <div className="self-end mb-3 mx-auto text-center bottom-2  ">
                    {title}
                </div>
            </div>
        </Link>
    )
}