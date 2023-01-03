import * as Yup from 'yup';
import { SaleWhereUniqueInputObjectSchema } from './internals'

export const SaleFindUniqueSchema = Yup.object({ where: SaleWhereUniqueInputObjectSchema }).required()