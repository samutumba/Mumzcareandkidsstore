import { atom } from "recoil";
import { IOrderItem, ISearch, ISort, IUser } from "../types";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const userState = atom<IUser|null>({
    key: 'userState', // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
  });

export const cartState = atom<IOrderItem[]>({
    key: 'cartState', // unique ID (with respect to other atoms/selectors)
  default: [], 
    effects_UNSTABLE: [persistAtom],
})

export const searchState = atom<ISearch>({
  key: "searchState",
  default: {},
  effects_UNSTABLE: [persistAtom],
})

export const sortState = atom<ISort>({
  key: 'sortState',
  default: ISort.featured,
  effects_UNSTABLE: [persistAtom],
})