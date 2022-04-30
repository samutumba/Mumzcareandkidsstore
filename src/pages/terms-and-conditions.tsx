import { NextPage } from "next";
import { Footer, Meta, NavBar } from "../components";

const TermsAndConditions: NextPage = () => {
  return (
    <div className="font-title bg-slate-200 text-md text-white">
      <Meta
        title="Terms and Conditions: Mumz Care and Kid's Store"
        keywords={[
            "terms",
            "conditions",
            "policy",
          "Terms and Conditions",
          "MumzCare",
          "Babies",
          "Mother's Clothing",
          "Babies Clothing",
          "Uganda",
          "Kampala"
        ]}
        socialTitle="Terms and Conditions: Mumz Care and Kid's Store"
        socialDesc="Explore the terms and conditions that guides our service to you the customer."
        description="Explore the terms and conditions that guides our service to you the customer"
      />
      <NavBar />

      <h1 className="text-3xl font-bold underline">Terms and Conditions</h1>
      <Footer />
    </div>
  );
};

export default TermsAndConditions