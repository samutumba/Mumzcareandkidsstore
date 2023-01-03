import * as Yup from 'yup';
import { ProductUpdateInputObjectSchema, ProductWhereUniqueInputObjectSchema } from './internals'

export const ProductUpdateOneSchema = Yup.object({ data: ProductUpdateInputObjectSchema, where: ProductWhereUniqueInputObjectSchema  }).required()