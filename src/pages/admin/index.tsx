import type { NextPage } from "next";
import { AddProduct, AdminLayout, Meta } from "../../components";
import { BreadCrumb } from "../../components/Breadcrumb";

const Admin: NextPage = () => {

  return (
      <AdminLayout>
         <Meta robot={false} />
         <BreadCrumb items={[
           {
            link: "/admin/",
            name: "Admin"
           }
         ]}/>
         <AddProduct />
      </AdminLayout>
  );
};

export default Admin;