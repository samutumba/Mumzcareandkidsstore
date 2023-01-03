// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TransactionWhereUniqueInputObjectSchema } from '../internals';;
import { TransactionUpdateWithoutSalesInputObjectSchema } from '../internals';;
import { TransactionUncheckedUpdateWithoutSalesInputObjectSchema } from '../internals';

export const TransactionUpdateWithWhereUniqueWithoutSalesInputObjectSchema = Yup.object({
    where: TransactionWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([TransactionUpdateWithoutSalesInputObjectSchema,
TransactionUncheckedUpdateWithoutSalesInputObjectSchema])
});
