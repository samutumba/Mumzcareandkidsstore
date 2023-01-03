import * as Yup from 'yup';
import { CartWhereUniqueInputObjectSchema } from './internals'

export const CartDeleteOneSchema = Yup.object({ where: CartWhereUniqueInputObjectSchema  }).required()