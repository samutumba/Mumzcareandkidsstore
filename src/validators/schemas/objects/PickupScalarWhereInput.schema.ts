// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { IntFilterObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';

export const PickupScalarWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => PickupScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => PickupScalarWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => PickupScalarWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => PickupScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => PickupScalarWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  v: Yup.mixed().oneOfSchemas([IntFilterObjectSchema,
Yup.number()]),  service: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  status: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  contact: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  note: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  locationsId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  usersId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()])
});
