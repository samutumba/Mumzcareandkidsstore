// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FileCreateManyDeliveriesInputObjectSchema } from '../internals';

export const FileCreateManyDeliveriesInputEnvelopeObjectSchema = Yup.object({
    data: Yup.array().of(FileCreateManyDeliveriesInputObjectSchema)
});
