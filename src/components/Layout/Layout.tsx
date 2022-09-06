import { NavBar, Footer, Sidebar } from "../";
import { BsBag, BsHeart } from "react-icons/bs"
import { FaSearch }from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"
import { CgProfile } from "react-icons/cg"
import logo from "../../assets/images/Final-logo.png"
import { Icon } from "@iconify/react";
import { RiShoppingBagLine } from "react-icons/ri";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartDrawerState, cartState, userState } from "../../atoms";
import { CartDrawer } from "../Cart/Drawer";

interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<ILayoutProps> = ({
  children,
}) => {

  const user = useRecoilValue(userState)
    const [cartOpen, setCartOpen] = useRecoilState(cartDrawerState)
  return (
    <> 
      <div className="fixed drawer w-full">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
        <div className="drawer-content h-full w-full max-w-screen">
          <div className="w-full block bg-base-100">
            <div className="flex-none block h-full w-full lg:hidden">
              <div className="w-full text-2xl text-semibold">
                <div className="bg-sea content-center text-center grid grid-flow-cols place-content-between grid-cols-2">
                  <div className="flex flex-row h-full my-auto justify-start items-center">
                    <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost text-2xl">
                      <GiHamburgerMenu />
                    </label>
                    <a href="/search" className="m-2 text-xl">
                      <Icon icon="akar-icons:search" inline={true} />
                    </a>
                  </div>
                  
                  <div className="flex flex-row my-auto mr-3 h-full gap-2 justify-end">
                    <CgProfile className="my-auto" />
                    <a className="my-auto" href="/wishlist"><BsHeart /></a>
                   <button onClick={() => setCartOpen(true)}  className="relative my-auto h-10 w-fit">
              <RiShoppingBagLine className="mr-2 hover:text-2xl text-xl mb-1" />
              {(user && user?.cart?.length > 0)  && <div className="rounded-full bg-rose justify-center text-white absolute top-0 right-0 w-4 h-4 text-center flex items-center text-xs">
                {user?.cart?.length}
              </div>}
            </button>
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
          <div className="block w-full">
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
      <CartDrawer />
    </>
  );
};




