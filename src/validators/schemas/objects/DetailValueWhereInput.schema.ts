// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { FloatFilterObjectSchema } from '../internals';

export const DetailValueWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => DetailValueWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => DetailValueWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => DetailValueWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => DetailValueWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => DetailValueWhereInputObjectSchema.default(undefined)))]),  name: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  valueAdd: Yup.mixed().oneOfSchemas([FloatFilterObjectSchema,
Yup.number()])
});
