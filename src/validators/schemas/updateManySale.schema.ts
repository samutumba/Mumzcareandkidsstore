import * as Yup from 'yup';
import { SaleUpdateManyMutationInputObjectSchema, SaleWhereInputObjectSchema } from './internals'

export const SaleUpdateManySchema = Yup.object({ data: SaleUpdateManyMutationInputObjectSchema, where: SaleWhereInputObjectSchema  }).required()