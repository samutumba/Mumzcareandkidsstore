import { ExploreProducts, Hero, Layout, Section } from "../components"
import { HomeExploreContent, TestBabyShowerContent } from "../data"


export const Home = () => {
    return (<>
        <Layout>
            <Hero
                images={["https://res.cloudinary.com/mumzcareandkidsstore/image/upload/v1657438683/media/Header-image_yobshr.jpg"]}
            />
            <Section title="EXPLORE" content={HomeExploreContent}/>
            <ExploreProducts products={TestBabyShowerContent} title="FOR HER BABY SHOWER"/> 
        </Layout>
    </>)
}