// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartDetailCreateInputObjectSchema } from '../internals';;
import { CartDetailUpsertInputObjectSchema } from '../internals';

export const CartDetailNullableUpdateEnvelopeInputObjectSchema = Yup.object({
    set: Yup.mixed().oneOfSchemas([CartDetailCreateInputObjectSchema]),  upsert: CartDetailUpsertInputObjectSchema,  unset: Yup.boolean()
});
