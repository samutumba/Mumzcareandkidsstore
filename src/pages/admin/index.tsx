import type { NextPage } from "next";
import { AddProduct, Meta } from "../../components";

const Admin: NextPage = () => {

  return (
    <div className="font-title bg-slate-200 dark:bg-darkGreen text-md text-white">
      <Meta />
      <h1 className="text-3xl font-bold underline">Admin</h1>
      <AddProduct />
    </div>
  );
};

export default Admin;