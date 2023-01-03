// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringNullableFilterObjectSchema } from '../internals';

export const CartDetailWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => CartDetailWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => CartDetailWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => CartDetailWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => CartDetailWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => CartDetailWhereInputObjectSchema.default(undefined)))]),  color: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  material: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  model: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  size: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()])
});
