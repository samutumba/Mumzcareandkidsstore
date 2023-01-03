import * as Yup from 'yup';
import { AdminWhereInputObjectSchema } from './internals'

export const AdminDeleteManySchema = Yup.object({ AdminWhereInputObjectSchema  }).required()