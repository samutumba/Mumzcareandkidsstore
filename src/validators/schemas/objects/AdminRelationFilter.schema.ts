// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { AdminWhereInputObjectSchema } from '../internals';

export const AdminRelationFilterObjectSchema = Yup.object({
    is: AdminWhereInputObjectSchema,  isNot: AdminWhereInputObjectSchema
});
