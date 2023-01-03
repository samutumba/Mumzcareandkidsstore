import * as Yup from 'yup';
import { ProductWhereInputObjectSchema, ProductOrderByWithRelationInputObjectSchema, ProductWhereUniqueInputObjectSchema } from './internals'

export const ProductAggregateSchema = Yup.object({ where: ProductWhereInputObjectSchema, orderBy: ProductOrderByWithRelationInputObjectSchema, cursor: ProductWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()