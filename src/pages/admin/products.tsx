import type { NextPage } from "next";
import { AddProduct, AdminLayout, Meta } from "../../components";
import { BreadCrumb } from "../../components/Breadcrumb";

const Products: NextPage = () => {

  return (
      <AdminLayout>
         <Meta robot={false} />
         <BreadCrumb items={[{
             link: "/admin/products",
             name: "Products"
         },
           {
            link: "/admin/",
            name: "Admin"
           },

         ]}/>
         <AddProduct />
      </AdminLayout>
  );
};

export default Products;