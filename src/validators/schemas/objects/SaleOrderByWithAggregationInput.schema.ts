// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { SaleCountOrderByAggregateInputObjectSchema } from '../internals';;
import { SaleMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { SaleMinOrderByAggregateInputObjectSchema } from '../internals';

export const SaleOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  reference: SortOrderSchema,  updatedAt: SortOrderSchema,  createdAt: SortOrderSchema,  usersId: SortOrderSchema,  itemsId: SortOrderSchema,  _count: SaleCountOrderByAggregateInputObjectSchema,  _max: SaleMaxOrderByAggregateInputObjectSchema,  _min: SaleMinOrderByAggregateInputObjectSchema
});
