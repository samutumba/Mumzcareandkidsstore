// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ProductUpdateWithoutImagesInputObjectSchema } from '../internals';;
import { ProductUncheckedUpdateWithoutImagesInputObjectSchema } from '../internals';;
import { ProductCreateWithoutImagesInputObjectSchema } from '../internals';;
import { ProductUncheckedCreateWithoutImagesInputObjectSchema } from '../internals';

export const ProductUpsertWithoutImagesInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([ProductUpdateWithoutImagesInputObjectSchema,
ProductUncheckedUpdateWithoutImagesInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([ProductCreateWithoutImagesInputObjectSchema,
ProductUncheckedCreateWithoutImagesInputObjectSchema])
});
