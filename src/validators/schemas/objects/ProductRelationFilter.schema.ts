// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ProductWhereInputObjectSchema } from '../internals';

export const ProductRelationFilterObjectSchema = Yup.object({
    is: ProductWhereInputObjectSchema,  isNot: ProductWhereInputObjectSchema
});
