// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ProductUpdateWithoutReviewsInputObjectSchema } from '../internals';;
import { ProductUncheckedUpdateWithoutReviewsInputObjectSchema } from '../internals';;
import { ProductCreateWithoutReviewsInputObjectSchema } from '../internals';;
import { ProductUncheckedCreateWithoutReviewsInputObjectSchema } from '../internals';

export const ProductUpsertWithoutReviewsInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([ProductUpdateWithoutReviewsInputObjectSchema,
ProductUncheckedUpdateWithoutReviewsInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([ProductCreateWithoutReviewsInputObjectSchema,
ProductUncheckedCreateWithoutReviewsInputObjectSchema])
});
