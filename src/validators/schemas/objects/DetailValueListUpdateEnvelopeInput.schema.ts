// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { DetailValueCreateInputObjectSchema } from '../internals';;
import { DetailValueUpdateManyInputObjectSchema } from '../internals';;
import { DetailValueDeleteManyInputObjectSchema } from '../internals';

export const DetailValueListUpdateEnvelopeInputObjectSchema = Yup.object({
    set: Yup.mixed().oneOfSchemas([DetailValueCreateInputObjectSchema,
Yup.array().of(DetailValueCreateInputObjectSchema)]),  push: Yup.mixed().oneOfSchemas([DetailValueCreateInputObjectSchema,
Yup.array().of(DetailValueCreateInputObjectSchema)]),  updateMany: DetailValueUpdateManyInputObjectSchema,  deleteMany: DetailValueDeleteManyInputObjectSchema
});
