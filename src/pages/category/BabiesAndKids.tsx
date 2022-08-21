import { useNavigate } from "react-router-dom"
import { useSetRecoilState } from "recoil"
import { searchState } from "../../atoms"
import { Layout, Hero, Section, ProductCarousel } from "../../components"
import { BabiesAndKidsExplore } from "../../data/page/Categories"
import { ISort } from "../../types"

export const BabiesAndKidsPage = () => {
    const navigate = useNavigate()
    const setFilter = useSetRecoilState(searchState)
    return(<Layout>
        <Hero title1="Happy Baby," title2="Happy Mom" image="https://i.ibb.co/GHtsLZV/Nooie1-removebg-preview.png" description="Make thier first moments safe and memorable."
                callback={() => {
                    navigate('/search')
                    setFilter({category: ["Babies & Kids"]})
            }} />
       <Section title="EXPLORE" content={BabiesAndKidsExplore} />
        <ProductCarousel title="LATEST" filter={{ category: ["Babies & Kids"] }} sort={ISort.newest}/>
        <ProductCarousel title="Time to PLay!!" filter={{ category: ["Babies & Kids"], subCategory: ["Toys"]}}  />
    </Layout>)
} 