import * as Yup from 'yup';
import { ProductWhereUniqueInputObjectSchema } from './internals'

export const ProductFindUniqueSchema = Yup.object({ where: ProductWhereUniqueInputObjectSchema }).required()