// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TransactionWhereUniqueInputObjectSchema } from '../internals';;
import { TransactionUpdateWithoutSalesInputObjectSchema } from '../internals';;
import { TransactionUncheckedUpdateWithoutSalesInputObjectSchema } from '../internals';;
import { TransactionCreateWithoutSalesInputObjectSchema } from '../internals';;
import { TransactionUncheckedCreateWithoutSalesInputObjectSchema } from '../internals';

export const TransactionUpsertWithWhereUniqueWithoutSalesInputObjectSchema = Yup.object({
    where: TransactionWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([TransactionUpdateWithoutSalesInputObjectSchema,
TransactionUncheckedUpdateWithoutSalesInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([TransactionCreateWithoutSalesInputObjectSchema,
TransactionUncheckedCreateWithoutSalesInputObjectSchema])
});
