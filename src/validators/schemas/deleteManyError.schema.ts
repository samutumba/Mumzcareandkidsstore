import * as Yup from 'yup';
import { ErrorWhereInputObjectSchema } from './internals'

export const ErrorDeleteManySchema = Yup.object({ ErrorWhereInputObjectSchema  }).required()