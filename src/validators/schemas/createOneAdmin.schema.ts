import * as Yup from 'yup';
import { AdminCreateInputObjectSchema } from './internals'

export const AdminCreateSchema = Yup.object({ data: AdminCreateInputObjectSchema  }).required()