import * as Yup from 'yup';
import { FeedbackUpdateManyMutationInputObjectSchema, FeedbackWhereInputObjectSchema } from './internals'

export const FeedbackUpdateManySchema = Yup.object({ data: FeedbackUpdateManyMutationInputObjectSchema, where: FeedbackWhereInputObjectSchema  }).required()