import { useEffect, useState } from "react"
import { FullViewProduct, Layout, ProductCarousel, Review } from "../components"
import { useProductQuery } from "../hooks"
import {
  useNavigate, useParams, Navigate
} from "react-router-dom";
import toast from "react-hot-toast";
import { ProductFilter } from "../utils/filter";
import { ISort, Product } from "../types";
import { useSetRecoilState } from "recoil";
import { loadingState } from "../atoms";
import { API } from "../api/https";
import { SEO } from "../components/SEO";


export const ProductPage = () => {
  const [product, setProduct] = useState<Product>()
  const [rating, setRating] = useState<any[]>([])
  const [items, setItems] = useState<any[]>([])
  const navigate = useNavigate()
  const productData = useProductQuery()
  const { id } = useParams();
  const setLoading = useSetRecoilState(loadingState)

  useEffect(() => {
    if (!product) {
      setLoading(true)
    } else {
      setLoading(false)
    }
  }, [product])

  useEffect(() => {

    if (id) {
      API.getProductPage(id).then((res) => {
        setProduct(res.data.product)
      })
    }

  }, [id])

  if (!id) {
    toast.error("Sorry! No product was found")
    return (<Navigate to="/" />)
  }

  return (<Layout>
    <SEO
      title={`${product?.brand} ${product?.title}`}
      description={product?.description}
      keywords={product?.keywords}
      image={product?.images.at(0)?.link}
    />
    {
      product && <div className="my-9 mx-9 h-full min-h-[40rem]">
        <FullViewProduct product={product} items={items} />
        <Review reviews={rating} />
        <ProductCarousel title="RECOMMENDED" filter={{ category: [product.category], subCategory: [product.subCategory] }} sort={ISort.newest} />

      </div>
    }
  </Layout>)
}