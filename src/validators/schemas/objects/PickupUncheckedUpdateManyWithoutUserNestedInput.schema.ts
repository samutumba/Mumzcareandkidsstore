// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PickupCreateWithoutUserInputObjectSchema } from '../internals';;
import { PickupUncheckedCreateWithoutUserInputObjectSchema } from '../internals';;
import { PickupCreateOrConnectWithoutUserInputObjectSchema } from '../internals';;
import { PickupUpsertWithWhereUniqueWithoutUserInputObjectSchema } from '../internals';;
import { PickupCreateManyUserInputEnvelopeObjectSchema } from '../internals';;
import { PickupWhereUniqueInputObjectSchema } from '../internals';;
import { PickupUpdateWithWhereUniqueWithoutUserInputObjectSchema } from '../internals';;
import { PickupUpdateManyWithWhereWithoutUserInputObjectSchema } from '../internals';;
import { PickupScalarWhereInputObjectSchema } from '../internals';

export const PickupUncheckedUpdateManyWithoutUserNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([PickupCreateWithoutUserInputObjectSchema,
Yup.array().of(PickupCreateWithoutUserInputObjectSchema),
PickupUncheckedCreateWithoutUserInputObjectSchema,
Yup.array().of(PickupUncheckedCreateWithoutUserInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([PickupCreateOrConnectWithoutUserInputObjectSchema,
Yup.array().of(PickupCreateOrConnectWithoutUserInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([PickupUpsertWithWhereUniqueWithoutUserInputObjectSchema,
Yup.array().of(PickupUpsertWithWhereUniqueWithoutUserInputObjectSchema)]),  createMany: PickupCreateManyUserInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([PickupWhereUniqueInputObjectSchema,
Yup.array().of(PickupWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([PickupWhereUniqueInputObjectSchema,
Yup.array().of(PickupWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([PickupWhereUniqueInputObjectSchema,
Yup.array().of(PickupWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([PickupWhereUniqueInputObjectSchema,
Yup.array().of(PickupWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([PickupUpdateWithWhereUniqueWithoutUserInputObjectSchema,
Yup.array().of(PickupUpdateWithWhereUniqueWithoutUserInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([PickupUpdateManyWithWhereWithoutUserInputObjectSchema,
Yup.array().of(PickupUpdateManyWithWhereWithoutUserInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([PickupScalarWhereInputObjectSchema,
Yup.array().of(PickupScalarWhereInputObjectSchema)])
});
