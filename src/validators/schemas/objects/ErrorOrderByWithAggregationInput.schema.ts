// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { ErrorCountOrderByAggregateInputObjectSchema } from '../internals';;
import { ErrorMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { ErrorMinOrderByAggregateInputObjectSchema } from '../internals';

export const ErrorOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  message: SortOrderSchema,  content: SortOrderSchema,  updatedAt: SortOrderSchema,  createdAt: SortOrderSchema,  _count: ErrorCountOrderByAggregateInputObjectSchema,  _max: ErrorMaxOrderByAggregateInputObjectSchema,  _min: ErrorMinOrderByAggregateInputObjectSchema
});
