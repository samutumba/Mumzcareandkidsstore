import * as Yup from 'yup';
import { FeedbackUpdateInputObjectSchema, FeedbackWhereUniqueInputObjectSchema } from './internals'

export const FeedbackUpdateOneSchema = Yup.object({ data: FeedbackUpdateInputObjectSchema, where: FeedbackWhereUniqueInputObjectSchema  }).required()