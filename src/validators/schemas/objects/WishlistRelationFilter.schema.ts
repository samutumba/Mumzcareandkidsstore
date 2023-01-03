// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { WishlistWhereInputObjectSchema } from '../internals';

export const WishlistRelationFilterObjectSchema = Yup.object({
    is: Yup.mixed().oneOfSchemas([WishlistWhereInputObjectSchema]),  isNot: Yup.mixed().oneOfSchemas([WishlistWhereInputObjectSchema])
});
