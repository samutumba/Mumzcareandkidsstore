import * as Yup from 'yup';
import { AdminWhereInputObjectSchema, AdminOrderByWithRelationInputObjectSchema, AdminWhereUniqueInputObjectSchema } from './internals';
import { AdminScalarFieldEnumSchema } from './internals'

export const AdminFindFirstSchema = Yup.object({ where: AdminWhereInputObjectSchema, orderBy: AdminOrderByWithRelationInputObjectSchema, cursor: AdminWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(AdminScalarFieldEnumSchema) }).required()