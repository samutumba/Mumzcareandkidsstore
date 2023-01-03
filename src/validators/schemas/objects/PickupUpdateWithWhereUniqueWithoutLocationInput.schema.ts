// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PickupWhereUniqueInputObjectSchema } from '../internals';;
import { PickupUpdateWithoutLocationInputObjectSchema } from '../internals';;
import { PickupUncheckedUpdateWithoutLocationInputObjectSchema } from '../internals';

export const PickupUpdateWithWhereUniqueWithoutLocationInputObjectSchema = Yup.object({
    where: PickupWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([PickupUpdateWithoutLocationInputObjectSchema,
PickupUncheckedUpdateWithoutLocationInputObjectSchema])
});
