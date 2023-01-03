import { atom } from "recoil";
import { IOrderItem, ISearch, ISort, User } from "../types";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()



export const userState = atom<User & { }|null>({
    key: 'userState', // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
  effects_UNSTABLE: [persistAtom],
});
  
export const fetchUserState = atom<boolean>({
  key: 'fetchUserState', // unique ID (with respect to other atoms/selectors)
  default: true, // default value (aka initial value)
});
  
export const loadingState = atom<boolean>({
    key: 'loadingState', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
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

export const authModalState = atom({
  key: 'authModalState',
  default: false,
})

export const cartDrawerState = atom({
  key: 'cartDrawerState',
  default: false,
})

export const acceptedState = atom({
  key: 'acceptedState',
  default: false,
  effects_UNSTABLE: [persistAtom],
})


export const embedState = atom<{
  open: boolean,
  color: string,
  link: string,
  title: string,
  icon?: any
}>({
  key: 'embedState',
  default: {
  open: false,
    color: "white",
  title: "Mumz Care and Kids Store",
  link: "https://www.youtube.com/",
  },
})