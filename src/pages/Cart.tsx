import React, { useMemo } from "react"
import { useRecoilState } from "recoil"
import { cartState } from "../atoms"
import { Layout, ProductCarousel, ProductCartPreview, SectionTitle } from "../components"
import { useProductQuery } from "../hooks"
import { IProduct, ISort } from "../types"
import { ProductFilter } from "../utils/filter"
import { Format } from "../utils/formatter"

export const CartPage = () => {
    const [cart, setCart] = useRecoilState(cartState)
     const productData = useProductQuery()

    const product = useMemo(() => {
        return productData.data ?
        ProductFilter(productData.data, { }) :
        []

    }, [productData])

    const subtotal = useMemo(() => {
        let total = 0;
        const pro: IProduct[] = []
        product.length > 0 &&
            cart.forEach((item) => {
                const prod = ProductFilter(productData.data, { _id: item.productID }).at(0) 
                if (prod) {
                    total = total + ( prod.basePrice * item.quantity)
                }
               
        })

        return total
    }, [cart, product])

    return (<Layout>
        <SectionTitle title="My Cart" />
        <div className="flex flex-row gap-3 justify-center">
            {
                cart.map((item, i) => 
                    <React.Fragment key={i}>
                        <ProductCartPreview {...item} />
                    </React.Fragment>      
                )
            }
        </div>
        <div className="mx-auto w-full max-w-md rounded-xl bg-gray-200 border-1 border-darkBase flex flex-col p-5 font-semibold ">
            <table className="mb-7">
                <tr>
                    <td>SUBTOTAL :</td>
                    <td>{Format.currency(subtotal)}</td>
                </tr>
                <tr>
                    <td>TRANSACTION FEE :</td>
                    <td>{Format.currency(4000)}</td>
                </tr>
                <tr>
                    <td>TOTAL :</td>
                    <td>{Format.currency(subtotal + 4000)}</td>
                </tr>
            </table>
          
            <button className="py-2 rounded-xl mx-auto text-center px-10 bg-gum border-gray border text-rose">
                CHECKOUT
            </button>
        </div>
       
        <ProductCarousel title="RECOMMENDED" filter={{ category: product.flatMap((p) => p.category), subCategory: product.flatMap((p) => p.subCategory)}} sort={ISort.newest} />
    </Layout>)
}

