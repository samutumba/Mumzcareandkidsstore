// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ItemWhereInputObjectSchema } from '../internals';

export const ItemListRelationFilterObjectSchema = Yup.object({
    every: ItemWhereInputObjectSchema,  some: ItemWhereInputObjectSchema,  none: ItemWhereInputObjectSchema
});
