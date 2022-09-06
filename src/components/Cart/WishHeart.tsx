import { useCallback, useMemo } from "react"
import { useRecoilState, useSetRecoilState } from "recoil"
import { authModalState, fetchUserState, loadingState, userState } from "../../atoms"
import { INewCart,  IProduct } from "../../types"
import { Icon } from '@iconify/react';
import toast from "react-hot-toast";
import { API } from "../../api/https";
import { Tooltip } from "flowbite-react";

export const WishListHeart: React.FC<{
 product: IProduct
}> = ({ product }) => {
 const [user, setUser] = useRecoilState(userState)
  const setAuthOpen = useSetRecoilState(authModalState)
  const [fetchUser, setFetchUser] = useRecoilState(fetchUserState)
  const setLoading = useSetRecoilState(loadingState)
 
 const included = useMemo(() => {
  if (!user) {
   return false
  }
   const wishlist = user?.wishList
   
    const filter = wishlist.filter((it) =>
    it.product._id == product._id
  )

   if (filter.length > 0) {
     return true
   } else {
      return false
  
  }

 }, [user])

 const handleClick = useCallback(() => {
  if (!user) {
    toast.error("Please Sign In To Add To WishList")
   setAuthOpen(true)
   return;
  }

  setLoading(true)
  if (included) {
   const wishlist = user.wishList

   const filtered: INewCart[] = wishlist.filter((list) => list.product._id !== product._id).map((fil) => { 
    return {
     ...fil,
     product: fil.product._id
    }
   })

   API.updateList({ list: "Wishlist", cart: filtered }).then(res => {
    toast('Removed From Wishlist', {
  icon: '💔',
});
     setFetchUser(!fetchUser)
     setLoading(false)
   }).catch(err => {
    toast.error(err.respsonse.data.message)
    setLoading(false)
   })
   
   
  } else {
   const wishlist = user?.wishList

   const filtered: INewCart[] = wishlist.map((fil) => { 
    return {
     ...fil,
     product: fil.product._id
    }
   })

   const newItem: INewCart = {
    product: product._id,
    quantity: 1
   }

    API.updateList({ list: "Wishlist", cart: [...filtered, newItem ] }).then(res => {
      setFetchUser(!fetchUser)
    toast('Added to Wishlist', {
  icon: '❤️',
});
setLoading(false)
   }).catch(err => {
setLoading(false)
   })
   
  }

 }, [included, user, product, fetchUser])

 if (included) {
   return (
     <Tooltip content="Remove from Wishlist"><button onClick={handleClick} className="p-3 text-md text-red-600 hover:text-white text-center rounded-full hover:bg-gum">
   <Icon icon="clarity:heart-solid" inline />
  </button></Tooltip>)
 }
 
  return (
    <Tooltip content="Add To Wishlist"><button onClick={handleClick} className="p-3 text-md text-gray-800 text-center hover:text-white hover:font-bold rounded-full hover:bg-rose">
  <Icon icon="clarity:heart-line" />
 </button></Tooltip>)
}