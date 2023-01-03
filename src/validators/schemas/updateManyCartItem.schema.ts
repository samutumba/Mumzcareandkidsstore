import * as Yup from 'yup';
import { CartItemUpdateManyMutationInputObjectSchema, CartItemWhereInputObjectSchema } from './internals'

export const CartItemUpdateManySchema = Yup.object({ data: CartItemUpdateManyMutationInputObjectSchema, where: CartItemWhereInputObjectSchema  }).required()