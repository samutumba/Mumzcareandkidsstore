
import toast, { Toaster } from "react-hot-toast";
import { Modal, NavBar, Footer, AddEmployee } from "..";
import { VscDashboard } from "react-icons/vsc"
import { BsPersonCircle, BsBag, BsHeart } from "react-icons/bs"
import { FaMotorcycle, FaSearch }from "react-icons/fa"
import { BiPackage, BiHelpCircle } from "react-icons/bi"
import { GrUserWorker } from "react-icons/gr"
import { GiHamburgerMenu } from "react-icons/gi"
import { MdPointOfSale } from "react-icons/md"
import { CgProfile } from "react-icons/cg"
import Link from "next/link";
import Image from "next/image"

interface ILayoutProps {
  children: React.ReactNode;
}

export const AdminLayout: React.FC<ILayoutProps> = ({
  children,
}) => {
  return(
    <>
    <AdminLayoutItems />
    <div className="drawer drawer-mobile font-title bg-slate-200 text-md text-black">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-row flex-wrap justify-center">
        <div className="w-full p-2">
          <label htmlFor="my-drawer-2" className="drawer-button lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label>
        </div>
        <div className="w-full h-full">{children}</div>
        {/**Page Content  */}
        
    </div>
    
    <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/**Side bar items */}
            <Link href="/" passHref>
              <div className="relative h-28">
                <Image src="/Final-Logo.png" alt="Home logo" layout="fill" className="hover:bg-base hover:rounded-lg"/>
              </div>     
            </Link>
            <Link href="/admin" passHref>
              <li><a><VscDashboard/> Dashboard</a></li>
            </Link>
            <Link href="/admin/customers" passHref>
               <li><a><BsPersonCircle/> Customers</a></li>
            </Link>
            <Link href="/admin/products" passHref>
              <li><a><BsBag />Products</a></li>
            </Link>
            <Link href="/admin/orders" passHref>
              <li><a><BiPackage/> Orders</a></li>
            </Link>
            <Link href="/admin/deliveries" passHref>
              <li><a><FaMotorcycle/> Deliveries</a></li>
            </Link>
            <Link href="/admin/employees" passHref>
              <li><a><GrUserWorker />Employees</a></li>
            </Link>
            <Link href="/admin/sales" passHref>
              <li><a><MdPointOfSale />Make a Sale</a></li>
            </Link>
             <Link href="/admin/help" passHref>
               <li><a><BiHelpCircle/> Help</a></li>
            </Link>
        </ul>
    </div>
</div>
    </>
  )
}

export const Layout: React.FC<ILayoutProps> = ({
  children,
}) => {

  return (
    <> 
      <div className="drawer">
        <LayoutItems />
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
        <div className="drawer-content flex flex-col">
          <div className="w-full navbar bg-base-100">
            <div className="flex-none w-full lg:hidden">
              <div className="w-full text-2xl text-semibold">
                <div className="bg-gum content-center text-center grid grid-flow-cols place-content-between grid-cols-3">
                  <div className="flex flex-row h-full my-auto justify-start ">
                    <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost text-2xl">
                      <GiHamburgerMenu />
                    </label>
                    <FaSearch className="my-auto"/>
                  </div>
                  <div className="text-xl text-center my-auto font-semibold font-title">
                    WELCOME !!
                  </div>
                  <div className="flex flex-row my-auto mr-3 h-full gap-1 justify-end">
                    <CgProfile className="my-auto" />
                    <BsHeart  className="my-auto" />
                    <BsBag  className="my-auto" />
                  </div>

                  
                </div>
                <div className="flex justify-center py-3">
                  <Link href="/" passHref >
                    <Image src="/Final-Logo.png" alt="Home logo" width={180} className=" mx-auto cursor-pointer" height={90}/>
                  </Link>
                </div>
                
               
              </div>
             
            </div> 
            <div className="flex-1 px-2 mx-2 block lg:hidden">
             
            </div>
            <div className="flex-none hidden lg:block w-full">
              <NavBar />
            </div>
          </div>
          {children}
          <Footer />
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
          <li><a> <div className="bg-white p-1 rounded-xl" >
              <FaSearch className="mb-1 text-base mr-2" />
              <input type="text" placeholder="Search..." className="focus:border-none w-md" />
            </div></a></li>
            <li><a>Profile</a></li>
          </ul>
          
        </div>
      </div>
    </>
  );
};

/**Component containing modals and toasts included in the layout */
const LayoutItems = () => {
    return (
      <>
        <Modal name={"logout"}>
          <div className="flex flex-col">
            <div className="font-bold text-2xl">
              Are you sure you want to log out?
            </div>
            <div className="flex justify-evenly mt-8">
              <label className="rounded-lg bg-error py-3 w-1/5 text-center text-base-100">
                <button>Yes</button>
              </label>
              <label
                htmlFor="modal-logout"
                className="rounded-lg py-3 w-1/5 text-center bg-base-content text-base-300"
              >
                <button>No</button>
              </label>
            </div>
          </div>
        </Modal>

        <Toaster position="top-right" reverseOrder={false} />
      </>
    );
}

const AdminLayoutItems = () => {
  return(
    <>
      <Modal name={"addEmployee"} >
          <div className="font-p w-full flex flex-col">
           <span className="text-3xl font-extrabold text-center w-full">Add New Employee</span> 
          <AddEmployee />
                <label
                  htmlFor="modal-addEmployee"
                  className="rounded-lg bg-night w-full py-3 text-center bg-close text-base-300"
                >
                  <button>Close</button>
                </label>
          </div>
        </Modal>

     <Toaster position="top-right" reverseOrder={false} />
    </>
  )
}



