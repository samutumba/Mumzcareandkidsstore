import * as Yup from 'yup';
import { SaleCreateInputObjectSchema } from './internals'

export const SaleCreateSchema = Yup.object({ data: SaleCreateInputObjectSchema  }).required()