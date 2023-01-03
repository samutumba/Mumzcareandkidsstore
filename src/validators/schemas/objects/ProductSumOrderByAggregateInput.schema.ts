// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const ProductSumOrderByAggregateInputObjectSchema = Yup.object({
    v: SortOrderSchema,  basePrice: SortOrderSchema,  maxAge: SortOrderSchema,  minAge: SortOrderSchema
});
