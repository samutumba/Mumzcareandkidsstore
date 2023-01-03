import * as Yup from 'yup';
import { ErrorWhereInputObjectSchema, ErrorOrderByWithRelationInputObjectSchema, ErrorWhereUniqueInputObjectSchema } from './internals'

export const ErrorAggregateSchema = Yup.object({ where: ErrorWhereInputObjectSchema, orderBy: ErrorOrderByWithRelationInputObjectSchema, cursor: ErrorWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()