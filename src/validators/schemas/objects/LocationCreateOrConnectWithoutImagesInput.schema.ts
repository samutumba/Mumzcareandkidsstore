// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LocationWhereUniqueInputObjectSchema } from '../internals';;
import { LocationCreateWithoutImagesInputObjectSchema } from '../internals';;
import { LocationUncheckedCreateWithoutImagesInputObjectSchema } from '../internals';

export const LocationCreateOrConnectWithoutImagesInputObjectSchema = Yup.object({
    where: LocationWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([LocationCreateWithoutImagesInputObjectSchema,
LocationUncheckedCreateWithoutImagesInputObjectSchema])
});
