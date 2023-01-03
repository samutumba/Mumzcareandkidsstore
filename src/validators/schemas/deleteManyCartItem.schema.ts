import * as Yup from 'yup';
import { CartItemWhereInputObjectSchema } from './internals'

export const CartItemDeleteManySchema = Yup.object({ CartItemWhereInputObjectSchema  }).required()