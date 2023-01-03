import * as Yup from 'yup';
import { CartItemWhereInputObjectSchema, CartItemOrderByWithAggregationInputObjectSchema, CartItemScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { CartItemScalarFieldEnumSchema } from './internals'

export const CartItemGroupBySchema = Yup.object({ where: CartItemWhereInputObjectSchema, orderBy: CartItemOrderByWithAggregationInputObjectSchema, having: CartItemScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(CartItemScalarFieldEnumSchema).required()  }).required()