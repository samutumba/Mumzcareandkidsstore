import type { NextPage } from "next";
import { AdminLayout, Meta, BreadCrumb, AddEmployee } from "../../components";

const Employees: NextPage = () => {

  return (
      <AdminLayout>
         <Meta robot={false} />
         <BreadCrumb items={[{
             link: "/admin/employees",
             name: "Employees"
         },
           {
            link: "/admin/",
            name: "Admin"
           },

         ]}/>
         <div className="h-full w-full mt-4">
                <label
                    htmlFor="modal-addEmployee"
                    className="bg-rose cursor-pointer my-6 p-4 text-white rounded-lg hover:rounded-full mx-auto">
                    Add Employee
                </label>
         </div>
         
      </AdminLayout>
  );
};

export default Employees;