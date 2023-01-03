import * as Yup from 'yup';
import { ReviewWhereInputObjectSchema, ReviewOrderByWithRelationInputObjectSchema, ReviewWhereUniqueInputObjectSchema } from './internals';
import { ReviewScalarFieldEnumSchema } from './internals'

export const ReviewFindFirstSchema = Yup.object({ where: ReviewWhereInputObjectSchema, orderBy: ReviewOrderByWithRelationInputObjectSchema, cursor: ReviewWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(ReviewScalarFieldEnumSchema) }).required()