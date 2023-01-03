// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PickupWhereUniqueInputObjectSchema } from '../internals';;
import { PickupUpdateWithoutUserInputObjectSchema } from '../internals';;
import { PickupUncheckedUpdateWithoutUserInputObjectSchema } from '../internals';

export const PickupUpdateWithWhereUniqueWithoutUserInputObjectSchema = Yup.object({
    where: PickupWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([PickupUpdateWithoutUserInputObjectSchema,
PickupUncheckedUpdateWithoutUserInputObjectSchema])
});
