// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartWhereInputObjectSchema } from '../internals';

export const CartListRelationFilterObjectSchema = Yup.object({
    every: CartWhereInputObjectSchema,  some: CartWhereInputObjectSchema,  none: CartWhereInputObjectSchema
});
