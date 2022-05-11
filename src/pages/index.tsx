import type {
  NextPage
} from "next";
import { Footer, Meta, NavBar } from "../components";
import { UseProductValue } from "./../hooks/StoreProvider";

const Home: NextPage = () => {
  //const products: productInterface[] = UseProductValue()

  return (
    <div className="font-title bg-slate-200 dark:bg-darkGreen text-md text-white">
        <Meta />
        <h1 className="text-3xl font-bold underline">Home Page</h1>
       {/* {products.map((product, key) => 
          <h2 key={key} id={`${product.id}`}>
            Title: {product.title} \n
          </h2>
       )}*/}
    </div>
  );
};

interface productInterface {
  id: number,
  title: string,
  price: string | number,
  category: string,
  description: string,
  image: string
} 

export default Home;
