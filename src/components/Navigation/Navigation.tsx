//import { Toggle } from "./../Toogle/Toggle";
import { RiShoppingBagLine } from "react-icons/ri";
import { FaRegHeart , FaRegUserCircle } from "react-icons/fa"
import { useLocation } from "react-router-dom";
import { Icon } from '@iconify/react';
import logo from "../../assets/images/Final-logo.png"
import { Badge } from "flowbite-react";
import { useRecoilValue } from "recoil";
import { cartState } from "../../atoms";

export const NavBar = () => {
  const cart = useRecoilValue(cartState)

  return (<div className="block h-fit">
    <div className="flex w-full flex-col py-3 h-auto md:h-auto bg-sea">
      <div className="mx-auto w-10/12 md:flex-row flex items-center justify-around ">
      <div className="w-3/12 flex flex-row items-center text-xl gap-4">
          <a href="/search" className="my-1">
          <Icon icon="akar-icons:search" inline={true} />
          </a>
          <a href="/help" className="my-1">
            <Icon icon="clarity:help-info-line" inline={true} />
          </a>
      </div>
      <div className="font-bold w-3/12 font-title text-center">
        WELCOME!!
      </div>
      <div className="flex flex-row w-3/12 justify-end"> 
        <div className="flex flex-row items-center">
            { /**<Toggle /> */}
            <span>
              <FaRegUserCircle className="mr-2 hover:text-2xl text-xl mb-1" />
              
            </span>
             <span>
              <FaRegHeart className="mr-2 hover:text-2xl text-xl mb-1" />
             
            </span>
             <a href="/cart" className="relative mr-5 h-7 w-7">
              <RiShoppingBagLine className="-mb-1 hover:text-2xl text-xl " />
              {cart.length > 0  && <div className="rounded-full bg-rose justify-center text-white absolute top-0 right-0 w-4 h-4 text-center flex items-center text-xs">
                {cart.length}
              </div>}
            </a>
        </div>  
        <div className="fone-semibold">
          <label htmlFor="modal-logout" hidden>
            <span className="text-rose hover:p-1 hover:font-bold cursor-pointer font-semibold"> 
              SIGN OUT 
            </span>
          </label>
          <a href="/sign-in">
            <span className="text-rose hover:font-bold cursor-pointer font-semibold">
              SIGN IN
            </span>
          </a>
        </div>
      </div>
      </div>
    </div>
    <div className=" mx-auto w-10/12 flex flex-col items-center justify-center font-semibold ">
      <a href="/" >
        <img src={logo} alt="Home Logo" width={180} height={90}/>
      </a>
      <span className="grid grid-cols-3 gap-4 text-center mt-5 mx-auto w-8/12 mb-5">
        <NavLink href="/category/babies-and-kids">
          BABIES &amp; KIDS
        </NavLink>
        <NavLink href="/category/motherhood">
          Motherhood
        </NavLink>
         <NavLink href="/category/apparel">
          Apparel
        </NavLink>
        {/* <NavLink href="/category/youth">
          Youth
        </NavLink> */}
      </span>
    </div>
  </div>
    
  );
};

const NavLink: React.FC<{href: string, children: React.ReactNode}>= ({href, children}) => {
  const location = useLocation()
  
  if(location.pathname === href){
    return(<a href={href} className="text-rose uppercase hover:font-bold mx-auto">
        {children}
    </a>)}

  return(<a href={href} className="uppercase hover:font-bold mx-auto">
    {children}
  </a>)
}
