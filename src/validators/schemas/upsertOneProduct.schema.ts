import * as Yup from 'yup';
import { ProductWhereUniqueInputObjectSchema, ProductCreateInputObjectSchema, ProductUpdateInputObjectSchema } from './internals'

export const ProductUpsertSchema = Yup.object({ where: ProductWhereUniqueInputObjectSchema, data: ProductCreateInputObjectSchema, update: ProductUpdateInputObjectSchema  }).required()