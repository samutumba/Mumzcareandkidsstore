import * as Yup from 'yup';
import { ItemWhereUniqueInputObjectSchema, ItemCreateInputObjectSchema, ItemUpdateInputObjectSchema } from './internals'

export const ItemUpsertSchema = Yup.object({ where: ItemWhereUniqueInputObjectSchema, data: ItemCreateInputObjectSchema, update: ItemUpdateInputObjectSchema  }).required()