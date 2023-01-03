// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';;
import { StringNullableFilterObjectSchema } from '../internals';

export const FeedbackScalarWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => FeedbackScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => FeedbackScalarWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => FeedbackScalarWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => FeedbackScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => FeedbackScalarWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  message: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  inquiriesId: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  adminsId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()])
});
