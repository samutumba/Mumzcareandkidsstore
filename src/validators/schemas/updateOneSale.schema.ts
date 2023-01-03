import * as Yup from 'yup';
import { SaleUpdateInputObjectSchema, SaleWhereUniqueInputObjectSchema } from './internals'

export const SaleUpdateOneSchema = Yup.object({ data: SaleUpdateInputObjectSchema, where: SaleWhereUniqueInputObjectSchema  }).required()