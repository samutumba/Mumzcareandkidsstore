import * as Yup from 'yup';
import { ProductWhereInputObjectSchema } from './internals'

export const ProductDeleteManySchema = Yup.object({ ProductWhereInputObjectSchema  }).required()