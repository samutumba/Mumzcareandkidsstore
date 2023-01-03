import * as Yup from 'yup';
import { AdminUpdateInputObjectSchema, AdminWhereUniqueInputObjectSchema } from './internals'

export const AdminUpdateOneSchema = Yup.object({ data: AdminUpdateInputObjectSchema, where: AdminWhereUniqueInputObjectSchema  }).required()