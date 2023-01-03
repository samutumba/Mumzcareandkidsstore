// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TransactionCreateWithoutSalesInputObjectSchema } from '../internals';;
import { TransactionUncheckedCreateWithoutSalesInputObjectSchema } from '../internals';;
import { TransactionCreateOrConnectWithoutSalesInputObjectSchema } from '../internals';;
import { TransactionUpsertWithWhereUniqueWithoutSalesInputObjectSchema } from '../internals';;
import { TransactionCreateManySalesInputEnvelopeObjectSchema } from '../internals';;
import { TransactionWhereUniqueInputObjectSchema } from '../internals';;
import { TransactionUpdateWithWhereUniqueWithoutSalesInputObjectSchema } from '../internals';;
import { TransactionUpdateManyWithWhereWithoutSalesInputObjectSchema } from '../internals';;
import { TransactionScalarWhereInputObjectSchema } from '../internals';

export const TransactionUpdateManyWithoutSalesNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([TransactionCreateWithoutSalesInputObjectSchema,
Yup.array().of(TransactionCreateWithoutSalesInputObjectSchema),
TransactionUncheckedCreateWithoutSalesInputObjectSchema,
Yup.array().of(TransactionUncheckedCreateWithoutSalesInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([TransactionCreateOrConnectWithoutSalesInputObjectSchema,
Yup.array().of(TransactionCreateOrConnectWithoutSalesInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([TransactionUpsertWithWhereUniqueWithoutSalesInputObjectSchema,
Yup.array().of(TransactionUpsertWithWhereUniqueWithoutSalesInputObjectSchema)]),  createMany: TransactionCreateManySalesInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([TransactionWhereUniqueInputObjectSchema,
Yup.array().of(TransactionWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([TransactionWhereUniqueInputObjectSchema,
Yup.array().of(TransactionWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([TransactionWhereUniqueInputObjectSchema,
Yup.array().of(TransactionWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([TransactionWhereUniqueInputObjectSchema,
Yup.array().of(TransactionWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([TransactionUpdateWithWhereUniqueWithoutSalesInputObjectSchema,
Yup.array().of(TransactionUpdateWithWhereUniqueWithoutSalesInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([TransactionUpdateManyWithWhereWithoutSalesInputObjectSchema,
Yup.array().of(TransactionUpdateManyWithWhereWithoutSalesInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([TransactionScalarWhereInputObjectSchema,
Yup.array().of(TransactionScalarWhereInputObjectSchema)])
});
