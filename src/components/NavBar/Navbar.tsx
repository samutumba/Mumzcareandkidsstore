import Image from "next/image";
import {BsBag} from "react-icons/bs"
import { Container, Modal, ToolTip } from "..";
import { Toggle } from "./../Toogle/Toggle";
import Link  from "next/link";
import { useSession } from "next-auth/react";
import { RiShoppingBagLine } from "react-icons/ri";
import {FaRegHeart,FaRegUserCircle, FaSearch} from "react-icons/fa"


export const NavBar = () => {
  const { data: session, status } = useSession()

  return (<>
  
  <div className="flex flex-col md:flex-row items-center justify-evenly w-full h-auto md:h-10 bg-gum">
    <div>
      <div className="bg-white p-1 rounded-xl" >
        <FaSearch className="mb-1 text-base mr-2" />
        <input type="text" placeholder="Search..." className="focus:border-none w-md" />
      </div>
    </div>
    <div className="font-bold font-title text-center">
      WELCOME {session?.user?.name}
    </div>
    <div className="flex flex-row items-center"> 
      <div>
        <Toggle />
        <FaRegUserCircle className="mr-2 hover:text-2xl text-xl mb-1"/>
        <FaRegHeart className="mr-2 hover:text-2xl text-xl mb-1" />
        <RiShoppingBagLine className="mr-5 hover:text-2xl text-xl mb-1"/>
      </div>  
      <div>
        {status === "authenticated" ? <label htmlFor="modal-logout"><span className="text-rose hover:p-1 hover:font-bold cursor-pointer font-semibold"> SIGN OUT </span></label>: <Link href="/sign-in" passHref><span className="text-rose hover:font-bold cursor-pointer font-semibold">SIGN IN</span></Link> }
      </div>
      
    </div>
  </div>
  <Container>
      <div className="flex flex-col md:flex-row items-center justify-evenly">
      <Link href="/search" passHref><span className="hover:font-bold">BABIES &amp; KIDS</span></Link>
      <Link href="/search" passHref><span className="hover:font-bold">MOTHERHOOD</span></Link>
      <Link href="/" passHref>
        <Image src="/Final-Logo.png" alt="Home logo" width={180} className="hover:bg-base-300 hover:rounded-lg" height={90}/>
      </Link>
      <Link href="/search" passHref><span className="hover:font-bold">FATHERHOOD</span></Link>
      <Link href="/search" passHref><span className="hover:font-bold">APPAREL</span></Link>
      </div>
  </Container>
  </>
    
  );
};

