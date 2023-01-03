// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const TransactionAvgOrderByAggregateInputObjectSchema = Yup.object({
    amount: SortOrderSchema,  payment_fee: SortOrderSchema
});
