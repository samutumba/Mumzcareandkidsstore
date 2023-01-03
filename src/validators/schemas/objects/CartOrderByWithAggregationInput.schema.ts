// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { CartCountOrderByAggregateInputObjectSchema } from '../internals';;
import { CartMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { CartMinOrderByAggregateInputObjectSchema } from '../internals';

export const CartOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  updatedAt: SortOrderSchema,  createdAt: SortOrderSchema,  usersId: SortOrderSchema,  _count: CartCountOrderByAggregateInputObjectSchema,  _max: CartMaxOrderByAggregateInputObjectSchema,  _min: CartMinOrderByAggregateInputObjectSchema
});
