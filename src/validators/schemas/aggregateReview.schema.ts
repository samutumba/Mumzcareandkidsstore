import * as Yup from 'yup';
import { ReviewWhereInputObjectSchema, ReviewOrderByWithRelationInputObjectSchema, ReviewWhereUniqueInputObjectSchema } from './internals'

export const ReviewAggregateSchema = Yup.object({ where: ReviewWhereInputObjectSchema, orderBy: ReviewOrderByWithRelationInputObjectSchema, cursor: ReviewWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()