import { NextPage } from "next";
import { Footer, Meta, NavBar } from "../components";
import { UseUserValue } from "../hooks/StoreProvider";

const Profile: NextPage = () => {

    const user = UseUserValue()
    const UserName = user.name.firstname
  return (
    <div className="font-title bg-slate-200 text-md text-white">
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
        socialTitle="About: Mumz Care and Kid's Store"
        socialDesc="E-Commerce platform dedicated to providing the Ugandan market with produces for mother's, babies and the odd father."
        description="E-Commerce platform dedicated to providing the Ugandan market with produces for mother's, babies and the odd father."
      />
     
      <h1 className="text-3xl font-bold underline">Profile !</h1>
      <p>Hi {UserName.charAt(0).toUpperCase()+UserName.slice(1)}</p>

    </div>
  );
};



export default Profile;