import * as Yup from 'yup';
import { ItemWhereInputObjectSchema, ItemOrderByWithAggregationInputObjectSchema, ItemScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { ItemScalarFieldEnumSchema } from './internals'

export const ItemGroupBySchema = Yup.object({ where: ItemWhereInputObjectSchema, orderBy: ItemOrderByWithAggregationInputObjectSchema, having: ItemScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(ItemScalarFieldEnumSchema).required()  }).required()