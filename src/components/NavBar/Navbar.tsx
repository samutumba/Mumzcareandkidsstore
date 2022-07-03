import Image from "next/image";
import {BsBag} from "react-icons/bs"
import { Container, Modal, ToolTip } from "..";
import { Toggle } from "./../Toogle/Toggle";
import Link  from "next/link";
import { RiShoppingBagLine } from "react-icons/ri";
import {FaRegHeart,FaRegUserCircle, FaSearch} from "react-icons/fa"


export const NavBar = () => {

  return (<>
  
  <div className="flex flex-col md:flex-row items-center justify-around py-2 w-full h-auto md:h-auto bg-gum">
    <div className="w-3/12">
      <div className="bg-white p-1 rounded-xl" >
        <FaSearch className="mb-1 text-base mr-2" />
        <input type="text" placeholder="Search..." className="focus:border-none w-md" />
      </div>
    </div>
    <div className="font-bold w-3/12 font-title text-center">
      WELCOME!!
    </div>
    <div className="flex flex-row w-3/12 items-center"> 
      <div>
        <Toggle />
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
        <Link href="/sign-in" passHref>
          <span className="text-rose hover:font-bold cursor-pointer font-semibold">
            SIGN IN
          </span>
        </Link>
      </div>
    </div>
  </div>
  <Container>
      <div className="h-full flex flex-col md:flex-row items-center justify-between font-semibold">
      <Link href="/search" passHref><span className="hover:font-bold">BABIES &amp; KIDS</span></Link>
      <Link href="/search" passHref><span className="hover:font-bold">YOUTH</span></Link>
      <Link href="/" passHref>
        <Image src="https://www.mumzcareandkidsstore.com/Final-logo.png" alt="https://www.mumzcareandkidsstore.com/Final-logo.png" width={180} className="hover:bg-base-300 hover:rounded-lg" height={90}/>
      </Link>
      <Link href="/search" passHref><span className="hover:font-bold">MOTHERHOOD</span></Link>
      <Link href="/search" passHref><span className="hover:font-bold">APPAREL</span></Link>
      </div>
  </Container>
  </>
    
  );
};

