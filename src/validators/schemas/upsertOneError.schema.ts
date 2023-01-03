import * as Yup from 'yup';
import { ErrorWhereUniqueInputObjectSchema, ErrorCreateInputObjectSchema, ErrorUpdateInputObjectSchema } from './internals'

export const ErrorUpsertSchema = Yup.object({ where: ErrorWhereUniqueInputObjectSchema, data: ErrorCreateInputObjectSchema, update: ErrorUpdateInputObjectSchema  }).required()