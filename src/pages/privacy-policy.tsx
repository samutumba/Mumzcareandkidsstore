import { NextPage } from "next";
import { Footer, Meta, NavBar } from "../components";

const PrivacyPolicy: NextPage = () => {
  return (
    <div className="font-title bg-slate-200 text-md text-white">
      <Meta
        title="Privacy Policy: Mumz Care and Kid's Store"
        keywords={[
          "Privacy Policy",
          "MumzCare",
          "Babies",
          "Mother's Clothing",
          "Babies Clothing",
        ]}
        socialTitle="Privacy Policy: Mumz Care and Kid's Store"
        socialDesc="Explore the policy that guides our service to you the customer."
        description="Explore the policy that guides our service to you the customer"
      />
      <NavBar />

      <h1 className="text-3xl font-bold underline">Our Privacy Policy</h1>
      <Footer />
    </div>
  );
};
export default PrivacyPolicy;
