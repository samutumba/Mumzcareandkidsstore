// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const CartMinOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  updatedAt: SortOrderSchema,  createdAt: SortOrderSchema,  usersId: SortOrderSchema
});
