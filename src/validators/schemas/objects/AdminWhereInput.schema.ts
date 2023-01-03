// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { IntFilterObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';;
import { BoolFilterObjectSchema } from '../internals';;
import { FileRelationFilterObjectSchema } from '../internals';;
import { FileWhereInputObjectSchema } from '../internals';;
import { StringNullableFilterObjectSchema } from '../internals';;
import { FeedbackListRelationFilterObjectSchema } from '../internals';;
import { EventListRelationFilterObjectSchema } from '../internals';;
import { StringNullableListFilterObjectSchema } from '../internals';

export const AdminWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => AdminWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => AdminWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => AdminWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => AdminWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => AdminWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  v: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  email: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  employed: Yup.mixed().oneOfSchemas([BoolFilterObjectSchema,
Yup.boolean()]),  name: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  password: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  phone: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  profile: Yup.mixed().oneOfSchemas([FileRelationFilterObjectSchema,
FileWhereInputObjectSchema]),  role: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  filesId: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  feedbacks: FeedbackListRelationFilterObjectSchema,  events: EventListRelationFilterObjectSchema,  eventsId: StringNullableListFilterObjectSchema
});
