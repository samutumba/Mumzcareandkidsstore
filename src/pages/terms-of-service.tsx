import { NextPage } from "next";
import { Footer, Meta, NavBar } from "../components";

const TermsAndConditions: NextPage = () => {
  return (
    <div className="font-title bg-slate-200 text-md text-white">
      <Meta
        title="Terms of Service: Mumz Care and Kid's Store"
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
        description="Explore the terms and conditions that guides our service to you the customer"
      />
      <h1 className="text-3xl font-bold underline">Terms of Service</h1>
    </div>
  );
};

export default TermsAndConditions