import type {
  NextPage
} from "next";
import { Footer, Meta, NavBar } from "../components";
import { Layout } from "./../components";

const Home: NextPage = () => {
     //const products = UseProductValue()

  return (
    <Layout>
       <div className="font-title bg-slate-200 dark:bg-darkGreen text-md ">
        <Meta />
        <h1 className="text-3xl font-bold underline">Home Page</h1>
        
    </div>

    </Layout>
   
  );

};

export default Home;
