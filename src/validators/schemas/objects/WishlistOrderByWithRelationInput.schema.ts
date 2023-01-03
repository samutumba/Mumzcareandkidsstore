// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { CartItemOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { UserOrderByWithRelationInputObjectSchema } from '../internals';

export const WishlistOrderByWithRelationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  items: CartItemOrderByRelationAggregateInputObjectSchema,  updatedAt: SortOrderSchema,  createdAt: SortOrderSchema,  usersId: SortOrderSchema,  users: UserOrderByWithRelationInputObjectSchema
});
