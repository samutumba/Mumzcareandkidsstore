// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedFloatNullableFilterObjectSchema } from '../internals';

export const FloatNullableFilterObjectSchema = Yup.object({
    equals: Yup.mixed().oneOfSchemas([Yup.number()]),  in: Yup.mixed().oneOfSchemas([Yup.array().of(Yup.number())]),  notIn: Yup.mixed().oneOfSchemas([Yup.array().of(Yup.number())]),  lt: Yup.number(),  lte: Yup.number(),  gt: Yup.number(),  gte: Yup.number(),  not: Yup.mixed().oneOfSchemas([Yup.number(),
NestedFloatNullableFilterObjectSchema]),  isSet: Yup.boolean()
});
