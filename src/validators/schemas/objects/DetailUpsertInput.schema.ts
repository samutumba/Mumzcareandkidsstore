// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { DetailCreateInputObjectSchema } from '../internals';;
import { DetailUpdateInputObjectSchema } from '../internals';

export const DetailUpsertInputObjectSchema = Yup.object({
    set: Yup.mixed().oneOfSchemas([DetailCreateInputObjectSchema]),  update: DetailUpdateInputObjectSchema
});
