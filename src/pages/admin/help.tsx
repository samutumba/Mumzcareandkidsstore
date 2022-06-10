import type { NextPage } from "next";
import { AdminLayout, Meta, BreadCrumb } from "../../components";

const Help: NextPage = () => {

  return (
      <AdminLayout>
         <Meta robot={false} />
         <BreadCrumb items={[{
             link: "/admin/help",
             name: "Help"
         },
           {
            link: "/admin/",
            name: "Admin"
           },

         ]}/>
      </AdminLayout>
  );
};

export default Help;