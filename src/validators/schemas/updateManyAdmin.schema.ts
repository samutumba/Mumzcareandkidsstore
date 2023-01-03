import * as Yup from 'yup';
import { AdminUpdateManyMutationInputObjectSchema, AdminWhereInputObjectSchema } from './internals'

export const AdminUpdateManySchema = Yup.object({ data: AdminUpdateManyMutationInputObjectSchema, where: AdminWhereInputObjectSchema  }).required()