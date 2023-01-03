// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { FileWhereInputObjectSchema } from '../internals';

export const FileRelationFilterObjectSchema = Yup.object({
    is: Yup.mixed().oneOfSchemas([FileWhereInputObjectSchema]),  isNot: Yup.mixed().oneOfSchemas([FileWhereInputObjectSchema])
});
