import * as Yup from 'yup';
import { ErrorWhereUniqueInputObjectSchema } from './internals'

export const ErrorDeleteOneSchema = Yup.object({ where: ErrorWhereUniqueInputObjectSchema  }).required()