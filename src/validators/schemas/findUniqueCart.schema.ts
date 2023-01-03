import * as Yup from 'yup';
import { CartWhereUniqueInputObjectSchema } from './internals'

export const CartFindUniqueSchema = Yup.object({ where: CartWhereUniqueInputObjectSchema }).required()