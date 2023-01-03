import * as Yup from 'yup';
import { ErrorUpdateManyMutationInputObjectSchema, ErrorWhereInputObjectSchema } from './internals'

export const ErrorUpdateManySchema = Yup.object({ data: ErrorUpdateManyMutationInputObjectSchema, where: ErrorWhereInputObjectSchema  }).required()