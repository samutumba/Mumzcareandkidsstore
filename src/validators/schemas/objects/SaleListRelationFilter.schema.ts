// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SaleWhereInputObjectSchema } from '../internals';

export const SaleListRelationFilterObjectSchema = Yup.object({
    every: SaleWhereInputObjectSchema,  some: SaleWhereInputObjectSchema,  none: SaleWhereInputObjectSchema
});
