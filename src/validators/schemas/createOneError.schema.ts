import * as Yup from 'yup';
import { ErrorCreateInputObjectSchema } from './internals'

export const ErrorCreateSchema = Yup.object({ data: ErrorCreateInputObjectSchema  }).required()