import * as Yup from 'yup';
import { SaleWhereInputObjectSchema } from './internals'

export const SaleDeleteManySchema = Yup.object({ SaleWhereInputObjectSchema  }).required()