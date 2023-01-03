import { useCallback, useEffect, useMemo, useState } from "react"
import { useRecoilState, useSetRecoilState } from "recoil"
import { authModalState, fetchUserState, loadingState, userState } from "../../atoms"
import { Detail, INewCart, Product } from "../../types"
import { Icon } from '@iconify/react';
import toast from "react-hot-toast";
import { API } from "../../api/https";


interface UpdateCart {
    command: "UPDATE" | "DELETE",
    productID: string,
    detial?: Detail,
    quantity: number
}

export const CartUpdate: React.FC<{
    product: Product,
    quantity?: number,
    view: "xl" | "sm",
    color?: string,
    material?: string,
    model?: string,
    size?: string,
    showQuantity?: boolean
}> = ({ product, quantity, view, color, material, model, size, showQuantity }) => {
    const [user, setUser] = useRecoilState(userState)
    const setAuthOpen = useSetRecoilState(authModalState)
    const [amount, setAmount] = useState(quantity || user?.Cart?.items.filter((it) => {
        return it.product.id == product.id
    }).at(0)?.quantity || 1)
    const [fetchUser, setFetchUser] = useRecoilState(fetchUserState)
    const setLoading = useSetRecoilState(loadingState)

    const included = useMemo(() => {
        if (!user) {
            return false
        }
        const cart = user?.Cart

        const filter = cart?.items.filter((it) => {
            return it.product.id == product.id
        }).at(0)

        if (filter) {
            return true
        } else {
            return false
        }

    }, [user])

    const handleClick = useCallback(() => {
        if (!user) {
            toast("Please Sign In To Add Items To Cart", { icon: '⛔' })
            setAuthOpen(true)
            return;
        }

        setLoading(true);

        if (included)
        {

            API.updateCart({
                command: "DELETE",
                productID: product.id,
            }).then(res => {
                toast('Removed From Cart', {
                    icon: '🛒',
                });
                setFetchUser(!fetchUser)
                setLoading(false)
            }).catch(err => {
                toast.error(err.respsonse.data.message)
                setLoading(false)
            })

        } else {
            API.updateCart({
                command: "UPDATE",
                quantity: quantity || amount,
                productID: product.id,
                detial: {
                    color, material, model, size
                }

            }).then(res => {
                setLoading(false)
                setFetchUser(!fetchUser)
                toast.custom((t) => (
                    <div
                        className={`${t.visible ? 'animate-enter' : 'animate-leave'
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
                ), {
                    duration: 6000,
                })
            }).catch(err => {
                setLoading(false)
            })



        }

    }, [included, user, product, amount, fetchUser])

    useEffect(() => {
        if (user && included && (quantity !== amount)) {
            API.updateCart({
                command: "UPDATE",
                productID: product.id,
                quantity: amount
            }).then(res => {
                setFetchUser(!fetchUser)
            }).catch(err => {
                toast.error(err.respsonse.data.message)
            })
         }
    }, [amount])




    if (included) {
        return (<div className="flex flex-row gap-2 items-center">
            <button onClick={handleClick} className="p-3 text-md text-black text-center">
                <Icon icon="fluent:delete-24-regular" inline />
            </button>
            <div className="flex flex-row font-bold">
                <button onClick={() => setAmount(amount + 1)} className="bg-base font-bold w-5 ">+</button><p className="flex border-y-2 border-base justify-center items-center p-1 w-6">{amount}</p><button onClick={() => setAmount(amount - 1)} disabled={amount <= 1} className="bg-base w-5 font-bold"> - </button>
            </div>
        </div>)
    }

    return (<> <button onClick={handleClick} className={`bg-gum border border-base font-semibold border-1 rounded-full  px-5 ${view == "xl" ? "py-4 text-md" : "py-1 text-xs"} max-w-sm`}>
        ADD TO CART
    </button>
        {
            showQuantity && <div className="flex flex-row font-bold">
                <button onClick={() => setAmount(amount + 1)} className="bg-base font-bold w-5 ">+</button><p className="flex border-y-2 border-base justify-center items-center p-1 w-6">{amount}</p><button onClick={() => setAmount(amount - 1)} disabled={amount <= 1} className="bg-base w-5 font-bold"> - </button>
            </div>
        }
    </>)
}