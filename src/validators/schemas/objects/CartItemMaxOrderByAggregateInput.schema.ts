// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const CartItemMaxOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  quantity: SortOrderSchema,  cartId: SortOrderSchema,  productsId: SortOrderSchema,  salesId: SortOrderSchema,  wishlistId: SortOrderSchema
});
