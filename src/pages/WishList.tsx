import React from "react"
import { useMemo } from "react"
import toast from "react-hot-toast"
import { Navigate, useNavigate } from "react-router-dom"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { authModalState, loadingState, userState } from "../atoms"
import { CartView, Layout, ProductCarousel, SectionTitle } from "../components"
import { SignInButton } from "../components/Auth"
import { ISort } from "../types"

export const WishListPage = () => {
    const user = useRecoilValue(userState)
    const setAuthModal = useSetRecoilState(authModalState)
    const setLoading = useSetRecoilState(loadingState)
    const navigate = useNavigate()

    const wishListItems = useMemo(() => {
        setLoading(true)

        if (!user) {
             setLoading(false)
            return []
        }

        const wishlist = user.wishList
        
        setLoading(false)
        return wishlist
    }, [user])

    if (!user) {
        toast("Sign in to View Wishlist", {
            icon: '💔'
        })
        setAuthModal(true)
        return(<Navigate to="/" />)
    }

    return (<Layout>
        <div className="h-full flex flex-col gap-2 justify-center px-2 ">
            <SectionTitle title="My WishLIST" />
              {
             (!user || wishListItems.length === 0) && <div className="h-full flex-grow flex flex-col mb-3 items-center">
                 <img src="/images/emptyWishList.png" alt="" className="px-3 max-h-80 h-full" />
                 <h3 className="mx-auto mt-3 text-xl font-semibold text-center w-full">{ !user ? <SignInButton /> : "Your Wish List is Empty"}</h3>
             </div>
         }
            {
                wishListItems.map((list, i) => <div className="flex-col h-full w-full max-w-xl mx-auto my-2 flex justify-center" key={i}>
                    <CartView {...list} />
                </div>)
            }

            {
                 wishListItems.length > 0 && <ProductCarousel title="RECOMMENDED" filter={{ category: wishListItems.flatMap((p) => p.product.category), subCategory: wishListItems.flatMap((p) => p.product.subCategory)}} sort={ISort.featured} />
            }
            
        </div>
    </Layout>)
}