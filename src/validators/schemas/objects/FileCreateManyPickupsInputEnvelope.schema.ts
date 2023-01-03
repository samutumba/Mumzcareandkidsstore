// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FileCreateManyPickupsInputObjectSchema } from '../internals';

export const FileCreateManyPickupsInputEnvelopeObjectSchema = Yup.object({
    data: Yup.array().of(FileCreateManyPickupsInputObjectSchema)
});
