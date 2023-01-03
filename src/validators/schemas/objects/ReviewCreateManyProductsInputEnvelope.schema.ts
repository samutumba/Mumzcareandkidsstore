// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ReviewCreateManyProductsInputObjectSchema } from '../internals';

export const ReviewCreateManyProductsInputEnvelopeObjectSchema = Yup.object({
    data: Yup.array().of(ReviewCreateManyProductsInputObjectSchema)
});
