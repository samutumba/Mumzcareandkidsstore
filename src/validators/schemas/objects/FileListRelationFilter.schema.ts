// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FileWhereInputObjectSchema } from '../internals';

export const FileListRelationFilterObjectSchema = Yup.object({
    every: FileWhereInputObjectSchema,  some: FileWhereInputObjectSchema,  none: FileWhereInputObjectSchema
});
