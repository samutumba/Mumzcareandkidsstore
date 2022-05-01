import Image from "next/image";
import axios from "axios";
import { NextPage, GetServerSideProps } from "next";
import {

  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { UseProductValue } from "../../hooks/StoreProvider";

interface IProductItemPageProps {
    id : string
}

type Data = {
  id: string
}

const ProductItemPage: NextPage<IProductItemPageProps> = ({ id }) => {
    const items = UseProductValue();

    return <div className=""></div>;
};

export default ProductItemPage
