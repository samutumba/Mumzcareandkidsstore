// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FileCreateManyEventsInputObjectSchema } from '../internals';

export const FileCreateManyEventsInputEnvelopeObjectSchema = Yup.object({
    data: Yup.array().of(FileCreateManyEventsInputObjectSchema)
});
