// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { DetailValueCreateInputObjectSchema } from '../internals';

export const DetailCreateInputObjectSchema = Yup.object({
    color: Yup.mixed().oneOfSchemas([DetailValueCreateInputObjectSchema,
Yup.array().of(DetailValueCreateInputObjectSchema)]),  material: Yup.mixed().oneOfSchemas([DetailValueCreateInputObjectSchema,
Yup.array().of(DetailValueCreateInputObjectSchema)]),  model: Yup.mixed().oneOfSchemas([DetailValueCreateInputObjectSchema,
Yup.array().of(DetailValueCreateInputObjectSchema)]),  size: Yup.mixed().oneOfSchemas([DetailValueCreateInputObjectSchema,
Yup.array().of(DetailValueCreateInputObjectSchema)])
});
