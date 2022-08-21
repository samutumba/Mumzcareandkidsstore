import { atom } from "recoil";
import { ICart, ISearch, ISort, IUser } from "../types";

export const userState = atom<IUser|null>({
    key: 'userState', // unique ID (with respect to other atoms/selectors)
    default: null, // default value (aka initial value)
  });

export const cartState = atom<ICart>({
    key: 'cartState', // unique ID (with respect to other atoms/selectors)
    default: [], 
})

export const searchState = atom<ISearch>({
  key: "searchState",
  default: {}
})

export const sortState = atom<ISort>({
  key: 'sortState',
  default: ISort.featured
})