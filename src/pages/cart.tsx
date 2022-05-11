import { NextPage } from "next";
import { Footer, Meta, NavBar } from "../components";

const Cart: NextPage = () => {
  return (
    <div className="font-title bg-slate-200 text-md text-white">
      <Meta
        title="Cart: Mumz Care and Kid's Store"
        keywords={[
          "About",
          "MumzCare",
          "Babies",
          "Mother's Clothing",
          "Babies Clothing",
          "Flavia Katamba",
        ]}
        robot={false}
        socialTitle="Cart: Mumz Care and Kid's Store"
        socialDesc="E-Commerce platform dedicated to providing the Ugandan market with produces for mother's, babies and the odd father."
        description="E-Commerce platform dedicated to providing the Ugandan market with produces for mother's, babies and the odd father."
      />
 
      <h1 className="text-3xl font-bold underline">Your Cart!</h1>
    </div>
  );
};


export default Cart;