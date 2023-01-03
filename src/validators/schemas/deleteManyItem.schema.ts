import * as Yup from 'yup';
import { ItemWhereInputObjectSchema } from './internals'

export const ItemDeleteManySchema = Yup.object({ ItemWhereInputObjectSchema  }).required()