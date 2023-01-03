// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const SaleMaxOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  reference: SortOrderSchema,  updatedAt: SortOrderSchema,  createdAt: SortOrderSchema,  usersId: SortOrderSchema
});
