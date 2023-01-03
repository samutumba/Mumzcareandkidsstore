// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { DetailOrderByInputObjectSchema } from '../internals';;
import { FileOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { CartItemOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { ReviewOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { ItemOrderByRelationAggregateInputObjectSchema } from '../internals';

export const ProductOrderByWithRelationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  v: SortOrderSchema,  basePrice: SortOrderSchema,  brand: SortOrderSchema,  category: SortOrderSchema,  createdAt: SortOrderSchema,  description: SortOrderSchema,  detail: DetailOrderByInputObjectSchema,  enabled: SortOrderSchema,  images: FileOrderByRelationAggregateInputObjectSchema,  keywords: SortOrderSchema,  maxAge: SortOrderSchema,  minAge: SortOrderSchema,  subCategory: SortOrderSchema,  title: SortOrderSchema,  updatedAt: SortOrderSchema,  cartItem: CartItemOrderByRelationAggregateInputObjectSchema,  reviews: ReviewOrderByRelationAggregateInputObjectSchema,  items: ItemOrderByRelationAggregateInputObjectSchema
});
