import * as Yup from 'yup';
import { ReviewCreateInputObjectSchema } from './internals'

export const ReviewCreateSchema = Yup.object({ data: ReviewCreateInputObjectSchema  }).required()