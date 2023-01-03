// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const TransactionSumOrderByAggregateInputObjectSchema = Yup.object({
    amount: SortOrderSchema,  payment_fee: SortOrderSchema
});
