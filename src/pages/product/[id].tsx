import { ProductDetails } from "../../components";
import { ProductType } from "../../types";
import {
  GetStaticProps,
  GetStaticPaths,
  NextPage,
  GetStaticPropsContext,
} from "next";
import { ParsedUrlQuery } from "querystring";
/*
interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths = async (): Promise<any> => {
  const products: ProductType[] = UseProductValue();

  const paths = products.map((item) => {
    return { id: item.id.toString() };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
): Promise<any> => {
  const { id } = context.params as Params;

  const products: ProductType[] = await UseProductValue();

  const item = products.map((item) => {
    if (item.id.toString() == id) {
      return item as ProductType;
    }
  });

  const product = item.at(0);

  return {
    product,
  };
};

*/
interface IDetailsPage {
  product: ProductType;
}

const DetailsPage: NextPage<IDetailsPage> = ({ product }) => {
  return (
    <>
      <h1>Product Page</h1>
      <ProductDetails product={product} />
    </>
  );
};

export default DetailsPage;
