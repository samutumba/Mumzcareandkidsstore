// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PickupWhereUniqueInputObjectSchema } from '../internals';;
import { PickupCreateWithoutUserInputObjectSchema } from '../internals';;
import { PickupUncheckedCreateWithoutUserInputObjectSchema } from '../internals';

export const PickupCreateOrConnectWithoutUserInputObjectSchema = Yup.object({
    where: PickupWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([PickupCreateWithoutUserInputObjectSchema,
PickupUncheckedCreateWithoutUserInputObjectSchema])
});
