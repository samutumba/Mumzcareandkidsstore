import { useNavigate } from "react-router-dom"
import { useSetRecoilState } from "recoil"
import { searchState } from "../../atoms"
import { Layout, Hero, Section, ProductCarousel  } from "../../components"
import { ApparelExplore } from "../../data/page/Categories"
import { ISort } from "../../types"

export const ApparelPage = () => {
    const navigate = useNavigate()
    const setFilter = useSetRecoilState(searchState)
    return(<Layout>
        <Hero title1="Make" title2="A Statement" image="https://i.ibb.co/MN3qT1Y/apparel-header-image.png"  description="Add to your closet and look the part!"
                callback={() => {
                    navigate('/search')
                    setFilter({category: ['Apparel']})
            }} />
        <Section title="EXPLORE" content={ApparelExplore} />
        <ProductCarousel title="GIRL POWER" filter={{ category: ["Apparel"], subCategory: ["Girls"] }} />
        <ProductCarousel title="STYLE FOR TWO" filter={{ category: ["Apparel"], subCategory: ["Maternity"] }} sort={ISort.featured} />
        <ProductCarousel title="MAIN MAN" filter={{ category: ["Apparel"], subCategory: ["Boys"] }} sort={ISort.featured} />
        <ProductCarousel title="TEEN FITS" filter={{ category: ["Apparel"], subCategory: ["Teens"] }} sort={ISort.featured} />
         <ProductCarousel title="LUCKY LADY" filter={{ category: ["Apparel"], subCategory: ["Women"] }} sort={ISort.featured} />
        <ProductCarousel title="LATEST" filter={{ category: ["Apparel"] }} sort={ISort.newest}/>
    </Layout>)
} 