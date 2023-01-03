// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { CartItemCountOrderByAggregateInputObjectSchema } from '../internals';;
import { CartItemAvgOrderByAggregateInputObjectSchema } from '../internals';;
import { CartItemMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { CartItemMinOrderByAggregateInputObjectSchema } from '../internals';;
import { CartItemSumOrderByAggregateInputObjectSchema } from '../internals';

export const CartItemOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  quantity: SortOrderSchema,  cartId: SortOrderSchema,  productsId: SortOrderSchema,  salesId: SortOrderSchema,  wishlistId: SortOrderSchema,  _count: CartItemCountOrderByAggregateInputObjectSchema,  _avg: CartItemAvgOrderByAggregateInputObjectSchema,  _max: CartItemMaxOrderByAggregateInputObjectSchema,  _min: CartItemMinOrderByAggregateInputObjectSchema,  _sum: CartItemSumOrderByAggregateInputObjectSchema
});
