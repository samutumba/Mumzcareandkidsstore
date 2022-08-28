import { useNavigate } from "react-router-dom"
import { useRecoilState } from "recoil"
import { searchState } from "../../atoms"
import { Layout, Hero, ProductCarousel } from "../../components"
import { ISort } from "../../types"

export const YouthPage = () => {
    const navigate = useNavigate()
    const [filter, setFilter] = useRecoilState(searchState)

    return(<Layout>
        <Hero title1="Growing Up" title2="Isn't Easy" description="We have some items that can help you with that."
                callback={() => {
                    navigate('/search')
                    setFilter({category: ["Youth"]})
            }} />
          <ProductCarousel title="LATEST" filter={{ category: ["Youth"] }} sort={ISort.newest} />
    </Layout>)
} 