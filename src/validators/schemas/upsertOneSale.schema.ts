import * as Yup from 'yup';
import { SaleWhereUniqueInputObjectSchema, SaleCreateInputObjectSchema, SaleUpdateInputObjectSchema } from './internals'

export const SaleUpsertSchema = Yup.object({ where: SaleWhereUniqueInputObjectSchema, data: SaleCreateInputObjectSchema, update: SaleUpdateInputObjectSchema  }).required()