import * as Yup from 'yup';
import { FeedbackWhereUniqueInputObjectSchema } from './internals'

export const FeedbackFindUniqueSchema = Yup.object({ where: FeedbackWhereUniqueInputObjectSchema }).required()