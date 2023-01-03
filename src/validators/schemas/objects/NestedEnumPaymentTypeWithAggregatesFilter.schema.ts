// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedIntFilterObjectSchema } from '../internals';;
import { NestedEnumPaymentTypeFilterObjectSchema } from '../internals';

export const NestedEnumPaymentTypeWithAggregatesFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([Yup.lazy(() => NestedEnumPaymentTypeWithAggregatesFilterObjectSchema.default(undefined))]),  _count: NestedIntFilterObjectSchema,  _min: NestedEnumPaymentTypeFilterObjectSchema,  _max: NestedEnumPaymentTypeFilterObjectSchema
});
