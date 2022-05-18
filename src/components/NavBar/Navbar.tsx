import Image from "next/image";
import {BsBag} from "react-icons/bs"
import { Container, Modal, ToolTip } from "..";
import { Toggle } from "./../Toogle/Toggle";
import { UseCartValue } from "./../../hooks/StoreProvider";
import Link  from "next/link";
import { useSession } from "next-auth/react";

export const NavBar = () => {
  const cart = UseCartValue();
 
  
  return (
    <Container>
      <div className="navbar bg-transparent">
        <div className="flex-1">
          <Link href="/" passHref>
              <Image src="/Final-Logo.png" alt="Home logo" width={140} className="hover:bg-base-300 hover:rounded-lg" height={70}/>
          </Link>
        </div>
        <div className="flex-none">
          <Toggle />
          <div className="dropdown dropdown-end mr-2 -mb-2">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator text-2xl">
                <BsBag />
                <span className="badge  badge-sm indicator-item">5</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">5 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    <Link href="/cart">View cart</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
         <SignIn />
        </div>
      </div>
    </Container>
  );
};

const SignIn = () => {
  const { data: session } = useSession();

  if (session){
    const image: string = 
      session.user?.image ||
      "https://res.cloudinary.com/mumzcareandkidsstore/image/upload/v1652474453/default/avatar_mz22fg.png";

     return (
    <div className="dropdown dropdown-end">
      <label
        tabIndex={0}
        className="btn btn-ghost bg-indigo-900 btn-circle avatar placeholder"
      >
        <div className="bg-neutral-focus text-neutral-content rounded-md w-24">
          <Image className="rounded-md" src={image} layout="fill" alt={session.user?.name?.charAt(0)}/>
        </div>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <Link href="/profile">
            <a>Profile</a>
          </Link>
        </li>
        <li>
          <Link href="/order">
            <a>Orders</a>
          </Link>
        </li>
        <li>
          <Link href="/wishlist">
            <a> Wishlist </a>
          </Link>
        </li>
        <li>
          <Link href="/settings">
            <a>Settings</a>
          </Link>
        </li>
        <li>
          <label htmlFor="modal-logout">
            <a>Logout</a>
          </label>
        </li>
      </ul>
    </div>);
  }
  
  return (
    <>
      <Link href="/sign-in" passHref>
        <button className="bg-primary py-1 px-4 rounded-md text-white font-bold hover:py-2 hover:px-5">Sign In</button>
      </Link>
    </>
  );
} 
