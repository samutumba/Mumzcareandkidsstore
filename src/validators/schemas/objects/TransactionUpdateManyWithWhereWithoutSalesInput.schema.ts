// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TransactionScalarWhereInputObjectSchema } from '../internals';;
import { TransactionUpdateManyMutationInputObjectSchema } from '../internals';;
import { TransactionUncheckedUpdateManyWithoutPaymentsInputObjectSchema } from '../internals';

export const TransactionUpdateManyWithWhereWithoutSalesInputObjectSchema = Yup.object({
    where: TransactionScalarWhereInputObjectSchema,  data: Yup.mixed().oneOfSchemas([TransactionUpdateManyMutationInputObjectSchema,
TransactionUncheckedUpdateManyWithoutPaymentsInputObjectSchema])
});
