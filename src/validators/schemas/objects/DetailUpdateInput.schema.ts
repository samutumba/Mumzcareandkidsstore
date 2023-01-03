// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { DetailValueListUpdateEnvelopeInputObjectSchema } from '../internals';;
import { DetailValueCreateInputObjectSchema } from '../internals';

export const DetailUpdateInputObjectSchema = Yup.object({
    color: Yup.mixed().oneOfSchemas([DetailValueListUpdateEnvelopeInputObjectSchema,
DetailValueCreateInputObjectSchema,
Yup.array().of(DetailValueCreateInputObjectSchema)]),  material: Yup.mixed().oneOfSchemas([DetailValueListUpdateEnvelopeInputObjectSchema,
DetailValueCreateInputObjectSchema,
Yup.array().of(DetailValueCreateInputObjectSchema)]),  model: Yup.mixed().oneOfSchemas([DetailValueListUpdateEnvelopeInputObjectSchema,
DetailValueCreateInputObjectSchema,
Yup.array().of(DetailValueCreateInputObjectSchema)]),  size: Yup.mixed().oneOfSchemas([DetailValueListUpdateEnvelopeInputObjectSchema,
DetailValueCreateInputObjectSchema,
Yup.array().of(DetailValueCreateInputObjectSchema)])
});
