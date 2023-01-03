import * as Yup from 'yup';
import { CartItemWhereUniqueInputObjectSchema, CartItemCreateInputObjectSchema, CartItemUpdateInputObjectSchema } from './internals'

export const CartItemUpsertSchema = Yup.object({ where: CartItemWhereUniqueInputObjectSchema, data: CartItemCreateInputObjectSchema, update: CartItemUpdateInputObjectSchema  }).required()