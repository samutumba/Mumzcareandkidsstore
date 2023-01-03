import * as Yup from 'yup';
import { ItemWhereUniqueInputObjectSchema } from './internals'

export const ItemDeleteOneSchema = Yup.object({ where: ItemWhereUniqueInputObjectSchema  }).required()