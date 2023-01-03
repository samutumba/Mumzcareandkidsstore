import * as Yup from 'yup';
import { CartItemWhereInputObjectSchema, CartItemOrderByWithRelationInputObjectSchema, CartItemWhereUniqueInputObjectSchema } from './internals';
import { CartItemScalarFieldEnumSchema } from './internals'

export const CartItemFindManySchema = Yup.object({ where: CartItemWhereInputObjectSchema, orderBy: CartItemOrderByWithRelationInputObjectSchema, cursor: CartItemWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(CartItemScalarFieldEnumSchema)  }).required()