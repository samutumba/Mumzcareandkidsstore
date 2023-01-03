import * as Yup from 'yup';
import { ErrorWhereInputObjectSchema, ErrorOrderByWithAggregationInputObjectSchema, ErrorScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { ErrorScalarFieldEnumSchema } from './internals'

export const ErrorGroupBySchema = Yup.object({ where: ErrorWhereInputObjectSchema, orderBy: ErrorOrderByWithAggregationInputObjectSchema, having: ErrorScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(ErrorScalarFieldEnumSchema).required()  }).required()