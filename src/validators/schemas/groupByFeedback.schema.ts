import * as Yup from 'yup';
import { FeedbackWhereInputObjectSchema, FeedbackOrderByWithAggregationInputObjectSchema, FeedbackScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { FeedbackScalarFieldEnumSchema } from './internals'

export const FeedbackGroupBySchema = Yup.object({ where: FeedbackWhereInputObjectSchema, orderBy: FeedbackOrderByWithAggregationInputObjectSchema, having: FeedbackScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(FeedbackScalarFieldEnumSchema).required()  }).required()