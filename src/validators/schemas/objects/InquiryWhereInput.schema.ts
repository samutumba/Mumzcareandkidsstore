// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { IntFilterObjectSchema } from '../internals';;
import { FeedbackListRelationFilterObjectSchema } from '../internals';;
import { UserRelationFilterObjectSchema } from '../internals';;
import { UserWhereInputObjectSchema } from '../internals';;
import { BoolFilterObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';;
import { StringNullableFilterObjectSchema } from '../internals';

export const InquiryWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => InquiryWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => InquiryWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => InquiryWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => InquiryWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => InquiryWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  v: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  category: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  contact: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  feedback: FeedbackListRelationFilterObjectSchema,  message: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  name: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  reference: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  user: Yup.mixed().oneOfSchemas([UserRelationFilterObjectSchema,
UserWhereInputObjectSchema]),  responded: Yup.mixed().oneOfSchemas([BoolFilterObjectSchema,
Yup.boolean()]),  type: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  usersId: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()])
});
