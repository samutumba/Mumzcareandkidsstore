// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { AdminRelationFilterObjectSchema } from '../internals';;
import { AdminWhereInputObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';;
import { InquiryRelationFilterObjectSchema } from '../internals';;
import { InquiryWhereInputObjectSchema } from '../internals';;
import { StringNullableFilterObjectSchema } from '../internals';

export const FeedbackWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => FeedbackWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => FeedbackWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => FeedbackWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => FeedbackWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => FeedbackWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  admin: Yup.mixed().oneOfSchemas([AdminRelationFilterObjectSchema,
AdminWhereInputObjectSchema]),  message: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  inquiries: Yup.mixed().oneOfSchemas([InquiryRelationFilterObjectSchema,
InquiryWhereInputObjectSchema]),  inquiriesId: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  adminsId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()])
});
