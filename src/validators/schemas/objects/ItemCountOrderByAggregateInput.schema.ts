// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const ItemCountOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  v: SortOrderSchema,  color: SortOrderSchema,  material: SortOrderSchema,  size: SortOrderSchema,  model: SortOrderSchema,  sold: SortOrderSchema,  updatedAt: SortOrderSchema,  createdAt: SortOrderSchema,  salesId: SortOrderSchema,  productsId: SortOrderSchema
});
