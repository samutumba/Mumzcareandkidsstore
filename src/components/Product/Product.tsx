import { FC } from "react"

export const Product = () => {
    return(<></>)
}
interface IExploreProducts {
    title: string,
    image: string,
}
export const PreviewProduct: FC<IExploreProducts> = ({title, image}) => {
    return(<div className="h-fit flex flex-col p-3 justify-center">
        <img src={image} alt={title} className="w-[12rem] h-[12rem]"/>
        <p className="text-center font-p">
            {title}
        </p>
    </div>)
}