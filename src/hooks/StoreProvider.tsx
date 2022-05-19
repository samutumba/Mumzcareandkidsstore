import { ThemeProvider } from "./ThemeProvider";
import {
  RecoilRoot,
  atom,
  useSetRecoilState,
  useRecoilValue,
  useRecoilState,
  selector,
} from "recoil";
import { atom as jotaiAtom } from "jotai";
import { VscLoading } from "react-icons/vsc"
import React , { useEffect } from "react";
import axios from "axios";
import { IUserType } from "./../types/UserType";
import { ICartType } from "./../types/CartType";

type ProviderProps = {
  children: React.ReactNode;
};

export const StoreProvider: React.FC<ProviderProps> = ({ children }) => {
    
  return (
    <RecoilRoot>
      <React.Suspense fallback={<div className="text-4xl bg-blur-sm animate-spin"><VscLoading /></div>}>{children}</React.Suspense>
    </RecoilRoot>
  );
};
