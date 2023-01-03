import * as Yup from 'yup';
import { CartWhereInputObjectSchema, CartOrderByWithRelationInputObjectSchema, CartWhereUniqueInputObjectSchema } from './internals';
import { CartScalarFieldEnumSchema } from './internals'

export const CartFindFirstSchema = Yup.object({ where: CartWhereInputObjectSchema, orderBy: CartOrderByWithRelationInputObjectSchema, cursor: CartWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(CartScalarFieldEnumSchema) }).required()