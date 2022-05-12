import { ProductType } from "../../types";
import Image from "next/image";
import { UseProductValue } from "../../hooks/StoreProvider";
import Link from "next/link";

interface IProductPreviewProps {
  product: ProductType;
};

/**Component displaying a card preview of a product */
export const ProductPreview: React.FC<IProductPreviewProps> = ({product}) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
          <Link href={`/product/${product._id}`}></Link>
          <figure>
            <Image
              src={product.image}
              alt={product.title}
              width={24}
              height={24}
              placeholder="blur"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {product.title.substring(0, 10)}...
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>${product.price}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{product.category}</div>
            </div>
          </div>
        </div>
    );
}

/**Component displaying Maximized Product details */
export const ProductDetails: React.FC<IProductPreviewProps> = ({product}) => {

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              alt=""
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://dummyimage.com/400x400"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest"></h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.title}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <div className="rating rating-sm">
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
              </div>
              <p className="leading-relaxed">{}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${product.price}
                </span>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


export const ProductSummary: React.FC<IProductPreviewProps> = ({product}) => {
    return (<></>)
}