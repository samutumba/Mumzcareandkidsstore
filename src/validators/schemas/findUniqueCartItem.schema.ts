import * as Yup from 'yup';
import { CartItemWhereUniqueInputObjectSchema } from './internals'

export const CartItemFindUniqueSchema = Yup.object({ where: CartItemWhereUniqueInputObjectSchema }).required()