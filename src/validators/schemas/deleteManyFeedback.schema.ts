import * as Yup from 'yup';
import { FeedbackWhereInputObjectSchema } from './internals'

export const FeedbackDeleteManySchema = Yup.object({ FeedbackWhereInputObjectSchema  }).required()