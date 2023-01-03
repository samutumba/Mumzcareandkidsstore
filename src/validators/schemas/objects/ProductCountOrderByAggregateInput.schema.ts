// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const ProductCountOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  v: SortOrderSchema,  basePrice: SortOrderSchema,  brand: SortOrderSchema,  category: SortOrderSchema,  createdAt: SortOrderSchema,  description: SortOrderSchema,  enabled: SortOrderSchema,  keywords: SortOrderSchema,  maxAge: SortOrderSchema,  minAge: SortOrderSchema,  subCategory: SortOrderSchema,  title: SortOrderSchema,  updatedAt: SortOrderSchema
});
