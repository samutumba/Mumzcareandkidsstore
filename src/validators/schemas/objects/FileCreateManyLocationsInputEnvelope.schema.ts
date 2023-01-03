// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FileCreateManyLocationsInputObjectSchema } from '../internals';

export const FileCreateManyLocationsInputEnvelopeObjectSchema = Yup.object({
    data: Yup.array().of(FileCreateManyLocationsInputObjectSchema)
});
