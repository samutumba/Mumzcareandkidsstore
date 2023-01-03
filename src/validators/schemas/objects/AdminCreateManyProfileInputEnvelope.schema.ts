// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { AdminCreateManyProfileInputObjectSchema } from '../internals';

export const AdminCreateManyProfileInputEnvelopeObjectSchema = Yup.object({
    data: Yup.array().of(AdminCreateManyProfileInputObjectSchema)
});
