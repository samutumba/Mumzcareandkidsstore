import * as Yup from 'yup';
import { ReviewUpdateManyMutationInputObjectSchema, ReviewWhereInputObjectSchema } from './internals'

export const ReviewUpdateManySchema = Yup.object({ data: ReviewUpdateManyMutationInputObjectSchema, where: ReviewWhereInputObjectSchema  }).required()