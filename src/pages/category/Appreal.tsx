import { useNavigate } from "react-router-dom"
import { useSetRecoilState } from "recoil"
import { searchState } from "../../atoms"
import { Layout, Hero  } from "../../components"

export const ApparelPage = () => {
    const navigate = useNavigate()
    const setFilter = useSetRecoilState(searchState)
    return(<Layout>
        <Hero title1="Make" title2="A Statement" description="Add to your closet and look the part!"
                callback={() => {
                    navigate('/search')
                    setFilter({category: ['Apparel']})
            }}/>
    </Layout>)
} 