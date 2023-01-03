// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { DetailValueObjectEqualityInputObjectSchema } from '../internals';

export const DetailObjectEqualityInputObjectSchema = Yup.object({
    color: Yup.array().of(DetailValueObjectEqualityInputObjectSchema),  material: Yup.array().of(DetailValueObjectEqualityInputObjectSchema),  model: Yup.array().of(DetailValueObjectEqualityInputObjectSchema),  size: Yup.array().of(DetailValueObjectEqualityInputObjectSchema)
});
