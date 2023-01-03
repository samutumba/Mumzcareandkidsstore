// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TransactionCreateWithoutSalesInputObjectSchema } from '../internals';;
import { TransactionUncheckedCreateWithoutSalesInputObjectSchema } from '../internals';;
import { TransactionCreateOrConnectWithoutSalesInputObjectSchema } from '../internals';;
import { TransactionCreateManySalesInputEnvelopeObjectSchema } from '../internals';;
import { TransactionWhereUniqueInputObjectSchema } from '../internals';

export const TransactionCreateNestedManyWithoutSalesInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([TransactionCreateWithoutSalesInputObjectSchema,
Yup.array().of(TransactionCreateWithoutSalesInputObjectSchema),
TransactionUncheckedCreateWithoutSalesInputObjectSchema,
Yup.array().of(TransactionUncheckedCreateWithoutSalesInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([TransactionCreateOrConnectWithoutSalesInputObjectSchema,
Yup.array().of(TransactionCreateOrConnectWithoutSalesInputObjectSchema)]),  createMany: TransactionCreateManySalesInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([TransactionWhereUniqueInputObjectSchema,
Yup.array().of(TransactionWhereUniqueInputObjectSchema)])
});
