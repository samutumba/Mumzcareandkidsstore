import Image from "next/image";
import {BsBag} from "react-icons/bs"
import { Container, ToolTip } from "..";
import { Toggle } from "./../Toogle/Toggle";
import { UseCartData } from "./../../hooks/StoreProvider";

export const NavBar = () => {
  const cart = UseCartData();
  
  return (
    <Container>
      <div className="navbar ">
        <div className="flex-1">
          <ToolTip cname="tooltip-bottom" tip="Tap to navigate home">
            <a className="btn btn-ghost text-green normal-case text-xl">
              Mumzcare
            </a>
          </ToolTip>
        </div>
        <div className="flex-none">
          <Toggle />
          <div className="dropdown dropdown-end mr-2 -mb-2">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator text-2xl">
                <BsBag />
                <span className="badge animate-pulse badge-sm indicator-item">
                  {cart.quantity}
                </span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">{cart.quantity} Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost bg-indigo-900 btn-circle avatar placeholder"
            >
              <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
                <span className="text-xl">SM</span>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a className="justify-between">Orders</a>
              </li>
              <li>
                <a> Wishlist </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};
