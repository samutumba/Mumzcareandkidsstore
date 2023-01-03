import * as Yup from 'yup';
import { CartItemCreateInputObjectSchema } from './internals'

export const CartItemCreateSchema = Yup.object({ data: CartItemCreateInputObjectSchema  }).required()