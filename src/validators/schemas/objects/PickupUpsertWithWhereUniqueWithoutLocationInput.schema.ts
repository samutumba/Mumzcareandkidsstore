// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PickupWhereUniqueInputObjectSchema } from '../internals';;
import { PickupUpdateWithoutLocationInputObjectSchema } from '../internals';;
import { PickupUncheckedUpdateWithoutLocationInputObjectSchema } from '../internals';;
import { PickupCreateWithoutLocationInputObjectSchema } from '../internals';;
import { PickupUncheckedCreateWithoutLocationInputObjectSchema } from '../internals';

export const PickupUpsertWithWhereUniqueWithoutLocationInputObjectSchema = Yup.object({
    where: PickupWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([PickupUpdateWithoutLocationInputObjectSchema,
PickupUncheckedUpdateWithoutLocationInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([PickupCreateWithoutLocationInputObjectSchema,
PickupUncheckedCreateWithoutLocationInputObjectSchema])
});
