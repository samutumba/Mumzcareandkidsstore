import { useCallback, useEffect, useMemo, useState } from "react"
import { useRecoilState, useSetRecoilState } from "recoil"
import { authModalState, fetchUserState, loadingState, userState } from "../../atoms"
import { INewCart,  IProduct } from "../../types"
import { Icon } from '@iconify/react';
import toast from "react-hot-toast";
import { API } from "../../api/https";

export const CartUpdate: React.FC<{
 product: IProduct,
 quantity?: number,
 view: "xl" | "sm",
 color?: string,
 material?: string,
 model?: string,
 size?: string,
 showQuantity?: boolean
}> = ({ product, quantity,view,  color, material, model, size, showQuantity }) => {
 const [user, setUser] = useRecoilState(userState)
 const setAuthOpen = useSetRecoilState(authModalState)
    const [amount, setAmount] = useState(quantity || user?.cart?.filter((it) => {
   return it.product._id == product._id
  }).at(0)?.quantity || 1)
    const [fetchUser, setFetchUser] = useRecoilState(fetchUserState)
      const setLoading = useSetRecoilState(loadingState)
 
 const included = useMemo(() => {
  if (!user) {
   return false
  }
  const cart = user?.cart

  const filter = cart.filter((it) => {
   return it.product._id == product._id
  }).at(0)

  if (filter) {
   return true
  } else {
   return false
  }

 }, [user])

 const handleClick = useCallback(() => {
  if (!user) {
   toast.success("Please Sign In To Add Items To Cart")
   setAuthOpen(true)
   return;
     }
     
     setLoading(true)

  if (included) {
   const cart = user.cart

   const filtered: INewCart[] = cart.filter((list) => list.product._id !== product._id).map((fil) => { 
    return {
     ...fil,
     product: fil.product._id
    }
   })

   API.updateList({ list: "Cart", cart: filtered }).then(res => {
    toast('Removed From cart', {
  icon: '🛒',
});
       setFetchUser(!fetchUser)
       setLoading(false)
   }).catch(err => {
    setLoading(false)
    toast.error(err.respsonse.data.message)
   })
   
   
  } else {
   const cart = user?.cart

   const filtered: INewCart[] = cart.map((fil) => { 
    return {
     ...fil,
     product: fil.product._id
    }
   })

   const newItem: INewCart = {
    product: product._id,
    quantity: quantity || amount,
    color, material, model, size
   }

      API.updateList({ list: "Cart", cart: [...filtered, newItem] }).then(res => {
        setLoading(false)
          setFetchUser(!fetchUser)
    toast.custom((t) => (
            <div
                className={`${
                t.visible ? 'animate-enter' : 'animate-leave'
                } max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
       >
        
                <div className="flex-1 w-0 p-2">
                <div className="flex items-start">
                    <div className="flex-shrink-0 pt-0.5">
                    <img
                        className="h-14 w-14 rounded-lg"
                        src={product.images?.at(0)?.link}
                        alt=""
                    />
                    </div>
                    <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                 {product.title}
                 
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                        {res.data.message}
                    </p>
                    </div>
                </div>
                </div>
                <div className="flex border-l border-gray-200">
                <button
                    onClick={() => toast.dismiss(t.id)}
                    className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-rose hover:text-gum focus:outline-none focus:ring-2 focus:ring-rose"
                >
                    Dismiss
                </button>
                </div>
            </div>
            ),  {
    duration: 6000,
      })
   }).catch(err => {
setLoading(false)
   })
   
  }

 }, [included, user, product, amount, fetchUser])
    
    useEffect(() => {
    if (user && included) {
        const cart = user?.cart
setLoading(true)

         const filter = cart.filter((it) => it.product._id === product._id).at(0)

        if (!filter || filter.quantity == amount) {
            setLoading(false)
            return;
        }
   const filtered: INewCart[] = cart.filter((it) => it.product._id !== product._id).map((fil) => { 
    return {
     ...fil,
     product: fil.product._id
    }
   })

   const newItem: INewCart = {
    product: product._id,
    quantity: amount,
    color, material, model, size
        }
        
         API.updateList({ list: "Cart", cart: [...filtered, newItem ] }).then(res => {
            setFetchUser(!fetchUser)
            setLoading(false)
         }).catch(err => {
             toast.error(err.response.data.message)
             setLoading(false)
            })
     }
 }, [amount])




 if (included) {
     return (<div className="flex flex-row gap-2 items-center">
         <button onClick={handleClick} className="p-3 text-md text-black text-center">
   <Icon icon="fluent:delete-24-regular" inline />
  </button>
   <div className="flex flex-row font-bold">
         <button onClick={() => setAmount(amount+1)} className="bg-base font-bold w-5 ">+</button><p className="flex border-y-2 border-base justify-center items-center p-1 w-6">{amount}</p><button onClick={() => setAmount(amount-1)} disabled={amount <= 1} className="bg-base w-5 font-bold"> - </button>
       </div>
    </div>)
 }
 
    return (<> <button onClick={handleClick} className={`bg-gum border border-base font-semibold border-1 rounded-full  px-5 ${view == "xl" ? "py-4 text-md" : "py-1 text-xs"} max-w-sm`}>
    ADD TO CART
    </button>
        {
        showQuantity && <div className="flex flex-row font-bold">
         <button onClick={() => setAmount(amount+1)} className="bg-base font-bold w-5 ">+</button><p className="flex border-y-2 border-base justify-center items-center p-1 w-6">{amount}</p><button onClick={() => setAmount(amount-1)} disabled={amount <= 1} className="bg-base w-5 font-bold"> - </button>
       </div>
    }
       </>)
}