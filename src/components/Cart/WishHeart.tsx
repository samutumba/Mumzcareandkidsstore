import { useCallback, useMemo } from "react"
import { useRecoilState, useSetRecoilState } from "recoil"
import { authModalState, fetchUserState, loadingState, userState } from "../../atoms"
import { INewCart, Product } from "../../types"
import { Icon } from '@iconify/react';
import toast from "react-hot-toast";
import { API } from "../../api/https";
import { Tooltip } from "flowbite-react";

export const WishListHeart: React.FC<{
  product: Product
}> = ({ product }) => {
  const [user, setUser] = useRecoilState(userState)
  const setAuthOpen = useSetRecoilState(authModalState)
  const [fetchUser, setFetchUser] = useRecoilState(fetchUserState)
  const setLoading = useSetRecoilState(loadingState)

  const included = useMemo(() => {
    if (!user)
    {
      return false
    }
    const wishlist = user?.Wishlist

    const filter = wishlist?.items.filter((it) =>
      it.product.id == product.id
    )

    if (filter && filter?.length > 0)
    {
      return true
    } else
    {
      return false

    }

  }, [user])

  const handleClick = useCallback(() => {
    if (!user)
    {
      toast("Please Sign In To Add To WishList", { icon: '⛔' })
      setAuthOpen(true)
      return;
    }

    setLoading(true)
    if (included)
    {

      API.updateWishlist({
        command: "DELETE",
        productID: product.id,
        quantity: 1
      }).then(res => {
        toast('Removed From WishList', {
          icon: '💔',
        });
        setFetchUser(!fetchUser)
        setLoading(false)
      }).catch(err => {
        setLoading(false)
        toast.error(err.respsonse.data.message)
      })

    } else
    {

      API.updateWishlist({
        command: "UPDATE",
        productID: product.id,
        quantity: 1
      }).then(res => {
        toast('Added to WishList', {
          icon: '❤️',
        });
        setFetchUser(!fetchUser)
        setLoading(false)
      }).catch(err => {
        setLoading(false)
        toast.error(err.respsonse.data.message)
      })

    }

  }, [included, user, product, fetchUser])

  if (included)
  {
    return (
      <Tooltip content="Remove from Wishlist"><button title="button" onClick={handleClick} className="p-3 text-md text-red-600 hover:text-white text-center rounded-full hover:bg-gum">
        <Icon icon="clarity:heart-solid" inline />
      </button></Tooltip>)
  }

  return (
    <Tooltip content="Add To Wishlist"><button title="button" onClick={handleClick} className="p-3 text-md text-gray-800 text-center hover:text-white hover:font-bold rounded-full hover:bg-rose">
      <Icon icon="clarity:heart-line" />
    </button></Tooltip>)
}