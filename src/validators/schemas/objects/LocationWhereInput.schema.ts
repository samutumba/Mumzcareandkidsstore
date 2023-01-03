// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { IntFilterObjectSchema } from '../internals';;
import { StringNullableListFilterObjectSchema } from '../internals';;
import { FileListRelationFilterObjectSchema } from '../internals';;
import { BoolFilterObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';;
import { PickupListRelationFilterObjectSchema } from '../internals';

export const LocationWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => LocationWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => LocationWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => LocationWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => LocationWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => LocationWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  v: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  address: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  email: StringNullableListFilterObjectSchema,  images: FileListRelationFilterObjectSchema,  isStore: Yup.mixed().oneOfSchemas([BoolFilterObjectSchema,
Yup.boolean()]),  maps: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  name: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  phone: StringNullableListFilterObjectSchema,  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  pickups: PickupListRelationFilterObjectSchema
});
