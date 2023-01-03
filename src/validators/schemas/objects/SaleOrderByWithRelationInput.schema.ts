// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { UserOrderByWithRelationInputObjectSchema } from '../internals';;
import { TransactionOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { CartItemOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { ItemOrderByRelationAggregateInputObjectSchema } from '../internals';

export const SaleOrderByWithRelationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  reference: SortOrderSchema,  user: UserOrderByWithRelationInputObjectSchema,  payments: TransactionOrderByRelationAggregateInputObjectSchema,  products: CartItemOrderByRelationAggregateInputObjectSchema,  items: ItemOrderByRelationAggregateInputObjectSchema,  updatedAt: SortOrderSchema,  createdAt: SortOrderSchema,  usersId: SortOrderSchema,  itemsId: SortOrderSchema
});
