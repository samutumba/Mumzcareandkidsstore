import * as Yup from 'yup';
import { AdminWhereUniqueInputObjectSchema, AdminCreateInputObjectSchema, AdminUpdateInputObjectSchema } from './internals'

export const AdminUpsertSchema = Yup.object({ where: AdminWhereUniqueInputObjectSchema, data: AdminCreateInputObjectSchema, update: AdminUpdateInputObjectSchema  }).required()