import * as Yup from 'yup';
import { FeedbackWhereInputObjectSchema, FeedbackOrderByWithRelationInputObjectSchema, FeedbackWhereUniqueInputObjectSchema } from './internals'

export const FeedbackAggregateSchema = Yup.object({ where: FeedbackWhereInputObjectSchema, orderBy: FeedbackOrderByWithRelationInputObjectSchema, cursor: FeedbackWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()