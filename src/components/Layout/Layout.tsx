import { NavBar, Footer, Sidebar } from "../";
import { BsBag, BsHeart } from "react-icons/bs"
import { FaSearch }from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"
import { CgProfile } from "react-icons/cg"
import logo from "../../assets/images/Final-logo.png"
import { Icon } from "@iconify/react";

interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<ILayoutProps> = ({
  children,
}) => {

  return (
    <> 
      <div className="fixed drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
        <div className="drawer-content h-full w-full flex flex-col">
          <div className="w-full block bg-base-100">
            <div className="flex-none block h-full w-full lg:hidden">
              <div className="w-full text-2xl text-semibold">
                <div className="bg-sea content-center text-center grid grid-flow-cols place-content-between grid-cols-3">
                  <div className="flex flex-row h-full my-auto justify-start items-center">
                    <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost text-2xl">
                      <GiHamburgerMenu />
                    </label>
                    <a href="/search" className="m-2 text-xl">
                      <Icon icon="akar-icons:search" inline={true} />
                    </a>
                    <a href="/help" className="m-2 text-xl">
                      <Icon icon="clarity:help-info-line" inline={true} />
                    </a>
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
                <div className="flex justify-center pt-1">
                  <a href="/">
                    <img src={logo} alt="Home logo" width={180} className=" mx-auto cursor-pointer" height={90}/>
                  </a>
                </div>               
              </div>
            </div> 
            <div className="flex-1 px-2 mx-2 block lg:hidden">
            </div>
            <div className="flex-none hidden lg:block w-full h-fit">
              <NavBar />
            </div>
          </div>
          <div className="block">
            {children}
            <Footer />
          </div>
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
          <div className="menu overflow-y-auto w-80 bg-base-100">
            <Sidebar />
          </div> 
        </div>
      </div>
    </>
  );
};




