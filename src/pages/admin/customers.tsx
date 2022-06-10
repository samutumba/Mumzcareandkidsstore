import type { NextPage } from "next";
import { AdminLayout, Meta, BreadCrumb } from "../../components";

const Customers: NextPage = () => {

  return (
      <AdminLayout>
         <Meta robot={false} />
         <BreadCrumb items={[{
             link: "/admin/customers",
             name: "Customers"
         },
           {
            link: "/admin/",
            name: "Admin"
           },

         ]}/>
         
      </AdminLayout>
  );
};

export default Customers;