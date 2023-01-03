import * as Yup from 'yup';
import { ReviewWhereUniqueInputObjectSchema } from './internals'

export const ReviewFindUniqueSchema = Yup.object({ where: ReviewWhereUniqueInputObjectSchema }).required()