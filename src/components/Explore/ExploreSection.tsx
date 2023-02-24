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
        <button title="button" onClick={handleClick} className="mx-auto font-p md:mx-0 px-2 w-fit flex">
            <div className="relative w-[14rem] h-[14rem] mx-auto">
                <img src={props.image} alt={props.title} className="h-full  object-cover rounded-3xl w-full" />
                <div className="absolute flex px-1 inset-x-auto  mb-3 w-full text-center bottom-0.5  ">
                    <span className="bg-white text-sm uppercase font-semibold rounded-full p-0.5 w-full">
                        {props.title}
                    </span>
                </div>
            </div>
        </button>
    )
}