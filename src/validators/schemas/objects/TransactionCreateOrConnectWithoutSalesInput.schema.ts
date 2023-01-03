// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TransactionWhereUniqueInputObjectSchema } from '../internals';;
import { TransactionCreateWithoutSalesInputObjectSchema } from '../internals';;
import { TransactionUncheckedCreateWithoutSalesInputObjectSchema } from '../internals';

export const TransactionCreateOrConnectWithoutSalesInputObjectSchema = Yup.object({
    where: TransactionWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([TransactionCreateWithoutSalesInputObjectSchema,
TransactionUncheckedCreateWithoutSalesInputObjectSchema])
});
