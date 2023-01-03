// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PickupCreateWithoutUserInputObjectSchema } from '../internals';;
import { PickupUncheckedCreateWithoutUserInputObjectSchema } from '../internals';;
import { PickupCreateOrConnectWithoutUserInputObjectSchema } from '../internals';;
import { PickupCreateManyUserInputEnvelopeObjectSchema } from '../internals';;
import { PickupWhereUniqueInputObjectSchema } from '../internals';

export const PickupUncheckedCreateNestedManyWithoutUserInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([PickupCreateWithoutUserInputObjectSchema,
Yup.array().of(PickupCreateWithoutUserInputObjectSchema),
PickupUncheckedCreateWithoutUserInputObjectSchema,
Yup.array().of(PickupUncheckedCreateWithoutUserInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([PickupCreateOrConnectWithoutUserInputObjectSchema,
Yup.array().of(PickupCreateOrConnectWithoutUserInputObjectSchema)]),  createMany: PickupCreateManyUserInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([PickupWhereUniqueInputObjectSchema,
Yup.array().of(PickupWhereUniqueInputObjectSchema)])
});
