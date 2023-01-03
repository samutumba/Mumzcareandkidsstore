// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringNullableFilterObjectSchema } from '../internals';;
import { StringFilterObjectSchema } from '../internals';

export const DeliveryLocationWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => DeliveryLocationWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => DeliveryLocationWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => DeliveryLocationWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => DeliveryLocationWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => DeliveryLocationWhereInputObjectSchema.default(undefined)))]),  lgt: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  lat: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  note: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  district: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  town: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  street: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  country: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()])
});
