import * as Yup from 'yup';
import { ProductWhereInputObjectSchema, ProductOrderByWithAggregationInputObjectSchema, ProductScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { ProductScalarFieldEnumSchema } from './internals'

export const ProductGroupBySchema = Yup.object({ where: ProductWhereInputObjectSchema, orderBy: ProductOrderByWithAggregationInputObjectSchema, having: ProductScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(ProductScalarFieldEnumSchema).required()  }).required()