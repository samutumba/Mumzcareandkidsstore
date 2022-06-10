import type { NextPage } from "next";
import { AdminLayout, Meta, BreadCrumb } from "../../components";

const Orders: NextPage = () => {

  return (
      <AdminLayout>
         <Meta robot={false} />
         <BreadCrumb items={[{
             link: "/admin/orders",
             name: "Orders"
         },
           {
            link: "/admin/",
            name: "Admin"
           }
         ]}/>
      </AdminLayout>
  );
};

export default Orders;