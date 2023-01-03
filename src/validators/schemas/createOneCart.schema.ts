import * as Yup from 'yup';
import { CartCreateInputObjectSchema } from './internals'

export const CartCreateSchema = Yup.object({ data: CartCreateInputObjectSchema  }).required()