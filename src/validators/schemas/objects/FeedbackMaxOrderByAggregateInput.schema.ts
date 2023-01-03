// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const FeedbackMaxOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  message: SortOrderSchema,  updatedAt: SortOrderSchema,  createdAt: SortOrderSchema,  inquiriesId: SortOrderSchema,  adminsId: SortOrderSchema
});
