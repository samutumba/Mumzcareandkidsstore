import * as Yup from 'yup';
import { ReviewUpdateInputObjectSchema, ReviewWhereUniqueInputObjectSchema } from './internals'

export const ReviewUpdateOneSchema = Yup.object({ data: ReviewUpdateInputObjectSchema, where: ReviewWhereUniqueInputObjectSchema  }).required()