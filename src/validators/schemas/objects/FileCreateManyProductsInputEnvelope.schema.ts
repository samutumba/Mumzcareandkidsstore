// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FileCreateManyProductsInputObjectSchema } from '../internals';

export const FileCreateManyProductsInputEnvelopeObjectSchema = Yup.object({
    data: Yup.array().of(FileCreateManyProductsInputObjectSchema)
});
