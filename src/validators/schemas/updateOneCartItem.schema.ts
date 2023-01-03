import * as Yup from 'yup';
import { CartItemUpdateInputObjectSchema, CartItemWhereUniqueInputObjectSchema } from './internals'

export const CartItemUpdateOneSchema = Yup.object({ data: CartItemUpdateInputObjectSchema, where: CartItemWhereUniqueInputObjectSchema  }).required()