import { useNavigate} from "react-router-dom"
import { ExploreProducts, Hero, Layout, ProductCarousel, Section } from "../components"
import { HomeExploreContent, TestBabyShowerContent } from "../data"
import { ACategory, ISort } from "../types"


export const Home = () => {
    const navigate = useNavigate()
    return (<>
        <Layout>
            <Hero title1="For My Little" image="https://i.ibb.co/d06NwzY/tommee-tippee-closer-to-nature-complete-starter-kit-black-33.png" title2="One and Me" description="Simplifying you and your baby's needs."
                callback={() => {
                navigate('/search')
            }}/>
            <Section title="EXPLORE" content={HomeExploreContent} />
            <ProductCarousel title="FOR HER BABY SHOWER" filter={{ category: ["Babies & Kids"] }} />
            <ProductCarousel title="Just For Her" filter={{ category: ["Motherhood"], subCategory: ["Maternity", "Health Care", "Gadgets"]}} sort={ISort.newest} />
            <ProductCarousel title="Clean Up Supplies" filter={{ category: ["Babies & Kids", "Motherhood"], subCategory: ["Health Care", "Oral Care"] }} />
            <ProductCarousel title="Clothing" filter={{ category: ["Apparel"] }} />
             <ProductCarousel title="Play TIME" filter={{ category: ["Babies & Kids"], subCategory: ["Toys"] }} />
            <ProductCarousel title="Latest" filter={{}} sort={ISort.newest} />
        </Layout>
    </>)
}