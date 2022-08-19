//import { Toggle } from "./../Toogle/Toggle";
import { RiShoppingBagLine } from "react-icons/ri";
import { FaRegHeart , FaRegUserCircle } from "react-icons/fa"
import { useLocation } from "react-router-dom";
import logo from "../../assets/images/Final-logo.png"

export const NavBar = () => {

  return (<div className="block h-fit">
    <div className="flex w-full flex-col py-1 h-auto md:h-auto bg-sea">
      <div className="mx-auto w-10/12 md:flex-row flex items-center justify-around ">
      <div className="w-3/12">
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
          <input 
            type="search" 
            id="search" 
            className="block p-2 pl-10 w-full text-sm text-gray-900 bg-white rounded-2xl border  border-gray-300 focus:ring-rose focus:border-rose" 
            placeholder="Search" 
          />
        </div>
      </div>
      <div className="font-bold w-3/12 font-title text-center">
        WELCOME!!
      </div>
      <div className="flex flex-row w-3/12 justify-end"> 
        <div className="flex flex-row items-center">
          { /**<Toggle /> */}
          <FaRegUserCircle className="mr-2 hover:text-2xl text-xl mb-1"/>
          <FaRegHeart className="mr-2 hover:text-2xl text-xl mb-1" />
          <RiShoppingBagLine className="mr-5 hover:text-2xl text-xl mb-1"/>
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
        <img src={logo} alt="Home Logo" width={180} className="hover:bg-base-300 hover:rounded-lg" height={90}/>
      </a>
      <span className="flex flex-row justify-between mt-5 mx-auto w-8/12 mb-5">
        <NavLink href="/category/babies-and-kids">
          BABIES &amp; KIDS
        </NavLink>
        <NavLink href="/category/motherhood">
          Motherhood
        </NavLink>
         <NavLink href="/category/apparel">
          Apparel
        </NavLink>
        <NavLink href="/category/youth">
          Youth
        </NavLink>
      </span>
    </div>
  </div>
    
  );
};

const NavLink: React.FC<{href: string, children: React.ReactNode}>= ({href, children}) => {
  const location = useLocation()
  
  if(location.pathname === href){
    return(<a href={href} className="text-rose uppercase hover:font-bold">
        {children}
    </a>)}

  return(<a href={href} className="uppercase hover:font-bold">
    {children}
  </a>)
}