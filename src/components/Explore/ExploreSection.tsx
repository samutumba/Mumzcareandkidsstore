import { FC, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { useSetRecoilState } from "recoil";
import { searchState } from "../../atoms";
import { IExploreSection } from "../../types"


export const ExploreSection: FC<IExploreSection> = (props) => {
    const navigate = useNavigate();
    const setFilter = useSetRecoilState(searchState)

    const handleClick = useCallback(() => {
        navigate('/search')

        props.category ?
            props.subCategory ? setFilter({ category: [props.category], subCategory: [props.subCategory] }) :
            setFilter({ category: [props.category] }) : setFilter({})
            
    }, [])
    return (
        <button onClick={handleClick} className="mx-auto font-p my-3 md:mx-0 px-2 w-fit flex">
            <div className="relative w-[12rem] h-[12rem] mx-auto">
                <img src={props.image} alt={props.title} className="h-full rounded-3xl object-cover w-full"/>
                <div className="absolute flex px-2 inset-x-auto  mb-3 w-full text-center bottom-2  ">
                    <span className="bg-white uppercase font-semibold rounded-full p-0.5 w-full">
                        {props.title}
                    </span> 
                </div>
            </div>
        </button>
    )
}