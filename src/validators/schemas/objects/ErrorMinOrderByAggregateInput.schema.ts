// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const ErrorMinOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  message: SortOrderSchema,  updatedAt: SortOrderSchema,  createdAt: SortOrderSchema
});
