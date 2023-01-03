// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { TransactionCountOrderByAggregateInputObjectSchema } from '../internals';;
import { TransactionAvgOrderByAggregateInputObjectSchema } from '../internals';;
import { TransactionMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { TransactionMinOrderByAggregateInputObjectSchema } from '../internals';;
import { TransactionSumOrderByAggregateInputObjectSchema } from '../internals';

export const TransactionOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  title: SortOrderSchema,  mode: SortOrderSchema,  amount: SortOrderSchema,  payment_fee: SortOrderSchema,  transaction_id: SortOrderSchema,  txt_ref: SortOrderSchema,  isExpense: SortOrderSchema,  updatedAt: SortOrderSchema,  createdAt: SortOrderSchema,  salesId: SortOrderSchema,  _count: TransactionCountOrderByAggregateInputObjectSchema,  _avg: TransactionAvgOrderByAggregateInputObjectSchema,  _max: TransactionMaxOrderByAggregateInputObjectSchema,  _min: TransactionMinOrderByAggregateInputObjectSchema,  _sum: TransactionSumOrderByAggregateInputObjectSchema
});
