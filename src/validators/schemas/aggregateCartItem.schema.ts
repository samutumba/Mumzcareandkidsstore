import * as Yup from 'yup';
import { CartItemWhereInputObjectSchema, CartItemOrderByWithRelationInputObjectSchema, CartItemWhereUniqueInputObjectSchema } from './internals'

export const CartItemAggregateSchema = Yup.object({ where: CartItemWhereInputObjectSchema, orderBy: CartItemOrderByWithRelationInputObjectSchema, cursor: CartItemWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()