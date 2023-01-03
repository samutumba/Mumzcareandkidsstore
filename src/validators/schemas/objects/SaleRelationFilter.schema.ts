// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SaleWhereInputObjectSchema } from '../internals';

export const SaleRelationFilterObjectSchema = Yup.object({
    is: Yup.mixed().oneOfSchemas([SaleWhereInputObjectSchema]),  isNot: Yup.mixed().oneOfSchemas([SaleWhereInputObjectSchema])
});
