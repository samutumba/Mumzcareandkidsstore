import * as Yup from 'yup';
import { ReviewWhereUniqueInputObjectSchema } from './internals'

export const ReviewDeleteOneSchema = Yup.object({ where: ReviewWhereUniqueInputObjectSchema  }).required()