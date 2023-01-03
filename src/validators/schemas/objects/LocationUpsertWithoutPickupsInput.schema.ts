// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LocationUpdateWithoutPickupsInputObjectSchema } from '../internals';;
import { LocationUncheckedUpdateWithoutPickupsInputObjectSchema } from '../internals';;
import { LocationCreateWithoutPickupsInputObjectSchema } from '../internals';;
import { LocationUncheckedCreateWithoutPickupsInputObjectSchema } from '../internals';

export const LocationUpsertWithoutPickupsInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([LocationUpdateWithoutPickupsInputObjectSchema,
LocationUncheckedUpdateWithoutPickupsInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([LocationCreateWithoutPickupsInputObjectSchema,
LocationUncheckedCreateWithoutPickupsInputObjectSchema])
});
