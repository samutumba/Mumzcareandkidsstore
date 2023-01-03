// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const ReviewCountOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  rating: SortOrderSchema,  description: SortOrderSchema,  updatedAt: SortOrderSchema,  createdAt: SortOrderSchema,  productsId: SortOrderSchema,  usersId: SortOrderSchema
});
