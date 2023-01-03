//import { Toggle } from "./../Toogle/Toggle";
import { RiShoppingBagLine } from "react-icons/ri";
import { FaRegHeart , FaRegUserCircle } from "react-icons/fa"
import { Link, useLocation } from "react-router-dom";
import { Icon } from '@iconify/react';
import logo from "../../assets/images/Final-logo.png"
import { useRecoilState, useRecoilValue } from "recoil";
import { cartDrawerState, cartState, userState } from "../../atoms";
import { SignInButton } from "../Auth";
import { PreviewLocations } from "..";

export const NavBar = () => {
  const cart = useRecoilValue(cartState)
  const [cartOpen, setCartOpen] = useRecoilState(cartDrawerState)
  const user = useRecoilValue(userState)
  const location = useLocation()

  return (<div className="block h-fit">
    <div className="flex w-full flex-col py-3 h-auto md:h-auto bg-sea">
      <div className="mx-auto w-10/12 md:flex-row flex items-center justify-around ">
      <div className="w-3/12 flex flex-row items-center font-p text-xl gap-4">
          <Link to="/search" className={`${location.pathname == "/search" && "hidden"} my-1 text-lg flex gap-2 items-center`}>
          <Icon icon="akar-icons:search" inline={true} /> <span className="text-md">SEARCH</span>
          </Link>
           <PreviewLocations />
      </div>
      <div className="flex flex-row w-6/12 justify-end"> 
        <div className="flex flex-row gap-4 items-center mr-3">
            { /**<Toggle /> */}
            <a href="tel:+256760742576" className="mb-1 font-medium hover:text-rose hover:underline">+256 760 742-576</a>
            <span>
              <Link to="/profile">
              <FaRegUserCircle className="hover:text-2xl text-xl mb-1" />
              </Link>
            </span>
             <Link to="/wishlist">
              <FaRegHeart className="hover:text-2xl text-xl mb-1" />
             
            </Link>
            <button onClick={() => setCartOpen(true)}  className="relative my-auto h-10 w-fit">
              <RiShoppingBagLine className="hover:text-2xl text-xl mb-1" />
              {/* {(user && user?.Cart?.items?.length) && <div className={`${user?.Cart?.items.length > 0 && "hidden"} rounded-full bg-rose justify-center text-white absolute top-0 right-0 w-4 h-4 text-center flex items-center text-xs`}>
                " "
              </div>} */}
            </button>
        </div>  
        <SignInButton />
      </div>
      </div>
    </div>
    <div className=" mx-auto w-10/12 flex flex-col items-center justify-center font-semibold ">
      <Link to="/" >
        <img src={logo} alt="Home Logo" width={180} height={90}/>
      </Link>
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
    return (<Link to={href} className="text-rose cursor-pointer uppercase hover:font-bold mx-auto">
        {children}
    </Link>)}

  return (<Link to={href} className="uppercase cursor-pointer hover:font-bold mx-auto">
    {children}
  </Link>)
}
