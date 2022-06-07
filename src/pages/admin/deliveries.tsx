import type { NextPage } from "next";
import { AdminLayout, Meta, BreadCrumb } from "../../components";

const Deliveries: NextPage = () => {

  return (
      <AdminLayout>
         <Meta robot={false} />
         <BreadCrumb items={[{
             link: "/admin/deliveries",
             name: "Deliveries"
         },
           {
            link: "/admin/",
            name: "Admin"
           },

         ]}/>
      </AdminLayout>
  );
};

export default Deliveries;