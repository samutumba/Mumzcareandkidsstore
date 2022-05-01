import { ThemeProvider } from "./ThemeProvider";
import {
  RecoilRoot,
  atom,
  useSetRecoilState,
  useRecoilValue,
  useRecoilState,
  selector,
} from "recoil";
import { VscLoading } from "react-icons/vsc"
import React , { useEffect } from "react";
import axios from "axios";

type ProviderProps = {
  children: React.ReactNode;
};

const cartState = atom({
    key: "cart",
    default: [],
});

const userState = atom({
    key: "user",
    default: { id: 111 , name: "Unknown" },
});


const productState = selector({
    key: "product",
    get: async () => {
        try {
            const res = await axios("https://fakestoreapi.com/products");
            return res.data || [];
        } catch (error) {
            console.log(`Error ${error}`);
            return [];
        }
    },
});

  export const SetCartData = () => useSetRecoilState(cartState);
  export const UseCartData = () => useRecoilValue(cartState);
  export const SetUserData = () => useSetRecoilState(userState);
  export const UseUserData = () => useRecoilValue(userState);
  export const UseProductValue = () => useRecoilValue(productState);

export const StoreProvider: React.FC<ProviderProps> = ({ children }) => {
    
  return (
    <RecoilRoot>
      <React.Suspense fallback={<div className="text-4xl bg-blur-sm animate-spin"><VscLoading /></div>}>{children}</React.Suspense>
    </RecoilRoot>
  );
};
