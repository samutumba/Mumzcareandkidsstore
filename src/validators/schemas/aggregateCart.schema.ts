import * as Yup from 'yup';
import { CartWhereInputObjectSchema, CartOrderByWithRelationInputObjectSchema, CartWhereUniqueInputObjectSchema } from './internals'

export const CartAggregateSchema = Yup.object({ where: CartWhereInputObjectSchema, orderBy: CartOrderByWithRelationInputObjectSchema, cursor: CartWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()