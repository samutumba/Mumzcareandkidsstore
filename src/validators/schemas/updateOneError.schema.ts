import * as Yup from 'yup';
import { ErrorUpdateInputObjectSchema, ErrorWhereUniqueInputObjectSchema } from './internals'

export const ErrorUpdateOneSchema = Yup.object({ data: ErrorUpdateInputObjectSchema, where: ErrorWhereUniqueInputObjectSchema  }).required()