// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LocationCreateWithoutImagesInputObjectSchema } from '../internals';;
import { LocationUncheckedCreateWithoutImagesInputObjectSchema } from '../internals';;
import { LocationCreateOrConnectWithoutImagesInputObjectSchema } from '../internals';;
import { LocationWhereUniqueInputObjectSchema } from '../internals';

export const LocationCreateNestedOneWithoutImagesInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([LocationCreateWithoutImagesInputObjectSchema,
LocationUncheckedCreateWithoutImagesInputObjectSchema]),  connectOrCreate: LocationCreateOrConnectWithoutImagesInputObjectSchema,  connect: LocationWhereUniqueInputObjectSchema
});
