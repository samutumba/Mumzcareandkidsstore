// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartItemWhereInputObjectSchema } from '../internals';

export const CartItemListRelationFilterObjectSchema = Yup.object({
    every: CartItemWhereInputObjectSchema,  some: CartItemWhereInputObjectSchema,  none: CartItemWhereInputObjectSchema
});
