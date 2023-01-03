// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartDetailCreateInputObjectSchema } from '../internals';

export const CartDetailNullableCreateEnvelopeInputObjectSchema = Yup.object({
    set: Yup.mixed().oneOfSchemas([CartDetailCreateInputObjectSchema])
});
