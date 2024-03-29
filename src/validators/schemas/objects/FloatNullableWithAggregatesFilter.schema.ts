// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedFloatNullableWithAggregatesFilterObjectSchema } from '../internals';;
import { NestedIntNullableFilterObjectSchema } from '../internals';;
import { NestedFloatNullableFilterObjectSchema } from '../internals';

export const FloatNullableWithAggregatesFilterObjectSchema = Yup.object({
    equals: Yup.mixed().oneOfSchemas([Yup.number()]),  in: Yup.mixed().oneOfSchemas([Yup.array().of(Yup.number())]),  notIn: Yup.mixed().oneOfSchemas([Yup.array().of(Yup.number())]),  lt: Yup.number(),  lte: Yup.number(),  gt: Yup.number(),  gte: Yup.number(),  not: Yup.mixed().oneOfSchemas([Yup.number(),
NestedFloatNullableWithAggregatesFilterObjectSchema]),  _count: NestedIntNullableFilterObjectSchema,  _avg: NestedFloatNullableFilterObjectSchema,  _sum: NestedFloatNullableFilterObjectSchema,  _min: NestedFloatNullableFilterObjectSchema,  _max: NestedFloatNullableFilterObjectSchema,  isSet: Yup.boolean()
});
