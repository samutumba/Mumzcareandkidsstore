import { useEffect, useMemo } from "react"
import { FullViewProduct, Layout, ProductCarousel } from "../components"
import { useProductQuery } from "../hooks"
import {  useNavigate, useParams
} from "react-router-dom";
import toast from "react-hot-toast";
import { ProductFilter } from "../utils/filter";
import { ISort } from "../types";
import { useSetRecoilState } from "recoil";
import { loadingState } from "../atoms";


export const ProductPage = () => {
 const navigate = useNavigate()
 const productData = useProductQuery()
 const { id } = useParams();
 const setLoading = useSetRecoilState(loadingState)

 const product = useMemo(() => {
  return productData.data ?
   ProductFilter(productData.data, {_id: id}).at(0) :
   undefined

 }, [productData])
  
  useEffect(() => {
    if (!product) {
      setLoading(true)
    } else {
      setLoading(false)
    }
  }, [product])

 if (!id) {
  toast.error("Sorry! No product was found")
  navigate("/")
  return(<></>)
 }

 return (<Layout>
  {
   product && <div className="my-9 mx-9 h-full min-h-[40rem]">
    <FullViewProduct {...product} />
    <ProductCarousel title="RECOMMENDED" filter={{ category: [product.category], subCategory: [product.subCategory]}} sort={ISort.newest} />
   </div>
  }
 </Layout>)
}