import * as Yup from 'yup';
import { CartWhereInputObjectSchema } from './internals'

export const CartDeleteManySchema = Yup.object({ CartWhereInputObjectSchema  }).required()