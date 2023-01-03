// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { DetailCreateInputObjectSchema } from '../internals';;
import { DetailUpsertInputObjectSchema } from '../internals';

export const DetailNullableUpdateEnvelopeInputObjectSchema = Yup.object({
    set: Yup.mixed().oneOfSchemas([DetailCreateInputObjectSchema]),  upsert: DetailUpsertInputObjectSchema,  unset: Yup.boolean()
});
