import type {
  NextPage
} from "next";
import { Footer, Hero, Meta, NavBar, Section } from "../components";
import { ExploreSection } from "../components/Explore";
import { Layout } from "./../components";

const Home: NextPage = () => {

  return (
    <Layout>
       <div className="font-title bg-slate-200 text-md ">
        <Meta />
        <Hero image="https://res.cloudinary.com/mumzcareandkidsstore/image/upload/v1655605449/media/Mom_me_zyzmba.jpg" message="For My Little One and Me" />
        <div className="block">
          <Section title="Explore">
            <ExploreSection title="BABY" link="/" image="/favicon-white.png" />
          </Section>
        </div>
       
        Home
        </div>
    </Layout>
   
  );

};

export default Home;
