import type { NextPage } from "next";
import { AddProduct, AdminLayout, Meta } from "../../components";
import { BreadCrumb } from "../../components/Breadcrumb";

const Admin: NextPage = () => {

  return (
      <AdminLayout>
         <Meta robot={false} />
         
         <div className="md:pt-4">
           <BreadCrumb items={[
              {
                link: "/admin/",
                name: "Admin"
              }
            ]}/>
         </div>
      </AdminLayout>
  );
};

export default Admin;