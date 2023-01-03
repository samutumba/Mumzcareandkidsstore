import * as Yup from 'yup';
import { ReviewWhereUniqueInputObjectSchema, ReviewCreateInputObjectSchema, ReviewUpdateInputObjectSchema } from './internals'

export const ReviewUpsertSchema = Yup.object({ where: ReviewWhereUniqueInputObjectSchema, data: ReviewCreateInputObjectSchema, update: ReviewUpdateInputObjectSchema  }).required()