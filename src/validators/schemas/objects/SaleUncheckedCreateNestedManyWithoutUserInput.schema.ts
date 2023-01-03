// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SaleCreateWithoutUserInputObjectSchema } from '../internals';;
import { SaleUncheckedCreateWithoutUserInputObjectSchema } from '../internals';;
import { SaleCreateOrConnectWithoutUserInputObjectSchema } from '../internals';;
import { SaleCreateManyUserInputEnvelopeObjectSchema } from '../internals';;
import { SaleWhereUniqueInputObjectSchema } from '../internals';

export const SaleUncheckedCreateNestedManyWithoutUserInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([SaleCreateWithoutUserInputObjectSchema,
Yup.array().of(SaleCreateWithoutUserInputObjectSchema),
SaleUncheckedCreateWithoutUserInputObjectSchema,
Yup.array().of(SaleUncheckedCreateWithoutUserInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([SaleCreateOrConnectWithoutUserInputObjectSchema,
Yup.array().of(SaleCreateOrConnectWithoutUserInputObjectSchema)]),  createMany: SaleCreateManyUserInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([SaleWhereUniqueInputObjectSchema,
Yup.array().of(SaleWhereUniqueInputObjectSchema)])
});
