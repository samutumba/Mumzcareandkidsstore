import * as Yup from 'yup';
import { ItemUpdateInputObjectSchema, ItemWhereUniqueInputObjectSchema } from './internals'

export const ItemUpdateOneSchema = Yup.object({ data: ItemUpdateInputObjectSchema, where: ItemWhereUniqueInputObjectSchema  }).required()