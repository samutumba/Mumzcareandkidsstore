// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { FeedbackCountOrderByAggregateInputObjectSchema } from '../internals';;
import { FeedbackMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { FeedbackMinOrderByAggregateInputObjectSchema } from '../internals';

export const FeedbackOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  message: SortOrderSchema,  updatedAt: SortOrderSchema,  createdAt: SortOrderSchema,  inquiriesId: SortOrderSchema,  adminsId: SortOrderSchema,  _count: FeedbackCountOrderByAggregateInputObjectSchema,  _max: FeedbackMaxOrderByAggregateInputObjectSchema,  _min: FeedbackMinOrderByAggregateInputObjectSchema
});
