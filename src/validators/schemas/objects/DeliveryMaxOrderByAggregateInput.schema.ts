// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const DeliveryMaxOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  v: SortOrderSchema,  service: SortOrderSchema,  status: SortOrderSchema,  updatedAt: SortOrderSchema,  createdAt: SortOrderSchema
});
