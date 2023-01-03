// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TransactionCreateManySalesInputObjectSchema } from '../internals';

export const TransactionCreateManySalesInputEnvelopeObjectSchema = Yup.object({
    data: Yup.array().of(TransactionCreateManySalesInputObjectSchema)
});
