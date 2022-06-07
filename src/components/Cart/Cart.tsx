import toast from "react-hot-toast"
import { ICartItemType, ICartType } from "../../types"

export {}

/*
export function useCart() {
    const [cart, setCart] = useRecoilState(cartState)

    /**Function to add an item to the cart 
    const addToCart = (product: ICartItemType) =>{
        let newCart = cart
        if (newCart.items.includes(product)){          
            const index = newCart.items.indexOf(product)
            if (index != -1){
                newCart.items[index].quantity++
                setCart(newCart)
                toast.success("Item Added to Cart!")
                updateTotal()
                return true 
            }
        }else{
            newCart.items.push(product)
            setCart(newCart)
            toast.success("Item Added to Cart!")
            updateTotal()
            return true;
        }
        toast.error("Error! Item Not Added to Cart")
        toast.error("Try Again")
        return false;
    }

    /**Function to remove an item to the cart 
    const removeFromCart = (product: ICartItemType) => {
        let newCart = cart
        if (newCart.items.includes(product)) {
            const index = newCart.items.indexOf(product)
            if (index != -1) {
                newCart.items[index].quantity++
                setCart(newCart)
                toast.success("Item removed from cart!")
                updateTotal()
                return true;
            }
        }
        toast.error("Item not in cart")
        return false;
    }

    /**Function to update an item in the cart
    const updateItem = (product: ICartItemType) => {
        let newCart = cart
        if (newCart.items.includes(product)) {
            const index = newCart.items.indexOf(product)
            if (index != -1) {     
                newCart.items[index] = product
                setCart(newCart)
                toast.success("Item Added to Cart!")
                updateTotal()
                return true
            }

        }else{
            return addToCart(product)
        }
        toast.error("Error! Item not updated")
        return false;
    }

    /**Function to clear cart
    const resetCart = () => {
        const newCart: ICartType = {
            items: [],
            total: 0
        }
        setCart(newCart)
    }

    function updateTotal(){
        const cartTotal = cart.items.reduce((sum, value)=> sum + value.price, 0)
        let newCart = cart
        newCart.total = cartTotal
        setCart(newCart)
    }

    return ({
        cart,
        setCart,
        addToCart,
        removeFromCart,
        updateItem,
        resetCart
    })
}*/