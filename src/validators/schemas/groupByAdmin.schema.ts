import * as Yup from 'yup';
import { AdminWhereInputObjectSchema, AdminOrderByWithAggregationInputObjectSchema, AdminScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { AdminScalarFieldEnumSchema } from './internals'

export const AdminGroupBySchema = Yup.object({ where: AdminWhereInputObjectSchema, orderBy: AdminOrderByWithAggregationInputObjectSchema, having: AdminScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(AdminScalarFieldEnumSchema).required()  }).required()