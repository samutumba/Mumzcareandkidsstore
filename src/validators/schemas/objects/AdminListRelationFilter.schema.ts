// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { AdminWhereInputObjectSchema } from '../internals';

export const AdminListRelationFilterObjectSchema = Yup.object({
    every: AdminWhereInputObjectSchema,  some: AdminWhereInputObjectSchema,  none: AdminWhereInputObjectSchema
});
