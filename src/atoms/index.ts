import { atom } from "recoil";
import { ICart, IUser } from "../types";

export const userState = atom<IUser|null>({
    key: 'userState', // unique ID (with respect to other atoms/selectors)
    default: null, // default value (aka initial value)
  });

export const cartState = atom<ICart>({
    key: 'cartState', // unique ID (with respect to other atoms/selectors)
    default: [], 
})

export const filterState = atom<ICart>({
  key: 'filterState', // unique ID (with respect to other atoms/selectors)
  default: [], 
})