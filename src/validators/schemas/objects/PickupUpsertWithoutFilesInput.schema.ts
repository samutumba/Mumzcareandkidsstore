// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PickupUpdateWithoutFilesInputObjectSchema } from '../internals';;
import { PickupUncheckedUpdateWithoutFilesInputObjectSchema } from '../internals';;
import { PickupCreateWithoutFilesInputObjectSchema } from '../internals';;
import { PickupUncheckedCreateWithoutFilesInputObjectSchema } from '../internals';

export const PickupUpsertWithoutFilesInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([PickupUpdateWithoutFilesInputObjectSchema,
PickupUncheckedUpdateWithoutFilesInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([PickupCreateWithoutFilesInputObjectSchema,
PickupUncheckedCreateWithoutFilesInputObjectSchema])
});
