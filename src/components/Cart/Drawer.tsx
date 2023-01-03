import { SwipeableDrawer } from "@mui/material"
import { useMemo, useState, useEffect } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { CartUpdate, CartView, SectionTitle } from ".."
import { cartDrawerState, userState } from "../../atoms"
import { Format } from "../../utils/formatter"
import { Link, useLocation } from "react-router-dom";

import { API } from "../../api/https"
import { SignInButton } from "../Auth"
import { Alert } from "flowbite-react"

export const CartDrawer = () => {
    const [open, setOpen] = useRecoilState(cartDrawerState)
    const user = useRecoilValue(userState)
    const [fee, setFee] = useState(0)

    const subtotal = useMemo(() => {
        let total = 0;

        user?.Cart?.items.forEach((cart) => {
            total += cart.product.basePrice * cart.quantity
        })

        return total;
    }, [user])

    useEffect(() => {
        API.getFee(subtotal).then((res) => {
            setFee(parseInt(res.data.fee))
        }).catch(err => {
            setFee(0)
        })
    }, [subtotal])


    return (<SwipeableDrawer
        anchor={'right'}
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
    >
        <div className="w-80 px-4 my-7 lg:w-[30rem] h-full flex flex-col pb-7 overscroll-contain font-p">
            <SectionTitle title="My Cart" />
            {
                (user && (((subtotal + fee) || 0) < 300000)) && <>
                    <Alert
                        color="warning"
                        rounded
                    >
                        <span>
                            <span className="font-semibold block text-xl font-title">
                                Shop Some More
                            </span>
                            {' '} Orders above <span className="font-semibold">{Format.currency(300000)}</span> get free shipping within Kampala, Wakiso and Mukono! Don't Miss Out
                        </span>
                    </Alert>
                </>
            }
            {
             (!user || user.Cart?.items?.length === 0) && <div className="h-full flex-grow flex flex-col mb-3 items-center">
                 <img src="/images/emptyCart.png" alt="" className="px-3" />
                 <h3 className="mx-auto mt-3 text-xl font-semibold text-center w-full">{ !user ? <SignInButton /> : "Your Cart is Empty"}</h3>
             </div>
            }
            {
                user?.Cart?.items.map((item) => <div className="flex-col w-full flex justify-center" key={item.id}>
                    <CartView {...item} />

                </div>)
            }
            <div className="mx-auto w-full max-w-md text-sm rounded-xl mt-5 bg-gray-200 border-1 border-darkBase flex flex-col p-5 font-semibold mb-6">
                <table className="mb-7">
                    <tbody>
                        <tr>
                            <td>SUBTOTAL :</td>
                            <td>{Format.currency(subtotal)}</td>
                        </tr>
                        <tr>
                            <td>TRANSACTION FEE :</td>
                            <td>{Format.currency((fee) || 0)}</td>
                        </tr>
                        <tr>
                            <td>TOTAL :</td>
                            <td>{Format.currency((subtotal + fee) || 0)}</td>
                        </tr>
                    </tbody>
                </table>

                <Link to="/checkout" className="py-2 rounded-xl mx-auto text-center  px-10 bg-gum border-gray border text-rose">
                    CHECKOUT
                </Link>
            </div>
        </div>

    </SwipeableDrawer>)
}