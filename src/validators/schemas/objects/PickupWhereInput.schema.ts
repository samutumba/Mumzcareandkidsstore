// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { IntFilterObjectSchema } from '../internals';;
import { LocationRelationFilterObjectSchema } from '../internals';;
import { LocationWhereInputObjectSchema } from '../internals';;
import { FileListRelationFilterObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';;
import { UserRelationFilterObjectSchema } from '../internals';;
import { UserWhereInputObjectSchema } from '../internals';

export const PickupWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => PickupWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => PickupWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => PickupWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => PickupWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => PickupWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  v: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  location: Yup.mixed().oneOfSchemas([LocationRelationFilterObjectSchema,
LocationWhereInputObjectSchema]),  files: FileListRelationFilterObjectSchema,  service: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  status: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  user: Yup.mixed().oneOfSchemas([UserRelationFilterObjectSchema,
UserWhereInputObjectSchema]),  contact: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  note: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  locationsId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  usersId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()])
});
