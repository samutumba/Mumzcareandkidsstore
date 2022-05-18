import type {
  NextPage
} from "next";
import { Footer, Meta, NavBar } from "../components";
import { UseProductValue } from "./../hooks/StoreProvider";

const Home: NextPage = () => {
     //const products = UseProductValue()

  return (
    <div className="font-title bg-slate-200 dark:bg-darkGreen text-md ">
        <Meta />
        <h1 className="text-3xl font-bold underline">Home Page</h1>
        
    </div>
  );

};

export default Home;
