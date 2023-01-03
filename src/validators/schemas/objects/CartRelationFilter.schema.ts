// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CartWhereInputObjectSchema } from '../internals';

export const CartRelationFilterObjectSchema = Yup.object({
    is: Yup.mixed().oneOfSchemas([CartWhereInputObjectSchema]),  isNot: Yup.mixed().oneOfSchemas([CartWhereInputObjectSchema])
});
