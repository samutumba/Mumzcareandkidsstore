import { ThemeProvider } from "./ThemeProvider";
import {
  RecoilRoot,
  atom,
  useSetRecoilState,
  useRecoilValue,
  useRecoilState,
} from "recoil";
import { VscLoading } from "react-icons/vsc"

import React , { useEffect } from "react";

type ProviderProps = {
  children: React.ReactNode;
};

    const cartState = atom({
        key: "cart",
        default: {quantity: 4},
    });

    const userState = atom({
        key: "user",
        default: { name: "Unknown" },
    });

    const productState = atom({
      key: "productState",
      default: [
        {
          title: "Dior Baby bottle",
          description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non ",
          images:
            "https://res.cloudinary.com/mumzcareandkidsstore/image/upload/v1651286260/samples/people/boy-snow-hoodie.jpg",
          detail: [
            { type: ["XS", "XL"], price: 24000 },
            { type: ["XXS", "XXL"], price: 30000 },
          ],
          quantity: {
            available: 25,
            ordered: 2,
            sold: 40,
          },
          keywords: ["Baby", "bottle", "Dior"],
          departments: ["Kitchen"],
        },
        {
          title: "Brown Bag",
          description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non ",
          images: "https://res.cloudinary.com/mumzcareandkidsstore/image/upload/v1651286263/samples/ecommerce/leather-bag-gray.jpg",
          detail: [
            { type: ["Black", "XL"], price: 100000 },
            { type: ["Red", "XXL"], price: 110000 },
          ],
          quantity: {
            available: 5,
            ordered: 2,
            sold: 10,
          },
          keywords: ["Mothers", "dresses", "Black"],
          departments: ["Women's Clothing"],
        },
      ],
    });

  export const SetCartData = () => useSetRecoilState(cartState);
  export const UseCartData = () => useRecoilValue(cartState);
  export const SetUserData = () => useSetRecoilState(userState);
  export const UseUserData = () => useRecoilValue(userState);
  export const SetProductData = () => useSetRecoilState(productState);
  export const UseProductData = () => useRecoilState(productState);

export const StoreProvider: React.FC<ProviderProps> = ({ children }) => {
    
  return (
    <RecoilRoot>
      <React.Suspense fallback={<div className="text-4xl bg-blur-sm animate-spin"><VscLoading /></div>}>{children}</React.Suspense>
    </RecoilRoot>
  );
};
