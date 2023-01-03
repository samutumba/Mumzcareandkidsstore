import * as Yup from 'yup';
import { CartWhereInputObjectSchema, CartOrderByWithAggregationInputObjectSchema, CartScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { CartScalarFieldEnumSchema } from './internals'

export const CartGroupBySchema = Yup.object({ where: CartWhereInputObjectSchema, orderBy: CartOrderByWithAggregationInputObjectSchema, having: CartScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(CartScalarFieldEnumSchema).required()  }).required()