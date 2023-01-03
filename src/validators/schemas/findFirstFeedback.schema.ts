import * as Yup from 'yup';
import { FeedbackWhereInputObjectSchema, FeedbackOrderByWithRelationInputObjectSchema, FeedbackWhereUniqueInputObjectSchema } from './internals';
import { FeedbackScalarFieldEnumSchema } from './internals'

export const FeedbackFindFirstSchema = Yup.object({ where: FeedbackWhereInputObjectSchema, orderBy: FeedbackOrderByWithRelationInputObjectSchema, cursor: FeedbackWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(FeedbackScalarFieldEnumSchema) }).required()