// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { IntFilterObjectSchema } from '../internals';;
import { FileListRelationFilterObjectSchema } from '../internals';;
import { BoolFilterObjectSchema } from '../internals';;
import { DateTimeNullableFilterObjectSchema } from '../internals';;
import { StringNullableListFilterObjectSchema } from '../internals';;
import { AdminListRelationFilterObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';

export const EventWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => EventWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => EventWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => EventWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => EventWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => EventWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  v: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  files: FileListRelationFilterObjectSchema,  completed: Yup.mixed().oneOfSchemas([BoolFilterObjectSchema,
Yup.boolean()]),  description: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  endDate: Yup.mixed().oneOfSchemas([DateTimeNullableFilterObjectSchema]),  participantsID: StringNullableListFilterObjectSchema,  participants: AdminListRelationFilterObjectSchema,  startDate: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  title: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema])
});
