import { useNavigate } from "react-router-dom"
import { useSetRecoilState } from "recoil"
import { searchState } from "../../atoms"
import { Layout, Hero, ProductCarousel, Section } from "../../components"
import { MotherHoodExplore } from "../../data/page/Categories"
import { ISort } from "../../types"

export const MotherHoodPage = () => {
    const navigate = useNavigate()
    const setFilter = useSetRecoilState(searchState)
    return(<Layout>
        <Hero title1="Mommy" title2="and Me" description="Lighten your load and make time for more memories."
                callback={() => {
                    navigate('/search')
                    setFilter({category: ['Motherhood']})
            }} />
        <Section title="EXPLORE" content={MotherHoodExplore} />
        <ProductCarousel title="LATEST" filter={{ category: ["Motherhood"] }} sort={ISort.newest}/>
        <ProductCarousel title="Pregnancy Essentials" filter={{ category: ["Motherhood"], subCategory: ["Maternity", "Health Care"]}}  />
    </Layout>)
} 