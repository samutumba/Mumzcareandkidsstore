// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { JsonFilterObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';

export const ErrorWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => ErrorWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => ErrorWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => ErrorWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => ErrorWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => ErrorWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  message: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  content: JsonFilterObjectSchema,  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema])
});
