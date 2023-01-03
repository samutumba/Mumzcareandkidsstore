import * as Yup from 'yup';
import { CartItemWhereUniqueInputObjectSchema } from './internals'

export const CartItemDeleteOneSchema = Yup.object({ where: CartItemWhereUniqueInputObjectSchema  }).required()