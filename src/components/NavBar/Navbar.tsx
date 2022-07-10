//import { Toggle } from "./../Toogle/Toggle";
import { RiShoppingBagLine } from "react-icons/ri";
import {FaRegHeart,FaRegUserCircle, FaSearch} from "react-icons/fa"
import { BabiesAndKids } from ".";

export const NavBar = () => {

  return (<div className="block h-fit">
    <div className="flex w-full flex-col py-1 rounded-lg h-auto md:h-auto bg-gum">
      <div className="mx-auto w-10/12 md:flex-row flex items-center justify-around ">
      <div className="w-3/12">
        <div className="flex flex-row bg-white p-1 rounded-xl" >
          <FaSearch className="mt-1 text-lg mr-2 " />
          <input type="text" placeholder="Search..." className="focus:border-none focus:outline-none " />
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
        <div>
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
    <div className=" mx-auto w-10/12 flex flex-col md:flex-row items-center justify-between font-semibold ">
      <div><BabiesAndKids /></div>
      <a href="/search" ><span className="hover:font-bold">YOUTH</span></a>
      <a href="/" >
        <img src="https://www.mumzcareandkidsstore.com/Final-logo.png" alt="https://www.mumzcareandkidsstore.com/Final-logo.png" width={180} className="hover:bg-base-300 hover:rounded-lg" height={90}/>
      </a>
      <a href="/search" ><span className="hover:font-bold">MOTHERHOOD</span></a>
      <a href="/search" ><span className="hover:font-bold">APPAREL</span></a>
    </div>
  </div>
    
  );
};

