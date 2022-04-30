import { NextPage } from "next";
import { Footer, Meta, NavBar } from "../components";

const About: NextPage = () => {
 return (
   <div className="font-title bg-slate-200 text-md text-white">
     <Meta
       title="About: Mumz Care and Kid's Store"
       keywords={["About", "MumzCare", "Babies", "Mother's Clothing", "Babies Clothing", "Flavia Katamba"]}
       socialTitle="About: Mumz Care and Kid's Store"
       socialDesc="E-Commerce platform dedicated to providing the Ugandan market with produces for mother's, babies and the odd father."
       description="E-Commerce platform dedicated to providing the Ugandan market with produces for mother's, babies and the odd father."
     />
     <NavBar />

     <h1 className="text-3xl font-bold underline">About US!</h1>
     <Footer />
   </div>
 );
 };

About.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  return { userAgent };
};

export default About
