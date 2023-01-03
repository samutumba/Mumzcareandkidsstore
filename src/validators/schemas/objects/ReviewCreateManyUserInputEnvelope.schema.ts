// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ReviewCreateManyUserInputObjectSchema } from '../internals';

export const ReviewCreateManyUserInputEnvelopeObjectSchema = Yup.object({
    data: Yup.array().of(ReviewCreateManyUserInputObjectSchema)
});
