import * as Yup from 'yup';
import { CartUpdateInputObjectSchema, CartWhereUniqueInputObjectSchema } from './internals'

export const CartUpdateOneSchema = Yup.object({ data: CartUpdateInputObjectSchema, where: CartWhereUniqueInputObjectSchema  }).required()