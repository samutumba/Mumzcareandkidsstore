import * as Yup from 'yup';
import { ItemWhereInputObjectSchema, ItemOrderByWithRelationInputObjectSchema, ItemWhereUniqueInputObjectSchema } from './internals'

export const ItemAggregateSchema = Yup.object({ where: ItemWhereInputObjectSchema, orderBy: ItemOrderByWithRelationInputObjectSchema, cursor: ItemWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()