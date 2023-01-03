// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PickupWhereUniqueInputObjectSchema } from '../internals';;
import { PickupUpdateWithoutUserInputObjectSchema } from '../internals';;
import { PickupUncheckedUpdateWithoutUserInputObjectSchema } from '../internals';;
import { PickupCreateWithoutUserInputObjectSchema } from '../internals';;
import { PickupUncheckedCreateWithoutUserInputObjectSchema } from '../internals';

export const PickupUpsertWithWhereUniqueWithoutUserInputObjectSchema = Yup.object({
    where: PickupWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([PickupUpdateWithoutUserInputObjectSchema,
PickupUncheckedUpdateWithoutUserInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([PickupCreateWithoutUserInputObjectSchema,
PickupUncheckedCreateWithoutUserInputObjectSchema])
});
