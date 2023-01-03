// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';;
import { StringNullableFilterObjectSchema } from '../internals';

export const FileScalarWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => FileScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => FileScalarWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => FileScalarWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => FileScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => FileScalarWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  fileKey: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  link: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  type: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  eventsId: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  deliveriesId: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  pickupsId: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  locationsId: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  productsId: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()])
});
