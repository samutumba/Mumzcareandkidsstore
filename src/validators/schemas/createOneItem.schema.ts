import * as Yup from 'yup';
import { ItemCreateInputObjectSchema } from './internals'

export const ItemCreateSchema = Yup.object({ data: ItemCreateInputObjectSchema  }).required()