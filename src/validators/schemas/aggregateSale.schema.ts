import * as Yup from 'yup';
import { SaleWhereInputObjectSchema, SaleOrderByWithRelationInputObjectSchema, SaleWhereUniqueInputObjectSchema } from './internals'

export const SaleAggregateSchema = Yup.object({ where: SaleWhereInputObjectSchema, orderBy: SaleOrderByWithRelationInputObjectSchema, cursor: SaleWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()