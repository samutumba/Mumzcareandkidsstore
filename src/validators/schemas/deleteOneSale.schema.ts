import * as Yup from 'yup';
import { SaleWhereUniqueInputObjectSchema } from './internals'

export const SaleDeleteOneSchema = Yup.object({ where: SaleWhereUniqueInputObjectSchema  }).required()