// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SaleCreateWithoutUserInputObjectSchema } from '../internals';;
import { SaleUncheckedCreateWithoutUserInputObjectSchema } from '../internals';;
import { SaleCreateOrConnectWithoutUserInputObjectSchema } from '../internals';;
import { SaleUpsertWithWhereUniqueWithoutUserInputObjectSchema } from '../internals';;
import { SaleCreateManyUserInputEnvelopeObjectSchema } from '../internals';;
import { SaleWhereUniqueInputObjectSchema } from '../internals';;
import { SaleUpdateWithWhereUniqueWithoutUserInputObjectSchema } from '../internals';;
import { SaleUpdateManyWithWhereWithoutUserInputObjectSchema } from '../internals';;
import { SaleScalarWhereInputObjectSchema } from '../internals';

export const SaleUncheckedUpdateManyWithoutUserNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([SaleCreateWithoutUserInputObjectSchema,
Yup.array().of(SaleCreateWithoutUserInputObjectSchema),
SaleUncheckedCreateWithoutUserInputObjectSchema,
Yup.array().of(SaleUncheckedCreateWithoutUserInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([SaleCreateOrConnectWithoutUserInputObjectSchema,
Yup.array().of(SaleCreateOrConnectWithoutUserInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([SaleUpsertWithWhereUniqueWithoutUserInputObjectSchema,
Yup.array().of(SaleUpsertWithWhereUniqueWithoutUserInputObjectSchema)]),  createMany: SaleCreateManyUserInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([SaleWhereUniqueInputObjectSchema,
Yup.array().of(SaleWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([SaleWhereUniqueInputObjectSchema,
Yup.array().of(SaleWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([SaleWhereUniqueInputObjectSchema,
Yup.array().of(SaleWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([SaleWhereUniqueInputObjectSchema,
Yup.array().of(SaleWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([SaleUpdateWithWhereUniqueWithoutUserInputObjectSchema,
Yup.array().of(SaleUpdateWithWhereUniqueWithoutUserInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([SaleUpdateManyWithWhereWithoutUserInputObjectSchema,
Yup.array().of(SaleUpdateManyWithWhereWithoutUserInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([SaleScalarWhereInputObjectSchema,
Yup.array().of(SaleScalarWhereInputObjectSchema)])
});
