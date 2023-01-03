// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const ErrorCountOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  message: SortOrderSchema,  content: SortOrderSchema,  updatedAt: SortOrderSchema,  createdAt: SortOrderSchema
});
