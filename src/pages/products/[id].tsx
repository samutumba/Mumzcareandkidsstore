import Image from "next/image";
import axios from "axios";
import { NextPage, GetServerSideProps } from "next";
import {

  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { UseProductData } from "../../hooks/StoreProvider";

interface IProductItemPageProps {
    id : string
}

type Data = {
  id: string
}

export const ProductItemPage: NextPage<IProductItemPageProps> = ({ id }) => {
    const items = UseProductData();

    return <div className=""></div>;
};

