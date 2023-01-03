// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LocationUpdateWithoutImagesInputObjectSchema } from '../internals';;
import { LocationUncheckedUpdateWithoutImagesInputObjectSchema } from '../internals';;
import { LocationCreateWithoutImagesInputObjectSchema } from '../internals';;
import { LocationUncheckedCreateWithoutImagesInputObjectSchema } from '../internals';

export const LocationUpsertWithoutImagesInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([LocationUpdateWithoutImagesInputObjectSchema,
LocationUncheckedUpdateWithoutImagesInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([LocationCreateWithoutImagesInputObjectSchema,
LocationUncheckedCreateWithoutImagesInputObjectSchema])
});
