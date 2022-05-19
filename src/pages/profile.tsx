import { NextPage } from "next";
import { Footer, Meta, NavBar } from "../components";
import { Layout } from "./../components";

const Profile: NextPage = () => {

    //const user = UseUserValue()
    //const UserName = user.name.firstname
  return (
    <Layout>
       <div className="font-title bg-slate-200 text-md ">
      <Meta
        title="About: Mumz Care and Kid's Store"
        keywords={[
          "About",
          "MumzCare",
          "Babies",
          "Mother's Clothing",
          "Babies Clothing",
          "Flavia Katamba",
        ]}
      
        description="E-Commerce platform dedicated to providing the Ugandan market with produces for mother's, babies and the odd father."
      />
     
      <h1 className="text-3xl font-bold underline">Profile !</h1>
      
    </div>
    </Layout>
   
  );
};



export default Profile;