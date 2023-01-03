// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PickupWhereUniqueInputObjectSchema } from '../internals';;
import { PickupCreateWithoutLocationInputObjectSchema } from '../internals';;
import { PickupUncheckedCreateWithoutLocationInputObjectSchema } from '../internals';

export const PickupCreateOrConnectWithoutLocationInputObjectSchema = Yup.object({
    where: PickupWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([PickupCreateWithoutLocationInputObjectSchema,
PickupUncheckedCreateWithoutLocationInputObjectSchema])
});
