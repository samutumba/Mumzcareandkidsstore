import * as Yup from 'yup';
import { FeedbackCreateInputObjectSchema } from './internals'

export const FeedbackCreateSchema = Yup.object({ data: FeedbackCreateInputObjectSchema  }).required()