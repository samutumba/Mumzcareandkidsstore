// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { WishlistCountOrderByAggregateInputObjectSchema } from '../internals';;
import { WishlistMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { WishlistMinOrderByAggregateInputObjectSchema } from '../internals';

export const WishlistOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  updatedAt: SortOrderSchema,  createdAt: SortOrderSchema,  usersId: SortOrderSchema,  _count: WishlistCountOrderByAggregateInputObjectSchema,  _max: WishlistMaxOrderByAggregateInputObjectSchema,  _min: WishlistMinOrderByAggregateInputObjectSchema
});
