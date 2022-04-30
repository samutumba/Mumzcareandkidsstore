import { NextPage } from "next";
import { Footer, Meta, NavBar } from "../components";

const WishList: NextPage = () => {
  return (
    <div className="font-title bg-slate-200 text-md text-white">
      <Meta
        title="Wishlist: Mumz Care and Kid's Store"
        socialTitle="Wishlist: Mumz Care and Kid's Store"
        robot={false}
        socialDesc="E-Commerce platform dedicated to providing the Ugandan market with produces for mother's, babies and the odd father."
        description="E-Commerce platform dedicated to providing the Ugandan market with produces for mother's, babies and the odd father."
      />
      <NavBar />

      <h1 className="text-3xl font-bold underline">Your WishList!</h1>
      <Footer />
    </div>
  );
};



export default WishList;