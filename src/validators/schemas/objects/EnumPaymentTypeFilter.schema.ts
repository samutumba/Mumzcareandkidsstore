// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedEnumPaymentTypeFilterObjectSchema } from '../internals';

export const EnumPaymentTypeFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([NestedEnumPaymentTypeFilterObjectSchema])
});
