import * as Yup from 'yup';
import { AdminWhereInputObjectSchema, AdminOrderByWithRelationInputObjectSchema, AdminWhereUniqueInputObjectSchema } from './internals'

export const AdminAggregateSchema = Yup.object({ where: AdminWhereInputObjectSchema, orderBy: AdminOrderByWithRelationInputObjectSchema, cursor: AdminWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()