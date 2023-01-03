import * as Yup from 'yup';
import { FeedbackWhereUniqueInputObjectSchema } from './internals'

export const FeedbackDeleteOneSchema = Yup.object({ where: FeedbackWhereUniqueInputObjectSchema  }).required()