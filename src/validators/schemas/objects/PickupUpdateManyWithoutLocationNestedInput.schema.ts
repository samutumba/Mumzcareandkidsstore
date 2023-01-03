// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PickupCreateWithoutLocationInputObjectSchema } from '../internals';;
import { PickupUncheckedCreateWithoutLocationInputObjectSchema } from '../internals';;
import { PickupCreateOrConnectWithoutLocationInputObjectSchema } from '../internals';;
import { PickupUpsertWithWhereUniqueWithoutLocationInputObjectSchema } from '../internals';;
import { PickupCreateManyLocationInputEnvelopeObjectSchema } from '../internals';;
import { PickupWhereUniqueInputObjectSchema } from '../internals';;
import { PickupUpdateWithWhereUniqueWithoutLocationInputObjectSchema } from '../internals';;
import { PickupUpdateManyWithWhereWithoutLocationInputObjectSchema } from '../internals';;
import { PickupScalarWhereInputObjectSchema } from '../internals';

export const PickupUpdateManyWithoutLocationNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([PickupCreateWithoutLocationInputObjectSchema,
Yup.array().of(PickupCreateWithoutLocationInputObjectSchema),
PickupUncheckedCreateWithoutLocationInputObjectSchema,
Yup.array().of(PickupUncheckedCreateWithoutLocationInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([PickupCreateOrConnectWithoutLocationInputObjectSchema,
Yup.array().of(PickupCreateOrConnectWithoutLocationInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([PickupUpsertWithWhereUniqueWithoutLocationInputObjectSchema,
Yup.array().of(PickupUpsertWithWhereUniqueWithoutLocationInputObjectSchema)]),  createMany: PickupCreateManyLocationInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([PickupWhereUniqueInputObjectSchema,
Yup.array().of(PickupWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([PickupWhereUniqueInputObjectSchema,
Yup.array().of(PickupWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([PickupWhereUniqueInputObjectSchema,
Yup.array().of(PickupWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([PickupWhereUniqueInputObjectSchema,
Yup.array().of(PickupWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([PickupUpdateWithWhereUniqueWithoutLocationInputObjectSchema,
Yup.array().of(PickupUpdateWithWhereUniqueWithoutLocationInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([PickupUpdateManyWithWhereWithoutLocationInputObjectSchema,
Yup.array().of(PickupUpdateManyWithWhereWithoutLocationInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([PickupScalarWhereInputObjectSchema,
Yup.array().of(PickupScalarWhereInputObjectSchema)])
});
