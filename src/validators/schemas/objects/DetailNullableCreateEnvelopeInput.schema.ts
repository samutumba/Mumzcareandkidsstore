// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { DetailCreateInputObjectSchema } from '../internals';

export const DetailNullableCreateEnvelopeInputObjectSchema = Yup.object({
    set: Yup.mixed().oneOfSchemas([DetailCreateInputObjectSchema])
});
