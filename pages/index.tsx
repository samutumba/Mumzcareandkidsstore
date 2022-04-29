
import type { NextPage } from "next";
import { Footer, Meta, NavBar } from "../components";

const Home: NextPage = () => {
  return (
    <div className="font-title bg-slate-200 text-md text-white">
      <Meta />
      <NavBar />
      

      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Footer />
    </div>
  );
};

export default Home;
