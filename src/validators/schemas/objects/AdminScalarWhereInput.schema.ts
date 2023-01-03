// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { IntFilterObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';;
import { BoolFilterObjectSchema } from '../internals';;
import { StringNullableFilterObjectSchema } from '../internals';;
import { StringNullableListFilterObjectSchema } from '../internals';

export const AdminScalarWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => AdminScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => AdminScalarWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => AdminScalarWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => AdminScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => AdminScalarWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  v: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  email: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  employed: Yup.mixed().oneOfSchemas([BoolFilterObjectSchema,
Yup.boolean()]),  name: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  password: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  phone: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  role: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  filesId: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  eventsId: StringNullableListFilterObjectSchema
});
