// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const TransactionMinOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  title: SortOrderSchema,  mode: SortOrderSchema,  amount: SortOrderSchema,  payment_fee: SortOrderSchema,  transaction_id: SortOrderSchema,  txt_ref: SortOrderSchema,  isExpense: SortOrderSchema,  updatedAt: SortOrderSchema,  createdAt: SortOrderSchema,  salesId: SortOrderSchema
});
