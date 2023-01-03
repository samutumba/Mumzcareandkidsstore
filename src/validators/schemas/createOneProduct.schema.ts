import * as Yup from 'yup';
import { ProductCreateInputObjectSchema } from './internals'

export const ProductCreateSchema = Yup.object({ data: ProductCreateInputObjectSchema  }).required()