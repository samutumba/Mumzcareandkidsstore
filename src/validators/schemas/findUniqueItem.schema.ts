import * as Yup from 'yup';
import { ItemWhereUniqueInputObjectSchema } from './internals'

export const ItemFindUniqueSchema = Yup.object({ where: ItemWhereUniqueInputObjectSchema }).required()