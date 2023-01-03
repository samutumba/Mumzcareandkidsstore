import * as Yup from 'yup';
import { FeedbackWhereUniqueInputObjectSchema, FeedbackCreateInputObjectSchema, FeedbackUpdateInputObjectSchema } from './internals'

export const FeedbackUpsertSchema = Yup.object({ where: FeedbackWhereUniqueInputObjectSchema, data: FeedbackCreateInputObjectSchema, update: FeedbackUpdateInputObjectSchema  }).required()