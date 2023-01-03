// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { ProductOrderByWithRelationInputObjectSchema } from '../internals';;
import { SaleOrderByRelationAggregateInputObjectSchema } from '../internals';

export const ItemOrderByWithRelationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  v: SortOrderSchema,  product: ProductOrderByWithRelationInputObjectSchema,  color: SortOrderSchema,  material: SortOrderSchema,  size: SortOrderSchema,  model: SortOrderSchema,  sold: SortOrderSchema,  updatedAt: SortOrderSchema,  createdAt: SortOrderSchema,  sales: SaleOrderByRelationAggregateInputObjectSchema,  salesId: SortOrderSchema,  productsId: SortOrderSchema
});
