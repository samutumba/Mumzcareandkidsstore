// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PickupCreateWithoutLocationInputObjectSchema } from '../internals';;
import { PickupUncheckedCreateWithoutLocationInputObjectSchema } from '../internals';;
import { PickupCreateOrConnectWithoutLocationInputObjectSchema } from '../internals';;
import { PickupCreateManyLocationInputEnvelopeObjectSchema } from '../internals';;
import { PickupWhereUniqueInputObjectSchema } from '../internals';

export const PickupUncheckedCreateNestedManyWithoutLocationInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([PickupCreateWithoutLocationInputObjectSchema,
Yup.array().of(PickupCreateWithoutLocationInputObjectSchema),
PickupUncheckedCreateWithoutLocationInputObjectSchema,
Yup.array().of(PickupUncheckedCreateWithoutLocationInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([PickupCreateOrConnectWithoutLocationInputObjectSchema,
Yup.array().of(PickupCreateOrConnectWithoutLocationInputObjectSchema)]),  createMany: PickupCreateManyLocationInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([PickupWhereUniqueInputObjectSchema,
Yup.array().of(PickupWhereUniqueInputObjectSchema)])
});
