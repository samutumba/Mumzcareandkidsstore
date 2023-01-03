import * as Yup from 'yup';
import { ProductWhereUniqueInputObjectSchema } from './internals'

export const ProductDeleteOneSchema = Yup.object({ where: ProductWhereUniqueInputObjectSchema  }).required()