import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
import { ActionType } from 'react-hot-toast/dist/core/store'
import { ICartItemType, ICartType } from '../../types'

const initialState: ICartItemType[] = []

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart: (state: ICartItemType[], action: PayloadAction<ICartItemType>) => {
            var newState: ICartItemType[] = []

            if (state.includes(action.payload)){
                state.map(
                    (item) => {
                        if (item._id !== action.payload._id){
                            newState.push(item)
                        }else {
                            toast.success("Item Added To Cart")
                            newState.push({
                                ...item,
                                quantity: item.quantity++
                            })
                        }
                    }
                )
            }else{
                toast.success("Item Added To Cart!")
                state.map(
                    (item)=> {
                        newState.push(item)
                    }
                )
                newState.push(action.payload)
            }

            return newState;
        },
        /**Reducer to Remove item from cart */
        removeFromCart: (state: ICartItemType[], action: PayloadAction<ICartItemType>) => {
            var newState: ICartItemType[] = []
            
            state.map(
                (item) => {
                    if(item._id === action.payload._id){
                        toast.success("Item removed!")
                    }else{
                        newState.push(item)
                    }
                }
            )

            return newState
        },
        /**Reducer to Update Cart */
        updateCart: (state: ICartItemType[], action: PayloadAction<ICartItemType>) => {
            var newState: ICartItemType[] = []

            if (state.includes(action.payload)) {
                state.map(
                    (item) => {
                        if (item._id !== action.payload._id) {
                            newState.push(item)
                        } else {
                            toast.success("Cart Updated")
                            newState.push(action.payload)
                        }
                    }
                )
            }
            else {
                addToCart(action.payload)
                newState = state
            }
            
            return newState

        },
        resetCart: (state: ICartItemType[]) => {
            toast.success("Cart Reset")
            return initialState
        }
    }
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, updateCart, resetCart } = cartSlice.actions

export default cartSlice.reducer