import * as Yup from 'yup';
import { ItemUpdateManyMutationInputObjectSchema, ItemWhereInputObjectSchema } from './internals'

export const ItemUpdateManySchema = Yup.object({ data: ItemUpdateManyMutationInputObjectSchema, where: ItemWhereInputObjectSchema  }).required()