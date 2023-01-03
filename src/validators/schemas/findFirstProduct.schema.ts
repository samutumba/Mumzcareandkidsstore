import * as Yup from 'yup';
import { ProductWhereInputObjectSchema, ProductOrderByWithRelationInputObjectSchema, ProductWhereUniqueInputObjectSchema } from './internals';
import { ProductScalarFieldEnumSchema } from './internals'

export const ProductFindFirstSchema = Yup.object({ where: ProductWhereInputObjectSchema, orderBy: ProductOrderByWithRelationInputObjectSchema, cursor: ProductWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(ProductScalarFieldEnumSchema) }).required()