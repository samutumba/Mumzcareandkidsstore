// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedIntFilterObjectSchema } from '../internals';;
import { NestedFloatFilterObjectSchema } from '../internals';

export const NestedIntWithAggregatesFilterObjectSchema = Yup.object({
    equals: Yup.number(),  in: Yup.array().of(Yup.number()),  notIn: Yup.array().of(Yup.number()),  lt: Yup.number(),  lte: Yup.number(),  gt: Yup.number(),  gte: Yup.number(),  not: Yup.mixed().oneOfSchemas([Yup.number(),
Yup.lazy(() => NestedIntWithAggregatesFilterObjectSchema.default(undefined))]),  _count: NestedIntFilterObjectSchema,  _avg: NestedFloatFilterObjectSchema,  _sum: NestedIntFilterObjectSchema,  _min: NestedIntFilterObjectSchema,  _max: NestedIntFilterObjectSchema
});
