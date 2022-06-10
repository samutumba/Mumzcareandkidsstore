import type { NextPage } from "next";
import { AdminLayout, Meta, BreadCrumb } from "../../components";

const Sales: NextPage = () => {

  return (
      <AdminLayout>
         <Meta robot={false} />
         <BreadCrumb items={[{
             link: "/admin/sales",
             name: "Make a sale"
         },
           {
            link: "/admin/",
            name: "Admin"
           }
         ]}/>
      </AdminLayout>
  );
};

export default Sales;