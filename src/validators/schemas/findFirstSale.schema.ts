import * as Yup from 'yup';
import { SaleWhereInputObjectSchema, SaleOrderByWithRelationInputObjectSchema, SaleWhereUniqueInputObjectSchema } from './internals';
import { SaleScalarFieldEnumSchema } from './internals'

export const SaleFindFirstSchema = Yup.object({ where: SaleWhereInputObjectSchema, orderBy: SaleOrderByWithRelationInputObjectSchema, cursor: SaleWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(SaleScalarFieldEnumSchema) }).required()