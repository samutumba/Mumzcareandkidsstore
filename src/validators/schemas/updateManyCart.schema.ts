import * as Yup from 'yup';
import { CartUpdateManyMutationInputObjectSchema, CartWhereInputObjectSchema } from './internals'

export const CartUpdateManySchema = Yup.object({ data: CartUpdateManyMutationInputObjectSchema, where: CartWhereInputObjectSchema  }).required()