// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { ProductCountOrderByAggregateInputObjectSchema } from '../internals';;
import { ProductAvgOrderByAggregateInputObjectSchema } from '../internals';;
import { ProductMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { ProductMinOrderByAggregateInputObjectSchema } from '../internals';;
import { ProductSumOrderByAggregateInputObjectSchema } from '../internals';

export const ProductOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  v: SortOrderSchema,  basePrice: SortOrderSchema,  brand: SortOrderSchema,  category: SortOrderSchema,  createdAt: SortOrderSchema,  description: SortOrderSchema,  enabled: SortOrderSchema,  keywords: SortOrderSchema,  maxAge: SortOrderSchema,  minAge: SortOrderSchema,  subCategory: SortOrderSchema,  title: SortOrderSchema,  updatedAt: SortOrderSchema,  _count: ProductCountOrderByAggregateInputObjectSchema,  _avg: ProductAvgOrderByAggregateInputObjectSchema,  _max: ProductMaxOrderByAggregateInputObjectSchema,  _min: ProductMinOrderByAggregateInputObjectSchema,  _sum: ProductSumOrderByAggregateInputObjectSchema
});
