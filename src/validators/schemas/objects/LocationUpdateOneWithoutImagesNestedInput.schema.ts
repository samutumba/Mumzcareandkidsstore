// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LocationCreateWithoutImagesInputObjectSchema } from '../internals';;
import { LocationUncheckedCreateWithoutImagesInputObjectSchema } from '../internals';;
import { LocationCreateOrConnectWithoutImagesInputObjectSchema } from '../internals';;
import { LocationUpsertWithoutImagesInputObjectSchema } from '../internals';;
import { LocationWhereUniqueInputObjectSchema } from '../internals';;
import { LocationUpdateWithoutImagesInputObjectSchema } from '../internals';;
import { LocationUncheckedUpdateWithoutImagesInputObjectSchema } from '../internals';

export const LocationUpdateOneWithoutImagesNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([LocationCreateWithoutImagesInputObjectSchema,
LocationUncheckedCreateWithoutImagesInputObjectSchema]),  connectOrCreate: LocationCreateOrConnectWithoutImagesInputObjectSchema,  upsert: LocationUpsertWithoutImagesInputObjectSchema,  disconnect: Yup.boolean(),  delete: Yup.boolean(),  connect: LocationWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([LocationUpdateWithoutImagesInputObjectSchema,
LocationUncheckedUpdateWithoutImagesInputObjectSchema])
});
