import * as Yup from 'yup';
import { ErrorWhereUniqueInputObjectSchema } from './internals'

export const ErrorFindUniqueSchema = Yup.object({ where: ErrorWhereUniqueInputObjectSchema }).required()