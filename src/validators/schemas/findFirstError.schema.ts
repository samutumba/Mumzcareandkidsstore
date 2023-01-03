import * as Yup from 'yup';
import { ErrorWhereInputObjectSchema, ErrorOrderByWithRelationInputObjectSchema, ErrorWhereUniqueInputObjectSchema } from './internals';
import { ErrorScalarFieldEnumSchema } from './internals'

export const ErrorFindFirstSchema = Yup.object({ where: ErrorWhereInputObjectSchema, orderBy: ErrorOrderByWithRelationInputObjectSchema, cursor: ErrorWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(ErrorScalarFieldEnumSchema) }).required()