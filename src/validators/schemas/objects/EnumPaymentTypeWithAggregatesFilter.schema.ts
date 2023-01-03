// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedEnumPaymentTypeWithAggregatesFilterObjectSchema } from '../internals';;
import { NestedIntFilterObjectSchema } from '../internals';;
import { NestedEnumPaymentTypeFilterObjectSchema } from '../internals';

export const EnumPaymentTypeWithAggregatesFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([NestedEnumPaymentTypeWithAggregatesFilterObjectSchema]),  _count: NestedIntFilterObjectSchema,  _min: NestedEnumPaymentTypeFilterObjectSchema,  _max: NestedEnumPaymentTypeFilterObjectSchema
});
