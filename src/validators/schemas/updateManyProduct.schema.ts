import * as Yup from 'yup';
import { ProductUpdateManyMutationInputObjectSchema, ProductWhereInputObjectSchema } from './internals'

export const ProductUpdateManySchema = Yup.object({ data: ProductUpdateManyMutationInputObjectSchema, where: ProductWhereInputObjectSchema  }).required()