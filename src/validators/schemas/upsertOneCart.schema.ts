import * as Yup from 'yup';
import { CartWhereUniqueInputObjectSchema, CartCreateInputObjectSchema, CartUpdateInputObjectSchema } from './internals'

export const CartUpsertSchema = Yup.object({ where: CartWhereUniqueInputObjectSchema, data: CartCreateInputObjectSchema, update: CartUpdateInputObjectSchema  }).required()