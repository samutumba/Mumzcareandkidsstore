import * as Yup from 'yup';
import { ReviewWhereInputObjectSchema, ReviewOrderByWithAggregationInputObjectSchema, ReviewScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { ReviewScalarFieldEnumSchema } from './internals'

export const ReviewGroupBySchema = Yup.object({ where: ReviewWhereInputObjectSchema, orderBy: ReviewOrderByWithAggregationInputObjectSchema, having: ReviewScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(ReviewScalarFieldEnumSchema).required()  }).required()