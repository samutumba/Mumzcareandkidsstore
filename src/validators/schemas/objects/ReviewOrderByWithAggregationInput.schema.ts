// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { ReviewCountOrderByAggregateInputObjectSchema } from '../internals';;
import { ReviewAvgOrderByAggregateInputObjectSchema } from '../internals';;
import { ReviewMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { ReviewMinOrderByAggregateInputObjectSchema } from '../internals';;
import { ReviewSumOrderByAggregateInputObjectSchema } from '../internals';

export const ReviewOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  rating: SortOrderSchema,  description: SortOrderSchema,  updatedAt: SortOrderSchema,  createdAt: SortOrderSchema,  productsId: SortOrderSchema,  usersId: SortOrderSchema,  _count: ReviewCountOrderByAggregateInputObjectSchema,  _avg: ReviewAvgOrderByAggregateInputObjectSchema,  _max: ReviewMaxOrderByAggregateInputObjectSchema,  _min: ReviewMinOrderByAggregateInputObjectSchema,  _sum: ReviewSumOrderByAggregateInputObjectSchema
});
