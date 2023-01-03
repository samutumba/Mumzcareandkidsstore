import * as Yup from 'yup';
import { SaleWhereInputObjectSchema, SaleOrderByWithAggregationInputObjectSchema, SaleScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { SaleScalarFieldEnumSchema } from './internals'

export const SaleGroupBySchema = Yup.object({ where: SaleWhereInputObjectSchema, orderBy: SaleOrderByWithAggregationInputObjectSchema, having: SaleScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(SaleScalarFieldEnumSchema).required()  }).required()