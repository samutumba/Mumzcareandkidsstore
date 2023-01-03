// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { WishlistWhereInputObjectSchema } from '../internals';

export const WishlistListRelationFilterObjectSchema = Yup.object({
    every: WishlistWhereInputObjectSchema,  some: WishlistWhereInputObjectSchema,  none: WishlistWhereInputObjectSchema
});
