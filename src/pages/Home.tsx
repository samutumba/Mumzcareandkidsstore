import { ExploreProducts, Hero, Layout, Section } from "../components"
import { HomeExploreContent, TestBabyShowerContent } from "../data"


export const Home = () => {
    return (<>
        <Layout>
            <Hero />
            <Section title="EXPLORE" content={HomeExploreContent}/>
            {/* <ExploreProducts products={TestBabyShowerContent} title="FOR HER BABY SHOWER"/>  */}
        </Layout>
    </>)
}