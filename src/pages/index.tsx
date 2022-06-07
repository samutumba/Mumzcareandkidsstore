import type {
  NextPage
} from "next";
import { Footer, Hero, Meta, NavBar, Section } from "../components";
import { ExploreSection } from "../components/Explore";
import { Layout } from "./../components";

const Home: NextPage = () => {
     //const products = UseProductValue()

  return (
    <Layout>
       <div className="font-title bg-slate-200 dark:bg-darkGreen text-md ">
        <Meta />
        <Hero />
        <Section title="">
          <ExploreSection title="" link="" image="" />
        </Section>
        Home
        </div>

    </Layout>
   
  );

};

export default Home;
