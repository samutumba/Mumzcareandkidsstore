import { NextPage } from "next";
import { Footer, Meta, NavBar } from "../components";
import { Layout } from "./../components";

const WishList: NextPage = () => {
  return (
    <Layout>
      <div className="font-title bg-slate-200 text-md text-white">
      <Meta
        title="Wishlist: Mumz Care and Kid's Store"
        robot={false}
        description="E-Commerce platform dedicated to providing the Ugandan market with produces for mother's, babies and the odd father."
      />
      <h1 className="text-3xl font-bold underline">Your WishList!</h1>
    </div>
    </Layout>
    
  );
};



export default WishList;